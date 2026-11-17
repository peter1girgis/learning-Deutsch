/* =========================================================
   Deutsch A1 — speech.js (Google TTS with AbortError Fix)
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  var currentBtn = null;
  var speaking = false;
  var currentAudio = null;

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

  function setPlaying(btn, on) {
    if (!btn) return;
    btn.classList.toggle("playing", !!on);
  }

  function stop() {
    if (currentAudio) {
      try {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.src = "";
      } catch (e) {}
      currentAudio = null;
    }
    speaking = false;
    setPlaying(currentBtn, false);
    currentBtn = null;
  }

  function speak(text, opts) {
    opts = opts || {};
    var GA = window.GA1;
    var muted = GA.store && GA.store.getSetting("sound") === false;
    var t = clean(text);

    if (muted || !t) {
      if (opts.onend) opts.onend();
      return false;
    }

    // إيقاف الصوت الحالي بأمان قبل بدء الجديد
    stop();

    currentBtn = opts.btn || null;
    setPlaying(currentBtn, true);
    speaking = true;

    var encoded = encodeURIComponent(t);
    var googleUrl = "https://translate.google.com/translate_tts?ie=UTF-8&q=" + encoded + "&tl=de&client=tw-ob";
    var proxyUrl = "https://api.allorigins.win/raw?url=" + encodeURIComponent(googleUrl);

    var audio = new Audio();
    currentAudio = audio;

    var defaultRate = GA.store ? GA.store.getSetting("rate") : 0.85;
    var rate = opts.rate != null ? opts.rate : defaultRate;
    try {
      audio.playbackRate = Math.min(1.2, Math.max(0.5, rate || 0.85));
    } catch (e) {}

    var done = function () {
      if (currentAudio === audio) {
        speaking = false;
        setPlaying(currentBtn, false);
        currentBtn = null;
        currentAudio = null;
      }
      if (opts.onend) opts.onend();
    };

    audio.onended = done;
    audio.onerror = function () {
      if (audio.src !== googleUrl) {
        audio.src = googleUrl;
        audio.play().catch(done);
      } else {
        done();
      }
    };

    audio.src = proxyUrl;
    audio.load();

    // تشغيل آمن مع معالجة مقاطعة الـ play عن طريق الـ pause
    var playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(function (e) {
        // تجاهل خطأ المقاطعة الناتج عن الضغط السريع
        if (e.name !== "AbortError") {
          console.warn("Audio play error:", e);
        }
        done();
      });
    }

    return true;
  }

  function speakSlow(text, opts) {
    opts = Object.assign({}, opts || {}, { rate: 0.55 });
    return speak(text, opts);
  }

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