/* =========================================================
   Deutsch A1 — ui.js
   Shared UI helpers: HTML builders, screen rendering, navbar,
   tab bar, bottom sheets, confirm dialogs, toasts, confetti,
   haptics and small sound effects.
   Exposes: GA1.ui
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  /* ---------- DOM references ---------- */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var appEl, screenEl, navEl, backBtn, backLabel, titleSmall, actionsEl,
      tabbarEl, sheetRoot, toastRoot, canvas;

  function grab() {
    appEl = $("#app");
    screenEl = $("#screen");
    navEl = $("#navbar");
    backBtn = $("#nav-back");
    backLabel = $("#nav-back-label");
    titleSmall = $("#nav-title-small");
    actionsEl = $("#nav-actions");
    tabbarEl = $("#tabbar");
    sheetRoot = $("#sheet-root");
    toastRoot = $("#toast-root");
    canvas = $("#confetti");
  }

  /* ---------- Small utilities ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function sample(arr, n) { return shuffle(arr).slice(0, n); }

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  // Delegated event helper: on(root, "click", ".btn", function (e, el) {})
  function on(root, type, selector, fn) {
    root.addEventListener(type, function (e) {
      var el = e.target.closest ? e.target.closest(selector) : null;
      if (el && root.contains(el)) fn(e, el);
    });
  }

  function reducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* ---------- HTML builders (return strings) ---------- */
  function speakBtn(text, opts) {
    opts = opts || {};
    return '<button type="button" class="speak-btn" data-speak="' + esc(text) + '"' +
      (opts.slow ? ' data-slow="1"' : "") +
      ' aria-label="' + (opts.slow ? "Play slowly" : "Play audio") + '">' +
      (opts.slow ? "🐢" : "🔊") + "</button>";
  }

  function progressBar(pct, color) {
    return '<div class="progress-bar"><div class="fill" data-pct="' + Math.max(0, Math.min(100, pct)) +
      '"' + (color ? ' style="background:' + color + '"' : "") + "></div></div>";
  }

  // Circular progress ring. Animated when the screen is rendered.
  function ring(pct, opts) {
    opts = opts || {};
    pct = Math.max(0, Math.min(100, Math.round(pct || 0)));
    var r = 24, c = +(2 * Math.PI * r).toFixed(2);
    var label = opts.label != null ? opts.label : pct + "%";
    return '<div class="ring" style="' + (opts.color ? "--ring-color:" + opts.color + ";" : "") +
      (opts.size ? "width:" + opts.size + "px;height:" + opts.size + "px;" : "") + '">' +
      '<svg viewBox="0 0 56 56" aria-hidden="true">' +
      '<circle class="track" cx="28" cy="28" r="' + r + '"></circle>' +
      '<circle class="bar" cx="28" cy="28" r="' + r + '" stroke-dasharray="' + c + '" stroke-dashoffset="' + c +
      '" data-pct="' + pct + '" data-c="' + c + '"></circle></svg>' +
      '<div class="ring-label">' + label + "</div></div>";
  }

  function chip(text, color) {
    return '<span class="chip' + (color ? " " + color : "") + '">' + text + "</span>";
  }

  function statPill(num, label) {
    return '<div class="stat-pill"><div class="num">' + num + '</div><div class="lbl">' + esc(label) + "</div></div>";
  }

  function emptyState(emoji, title, text) {
    return '<div class="empty"><span class="emoji">' + emoji + "</span><h3>" + esc(title) + "</h3><p>" +
      esc(text) + "</p></div>";
  }

  function switchHtml(id, checked) {
    return '<label class="switch"><input type="checkbox" id="' + esc(id) + '"' + (checked ? " checked" : "") +
      '><span class="slider"></span></label>';
  }

  // Highlights <b>…</b>-style markup: wraps **text** in .hl spans (input is escaped first)
  function hl(text) {
    return esc(text).replace(/\*\*(.+?)\*\*/g, '<span class="hl">$1</span>');
  }

  /* ---------- Screen rendering ---------- */
  var backHandler = null;

  // Animate rings and bars that were just inserted.
  function animateIn(root) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        $$(".ring .bar", root).forEach(function (c) {
          var pct = +c.getAttribute("data-pct"), len = +c.getAttribute("data-c");
          c.style.strokeDashoffset = len * (1 - pct / 100);
        });
        $$(".progress-bar .fill", root).forEach(function (f) {
          f.style.width = f.getAttribute("data-pct") + "%";
        });
      });
    });
  }

  // render(html, { anim: "forward" | "back" | "fade" | "none", keepScroll: bool })
  function render(html, opts) {
    opts = opts || {};
    if (GA1.speech) GA1.speech.stop();
    screenEl.className = "screen";
    screenEl.innerHTML = html;
    if (!opts.keepScroll) screenEl.scrollTop = 0;
    navEl.classList.toggle("scrolled", screenEl.scrollTop > 36);

    var cls = opts.anim === "back" ? "enter-back" : opts.anim === "fade" ? "fade" :
              opts.anim === "none" ? "" : "enter";
    if (cls) {
      void screenEl.offsetWidth; // restart animation
      screenEl.classList.add(cls);
    }
    animateIn(screenEl);
    return screenEl;
  }

  /* ---------- Navbar ---------- */
  // setNav({ title, back: { label, onClick } | null, actions: [{ label|html, onClick }] })
  function setNav(o) {
    o = o || {};
    titleSmall.textContent = o.title || "";

    if (o.back) {
      backLabel.textContent = o.back.label || "Back";
      backBtn.classList.remove("hidden");
      backHandler = o.back.onClick || null;
    } else {
      backBtn.classList.add("hidden");
      backHandler = null;
    }

    actionsEl.innerHTML = "";
    (o.actions || []).forEach(function (a) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "nav-btn";
      if (a.aria) b.setAttribute("aria-label", a.aria);
      if (a.html) b.innerHTML = a.html; else b.textContent = a.label || "";
      b.addEventListener("click", function () { haptic("light"); if (a.onClick) a.onClick(); });
      actionsEl.appendChild(b);
    });
  }

  /* ---------- Tab bar ---------- */
  var tabHandler = null;

  function setTab(name) {
    $$(".tab", tabbarEl).forEach(function (t) {
      var on = t.getAttribute("data-tab") === name;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
  }

  function onTab(fn) { tabHandler = fn; }

  function setReviewBadge(n) {
    var b = $("#review-badge");
    if (!b) return;
    b.textContent = n > 99 ? "99+" : String(n);
    b.classList.toggle("hidden", !(n > 0));
  }

  function lessonMode(on) {
    appEl.classList.toggle("in-lesson", !!on);
  }

  /* ---------- Bottom sheet ---------- */
  var sheetOnClose = null;
  var sheetTimer = null;

  // openSheet({ title, html, actions: [{ label, style, onClick }], onClose })
  // An action's onClick may return false to keep the sheet open.
  function openSheet(o) {
    o = o || {};
    clearTimeout(sheetTimer);
    sheetOnClose = o.onClose || null;

    var actions = (o.actions || []).map(function (a, i) {
      return '<button type="button" class="btn btn-block btn-' + (a.style || "secondary") +
        '" data-idx="' + i + '">' + esc(a.label) + "</button>";
    }).join("");

    sheetRoot.innerHTML =
      '<div class="sheet-backdrop" data-close="1"></div>' +
      '<div class="sheet" role="dialog" aria-modal="true">' +
        '<div class="sheet-grabber"></div>' +
        (o.title ? "<h3>" + esc(o.title) + "</h3>" : "") +
        '<div class="sheet-body">' + (o.html || "") + "</div>" +
        (actions ? '<div class="mt-16">' + actions + "</div>" : "") +
      "</div>";

    sheetRoot.setAttribute("aria-hidden", "false");
    void sheetRoot.offsetWidth;
    sheetRoot.classList.add("open");

    $$("[data-idx]", sheetRoot).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var a = o.actions[+btn.getAttribute("data-idx")];
        haptic("light");
        var keep = a && a.onClick ? a.onClick() === false : false;
        if (!keep) closeSheet();
      });
    });
    $(".sheet-backdrop", sheetRoot).addEventListener("click", function () { closeSheet(); });
    return $(".sheet-body", sheetRoot);
  }

  function closeSheet() {
    if (!sheetRoot.classList.contains("open")) return;
    sheetRoot.classList.remove("open");
    sheetRoot.setAttribute("aria-hidden", "true");
    var cb = sheetOnClose;
    sheetOnClose = null;
    sheetTimer = setTimeout(function () { sheetRoot.innerHTML = ""; }, 480);
    if (cb) cb();
  }

  // confirmSheet({ title, message, confirmLabel, cancelLabel, danger }) -> Promise<boolean>
  function confirmSheet(o) {
    o = o || {};
    return new Promise(function (resolve) {
      var decided = false;
      var finish = function (v) { if (!decided) { decided = true; resolve(v); } };
      openSheet({
        title: o.title || "Are you sure?",
        html: o.message ? '<p class="muted">' + esc(o.message) + "</p>" : "",
        actions: [
          { label: o.confirmLabel || "Confirm", style: o.danger ? "danger" : "primary", onClick: function () { finish(true); } },
          { label: o.cancelLabel || "Cancel", style: "secondary", onClick: function () { finish(false); } }
        ],
        onClose: function () { finish(false); }
      });
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSheet();
  });

  /* ---------- Toast ---------- */
  function toast(message, opts) {
    opts = opts || {};
    var t = document.createElement("div");
    t.className = "toast";
    t.textContent = (opts.icon ? opts.icon + "  " : "") + message;
    toastRoot.appendChild(t);
    setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 3100);
  }

  /* ---------- Haptics ---------- */
  function haptic(kind) {
    if (!navigator.vibrate) return;
    var p = { light: 8, medium: 16, success: [12, 40, 12], error: [30, 40, 30] }[kind || "light"];
    try { navigator.vibrate(p); } catch (e) {}
  }

  /* ---------- Sound effects (tiny WebAudio tones) ---------- */
  var audioCtx = null;

  function tone(freq, start, dur, vol) {
    if (!audioCtx) return;
    var o = audioCtx.createOscillator(), g = audioCtx.createGain();
    var t0 = audioCtx.currentTime + start;
    o.type = "sine";
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol || 0.12, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(audioCtx.destination);
    o.start(t0); o.stop(t0 + dur + 0.05);
  }

  // sfx("good" | "bad" | "win" | "tap")
  function sfx(kind) {
    if (GA1.store && GA1.store.getSetting("sound") === false) return;
    try {
      if (!audioCtx) {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        audioCtx = new AC();
      }
      if (audioCtx.state === "suspended") audioCtx.resume();
      if (kind === "good") { tone(660, 0, 0.14); tone(880, 0.1, 0.2); }
      else if (kind === "bad") { tone(220, 0, 0.22, 0.14); tone(165, 0.12, 0.26, 0.14); }
      else if (kind === "win") { [523, 659, 784, 1047].forEach(function (f, i) { tone(f, i * 0.1, 0.28); }); }
      else if (kind === "tap") { tone(520, 0, 0.05, 0.06); }
    } catch (e) {}
  }

  /* ---------- Confetti ---------- */
  var confettiRunning = false;

  function confetti(ms) {
    if (reducedMotion() || confettiRunning || !canvas) return;
    confettiRunning = true;

    var dpr = window.devicePixelRatio || 1;
    var w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    var ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    var colors = ["#0a84ff", "#30d158", "#ff9f0a", "#ff375f", "#bf5af2", "#ffd60a", "#64d2ff"];
    var parts = [];
    for (var i = 0; i < 150; i++) {
      parts.push({
        x: w / 2 + (Math.random() - 0.5) * 80,
        y: h * 0.35,
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 16 - 5,
        s: Math.random() * 7 + 4,
        r: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.4,
        c: colors[i % colors.length],
        round: Math.random() > 0.6
      });
    }

    var end = Date.now() + (ms || 2600);
    (function frame() {
      ctx.clearRect(0, 0, w, h);
      var alive = 0;
      parts.forEach(function (p) {
        p.vy += 0.38; p.vx *= 0.99;
        p.x += p.vx; p.y += p.vy; p.r += p.vr;
        if (p.y < h + 20) alive++;
        ctx.save();
        ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.fillStyle = p.c;
        if (p.round) { ctx.beginPath(); ctx.arc(0, 0, p.s / 2, 0, 6.3); ctx.fill(); }
        else ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
        ctx.restore();
      });
      if (alive > 0 && Date.now() < end + 2000) requestAnimationFrame(frame);
      else { ctx.clearRect(0, 0, w, h); confettiRunning = false; }
    })();
  }

  /* ---------- Init (wire up static shell) ---------- */
  function init() {
    grab();

    // Navbar collapses into glass on scroll
    screenEl.addEventListener("scroll", function () {
      navEl.classList.toggle("scrolled", screenEl.scrollTop > 36);
    }, { passive: true });

    backBtn.addEventListener("click", function () {
      haptic("light");
      if (backHandler) backHandler();
    });

    tabbarEl.addEventListener("click", function (e) {
      var t = e.target.closest(".tab");
      if (!t) return;
      haptic("light");
      var name = t.getAttribute("data-tab");
      setTab(name);
      if (tabHandler) tabHandler(name);
    });

    // Unlock audio on the first touch (required by iOS Safari)
    var unlock = function () {
      document.removeEventListener("pointerdown", unlock);
      try {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (AC && !audioCtx) audioCtx = new AC();
        if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
      } catch (e) {}
    };
    document.addEventListener("pointerdown", unlock);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  /* ---------- Public API ---------- */
  GA1.ui = {
    $: $, $$: $$, on: on,
    esc: esc, hl: hl, shuffle: shuffle, sample: sample, pick: pick,

    // builders
    speakBtn: speakBtn, progressBar: progressBar, ring: ring, chip: chip,
    statPill: statPill, emptyState: emptyState, switchHtml: switchHtml,

    // screen & chrome
    render: render, setNav: setNav, setTab: setTab, onTab: onTab,
    setReviewBadge: setReviewBadge, lessonMode: lessonMode, animateIn: animateIn,
    get screen() { return screenEl; },
    get app() { return appEl; },

    // overlays & feedback
    openSheet: openSheet, closeSheet: closeSheet, confirm: confirmSheet,
    toast: toast, confetti: confetti, haptic: haptic, sfx: sfx
  };
})();