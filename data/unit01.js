/* =========================================================
   Deutsch A1 — data/unit01.js
   Unit 1: Alphabet & Pronunciation (5 lessons + mini-test)
   Registers itself with GA1.units.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  GA1.units.push({
    id: "u01",
    num: 1,
    title: "Alphabet & Pronunciation",
    subtitle: "Read and say German with confidence",
    icon: "🔤",
    color: "#0a84ff",
    outcomes: [
      "Know all the letters and their sounds",
      "Pronounce ä, ö, ü and ß",
      "Say ch, sch, sp, st, z, w and v correctly",
      "Spell your name out loud"
    ],

    lessons: [
      /* ---------------------------------------------------
         Lesson 1: Letters and sounds
         --------------------------------------------------- */
      {
        id: "u01l1",
        title: "Letters & Sounds",
        emoji: "🔠",
        goal: "Learn the German alphabet and its main sounds.",
        hook: "German is spelled almost exactly the way it sounds. Learn the rules once and you can read any word.",
        vocab: [
          { de: "Apfel", art: "der", pl: "Äpfel", en: "apple", ex: "Der Apfel ist rot.", exEn: "The apple is red." },
          { de: "Banane", art: "die", pl: "Bananen", en: "banana", ex: "Die Banane ist gelb.", exEn: "The banana is yellow." },
          { de: "Buch", art: "das", pl: "Bücher", en: "book", ex: "Das Buch ist neu.", exEn: "The book is new." },
          { de: "Hund", art: "der", pl: "Hunde", en: "dog", ex: "Der Hund ist groß.", exEn: "The dog is big." },
          { de: "Katze", art: "die", pl: "Katzen", en: "cat" },
          { de: "Wasser", art: "das", en: "water" },
          { de: "Milch", art: "die", en: "milk" },
          { de: "Zug", art: "der", pl: "Züge", en: "train" },
          { de: "Nase", art: "die", pl: "Nasen", en: "nose" },
          { de: "Sonne", art: "die", pl: "Sonnen", en: "sun" }
        ],
        tip: {
          title: "Key letter sounds",
          text: "German has the same 26 letters as English, plus **ä, ö, ü** and **ß**. Most letters sound familiar. These ones are different:",
          table: {
            head: ["Letter", "Sounds like", "Example"],
            rows: [
              ["**J**", "English ‘y’ in yes", "Ja"],
              ["**W**", "English ‘v’", "Wasser"],
              ["**V**", "usually English ‘f’", "Vater"],
              ["**S**", "‘z’ before a vowel", "Sonne"],
              ["**Z**", "‘ts’ as in cats", "Zug"]
            ]
          },
          examples: [
            { de: "Ja, das ist Wasser.", en: "Yes, that is water." },
            { de: "Der Zug ist da.", en: "The train is here." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "How many basic letters are in the German alphabet?", sub: "Not counting ä, ö, ü and ß.",
            options: ["24", "26", "30", "32"], answer: 1 },
          { type: "mcq", prompt: "How is the letter J pronounced in ‘Ja’?",
            options: ["Like English ‘y’ in yes", "Like English ‘j’ in jam", "Like English ‘zh’", "It is silent"], answer: 0 },
          { type: "mcq", prompt: "German W sounds like which English letter?",
            options: ["v", "w", "f", "b"], answer: 0 },
          { type: "listen", prompt: "Which word do you hear?", text: "Banane",
            options: ["Banane", "Katze", "Hund", "Milch"], answer: "Banane" },
          { type: "mcq", prompt: "The S in ‘Sonne’ sounds like…",
            options: ["z (as in zoo)", "s (as in sun)", "sh", "ts"], answer: 0 }
        ]
      },

      /* ---------------------------------------------------
         Lesson 2: Umlauts and ß
         --------------------------------------------------- */
      {
        id: "u01l2",
        title: "Umlauts ä ö ü & ß",
        emoji: "✨",
        goal: "Pronounce the special German letters.",
        hook: "Those two dots change the sound of the vowel. They are not decoration!",
        vocab: [
          { de: "Mädchen", art: "das", pl: "Mädchen", en: "girl" },
          { de: "Käse", art: "der", en: "cheese", ex: "Der Käse ist lecker.", exEn: "The cheese is tasty." },
          { de: "Bär", art: "der", pl: "Bären", en: "bear" },
          { de: "Löwe", art: "der", pl: "Löwen", en: "lion" },
          { de: "Tür", art: "die", pl: "Türen", en: "door" },
          { de: "schön", en: "beautiful", ex: "Das Mädchen ist schön.", exEn: "The girl is beautiful." },
          { de: "Straße", art: "die", pl: "Straßen", en: "street" },
          { de: "groß", en: "big", ex: "Der Löwe ist groß.", exEn: "The lion is big." },
          { de: "Fuß", art: "der", pl: "Füße", en: "foot" },
          { de: "müde", en: "tired" },
          { de: "heiß", en: "hot" }
        ],
        tip: {
          title: "Umlauts and the sharp s",
          text: "Say the base vowel, then change your mouth shape. **ß** is simply a double ‘ss’ sound. If your keyboard has no umlauts, write **ae, oe, ue** and **ss**.",
          table: {
            head: ["Letter", "Sounds like", "Example"],
            rows: [
              ["**ä**", "‘e’ in bed", "Käse"],
              ["**ö**", "say ‘e’ with round lips", "Löwe"],
              ["**ü**", "say ‘ee’ with round lips", "Tür"],
              ["**ß**", "‘ss’ (a sharp s)", "Straße"]
            ]
          },
          examples: [
            { de: "Schön = schoen", en: "beautiful (typed without ö)" },
            { de: "Groß = gross", en: "big (typed without ß)" }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which letter is the ‘sharp s’ (Eszett)?",
            options: ["ß", "ö", "ä", "ü"], answer: 0 },
          { type: "mcq", prompt: "How do you write ‘schön’ without the ö key?",
            options: ["schoen", "schon", "schohn", "scheen"], answer: 0 },
          { type: "listen", prompt: "Which word do you hear?", text: "Tür",
            options: ["Tür", "Tier", "Tor", "Tee"], answer: "Tür" },
          { type: "type", prompt: "Type this in German (ss is fine for ß)", src: "the street", answer: "die Straße",
            word: { de: "Straße", art: "die", en: "street" } },
          { type: "fill", prompt: "Fill in the blank", sentence: "Der Bär ist ___.", en: "The bear is tired.",
            answer: "müde", explain: "**ü** can be typed as **ue**." }
        ]
      },

      /* ---------------------------------------------------
         Lesson 3: ch, sch, sp, st, z, w, v
         --------------------------------------------------- */
      {
        id: "u01l3",
        title: "ch, sch, sp, st, z, w, v",
        emoji: "🗣️",
        goal: "Master the trickiest consonant sounds.",
        hook: "Four small rules cover most of the pronunciation surprises in German.",
        vocab: [
          { de: "ich", en: "I", ex: "Ich bin müde.", exEn: "I am tired." },
          { de: "Nacht", art: "die", pl: "Nächte", en: "night" },
          { de: "Schuh", art: "der", pl: "Schuhe", en: "shoe" },
          { de: "Schule", art: "die", pl: "Schulen", en: "school" },
          { de: "Sport", art: "der", en: "sport" },
          { de: "spielen", en: "to play" },
          { de: "stehen", en: "to stand" },
          { de: "Zimmer", art: "das", pl: "Zimmer", en: "room" },
          { de: "Zeit", art: "die", en: "time" },
          { de: "Vogel", art: "der", pl: "Vögel", en: "bird" },
          { de: "Vater", art: "der", pl: "Väter", en: "father" },
          { de: "nicht", en: "not" }
        ],
        tip: {
          title: "Consonant combinations",
          text: "**ch** has two sounds. After **a, o, u, au** it is a rough throat sound (Nacht). After other letters it is a soft hiss (ich).",
          table: {
            head: ["Spelling", "Sounds like", "Example"],
            rows: [
              ["**ch** (after a/o/u)", "‘ach’, rough", "Nacht"],
              ["**ch** (elsewhere)", "‘ich’, soft", "nicht"],
              ["**sch**", "‘sh’", "Schule"],
              ["**sp-** / **st-**", "‘shp’ / ‘sht’", "Sport, stehen"],
              ["**z**", "‘ts’", "Zeit"],
              ["**v**", "‘f’ in most words", "Vogel"]
            ]
          },
          examples: [
            { de: "Ich spiele Sport.", en: "I play sports." },
            { de: "Die Schule ist nicht da.", en: "The school is not there." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "How is ‘sch’ in ‘Schule’ pronounced?",
            options: ["sh (as in ship)", "sk (as in skip)", "s + ch", "ch (as in loch)"], answer: 0 },
          { type: "mcq", prompt: "Which word has the ‘ts’ sound?",
            options: ["Zeit", "Schuh", "Vogel", "Nacht"], answer: 0 },
          { type: "mcq", prompt: "Which word has the soft ‘ich’ sound?",
            options: ["nicht", "Nacht", "Buch", "Schuh"], answer: 0 },
          { type: "mcq", prompt: "At the start of a word, ‘sp’ in ‘Sport’ sounds like…",
            options: ["shp", "sp (as in spot)", "sb", "ssp"], answer: 0 },
          { type: "listen", prompt: "Which word do you hear?", text: "Zimmer",
            options: ["Zimmer", "Schule", "Sport", "Vogel"], answer: "Zimmer" }
        ]
      },

      /* ---------------------------------------------------
         Lesson 4: ei / ie / eu / äu / au
         --------------------------------------------------- */
      {
        id: "u01l4",
        title: "ei, ie, eu, äu",
        emoji: "🎵",
        goal: "Read the vowel pairs correctly.",
        hook: "Two letters, one sound. The famous ei/ie mix-up ends here.",
        vocab: [
          { de: "Ei", art: "das", pl: "Eier", en: "egg" },
          { de: "Wein", art: "der", pl: "Weine", en: "wine" },
          { de: "Biene", art: "die", pl: "Bienen", en: "bee" },
          { de: "Bier", art: "das", en: "beer" },
          { de: "vier", en: "four" },
          { de: "neu", en: "new", ex: "Das Auto ist neu.", exEn: "The car is new." },
          { de: "heute", en: "today" },
          { de: "Freund", art: "der", pl: "Freunde", en: "friend" },
          { de: "Haus", art: "das", pl: "Häuser", en: "house", ex: "Das Haus ist groß.", exEn: "The house is big." },
          { de: "Maus", art: "die", pl: "Mäuse", en: "mouse" },
          { de: "Baum", art: "der", pl: "Bäume", en: "tree" }
        ],
        tip: {
          title: "Vowel pairs: say the second letter’s name",
          text: "With **ei** and **ie**, the second letter tells you the sound. In **ie**, the **e** speaks. In **ei**, the **i** speaks (as in English ‘eye’).",
          table: {
            head: ["Spelling", "Sounds like", "Example"],
            rows: [
              ["**ei**", "‘eye’", "Wein"],
              ["**ie**", "‘ee’", "Bier"],
              ["**eu / äu**", "‘oy’", "neu, Häuser"],
              ["**au**", "‘ow’ as in cow", "Haus"]
            ]
          },
          examples: [
            { de: "Vier Eier, bitte.", en: "Four eggs, please." },
            { de: "Mein Freund ist heute da.", en: "My friend is here today." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "How is ‘ie’ pronounced in ‘Bier’?",
            options: ["ee", "eye", "ay", "yeh"], answer: 0 },
          { type: "mcq", prompt: "How is ‘ei’ pronounced in ‘Wein’?",
            options: ["eye", "ee", "ay", "oy"], answer: 0 },
          { type: "mcq", prompt: "How is ‘eu’ pronounced in ‘neu’?",
            options: ["oy", "you", "ew", "ay"], answer: 0 },
          { type: "listen", prompt: "Which word do you hear?", text: "Bier",
            options: ["Bier", "Wein", "Baum", "Haus"], answer: "Bier" },
          { type: "type", prompt: "Type this in German", src: "the house", answer: "das Haus",
            word: { de: "Haus", art: "das", en: "house" } }
        ]
      },

      /* ---------------------------------------------------
         Lesson 5: Spelling your name
         --------------------------------------------------- */
      {
        id: "u01l5",
        title: "Spelling Your Name",
        emoji: "🪪",
        goal: "Say the letter names and spell words out loud.",
        hook: "You will need this at hotels, offices and phone calls. Germans spell names all the time.",
        vocab: [
          { de: "Alphabet", art: "das", pl: "Alphabete", en: "alphabet" },
          { de: "Buchstabe", art: "der", pl: "Buchstaben", en: "letter (of the alphabet)" },
          { de: "Vorname", art: "der", pl: "Vornamen", en: "first name" },
          { de: "Nachname", art: "der", pl: "Nachnamen", en: "last name" },
          { de: "buchstabieren", en: "to spell" },
          { de: "Wie heißt du?", en: "What is your name?" },
          { de: "Ich heiße Anna.", en: "My name is Anna." },
          { de: "Wie schreibt man das?", en: "How do you spell that?" },
          { de: "Buchstabieren Sie bitte.", en: "Please spell it." },
          { de: "Wie bitte?", en: "Pardon?" },
          { de: "Noch einmal, bitte.", en: "Once more, please." },
          { de: "Langsam, bitte.", en: "Slowly, please." }
        ],
        tip: {
          title: "The German letter names",
          text: "Germans say letter names, not sounds, when spelling. Learn these and you can spell anything. Special letters: **ä** = ‘A-Umlaut’, **ö** = ‘O-Umlaut’, **ü** = ‘U-Umlaut’, **ß** = ‘Eszett’.",
          table: {
            head: ["Letter", "Name", "Letter", "Name"],
            rows: [
              ["**A**", "ah", "**N**", "enn"],
              ["**B**", "beh", "**O**", "oh"],
              ["**C**", "tseh", "**P**", "peh"],
              ["**D**", "deh", "**Q**", "koo"],
              ["**E**", "eh", "**R**", "err"],
              ["**F**", "eff", "**S**", "ess"],
              ["**G**", "geh", "**T**", "teh"],
              ["**H**", "hah", "**U**", "oo"],
              ["**I**", "ee", "**V**", "fow"],
              ["**J**", "yot", "**W**", "veh"],
              ["**K**", "kah", "**X**", "iks"],
              ["**L**", "ell", "**Y**", "ÜP-si-lon"],
              ["**M**", "emm", "**Z**", "tset"]
            ]
          },
          examples: [
            { de: "Wie schreibt man das?", en: "How do you spell that?" },
            { de: "A – N – N – A. Anna!", en: "A – N – N – A. Anna!" }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "You hear: ‘Ah – Enn – Enn – Ah’. Which name is it?",
            options: ["Anna", "Hanna", "Nina", "Ana"], answer: 0 },
          { type: "mcq", prompt: "You hear: ‘Teh – Oh – Emm’. Which name is it?",
            options: ["Tom", "Tim", "Toni", "Tam"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wie ___ man das?", en: "How do you spell that?",
            options: ["schreibt", "schreibe", "schreiben"], answer: "schreibt",
            explain: "With **man**, the verb ends in **-t**." },
          { type: "order", src: "My name is Anna.", answer: "Ich heiße Anna.", extra: ["bin"] },
          { type: "order", src: "Please spell it.", answer: "Buchstabieren Sie bitte." }
        ]
      }
    ],

    /* -----------------------------------------------------
       Unit mini-test: 10 items are drawn at random.
       Pass mark: 70% to unlock Unit 2.
       ----------------------------------------------------- */
    test: [
      { type: "mcq", prompt: "Which German letter sounds like English ‘v’?",
        options: ["W", "V", "F", "U"], answer: 0 },
      { type: "mcq", prompt: "What does ß sound like?",
        options: ["ss", "sch", "z", "b"], answer: 0 },
      { type: "listen", prompt: "Which word do you hear?", text: "Käse",
        options: ["Käse", "Löwe", "Zeit", "Haus"], answer: "Käse" },
      { type: "type", prompt: "Type this in German", src: "the door", answer: "die Tür",
        word: { de: "Tür", art: "die", en: "door" } },
      { type: "mcq", prompt: "Which word has the rough ‘ach’ sound?",
        options: ["Nacht", "nicht", "ich", "Zeit"], answer: 0 },
      { type: "mcq", prompt: "‘Zeit’ (time) starts with which sound?",
        options: ["ts", "z as in zoo", "s", "sh"], answer: 0 },
      { type: "mcq", prompt: "The ‘st’ at the start of ‘stehen’ sounds like…",
        options: ["sht", "st as in step", "sd", "sk"], answer: 0 },
      { type: "listen", prompt: "Which word do you hear?", text: "Maus",
        options: ["Maus", "Biene", "Wein", "Zeit"], answer: "Maus" },
      { type: "mcq", prompt: "How is ‘ie’ pronounced in ‘vier’?",
        options: ["ee", "eye", "oy", "ow"], answer: 0 },
      { type: "mcq", prompt: "How is ‘äu’ pronounced in ‘Häuser’?",
        options: ["oy", "ow", "ay", "ee"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ Anna.", en: "My name is Anna.",
        options: ["heiße", "heißt", "heißen"], answer: "heiße", explain: "**ich** takes **-e**." },
      { type: "order", src: "What is your name?", answer: "Wie heißt du?", extra: ["bin"] },
      { type: "type", prompt: "Type this in German", src: "the first name", answer: "der Vorname",
        word: { de: "Vorname", art: "der", en: "first name" } }
    ]
  });
})();