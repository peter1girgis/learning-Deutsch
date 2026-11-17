/* =========================================================
   Deutsch A1 — speech.js (Web Speech API Engine)
   100% compatible with GitHub Pages, mobile and desktop.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  var currentBtn = null;
  var speaking = false;
  var synth = window.speechSynthesis;
  var germanVoice = null;

  /* ---------- Load German Voice ---------- */
  function loadVoices() {
    if (!synth) return;
    var voices = synth.getVoices() || [];
    // البحث عن صوت ألماني عالي الجودة أو أي صوت ألماني متاح
    germanVoice = voices.find(function (v) {
      return v.lang === "de-DE" || v.lang === "de_DE" || v.lang.indexOf("de") === 0;
    }) || voices[0] || null;
  }

  if (synth) {
    loadVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
    }
  }

  /* ---------- Text cleanup ---------- */
  function clean(text) {
    return String(text || "")
      .replace(/_{2,}/g, " ")
      .replace(/\([^)]*\)/g, " ")
      .replace(/\[[^\]]*\]/g, " ")
      .replace(/\s*\/\s*/g, ", ")
      .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  /* ---------- Playback Control ---------- */
  function setPlaying(btn, on) {
    if (!btn) return;
    btn.classList.toggle("playing", !!on);
  }

  function stop() {
    if (synth) {
      try {
        synth.cancel();
      } catch (e) {}
    }
    speaking = false;
    setPlaying(currentBtn, false);
    currentBtn = null;
  }

  // الدالة الأساسية للنطق باستخدام المتصفح الداخلي
  function speak(text, opts) {
    opts = opts || {};
    var GA = window.GA1;
    var muted = GA.store && GA.store.getSetting("sound") === false;
    var t = clean(text);

    if (muted || !t || !synth) {
      if (opts.onend) opts.onend();
      return false;
    }

    // إيقاف أي نطق سابق لمنع التداخل
    stop();

    currentBtn = opts.btn || null;
    setPlaying(currentBtn, true);
    speaking = true;

    var utterance = new SpeechSynthesisUtterance(t);
    utterance.lang = "de-DE";
    
    if (germanVoice) {
      utterance.voice = germanVoice;
    }

    // ضبط السرعة
    var defaultRate = GA.store ? GA.store.getSetting("rate") : 0.85;
    var rate = opts.rate != null ? opts.rate : defaultRate;
    utterance.rate = Math.min(1.2, Math.max(0.4, rate || 0.85));

    var done = function () {
      speaking = false;
      setPlaying(currentBtn, false);
      currentBtn = null;
      if (opts.onend) opts.onend();
    };

    utterance.onend = done;
    utterance.onerror = function (e) {
      console.warn("Speech synthesis error:", e);
      done();
    };

    try {
      synth.speak(utterance);
    } catch (e) {
      console.warn("Speech failed:", e);
      done();
    }

    return true;
  }

  // النطق البطيء للتدريب
  function speakSlow(text, opts) {
    opts = Object.assign({}, opts || {}, { rate: 0.5 });
    return speak(text, opts);
  }

  /* ---------- Delegated click handling ---------- */
  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("[data-speak]") : null;
    if (!el) return;
    e.stopPropagation();
    var text = el.getAttribute("data-speak");
    if (el.getAttribute("data-slow")) speakSlow(text, { btn: el });
    else speak(text, { btn: el });
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop();
  });
  window.addEventListener("pagehide", stop);

  /* ---------- Public API ---------- */
  GA1.speech = {
    get supported() { return !!synth; },
    get voiceName() { return germanVoice ? germanVoice.name : "Default German Voice"; },
    get hasGermanVoice() { return !!germanVoice; },
    get speaking() { return speaking; },
    speak: speak,
    speakSlow: speakSlow,
    stop: stop,
    clean: clean,
    refresh: loadVoices
  };
})();