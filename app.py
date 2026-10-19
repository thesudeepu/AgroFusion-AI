from flask import Flask, request, jsonify, render_template, redirect, url_for
import joblib
import pandas as pd
import sqlite3
import os
import re
import time
import requests
from datetime import datetime, timezone, timedelta
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = "agrofusion_secret_key"

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# ================== AI CHAT SETTINGS ==================
def load_key():
    path = os.path.join(BASE_DIR, "api_key.txt")
    if os.path.exists(path):
        with open(path, encoding="utf-8-sig") as f:
            return f.read().strip().strip('"').strip("'")
    return os.environ.get("GEMINI_API_KEY", "").strip()


GEMINI_API_KEY = load_key()
GEMINI_MODEL = os.environ.get("GEMINI_MODEL", "gemini-3.8-flash")
MODELS = [GEMINI_MODEL, "gemini-flash-latest", "gemini-flash-lite-latest"]
BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/"

SYSTEM_PROMPT = (
    "ನೀವು AgroFusion AI, ರೈತರಿಗೆ ಸಹಾಯ ಮಾಡುವ ಸ್ನೇಹಪರ ಸಹಾಯಕ. "
    "ಬೆಳೆ, ನೀರಾವರಿ, ಗೊಬ್ಬರ, ಕೀಟ, ಹವಾಮಾನ ಮತ್ತು ಕೃಷಿ ಬಗ್ಗೆ ಸರಳವಾಗಿ ಸಹಾಯ ಮಾಡಿ. "
    "ಬಳಕೆದಾರ ಯಾವ ಭಾಷೆಯಲ್ಲಿ ಕೇಳುತ್ತಾರೋ ಅದೇ ಭಾಷೆಯಲ್ಲಿ ಉತ್ತರಿಸಿ."
)
LANG_NAMES = {"kn": "Kannada", "hi": "Hindi", "en": "English"}

# Google Search is slow, so it is used only for questions needing live data
SEARCH_WORDS = [
    "today", "now", "current", "latest", "news", "price", "rate", "market",
    "weather", "rain", "forecast", "mandi", "msp", "scheme", "subsidy",
    "ಇಂದು", "ಈಗ", "ಇತ್ತೀಚಿನ", "ಸುದ್ದಿ", "ಬೆಲೆ", "ದರ", "ಮಾರುಕಟ್ಟೆ",
    "ಹವಾಮಾನ", "ಮಳೆ", "ಯೋಜನೆ", "ಸಬ್ಸಿಡಿ",
    "आज", "अभी", "ताज़ा", "समाचार", "भाव", "कीमत", "मंडी", "मौसम", "बारिश", "योजना",
]


def needs_search(text):
    t = (text or "").lower()
    return any(word in t for word in SEARCH_WORDS)


# One shared connection session (faster than a new connection every time)
http = requests.Session()
WORKING_MODEL = None


def current_time_text():
    ist = timezone(timedelta(hours=5, minutes=30))
    return datetime.now(ist).strftime("%A, %d %B %Y, %I:%M %p") + " (IST, India)"


# ================== CROP MODEL ==================
MODEL_PATH = os.path.join(BASE_DIR, "models", "crop_model.pkl")
crop_model = joblib.load(MODEL_PATH)


# ================== DATABASE ==================
def init_db():
    conn = sqlite3.connect(os.path.join(BASE_DIR, "agrofusion.db"))
    conn.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()


init_db()


# ================== MAIN PAGES ==================
@app.route("/")
@app.route("/index.html")
def home():
    return render_template("index.html")


@app.route("/weather")
def weather_page():
    return render_template("weather.html")


@app.route("/module")
@app.route("/module.html")
def module():
    return render_template("module.html")


@app.route("/dashboard")
@app.route("/dashboard.html")
def dashboard():
    return render_template("dashboard.html")


@app.route("/about")
@app.route("/about.html")
def about():
    return render_template("about.html")


