/* =========================================================
   Deutsch A1 — exercises.js
   Exercise engine: multiple choice, listening, matching,
   fill-in-the-blank, word order, typing, article picker and
   flashcards, plus generators that build exercise sets
   automatically from vocabulary lists.
   Exposes: GA1.exercises
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });
  var UI = GA1.ui, store = GA1.store, speech = GA1.speech;
  var esc = UI.esc;

  var PRAISE = ["Richtig!", "Super!", "Genau!", "Prima!", "Sehr gut!", "Perfekt!", "Toll!"];
  var ART_COLOR = { der: "var(--blue)", die: "var(--red)", das: "var(--green)" };
  var RANK = { mcq: 1, listen: 2, match: 3, article: 3, fill: 4, order: 5, type: 6 };
  var session = null;

  /* ---------- Helpers ---------- */
  // A noun is stored as { de: "Tisch", art: "der" }; the full form includes the article.
  function full(w) { return w.art ? w.art + " " + w.de : w.de; }

  // Lenient comparison: ignores case, punctuation and umlaut spelling (ä = ae, ß = ss).
  function norm(s) {
    return String(s || "").toLowerCase()
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .replace(/[.,!?¡¿;:"„“”'’]/g, "").replace(/\s+/g, " ").trim();
  }

  function distract(w, pool, getter, n) {
    var seen = {}, out = [];
    seen[getter(w)] = true;
    UI.shuffle(pool).forEach(function (p) {
      var v = getter(p);
      if (v && !seen[v] && out.length < n) { seen[v] = true; out.push(v); }
    });
    return out;
  }

  function listenOK() {
    return !!(speech && speech.supported && store.getSetting("sound") !== false);
  }

  function tokens(sentence) {
    return String(sentence).replace(/[.?!]+$/, "").trim().split(/\s+/);
  }

  /* ---------- Generators: vocab -> exercise items ---------- */
  function getEn(p) { return p.en; }

  function mcqDeEn(w, pool) {
    var d = distract(w, pool, getEn, 3);
    if (!d.length) return null;
    return { type: "mcq", prompt: "What does this mean?", big: full(w), speak: full(w),
      options: d.concat(w.en), answer: w.en, word: w, say: full(w) };
  }
  function mcqEnDe(w, pool) {
    var d = distract(w, pool, full, 3);
    if (!d.length) return null;
    return { type: "mcq", prompt: "How do you say “" + w.en + "”?",
      options: d.concat(full(w)), answer: full(w), word: w, say: full(w) };
  }
  function listenItem(w, pool) {
    if (!listenOK()) return null;
    var d = distract(w, pool, getEn, 3);
    if (!d.length) return null;
    return { type: "listen", text: full(w), options: d.concat(w.en), answer: w.en, word: w };
  }
  function articleItem(w) {
    if (!w.art) return null;
    return { type: "article", noun: w.de, en: w.en, answer: w.art, word: w, say: full(w) };
  }
  function typeItem(w) {
    return { type: "type", prompt: "Type this in German", src: w.en, answer: full(w), word: w, say: full(w) };
  }
  function matchItem(ws) {
    return { type: "match", words: ws, pairs: ws.map(function (w) { return { de: full(w), en: w.en }; }) };
  }

  function rankSort(items) {
    return items.map(function (it, i) { return { it: it, i: i }; })
      .sort(function (a, b) { return (RANK[a.it.type] || 3) - (RANK[b.it.type] || 3) || a.i - b.i; })
      .map(function (x) { return x.it; });
  }

  function fromVocab(vocab, pool, n) {
    vocab = (vocab || []).filter(function (w) { return w && w.de && w.en; });
    if (!vocab.length) return [];
    pool = (pool && pool.length ? pool : vocab).concat(vocab);
    n = n || 8;

    var plan = ["mcq", "listen", "match", "article", "mcqR", "mcq", "type", "listen",
                "article", "mcqR", "type", "mcq", "mcqR", "listen"];
    var ws = UI.shuffle(vocab), k = 0, used = {}, out = [], matchDone = false;

    for (var p = 0, guard = 0; out.length < n && guard < 60; p++, guard++) {
      var kind = plan[p % plan.length], item = null, w = ws[k % ws.length];
      if (kind === "match") {
        if (!matchDone && ws.length >= 3) { item = matchItem(ws.slice(0, Math.min(5, ws.length))); matchDone = true; }
      } else if (kind === "article") {
        for (var j = 0; j < ws.length; j++) {
          var c = ws[(k + j) % ws.length];
          if (c.art && !used["article" + full(c)]) { w = c; item = articleItem(c); used["article" + full(c)] = 1; break; }
        }
      } else {
        k++;
        var key = kind + full(w);
        if (!used[key]) {
          used[key] = 1;
          item = kind === "mcq" ? mcqDeEn(w, pool) : kind === "mcqR" ? mcqEnDe(w, pool) :
                 kind === "listen" ? listenItem(w, pool) : typeItem(w);
        }
      }
      if (item) out.push(item);
    }
    return rankSort(out);
  }

  function unitPool(unit) {
    var out = [];
    ((unit && unit.lessons) || []).forEach(function (l) { out = out.concat(l.vocab || []); });
    return out;
  }
  function globalPool() {
    var out = [];
    (GA1.units || []).forEach(function (u) { out = out.concat(unitPool(u)); });
    return out;
  }

  // Lesson practice: authored exercises first priority, topped up from vocab.
  function lessonSet(lesson, pool, n) {
    n = n || 8;
    var authored = (lesson.exercises || []).slice(0, Math.max(0, n - 3));
    var gen = fromVocab(lesson.vocab || [], pool, n - authored.length);
    return rankSort(authored.concat(gen));
  }

  // Unit mini-test: authored test items plus generated ones across the unit.
  function testSet(unit, n) {
    n = n || 10;
    var authored = UI.shuffle(unit.test || []).slice(0, n);
    var pool = unitPool(unit);
    var gen = n - authored.length > 0 ? fromVocab(pool, globalPool().concat(pool), n - authored.length) : [];
    return rankSort(authored.concat(gen));
  }

  // Review session from deck words [{ de, en, art }].
  function reviewSet(words, n) {
    n = n || 10;
    var ws = UI.shuffle(words).slice(0, n);
    var pool = globalPool().concat(words);
    var gens = [mcqDeEn, mcqEnDe, listenItem, typeItem];
    var out = ws.map(function (w, i) { return gens[i % gens.length](w, pool) || typeItem(w); });
    return UI.shuffle(out);
  }

  /* ---------- Shared renderers ---------- */
  function optionsHtml(v) {
    return '<div class="options">' + v.options.map(function (o, i) {
      return '<button type="button" class="option" data-i="' + i + '">' + esc(o) + "</button>";
    }).join("") + "</div>";
  }

  function optionsMount(body, v, ctx, onSelect, after) {
    var sel = -1, btns = UI.$$(".option", body);
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        btns.forEach(function (x) { x.classList.remove("selected"); });
        b.classList.add("selected");
        sel = +b.getAttribute("data-i");
        UI.sfx("tap");
        ctx.ready(true);
        if (onSelect) onSelect(v.options[sel]);
      });
    });
    ctx.setChecker(function () {
      if (sel < 0) return null;
      var ok = v.options[sel] === v.answer;
      btns.forEach(function (b, i) {
        b.classList.add("disabled");
        b.classList.remove("selected");
        if (v.options[i] === v.answer) b.classList.add("correct");
        else if (i === sel) b.classList.add("wrong");
      });
      if (after) after(ok);
      return { correct: ok, answer: v.answer };
    });
  }

  function typedHtml() {
    return '<input id="ex-input" class="text-input" type="text" autocomplete="off" autocorrect="off" ' +
      'autocapitalize="off" spellcheck="false" placeholder="Type in German…">' +
      '<div class="char-bar"><button type="button" data-ch="ä">ä</button><button type="button" data-ch="ö">ö</button>' +
      '<button type="button" data-ch="ü">ü</button><button type="button" data-ch="ß">ß</button></div>';
  }

  function typedMount(body, v, ctx) {
    var inp = UI.$("#ex-input", body);
    var answers = [v.answer].concat(v.accept || []).map(norm);
    inp.addEventListener("input", function () { ctx.ready(inp.value.trim().length > 0); });
    UI.$$(".char-bar button", body).forEach(function (b) {
      b.addEventListener("pointerdown", function (e) { e.preventDefault(); });
      b.addEventListener("click", function () {
        var s = inp.selectionStart == null ? inp.value.length : inp.selectionStart;
        var e2 = inp.selectionEnd == null ? s : inp.selectionEnd;
        inp.setRangeText(b.getAttribute("data-ch"), s, e2, "end");
        inp.dispatchEvent(new Event("input"));
        inp.focus();
      });
    });
    ctx.setChecker(function () {
      if (!inp.value.trim()) return null;
      var ok = answers.indexOf(norm(inp.value)) !== -1;
      inp.classList.add(ok ? "correct" : "wrong");
      inp.readOnly = true;
      inp.blur();
      return { correct: ok, answer: v.answer };
    });
    setTimeout(function () { inp.focus(); }, 350);
  }

  /* ---------- Exercise types ---------- */
  var types = {};

  types.mcq = {
    render: function (v) {
      return '<div class="prompt">' + esc(v.prompt || "Choose the answer") + "</div>" +
        (v.sub ? '<div class="prompt-sub">' + esc(v.sub) + "</div>" : "") +
        (v.big ? '<div class="big-word">' + esc(v.big) + "</div>" : "") +
        (v.speak ? '<div class="center mb-16">' + UI.speakBtn(v.speak) + "</div>" : "") +
        optionsHtml(v);
    },
    mount: function (body, v, ctx) {
      optionsMount(body, v, ctx);
      if (v.speak && store.getSetting("autoplay") !== false) setTimeout(function () { speech.speak(v.speak); }, 350);
    }
  };

  types.listen = {
    render: function (v) {
      return '<div class="prompt">' + esc(v.prompt || "Listen and choose the meaning") + "</div>" +
        '<button type="button" class="listen-big" data-speak="' + esc(v.text) + '" aria-label="Play audio">🔊</button>' +
        '<div class="center mb-16">' + UI.speakBtn(v.text, { slow: true }) + "</div>" + optionsHtml(v);
    },
    mount: function (body, v, ctx) {
      optionsMount(body, v, ctx);
      if (store.getSetting("autoplay") !== false) setTimeout(function () { speech.speak(v.text); }, 400);
    }
  };

  types.article = {
    prep: function (v) { v.options = ["der", "die", "das"]; },
    render: function (v) {
      return '<div class="prompt">' + esc(v.prompt || "Which article goes with this noun?") + "</div>" +
        '<div class="big-word"><span id="art-slot">___</span> ' + esc(v.noun) + "</div>" +
        '<div class="prompt-sub center mb-16">' + esc(v.en || "") + "</div>" +
        '<div class="article-row">' + v.options.map(function (a, i) {
          return '<button type="button" class="option art-' + a + '" data-i="' + i + '" data-art="' + a + '">' + a + "</button>";
        }).join("") + "</div>";
    },
    mount: function (body, v, ctx) {
      var slot = UI.$("#art-slot", body);
      optionsMount(body, v, ctx, null, function (ok) {
        slot.textContent = v.answer;
        slot.style.color = ART_COLOR[v.answer] || "var(--green)";
      });
    }
  };

  types.fill = {
    prep: function (v) {
      if (v.say === undefined) v.say = String(v.sentence).replace(/_{2,}/, v.answer);
    },
    render: function (v) {
      var blank = '<span class="fill-blank" style="display:inline-block;min-width:70px;text-align:center;' +
        'border-bottom:3px solid var(--text-3);color:var(--orange)">&nbsp;</span>';
      return '<div class="prompt-sub">' + esc(v.prompt || "Fill in the blank") + "</div>" +
        '<div class="prompt">' + esc(v.sentence).replace(/_{2,}/g, blank) + "</div>" +
        (v.en ? '<div class="prompt-sub mb-16">' + esc(v.en) + "</div>" : '<div class="spacer"></div>') +
        (v.options ? optionsHtml(v) : typedHtml());
    },
    mount: function (body, v, ctx) {
      if (!v.options) return typedMount(body, v, ctx);
      var blank = UI.$(".fill-blank", body);
      optionsMount(body, v, ctx, function (t) {
        blank.textContent = t;
        blank.style.color = "var(--text)";
      }, function (ok) {
        blank.textContent = v.answer;
        blank.style.color = ok ? "var(--green)" : "var(--red)";
      });
    }
  };

  types.type = {
    prep: function (v) { if (v.say === undefined) v.say = v.answer; },
    render: function (v) {
      return '<div class="prompt-sub">' + esc(v.prompt || "Translate into German") + "</div>" +
        '<div class="prompt mb-16">' + esc(v.src || v.en || "") + "</div>" + typedHtml();
    },
    mount: typedMount
  };

  types.order = {
    prep: function (v) {
      var toks = tokens(v.answer), all = toks.concat(v.extra || []), b, tries = 0;
      do { b = UI.shuffle(all); tries++; }
      while (all.length > 1 && b.join(" ") === toks.join(" ") && tries < 6);
      v.bank = b;
      if (v.say === undefined) v.say = v.answer;
    },
    render: function (v) {
      return '<div class="prompt-sub">' + esc(v.prompt || "Translate into German") + "</div>" +
        '<div class="prompt mb-16">' + esc(v.src || v.en || "") + "</div>" +
        '<div class="answer-line"></div><div class="word-bank">' +
        v.bank.map(function (w, i) {
          return '<button type="button" class="word-chip" data-b="' + i + '">' + esc(w) + "</button>";
        }).join("") + "</div>";
    },
    mount: function (body, v, ctx) {
      var line = UI.$(".answer-line", body), bank = UI.$(".word-bank", body);
      var chosen = [], locked = false;
      var targets = [v.answer].concat(v.alts || []).map(norm);

      bank.addEventListener("click", function (e) {
        var c = e.target.closest(".word-chip");
        if (locked || !c || c.classList.contains("used")) return;
        var i = +c.getAttribute("data-b");
        chosen.push(i);
        c.classList.add("used");
        var n = document.createElement("button");
        n.type = "button"; n.className = "word-chip";
        n.setAttribute("data-b", i); n.textContent = v.bank[i];
        line.appendChild(n);
        UI.sfx("tap");
        ctx.ready(true);
      });
      line.addEventListener("click", function (e) {
        var c = e.target.closest(".word-chip");
        if (locked || !c) return;
        var i = +c.getAttribute("data-b");
        chosen.splice(chosen.indexOf(i), 1);
        line.removeChild(c);
        var b = bank.querySelector('[data-b="' + i + '"]');
        if (b) b.classList.remove("used");
        ctx.ready(chosen.length > 0);
      });
      ctx.setChecker(function () {
        if (!chosen.length) return null;
        locked = true;
        var attempt = chosen.map(function (i) { return v.bank[i]; }).join(" ");
        var ok = targets.indexOf(norm(attempt)) !== -1;
        line.style.borderBottomColor = ok ? "var(--green)" : "var(--red)";
        return { correct: ok, answer: v.answer };
      });
    }
  };

  types.match = {
    prep: function (v) {
      var idx = v.pairs.map(function (p, i) { return i; });
      v.left = UI.shuffle(idx);
      v.right = UI.shuffle(idx);
    },
    render: function (v) {
      function col(side, order) {
        return '<div class="match-col">' + order.map(function (i) {
          return '<button type="button" class="match-item" data-side="' + side + '" data-i="' + i + '">' +
            esc(side === "l" ? v.pairs[i].de : v.pairs[i].en) + "</button>";
        }).join("") + "</div>";
      }
      return '<div class="prompt">' + esc(v.prompt || "Match the pairs") + "</div>" +
        '<div class="match-grid">' + col("l", v.left) + col("r", v.right) + "</div>";
    },
    mount: function (body, v, ctx) {
      ctx.noCheck();
      var words = v.words || v.pairs;
      var sel = { l: null, r: null }, left = v.pairs.length, bad = false, miss = {}, busy = false;

      body.addEventListener("click", function (e) {
        var b = e.target.closest(".match-item");
        if (!b || busy || b.classList.contains("matched")) return;
        var side = b.getAttribute("data-side"), i = +b.getAttribute("data-i");
        if (sel[side]) sel[side].classList.remove("selected");
        sel[side] = b;
        b.classList.add("selected");
        UI.sfx("tap");
        if (side === "l") speech.speak(v.pairs[i].de);
        if (sel.l && sel.r) check();
      });

      function check() {
        var l = sel.l, r = sel.r;
        var li = +l.getAttribute("data-i"), ri = +r.getAttribute("data-i");
        if (li === ri) {
          l.classList.remove("selected"); r.classList.remove("selected");
          l.classList.add("matched"); r.classList.add("matched");
          sel.l = sel.r = null;
          UI.haptic("light");
          if (!miss[li]) store.recordWord(words[li], true);
          left--;
          if (left === 0) {
            ctx.resolve({
              correct: !bad, skipRecord: true,
              detail: bad ? "A few pairs were mixed up. Those words are now in your Review deck." : ""
            });
          }
        } else {
          busy = true; bad = true; miss[li] = miss[ri] = true;
          l.classList.add("wrong"); r.classList.add("wrong");
          store.recordWord(words[li], false);
          if (ri !== li) store.recordWord(words[ri], false);
          UI.haptic("error");
          setTimeout(function () {
            l.classList.remove("wrong", "selected");
            r.classList.remove("wrong", "selected");
            sel.l = sel.r = null; busy = false;
          }, 450);
        }
      }
    }
  };

  function prepare(item) {
    var v = Object.assign({}, item);
    if (v.options) {
      if (typeof v.answer === "number") v.answer = v.options[v.answer];
      if (!v.fixed) v.options = UI.shuffle(v.options);
    }
    var t = types[v.type];
    if (t && t.prep) t.prep(v);
    return v;
  }

  /* ---------- Session shell ---------- */
  function cleanup() {
    if (!session) return;
    session.alive = false;
    if (session.keys) window.removeEventListener("keydown", session.keys, true);
    [session.footer, session.fb].forEach(function (el) {
      if (el && el.parentNode) el.parentNode.removeChild(el);
    });
    session = null;
  }

  function openSession(opts) {
    cleanup();
    UI.lessonMode(true);
    UI.setNav({ title: opts.title || "", back: null });
    UI.render(
      '<div class="lesson-top"><button type="button" class="lesson-close" id="ex-close" aria-label="Close">✕</button>' +
      '<div class="progress-bar"><div class="fill" id="ex-bar" data-pct="0"></div></div></div>' +
      '<div class="lesson-body" id="ex-body"></div>', { anim: "none" });

    var footer = document.createElement("div");
    footer.className = "lesson-footer";
    var fb = document.createElement("div");
    fb.className = "feedback";
    UI.app.appendChild(footer);
    UI.app.appendChild(fb);

    var s = { footer: footer, fb: fb, body: UI.$("#ex-body"), bar: UI.$("#ex-bar"), keys: null, alive: true };
    UI.$("#ex-close").addEventListener("click", function () {
      UI.confirm({
        title: "Quit this lesson?", message: "Your progress in this session will be lost.",
        confirmLabel: "Quit", cancelLabel: "Keep going", danger: true
      }).then(function (yes) {
        if (yes && s.alive) { cleanup(); if (opts.onExit) opts.onExit(); }
      });
    });
    session = s;
    return s;
  }

  function freshBody(s) {
    var nb = document.createElement("div");
    nb.id = "ex-body";
    nb.className = "lesson-body";
    s.body.parentNode.replaceChild(nb, s.body);
    s.body = nb;
    UI.screen.scrollTop = 0;
    return nb;
  }

  /* ---------- Run an exercise session ---------- */
  // run({ items, title, onDone(result), onExit() })
  // result: { correct, total, pct, mistakes: [items] }
  function run(opts) {
    var items = (opts.items || []).filter(function (it) {
      return types[it.type] && (it.type !== "listen" || listenOK());
    });
    if (!items.length) {
      cleanup();
      if (opts.onDone) opts.onDone({ correct: 0, total: 0, pct: 0, mistakes: [] });
      return null;
    }

    var s = openSession(opts);
    var idx = 0, correct = 0, mistakes = [], total = items.length;
    var answered = false, checker = null, view = null;

    s.footer.innerHTML = '<button type="button" class="btn btn-primary btn-block" id="ex-check" disabled>Check</button>';
    var checkBtn = UI.$("#ex-check", s.footer);

    var ctx = {
      ready: function (on) { if (!answered) checkBtn.disabled = !on; },
      setChecker: function (fn) { checker = fn; },
      noCheck: function () { s.footer.classList.add("hidden"); },
      resolve: resolve
    };

    function next() {
      if (!s.alive) return;
      if (idx >= total) return finish();
      s.bar.style.width = Math.round((idx / total) * 100) + "%";
      view = prepare(items[idx]);
      answered = false; checker = null;
      s.fb.classList.remove("show");
      s.footer.classList.remove("hidden");
      checkBtn.disabled = true;
      var body = freshBody(s);
      body.innerHTML = types[view.type].render(view);
      types[view.type].mount(body, view, ctx);
    }

    function resolve(r) {
      if (answered) return;
      answered = true;
      checkBtn.disabled = true;
      if (r.correct) correct++; else mistakes.push(items[idx]);
      if (view.word && !r.skipRecord) store.recordWord(view.word, r.correct);
      UI.sfx(r.correct ? "good" : "bad");
      UI.haptic(r.correct ? "success" : "error");

      var detail = "";
      if (!r.correct && r.answer) detail += "Correct answer: <b>" + esc(r.answer) + "</b>";
      if (r.detail) detail += (detail ? "<br>" : "") + esc(r.detail);
      if (view.explain) detail += (detail ? "<br>" : "") + UI.hl(view.explain);

      s.fb.className = "feedback " + (r.correct ? "good" : "bad");
      s.fb.innerHTML = '<div class="fb-title">' + (r.correct ? UI.pick(PRAISE) + " 🎉" : "Not quite") + "</div>" +
        '<div class="fb-detail">' + detail + "</div>" +
        '<button type="button" class="btn btn-block ' + (r.correct ? "btn-success" : "btn-light") +
        '" id="ex-next">Continue</button>';
      void s.fb.offsetWidth;
      s.fb.classList.add("show");
      UI.$("#ex-next", s.fb).addEventListener("click", function () { idx++; next(); });

      if (view.say && store.getSetting("autoplay") !== false) {
        var say = view.say;
        setTimeout(function () { if (s.alive) speech.speak(say); }, 250);
      }
    }

    function finish() {
      s.bar.style.width = "100%";
      s.fb.classList.remove("show");
      s.footer.classList.add("hidden");
      var res = { correct: correct, total: total, pct: Math.round((correct / total) * 100), mistakes: mistakes };
      setTimeout(function () {
        if (!s.alive) return;
        cleanup();
        if (opts.onDone) opts.onDone(res);
      }, 300);
    }

    checkBtn.addEventListener("click", function () {
      if (answered || !checker) return;
      var r = checker();
      if (r) resolve(r);
    });

    s.keys = function (e) {
      if (e.key !== "Enter" || e.shiftKey) return;
      if (UI.$("#sheet-root.open")) return;
      if (e.target && e.target.id === "ex-close") return;
      e.preventDefault();
      if (s.fb.classList.contains("show")) {
        var n = UI.$("#ex-next", s.fb);
        if (n) n.click();
      } else if (!checkBtn.disabled && !s.footer.classList.contains("hidden")) {
        checkBtn.click();
      }
    };
    window.addEventListener("keydown", s.keys, true);

    next();
    return { destroy: cleanup };
  }

  /* ---------- Flashcards ---------- */
  // flashcards({ words, title, onDone({ total, again }), onExit() })
  function flashcards(opts) {
    var words = (opts.words || []).filter(function (w) { return w && w.de && w.en; });
    if (!words.length) {
      cleanup();
      if (opts.onDone) opts.onDone({ total: 0, again: 0 });
      return null;
    }

    var s = openSession(opts);
    var queue = words.slice(), total = words.length, done = 0, again = 0;
    var requeued = {}, revealed = false;

    function show() {
      if (!s.alive) return;
      if (!queue.length) return finish();
      var w = queue[0];
      revealed = false;
      s.bar.style.width = Math.round((done / total) * 100) + "%";
      var body = freshBody(s);

      var back = '<div class="gloss">' + esc(w.en) + "</div>" +
        (w.pl ? '<div class="example-line">Plural: die ' + esc(w.pl) + "</div>" : "") +
        (w.ex ? '<div class="example-line"><i>' + esc(w.ex) + "</i>" +
          (w.exEn ? "<br>" + esc(w.exEn) : "") + "</div>" : "");

      body.innerHTML =
        '<div class="fc-counter">Card ' + Math.min(done + 1, total) + " of " + total + "</div>" +
        '<div class="flashcard-wrap"><div class="flashcard" id="fc" role="button" tabindex="0" aria-label="Flip card">' +
        '<div class="face front"><div class="word">' + esc(full(w)) + "</div>" + UI.speakBtn(full(w)) +
        '<div class="hint">Tap to flip</div></div>' +
        '<div class="face back">' + back + "</div></div></div>";

      s.footer.innerHTML = '<button type="button" class="btn btn-primary btn-block" id="fc-flip">Show answer</button>';
      var card = UI.$("#fc", body);
      card.addEventListener("click", flip);
      card.addEventListener("keydown", function (e) {
        if (e.key === " ") { e.preventDefault(); flip(); }
      });
      if (store.getSetting("autoplay") !== false) setTimeout(function () { speech.speak(full(w)); }, 350);
    }

    function flip() {
      var card = UI.$("#fc", s.body);
      if (!card) return;
      card.classList.toggle("flipped");
      UI.sfx("tap");
      if (!revealed) {
        revealed = true;
        s.footer.innerHTML = '<div class="fc-actions"><button type="button" class="btn btn-secondary" id="fc-again">Again</button>' +
          '<button type="button" class="btn btn-success" id="fc-got">Got it</button></div>';
      }
    }

    function grade(got) {
      var w = queue.shift();
      if (got) done++;
      else {
        again++;
        var k = store.wordKey(w);
        if (!requeued[k]) { requeued[k] = 1; queue.push(w); } else done++;
      }
      UI.haptic("light");
      show();
    }

    function finish() {
      s.bar.style.width = "100%";
      s.footer.classList.add("hidden");
      setTimeout(function () {
        if (!s.alive) return;
        cleanup();
        if (opts.onDone) opts.onDone({ total: total, again: again });
      }, 250);
    }

    s.footer.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      if (b.id === "fc-flip") flip();
      else if (b.id === "fc-got") grade(true);
      else if (b.id === "fc-again") grade(false);
    });

    show();
    return { destroy: cleanup };
  }

  /* ---------- Public API ---------- */
  GA1.exercises = {
    run: run, flashcards: flashcards, cleanup: cleanup,
    fromVocab: fromVocab, lessonSet: lessonSet, testSet: testSet, reviewSet: reviewSet,
    unitPool: unitPool, globalPool: globalPool,
    full: full, norm: norm, types: types
  };
})();