/* =========================================================
   Deutsch A1 — speech.js
   Static MP3 (audio/<key>.mp3) -> fallback: Web Speech API
   Files are produced by generate-audio.js
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  var AUDIO_DIR = "audio/"; // relative path: works on GitHub Pages sub-paths
  var STORAGE_KEY = "ga1_speech_texts";

  var currentBtn = null;
  var speaking = false;
  var currentAudio = null;
  var currentToken = 0;
  var manifest = null; // Set of available file keys (null until loaded)

  var hasSynth = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  var germanVoice = null;

  /* ---------- helpers ---------- */

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

  // FNV-1a (32-bit) over UTF-8 bytes + byte length. Must match generate-audio.js
  function fileKey(str) {
    var bytes = new TextEncoder().encode(str);
    var h = 0x811c9dc5;
    for (var i = 0; i < bytes.length; i++) {
      h ^= bytes[i];
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    return ("00000000" + h.toString(16)).slice(-8) + "-" + bytes.length;
  }

  function setPlaying(btn, on) {
    if (!btn) return;
    btn.classList.toggle("playing", !!on);
  }

  function pickGermanVoice() {
    if (!hasSynth) return;
    var voices = window.speechSynthesis.getVoices() || [];
    germanVoice =
      voices.find(function (v) { return /^de[-_]DE/i.test(v.lang) && /google|natural|neural/i.test(v.name); }) ||
      voices.find(function (v) { return /^de[-_]DE/i.test(v.lang); }) ||
      voices.find(function (v) { return /^de/i.test(v.lang); }) ||
      null;
  }

  if (hasSynth) {
    pickGermanVoice();
    window.speechSynthesis.addEventListener("voiceschanged", pickGermanVoice);
  }

  // manifest.json tells us which MP3s exist, so missing ones go straight to
  // the browser voice without a 404 in the console. If it fails to load we
  // simply try the MP3 anyway.
  function loadManifest() {
    try {
      fetch(AUDIO_DIR + "manifest.json")
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (list) { if (Array.isArray(list)) manifest = new Set(list); })
        .catch(function () {});
    } catch (e) {}
  }
  loadManifest();

  /* ---------- stop ---------- */

  function stop() {
    currentToken++; // invalidate any pending callbacks
    if (currentAudio) {
      try {
        currentAudio.onended = null;
        currentAudio.onerror = null;
        currentAudio.pause();
        currentAudio.removeAttribute("src");
        currentAudio.load();
      } catch (e) {}
      currentAudio = null;
    }
    if (hasSynth) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }
    speaking = false;
    setPlaying(currentBtn, false);
    currentBtn = null;
  }

  /* ---------- speak ---------- */

  function speak(text, opts) {
    opts = opts || {};
    var GA = window.GA1;
    var muted = GA.store && GA.store.getSetting("sound") === false;
    var t = clean(text);

    if (muted || !t) {
      if (opts.onend) opts.onend();
      return false;
    }

    stop();
    var token = currentToken;

    currentBtn = opts.btn || null;
    setPlaying(currentBtn, true);
    speaking = true;

    var defaultRate = GA.store ? GA.store.getSetting("rate") : 0.85;
    var rate = Math.min(1.2, Math.max(0.5, (opts.rate != null ? opts.rate : defaultRate) || 0.85));

    var finished = false;
    function finish() {
      if (finished || token !== currentToken) return;
      finished = true;
      speaking = false;
      setPlaying(currentBtn, false);
      currentBtn = null;
      currentAudio = null;
      if (opts.onend) opts.onend();
    }

    var fellBack = false;
    function fallback(reason) {
      if (fellBack || token !== currentToken) return;
      fellBack = true;
      console.info("[speech] browser voice used for:", t, reason || "");
      speakWithSynth(t, rate, token, finish);
    }

    var key = fileKey(t);

    // Known to be missing -> browser voice right away
    if (manifest && !manifest.has(key)) {
      fallback("not in manifest");
      return true;
    }

    // play() must run synchronously inside the click handler (autoplay rules)
    var audio = new Audio();
    currentAudio = audio;
    audio.preload = "auto";
    audio.defaultPlaybackRate = rate;
    audio.playbackRate = rate;
    if ("preservesPitch" in audio) audio.preservesPitch = true;

    audio.onended = finish;
    audio.onerror = function () { fallback("mp3 failed to load"); };
    audio.src = AUDIO_DIR + key + ".mp3";

    var p = audio.play();
    if (p && p.catch) {
      p.catch(function (e) {
        if (e && e.name === "AbortError") return; // interrupted by a newer click
        fallback(e && e.name);
      });
    }
    return true;
  }

  function speakWithSynth(text, rate, token, finish) {
    if (!hasSynth) { finish(); return; }
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "de-DE";
      if (germanVoice) u.voice = germanVoice;
      u.rate = rate;
      u.onend = finish;
      u.onerror = finish;
      if (token === currentToken) window.speechSynthesis.speak(u);
    } catch (e) {
      finish();
    }
  }

  function speakSlow(text, opts) {
    opts = Object.assign({}, opts || {}, { rate: 0.55 });
    return speak(text, opts);
  }

  /* ---------- dev helpers: catch texts the data files don't contain ---------- */

  function loadSet() {
    try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")); }
    catch (e) { return new Set(); }
  }

  // Merges every [data-speak] currently in the DOM into localStorage
  function collect() {
    var set = loadSet();
    document.querySelectorAll("[data-speak]").forEach(function (el) {
      var t = clean(el.getAttribute("data-speak"));
      if (t) set.add(t);
    });
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(set))); } catch (e) {}
    return set.size;
  }

  // Downloads texts.json -> put it next to generate-audio.js and run it again
  function exportTexts() {
    collect();
    var data = JSON.stringify(Array.from(loadSet()), null, 2);
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([data], { type: "application/json" }));
    a.download = "texts.json";
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  /* ---------- events ---------- */

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
    get voiceName() { return "Microsoft Katja (de-DE Neural)"; },
    get hasGermanVoice() { return true; },
    get speaking() { return speaking; },
    speak: speak,
    speakSlow: speakSlow,
    stop: stop,
    clean: clean,
    fileKey: fileKey,
    collect: collect,
    exportTexts: exportTexts,
    refresh: function () {}
  };
})();