# ================== LOGIN ==================
@app.route("/login", methods=["GET", "POST"])
@app.route("/login.html", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")

    email = request.form.get("email", "").strip()
    password = request.form.get("password", "")

    conn = sqlite3.connect(os.path.join(BASE_DIR, "agrofusion.db"))
    conn.row_factory = sqlite3.Row
    user = conn.execute(
        "SELECT * FROM users WHERE email = ?", (email,)
    ).fetchone()
    conn.close()

    if user and check_password_hash(user["password"], password):
        return redirect(url_for("module"))

    return "Login failed. Please check your email and password."


# ================== SIGNUP ==================
@app.route("/signup", methods=["GET", "POST"])
@app.route("/signup.html", methods=["GET", "POST"])
def signup():
    if request.method == "GET":
        return render_template("signup.html")

    name = request.form.get("name", "").strip()
    email = request.form.get("email", "").strip()
    password = request.form.get("password", "")

    if not name or not email or not password:
        return "Please fill in all fields."

    if len(password) < 6:
        return "Password must contain at least 6 characters."

    conn = sqlite3.connect(os.path.join(BASE_DIR, "agrofusion.db"))
    try:
        conn.execute(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            (name, email, generate_password_hash(password))
        )
        conn.commit()
    except sqlite3.IntegrityError:
        conn.close()
        return "This email is already registered. Please log in."

    conn.close()
    return redirect(url_for("login"))


# ================== CROP RECOMMENDATION API ==================
@app.route("/api/crop", methods=["POST"])
def crop():
    try:
        data = request.get_json(force=True)
        row = pd.DataFrame([{
            "N": float(data.get("N", 60)),
            "P": float(data.get("P", 40)),
            "K": float(data.get("K", 40)),
            "temperature": float(data.get("temperature", 25)),
            "humidity": float(data.get("humidity", 70)),
            "ph": float(data.get("ph", 6.5)),
            "rainfall": float(data.get("rainfall", 100))
        }])

        prediction = crop_model.predict(row)[0]
        confidence = round(max(crop_model.predict_proba(row)[0]) * 100, 1)

        return jsonify({"crop": str(prediction), "confidence": confidence})
    except Exception as error:
        return jsonify({"error": str(error)}), 400


# ================== PLACE SEARCH (any village / town / pincode) ==================
def _nominatim(q, limit=1):
    r = http.get(
        "https://nominatim.openstreetmap.org/search",
        params={"q": q, "format": "jsonv2", "limit": limit,
                "countrycodes": "in", "accept-language": "en"},
        headers={"User-Agent": "AgroFusionAI/1.0 (student project)"},
        timeout=10
    )
    r.raise_for_status()
    return r.json()


def _short_name(item, fallback):
    parts = [p.strip() for p in item.get("display_name", fallback).split(",")]
    return ", ".join(parts[:4])


def _search_variants(query):
    """Full text first, then fewer words, then each comma part."""
    query = (query or "").strip()
    pin = re.search(r"\b\d{6}\b", query)
    name_only = re.sub(r"\b\d{6}\b", "", query).strip(" ,")
    out = []

    def add(x):
        x = x.strip(" ,")
        if x and x not in out:
            out.append(x)

    if name_only and pin:
        add(name_only + ", " + pin.group(0))
    add(query)
    if pin:
        add(pin.group(0))

    words = name_only.replace(",", " ").split()
    for n in range(len(words), 0, -1):
        add(" ".join(words[:n]))
    for part in name_only.split(","):
        add(part)
    return out


def geocode_place(query):
    for q in _search_variants(query):
        try:
            results = _nominatim(q + ", India", 1)
            if results:
                it = results[0]
                return float(it["lat"]), float(it["lon"]), _short_name(it, q)
        except (requests.RequestException, ValueError, KeyError):
            continue

    # Backup: Open-Meteo
    try:
        geo = http.get(
            "https://geocoding-api.open-meteo.com/v1/search",
            params={"name": query, "count": 1, "language": "en", "format": "json"},
            timeout=10
        )
        geo.raise_for_status()
        places_found = geo.json().get("results", [])
        if places_found:
            p = places_found[0]
            name = p["name"]
            if p.get("admin1"):
                name += ", " + p["admin1"]
            if p.get("country"):
                name += ", " + p["country"]
            return p["latitude"], p["longitude"], name
    except (requests.RequestException, ValueError, KeyError):
        pass
    return None


@app.route("/api/places", methods=["GET"])
def places():
    """Up to 6 matching places so the user can pick the right village."""
    q = request.args.get("q", "").strip()
    if len(q) < 2:
        return jsonify({"places": []})

    found, seen = [], set()
    for variant in _search_variants(q):
        try:
            for it in _nominatim(variant + ", India", 6):
                key = (round(float(it["lat"]), 3), round(float(it["lon"]), 3))
                if key in seen:
                    continue
                seen.add(key)
                found.append({
                    "name": _short_name(it, variant),
                    "lat": float(it["lat"]),
                    "lon": float(it["lon"])
                })
        except (requests.RequestException, ValueError, KeyError):
            continue
        if len(found) >= 6:
            break
    return jsonify({"places": found[:6]})


# ================== WEATHER API ==================
@app.route("/api/weather", methods=["GET"])
def weather():
    try:
        city = request.args.get("city", "").strip()
        lat = request.args.get("lat", "").strip()
        lon = request.args.get("lon", "").strip()
        label = request.args.get("name", "").strip()

        if lat or lon:
            if not lat or not lon:
                return jsonify({"error": "Latitude and longitude are both required."}), 400
            latitude, longitude = float(lat), float(lon)
            if not (-90 <= latitude <= 90 and -180 <= longitude <= 180):
                return jsonify({"error": "Invalid coordinates."}), 400
            location_name = label or "Your current location"

        elif city:
            found = geocode_place(city)
            if not found:
                return jsonify({"error": "Place not found. Check the name or pincode."}), 404
            latitude, longitude, location_name = found
        else:
            return jsonify({"error": "Provide location coordinates or a city name."}), 400

        res = http.get(
            "https://api.open-meteo.com/v1/forecast",
            params={
                "latitude": latitude,
                "longitude": longitude,
                "current": "temperature_2m,relative_humidity_2m,precipitation,weather_code",
                "hourly": "precipitation_probability",
                "daily": "precipitation_probability_max",
                "forecast_days": 1,
                "timezone": "auto"
            },
            timeout=12
        )
        res.raise_for_status()
        data = res.json()
        current = data.get("current", {})
        hourly = data.get("hourly", {})
        daily = data.get("daily", {})

        rain_chance = None
        times = hourly.get("time", [])
        probabilities = hourly.get("precipitation_probability", [])
        if current.get("time") in times:
            idx = times.index(current["time"])
            if idx < len(probabilities):
                rain_chance = probabilities[idx]
        if rain_chance is None:
            daily_probs = daily.get("precipitation_probability_max", [])
            if daily_probs:
                rain_chance = daily_probs[0]

        return jsonify({
            "location": location_name,
            "latitude": latitude,
            "longitude": longitude,
            "temperature": current.get("temperature_2m"),
            "humidity": current.get("relative_humidity_2m"),
            "rainfall": current.get("precipitation"),
            "rain_chance": rain_chance,
            "weather_code": current.get("weather_code"),
            "unit": data.get("current_units", {}).get("temperature_2m", "°C"),
            "time": current.get("time")
        })

    except (requests.RequestException, ValueError, KeyError) as error:
        print("WEATHER ERROR:", error)
        return jsonify({"error": "Could not get weather. Check your internet connection."}), 502


# ================== AI CHAT API ==================
def call_gemini(payload):
    global WORKING_MODEL

    # Try the model that worked last time first
    order = list(MODELS)
    if WORKING_MODEL in order:
        order.remove(WORKING_MODEL)
        order.insert(0, WORKING_MODEL)

    last = None
    for model in order:
        url = BASE_URL + model + ":generateContent"
        for attempt in range(2):
            try:
                res = http.post(
                    url,
                    headers={
                        "x-goog-api-key": GEMINI_API_KEY,
                        "Content-Type": "application/json"
                    },
                    json=payload,
                    timeout=28
                )
            except requests.RequestException:
                time.sleep(0.4)
                continue

            last = res
            if res.status_code in (429, 500, 502, 503, 504):
                time.sleep(0.6)
                continue
            if res.status_code == 404:
                break
            if res.status_code == 200:
                WORKING_MODEL = model
            return res
    return last


@app.route("/chat", methods=["POST"])
def chat():
    if not GEMINI_API_KEY or not GEMINI_API_KEY.isascii():
        return jsonify({"error": "API key missing. Check api_key.txt."}), 500

    try:
        body = request.get_json(force=True)
        msgs = body.get("messages", [])[-10:]
        lang = body.get("lang", "")
        image_b64 = body.get("image")
        image_mime = body.get("mime", "image/jpeg")

        if image_b64 and image_b64.startswith("data:") and "," in image_b64:
            header, image_b64 = image_b64.split(",", 1)
            image_mime = header[5:].split(";")[0] or image_mime

        contents = []
        for m in msgs:
            role = "model" if m.get("role") == "assistant" else "user"
            contents.append({
                "role": role,
                "parts": [{"text": str(m.get("content", ""))}]
            })

        if image_b64 and contents:
            contents[-1]["parts"].insert(0, {
                "inline_data": {"mime_type": image_mime, "data": image_b64}
            })

        system_text = SYSTEM_PROMPT + " Current date and time: " + current_time_text()
        # Give complete, detailed answers (the old 120-word limit cut answers short)
        system_text += (
            " Give complete, detailed, step-by-step answers and always finish every point."
            " Use simple plain text with numbered points."
            " Do not use markdown symbols such as ** or # in the reply."
        )
        if lang in LANG_NAMES:
            system_text += " Reply in " + LANG_NAMES[lang] + "."

        payload = {
            "system_instruction": {"parts": [{"text": system_text}]},
            "contents": contents,
            # Kannada text uses many tokens, so the limit must be large
            "generationConfig": {"maxOutputTokens": 4096}
        }

        last_user_text = msgs[-1].get("content", "") if msgs else ""
        use_search = needs_search(last_user_text) and not image_b64
        if use_search:
            payload["tools"] = [{"google_search": {}}]

        res = call_gemini(payload)
        if use_search and res is not None and res.status_code in (400, 429, 503):
            payload.pop("tools", None)
            res = call_gemini(payload)

        if res is None:
            return jsonify({"error": "AI server could not be reached. Check internet."}), 500

        data = res.json()
        if res.status_code != 200:
            msg = data.get("error", {}).get("message", "Unknown error")
            print("GEMINI ERROR", res.status_code, msg)
            return jsonify({"error": "AI error: " + msg[:300]}), 500

        parts = data["candidates"][0]["content"]["parts"]
        reply = "".join(p.get("text", "") for p in parts).strip()
        if not reply:
            reply = "ಕ್ಷಮಿಸಿ, ಉತ್ತರ ಸಿಗಲಿಲ್ಲ. ಮತ್ತೊಮ್ಮೆ ಕೇಳಿ."

        return jsonify({"reply": reply})

    except Exception as error:
        return jsonify({"error": "AI connection failed: " + str(error)}), 500


if __name__ == "__main__":
    app.run(debug=True)