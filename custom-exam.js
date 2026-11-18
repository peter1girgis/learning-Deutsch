/* =========================================================
   Deutsch A1 — custom-exam.js
   "Custom exam": build your own test from any units / lectures.

   Self-contained add-on. It only needs GA1.ui, GA1.store,
   GA1.exercises and GA1.units (all loaded before app.js).
   If this file is missing or fails, the rest of the app is
   not affected (the Practice tab simply has no entry).

   Hooks into the app in exactly two places:
     1. index.html  -> <script src="custom-exam.js"></script>
     2. app.js      -> one line inside showPractice()
   Search for [CUSTOM-EXAM] to find / remove them.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = window.GA1;
  if (!GA1 || !GA1.ui || !GA1.store || !GA1.exercises) return;

  var UI = GA1.ui, store = GA1.store, EX = GA1.exercises, speech = GA1.speech;
  var esc = UI.esc;
  var KEY = "ga1_customexam_v1";

  var TYPES = [
    { id: "mcq", label: "Multiple choice", icon: "🔘" },
    { id: "listen", label: "Listening", icon: "🎧" },
    { id: "match", label: "Matching", icon: "🔗" },
    { id: "article", label: "Articles", icon: "🏷️" },
    { id: "fill", label: "Fill the gap", icon: "✏️" },
    { id: "order", label: "Word order", icon: "🧩" },
    { id: "type", label: "Typing", icon: "⌨️" }
  ];

  /* ---------------------------------------------------------
     State
     --------------------------------------------------------- */
  var st = {
    sel: {},                                   // lesson id -> true
    open: {},                                  // unit id -> expanded
    src: { ex: true, test: true, gen: true },  // question sources
    off: {},                                   // exercise types switched off
    count: 0,
    last: [],                                  // lesson ids of the last exam
    history: []                                // [{ t, pct, c, n, lec }]
  };
  var loaded = false, backToPractice = null, ctx = null;

  /* ---------------------------------------------------------
     Data helpers
     --------------------------------------------------------- */
  function units() {
    return (GA1.units || []).slice().sort(function (a, b) { return a.num - b.num; });
  }

  function allLessons() {
    var out = [];
    units().forEach(function (u) { (u.lessons || []).forEach(function (l) { out.push(l); }); });
    return out;
  }

  function listenOK() {
    return !!(speech && speech.supported && store.getSetting("sound") !== false);
  }

  function allowed(type) {
    if (st.off[type]) return false;
    if (type === "listen" && !listenOK()) return false;
    return true;
  }

  function authored(lesson) {
    return (lesson.exercises || []).filter(function (e) { return e && allowed(e.type); });
  }

  function testItems(unit) {
    return (unit.test || []).filter(function (e) { return e && allowed(e.type); });
  }

  function chosenLessons() {
    var out = [];
    units().forEach(function (u) {
      (u.lessons || []).forEach(function (l) { if (st.sel[l.id]) out.push({ u: u, l: l }); });
    });
    return out;
  }

  function fullySelected(u) {
    var ls = u.lessons || [];
    return ls.length > 0 && ls.every(function (l) { return st.sel[l.id]; });
  }

  function selectedIn(u) {
    return (u.lessons || []).filter(function (l) { return st.sel[l.id]; }).length;
  }

  // Unique vocabulary words of the chosen lectures
  function wordsOf(chosen) {
    var seen = {}, out = [];
    chosen.forEach(function (c) {
      (c.l.vocab || []).forEach(function (w) {
        if (!w || !w.de || !w.en) return;
        var k = store.wordKey(w);
        if (!seen[k]) { seen[k] = 1; out.push({ w: w, u: c.u, l: c.l }); }
      });
    });
    return out;
  }

  // How many different generated questions one word can give
  // (meaning, translation, typing, listening, article).
  function wordCapacity(w) {
    var n = 0;
    if (allowed("mcq")) n += 2;
    if (allowed("listen")) n += 1;
    if (allowed("type")) n += 1;
    if (allowed("article") && w.art) n += 1;
    return n;
  }

  function avail() {
    var chosen = chosenLessons(), ex = 0, test = 0, gen = 0;
    if (st.src.ex) chosen.forEach(function (c) { ex += authored(c.l).length; });
    if (st.src.test) units().forEach(function (u) { if (fullySelected(u)) test += testItems(u).length; });
    if (st.src.gen) wordsOf(chosen).forEach(function (o) { gen += wordCapacity(o.w); });
    return { lectures: chosen.length, ex: ex, test: test, gen: gen, core: ex + test, total: ex + test + gen };
  }

  function clampCount() {
    var max = avail().total;
    if (max < 1) { st.count = 0; return; }
    if (!st.count || st.count < 1) st.count = Math.min(20, max);
    if (st.count > max) st.count = max;
  }

  /* ---------------------------------------------------------
     Persistence
     --------------------------------------------------------- */
  function load() {
    if (loaded) return;
    loaded = true;
    var valid = {};
    allLessons().forEach(function (l) { valid[l.id] = 1; });

    var saved = null;
    try { saved = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) {}

    if (saved && typeof saved === "object") {
      (saved.sel || []).forEach(function (id) { if (valid[id]) st.sel[id] = true; });
      if (saved.src) {
        st.src.ex = saved.src.ex !== false;
        st.src.test = saved.src.test !== false;
        st.src.gen = saved.src.gen !== false;
      }
      (saved.off || []).forEach(function (t) { st.off[t] = true; });
      st.count = +saved.count || 0;
      st.last = (saved.last || []).filter(function (id) { return valid[id]; });
      st.history = Array.isArray(saved.history) ? saved.history.slice(0, 10) : [];
    } else {
      // First time: pre-select the lectures the learner has finished
      allLessons().forEach(function (l) { if (store.isLessonDone(l.id)) st.sel[l.id] = true; });
    }
  }

  function persist() {
    try {
      localStorage.setItem(KEY, JSON.stringify({
        sel: Object.keys(st.sel), src: st.src, off: Object.keys(st.off),
        count: st.count, last: st.last, history: st.history
      }));
    } catch (e) {}
  }

  /* ---------------------------------------------------------
     Build the exam
     --------------------------------------------------------- */
  function tag(item, u, gid, gtitle) {
    var c = Object.assign({}, item);   // never touch the lesson data itself
    c._cx = { u: u.num, ut: u.title, l: gid, lt: gtitle };
    return c;
  }

  // Extra questions generated from the vocabulary of the chosen lectures
  function genItems(ws, need) {
    var pool = EX.globalPool(), cache = {}, out = [], round = 0, list = UI.shuffle(ws);
    while (out.length < need && round < 6) {
      var progress = false;
      for (var i = 0; i < list.length && out.length < need; i++) {
        var o = list[i], k = store.wordKey(o.w);
        if (!cache[k]) {
          cache[k] = UI.shuffle(EX.fromVocab([o.w], pool, 6).filter(function (it) { return allowed(it.type); }));
        }
        var it = cache[k][round];
        if (it) { out.push(tag(it, o.u, o.l.id, o.l.title)); progress = true; }
      }
      if (!progress) break;
      round++;
    }
    return out;
  }

  function buildItems() {
    var chosen = chosenLessons(), groups = [];

    if (st.src.ex) {
      chosen.forEach(function (c) {
        var arr = authored(c.l).map(function (e) { return tag(e, c.u, c.l.id, c.l.title); });
        if (arr.length) groups.push(UI.shuffle(arr));
      });
    }
    if (st.src.test) {
      units().forEach(function (u) {
        if (!fullySelected(u)) return;
        var arr = testItems(u).map(function (e) { return tag(e, u, u.id + "-test", "Unit test"); });
        if (arr.length) groups.push(UI.shuffle(arr));
      });
    }

    // Take questions from every lecture in turn so the whole selection is covered
    var want = st.count, out = [], order = UI.shuffle(groups), progress = true;
    while (out.length < want && progress) {
      progress = false;
      for (var g = 0; g < order.length && out.length < want; g++) {
        if (order[g].length) { out.push(order[g].shift()); progress = true; }
      }
    }

    // Asked for more than the lectures contain -> top up from the vocabulary
    if (out.length < want && st.src.gen) out = out.concat(genItems(wordsOf(chosen), want - out.length));

    return UI.shuffle(out);
  }

  /* ---------------------------------------------------------
     Screen plumbing
     --------------------------------------------------------- */
  function render(html, o) {
    o = o || {};
    UI.lessonMode(false);
    UI.setNav({ title: o.title || "", back: o.back || null });
    UI.render(html, { anim: o.anim || "forward", keepScroll: o.keepScroll });
    UI.setTab("practice");
    UI.setReviewBadge(store.dueCount());
  }

  function leave() {
    EX.cleanup();
    if (backToPractice) backToPractice("back");
    else showSetup("back");
  }

  /* ---------------------------------------------------------
     Practice-tab entry (called from app.js)
     --------------------------------------------------------- */
  function entry(back) {
    if (typeof back === "function") backToPractice = back;
    load();
    var last = st.history[0];
    var sub = last
      ? "Last exam: " + last.pct + "% · " + last.n + " questions"
      : "Pick units and lectures, then choose how many questions";
    return '<div class="list" style="margin-bottom:16px"><button type="button" class="list-row" data-cx="open">' +
      '<div class="icon-tile">📝</div><div class="grow"><div class="title">Custom exam</div><div class="sub">' +
      esc(sub) + '</div></div><span class="chevron">›</span></button></div>';
  }

  /* ---------------------------------------------------------
     Setup screen
     --------------------------------------------------------- */
  function checkCls(n, total) {
    return n === 0 ? "" : n === total ? " on" : " part";
  }

  function unitHtml(u) {
    var ls = u.lessons || [], n = selectedIn(u), open = !!st.open[u.id];
    var h = '<div class="card cx-unit"><div class="cx-unit-head">' +
      '<button type="button" class="cx-check' + checkCls(n, ls.length) + '" data-cx="unit" data-arg="' + esc(u.id) +
      '" aria-label="Select whole unit">' + (n === ls.length && n ? "✓" : n ? "–" : "") + "</button>" +
      '<button type="button" class="cx-main" data-cx="expand" data-arg="' + esc(u.id) + '">' +
      '<span class="cx-icon" style="background:' + esc(u.color || "#0a84ff") + '">' + (u.icon || "📘") + "</span>" +
      '<span class="cx-grow"><span class="cx-title">Unit ' + u.num + " · " + esc(u.title) + "</span>" +
      '<span class="cx-sub">' + n + "/" + ls.length + " lectures selected</span></span>" +
      '<span class="cx-chev">' + (open ? "⌃" : "⌄") + "</span></button></div>";

    if (open) {
      h += '<div class="cx-lecs">' + ls.map(function (l, i) {
        var on = !!st.sel[l.id];
        var done = store.isLessonDone(l.id);
        var info = (l.exercises || []).length + " exercises · " + (l.vocab || []).length + " words" +
          (done ? " · ✓ done" : "");
        return '<button type="button" class="cx-lec" data-cx="lec" data-arg="' + esc(l.id) + '">' +
          '<span class="cx-check' + (on ? " on" : "") + '">' + (on ? "✓" : "") + "</span>" +
          '<span class="cx-grow"><span class="cx-title">' + (i + 1) + ". " + esc(l.title) + "</span>" +
          '<span class="cx-sub">' + esc(info) + "</span></span></button>";
      }).join("") + "</div>";
    }
    return h + "</div>";
  }

  function chip(label, on, act, arg) {
    return '<button type="button" class="chip' + (on ? " blue" : "") + '" data-cx="' + act + '"' +
      (arg !== undefined ? ' data-arg="' + esc(String(arg)) + '"' : "") + ">" + label + "</button>";
  }

  function startLabel(a) {
    return a.total > 0 && st.count > 0 ? "Start exam · " + st.count + " question" + (st.count > 1 ? "s" : "") : "Start exam";
  }

  function sourceRow(id, title, sub, on) {
    return '<div class="list-row"><div class="grow"><div class="title">' + title + '</div><div class="sub">' + sub +
      "</div></div>" + UI.switchHtml("cx-src-" + id, on) + "</div>";
  }

  function showSetup(anim, keepScroll) {
    load();
    clampCount();
    var a = avail(), us = units();

    var h = '<div class="large-title">Custom exam</div><div class="subtitle">Build a test from any units and lectures.</div>';

    // --- summary + count + start
    h += '<div class="card"><div class="cx-sum">' +
      "<div><div class=\"cx-big\">" + a.lectures + '</div><div class="muted">lectures</div></div>' +
      "<div><div class=\"cx-big\">" + a.total + '</div><div class="muted">available</div></div>' +
      '<div><div class="cx-big cx-countlbl">' + st.count + '</div><div class="muted">in exam</div></div></div>';

    if (a.total > 0) {
      h += '<div class="cx-count"><button type="button" class="cx-step" data-cx="dec" aria-label="Fewer">−</button>' +
        '<input id="cx-count-num" class="cx-num" type="number" inputmode="numeric" min="1" max="' + a.total + '" value="' + st.count + '">' +
        '<button type="button" class="cx-step" data-cx="inc" aria-label="More">+</button></div>' +
        '<input id="cx-count-range" class="cx-range" type="range" min="1" max="' + a.total + '" value="' + st.count + '">' +
        '<div class="cx-chips">' + [10, 20, 30].filter(function (n) { return n < a.total; }).map(function (n) {
          return chip(String(n), st.count === n, "count", n);
        }).join("") + chip("All " + a.total, st.count === a.total, "count", a.total) + "</div>";
    } else {
      h += '<div class="muted center" style="padding:6px 0 12px">' +
        (a.lectures ? "No questions with the current sources and types." : "Select at least one lecture below.") + "</div>";
    }

    h += '<button type="button" class="btn btn-primary btn-block cx-start" data-cx="start"' + (a.total > 0 ? "" : " disabled") + ">" +
      startLabel(a) + "</button>";
    if (a.total > 0) {
      h += '<div class="muted center cx-mix" style="font-size:12px;margin-top:8px">' + a.core + " lecture questions" +
        (a.gen ? " + up to " + a.gen + " from vocabulary" : "") + "</div>";
    }
    h += "</div>";

    // --- quick select
    h += '<div class="section-title">Select</div><div class="cx-chips cx-left">' +
      chip("All lectures", false, "all") + chip("None", false, "none") +
      chip("Completed only", false, "done") +
      (st.last.length ? chip("Last exam", false, "last") : "") + "</div>";

    // --- units
    h += '<div class="section-title">Units &amp; lectures</div>' + us.map(unitHtml).join("");

    // --- sources
    h += '<div class="section-title">Question sources</div><div class="list">' +
      sourceRow("ex", "Lecture exercises", "The exercises written for each lecture", st.src.ex) +
      sourceRow("test", "Unit test questions", "Added for units where every lecture is selected", st.src.test) +
      sourceRow("gen", "Vocabulary questions", "Extra questions, used only when you ask for more than the lectures contain", st.src.gen) +
      "</div>";

    // --- types
    h += '<div class="section-title">Question types</div><div class="cx-chips cx-left">' + TYPES.map(function (t) {
      var dead = t.id === "listen" && !listenOK();
      return chip(t.icon + " " + t.label + (dead ? " (sound off)" : ""), allowed(t.id), "type", t.id);
    }).join("") + "</div>";

    // --- history
    if (st.history.length) {
      h += '<div class="section-title">Recent exams</div><div class="list">' + st.history.slice(0, 5).map(function (x) {
        var d = new Date(x.t);
        return '<div class="list-row"><div class="grow"><div class="title">' + x.pct + "% · " + x.c + "/" + x.n +
          '</div><div class="sub">' + esc(d.toLocaleDateString(undefined, { day: "numeric", month: "short" })) + " · " +
          x.lec + " lecture" + (x.lec === 1 ? "" : "s") + "</div></div></div>";
      }).join("") + '</div><div class="mt-8"><button type="button" class="chip" data-cx="clearhist">Clear history</button></div>';
    }

    h += '<div class="mt-24"><button type="button" class="btn btn-primary btn-block cx-start" data-cx="start"' +
      (a.total > 0 ? "" : " disabled") + ">" + startLabel(a) + "</button></div>";

    render(h, { title: "Custom exam", anim: anim || "forward", keepScroll: keepScroll, back: { label: "Practice", onClick: leave } });
  }

  function refresh() { persist(); showSetup("none", true); }

  // Update the count widgets without re-rendering (used while dragging the slider)
  function syncCount() {
    var a = avail(), q = function (s) { return document.querySelectorAll(s); };
    [].forEach.call(q(".cx-countlbl"), function (el) { el.textContent = st.count; });
    [].forEach.call(q(".cx-start"), function (el) { el.textContent = startLabel(a); });
    var num = document.getElementById("cx-count-num");
    if (num && +num.value !== st.count) num.value = st.count;
  }

  /* ---------------------------------------------------------
     Run + results
     --------------------------------------------------------- */
  function start() {
    clampCount();
    var a = avail();
    if (a.total < 1 || st.count < 1) { UI.toast("Select lectures with questions first", { icon: "📝" }); return; }

    var items = buildItems();
    if (!items.length) { UI.toast("No questions available for this selection", { icon: "📝" }); return; }

    st.last = Object.keys(st.sel);
    persist();
    EX.cleanup();

    EX.run({
      items: items, title: "Custom exam",
      onDone: function (res) {
        if (!res.total) { UI.toast("Nothing to practise here"); return showSetup("back"); }
        finish(items, res);
      },
      onExit: function () { showSetup("back"); }
    });
  }

  function breakdown(items, mistakes) {
    var units = {}, order = [];
    items.forEach(function (it) {
      var t = it._cx;
      if (!t) return;
      var u = units[t.u];
      if (!u) { u = units[t.u] = { num: t.u, title: t.ut, total: 0, wrong: 0, lecs: {}, lecOrder: [] }; order.push(t.u); }
      var l = u.lecs[t.l];
      if (!l) { l = u.lecs[t.l] = { title: t.lt, total: 0, wrong: 0 }; u.lecOrder.push(t.l); }
      var bad = mistakes.indexOf(it) !== -1;
      u.total++; l.total++;
      if (bad) { u.wrong++; l.wrong++; }
    });
    order.sort(function (a, b) { return a - b; });
    var weakest = null;
    order.forEach(function (n) {
      var u = units[n];
      u.lecOrder.forEach(function (id) {
        var l = u.lecs[id];
        if (l.total < 2 || l.wrong === 0) return;
        var pct = (l.total - l.wrong) / l.total;
        if (!weakest || pct < weakest.pct) weakest = { pct: pct, title: l.title, unit: u.num };
      });
    });
    return { units: order.map(function (n) { return units[n]; }), weakest: weakest };
  }

  function finish(items, res) {
    var pct = res.total ? Math.round((res.correct / res.total) * 100) : 0;
    var xp = Math.max(3, Math.round(res.correct * 1.5));
    store.addXP(xp); store.checkBadges(); store.save(); store.emit("change");

    st.history.unshift({ t: Date.now(), pct: pct, c: res.correct, n: res.total, lec: Object.keys(st.sel).length });
    st.history = st.history.slice(0, 10);
    persist();

    ctx = { items: items, res: res, pct: pct, xp: xp, info: breakdown(items, res.mistakes || []) };
    showResults(true);
  }

  function showResults(celebrate) {
    var c = ctx, res = c.res, pct = c.pct;
    var title = pct >= 90 ? "Ausgezeichnet!" : pct >= 75 ? "Sehr gut!" : pct >= 50 ? "Gut gemacht!" : "Weiter üben!";
    var emoji = pct >= 90 ? "🏆" : pct >= 75 ? "🎉" : "💪";
    var left = (res.mistakes || []).length;

    var h = '<div class="results"><div class="trophy">' + emoji + "</div><h2>" + title + "</h2>" +
      '<div class="muted">Custom exam · ' + res.total + " question" + (res.total === 1 ? "" : "s") + "</div>" +
      '<div class="stat-grid">' + UI.statPill(pct + "%", "Accuracy") + UI.statPill("+" + c.xp, "XP") +
      UI.statPill(res.correct + "/" + res.total, "Correct") + "</div>";

    if (c.info.units.length) {
      h += '<div class="section-title" style="text-align:left">By unit</div><div class="card" style="text-align:left">' +
        c.info.units.map(function (u) {
          var p = Math.round(((u.total - u.wrong) / u.total) * 100);
          return '<div style="margin:6px 0"><div class="row" style="justify-content:space-between"><span style="font-weight:600">Unit ' +
            u.num + " · " + esc(u.title) + '</span><span class="muted">' + (u.total - u.wrong) + "/" + u.total + "</span></div>" +
            UI.progressBar(p, p >= 75 ? "var(--green)" : p >= 50 ? "var(--orange)" : "var(--red)") + "</div>";
        }).join("") + "</div>";
    }
    if (c.info.weakest) {
      h += '<div class="card" style="text-align:left;margin-top:10px;border-left:4px solid var(--orange)"><b>Needs work</b>' +
        '<div class="muted">Unit ' + c.info.weakest.unit + " · " + esc(c.info.weakest.title) + " — " +
        Math.round(c.info.weakest.pct * 100) + "% correct</div></div>";
    }

    h += '<div class="mt-16">';
    if (left) h += '<button type="button" class="btn btn-primary btn-block" data-cx="mistakes">Practise ' + left + " mistake" + (left > 1 ? "s" : "") + "</button>";
    h += '<button type="button" class="btn ' + (left ? "btn-secondary mt-8" : "btn-primary") + ' btn-block" data-cx="retake">New exam, same settings</button>' +
      '<button type="button" class="btn btn-secondary btn-block mt-8" data-cx="setup">Change selection</button>' +
      '<button type="button" class="btn btn-ghost btn-block mt-8" data-cx="finish">Done</button></div></div>';

    render(h, { title: "Results", anim: "fade" });
    if (celebrate && pct >= 75) { UI.confetti(); UI.sfx("win"); }
  }

  function practiseMistakes() {
    var c = ctx;
    if (!c || !(c.res.mistakes || []).length) return;
    EX.cleanup();
    EX.run({
      items: c.res.mistakes, title: "Fix mistakes",
      onDone: function (r) {
        c.res.mistakes = r.mistakes || [];
        if (!c.res.mistakes.length) UI.toast("All fixed!", { icon: "✅" });
        showResults(false);
      },
      onExit: function () { showResults(false); }
    });
  }

  /* ---------------------------------------------------------
     Actions
     --------------------------------------------------------- */
  function setAll(fn) {
    allLessons().forEach(function (l) { if (fn(l)) st.sel[l.id] = true; else delete st.sel[l.id]; });
  }

  var acts = {
    open: function () { EX.cleanup(); load(); showSetup("forward"); },
    expand: function (id) { st.open[id] = !st.open[id]; showSetup("none", true); },
    lec: function (id) { if (st.sel[id]) delete st.sel[id]; else st.sel[id] = true; refresh(); },
    unit: function (id) {
      var u = units().filter(function (x) { return x.id === id; })[0];
      if (!u) return;
      var on = !fullySelected(u);
      (u.lessons || []).forEach(function (l) { if (on) st.sel[l.id] = true; else delete st.sel[l.id]; });
      refresh();
    },
    all: function () { setAll(function () { return true; }); refresh(); },
    none: function () { setAll(function () { return false; }); refresh(); },
    done: function () {
      setAll(function (l) { return store.isLessonDone(l.id); });
      if (!Object.keys(st.sel).length) UI.toast("No finished lectures yet", { icon: "📘" });
      refresh();
    },
    last: function () {
      var set = {};
      st.last.forEach(function (id) { set[id] = 1; });
      setAll(function (l) { return !!set[l.id]; });
      refresh();
    },
    type: function (id) {
      if (id === "listen" && !listenOK()) { UI.toast("Turn on Sound in Profile to use listening", { icon: "🎧" }); return; }
      if (st.off[id]) delete st.off[id]; else st.off[id] = true;
      refresh();
    },
    dec: function () { st.count = Math.max(1, (st.count || 1) - 1); refresh(); },
    inc: function () { st.count = (st.count || 0) + 1; refresh(); },
    count: function (n) { st.count = +n; refresh(); },
    start: function () { start(); },
    retake: function () { start(); },
    setup: function () { showSetup("back"); },
    mistakes: function () { practiseMistakes(); },
    finish: function () { leave(); },
    clearhist: function () { st.history = []; refresh(); }
  };

  function onClick(e) {
    var el = e.target.closest ? e.target.closest("[data-cx]") : null;
    if (!el || el.disabled) return;
    var f = acts[el.getAttribute("data-cx")];
    if (!f) return;
    UI.haptic("light");
    f(el.getAttribute("data-arg") || "");
  }

  function onChange(e) {
    var t = e.target;
    if (!t || !t.id) return;
    if (t.id.indexOf("cx-src-") === 0) {
      st.src[t.id.slice(7)] = !!t.checked;
      refresh();
    } else if (t.id === "cx-count-num") {
      st.count = parseInt(t.value, 10) || 1;
      refresh();
    } else if (t.id === "cx-count-range") {
      persist();
    }
  }

  function onInput(e) {
    var t = e.target;
    if (t && t.id === "cx-count-range") { st.count = +t.value; syncCount(); }
  }

  /* ---------------------------------------------------------
     Styles (injected, so no CSS file needs to change)
     --------------------------------------------------------- */
  var CSS =
    ".cx-sum{display:flex;gap:8px;text-align:center;margin-bottom:6px}.cx-sum>div{flex:1}" +
    ".cx-big{font-size:28px;font-weight:800;letter-spacing:-.02em;line-height:1.1}" +
    ".cx-count{display:flex;align-items:center;justify-content:center;gap:14px;margin:12px 0 4px}" +
    ".cx-step{width:46px;height:46px;border-radius:50%;border:0;background:var(--surface-3);color:var(--text);font-size:24px;font-weight:700;cursor:pointer}" +
    ".cx-num{width:92px;text-align:center;font-size:30px;font-weight:800;background:transparent;border:0;border-bottom:2px solid var(--surface-3);color:var(--text);padding:2px 0;-moz-appearance:textfield}" +
    ".cx-num::-webkit-outer-spin-button,.cx-num::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}" +
    ".cx-range{width:100%;margin:10px 0 6px;accent-color:var(--accent,#0a84ff)}" +
    ".cx-chips{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-bottom:12px}.cx-chips.cx-left{justify-content:flex-start}" +
    ".cx-start{margin-top:4px}" +
    ".cx-unit{padding:0;overflow:hidden;margin-bottom:10px}" +
    ".cx-unit-head{display:flex;align-items:center;gap:12px;padding:12px 14px}" +
    ".cx-main{flex:1;min-width:0;display:flex;align-items:center;gap:12px;text-align:left;background:none;border:0;color:inherit;font:inherit;cursor:pointer;padding:0}" +
    ".cx-icon{width:38px;height:38px;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:20px;flex:none}" +
    ".cx-grow{flex:1;min-width:0;display:flex;flex-direction:column}" +
    ".cx-title{font-weight:600;font-size:15px;line-height:1.25}" +
    ".cx-sub{font-size:12px;color:var(--text-3);margin-top:2px}" +
    ".cx-chev{color:var(--text-3);font-size:18px;flex:none}" +
    ".cx-check{width:26px;height:26px;flex:none;border-radius:8px;border:2px solid var(--text-3);background:transparent;color:#fff;font-weight:800;font-size:15px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0}" +
    ".cx-check.on{background:var(--accent,#0a84ff);border-color:var(--accent,#0a84ff)}" +
    ".cx-check.part{border-color:var(--accent,#0a84ff);color:var(--accent,#0a84ff)}" +
    ".cx-lecs{border-top:1px solid var(--surface-3)}" +
    ".cx-lec{display:flex;align-items:center;gap:12px;width:100%;text-align:left;background:none;border:0;border-top:1px solid var(--surface-3);color:inherit;font:inherit;cursor:pointer;padding:11px 14px 11px 28px}" +
    ".cx-lecs .cx-lec:first-child{border-top:0}";

  function injectCSS() {
    if (document.getElementById("cx-style")) return;
    var s = document.createElement("style");
    s.id = "cx-style";
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function attach() {
    injectCSS();
    var root = UI.screen || document.getElementById("screen");
    if (!root) return;
    root.addEventListener("click", onClick);
    root.addEventListener("change", onChange);
    root.addEventListener("input", onInput);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", attach);
  else attach();

  GA1.customExam = { entry: entry, open: acts.open };
})();
