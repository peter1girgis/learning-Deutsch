#!/usr/bin/env node
/* =========================================================
   Deutsch A1 — generate-audio.js
   Reads every data/unitXX.js, extracts all German texts and
   downloads one MP3 per text into ./audio (neural voice:
   Microsoft Katja, de-DE). Run it from the project root:

     npm i msedge-tts          (once)
     node generate-audio.js

   Options:
     --voice=de-DE-ConradNeural   male voice instead of Katja
     --data=data                  folder that holds unitXX.js
     --out=audio                  output folder
     --texts=texts.json           extra texts (GA1.speech.exportTexts())
     --jobs=4                     parallel downloads
     --force                      re-generate files that exist
     --list                       only print the texts, download nothing

   Safe to re-run: existing files are skipped, so only new or
   missing sentences are downloaded.
   ========================================================= */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { pipeline } = require("stream/promises");

/* ---------- CLI ---------- */

const args = process.argv.slice(2);
const hasFlag = (n) => args.includes("--" + n);
const getOpt = (n, d) => {
  const a = args.find((x) => x.startsWith("--" + n + "="));
  return a ? a.slice(n.length + 3) : d;
};

const VOICE = getOpt("voice", "de-DE-KatjaNeural");
const OUT_DIR = path.resolve(getOpt("out", "audio"));
const EXTRA_FILE = path.resolve(getOpt("texts", "texts.json"));
const JOBS = Math.max(1, parseInt(getOpt("jobs", "4"), 10) || 4);
const FORCE = hasFlag("force");
const LIST_ONLY = hasFlag("list");

let DATA_DIR = path.resolve(getOpt("data", "data"));
if (!fs.existsSync(DATA_DIR)) DATA_DIR = process.cwd();

/* ---------- must match speech.js exactly ---------- */

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

// FNV-1a (32-bit) over UTF-8 bytes + byte length
function fileKey(str) {
  const bytes = new TextEncoder().encode(str);
  let h = 0x811c9dc5;
  for (let i = 0; i < bytes.length; i++) {
    h ^= bytes[i];
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return ("00000000" + h.toString(16)).slice(-8) + "-" + bytes.length;
}

/* ---------- language heuristics ---------- */

const DE_WORDS = new Set(
  ("ich du er sie es wir ihr ist sind bin bist habe hast hat haben und nicht kein keine " +
    "ein eine einen einem einer der die das den dem des mit von zu im am auf für wie wo wer " +
    "wann woher wohin warum ja nein bitte danke hallo gut guten morgen tag abend nacht heißt " +
    "heiße komme kommt wohne wohnt möchte möchten mag magst gern aus nach bei um auch oder " +
    "aber sehr viel viele mein meine dein deine ihre sein seine unser wir uns mir dir mich dich")
    .split(" ")
);
const EN_WORDS = new Set(
  ("the is are a to of you your for with and like as it this that on at be not from have " +
    "has do does what when where who how my his her they we i me yes no or by can " +
    "means meaning say says used use asks ask euros")
    .split(" ")
);

function score(text) {
  let de = 0, en = 0;
  String(text).toLowerCase().split(/[^a-zäöüß]+/).forEach((w) => {
    if (!w) return;
    if (/[äöüß]/.test(w) || DE_WORDS.has(w)) de++;
    if (EN_WORDS.has(w)) en++;
  });
  return { de, en };
}

/* ---------- extract texts from the unit files ---------- */

function loadUnits() {
  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => /^unit\d+\.js$/i.test(f))
    .sort();
  if (!files.length) {
    console.error("No unitXX.js files found in " + DATA_DIR);
    process.exit(1);
  }
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  files.forEach((f) => {
    vm.runInContext(fs.readFileSync(path.join(DATA_DIR, f), "utf8"), sandbox, { filename: f });
  });
  console.log("Loaded " + files.length + " unit files from " + DATA_DIR);
  return (sandbox.window.GA1 && sandbox.window.GA1.units) || [];
}

