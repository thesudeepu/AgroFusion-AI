/* AgroFusion AI - Chat JavaScript (with hero-style language dropdown) */
(function () {
  "use strict";

  // Prevent duplicate initialization
  if (window.__afChatLoaded) return;
  window.__afChatLoaded = true;

  const LANGUAGES = {
    kn: {
      hello: "ನಮಸ್ಕಾರ! 🌱 ನಾನು AgroFusion AI. ಬೆಳೆ, ನೀರಾವರಿ, ಗೊಬ್ಬರ ಮತ್ತು ಕೀಟಗಳ ಬಗ್ಗೆ ಕೇಳಿ.",
      placeholder: "ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಕೇಳಿ...",
      waiting: "ಯೋಚಿಸುತ್ತಿದೆ...",
      speech: "kn-IN"
    },
    en: {
      hello: "Hello! 🌱 I'm AgroFusion AI. Ask me about crops, irrigation, fertilizer and pests.",
      placeholder: "Ask your question...",
      waiting: "Thinking...",
      speech: "en-IN"
    },
    hi: {
      hello: "नमस्ते! 🌱 मैं AgroFusion AI हूँ। फसल, सिंचाई, खाद और कीटों के बारे में पूछिए।",
      placeholder: "अपना सवाल पूछिए...",
      waiting: "सोच रहा हूँ...",
      speech: "hi-IN"
    }
  };

  let language = localStorage.getItem("af_lang") || "kn";
  if (!LANGUAGES[language]) language = "kn";

  let history = [];
  let selectedPhoto = null;
  let busy = false;
  let recognition = null;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  // Load chat stylesheet only once
  if (!document.querySelector("[data-af-chat-styles]")) {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "/static/chat.css";
    css.dataset.afChatStyles = "true";
    document.head.appendChild(css);
  }

  // Language dropdown styles (same glass look as the hero section dropdown, compact size)
  if (!document.querySelector("[data-af-ldd-styles]")) {
    const ddCss = document.createElement("style");
    ddCss.dataset.afLddStyles = "true";
    ddCss.textContent =
      ".af-ldd{position:relative;display:inline-block;flex-shrink:0}" +
      ".af-ldd .af-ldd-btn{display:flex;align-items:center;gap:8px;appearance:none;-webkit-appearance:none;" +
      "background:rgba(255,255,255,.08);color:#fff;border:1.5px solid rgba(110,231,160,.55);border-radius:999px;" +
      "padding:6px 12px;font-size:13px;font-weight:600;line-height:1.3;cursor:pointer;outline:none;" +
      "box-shadow:0 0 10px rgba(110,231,160,.25);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);transition:.2s}" +
      ".af-ldd .af-ldd-btn:hover,.af-ldd.is-open .af-ldd-btn{border-color:#6ee7a0;box-shadow:0 0 14px rgba(110,231,160,.5)}" +
      ".af-ldd .af-ldd-arrow{font-size:11px;transition:transform .2s}" +
      ".af-ldd.is-open .af-ldd-arrow{transform:rotate(180deg)}" +
      ".af-ldd .af-ldd-menu{display:none;position:absolute;top:calc(100% + 6px);right:0;left:auto;min-width:100%;" +
      "background:rgba(14,26,30,.97);border:1.5px solid rgba(110,231,160,.55);border-radius:18px;padding:5px;" +
      "box-shadow:0 12px 28px rgba(0,0,0,.5),0 0 16px rgba(110,231,160,.2);z-index:99999}" +
      ".af-ldd.is-open .af-ldd-menu{display:block}" +
      ".af-ldd .af-ldd-item{padding:8px 14px;color:#fff;background:transparent;border:1.5px solid transparent;" +
      "border-radius:999px;cursor:pointer;font-size:14px;font-weight:600;white-space:nowrap;transition:.15s}" +
      ".af-ldd .af-ldd-item:hover{background:rgba(110,231,160,.15)}" +
      ".af-ldd .af-ldd-item.is-active{color:#6ee7a0;border-color:#6ee7a0;background:transparent}" +
      '.af-ldd,.af-ldd *{font-family:"Noto Sans Kannada","Noto Sans Devanagari","Nirmala UI","Segoe UI",sans-serif !important;letter-spacing:0 !important}' +
      ".af-panel .af-head{overflow:visible !important}";
    document.head.appendChild(ddCss);
  }

  // Create floating AI button (hidden by CSS, kept for compatibility)
  const fab = element("button", "af-fab", "AI");
  fab.type = "button";
  fab.setAttribute("aria-label", "Open AgroFusion AI chat");
  fab.setAttribute("aria-expanded", "false");

  // Create chat panel
  const panel = element("section", "af-panel");
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "AgroFusion AI chat");
  panel.setAttribute("aria-hidden", "true");

  panel.innerHTML = `
    <div class="af-head">
      <span class="af-title">🌱 AgroFusion AI</span>

      <div class="af-ldd">
        <button type="button" class="af-ldd-btn" aria-label="Select language">
          <span class="af-ldd-label">ಕನ್ನಡ</span>
          <span class="af-ldd-arrow">▾</span>
        </button>
        <div class="af-ldd-menu">
          <div class="af-ldd-item" data-value="en">English</div>
          <div class="af-ldd-item" data-value="kn">ಕನ್ನಡ</div>
          <div class="af-ldd-item" data-value="hi">हिन्दी</div>
        </div>
      </div>

      <button type="button" class="af-clear"
        aria-label="Clear chat" title="Clear chat">🗑</button>

      <button type="button" class="af-close"
        aria-label="Close chat">✕</button>
    </div>

    <div class="af-msgs" aria-live="polite"></div>

    <div class="af-photo">
      <img alt="Selected photo">
      <span class="af-photo-txt">Photo selected</span>
      <button type="button" aria-label="Remove photo">✕</button>
    </div>

    <div class="af-form">
      <button type="button" class="af-cam"
        aria-label="Choose photo">📷</button>

      <input type="file" accept="image/*" hidden>

      <input type="text" class="af-input"
        placeholder="Ask your question..."
        autocomplete="off" aria-label="Your message">

      <button type="button" class="af-mic"
        aria-label="Voice input">🎤</button>

      <button type="button" class="af-send"
        aria-label="Send message">➤</button>
    </div>
  `;

  document.body.appendChild(fab);
  document.body.appendChild(panel);

  const find = selector => panel.querySelector(selector);
  const messages = find(".af-msgs");
  const input = find(".af-input");
  const fileInput = find('input[type="file"]');
  const photoBar = find(".af-photo");
  const micButton = find(".af-mic");

  // Language dropdown elements
  const langDD = find(".af-ldd");
  const langLabel = find(".af-ldd-label");
  const langItems = panel.querySelectorAll(".af-ldd-item");

  function setLangUI() {
    langItems.forEach(function (item) {
      const active = item.dataset.value === language;
      item.classList.toggle("is-active", active);
      if (active) langLabel.textContent = item.textContent;
    });
  }

  // Always start closed
  function closeChat() {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
    fab.setAttribute("aria-expanded", "false");
    fab.style.display = "";
    langDD.classList.remove("is-open");

    if (recognition) {
      try {
        recognition.stop();
      } catch (_) {}
    }
  }

  function openChat() {
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    fab.setAttribute("aria-expanded", "true");

    if (window.innerWidth <= 480) {
      fab.style.display = "none";
    }

    setTimeout(() => input.focus(), 150);
  }

  function applyLanguage() {
    const settings = LANGUAGES[language];
    input.placeholder = settings.placeholder;
    setLangUI();

    if (recognition) recognition.lang = settings.speech;
  }

  function addMessage(text, type, imageData) {
    const message = element("div", "af-msg " + type);

    if (imageData) {
      const image = document.createElement("img");
      image.src = imageData;
      image.alt = "Uploaded photo";
      message.appendChild(image);
    }

    message.appendChild(document.createTextNode(text));
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;

    return message;
  }

  function resetChat() {
    messages.innerHTML = "";
    history = [];
    addMessage(LANGUAGES[language].hello, "bot");
  }

  async function sendMessage() {
    let text = input.value.trim();

    if ((!text && !selectedPhoto) || busy) return;

    if (!text && selectedPhoto) {
      text = "Please analyze this image.";
    }

    busy = true;
    input.value = "";

    const imageData = selectedPhoto;
    selectedPhoto = null;
    photoBar.classList.remove("show");
    photoBar.querySelector("img").removeAttribute("src");

    addMessage(text, "user", imageData);
    history.push({ role: "user", content: text });

    const waiting = addMessage(
      LANGUAGES[language].waiting,
      "bot af-typing"
    );

    try {
      const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history,
          lang: language,
          image: imageData
        })
      });

      const result = await response.json();
      waiting.remove();

      if (!response.ok) {
        throw new Error(result.error || "Chat request failed");
      }

      if (result.reply) {
        addMessage(result.reply, "bot");
        history.push({
          role: "assistant",
          content: result.reply
        });
      } else {
        addMessage(result.error || "No response received.", "err");
      }
    } catch (error) {
      waiting.remove();
      addMessage(
        "Connection error. Please check your Flask server and /chat route.",
        "err"
      );
      console.error("AgroFusion chat error:", error);
    } finally {
      busy = false;
    }
  }

  function choosePhoto(file) {
    if (!file || !file.type.startsWith("image/")) {
      addMessage("Please choose a valid image.", "err");
      return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
      const image = new Image();

      image.onload = function () {
        const maxDimension = 1000;
        const scale = Math.min(
          1,
          maxDimension / Math.max(image.width, image.height)
        );

        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));

        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        selectedPhoto = canvas.toDataURL("image/jpeg", 0.8);

        photoBar.querySelector("img").src = selectedPhoto;
        photoBar.classList.add("show");
      };

      image.onerror = function () {
        addMessage("Unable to read this image.", "err");
      };

      image.src = event.target.result;
    };

    reader.readAsDataURL(file);
  }

  function startVoiceInput() {
    const SpeechAPI =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechAPI) {
      addMessage("Voice input is not supported in this browser.", "err");
      return;
    }

    if (recognition) {
      try {
        recognition.stop();
      } catch (_) {}
    }

    recognition = new SpeechAPI();
    recognition.lang = LANGUAGES[language].speech;
    recognition.interimResults = false;

    recognition.onstart = function () {
      micButton.classList.add("listening");
    };

    recognition.onresult = function (event) {
      const spokenText = event.results[0][0].transcript;
      input.value = (input.value + " " + spokenText).trim();
    };

    recognition.onerror = function (event) {
      console.warn("Voice input error:", event.error);
    };

    recognition.onend = function () {
      micButton.classList.remove("listening");
    };

    try {
      recognition.start();
    } catch (error) {
      console.warn(error);
    }
  }

  // Floating button opens/closes the panel
  fab.addEventListener("click", function () {
    if (panel.classList.contains("open")) {
      closeChat();
    } else {
      openChat();
    }
  });

  find(".af-close").addEventListener("click", closeChat);
  find(".af-send").addEventListener("click", sendMessage);

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });

  find(".af-cam").addEventListener("click", function () {
    fileInput.click();
  });

  fileInput.addEventListener("change", function () {
    if (fileInput.files && fileInput.files[0]) {
      choosePhoto(fileInput.files[0]);
    }
    fileInput.value = "";
  });

  photoBar.querySelector("button").addEventListener("click", function () {
    selectedPhoto = null;
    photoBar.classList.remove("show");
    photoBar.querySelector("img").removeAttribute("src");
  });

  micButton.addEventListener("click", startVoiceInput);

  find(".af-clear").addEventListener("click", function () {
    selectedPhoto = null;
    photoBar.classList.remove("show");
    photoBar.querySelector("img").removeAttribute("src");
    resetChat();
  });

  // Language dropdown behaviour
  find(".af-ldd-btn").addEventListener("click", function (event) {
    event.stopPropagation();
    langDD.classList.toggle("is-open");
  });

  langItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.stopPropagation();
      language = item.dataset.value;
      localStorage.setItem("af_lang", language);
      langDD.classList.remove("is-open");
      applyLanguage();
      resetChat();
    });
  });

  document.addEventListener("click", function () {
    langDD.classList.remove("is-open");
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeChat();
  });

  // Support explicitly marked buttons only.
  // Do not scan all page elements for text such as "AI".
  document.querySelectorAll(
    "[data-af-open], #afChatBtn, #chatBtn, #aiBtn, .ai-btn"
  ).forEach(function (button) {
    if (button === fab || panel.contains(button)) return;

    button.addEventListener("click", function (event) {
      event.preventDefault();
      openChat();
    });
  });

  window.openAgroChat = openChat;
  window.closeAgroChat = closeChat;

  // Used by the square AI tile on the home page
  window.AgroChat = {
    open: openChat,
    close: closeChat,
    toggle: function () {
      if (panel.classList.contains("open")) closeChat();
      else openChat();
    }
  };

  applyLanguage();
  resetChat();
  closeChat();
})();