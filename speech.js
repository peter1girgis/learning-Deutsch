/* =========================================================
   Deutsch A1 — speech.js (Pure Google TTS Engine)
   100% Human-like German pronunciation without browser voice conflicts.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  var currentBtn = null;
  var speaking = false;
  var currentAudio = null;

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
    if (currentAudio) {
      try {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
      } catch (e) {}
    }
    speaking = false;
    setPlaying(currentBtn, false);
    currentBtn = null;
  }

  // الدالة الوحيدة والأساسية للنطق (نطق بشري صافي 100%)
  function speak(text, opts) {
    opts = opts || {};
    var GA = window.GA1;
    var muted = GA.store && GA.store.getSetting("sound") === false;
    var t = clean(text);

    if (muted || !t) {
      if (opts.onend) opts.onend();
      return false;
    }

    // إيقاف أي صوت شغال حالياً فوراً لمنع التداخل
    stop();

    currentBtn = opts.btn || null;
    setPlaying(currentBtn, true);
    speaking = true;

    var encoded = encodeURIComponent(t);
    // رابط جوجل المباشر للنطق الألماني النقي
    var url = "https://translate.google.com/translate_tts?ie=UTF-8&q=" + encoded + "&tl=de&client=tw-ob";

    currentAudio = new Audio(url);
    
    // ضبط السرعة (الافتراضي 0.85 أو السرعة المرسلة في الـ options)
    var defaultRate = GA.store ? GA.store.getSetting("rate") : 0.85;
    var rate = opts.rate != null ? opts.rate : defaultRate;
    currentAudio.playbackRate = Math.min(1.2, Math.max(0.5, rate || 0.85));

    var done = function () {
      speaking = false;
      setPlaying(currentBtn, false);
      currentBtn = null;
      currentAudio = null;
      if (opts.onend) opts.onend();
    };

    currentAudio.onended = done;
    currentAudio.onerror = done;

    currentAudio.play().catch(function (e) {
      console.warn("Audio playback failed:", e);
      done();
    });

    return true;
  }

  // النطق البطيء للتدريب (سرعة 0.55 لتوضيح تفاصيل الكلمات الألمانية)
  function speakSlow(text, opts) {
    opts = Object.assign({}, opts || {}, { rate: 0.55 });
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
    get supported() { return true; },
    get voiceName() { return "Google Natural German Voice"; },
    get hasGermanVoice() { return true; },
    get speaking() { return speaking; },
    speak: speak,
    speakSlow: speakSlow,
    stop: stop,
    clean: clean,
    refresh: function() {}
  };
})();