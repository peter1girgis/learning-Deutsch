/* =========================================================
   Deutsch A1 — store.js
   Persistent state in localStorage: progress, XP, streak,
   spaced-repetition review deck, badges and settings.
   Exposes: GA1.store
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });
  var KEY = "deutsch-a1:v1";
  var DAY = 24 * 60 * 60 * 1000;

  // Leitner boxes: days until the next review after a correct answer.
  // A word reaching the last box is "mastered" and leaves the review deck.
  var BOX_DAYS = [0, 1, 2, 4, 8, 16];
  var MASTER_BOX = BOX_DAYS.length - 1;

  var PASS_PCT = 70; // unit test pass mark
  var OPEN_ALL = true; // true = every unit, lesson and test is open from the start

  /* ---------- Defaults ---------- */
  function defaults() {
    return {
      version: 1,
      xp: 0,
      streak: 0,
      bestStreak: 0,
      lastActive: null,     // "YYYY-MM-DD" (local time)
      dailyXP: {},          // { "YYYY-MM-DD": xp }
      lessons: {},          // { lessonId: { done, stars, best, attempts } }
      tests: {},            // { unitId: { passed, best, attempts } }
      deck: {},             // review deck: { key: { de, en, art, box, due, wrong } }
      learned: {},          // { key: true } words ever seen correct
      mastered: 0,
      badges: {},           // { badgeId: timestamp }
      settings: {
        sound: true,
        autoplay: true,
        rate: 0.85,
        dailyGoal: 50,
        name: ""
      },
      created: Date.now()
    };
  }

  /* ---------- Persistence (falls back to memory if storage is blocked) ---------- */
  var state = defaults();
  var storageOK = true;

  function load() {
    try {
      var raw = window.localStorage.getItem(KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        var d = defaults();
        state = Object.assign(d, parsed);
        state.settings = Object.assign(d.settings, parsed.settings || {});
      }
    } catch (e) {
      storageOK = false;
      state = defaults();
    }
  }

  function save() {
    if (!storageOK) return;
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      storageOK = false;
    }
  }

  /* ---------- Tiny event emitter ---------- */
  var listeners = {};
  function on(name, fn) {
    (listeners[name] = listeners[name] || []).push(fn);
  }
  function emit(name, payload) {
    (listeners[name] || []).forEach(function (fn) {
      try { fn(payload); } catch (e) { console.error(e); }
    });
  }

  /* ---------- Dates ---------- */
  function dateStr(d) {
    d = d || new Date();
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
  }
  function yesterdayStr() {
    return dateStr(new Date(Date.now() - DAY));
  }

  /* ---------- Levels ---------- */
  var XP_PER_LEVEL = 200;
  function levelInfo() {
    var level = Math.floor(state.xp / XP_PER_LEVEL) + 1;
    var into = state.xp % XP_PER_LEVEL;
    return { level: level, into: into, needed: XP_PER_LEVEL, pct: Math.round((into / XP_PER_LEVEL) * 100) };
  }

  /* ---------- Streak ---------- */
  // Current streak, treating a missed day as broken (without writing).
  function currentStreak() {
    var today = dateStr();
    if (state.lastActive === today || state.lastActive === yesterdayStr()) return state.streak;
    return 0;
  }

  function touchStreak() {
    var today = dateStr();
    if (state.lastActive === today) return false;
    state.streak = state.lastActive === yesterdayStr() ? state.streak + 1 : 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    state.lastActive = today;
    return true;
  }

  /* ---------- XP ---------- */
  function addXP(n) {
    n = Math.max(0, Math.round(n || 0));
    var before = levelInfo().level;
    state.xp += n;
    var today = dateStr();
    state.dailyXP[today] = (state.dailyXP[today] || 0) + n;
    // keep only the last 30 days
    var keys = Object.keys(state.dailyXP).sort();
    while (keys.length > 30) delete state.dailyXP[keys.shift()];
    touchStreak();
    var after = levelInfo().level;
    if (after > before) emit("levelup", after);
    return after > before;
  }

  function todayXP() {
    return state.dailyXP[dateStr()] || 0;
  }

  // Last 7 days, oldest first: [{ date, label, xp }]
  function weekXP() {
    var out = [], names = ["S", "M", "T", "W", "T", "F", "S"];
    for (var i = 6; i >= 0; i--) {
      var d = new Date(Date.now() - i * DAY);
      var k = dateStr(d);
      out.push({ date: k, label: names[d.getDay()], xp: state.dailyXP[k] || 0, today: i === 0 });
    }
    return out;
  }

  /* ---------- Unit / lesson lookup helpers ---------- */
  function sortedUnits() {
    return (GA1.units || []).slice().sort(function (a, b) { return a.num - b.num; });
  }

  /* ---------- Lessons ---------- */
  function getLesson(id) {
    return state.lessons[id] || null;
  }
  function isLessonDone(id) {
    return !!(state.lessons[id] && state.lessons[id].done);
  }

  function starsFor(pct) {
    return pct >= 90 ? 3 : pct >= 75 ? 2 : 1;
  }

  // result: { correct, total, xp }
  function completeLesson(lessonId, result) {
    var total = Math.max(1, result.total || 1);
    var pct = Math.round(((result.correct || 0) / total) * 100);
    var stars = starsFor(pct);
    var rec = state.lessons[lessonId];
    var first = !rec || !rec.done;

    var xp = result.xp != null ? result.xp : 10 + (result.correct || 0) * 2;
    if (!first) xp = Math.floor(xp / 2); // repeats earn half
    if (pct === 100) xp += 5;            // perfect bonus

    state.lessons[lessonId] = {
      done: true,
      stars: Math.max(stars, rec ? rec.stars : 0),
      best: Math.max(pct, rec ? rec.best : 0),
      attempts: (rec ? rec.attempts : 0) + 1
    };

    var leveledUp = addXP(xp);
    var newBadges = checkBadges();
    save();
    emit("change");
    return { xp: xp, stars: stars, pct: pct, first: first, leveledUp: leveledUp, newBadges: newBadges };
  }

  // Lesson is unlocked if it is first in its unit or the previous one is done.
  function lessonUnlocked(unit, index) {
    if (OPEN_ALL) return true;
    if (!unit || index === 0) return true;
    return isLessonDone(unit.lessons[index - 1].id);
  }

  function unitLessonsDone(unit) {
    if (!unit) return 0;
    return unit.lessons.filter(function (l) { return isLessonDone(l.id); }).length;
  }

  /* ---------- Unit tests ---------- */
  function getTest(unitId) {
    return state.tests[unitId] || null;
  }
  function isUnitPassed(unitId) {
    return !!(state.tests[unitId] && state.tests[unitId].passed);
  }

  function completeUnitTest(unitId, correct, total) {
    total = Math.max(1, total || 1);
    var pct = Math.round((correct / total) * 100);
    var passed = pct >= PASS_PCT;
    var rec = state.tests[unitId];
    var firstPass = passed && !(rec && rec.passed);

    state.tests[unitId] = {
      passed: passed || !!(rec && rec.passed),
      best: Math.max(pct, rec ? rec.best : 0),
      attempts: (rec ? rec.attempts : 0) + 1
    };

    var xp = passed ? (firstPass ? 40 : 15) : 5;
    if (pct === 100) xp += 10;
    var leveledUp = addXP(xp);
    var newBadges = checkBadges();
    save();
    emit("change");
    return { passed: passed, pct: pct, xp: xp, firstPass: firstPass, leveledUp: leveledUp, newBadges: newBadges };
  }

  // A unit unlocks when the previous unit's test has been passed.
  function unitUnlocked(unitId) {
    if (OPEN_ALL) return true;
    var list = sortedUnits();
    var i = list.findIndex(function (u) { return u.id === unitId; });
    if (i <= 0) return true;
    return isUnitPassed(list[i - 1].id);
  }

  // The unit test is open when all lessons are done (or when everything is open).
  function testUnlocked(unit) {
    if (OPEN_ALL) return true;
    return !!unit && unitLessonsDone(unit) >= unit.lessons.length;
  }

  function unitProgress(unit) {
    if (!unit) return 0;
    var steps = unit.lessons.length + 1; // lessons + mini-test
    var done = unitLessonsDone(unit) + (isUnitPassed(unit.id) ? 1 : 0);
    return Math.round((done / steps) * 100);
  }

  function unitsPassedCount() {
    return sortedUnits().filter(function (u) { return isUnitPassed(u.id); }).length;
  }

  function lessonsDoneCount() {
    return Object.keys(state.lessons).filter(function (k) { return state.lessons[k].done; }).length;
  }

  /* ---------- Words & spaced repetition ---------- */
  function wordKey(w) {
    return (w.de || "").toLowerCase().trim();
  }

  // Call whenever a vocab item is answered in a lesson, test or review.
  //   correct=false -> add/reset in the review deck
  //   correct=true  -> mark learned; if in deck, move up a box
  function recordWord(word, correct) {
    if (!word || !word.de) return;
    var key = wordKey(word);
    var now = Date.now();
    var entry = state.deck[key];

    if (!correct) {
      state.deck[key] = {
        de: word.de, en: word.en || "", art: word.art || "",
        box: 0, due: now, wrong: (entry ? entry.wrong : 0) + 1
      };
      return;
    }

    state.learned[key] = true;
    if (entry) {
      entry.box += 1;
      if (entry.box >= MASTER_BOX) {
        delete state.deck[key];
        state.mastered += 1;
      } else {
        entry.due = now + BOX_DAYS[entry.box] * DAY;
      }
    }
  }

  function dueWords(limit) {
    var now = Date.now();
    var list = Object.keys(state.deck)
      .map(function (k) { var e = state.deck[k]; e.key = k; return e; })
      .filter(function (e) { return e.due <= now; })
      .sort(function (a, b) { return a.due - b.due; });
    return limit ? list.slice(0, limit) : list;
  }
  function dueCount() { return dueWords().length; }
  function deckSize() { return Object.keys(state.deck).length; }
  function allDeckWords() {
    return Object.keys(state.deck).map(function (k) { var e = state.deck[k]; e.key = k; return e; });
  }
  function learnedCount() { return Object.keys(state.learned).length; }

  function finishReview(correct, total) {
    var xp = Math.max(5, (correct || 0) * 2);
    addXP(xp);
    var newBadges = checkBadges();
    save();
    emit("change");
    return { xp: xp, newBadges: newBadges };
  }

  /* ---------- Badges ---------- */
  var BADGES = [
    { id: "first",    emoji: "🌱", name: "First Step",    desc: "Complete your first lesson",   test: function (s) { return lessonsDoneCount() >= 1; } },
    { id: "five",     emoji: "📚", name: "Bookworm",      desc: "Complete 5 lessons",           test: function (s) { return lessonsDoneCount() >= 5; } },
    { id: "twenty",   emoji: "🎓", name: "Scholar",       desc: "Complete 20 lessons",          test: function (s) { return lessonsDoneCount() >= 20; } },
    { id: "perfect",  emoji: "💎", name: "Perfekt!",      desc: "Get 100% in a lesson",         test: function (s) { return Object.keys(s.lessons).some(function (k) { return s.lessons[k].best === 100; }); } },
    { id: "streak3",  emoji: "🔥", name: "On Fire",       desc: "3-day streak",                 test: function (s) { return s.bestStreak >= 3; } },
    { id: "streak7",  emoji: "⚡", name: "Week Warrior",  desc: "7-day streak",                 test: function (s) { return s.bestStreak >= 7; } },
    { id: "xp500",    emoji: "⭐", name: "Rising Star",   desc: "Earn 500 XP",                  test: function (s) { return s.xp >= 500; } },
    { id: "xp2000",   emoji: "🌟", name: "Superstar",     desc: "Earn 2000 XP",                 test: function (s) { return s.xp >= 2000; } },
    { id: "words50",  emoji: "🗣️", name: "Wortschatz",    desc: "Learn 50 words",               test: function (s) { return Object.keys(s.learned).length >= 50; } },
    { id: "words200", emoji: "📖", name: "Vocab Pro",     desc: "Learn 200 words",              test: function (s) { return Object.keys(s.learned).length >= 200; } },
    { id: "master",   emoji: "🧠", name: "Memory Master", desc: "Master 10 review words",       test: function (s) { return s.mastered >= 10; } },
    { id: "unit1",    emoji: "🏅", name: "Unit Cleared",  desc: "Pass your first unit test",    test: function (s) { return unitsPassedCount() >= 1; } },
    { id: "half",     emoji: "🚀", name: "Halfway There", desc: "Pass 6 unit tests",            test: function (s) { return unitsPassedCount() >= 6; } },
    { id: "a1",       emoji: "🏆", name: "A1 Complete",   desc: "Pass all 12 units",            test: function (s) { return unitsPassedCount() >= 12; } }
  ];

  function checkBadges() {
    var fresh = [];
    BADGES.forEach(function (b) {
      if (!state.badges[b.id] && b.test(state)) {
        state.badges[b.id] = Date.now();
        fresh.push(b);
        emit("badge", b);
      }
    });
    return fresh;
  }

  function badgeList() {
    return BADGES.map(function (b) {
      return { id: b.id, emoji: b.emoji, name: b.name, desc: b.desc, earned: !!state.badges[b.id] };
    });
  }

  /* ---------- Settings ---------- */
  function setSetting(key, value) {
    state.settings[key] = value;
    save();
    emit("settings", { key: key, value: value });
  }
  function getSetting(key) {
    return state.settings[key];
  }

  /* ---------- Reset ---------- */
  function reset() {
    var keepSettings = state.settings;
    state = defaults();
    state.settings = keepSettings;
    save();
    emit("change");
  }

  /* ---------- Misc ---------- */
  function touch() {
    // call on app open so a broken streak is reflected in the UI
    save();
  }

  load();

  GA1.store = {
    // raw state (read-only use)
    get state() { return state; },
    get persistent() { return storageOK; },
    PASS_PCT: PASS_PCT,
    OPEN_ALL: OPEN_ALL,

    on: on, emit: emit, save: save, reset: reset, touch: touch,

    // xp / level / streak
    addXP: addXP, levelInfo: levelInfo, todayXP: todayXP, weekXP: weekXP,
    currentStreak: currentStreak, dailyGoal: function () { return state.settings.dailyGoal; },

    // lessons & units
    getLesson: getLesson, isLessonDone: isLessonDone, completeLesson: completeLesson,
    lessonUnlocked: lessonUnlocked, unitLessonsDone: unitLessonsDone,
    getTest: getTest, isUnitPassed: isUnitPassed, completeUnitTest: completeUnitTest,
    unitUnlocked: unitUnlocked, testUnlocked: testUnlocked, unitProgress: unitProgress,
    unitsPassedCount: unitsPassedCount, lessonsDoneCount: lessonsDoneCount,
    sortedUnits: sortedUnits,

    // words / review
    wordKey: wordKey, recordWord: recordWord, dueWords: dueWords, dueCount: dueCount,
    deckSize: deckSize, allDeckWords: allDeckWords, learnedCount: learnedCount,
    finishReview: finishReview,

    // badges & settings
    badgeList: badgeList, checkBadges: checkBadges,
    getSetting: getSetting, setSetting: setSetting
  };
})();