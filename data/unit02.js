/* =========================================================
   Deutsch A1 — data/unit02.js
   Unit 2: Greetings & Introductions (6 lessons + mini-test)
   Registers itself with GA1.units.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  GA1.units.push({
    id: "u02",
    num: 2,
    title: "Greetings & Introductions",
    subtitle: "Meet people and talk about yourself",
    icon: "👋",
    color: "#30d158",
    outcomes: [
      "Greet people at any time of day and say goodbye",
      "Say your name, where you come from and where you live",
      "Choose between du and Sie",
      "Use all forms of the verb sein (to be)",
      "Name countries and languages",
      "Ask questions with W-words"
    ],

    lessons: [
      /* ---------------------------------------------------
         Lesson 1: Hallo, Tschüss and time-of-day greetings
         --------------------------------------------------- */
      {
        id: "u02l1",
        title: "Hallo & Tschüss",
        emoji: "👋",
        goal: "Greet people and say goodbye at the right time of day.",
        hook: "German greetings change with the clock. Learn four phrases and you can say hello all day long.",
        vocab: [
          { de: "Hallo", en: "hello", ex: "Hallo, Anna!", exEn: "Hello, Anna!" },
          { de: "Guten Morgen", en: "good morning", ex: "Guten Morgen, Herr Weber!", exEn: "Good morning, Mr. Weber!" },
          { de: "Guten Tag", en: "good day / hello", ex: "Guten Tag, Frau Schmidt.", exEn: "Good day, Mrs. Schmidt." },
          { de: "Guten Abend", en: "good evening", ex: "Guten Abend, Lena!", exEn: "Good evening, Lena!" },
          { de: "Gute Nacht", en: "good night", ex: "Gute Nacht, Tom!", exEn: "Good night, Tom!" },
          { de: "Tschüss", en: "bye (informal)", ex: "Tschüss, Anna!", exEn: "Bye, Anna!" },
          { de: "Auf Wiedersehen", en: "goodbye (formal)", ex: "Auf Wiedersehen, Frau Schmidt.", exEn: "Goodbye, Mrs. Schmidt." },
          { de: "Bis bald", en: "see you soon" },
          { de: "Bis morgen", en: "see you tomorrow" },
          { de: "Danke", en: "thanks", ex: "Danke, Lena!", exEn: "Thanks, Lena!" },
          { de: "Bitte", en: "please / you’re welcome" },
          { de: "Ja", en: "yes" },
          { de: "Nein", en: "no" }
        ],
        tip: {
          title: "Greetings by time of day",
          text: "Most greetings start with **Guten** and add the time of day. **Hallo** and **Tschüss** are friendly and informal. **Gute Nacht** is only said when someone is going to bed, so it is a goodbye, not a hello.",
          table: {
            head: ["Greeting", "When", "Style"],
            rows: [
              ["**Guten Morgen**", "until about 10 a.m.", "any"],
              ["**Guten Tag**", "during the day", "any"],
              ["**Guten Abend**", "from the evening", "any"],
              ["**Gute Nacht**", "before bed (goodbye)", "any"],
              ["**Hallo / Tschüss**", "any time", "informal"],
              ["**Auf Wiedersehen**", "leaving", "formal"]
            ]
          },
          examples: [
            { de: "Guten Morgen! Wie geht’s?", en: "Good morning! How are you?" },
            { de: "Tschüss, bis morgen!", en: "Bye, see you tomorrow!" }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "It is 8 a.m. What do you say when you arrive at school?",
            options: ["Guten Morgen", "Guten Abend", "Gute Nacht", "Auf Wiedersehen"], answer: 0 },
          { type: "mcq", prompt: "You are going to bed. What do you say?",
            options: ["Gute Nacht", "Guten Tag", "Guten Morgen", "Hallo"], answer: 0 },
          { type: "mcq", prompt: "Which goodbye is formal?",
            options: ["Auf Wiedersehen", "Tschüss", "Hallo", "Bis bald"], answer: 0 },
          { type: "listen", prompt: "Which greeting do you hear?", text: "Guten Abend",
            options: ["Guten Abend", "Guten Morgen", "Guten Tag", "Gute Nacht"], answer: "Guten Abend" },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "Hallo", en: "hello" },
              { de: "Tschüss", en: "bye" },
              { de: "Danke", en: "thanks" },
              { de: "Bis morgen", en: "see you tomorrow" }
            ] },
          { type: "type", prompt: "Type this in German", src: "good morning", answer: "Guten Morgen" },
          { type: "order", src: "Good evening, Lena!", answer: "Guten Abend, Lena!", extra: ["Morgen,"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 2: Ich heiße / Ich komme aus
         --------------------------------------------------- */
      {
        id: "u02l2",
        title: "Ich heiße… Ich komme aus…",
        emoji: "🙋",
        goal: "Say your name, where you are from and where you live.",
        hook: "Three short sentences introduce you to anyone: name, origin, home.",
        vocab: [
          { de: "heißen", en: "to be called", ex: "Ich heiße Lena.", exEn: "My name is Lena." },
          { de: "kommen", en: "to come", ex: "Ich komme aus Italien.", exEn: "I come from Italy." },
          { de: "wohnen", en: "to live", ex: "Ich wohne in Berlin.", exEn: "I live in Berlin." },
          { de: "Name", art: "der", pl: "Namen", en: "name" },
          { de: "Stadt", art: "die", pl: "Städte", en: "city, town" },
          { de: "Land", art: "das", pl: "Länder", en: "country" },
          { de: "aus", en: "from, out of" },
          { de: "in", en: "in" },
          { de: "Wie heißt du?", en: "What is your name?" },
          { de: "Woher kommst du?", en: "Where are you from?" },
          { de: "Wo wohnst du?", en: "Where do you live?" },
          { de: "Freut mich.", en: "Nice to meet you." },
          { de: "Und du?", en: "And you?" }
        ],
        tip: {
          title: "Verbs: the ich and du endings",
          text: "German verbs change their ending depending on who does the action. Take the stem (the verb without **-en**) and add an ending. **ich** takes **-e**, **du** takes **-st**, **er/sie** takes **-t**. When the stem ends in **ß**, the du form adds only **-t**: **du heißt**.",
          table: {
            head: ["Pronoun", "heißen", "kommen", "wohnen"],
            rows: [
              ["**ich**", "heiße", "komme", "wohne"],
              ["**du**", "heißt", "kommst", "wohnst"],
              ["**er / sie**", "heißt", "kommt", "wohnt"]
            ]
          },
          examples: [
            { de: "Ich heiße Tom. Und du?", en: "My name is Tom. And you?" },
            { de: "Woher kommst du? Ich komme aus Spanien.", en: "Where are you from? I come from Spain." }
          ]
        },
        exercises: [
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ Lena.", en: "My name is Lena.",
            options: ["heiße", "heißt", "heißen"], answer: "heiße", explain: "**ich** takes **-e**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Woher ___ du?", en: "Where are you from?",
            options: ["kommst", "komme", "kommt"], answer: "kommst", explain: "**du** takes **-st**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wo ___ du?", en: "Where do you live?",
            options: ["wohnst", "wohne", "wohnt"], answer: "wohnst", explain: "**du** takes **-st**." },
          { type: "mcq", prompt: "Which question asks for your name?",
            options: ["Wie heißt du?", "Woher kommst du?", "Wo wohnst du?", "Und du?"], answer: 0 },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Ich wohne in Berlin.",
            options: ["Ich wohne in Berlin.", "Ich komme aus Berlin.", "Ich heiße Berlin.", "Du wohnst in Berlin."],
            answer: "Ich wohne in Berlin." },
          { type: "type", prompt: "Type this in German", src: "Nice to meet you.", answer: "Freut mich." },
          { type: "order", src: "I live in Berlin.", answer: "Ich wohne in Berlin.", extra: ["aus"] },
          { type: "order", src: "Where are you from?", answer: "Woher kommst du?", extra: ["wohnst"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 3: du vs. Sie
         --------------------------------------------------- */
      {
        id: "u02l3",
        title: "du or Sie?",
        emoji: "🤝",
        goal: "Choose between informal and formal address.",
        hook: "German has two ways to say ‘you’. Picking the right one shows respect.",
        vocab: [
          { de: "du", en: "you (informal, one person)", ex: "Wie heißt du?", exEn: "What is your name?" },
          { de: "Sie", en: "you (formal)", ex: "Wie heißen Sie?", exEn: "What is your name? (formal)" },
          { de: "ihr", en: "you (informal, several people)", ex: "Woher kommt ihr?", exEn: "Where are you from? (to a group)" },
          { de: "Herr", art: "der", pl: "Herren", en: "Mr., gentleman", ex: "Guten Tag, Herr Weber.", exEn: "Good day, Mr. Weber." },
          { de: "Frau", art: "die", pl: "Frauen", en: "Mrs., Ms., woman", ex: "Guten Tag, Frau Schmidt.", exEn: "Good day, Mrs. Schmidt." },
          { de: "Entschuldigung", en: "excuse me, sorry" },
          { de: "Wie geht’s?", en: "How are you? (informal)" },
          { de: "Wie geht es Ihnen?", en: "How are you? (formal)" },
          { de: "Gut, danke.", en: "Fine, thanks." },
          { de: "Und Ihnen?", en: "And you? (formal)" },
          { de: "Sehr gut", en: "very well" },
          { de: "Es geht.", en: "So-so." }
        ],
        tip: {
          title: "du vs. Sie",
          text: "Use **du** with friends, family, children and people your age in casual settings. Use **Sie** with strangers, officials, teachers, bosses and in shops. **Sie** is always written with a capital S, and its verb ending is the same as for ‘they’: **Wie heißen Sie?** When unsure, start with **Sie**. The other person will say if **du** is fine.",
          table: {
            head: ["Situation", "Use", "Example"],
            rows: [
              ["Friend, family, child", "**du**", "Wie geht’s?"],
              ["Stranger, shop, office", "**Sie**", "Wie geht es Ihnen?"],
              ["Boss, teacher, doctor", "**Sie**", "Woher kommen Sie?"],
              ["Group of friends", "**ihr**", "Wo wohnt ihr?"]
            ]
          },
          examples: [
            { de: "Hallo, Tom! Wie geht’s?", en: "Hi, Tom! How are you?" },
            { de: "Guten Tag, Frau Schmidt. Wie geht es Ihnen?", en: "Good day, Mrs. Schmidt. How are you?" }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "You meet your new boss. Which greeting fits best?",
            options: ["Guten Tag, Frau Weber.", "Hallo, Anna!", "Tschüss!", "Na, wie geht’s?"], answer: 0 },
          { type: "mcq", prompt: "Which word do you use for a close friend?",
            options: ["du", "Sie", "Herr", "Frau"], answer: 0 },
          { type: "mcq", prompt: "How is the formal ‘you’ always written?",
            options: ["With a capital S", "With a small s", "As Si", "As Zi"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wie heißen ___?", en: "What is your name? (formal)",
            options: ["Sie", "du", "ihr"], answer: "Sie", explain: "Formal address uses **Sie** with the verb form **heißen**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wie geht es ___?", en: "How are you? (formal)",
            options: ["Ihnen", "dir", "euch"], answer: "Ihnen", explain: "**Ihnen** is the formal form. **dir** is informal." },
          { type: "listen", prompt: "Which question do you hear?", text: "Wie geht es Ihnen?",
            options: ["Wie geht es Ihnen?", "Wie geht’s?", "Wie heißen Sie?", "Woher kommen Sie?"], answer: "Wie geht es Ihnen?" },
          { type: "order", src: "How are you? (informal)", answer: "Wie geht’s?", extra: ["Ihnen"] },
          { type: "order", src: "Fine, thanks.", answer: "Gut, danke.", extra: ["bitte"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 4: sein (to be)
         --------------------------------------------------- */
      {
        id: "u02l4",
        title: "sein: to be",
        emoji: "🧩",
        goal: "Use every form of the most important German verb.",
        hook: "Sein is irregular, so you simply have to learn it. Luckily, you will use it in almost every conversation.",
        vocab: [
          { de: "sein", en: "to be" },
          { de: "Student", art: "der", pl: "Studenten", en: "student (male)", ex: "Ich bin Student.", exEn: "I am a student." },
          { de: "Studentin", art: "die", pl: "Studentinnen", en: "student (female)", ex: "Sie ist Studentin.", exEn: "She is a student." },
          { de: "Lehrer", art: "der", pl: "Lehrer", en: "teacher (male)" },
          { de: "Lehrerin", art: "die", pl: "Lehrerinnen", en: "teacher (female)" },
          { de: "Arzt", art: "der", pl: "Ärzte", en: "doctor (male)", ex: "Er ist Arzt.", exEn: "He is a doctor." },
          { de: "Ärztin", art: "die", pl: "Ärztinnen", en: "doctor (female)" },
          { de: "glücklich", en: "happy", ex: "Ihr seid glücklich.", exEn: "You are happy." },
          { de: "krank", en: "sick" },
          { de: "hier", en: "here", ex: "Wir sind hier.", exEn: "We are here." },
          { de: "da", en: "there, here" },
          { de: "auch", en: "also, too" }
        ],
        tip: {
          title: "The verb sein",
          text: "**sein** is irregular, so its forms do not follow the normal endings. After **sein**, a job needs no article: **Ich bin Student**, not ‘Ich bin ein Student’.",
          table: {
            head: ["Pronoun", "sein", "Example"],
            rows: [
              ["**ich**", "bin", "Ich bin müde."],
              ["**du**", "bist", "Du bist hier."],
              ["**er / sie / es**", "ist", "Er ist Arzt."],
              ["**wir**", "sind", "Wir sind Studenten."],
              ["**ihr**", "seid", "Ihr seid glücklich."],
              ["**sie / Sie**", "sind", "Sie sind Lehrer."]
            ]
          },
          examples: [
            { de: "Ich bin Student und du bist Lehrerin.", en: "I am a student and you are a teacher." },
            { de: "Wir sind auch hier.", en: "We are here too." }
          ]
        },
        exercises: [
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ müde.", en: "I am tired.",
            options: ["bin", "bist", "ist", "sind"], answer: "bin" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ hier.", en: "You are here.",
            options: ["bist", "bin", "ist", "seid"], answer: "bist" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Er ___ Arzt.", en: "He is a doctor.",
            options: ["ist", "bist", "sind", "seid"], answer: "ist" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ihr ___ glücklich.", en: "You (all) are happy.",
            options: ["seid", "sind", "bist", "ist"], answer: "seid", explain: "**ihr** takes **seid**." },
          { type: "mcq", prompt: "Which form goes with ‘wir’ (we)?",
            options: ["sind", "seid", "ist", "bin"], answer: 0 },
          { type: "match", prompt: "Match the pronoun with the form of sein",
            pairs: [
              { de: "ich", en: "bin" },
              { de: "du", en: "bist" },
              { de: "wir", en: "sind" },
              { de: "ihr", en: "seid" }
            ] },
          { type: "article", noun: "Student", en: "student (male)", answer: "der" },
          { type: "type", prompt: "Type this in German", src: "I am", answer: "ich bin" },
          { type: "order", src: "We are students.", answer: "Wir sind Studenten.", extra: ["seid"] },
          { type: "order", src: "She is a doctor.", answer: "Sie ist Ärztin.", extra: ["ein"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 5: Countries and languages
         --------------------------------------------------- */
      {
        id: "u02l5",
        title: "Countries & Languages",
        emoji: "🌍",
        goal: "Name countries and say which languages you speak.",
        hook: "Where are you from, and what do you speak? These two answers open every first conversation.",
        vocab: [
          { de: "Deutschland", en: "Germany", ex: "Ich komme aus Deutschland.", exEn: "I come from Germany." },
          { de: "Österreich", en: "Austria" },
          { de: "Schweiz", art: "die", en: "Switzerland", ex: "Ich komme aus der Schweiz.", exEn: "I come from Switzerland." },
          { de: "Frankreich", en: "France" },
          { de: "Italien", en: "Italy" },
          { de: "Spanien", en: "Spain" },
          { de: "England", en: "England" },
          { de: "Ägypten", en: "Egypt" },
          { de: "Türkei", art: "die", en: "Turkey" },
          { de: "Deutsch", en: "German (language)", ex: "Ich spreche Deutsch.", exEn: "I speak German." },
          { de: "Englisch", en: "English (language)" },
          { de: "Französisch", en: "French (language)" },
          { de: "Arabisch", en: "Arabic (language)", ex: "Sprichst du Arabisch?", exEn: "Do you speak Arabic?" },
          { de: "sprechen", en: "to speak" },
          { de: "Sprache", art: "die", pl: "Sprachen", en: "language" }
        ],
        tip: {
          title: "Countries, languages and sprechen",
          text: "Most countries need no article: **aus Deutschland**. A few are feminine and use **die**: **die Schweiz, die Türkei**. Say **aus der Schweiz** and **aus der Türkei**. Language names are written with a capital letter and are often the same word as ‘German’, ‘English’. The verb **sprechen** changes its vowel for **du** and **er/sie**: **ich spreche, du sprichst, er spricht**.",
          table: {
            head: ["Country", "Language", "Example"],
            rows: [
              ["Deutschland", "Deutsch", "Ich spreche Deutsch."],
              ["England", "Englisch", "Du sprichst Englisch."],
              ["Frankreich", "Französisch", "Er spricht Französisch."],
              ["Ägypten", "Arabisch", "Sie spricht Arabisch."],
              ["Spanien", "Spanisch", "Wir sprechen Spanisch."]
            ]
          },
          examples: [
            { de: "Ich komme aus Ägypten. Ich spreche Arabisch und Englisch.", en: "I come from Egypt. I speak Arabic and English." },
            { de: "Sprichst du Deutsch? Ein bisschen.", en: "Do you speak German? A little." }
          ]
        },
        exercises: [
          { type: "match", prompt: "Match the country with its English name",
            pairs: [
              { de: "Deutschland", en: "Germany" },
              { de: "Frankreich", en: "France" },
              { de: "Spanien", en: "Spain" },
              { de: "Italien", en: "Italy" },
              { de: "Ägypten", en: "Egypt" }
            ] },
          { type: "mcq", prompt: "Which language do people speak in France?",
            options: ["Französisch", "Spanisch", "Italienisch", "Arabisch"], answer: 0 },
          { type: "mcq", prompt: "Which country is feminine and needs ‘die’?",
            options: ["die Schweiz", "Deutschland", "Spanien", "Italien"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ Deutsch.", en: "I speak German.",
            options: ["spreche", "sprichst", "spricht", "sprechen"], answer: "spreche" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ Englisch.", en: "You speak English.",
            options: ["sprichst", "sprechst", "spricht", "spreche"], answer: "sprichst",
            explain: "**sprechen** changes **e** to **i** for **du** and **er/sie**." },
          { type: "listen", prompt: "Which country do you hear?", text: "Österreich",
            options: ["Österreich", "Ägypten", "Spanien", "Schweiz"], answer: "Österreich" },
          { type: "type", prompt: "Type this in German", src: "Germany", answer: "Deutschland" },
          { type: "order", src: "I come from Austria.", answer: "Ich komme aus Österreich.", extra: ["wohne"] },
          { type: "order", src: "Do you speak Arabic?", answer: "Sprichst du Arabisch?", extra: ["spreche"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 6: W-questions
         --------------------------------------------------- */
      {
        id: "u02l6",
        title: "W-Questions",
        emoji: "❓",
        goal: "Ask for information with Wer, Was, Wo, Woher, Wie and more.",
        hook: "Question words in German almost all start with W. Learn them and you can ask about anything.",
        vocab: [
          { de: "Wer", en: "who", ex: "Wer ist das?", exEn: "Who is that?" },
          { de: "Was", en: "what", ex: "Was ist das?", exEn: "What is that?" },
          { de: "Wo", en: "where", ex: "Wo wohnst du?", exEn: "Where do you live?" },
          { de: "Woher", en: "where from", ex: "Woher kommst du?", exEn: "Where are you from?" },
          { de: "Wie", en: "how", ex: "Wie heißt du?", exEn: "What is your name?" },
          { de: "Wann", en: "when", ex: "Wann kommst du?", exEn: "When are you coming?" },
          { de: "Warum", en: "why", ex: "Warum bist du müde?", exEn: "Why are you tired?" },
          { de: "Wie alt", en: "how old", ex: "Wie alt bist du?", exEn: "How old are you?" },
          { de: "Das ist…", en: "That is… / This is…" },
          { de: "Jahre alt", en: "years old", ex: "Ich bin 20 Jahre alt.", exEn: "I am 20 years old." },
          { de: "Ich weiß nicht.", en: "I don’t know." },
          { de: "Was bedeutet das?", en: "What does that mean?" }
        ],
        tip: {
          title: "W-questions: the verb comes second",
          text: "Put the **W-word** first and the **verb** straight after it. The verb is always in second position. Then comes the subject (ich, du, er…). Your voice goes down at the end of a W-question.",
          table: {
            head: ["W-word", "Asks for", "Example"],
            rows: [
              ["**Wer**", "a person", "Wer ist das?"],
              ["**Was**", "a thing", "Was ist das?"],
              ["**Wo**", "a place", "Wo wohnst du?"],
              ["**Woher**", "origin", "Woher kommst du?"],
              ["**Wie**", "manner, name", "Wie heißt du?"],
              ["**Wann**", "time", "Wann kommst du?"],
              ["**Warum**", "reason", "Warum bist du hier?"]
            ]
          },
          examples: [
            { de: "Wie alt bist du? Ich bin 20 Jahre alt.", en: "How old are you? I am 20 years old." },
            { de: "Wer ist das? Das ist Anna.", en: "Who is that? That is Anna." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which W-word asks about a person?",
            options: ["Wer", "Was", "Wo", "Wann"], answer: 0 },
          { type: "mcq", prompt: "Which W-word asks where someone is from?",
            options: ["Woher", "Wo", "Wohin", "Wie"], answer: 0 },
          { type: "mcq", prompt: "In a W-question, which position does the verb take?",
            options: ["Second", "First", "Last", "Third"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ heißt du?", en: "What is your name?",
            options: ["Wie", "Wo", "Wer", "Wann"], answer: "Wie" },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ wohnst du?", en: "Where do you live?",
            options: ["Wo", "Woher", "Was", "Warum"], answer: "Wo" },
          { type: "listen", prompt: "Which question do you hear?", text: "Wie alt bist du?",
            options: ["Wie alt bist du?", "Wie heißt du?", "Woher kommst du?", "Wo wohnst du?"], answer: "Wie alt bist du?" },
          { type: "order", src: "What is that?", answer: "Was ist das?", extra: ["bin"] },
          { type: "order", src: "Why are you tired?", answer: "Warum bist du müde?", extra: ["ist"] },
          { type: "order", src: "How old are you?", answer: "Wie alt bist du?", extra: ["bin"] }
        ]
      }
    ],

    /* -----------------------------------------------------
       Unit mini-test: 10 items are drawn at random.
       Pass mark: 70% to unlock Unit 3.
       ----------------------------------------------------- */
    test: [
      { type: "mcq", prompt: "It is the evening. What do you say?",
        options: ["Guten Abend", "Guten Morgen", "Gute Nacht", "Auf Wiedersehen"], answer: 0 },
      { type: "listen", prompt: "Which greeting do you hear?", text: "Guten Morgen",
        options: ["Guten Morgen", "Guten Tag", "Guten Abend", "Gute Nacht"], answer: "Guten Morgen" },
      { type: "type", prompt: "Type this in German", src: "Good evening", answer: "Guten Abend" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ aus Italien.", en: "I come from Italy.",
        options: ["komme", "kommst", "kommt"], answer: "komme", explain: "**ich** takes **-e**." },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wo ___ du?", en: "Where do you live?",
        options: ["wohnst", "wohne", "wohnt"], answer: "wohnst", explain: "**du** takes **-st**." },
      { type: "mcq", prompt: "Which pronoun do you use with your teacher?",
        options: ["Sie", "du", "ihr", "er"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wie geht es ___?", en: "How are you? (formal)",
        options: ["Ihnen", "dir", "euch"], answer: "Ihnen" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wir ___ Studenten.", en: "We are students.",
        options: ["sind", "seid", "bin", "ist"], answer: "sind" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ihr ___ glücklich.", en: "You (all) are happy.",
        options: ["seid", "sind", "bist", "ist"], answer: "seid" },
      { type: "type", prompt: "Type this in German", src: "Austria", answer: "Österreich" },
      { type: "listen", prompt: "Which country do you hear?", text: "Frankreich",
        options: ["Frankreich", "Spanien", "Italien", "Ägypten"], answer: "Frankreich" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Er ___ Französisch.", en: "He speaks French.",
        options: ["spricht", "sprechst", "spreche", "sprechen"], answer: "spricht",
        explain: "**sprechen** changes **e** to **i** for **er/sie**." },
      { type: "mcq", prompt: "Which W-word asks for a reason?",
        options: ["Warum", "Wann", "Wer", "Wo"], answer: 0 },
      { type: "order", src: "Where are you from?", answer: "Woher kommst du?", extra: ["wohnst"] },
      { type: "order", src: "How old are you?", answer: "Wie alt bist du?", extra: ["bin"] },
      { type: "order", src: "My name is Lena.", answer: "Ich heiße Lena.", extra: ["bin"] }
    ]
  });
})();
