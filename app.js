/* =========================================================
   Deutsch A1 — app.js
   App controller: boot, tab navigation, screens (Learn, Unit,
   Lesson flow, Unit test, Practice, Review, Profile) and results.
   Needs: store.js, speech.js, ui.js, exercises.js, data/unit*.js
   ========================================================= */
(function () {
  "use strict";

  var GA1 = window.GA1;
  if (!GA1 || !GA1.ui || !GA1.store || !GA1.exercises) {
    var s = document.getElementById("screen");
    if (s) s.innerHTML = '<div style="padding:40px;text-align:center;color:#fff">Something went wrong while loading. ' +
      'Check that all .js files are in the same folder as index.html, then refresh.</div>';
    return;
  }

  const UI = GA1.ui, store = GA1.store, speech = GA1.speech, EX = GA1.exercises;
  const esc = UI.esc, hl = UI.hl;

  const ART_COLOR = { der: "var(--blue)", die: "var(--red)", das: "var(--green)" };

  // Shown for units whose data file is not installed yet
  const UNIT_META = [
    { num: 1, title: "Alphabet & Pronunciation", icon: "🔤", color: "#0a84ff" },
    { num: 2, title: "Greetings & Introductions", icon: "👋", color: "#30d158" },
    { num: 3, title: "Numbers, Time & Dates", icon: "🔢", color: "#ff9f0a" },
    { num: 4, title: "Family & People", icon: "👨‍👩‍👧", color: "#ff375f" },
    { num: 5, title: "Food & Drink", icon: "🍽️", color: "#ff453a" },
    { num: 6, title: "Daily Routine & Hobbies", icon: "⏰", color: "#bf5af2" },
    { num: 7, title: "Shopping", icon: "🛍️", color: "#64d2ff" },
    { num: 8, title: "House & Home", icon: "🏠", color: "#ffd60a" },
    { num: 9, title: "Travel & Directions", icon: "✈️", color: "#5e5ce6" },
    { num: 10, title: "Grammar Fundamentals", icon: "🧩", color: "#0a84ff" },
    { num: 11, title: "Modal Verbs & Imperative", icon: "💬", color: "#30d158" },
    { num: 12, title: "A1 Review & Final Exam", icon: "🎓", color: "#ff9f0a" }
  ];

  /* ---------- State ---------- */
  let tab = "learn";
  let flow = null;        // { unit, idx } current lesson
  let lessonCtx = null;   // lesson results context
  let testCtx = null;     // { unit }
  let simpleCtx = null;   // generic results callbacks
  let footerEl = null;

  /* ---------- Helpers ---------- */
  const unitById = id => (GA1.units || []).filter(u => u.id === id)[0] || null;
  const unitByNum = n => (GA1.units || []).filter(u => u.num === n)[0] || null;
  const curLesson = () => flow.unit.lessons[flow.idx];

  function dedupe(words) {
    const seen = {}, out = [];
    words.forEach(w => {
      if (!w || !w.de || !w.en) return;
      const k = store.wordKey(w);
      if (!seen[k]) { seen[k] = 1; out.push(w); }
    });
    return out;
  }

  function unitLearned(u) {
    let out = [];
    u.lessons.forEach(l => { if (store.isLessonDone(l.id)) out = out.concat(l.vocab || []); });
    return dedupe(out);
  }

  function learnedPool() {
    let out = [];
    store.sortedUnits().forEach(u => { out = out.concat(unitLearned(u)); });
    return dedupe(out);
  }

  function wordHtml(w) {
    return (w.art ? '<span style="color:' + ART_COLOR[w.art] + '">' + esc(w.art) + "</span> " : "") + esc(w.de);
  }

  function greeting() {
    const h = new Date().getHours();
    const g = h < 11 ? "Guten Morgen" : h < 18 ? "Guten Tag" : "Guten Abend";
    const name = (store.getSetting("name") || "").trim();
    return g + (name ? ", " + esc(name) : "") + "!";
  }

  function untilText(ms) {
    const m = Math.max(1, Math.round(ms / 60000));
    if (m < 60) return "in " + m + " min";
    const h = Math.round(m / 60);
    if (h < 24) return "in " + h + " h";
    const d = Math.round(h / 24);
    return d === 1 ? "tomorrow" : "in " + d + " days";
  }

  // The next thing the learner should do
  function nextStep() {
    const units = store.sortedUnits();
    for (let a = 0; a < units.length; a++) {
      const u = units[a];
      if (!store.unitUnlocked(u.id)) break;
      for (let i = 0; i < u.lessons.length; i++) {
        if (!store.isLessonDone(u.lessons[i].id)) return { kind: "lesson", unit: u, idx: i };
      }
      if (!store.isUnitPassed(u.id)) return { kind: "test", unit: u };
    }
    return null;
  }

  /* ---------- Screen plumbing ---------- */
  function clearFooter() {
    if (footerEl && footerEl.parentNode) footerEl.parentNode.removeChild(footerEl);
    footerEl = null;
  }

  function setFooter(html) {
    clearFooter();
    footerEl = document.createElement("div");
    footerEl.className = "lesson-footer";
    footerEl.innerHTML = html;
    footerEl.addEventListener("click", e => {
      const el = e.target.closest("[data-act]");
      if (el) dispatch(el);
    });
    UI.app.appendChild(footerEl);
  }

  // show(html, { title, back, actions, anim, lesson, keepScroll })
  function show(html, o) {
    o = o || {};
    clearFooter();
    UI.lessonMode(!!o.lesson);
    UI.setNav({ title: o.title || "", back: o.back || null, actions: o.actions });
    UI.render(html, { anim: o.anim || "forward", keepScroll: o.keepScroll });
    if (!o.lesson) UI.setTab(tab);
    UI.setReviewBadge(store.dueCount());
  }

  function lessonTop(pct) {
    return '<div class="lesson-top"><button type="button" class="lesson-close" data-act="quit" aria-label="Close">✕</button>' +
      UI.progressBar(pct) + "</div>";
  }

  function row(icon, title, sub, extra) {
    return '<div class="list-row"><div class="icon-tile">' + icon + '</div><div class="grow"><div class="title">' +
      title + "</div>" + (sub ? '<div class="sub">' + sub + "</div>" : "") + "</div>" + (extra || "") + "</div>";
  }

  function navRow(act, arg, icon, title, sub) {
    return '<button type="button" class="list-row" data-act="' + act + '" data-arg="' + esc(arg || "") + '">' +
      '<div class="icon-tile">' + icon + '</div><div class="grow"><div class="title">' + title + "</div>" +
      (sub ? '<div class="sub">' + sub + "</div>" : "") + '</div><span class="chevron">›</span></button>';
  }

  /* =========================================================
     LEARN TAB
     ========================================================= */
  function heroHtml(step) {
    if (step && step.kind === "lesson") {
      const first = store.lessonsDoneCount() === 0;
      const l = step.unit.lessons[step.idx];
      return '<div class="hero"><h2>' + (first ? "Start from zero" : "Continue learning") + "</h2><p>Unit " + step.unit.num +
        " · " + esc(l.title) + '</p><button type="button" class="btn btn-light" data-act="next">' +
        (first ? "Begin" : "Continue") + "</button></div>";
    }
    if (step && step.kind === "test") {
      return '<div class="hero"><h2>Unit test ready</h2><p>Unit ' + step.unit.num + " · pass with " + store.PASS_PCT +
        '% to pass the unit</p><button type="button" class="btn btn-light" data-act="next">Take the test</button></div>';
    }
    const all = (GA1.units || []).length >= 12;
    return '<div class="hero"><h2>' + (all ? "A1 complete! 🎓" : "You are all caught up") + "</h2><p>" +
      (all ? "Congratulations. Check your certificate in Profile." : "More units are on the way. Practise in the meantime.") +
      "</p></div>";
  }

  function showLearn(anim) {
    tab = "learn";
    const lv = store.levelInfo(), goal = store.dailyGoal(), today = store.todayXP();
    const gpct = Math.min(100, Math.round((today / goal) * 100));

    let h = '<div class="large-title">Deutsch A1</div><div class="subtitle">' + greeting() + "</div>";
    h += heroHtml(nextStep());
    h += '<div class="stats-row">' + UI.statPill("🔥 " + store.currentStreak(), "Streak") +
      UI.statPill("⭐ " + store.state.xp, "XP") + UI.statPill("Lv " + lv.level, "Level") + "</div>";
    h += '<div class="card row mt-8">' + UI.ring(gpct, { color: "var(--orange)", label: "🎯" }) +
      '<div class="grow"><div style="font-weight:700">Daily goal</div><div class="muted">' + today + " / " + goal +
      " XP today" + (today >= goal ? " ✅" : "") + "</div></div></div>";

    h += '<div class="section-title">Units</div>';
    UNIT_META.forEach(m => {
      const u = unitByNum(m.num);
      if (!u) {
        h += '<div class="unit-card coming" style="--unit-color:' + m.color + '"><div class="unit-icon" style="background:var(--surface-3)">' +
          m.icon + '</div><div class="unit-info"><div class="unit-num">Unit ' + m.num + '</div><div class="unit-name">' +
          esc(m.title) + '</div><div class="unit-meta">Coming soon</div></div></div>';
        return;
      }
      const unlocked = store.unitUnlocked(u.id);
      const pct = store.unitProgress(u);
      h += '<button type="button" class="unit-card' + (unlocked ? "" : " locked") + '" style="--unit-color:' + u.color +
        '" data-act="unit" data-arg="' + esc(u.id) + '"><div class="unit-icon">' + u.icon + '</div>' +
        '<div class="unit-info"><div class="unit-num">Unit ' + u.num + '</div><div class="unit-name">' + esc(u.title) +
        '</div><div class="unit-meta">' + u.lessons.length + " lessons + test</div></div>" +
        (unlocked ? UI.ring(pct, { color: u.color, size: 46 }) : '<span style="font-size:22px">🔒</span>') + "</button>";
    });

    show(h, { title: "Learn", anim: anim || "fade" });
  }

  /* =========================================================
     UNIT SCREEN
     ========================================================= */
  function showUnit(id, anim) {
    const u = unitById(id);
    if (!u) return showLearn();
    tab = "learn";
    const done = store.unitLessonsDone(u), allDone = store.testUnlocked(u);
    let current = -1;
    for (let i = 0; i < u.lessons.length; i++) {
      if (!store.isLessonDone(u.lessons[i].id)) { current = i; break; }
    }

    let h = '<div class="card row" style="margin-top:6px"><div class="icon-tile" style="width:60px;height:60px;font-size:32px;border-radius:16px;background:' +
      u.color + '">' + u.icon + '</div><div class="grow"><div class="unit-num" style="color:' + u.color +
      ';font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em">Unit ' + u.num +
      '</div><div style="font-size:22px;font-weight:800;letter-spacing:-.02em;line-height:1.15">' + esc(u.title) +
      '</div><div class="muted" style="font-size:14px">' + esc(u.subtitle || "") + "</div></div></div>";
    h += '<div class="mt-16">' + UI.progressBar(store.unitProgress(u), u.color) + "</div>";

    h += '<div class="list mt-16">' +
      navRow("guide", u.id, "📖", "Complete Study Guide", "All words, sentences, audio, tips & Q&A") +
    "</div>";

    if (u.outcomes && u.outcomes.length) {
      h += '<div class="section-title">You will learn</div><div class="card">' + u.outcomes.map(o =>
        '<div class="row" style="padding:5px 0"><span>✅</span><span>' + esc(o) + "</span></div>").join("") + "</div>";
    }

    h += '<div class="section-title">Lessons</div><div class="list">';
    u.lessons.forEach((l, i) => {
      const rec = store.getLesson(l.id), isDone = store.isLessonDone(l.id);
      const open = store.lessonUnlocked(u, i);
      const cls = "lesson-row" + (isDone ? " done" : "") + (!open ? " locked" : "") + (i === current ? " current" : "");
      const stars = isDone && rec ? "⭐".repeat(rec.stars) : "";
      h += '<button type="button" class="list-row ' + cls + '" data-act="lesson" data-arg="' + esc(u.id) + "|" + i + '">' +
        '<div class="status">' + (isDone ? "✓" : !open ? "🔒" : i + 1) + '</div><div class="grow"><div class="title">' +
        esc(l.title) + '</div><div class="sub">' + esc(l.goal || "") + '</div></div><span style="font-size:12px">' +
        stars + '</span><span class="chevron">›</span></button>';
    });
    h += "</div>";

    const t = store.getTest(u.id), passed = store.isUnitPassed(u.id);
    h += '<div class="section-title">Unit test</div><div class="list"><button type="button" class="list-row lesson-row' +
      (passed ? " done" : "") + (!allDone ? " locked" : " current") + '" data-act="test" data-arg="' + esc(u.id) + '">' +
      '<div class="status">' + (passed ? "✓" : !allDone ? "🔒" : "🏁") + '</div><div class="grow"><div class="title">Mini-test</div>' +
      '<div class="sub">' + (t ? "Best score: " + t.best + "% · " : "") + "Pass with " + store.PASS_PCT +
      "% to pass the unit</div></div>" + '<span class="chevron">›</span></button></div>';

    show(h, { title: u.title, back: { label: "Learn", onClick: () => showLearn("back") }, anim: anim || "forward" });
  }

  /* =========================================================
     UNIT STUDY GUIDE (All Vocab, Sentences, Tips & Q&A)
     ========================================================= */
  function formatExerciseQA(ex, idx) {
    let q = esc(ex.prompt || "");
    let ans = "";
    let speakText = "";

    if (ex.type === "mcq") {
      if (ex.sub) q += '<div class="muted" style="font-size:13px;margin-top:4px">' + esc(ex.sub) + "</div>";
      if (ex.big) { q += ' <b style="color:var(--accent)">' + esc(ex.big) + "</b>"; speakText = ex.big; }
      ans = typeof ex.answer === "number" ? ex.options[ex.answer] : ex.answer;
    } else if (ex.type === "listen") {
      q += ' <span class="muted">"' + esc(ex.text) + '"</span>';
      speakText = ex.text;
      ans = ex.answer;
    } else if (ex.type === "fill") {
      q += '<div style="margin-top:4px">' + esc(ex.sentence) + ' <span class="muted">(' + esc(ex.en || "") + ")</span></div>";
      ans = ex.answer;
      speakText = String(ex.sentence || "").replace("___", ex.answer);
    } else if (ex.type === "type" || ex.type === "order") {
      q = esc(ex.src || ex.prompt || "");
      ans = ex.answer;
      speakText = ex.answer;
    } else if (ex.type === "article") {
      q = 'Article for <b>' + esc(ex.noun) + '</b> <span class="muted">(' + esc(ex.en || "") + ")</span>";
      ans = ex.answer + " " + ex.noun;
      speakText = ans;
    } else if (ex.type === "match") {
      ans = (ex.pairs || []).map(p => esc(p.de) + " = " + esc(p.en)).join(" · ");
    }

    return '<div class="list-row" style="align-items:flex-start">' +
      '<div class="grow">' +
        '<div style="font-size:14px;font-weight:600">' + (idx + 1) + ". " + q + "</div>" +
        '<div style="margin-top:6px;display:flex;flex-wrap:wrap;gap:6px;align-items:center">' +
          UI.chip("✓ " + ans, "green") +
        "</div>" +
        (ex.explain ? '<div class="muted" style="font-size:12px;margin-top:4px">' + hl(ex.explain) + "</div>" : "") +
      "</div>" +
      (speakText ? UI.speakBtn(speakText) : "") +
    "</div>";
  }

  function showUnitGuide(uid, anim) {
    const u = unitById(uid);
    if (!u) return showLearn();
    tab = "learn";

    let h = '<div class="large-title" style="font-size:26px">Unit ' + u.num + " · Study Guide</div>" +
            '<div class="subtitle">' + esc(u.title) + " — Complete reference</div>";

    // Quick Jump Pills لكل Lecture
    h += '<div class="row" style="flex-wrap:wrap;gap:6px;margin-bottom:16px">' +
      u.lessons.map((l, i) =>
        '<a href="#lec-' + esc(l.id) + '" class="chip" style="text-decoration:none" onclick="event.preventDefault();document.getElementById(\'lec-' + esc(l.id) + '\').scrollIntoView({behavior:\'smooth\'})">' +
        (i + 1) + ". " + esc(l.title) + "</a>"
      ).join("") + "</div>";

    u.lessons.forEach((l, i) => {
      h += '<div id="lec-' + esc(l.id) + '" class="section-title" style="margin-top:24px;font-size:16px;color:var(--accent)">' +
           (l.emoji || "📘") + " Lecture " + (i + 1) + ": " + esc(l.title) + "</div>";

      if (l.hook || l.goal) {
        h += '<div class="card" style="margin-bottom:12px"><div style="font-weight:600">' + esc(l.goal || "") + '</div>' +
             (l.hook ? '<div class="muted" style="font-size:13px;margin-top:4px">' + esc(l.hook) + "</div>" : "") + "</div>";
      }

      // 1. Quick Tip (نفس الشكل الأصلي بالظبط)
      if (l.tip) {
        const t = l.tip;
        h += '<div class="card tip-card" style="margin-bottom:12px"><h3>💡 Quick tip: ' + esc(t.title || "") + "</h3><p>" + hl(t.text || "") + "</p>";
        if (t.table) {
          h += '<table class="grammar"><thead><tr>' + t.table.head.map(c => "<th>" + esc(c) + "</th>").join("") + "</tr></thead><tbody>" +
               t.table.rows.map(r => "<tr>" + r.map(c => "<td>" + hl(c) + "</td>").join("") + "</tr>").join("") + "</tbody></table>";
        }
        if (t.examples && t.examples.length) {
          h += '<div class="mt-16">' + t.examples.map(ex => {
            const speakable = ex.de.indexOf(" = ") === -1 && ex.de.indexOf(" – ") === -1;
            return '<div class="example">' + (speakable ? UI.speakBtn(ex.de) : "") + '<div><div class="de-line">' + hl(ex.de) +
              '</div><div class="en-line">' + esc(ex.en) + "</div></div></div>";
          }).join("") + "</div>";
        }
        h += "</div>";
      }

      // 2. Words & Sentences + Audio
      if (l.vocab && l.vocab.length) {
        h += '<div class="muted" style="font-weight:700;font-size:12px;text-transform:uppercase;margin:10px 4px 6px">Words & Sentences (' + l.vocab.length + ')</div>';
        h += '<div class="list" style="margin-bottom:12px">' + l.vocab.map(w => {
          const exHtml = w.ex
            ? '<div style="margin-top:6px;padding-top:6px;border-top:1px solid var(--surface-3);display:flex;align-items:center;justify-content:space-between;gap:8px">' +
                '<div><div style="font-size:13px;font-weight:600">' + esc(w.ex) + '</div>' +
                (w.exEn ? '<div class="muted" style="font-size:12px">' + esc(w.exEn) + "</div>" : "") + '</div>' +
                UI.speakBtn(w.ex) +
              "</div>"
            : "";
          return '<div class="list-row" style="flex-direction:column;align-items:stretch">' +
            '<div class="row" style="justify-content:space-between">' +
              '<div class="grow"><div class="title">' + wordHtml(w) + '</div><div class="sub">' + esc(w.en) +
              (w.pl ? " · pl. " + esc(w.pl) : "") + "</div></div>" +
              UI.speakBtn(EX.full(w)) +
            "</div>" + exHtml + "</div>";
        }).join("") + "</div>";
      }

      // 3. Exercises & Answers
      if (l.exercises && l.exercises.length) {
        h += '<div class="muted" style="font-weight:700;font-size:12px;text-transform:uppercase;margin:10px 4px 6px">Exercises & Answers (' + l.exercises.length + ')</div>';
        h += '<div class="list" style="margin-bottom:16px">' +
             l.exercises.map((ex, idx) => formatExerciseQA(ex, idx)).join("") +
             "</div>";
      }
    });

    show(h, { title: "Study Guide", back: { label: u.title, onClick: () => showUnit(u.id, "back") }, anim: anim || "forward" });
  }

  /* =========================================================
     LESSON FLOW: intro -> flashcards -> tip -> exercises -> results
     ========================================================= */
  function showLessonIntro(uid, idx, anim) {
    const u = unitById(uid);
    if (!u) return showLearn();
    const l = u.lessons[idx];
    tab = "learn";
    flow = { unit: u, idx: idx };
    const nv = (l.vocab || []).length;

    let h = '<div class="card glass center" style="padding:28px 20px;margin-top:8px"><div style="font-size:64px">' + (l.emoji || "📘") +
      '</div><div class="large-title" style="font-size:28px">' + esc(l.title) + '</div><div class="muted">' + esc(l.goal || "") + "</div></div>";
    if (l.hook) h += '<div class="card mt-16"><div class="muted">' + esc(l.hook) + "</div></div>";
    h += '<div class="section-title">In this lesson</div><div class="list">' +
      (nv ? row("🎴", nv + " flashcards", "Words and phrases with audio") : "") +
      (l.tip ? row("💡", "Quick tip", esc(l.tip.title || "")) : "") +
      row("✏️", "8 exercises", "Quizzes, matching, typing and more") + "</div>";
    h += '<div class="mt-24"><button type="button" class="btn btn-primary btn-block" data-act="start">' +
      (store.isLessonDone(l.id) ? "Practise again" : "Start lesson") + "</button></div>";

    show(h, { title: l.title, back: { label: u.title, onClick: () => showUnit(u.id, "back") }, anim: anim });
  }

  function startFlashcards() {
    clearFooter();
    const l = curLesson();
    if (!(l.vocab || []).length) return showTip();
    EX.flashcards({ words: l.vocab, title: l.title, onDone: () => showTip(), onExit: exitFlow });
  }

  function showTip() {
    const l = curLesson(), t = l.tip;
    if (!t) return startExercises();

    let h = lessonTop(40) + '<div class="lesson-body"><div class="card tip-card"><h3>Quick tip</h3><div class="prompt" style="margin-bottom:10px">' +
      esc(t.title || "") + "</div><p>" + hl(t.text || "") + "</p>";
    if (t.table) {
      h += '<table class="grammar"><thead><tr>' + t.table.head.map(c => "<th>" + esc(c) + "</th>").join("") + "</tr></thead><tbody>" +
        t.table.rows.map(r => "<tr>" + r.map(c => "<td>" + hl(c) + "</td>").join("") + "</tr>").join("") + "</tbody></table>";
    }
    if (t.examples && t.examples.length) {
      h += '<div class="mt-16">' + t.examples.map(ex => {
        const speakable = ex.de.indexOf(" = ") === -1 && ex.de.indexOf(" – ") === -1;
        return '<div class="example">' + (speakable ? UI.speakBtn(ex.de) : "") + '<div><div class="de-line">' + hl(ex.de) +
          '</div><div class="en-line">' + esc(ex.en) + "</div></div></div>";
      }).join("") + "</div>";
    }
    h += "</div></div>";

    show(h, { title: l.title, lesson: true, anim: "forward" });
    setFooter('<button type="button" class="btn btn-primary btn-block" data-act="tipgo">Start exercises</button>');
  }

  function startExercises() {
    clearFooter();
    const l = curLesson();
    const items = EX.lessonSet(l, EX.globalPool(), 8);
    EX.run({ items: items, title: l.title, onDone: finishLesson, onExit: exitFlow });
  }

  function finishLesson(res) {
    const l = curLesson();
    const total = res.total || 1, correct = res.total ? res.correct : 1;
    const out = store.completeLesson(l.id, { correct: correct, total: total });
    lessonCtx = { unit: flow.unit, idx: flow.idx, out: out, res: res };
    showLessonResults(true);
  }

  function exitFlow() {
    EX.cleanup();
    clearFooter();
    if (flow && flow.unit) showUnit(flow.unit.id, "back"); else showLearn("back");
  }

  function starsHtml(n) {
    let s = "";
    for (let i = 0; i < 3; i++) s += i < n ? "⭐" : '<span class="off">⭐</span>';
    return '<div class="stars">' + s + "</div>";
  }

  function showLessonResults(celebrate) {
    const c = lessonCtx, out = c.out, hasNext = c.idx + 1 < c.unit.lessons.length;
    const title = out.pct >= 90 ? "Ausgezeichnet!" : out.pct >= 75 ? "Sehr gut!" : "Gut gemacht!";
    const emoji = out.pct >= 90 ? "🏆" : out.pct >= 75 ? "🎉" : "💪";
    const mist = c.res.mistakes.length;

    let h = '<div class="results"><div class="trophy">' + emoji + "</div><h2>" + title + "</h2>" +
      '<div class="muted">' + esc(c.unit.lessons[c.idx].title) + " complete</div>" + starsHtml(out.stars) +
      (out.leveledUp ? UI.chip("⬆️ Level up!", "blue") : "") +
      '<div class="stat-grid">' + UI.statPill(out.pct + "%", "Accuracy") + UI.statPill("+" + out.xp, "XP") +
      UI.statPill(c.res.correct + "/" + c.res.total, "Correct") + "</div>";
    h += '<button type="button" class="btn btn-primary btn-block" data-act="lres-next">' + (hasNext ? "Next lesson" : "Back to unit") + "</button>";
    if (mist) h += '<button type="button" class="btn btn-secondary btn-block mt-8" data-act="lres-mistakes">Practise ' + mist + " mistake" + (mist > 1 ? "s" : "") + "</button>";
    h += '<button type="button" class="btn btn-ghost btn-block mt-8" data-act="lres-retry">Try again</button></div>';

    show(h, { title: "Results", anim: "fade" });
    if (celebrate && out.pct >= 75) { UI.confetti(); UI.sfx("win"); }
  }

  /* =========================================================
     UNIT TEST
     ========================================================= */
  function showTestIntro(uid) {
    const u = unitById(uid);
    if (!u) return showLearn();
    tab = "learn";
    testCtx = { unit: u };
    const h = '<div class="card glass center" style="padding:28px 20px;margin-top:8px"><div style="font-size:64px">🏁</div>' +
      '<div class="large-title" style="font-size:28px">Unit ' + u.num + " test</div><div class=\"muted\">" + esc(u.title) + "</div></div>" +
      '<div class="section-title">How it works</div><div class="list">' +
      row("📝", "10 questions", "A mix from every lesson in this unit") +
      row("🎯", "Pass mark: " + store.PASS_PCT + "%", "Your best score is saved") +
      row("🔁", "Unlimited retries", "Questions change each time") + "</div>" +
      '<div class="mt-24"><button type="button" class="btn btn-primary btn-block" data-act="test-start">Start test</button></div>';
    show(h, { title: "Unit test", back: { label: u.title, onClick: () => showUnit(u.id, "back") } });
  }

  function startTest() {
    clearFooter();
    const u = testCtx.unit;
    EX.run({
      items: EX.testSet(u, 10), title: "Unit " + u.num + " test",
      onDone: res => {
        const out = store.completeUnitTest(u.id, res.total ? res.correct : 0, res.total || 1);
        showTestResults(out, res);
      },
      onExit: () => showUnit(u.id, "back")
    });
  }

  function showTestResults(out, res) {
    const u = testCtx.unit;
    const hasNextMeta = UNIT_META.some(m => m.num === u.num + 1);
    const nextU = unitByNum(u.num + 1);
    let msg;
    if (out.passed) {
      msg = out.firstPass && hasNextMeta
        ? (nextU ? "Well done! Unit " + nextU.num + " is waiting for you." : "The next unit is coming soon.")
        : "Test passed.";
    } else {
      msg = "You need " + store.PASS_PCT + "% to pass. Review the lessons and try again.";
    }

    let h = '<div class="results"><div class="trophy">' + (out.passed ? "🏆" : "📘") + "</div><h2>" +
      (out.passed ? "Bestanden!" : "Almost there") + '</h2><div class="muted">' + msg + "</div>" +
      (out.leveledUp ? '<div class="mt-8">' + UI.chip("⬆️ Level up!", "blue") + "</div>" : "") +
      '<div class="stat-grid">' + UI.statPill(out.pct + "%", "Score") + UI.statPill("+" + out.xp, "XP") +
      UI.statPill(res.correct + "/" + res.total, "Correct") + "</div>" +
      '<button type="button" class="btn btn-primary btn-block" data-act="tres-done">' + (out.passed ? "Continue" : "Back to unit") + "</button>" +
      '<button type="button" class="btn btn-ghost btn-block mt-8" data-act="test-start">' + (out.passed ? "Retake test" : "Try again") + "</button></div>";

    show(h, { title: "Results", anim: "fade" });
    if (out.passed) { UI.confetti(3200); UI.sfx("win"); }
  }

  /* =========================================================
     GENERIC RESULTS (practice & review)
     ========================================================= */
  function showSimpleResults(o) {
    simpleCtx = o;
    const pct = o.res.total ? Math.round((o.res.correct / o.res.total) * 100) : 0;
    const h = '<div class="results"><div class="trophy">' + (pct >= 80 ? "🎉" : "💪") + "</div><h2>" + esc(o.title) + "</h2>" +
      '<div class="muted">' + (o.sub || "") + "</div>" +
      '<div class="stat-grid">' + UI.statPill(pct + "%", "Accuracy") + UI.statPill("+" + o.xp, "XP") +
      UI.statPill(o.res.correct + "/" + o.res.total, "Correct") + "</div>" +
      (o.again ? '<button type="button" class="btn btn-primary btn-block" data-act="simple-again">' + esc(o.againLabel || "Again") + "</button>" : "") +
      '<button type="button" class="btn ' + (o.again ? "btn-secondary mt-8" : "btn-primary") + ' btn-block" data-act="simple-done">Done</button></div>';
    show(h, { title: "Results", anim: "fade" });
    if (pct >= 80) { UI.confetti(1800); UI.sfx("win"); }
  }

  /* =========================================================
     PRACTICE TAB
     ========================================================= */
  function showPractice(anim) {
    tab = "practice";
    const pool = learnedPool();
    let h = '<div class="large-title">Practice</div><div class="subtitle">Train the words you have learned.</div>';

    if (pool.length < 4) {
      h += UI.emptyState("🎯", "Practice unlocks soon", "Finish your first lesson, then come back to practise the words you have learned.");
      return show(h, { title: "Practice", anim: anim || "fade" });
    }

    h += '<div class="list">' +
      navRow("quiz", "", "⚡", "Quick quiz", "10 mixed questions") +
      navRow("articles", "", "🏷️", "Article trainer", "der, die or das?") +
      navRow("listening", "", "🎧", "Listening drill", "Hear it, pick the meaning") + "</div>";

    const learned = store.sortedUnits().filter(u => unitLearned(u).length > 0);
    h += '<div class="section-title">Flashcards</div><div class="list">' + learned.map(u =>
      navRow("cards", u.id, u.icon, "Unit " + u.num + " · " + esc(u.title), unitLearned(u).length + " words")).join("") + "</div>";
    h += '<div class="section-title">Word lists</div><div class="list">' + learned.map(u =>
      navRow("vocab", u.id, "📖", "Unit " + u.num + " · " + esc(u.title), "Browse and listen")).join("") + "</div>";

    show(h, { title: "Practice", anim: anim || "fade" });
  }

  function listenItems(pool, n) {
    const out = [];
    UI.sample(pool, n).forEach(w => {
      const seen = {};
      seen[w.en] = 1;
      const ds = [];
      UI.shuffle(pool).forEach(p => { if (!seen[p.en] && ds.length < 3) { seen[p.en] = 1; ds.push(p.en); } });
      if (ds.length >= 2) out.push({ type: "listen", text: EX.full(w), options: ds.concat(w.en), answer: w.en, word: w });
    });
    return out;
  }

  function articleItems(pool, n) {
    return UI.sample(pool.filter(w => w.art), n).map(w => ({
      type: "article", noun: w.de, en: w.en, answer: w.art, word: w, say: EX.full(w)
    }));
  }

  function runPractice(label, makeItems) {
    clearFooter();
    const items = makeItems();
    if (!items.length) { UI.toast("Not enough words for this yet"); return showPractice(); }
    EX.run({
      items: items, title: label,
      onDone: res => {
        if (!res.total) { UI.toast("Nothing to practise here"); return showPractice(); }
        const xp = Math.max(3, Math.round(res.correct * 1.5));
        store.addXP(xp); store.checkBadges(); store.save(); store.emit("change");
        showSimpleResults({ title: label, res: res, xp: xp, again: () => runPractice(label, makeItems), againLabel: "Go again", done: () => showPractice("back") });
      },
      onExit: () => showPractice("back")
    });
  }

  function startCards(uid) {
    const u = unitById(uid);
    if (!u) return;
    const words = UI.sample(unitLearned(u), 20);
    clearFooter();
    EX.flashcards({
      words: words, title: u.title,
      onDone: () => { store.addXP(5); store.save(); store.emit("change"); UI.toast("+5 XP", { icon: "🎴" }); showPractice("back"); },
      onExit: () => showPractice("back")
    });
  }

  function showVocab(uid) {
    const u = unitById(uid);
    if (!u) return;
    tab = "practice";
    let h = '<div class="large-title" style="font-size:28px">' + esc(u.title) + '</div><div class="subtitle">Tap 🔊 to hear a word.</div>';
    u.lessons.forEach(l => {
      if (!store.isLessonDone(l.id) || !(l.vocab || []).length) return;
      h += '<div class="section-title">' + esc(l.title) + '</div><div class="list">' + l.vocab.map(w =>
        '<div class="list-row"><div class="grow"><div class="title">' + wordHtml(w) + '</div><div class="sub">' + esc(w.en) +
        (w.pl ? " · pl. " + esc(w.pl) : "") + "</div></div>" + UI.speakBtn(EX.full(w)) + "</div>").join("") + "</div>";
    });
    show(h, { title: u.title, back: { label: "Practice", onClick: () => showPractice("back") } });
  }

  /* =========================================================
     REVIEW TAB
     ========================================================= */
  function showReview(anim, keepScroll) {
    tab = "review";
    const due = store.dueCount(), size = store.deckSize();
    let h = '<div class="large-title">Review</div><div class="subtitle">Words you missed come back at growing intervals.</div>';

    if (!size) {
      h += UI.emptyState("🧠", "Nothing to review yet", "When you get a word wrong, it lands here so you can master it later.");
      return show(h, { title: "Review", anim: anim || "fade", keepScroll: keepScroll });
    }

    if (due > 0) {
      h += '<div class="hero"><h2>' + due + " word" + (due > 1 ? "s" : "") + ' due</h2><p>A short session keeps them fresh.</p>' +
        '<button type="button" class="btn btn-light" data-act="review-start">Start review</button></div>';
    } else {
      const next = Math.min.apply(null, store.allDeckWords().map(w => w.due));
      h += '<div class="card center"><div style="font-size:44px">🎉</div><div style="font-weight:700;font-size:18px;margin-top:6px">All caught up</div>' +
        '<div class="muted">Next review ' + untilText(next - Date.now()) + "</div></div>";
    }

    const words = store.allDeckWords().sort((a, b) => a.due - b.due);
    h += '<div class="section-title">Your deck (' + size + ')</div><div class="list">' + words.map(w =>
      '<div class="list-row"><div class="grow"><div class="title">' + wordHtml(w) + '</div><div class="sub">' + esc(w.en) +
      '</div></div><span class="muted" style="font-size:12px;letter-spacing:2px">' + "●".repeat(w.box) + "○".repeat(Math.max(0, 5 - w.box)) +
      "</span>" + UI.speakBtn(EX.full(w)) + "</div>").join("") + "</div>";

    show(h, { title: "Review", anim: anim || "fade", keepScroll: keepScroll });
  }

  function startReview() {
    clearFooter();
    const words = store.dueWords(10);
    if (!words.length) return showReview();
    EX.run({
      items: EX.reviewSet(words, 10), title: "Review",
      onDone: res => {
        if (!res.total) return showReview("back");
        const r = store.finishReview(res.correct, res.total);
        const left = store.dueCount();
        showSimpleResults({
          title: "Review complete", res: res, xp: r.xp,
          sub: left ? left + " more word" + (left > 1 ? "s" : "") + " due" : "You are all caught up",
          again: left ? startReview : null, againLabel: "Review more", done: () => showReview("back")
        });
      },
      onExit: () => showReview("back")
    });
  }

  /* =========================================================
     PROFILE TAB
     ========================================================= */
  function showProfile(anim, keepScroll) {
    tab = "profile";
    const lv = store.levelInfo(), name = store.getSetting("name") || "";
    const goal = store.dailyGoal(), rate = store.getSetting("rate");
    const wk = store.weekXP();
    const max = Math.max.apply(null, wk.map(d => d.xp).concat(goal, 1));
    const badges = store.badgeList(), earned = badges.filter(b => b.earned).length;

    let h = '<div class="large-title">Profile</div>';
    if (!store.persistent) {
      h += '<div class="card" style="border-left:4px solid var(--orange);margin-bottom:12px"><b>Progress is not being saved.</b><div class="muted">' +
        "Your browser is blocking storage (private mode?). Progress will reset when you close this page.</div></div>";
    }

    h += '<div class="card row"><div class="icon-tile" style="width:56px;height:56px;border-radius:50%;font-size:28px">' +
      (name ? esc(name.charAt(0).toUpperCase()) : "🙂") + '</div><div class="grow"><input id="set-name" class="text-input" style="padding:10px 12px;font-size:18px" ' +
      'type="text" maxlength="24" placeholder="Your name" value="' + esc(name) + '" autocomplete="off"></div>' +
      UI.ring(lv.pct, { color: "var(--blue)", label: "Lv " + lv.level }) + "</div>";

    h += '<div class="stats-row">' + UI.statPill("🔥 " + store.currentStreak(), "Streak") +
      UI.statPill(store.learnedCount(), "Words") + UI.statPill(store.lessonsDoneCount(), "Lessons") + "</div>";

    h += '<div class="section-title">This week</div><div class="card"><div style="display:flex;gap:8px">' + wk.map(d =>
      '<div style="flex:1;text-align:center"><div style="height:84px;display:flex;align-items:flex-end"><div style="width:100%;border-radius:6px;background:' +
      (d.today ? "var(--accent)" : "var(--surface-3)") + ";height:" + Math.max(4, Math.round((d.xp / max) * 100)) +
      '%"></div></div><div class="muted" style="font-size:12px;margin-top:6px">' + d.label + "</div></div>").join("") + "</div></div>";

    if (store.unitsPassedCount() >= 12) {
      h += '<div class="hero mt-16" style="background:linear-gradient(135deg,#ff9f0a,#ff375f)"><h2>🏆 Zertifikat A1</h2><p>Awarded to ' +
        (name ? esc(name) : "you") + " for completing all 12 units.</p></div>";
    }

    h += '<div class="section-title">Badges · ' + earned + "/" + badges.length + '</div><div class="badge-grid">' + badges.map(b =>
      '<button type="button" class="badge-item' + (b.earned ? "" : " locked") + '" data-act="badge" data-arg="' + esc(b.id) +
      '"><span class="emoji">' + b.emoji + '</span><span class="name">' + esc(b.name) + "</span></button>").join("") + "</div>";

    const rates = [["Slow", 0.65], ["Normal", 0.85], ["Fast", 1.0]];
    const goals = [20, 50, 100];
    const voice = !speech || !speech.supported ? "Audio is not supported in this browser."
      : speech.hasGermanVoice ? "Voice: " + esc(speech.voiceName)
      : "No German voice found. Install one in your device settings.";

    h += '<div class="section-title">Settings</div><div class="list">' +
      '<div class="list-row"><div class="grow"><div class="title">Sound</div><div class="sub">Audio and effects</div></div>' +
      UI.switchHtml("set-sound", store.getSetting("sound") !== false) + "</div>" +
      '<div class="list-row"><div class="grow"><div class="title">Autoplay audio</div><div class="sub">Speak words automatically</div></div>' +
      UI.switchHtml("set-autoplay", store.getSetting("autoplay") !== false) + "</div>" +
      '<div class="list-row" style="flex-wrap:wrap"><div class="grow"><div class="title">Speech speed</div></div><div class="row">' +
      rates.map(r => '<button type="button" class="chip' + (Math.abs(rate - r[1]) < 0.01 ? " blue" : "") + '" data-act="rate" data-arg="' + r[1] + '">' + r[0] + "</button>").join("") +
      "</div></div>" +
      '<div class="list-row" style="flex-wrap:wrap"><div class="grow"><div class="title">Daily goal</div></div><div class="row">' +
      goals.map(g => '<button type="button" class="chip' + (goal === g ? " blue" : "") + '" data-act="goal" data-arg="' + g + '">' + g + " XP</button>").join("") +
      "</div></div>" +
      '<div class="list-row"><div class="grow"><div class="title">Test voice</div><div class="sub">' + voice + "</div></div>" +
      UI.speakBtn("Guten Tag! Wie geht es dir?") + "</div></div>";

    h += '<div class="mt-24"><button type="button" class="btn btn-danger btn-block" data-act="reset">Reset all progress</button></div>' +
      '<div class="center muted mt-16" style="font-size:13px">Deutsch A1 · progress is saved on this device</div>';

    show(h, { title: "Profile", anim: anim || "fade", keepScroll: keepScroll });
  }

  /* =========================================================
     ACTIONS (data-act dispatch)
     ========================================================= */
  const acts = {
    guide: id => showUnitGuide(id),
    next: () => {
      const s = nextStep();
      if (!s) return;
      if (s.kind === "lesson") showLessonIntro(s.unit.id, s.idx);
      else showTestIntro(s.unit.id);
    },
    unit: id => {
      const u = unitById(id);
      if (!u) return;
      if (!store.unitUnlocked(id)) {
        UI.toast("Pass the Unit " + (u.num - 1) + " test to unlock this", { icon: "🔒" });
        return;
      }
      showUnit(id);
    },
    lesson: arg => {
      const p = arg.split("|"), u = unitById(p[0]), i = +p[1];
      if (!u) return;
      if (!store.lessonUnlocked(u, i)) { UI.toast("Finish the previous lesson first", { icon: "🔒" }); return; }
      showLessonIntro(u.id, i);
    },
    test: id => {
      const u = unitById(id);
      if (!u) return;
      if (!store.testUnlocked(u)) { UI.toast("Finish all lessons to unlock the test", { icon: "🔒" }); return; }
      showTestIntro(id);
    },
    start: () => startFlashcards(),
    tipgo: () => startExercises(),
    quit: () => {
      UI.confirm({ title: "Quit this lesson?", message: "Your progress in this session will be lost.", confirmLabel: "Quit", cancelLabel: "Keep going", danger: true })
        .then(yes => { if (yes) exitFlow(); });
    },
    "lres-next": () => {
      const c = lessonCtx;
      if (c.idx + 1 < c.unit.lessons.length) showLessonIntro(c.unit.id, c.idx + 1);
      else showUnit(c.unit.id, "back");
    },
    "lres-retry": () => { flow = { unit: lessonCtx.unit, idx: lessonCtx.idx }; startExercises(); },
    "lres-mistakes": () => {
      const c = lessonCtx;
      clearFooter();
      EX.run({
        items: c.res.mistakes, title: "Fix mistakes",
        onDone: r => {
          c.res.mistakes = r.mistakes || [];
          if (!c.res.mistakes.length) UI.toast("All fixed!", { icon: "✅" });
          showLessonResults(false);
        },
        onExit: () => showLessonResults(false)
      });
    },
    "test-start": () => startTest(),
    "tres-done": () => {
      const u = testCtx.unit;
      if (store.isUnitPassed(u.id)) showLearn("back"); else showUnit(u.id, "back");
    },
    quiz: () => runPractice("Quick quiz", () => {
      const pool = learnedPool();
      return EX.fromVocab(UI.sample(pool, 12), EX.globalPool().concat(pool), 10);
    }),
    articles: () => {
      if (learnedPool().filter(w => w.art).length < 3) { UI.toast("Learn a few more nouns first", { icon: "🏷️" }); return; }
      runPractice("Article trainer", () => articleItems(learnedPool(), 10));
    },
    listening: () => {
      if (!speech || !speech.supported || store.getSetting("sound") === false) {
        UI.toast("Turn on Sound in Profile to use listening", { icon: "🎧" });
        return;
      }
      runPractice("Listening drill", () => listenItems(learnedPool(), 10));
    },
    cards: id => startCards(id),
    vocab: id => showVocab(id),
    "review-start": () => startReview(),
    "simple-again": () => { if (simpleCtx && simpleCtx.again) simpleCtx.again(); },
    "simple-done": () => { if (simpleCtx && simpleCtx.done) simpleCtx.done(); else showLearn("back"); },
    badge: id => {
      const b = store.badgeList().filter(x => x.id === id)[0];
      if (b) UI.toast((b.earned ? "" : "Locked: ") + b.desc, { icon: b.emoji });
    },
    rate: v => { store.setSetting("rate", +v); showProfile("none", true); },
    goal: v => { store.setSetting("dailyGoal", +v); showProfile("none", true); },
    reset: () => {
      UI.confirm({ title: "Reset all progress?", message: "This deletes your XP, streak, lessons, badges and review deck. This cannot be undone.", confirmLabel: "Reset everything", danger: true })
        .then(yes => {
          if (!yes) return;
          store.reset();
          UI.toast("Progress reset", { icon: "🗑️" });
          showProfile("fade");
        });
    }
  };

  function dispatch(el) {
    const f = acts[el.getAttribute("data-act")];
    if (!f) return;
    UI.haptic("light");
    f(el.getAttribute("data-arg") || "", el);
  }

  /* =========================================================
     BOOT
     ========================================================= */
  function showTab(name, anim) {
    EX.cleanup();
    clearFooter();
    if (name === "practice") showPractice(anim);
    else if (name === "review") showReview(anim);
    else if (name === "profile") showProfile(anim);
    else showLearn(anim);
  }

  function boot() {
    try {
      store.touch();

      UI.onTab(name => showTab(name, "fade"));

      UI.screen.addEventListener("click", e => {
        if (e.target.closest("[data-speak]")) return;
        const el = e.target.closest("[data-act]");
        if (el) dispatch(el);
      });

      UI.screen.addEventListener("change", e => {
        const t = e.target;
        if (t.id === "set-sound") {
          store.setSetting("sound", t.checked);
          if (!t.checked && speech) speech.stop();
        } else if (t.id === "set-autoplay") {
          store.setSetting("autoplay", t.checked);
        }
      });

      UI.screen.addEventListener("input", e => {
        if (e.target.id === "set-name") store.setSetting("name", e.target.value.trim().slice(0, 24));
      });

      store.on("badge", b => UI.toast(b.name + " unlocked", { icon: b.emoji }));
      store.on("levelup", lv => UI.toast("Level " + lv + "!", { icon: "⬆️" }));
      store.on("change", () => UI.setReviewBadge(store.dueCount()));

      UI.setReviewBadge(store.dueCount());
      showLearn("fade");
    } catch (err) {
      console.error(err);
      UI.screen.innerHTML = '<div style="padding:40px;text-align:center">Something went wrong while starting the app. Check the browser console for details.</div>';
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();