function extractTexts(units) {
  const set = new Set();

  function add(s) {
    if (typeof s !== "string") return;
    const t = clean(s.replace(/\*\*/g, ""));
    if (!t || !/[A-Za-zÄÖÜäöüß]/.test(t) || t.length > 300) return;
    const sc = score(t);
    if (sc.en > sc.de) return; // English text (translations, English answers) -> skip
    set.add(t);
  }
  function addWithArt(art, de) {
    if (!de) return;
    add(de);
    if (art) add(art + " " + de);
  }

  function addVocab(v) {
    addWithArt(v.art, v.de);
    add(v.ex);
    if (v.pl && /^[A-Za-zÄÖÜäöüß]/.test(v.pl)) {
      add(v.pl);
      add("die " + v.pl);
    }
  }

  function addTip(tip) {
    (tip.examples || []).forEach((e) => add(e.de));
    const rows = (tip.table && tip.table.rows) || [];
    rows.forEach((row) =>
      row.forEach((cell) => {
        const c = String(cell).replace(/\*\*/g, "").trim();
        if (!c || /^[\d\s.:,\-–]+$/.test(c) || c.length > 80) return;
        if (score(c).en === 0) add(c);
      })
    );
  }

  function addExercise(e) {
    if (!e) return;
    switch (e.type) {
      case "listen":
        add(e.text);
        (e.options || []).forEach(add);
        break;
      case "type":
        add(e.answer);
        if (e.word) addWithArt(e.word.art, e.word.de);
        break;
      case "fill":
        if (e.sentence) add(e.sentence.replace(/_{2,}/g, String(e.answer || "")));
        break;
      case "order":
        add(e.answer);
        break;
      case "match":
        (e.pairs || []).forEach((p) => add(p.de));
        break;
      case "article":
        add(e.noun);
        if (e.answer && e.noun) add(e.answer + " " + e.noun);
        break;
      case "mcq":
        (e.options || []).forEach((o) => {
          const s = score(o);
          if (typeof o === "string" && s.de > 0 && s.de >= s.en) add(o);
        });
        break;
    }
    // German reading passages (shown under the question)
    if (typeof e.sub === "string") {
      const s = score(e.sub);
      if (s.de > s.en) add(e.sub);
    }
    if (e.text && e.type !== "listen") add(e.text);
  }

  units.forEach((u) => {
    (u.lessons || []).forEach((l) => {
      (l.vocab || []).forEach(addVocab);
      if (l.tip) addTip(l.tip);
      (l.exercises || []).forEach(addExercise);
    });
    (u.test || []).forEach(addExercise);
  });

  // Extra texts collected from the live site with GA1.speech.exportTexts()
  if (fs.existsSync(EXTRA_FILE)) {
    try {
      const extra = JSON.parse(fs.readFileSync(EXTRA_FILE, "utf8"));
      let n = 0;
      extra.forEach((t) => {
        const c = clean(t);
        if (c && !set.has(c)) { set.add(c); n++; }
      });
      console.log("Merged " + n + " extra texts from " + path.basename(EXTRA_FILE));
    } catch (err) {
      console.warn("Could not read " + EXTRA_FILE + ": " + err.message);
    }
  }

  return Array.from(set);
}

/* ---------- download ---------- */

function escapeXml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const units = loadUnits();
  const texts = extractTexts(units);
  console.log("Found " + texts.length + " unique German texts");

  if (LIST_ONLY) {
    texts.forEach((t) => console.log(fileKey(t) + "  " + t));
    return;
  }

  let lib;
  try {
    lib = require("msedge-tts");
  } catch (e) {
    console.error('Missing dependency. Run:  npm i msedge-tts');
    process.exit(1);
  }
  const { MsEdgeTTS, OUTPUT_FORMAT } = lib;

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const todo = texts.filter((t) => FORCE || !fs.existsSync(path.join(OUT_DIR, fileKey(t) + ".mp3")));
  console.log(
    todo.length + " to download, " + (texts.length - todo.length) + " already exist" +
      " (voice: " + VOICE + ", " + JOBS + " parallel)\n"
  );

  async function makeTTS() {
    const tts = new MsEdgeTTS();
    await tts.setMetadata(VOICE, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
    return tts;
  }

  async function synth(tts, text, file) {
    const tmp = file + ".part";
    const { audioStream } = await tts.toStream(escapeXml(text));
    await pipeline(audioStream, fs.createWriteStream(tmp));
    if (fs.statSync(tmp).size < 500) {
      fs.unlinkSync(tmp);
      throw new Error("empty audio");
    }
    fs.renameSync(tmp, file);
  }

  let index = 0, done = 0;
  const failed = [];

  async function worker() {
    let tts = null;
    while (true) {
      const i = index++;
      if (i >= todo.length) break;
      const text = todo[i];
      const file = path.join(OUT_DIR, fileKey(text) + ".mp3");
      let ok = false, lastErr = null;

      for (let attempt = 1; attempt <= 4 && !ok; attempt++) {
        try {
          if (!tts) tts = await makeTTS();
          await synth(tts, text, file);
          ok = true;
        } catch (err) {
          lastErr = err;
          tts = null; // open a fresh connection on the next attempt
          try { fs.unlinkSync(file + ".part"); } catch (e) {}
          await sleep(800 * attempt);
        }
      }

      done++;
      if (ok) console.log("[" + done + "/" + todo.length + "] ok     " + text);
      else {
        failed.push(text);
        console.log("[" + done + "/" + todo.length + "] FAILED " + text + "  (" + (lastErr && lastErr.message) + ")");
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(JOBS, todo.length) }, worker));

  // manifest.json lets speech.js skip requests for files that don't exist
  const keys = fs
    .readdirSync(OUT_DIR)
    .filter((f) => /^[0-9a-f]{8}-\d+\.mp3$/.test(f))
    .map((f) => f.replace(/\.mp3$/, ""))
    .sort();
  fs.writeFileSync(path.join(OUT_DIR, "manifest.json"), JSON.stringify(keys));

  console.log("\nDone. " + keys.length + " MP3 files in " + OUT_DIR + " (manifest.json updated)");
  if (failed.length) {
    console.log(failed.length + " failed — run the script again to retry only those:");
    failed.forEach((t) => console.log("  - " + t));
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
