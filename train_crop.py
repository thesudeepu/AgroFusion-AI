import os
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

df = pd.read_csv("data/Crop_recommendation.csv")
print("Total rows:", len(df))

X = df[["N", "P", "K", "temperature", "humidity", "ph", "rainfall"]]
y = df["label"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

print("Accuracy:", round(model.score(X_test, y_test) * 100, 2), "%")

os.makedirs("models", exist_ok=True)
joblib.dump(model, "models/crop_model.pkl")
print("Model saved: models/crop_model.pkl")