/* =========================================================
   Deutsch A1 — data/unit12.js
   Unit 12: A1 Review & Final Exam (5 lessons + final test)
   Registers itself with GA1.units.

   Note on the engine: a lesson plays its first 5 authored
   exercises plus 3 generated from vocab, so the first five
   exercises of every lesson here are deliberately mixed types.
   Reading passages go in the `sub` field of an mcq item.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  GA1.units.push({
    id: "u12",
    num: 12,
    title: "A1 Review & Final Exam",
    subtitle: "Review everything, then take the final exam",
    icon: "🎓",
    color: "#d1d1d6",
    outcomes: [
      "Review the core grammar of Units 1 to 4",
      "Review verbs, objects and negation from Units 5 to 8",
      "Read short everyday texts and answer questions",
      "Understand short spoken messages",
      "Practise with a mock exam in the style of the Goethe A1 test"
    ],

    lessons: [
      /* ---------------------------------------------------
         Lesson 1: Review: basics and people (Units 1-4)
         --------------------------------------------------- */
      {
        id: "u12l1",
        title: "Review: Basics & People",
        emoji: "🔁",
        goal: "Review sein, haben, questions, numbers and family.",
        hook: "These sentences are the foundation of everything you say in German. Make sure they feel automatic.",
        vocab: [
          { de: "Wie heißt du?", en: "What is your name?" },
          { de: "Woher kommst du?", en: "Where do you come from?" },
          { de: "Wie alt bist du?", en: "How old are you?" },
          { de: "Ich bin zwanzig Jahre alt.", en: "I am twenty years old." },
          { de: "Das ist meine Schwester.", en: "That is my sister." },
          { de: "Meine Mutter ist Lehrerin.", en: "My mother is a teacher." },
          { de: "Wie spät ist es?", en: "What time is it?" },
          { de: "Es ist halb vier.", en: "It is half past three (3:30)." },
          { de: "Wir sind Studenten.", en: "We are students." },
          { de: "Sie hat einen Bruder.", en: "She has a brother." },
          { de: "Ich wohne in Berlin.", en: "I live in Berlin." },
          { de: "Wo wohnst du?", en: "Where do you live?" }
        ],
        tip: {
          title: "Your core: sein, haben and W-questions",
          text: "**sein** and **haben** are the two most important verbs. Both are **irregular**, so learn them by heart. W-questions start with the question word and the **verb is second**: **Wie heißt du? Woher kommst du? Wo wohnst du?** Remember the clock: **halb vier** means **3:30**, half **to** four. After **sein**, jobs take **no article**: **Meine Mutter ist Lehrerin.**",
          table: {
            head: ["Pronoun", "sein", "haben"],
            rows: [
              ["**ich**", "bin", "habe"],
              ["**du**", "bist", "hast"],
              ["**er / sie / es**", "ist", "hat"],
              ["**wir**", "sind", "haben"],
              ["**ihr**", "seid", "habt"],
              ["**sie / Sie**", "sind", "haben"]
            ]
          },
          examples: [
            { de: "Wie heißt du? – Ich heiße Maria. Ich bin zwanzig Jahre alt.", en: "What is your name? – I am Maria. I am twenty years old." },
            { de: "Meine Schwester hat einen Hund. Sie wohnt in Berlin.", en: "My sister has a dog. She lives in Berlin." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which sentence is correct?",
            options: ["Ich bin zwanzig Jahre alt.", "Ich habe zwanzig Jahre alt.", "Ich bist zwanzig Jahre alt.", "Ich sind zwanzig Jahre alt."], answer: 0 },
          { type: "listen", prompt: "Which question do you hear?", text: "Woher kommst du?",
            options: ["Woher kommst du?", "Wo wohnst du?", "Wie heißt du?", "Wie alt bist du?"], answer: "Woher kommst du?" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wir ___ Studenten.", en: "We are students.",
            options: ["sind", "ist", "bin", "seid"], answer: "sind" },
          { type: "match", prompt: "Match the question word with the English",
            pairs: [
              { de: "Wer", en: "who" },
              { de: "Wo", en: "where" },
              { de: "Wann", en: "when" },
              { de: "Was", en: "what" }
            ] },
          { type: "order", src: "Where do you come from?", answer: "Woher kommst du?", extra: ["Wohin"] },
          { type: "fill", prompt: "Fill in the blank", sentence: "Meine Schwester ___ eine Katze.", en: "My sister has a cat.",
            options: ["hat", "hast", "habe", "haben"], answer: "hat" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ihr ___ aus Deutschland.", en: "You (all) are from Germany.",
            options: ["seid", "sind", "bist", "ist"], answer: "seid" },
          { type: "mcq", prompt: "What time is ‘halb vier’?",
            options: ["3:30", "4:30", "3:45", "4:15"], answer: 0 },
          { type: "mcq", prompt: "What does ‘Wie spät ist es?’ ask?",
            options: ["What time is it?", "How are you?", "How old are you?", "How far is it?"], answer: 0 },
          { type: "article", noun: "Schwester", en: "sister", answer: "die" },
          { type: "type", prompt: "Type this in German", src: "How old are you?", answer: "Wie alt bist du?" },
          { type: "order", src: "My mother is a teacher.", answer: "Meine Mutter ist Lehrerin.", extra: ["Lehrer"] },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Es ist halb vier.",
            options: ["Es ist halb vier.", "Es ist Viertel vor vier.", "Es ist halb fünf.", "Es ist vier Uhr."], answer: "Es ist halb vier." }
        ]
      },

      /* ---------------------------------------------------
         Lesson 2: Review: food, routine and shopping (Units 5-8)
         --------------------------------------------------- */
      {
        id: "u12l2",
        title: "Review: Verbs & Everyday Life",
        emoji: "🔁",
        goal: "Review separable verbs, the accusative, negation and prices.",
        hook: "Eating, daily routine, shopping and your home all rely on the same handful of patterns.",
        vocab: [
          { de: "Ich möchte einen Kaffee.", en: "I would like a coffee." },
          { de: "Ich stehe um sieben Uhr auf.", en: "I get up at seven o’clock." },
          { de: "Wir kaufen heute ein.", en: "We go shopping today." },
          { de: "Ich habe keine Zeit.", en: "I have no time." },
          { de: "Ich arbeite nicht.", en: "I am not working." },
          { de: "Ich trinke immer Kaffee.", en: "I always drink coffee." },
          { de: "Wie viel kostet die Jacke?", en: "How much does the jacket cost?" },
          { de: "Das macht zwanzig Euro.", en: "That comes to twenty euros." },
          { de: "Es gibt einen Balkon.", en: "There is a balcony." },
          { de: "Die Lampe steht auf dem Tisch.", en: "The lamp is on the table." }
        ],
        tip: {
          title: "Verbs, objects and negation",
          text: "**Separable verbs** send the prefix to the end: **Ich stehe um sieben Uhr auf.** For the **accusative**, only **der** changes: **den, einen, keinen, meinen**. Negate a **noun** with **kein** and everything else with **nicht**: **Ich habe keine Zeit. Ich arbeite nicht.** After **es gibt** use the accusative: **Es gibt einen Balkon.** For **where?** use the dative: **auf dem Tisch, neben der Tür, im Bad**. Frequency words follow the verb: **Ich trinke immer Kaffee.**",
          table: {
            head: ["Pattern", "Rule", "Example"],
            rows: [
              ["**Separable verb**", "prefix at the end", "Wir kaufen heute **ein**."],
              ["**Accusative**", "der → **den / einen**", "Ich brauche **einen** Mantel."],
              ["**Negation**", "kein + noun, nicht otherwise", "Ich habe **keine** Zeit."],
              ["**es gibt**", "+ accusative", "Es gibt **einen** Tisch."],
              ["**Wo?**", "dative", "auf **dem** Tisch"]
            ]
          },
          examples: [
            { de: "Ich stehe um sieben Uhr auf und trinke immer einen Kaffee.", en: "I get up at seven and always drink a coffee." },
            { de: "Die Jacke kostet fünfzig Euro. Ich habe heute kein Geld.", en: "The jacket costs fifty euros. I have no money today." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which sentence is correct?",
            options: ["Ich stehe um sieben Uhr auf.", "Ich aufstehe um sieben Uhr.", "Ich stehe auf um sieben Uhr.", "Ich auf stehe um sieben Uhr."], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich möchte ___ Kaffee.", en: "I would like a coffee.",
            options: ["einen", "ein", "eine", "einem"], answer: "einen" },
          { type: "listen", prompt: "Which question do you hear?", text: "Wie viel kostet die Jacke?",
            options: ["Wie viel kostet die Jacke?", "Wie viel kosten die Schuhe?", "Wie alt ist die Jacke?", "Wo ist die Jacke?"], answer: "Wie viel kostet die Jacke?" },
          { type: "match", prompt: "Match the nominative with the accusative",
            pairs: [
              { de: "der Mantel", en: "den Mantel" },
              { de: "ein Rock", en: "einen Rock" },
              { de: "kein Hut", en: "keinen Hut" },
              { de: "mein Pullover", en: "meinen Pullover" }
            ] },
          { type: "order", src: "I have no time.", answer: "Ich habe keine Zeit.", extra: ["nicht"] },
          { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ gern.", en: "You like reading.",
            options: ["liest", "lest", "lese", "lesen"], answer: "liest" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das macht zwanzig ___.", en: "That comes to twenty euros.",
            options: ["Euro", "Euros", "Euren", "Eure"], answer: "Euro" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich arbeite ___.", en: "I am not working.",
            options: ["nicht", "kein", "keine", "keinen"], answer: "nicht" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wir kaufen heute ___.", en: "We go shopping today.",
            options: ["ein", "auf", "an", "mit"], answer: "ein" },
          { type: "mcq", prompt: "Which word means ‘sometimes’?",
            options: ["manchmal", "meistens", "selten", "nie"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die Lampe steht auf ___ Tisch.", en: "The lamp is on the table.",
            options: ["dem", "der", "den", "die"], answer: "dem" },
          { type: "type", prompt: "Type this in German", src: "I would like a coffee.", answer: "Ich möchte einen Kaffee." },
          { type: "order", src: "I always drink coffee.", answer: "Ich trinke immer Kaffee.", extra: ["nie"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 3: Reading practice
         --------------------------------------------------- */
      {
        id: "u12l3",
        title: "Reading Practice",
        emoji: "📖",
        goal: "Read short everyday texts and find the key information.",
        hook: "At A1 you read messages, signs and short ads. You do not need every word, only the facts.",
        vocab: [
          { de: "Viele Grüße", en: "best wishes (end of a message)" },
          { de: "Text", art: "der", pl: "Texte", en: "text" },
          { de: "Büro", art: "das", pl: "Büros", en: "office" },
          { de: "zu vermieten", en: "for rent" },
          { de: "von … bis …", en: "from … to …" },
          { de: "geöffnet", en: "open" },
          { de: "geschlossen", en: "closed" },
          { de: "richtig", en: "true, correct" },
          { de: "falsch", en: "false, wrong" },
          { de: "Richtig oder falsch?", en: "True or false?" }
        ],
        tip: {
          title: "How to read at A1",
          text: "Read the **question first**, then look for the answer in the text. Hunt for **numbers, times, days and places**: they carry most of the information. Do not stop at words you do not know. **Key signs**: **geöffnet** (open), **geschlossen** (closed), **zu vermieten** (for rent), **von … bis …** (from … to …). In a **richtig/falsch** task, check one detail at a time. A messages usually ends with **Viele Grüße** and the sender’s name.",
          table: {
            head: ["Look for…", "Example in a text"],
            rows: [
              ["**Time**", "um zehn Uhr, von 8 bis 18 Uhr"],
              ["**Day**", "am Samstag, Montag bis Freitag"],
              ["**Place**", "in Berlin, im Büro"],
              ["**Price**", "600 Euro, zwanzig Euro"],
              ["**Transport**", "mit dem Zug, mit dem Bus"]
            ]
          },
          examples: [
            { de: "Café Sonne: Montag bis Freitag geöffnet. Sonntag geschlossen.", en: "Café Sonne: open Monday to Friday. Closed on Sunday." },
            { de: "Ich komme am Samstag mit dem Zug. Viele Grüße, Tom", en: "I am coming on Saturday by train. Best wishes, Tom" }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "When does Tom arrive?",
            sub: "Hallo Lena, ich bin am Samstag in Berlin. Ich komme um zehn Uhr mit dem Zug an. Hast du Zeit? Wir können zusammen essen. Viele Grüße, Tom",
            options: ["Saturday at ten o’clock", "Sunday at ten o’clock", "Saturday at nine o’clock", "Friday at ten o’clock"], answer: 0 },
          { type: "mcq", prompt: "How does Tom travel?",
            sub: "Hallo Lena, ich bin am Samstag in Berlin. Ich komme um zehn Uhr mit dem Zug an. Hast du Zeit? Wir können zusammen essen. Viele Grüße, Tom",
            options: ["By train", "By bus", "By car", "By plane"], answer: 0 },
          { type: "mcq", prompt: "What does Tom suggest?",
            sub: "Hallo Lena, ich bin am Samstag in Berlin. Ich komme um zehn Uhr mit dem Zug an. Hast du Zeit? Wir können zusammen essen. Viele Grüße, Tom",
            options: ["Eating together", "Going to the cinema", "Visiting a museum", "Playing football"], answer: 0 },
          { type: "mcq", prompt: "What is the rent?",
            sub: "Wohnung zu vermieten: 2 Zimmer, Küche, Bad, Balkon. 50 Quadratmeter. Miete: 600 Euro. Kein Aufzug.",
            options: ["600 euros", "500 euros", "50 euros", "2 euros"], answer: 0 },
          { type: "mcq", prompt: "True or false? The apartment has an elevator.",
            sub: "Wohnung zu vermieten: 2 Zimmer, Küche, Bad, Balkon. 50 Quadratmeter. Miete: 600 Euro. Kein Aufzug.",
            options: ["False", "True"], answer: 0, fixed: true },
          { type: "mcq", prompt: "When is the café closed?",
            sub: "Café Sonne: Montag bis Freitag von 8 bis 18 Uhr geöffnet. Samstag von 9 bis 14 Uhr. Sonntag geschlossen.",
            options: ["On Sunday", "On Saturday", "On Monday", "On Friday"], answer: 0 },
          { type: "mcq", prompt: "When does the café open on Saturday?",
            sub: "Café Sonne: Montag bis Freitag von 8 bis 18 Uhr geöffnet. Samstag von 9 bis 14 Uhr. Sonntag geschlossen.",
            options: ["At 9 o’clock", "At 8 o’clock", "At 14 o’clock", "At 18 o’clock"], answer: 0 },
          { type: "mcq", prompt: "True or false? Anna goes by car on the weekend.",
            sub: "Anna wohnt in München. Sie arbeitet im Büro. Am Wochenende fährt sie oft mit dem Fahrrad.",
            options: ["False", "True"], answer: 0, fixed: true },
          { type: "mcq", prompt: "Where does Anna work?",
            sub: "Anna wohnt in München. Sie arbeitet im Büro. Am Wochenende fährt sie oft mit dem Fahrrad.",
            options: ["In an office", "In a shop", "In a school", "In a café"], answer: 0 },
          { type: "match", prompt: "Match the sign with the English",
            pairs: [
              { de: "geöffnet", en: "open" },
              { de: "geschlossen", en: "closed" },
              { de: "zu vermieten", en: "for rent" },
              { de: "Viele Grüße", en: "best wishes" }
            ] },
          { type: "fill", prompt: "Fill in the blank", sentence: "Der Laden ist von 9 ___ 18 Uhr geöffnet.", en: "The store is open from 9 to 6.",
            options: ["bis", "mit", "nach", "für"], answer: "bis" },
          { type: "type", prompt: "Type this in German", src: "closed", answer: "geschlossen" },
          { type: "order", src: "I am coming on Saturday by train.", answer: "Ich komme am Samstag mit dem Zug.", extra: ["den"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 4: Listening practice
         --------------------------------------------------- */
      {
        id: "u12l4",
        title: "Listening Practice",
        emoji: "🎧",
        goal: "Understand short spoken messages and answer questions about them.",
        hook: "Listen for the key facts: who, what, when, where and how much. You can replay each audio.",
        vocab: [
          { de: "Entschuldigung, wo ist der Bahnhof?", en: "Excuse me, where is the train station?" },
          { de: "Der Zug fährt auf Gleis fünf ab.", en: "The train leaves from platform five." },
          { de: "Ich möchte einen Tisch für zwei Personen.", en: "I would like a table for two people." },
          { de: "Person", art: "die", pl: "Personen", en: "person" },
          { de: "Ansage", art: "die", pl: "Ansagen", en: "announcement" },
          { de: "Nachricht", art: "die", pl: "Nachrichten", en: "message" },
          { de: "Hören Sie bitte.", en: "Please listen." },
          { de: "Noch einmal, bitte.", en: "Once more, please." }
        ],
        tip: {
          title: "Listening tricks",
          text: "Do not try to understand every word. First listen for **numbers, days, times and places**. Read the options **before** you play the audio, then listen for the one fact you need. German numbers are said in a **different order** from English: **einundzwanzig** is ‘one and twenty’. In an announcement, **the verb usually comes early** and a separable prefix at the end: **Der Zug fährt auf Gleis fünf ab.** Replay as often as you like, and use the slow button.",
          table: {
            head: ["Listen for…", "Typical words"],
            rows: [
              ["**Number**", "fünf, zwanzig, hundert"],
              ["**Time**", "um sieben Uhr, halb acht"],
              ["**Place**", "Bahnhof, Küche, Supermarkt"],
              ["**Day**", "am Montag, am Wochenende"],
              ["**Price**", "zehn Euro, fünfzig Cent"]
            ]
          },
          examples: [
            { de: "Achtung, der Zug nach Hamburg fährt auf Gleis fünf ab.", en: "Attention, the train to Hamburg leaves from platform five." },
            { de: "Ich möchte einen Tisch für zwei Personen, bitte.", en: "I would like a table for two people, please." }
          ]
        },
        exercises: [
          { type: "listen", prompt: "Which platform does the train leave from?", text: "Achtung, der Zug nach Hamburg fährt um zehn Uhr auf Gleis fünf ab.",
            options: ["Platform 5", "Platform 10", "Platform 15", "Platform 50"], answer: "Platform 5" },
          { type: "listen", prompt: "Where does the person want to go?", text: "Entschuldigung, wie komme ich zum Bahnhof?",
            options: ["To the train station", "To the post office", "To the bank", "To the hotel"], answer: "To the train station" },
          { type: "listen", prompt: "How many people is the table for?", text: "Guten Abend. Ich möchte einen Tisch für zwei Personen, bitte.",
            options: ["Two", "Three", "Four", "One"], answer: "Two" },
          { type: "listen", prompt: "What does the person tell you to do?", text: "Gehen Sie geradeaus und dann die erste Straße links.",
            options: ["Go straight, then turn left", "Go straight, then turn right", "Turn left, then go straight", "Stay here"], answer: "Go straight, then turn left" },
          { type: "listen", prompt: "What is the weather like?", text: "Heute regnet es und es ist kalt.",
            options: ["Rainy and cold", "Sunny and hot", "Snowy and cold", "Windy and warm"], answer: "Rainy and cold" },
          { type: "listen", prompt: "How much does the jacket cost?", text: "Die Jacke kostet fünfzig Euro.",
            options: ["50 euros", "15 euros", "40 euros", "60 euros"], answer: "50 euros" },
          { type: "listen", prompt: "What day is it?", text: "Am Samstag habe ich keine Zeit. Ich muss arbeiten.",
            options: ["Saturday", "Sunday", "Monday", "Friday"], answer: "Saturday" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Wann fährt der Zug nach München?",
            options: ["Wann fährt der Zug nach München?", "Wann kommt der Zug in München an?", "Wo fährt der Zug nach München?", "Wann fährt der Bus nach München?"], answer: "Wann fährt der Zug nach München?" },
          { type: "listen", prompt: "What does the person want to book?", text: "Ich möchte ein Doppelzimmer für zwei Nächte reservieren.",
            options: ["A double room for two nights", "A single room for two nights", "A double room for one night", "A table for two"], answer: "A double room for two nights" },
          { type: "listen", prompt: "What does Anna do on Saturday?", text: "Am Samstag steht Anna früh auf und kauft ein.",
            options: ["Gets up early and goes shopping", "Sleeps late", "Goes to work", "Visits her parents"], answer: "Gets up early and goes shopping" },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "Ansage", en: "announcement" },
              { de: "Nachricht", en: "message" },
              { de: "Person", en: "person" },
              { de: "Noch einmal, bitte.", en: "Once more, please." }
            ] },
          { type: "type", prompt: "Type what you hear", src: "Excuse me, where is the train station?", answer: "Entschuldigung, wo ist der Bahnhof?" },
          { type: "order", src: "The train leaves from platform five.", answer: "Der Zug fährt auf Gleis fünf ab.", extra: ["an"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 5: Mock exam (Goethe A1 style)
         --------------------------------------------------- */
      {
        id: "u12l5",
        title: "Mock Exam: Goethe A1 Style",
        emoji: "📝",
        goal: "Practise the exam format: listening, reading, writing and speaking.",
        hook: "The real A1 exam has four parts. Here you can see what each part asks for and practise a bit of each.",
        vocab: [
          { de: "Prüfung", art: "die", pl: "Prüfungen", en: "exam" },
          { de: "Aufgabe", art: "die", pl: "Aufgaben", en: "task" },
          { de: "Beispiel", art: "das", pl: "Beispiele", en: "example" },
          { de: "Formular", art: "das", pl: "Formulare", en: "form" },
          { de: "Vorname", art: "der", pl: "Vornamen", en: "first name" },
          { de: "Nachname", art: "der", pl: "Nachnamen", en: "last name" },
          { de: "Adresse", art: "die", pl: "Adressen", en: "address" },
          { de: "Unterschrift", art: "die", pl: "Unterschriften", en: "signature" },
          { de: "E-Mail", art: "die", pl: "E-Mails", en: "email" },
          { de: "Hören", en: "listening" },
          { de: "Lesen", en: "reading" },
          { de: "Schreiben", en: "writing" },
          { de: "Sprechen", en: "speaking" },
          { de: "Lesen Sie den Text.", en: "Read the text." },
          { de: "Wie ist Ihre Adresse?", en: "What is your address?" }
        ],
        tip: {
          title: "The four parts of the A1 exam",
          text: "The exam has **Hören** (listening), **Lesen** (reading), **Schreiben** (writing) and **Sprechen** (speaking). In **Schreiben** you fill in a **Formular** (name, address, age) and write a short message of 20 to 30 words to a friend. In **Sprechen** you introduce yourself, ask and answer questions about everyday topics and make a request. Use the **sie/Sie** forms for strangers. **Tips:** answer every question, write short and correct sentences, and use words you know well. This app tests the first three parts. Practise speaking aloud with the audio buttons.",
          table: {
            head: ["Part", "What you do", "Practise with"],
            rows: [
              ["**Hören**", "listen to short texts and answer", "Listening Practice"],
              ["**Lesen**", "read messages, signs, ads", "Reading Practice"],
              ["**Schreiben**", "fill a form, write a short message", "Type and sentence builder"],
              ["**Sprechen**", "introduce yourself, ask, request", "Say the sentences aloud"]
            ]
          },
          examples: [
            { de: "Vorname: Maria. Nachname: Schmidt. Adresse: Hauptstraße 5, Berlin.", en: "First name: Maria. Last name: Schmidt. Address: Hauptstraße 5, Berlin." },
            { de: "Hallo Tom, ich habe am Samstag Zeit. Wollen wir ins Kino gehen? Viele Grüße, Anna", en: "Hello Tom, I have time on Saturday. Shall we go to the cinema? Best wishes, Anna" }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which part of the exam is ‘Hören’?",
            options: ["Listening", "Reading", "Writing", "Speaking"], answer: 0 },
          { type: "listen", prompt: "What is the person’s first name?", text: "Mein Vorname ist Maria und mein Nachname ist Schmidt.",
            options: ["Maria", "Schmidt", "Anna", "Tom"], answer: "Maria" },
          { type: "mcq", prompt: "What do you write in the line ‘Nachname’?",
            options: ["Your last name", "Your first name", "Your address", "Your age"], answer: 0 },
          { type: "match", prompt: "Match the form field with the English",
            pairs: [
              { de: "Vorname", en: "first name" },
              { de: "Nachname", en: "last name" },
              { de: "Adresse", en: "address" },
              { de: "Unterschrift", en: "signature" }
            ] },
          { type: "order", src: "What is your address? (formal)", answer: "Wie ist Ihre Adresse?", extra: ["deine"] },
          { type: "mcq", prompt: "You want to ask a stranger for help. Which request is best?",
            options: ["Können Sie mir bitte helfen?", "Hilf mir!", "Du hilfst mir.", "Ich helfen dich."], answer: 0 },
          { type: "mcq", prompt: "You want to order a coffee politely. What do you say?",
            options: ["Ich möchte einen Kaffee, bitte.", "Ich will Kaffee.", "Kaffee! Schnell!", "Ich habe einen Kaffee."], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ Anna und komme aus Spanien.", en: "I am called Anna and come from Spain.",
            options: ["heiße", "heißt", "heißen", "heißt du"], answer: "heiße" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Hallo Tom, ich habe am Samstag Zeit. ___ wir ins Kino gehen?", en: "Shall we go to the cinema?",
            options: ["Wollen", "Will", "Wollt", "Willst"], answer: "Wollen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Viele ___, Anna", en: "Best wishes, Anna",
            options: ["Grüße", "Grüßen", "Gruß", "Grüß"], answer: "Grüße" },
          { type: "type", prompt: "Type this in German", src: "My first name is Maria.", answer: "Mein Vorname ist Maria." },
          { type: "type", prompt: "Type this in German", src: "I live in Berlin.", answer: "Ich wohne in Berlin." },
          { type: "order", src: "Do you have time on Saturday?", answer: "Hast du am Samstag Zeit?", extra: ["im"] }
        ]
      }
    ],

    /* -----------------------------------------------------
       Final exam: 10 items are drawn at random from this
       pool, which covers all twelve units.
       Pass mark: 70% (set by the app).
       ----------------------------------------------------- */
    test: [
      /* Unit 1-2: sounds, greetings, introductions */
      { type: "listen", prompt: "Which question do you hear?", text: "Wie heißt du?",
        options: ["Wie heißt du?", "Woher kommst du?", "Wie alt bist du?", "Wo wohnst du?"], answer: "Wie heißt du?" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ aus Deutschland.", en: "I come from Germany.",
        options: ["komme", "kommst", "kommt", "kommen"], answer: "komme" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wir ___ Studenten.", en: "We are students.",
        options: ["sind", "ist", "bin", "seid"], answer: "sind" },
      { type: "mcq", prompt: "Which pronoun do you use with a stranger?",
        options: ["Sie", "du", "ihr", "er"], answer: 0 },
      /* Unit 3: numbers, time, dates */
      { type: "mcq", prompt: "What time is ‘halb vier’?",
        options: ["3:30", "4:30", "3:45", "4:15"], answer: 0 },
      { type: "listen", prompt: "Which number do you hear?", text: "einundzwanzig",
        options: ["21", "12", "20", "31"], answer: "21" },
      { type: "type", prompt: "Type this in German", src: "Monday", answer: "Montag" },
      /* Unit 4: family and people */
      { type: "fill", prompt: "Fill in the blank", sentence: "Meine Schwester ___ eine Katze.", en: "My sister has a cat.",
        options: ["hat", "hast", "habe", "haben"], answer: "hat" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich habe ___ Bruder.", en: "I have a brother.",
        options: ["einen", "ein", "eine", "einem"], answer: "einen" },
      { type: "order", src: "My mother is a teacher.", answer: "Meine Mutter ist Lehrerin.", extra: ["Lehrer"] },
      /* Unit 5: food and drink */
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich möchte ___ Kaffee, bitte.", en: "I would like a coffee, please.",
        options: ["einen", "ein", "eine", "einem"], answer: "einen" },
      { type: "article", noun: "Wasser", en: "water", answer: "das" },
      { type: "mcq", prompt: "What do you say to pay the bill in a café?",
        options: ["Zahlen, bitte.", "Hallo, bitte.", "Guten Appetit.", "Prost."], answer: 0 },
      /* Unit 6: routine and hobbies */
      { type: "mcq", prompt: "Which sentence is correct?",
        options: ["Ich stehe um sieben Uhr auf.", "Ich aufstehe um sieben Uhr.", "Ich stehe auf um sieben Uhr.", "Ich auf stehe um sieben Uhr."], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich habe ___ Zeit.", en: "I have no time.",
        options: ["keine", "kein", "keinen", "nicht"], answer: "keine" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich spiele ___ Fußball.", en: "I like playing football.",
        options: ["gern", "lieber", "am liebsten", "nie"], answer: "gern" },
      /* Unit 7: shopping */
      { type: "fill", prompt: "Fill in the blank", sentence: "Wie viel ___ die Schuhe?", en: "How much do the shoes cost?",
        options: ["kosten", "kostet", "koste", "kostest"], answer: "kosten" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich brauche ___ Mantel.", en: "I need a coat.",
        options: ["einen", "ein", "eine", "einem"], answer: "einen" },
      { type: "mcq", prompt: "Which word means ‘cheap’?",
        options: ["billig", "teuer", "groß", "neu"], answer: 0 },
      /* Unit 8: house and home */
      { type: "fill", prompt: "Fill in the blank", sentence: "Es gibt ___ Balkon.", en: "There is a balcony.",
        options: ["einen", "ein", "eine", "einem"], answer: "einen" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Die Lampe steht auf ___ Tisch.", en: "The lamp is on the table.",
        options: ["dem", "der", "den", "die"], answer: "dem" },
      { type: "article", noun: "Küche", en: "kitchen", answer: "die" },
      /* Unit 9: travel and directions */
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich fahre ___ dem Bus.", en: "I take the bus.",
        options: ["mit", "in", "auf", "zu"], answer: "mit" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wie komme ich ___ Bahnhof?", en: "How do I get to the train station?",
        options: ["zum", "zur", "zu der", "nach"], answer: "zum" },
      { type: "listen", prompt: "Which sentence do you hear?", text: "Gehen Sie geradeaus und dann links.",
        options: ["Gehen Sie geradeaus und dann links.", "Gehen Sie geradeaus und dann rechts.", "Gehen Sie links und dann geradeaus.", "Fahren Sie geradeaus und dann links."], answer: "Gehen Sie geradeaus und dann links." },
      { type: "fill", prompt: "Fill in the blank", sentence: "Es ___.", en: "It is raining.",
        options: ["regnet", "regne", "regnen", "regnest"], answer: "regnet" },
      /* Unit 10: grammar fundamentals */
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich sehe ___ Hund.", en: "I see the dog.",
        options: ["den", "der", "dem", "die"], answer: "den" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich liebe ___.", en: "I love you.",
        options: ["dich", "du", "dir", "dein"], answer: "dich" },
      { type: "mcq", prompt: "Which sentence is correct?",
        options: ["Heute lerne ich Deutsch.", "Heute ich lerne Deutsch.", "Ich heute lerne Deutsch.", "Lerne heute ich Deutsch."], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "___ du Deutsch?", en: "Do you learn German?",
        options: ["Lernst", "Lerne", "Lernt", "Lernen"], answer: "Lernst" },
      /* Unit 11: modal verbs and imperative */
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ heute arbeiten.", en: "I have to work today.",
        options: ["muss", "musst", "müssen", "müsst"], answer: "muss" },
      { type: "mcq", prompt: "‘Du darfst nicht rauchen’ means:",
        options: ["You must not smoke.", "You don’t have to smoke.", "You can’t smoke well.", "You don’t want to smoke."], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "___ Sie bitte langsam.", en: "Please speak slowly.",
        options: ["Sprechen", "Sprich", "Sprecht", "Sprichst"], answer: "Sprechen" },
      { type: "mcq", prompt: "What is the du-imperative of ‘kommen’?",
        options: ["Komm!", "Kommst!", "Kommen!", "Kommt!"], answer: 0 },
      /* Reading and listening */
      { type: "mcq", prompt: "When is the café closed?",
        sub: "Café Sonne: Montag bis Freitag von 8 bis 18 Uhr geöffnet. Samstag von 9 bis 14 Uhr. Sonntag geschlossen.",
        options: ["On Sunday", "On Saturday", "On Monday", "On Friday"], answer: 0 },
      { type: "mcq", prompt: "What does Lena want?",
        sub: "Hallo Tom, ich habe am Freitag keine Zeit. Wollen wir am Samstag ins Kino gehen? Viele Grüße, Lena",
        options: ["To go to the cinema on Saturday", "To go to the cinema on Friday", "To stay home", "To cook together"], answer: 0 },
      { type: "listen", prompt: "How much does the coat cost?", text: "Der Mantel kostet neunzig Euro.",
        options: ["90 euros", "19 euros", "99 euros", "60 euros"], answer: "90 euros" },
      /* Writing */
      { type: "type", prompt: "Type this in German", src: "Do you have time on Saturday?", answer: "Hast du am Samstag Zeit?" },
      { type: "order", src: "Can you help me?", answer: "Können Sie mir helfen?", extra: ["Kannst"] },
      { type: "order", src: "I get up at seven.", answer: "Ich stehe um sieben Uhr auf.", extra: ["aufstehe"] }
    ]
  });
})();
