/* =========================================================
   Deutsch A1 — data/unit06.js
   Unit 6: Daily Routine & Hobbies (5 lessons + mini-test)
   Registers itself with GA1.units.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  GA1.units.push({
    id: "u06",
    num: 6,
    title: "Daily Routine & Hobbies",
    subtitle: "Talk about your day and your free time",
    icon: "⏰",
    color: "#64d2ff",
    outcomes: [
      "Conjugate regular verbs in the present tense",
      "Use separable verbs such as aufstehen",
      "Say what you like, prefer and like most with gern, lieber and am liebsten",
      "Say how often you do things",
      "Negate sentences with nicht and kein"
    ],

    lessons: [
      /* ---------------------------------------------------
         Lesson 1: Regular verb conjugation
         --------------------------------------------------- */
      {
        id: "u06l1",
        title: "Regular Verbs",
        emoji: "🔧",
        goal: "Conjugate regular verbs in the present tense.",
        hook: "Once you know the six endings, you can use hundreds of German verbs.",
        vocab: [
          { de: "machen", en: "to do, to make", ex: "Was machst du?", exEn: "What are you doing?" },
          { de: "lernen", en: "to learn", ex: "Ich lerne Deutsch.", exEn: "I am learning German." },
          { de: "kochen", en: "to cook", ex: "Er kocht Suppe.", exEn: "He cooks soup." },
          { de: "hören", en: "to hear, to listen", ex: "Ich höre Musik.", exEn: "I listen to music." },
          { de: "kaufen", en: "to buy", ex: "Wir kaufen Brot.", exEn: "We buy bread." },
          { de: "tanzen", en: "to dance", ex: "Du tanzt gut.", exEn: "You dance well." },
          { de: "singen", en: "to sing" },
          { de: "schwimmen", en: "to swim" },
          { de: "Musik", art: "die", en: "music" },
          { de: "Freizeit", art: "die", en: "free time" },
          { de: "Was machst du?", en: "What are you doing?" },
          { de: "Ich lerne Deutsch.", en: "I am learning German." },
          { de: "Ich höre Musik.", en: "I listen to music." }
        ],
        tip: {
          title: "Stem + ending",
          text: "Remove **-en** from the infinitive to get the **stem** (**mach-**). Then add the ending for each person. Careful: German has only one present tense, so **Ich lerne** means both ‘I learn’ and ‘I am learning’. If the stem ends in **s, ß, z or x**, the **du** form takes only **-t** (**du tanzt**).",
          table: {
            head: ["Pronoun", "machen", "lernen", "tanzen"],
            rows: [
              ["**ich**", "mache", "lerne", "tanze"],
              ["**du**", "machst", "lernst", "tanzt"],
              ["**er / sie / es**", "macht", "lernt", "tanzt"],
              ["**wir**", "machen", "lernen", "tanzen"],
              ["**ihr**", "macht", "lernt", "tanzt"],
              ["**sie / Sie**", "machen", "lernen", "tanzen"]
            ]
          },
          examples: [
            { de: "Ich lerne Deutsch und du hörst Musik.", en: "I learn German and you listen to music." },
            { de: "Wir kochen und sie tanzen.", en: "We cook and they dance." }
          ]
        },
        exercises: [
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ Deutsch.", en: "I am learning German.",
            options: ["lerne", "lernst", "lernt", "lernen"], answer: "lerne" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ Musik.", en: "You listen to music.",
            options: ["hörst", "höre", "hört", "hören"], answer: "hörst" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Er ___ Suppe.", en: "He cooks soup.",
            options: ["kocht", "kochst", "koche", "kochen"], answer: "kocht" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wir ___ Brot.", en: "We buy bread.",
            options: ["kaufen", "kauft", "kaufe", "kaufst"], answer: "kaufen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ gut.", en: "You dance well.",
            options: ["tanzt", "tanzst", "tanze", "tanzen"], answer: "tanzt",
            explain: "The stem ends in **z**, so **du** takes only **-t**." },
          { type: "mcq", prompt: "Which ending goes with ‘ihr’?",
            options: ["-t", "-st", "-e", "-en"], answer: 0 },
          { type: "listen", prompt: "Which question do you hear?", text: "Was machst du?",
            options: ["Was machst du?", "Was machen Sie?", "Was macht er?", "Was mache ich?"], answer: "Was machst du?" },
          { type: "match", prompt: "Match the pronoun with the ending",
            pairs: [
              { de: "ich", en: "-e" },
              { de: "du", en: "-st" },
              { de: "er / sie / es", en: "-t" },
              { de: "wir", en: "-en" }
            ] },
          { type: "type", prompt: "Type this in German", src: "I am learning German.", answer: "Ich lerne Deutsch." },
          { type: "order", src: "What are you doing?", answer: "Was machst du?", extra: ["mache"] },
          { type: "order", src: "I listen to music.", answer: "Ich höre Musik.", extra: ["hörst"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 2: Separable verbs
         --------------------------------------------------- */
      {
        id: "u06l2",
        title: "Separable Verbs",
        emoji: "✂️",
        goal: "Use verbs like aufstehen that split into two parts.",
        hook: "In German, the little prefix of some verbs jumps to the end of the sentence. It is a key pattern for talking about your day.",
        vocab: [
          { de: "aufstehen", en: "to get up", ex: "Ich stehe um sieben Uhr auf.", exEn: "I get up at seven o’clock." },
          { de: "aufwachen", en: "to wake up", ex: "Ich wache früh auf.", exEn: "I wake up early." },
          { de: "einkaufen", en: "to shop", ex: "Wir kaufen heute ein.", exEn: "We go shopping today." },
          { de: "aufräumen", en: "to tidy up", ex: "Du räumst das Zimmer auf.", exEn: "You tidy up the room." },
          { de: "anrufen", en: "to call (phone)", ex: "Ich rufe Anna an.", exEn: "I call Anna." },
          { de: "mitkommen", en: "to come along", ex: "Kommst du mit?", exEn: "Are you coming along?" },
          { de: "duschen", en: "to shower" },
          { de: "frühstücken", en: "to have breakfast" },
          { de: "Morgen", art: "der", pl: "Morgen", en: "morning" },
          { de: "Vormittag", art: "der", pl: "Vormittage", en: "late morning" },
          { de: "Nachmittag", art: "der", pl: "Nachmittage", en: "afternoon" },
          { de: "Abend", art: "der", pl: "Abende", en: "evening" },
          { de: "Ich stehe um sieben Uhr auf.", en: "I get up at seven o’clock." },
          { de: "Kommst du mit?", en: "Are you coming along?" }
        ],
        tip: {
          title: "The prefix goes to the end",
          text: "A separable verb has a **prefix** (**auf-, ein-, an-, mit-**). In a normal sentence, the verb part stays in **second position** and the prefix goes to the **very end**: **aufstehen → Ich stehe um sieben Uhr auf.** In the infinitive, the verb stays in one piece. In a yes/no question the conjugated verb comes first, and the prefix is still last: **Stehst du früh auf?**",
          table: {
            head: ["Verb", "Sentence", "Meaning"],
            rows: [
              ["**aufstehen**", "Ich stehe um sieben Uhr auf.", "I get up at seven."],
              ["**aufwachen**", "Ich wache früh auf.", "I wake up early."],
              ["**einkaufen**", "Wir kaufen heute ein.", "We shop today."],
              ["**anrufen**", "Ich rufe Anna an.", "I call Anna."],
              ["**mitkommen**", "Kommst du mit?", "Are you coming along?"]
            ]
          },
          examples: [
            { de: "Ich stehe um sieben Uhr auf und dusche.", en: "I get up at seven and take a shower." },
            { de: "Am Samstag kaufen wir ein.", en: "On Saturday we go shopping." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Where does the prefix of ‘aufstehen’ go in a main clause?",
            options: ["At the end of the sentence", "Right before the verb", "At the start", "It is dropped"], answer: 0 },
          { type: "mcq", prompt: "Which sentence is correct?",
            options: ["Ich stehe um sieben Uhr auf.", "Ich aufstehe um sieben Uhr.", "Ich stehe auf um sieben Uhr.", "Ich stehe um sieben auf Uhr."], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich stehe um sieben Uhr ___.", en: "I get up at seven o’clock.",
            options: ["auf", "an", "ein", "mit"], answer: "auf" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wir kaufen heute ___.", en: "We go shopping today.",
            options: ["ein", "auf", "an", "mit"], answer: "ein" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich rufe Anna ___.", en: "I call Anna.",
            options: ["an", "auf", "ein", "mit"], answer: "an" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Ich stehe um sieben Uhr auf.",
            options: ["Ich stehe um sieben Uhr auf.", "Ich wache um sieben Uhr auf.", "Ich kaufe um sieben Uhr ein.", "Ich dusche um sieben Uhr."], answer: "Ich stehe um sieben Uhr auf." },
          { type: "match", prompt: "Match the verb with the English",
            pairs: [
              { de: "aufstehen", en: "to get up" },
              { de: "einkaufen", en: "to shop" },
              { de: "anrufen", en: "to call" },
              { de: "mitkommen", en: "to come along" }
            ] },
          { type: "type", prompt: "Type this in German", src: "to get up", answer: "aufstehen" },
          { type: "order", src: "I get up at seven.", answer: "Ich stehe um sieben Uhr auf.", extra: ["aufstehe"] },
          { type: "order", src: "We go shopping today.", answer: "Wir kaufen heute ein.", extra: ["an"] },
          { type: "order", src: "Are you coming along?", answer: "Kommst du mit?", extra: ["auf"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 3: gern / lieber / am liebsten
         --------------------------------------------------- */
      {
        id: "u06l3",
        title: "gern, lieber, am liebsten",
        emoji: "❤️",
        goal: "Say what you like, prefer and like most.",
        hook: "Three small words let you talk about your hobbies and compare them.",
        vocab: [
          { de: "gern", en: "gladly, like to", ex: "Ich spiele gern Fußball.", exEn: "I like playing football." },
          { de: "lieber", en: "rather, prefer to", ex: "Ich spiele lieber Gitarre.", exEn: "I prefer playing guitar." },
          { de: "am liebsten", en: "most of all", ex: "Am liebsten schwimme ich.", exEn: "I like swimming most of all." },
          { de: "Hobby", art: "das", pl: "Hobbys", en: "hobby" },
          { de: "Fußball", art: "der", en: "football, soccer" },
          { de: "Film", art: "der", pl: "Filme", en: "film" },
          { de: "Gitarre", art: "die", pl: "Gitarren", en: "guitar" },
          { de: "lesen", en: "to read", ex: "Du liest gern.", exEn: "You like reading." },
          { de: "spielen", en: "to play" },
          { de: "Was ist dein Hobby?", en: "What is your hobby?" },
          { de: "Was machst du gern?", en: "What do you like doing?" },
          { de: "Ich lese nicht gern.", en: "I don’t like reading." }
        ],
        tip: {
          title: "Three degrees of liking",
          text: "Put **gern** after the verb to say you like doing something: **Ich spiele gern Fußball.** **lieber** means you prefer something and **am liebsten** means it is your favorite. With **am liebsten** at the start, the verb stays second: **Am liebsten schwimme ich.** The verb **lesen** changes its vowel for **du** and **er/sie**: **du liest, er liest**.",
          table: {
            head: ["Word", "Meaning", "Example"],
            rows: [
              ["**gern**", "like doing", "Ich spiele gern Fußball."],
              ["**nicht gern**", "don’t like doing", "Ich lese nicht gern."],
              ["**lieber**", "prefer doing", "Ich spiele lieber Gitarre."],
              ["**am liebsten**", "like doing most", "Am liebsten schwimme ich."]
            ]
          },
          examples: [
            { de: "Ich trinke gern Tee, lieber Kaffee und am liebsten Wasser.", en: "I like tea, prefer coffee and like water most." },
            { de: "Was machst du gern? – Ich höre gern Musik.", en: "What do you like doing? – I like listening to music." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which word means ‘prefer to’?",
            options: ["lieber", "gern", "am liebsten", "nicht"], answer: 0 },
          { type: "mcq", prompt: "Which word means ‘most of all’?",
            options: ["am liebsten", "lieber", "gern", "oft"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich spiele ___ Fußball.", en: "I like playing football.",
            options: ["gern", "lieber", "nicht", "kein"], answer: "gern" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich spiele ___ Gitarre.", en: "I prefer playing guitar.",
            options: ["lieber", "gern", "liebsten", "mehr"], answer: "lieber" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Am ___ schwimme ich.", en: "I like swimming most of all.",
            options: ["liebsten", "lieber", "gern", "liebste"], answer: "liebsten" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ gern.", en: "You like reading.",
            options: ["liest", "lest", "lese", "lesen"], answer: "liest", explain: "**lesen** changes **e** to **ie** for **du** and **er/sie**." },
          { type: "listen", prompt: "Which question do you hear?", text: "Was machst du gern?",
            options: ["Was machst du gern?", "Was machst du?", "Was ist dein Hobby?", "Was liest du gern?"], answer: "Was machst du gern?" },
          { type: "article", noun: "Film", en: "film", answer: "der" },
          { type: "type", prompt: "Type this in German", src: "the hobby", answer: "das Hobby", accept: ["Hobby"] },
          { type: "order", src: "I like playing football.", answer: "Ich spiele gern Fußball.", extra: ["lieber"] },
          { type: "order", src: "I swim most of all.", answer: "Am liebsten schwimme ich.", extra: ["gern"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 4: Frequency
         --------------------------------------------------- */
      {
        id: "u06l4",
        title: "How Often?",
        emoji: "🔁",
        goal: "Say how often you do things.",
        hook: "From ‘always’ to ‘never’: these words make your sentences more precise.",
        vocab: [
          { de: "immer", en: "always", ex: "Ich trinke immer Kaffee.", exEn: "I always drink coffee." },
          { de: "meistens", en: "mostly, usually" },
          { de: "oft", en: "often", ex: "Wir spielen oft Fußball.", exEn: "We often play football." },
          { de: "manchmal", en: "sometimes", ex: "Ich stehe manchmal früh auf.", exEn: "I sometimes get up early." },
          { de: "selten", en: "rarely" },
          { de: "nie", en: "never", ex: "Er kommt nie zu spät.", exEn: "He never comes late." },
          { de: "jeden Tag", en: "every day" },
          { de: "jeden Morgen", en: "every morning" },
          { de: "einmal", en: "once" },
          { de: "zweimal", en: "twice" },
          { de: "morgens", en: "in the mornings" },
          { de: "abends", en: "in the evenings" },
          { de: "Wie oft…?", en: "How often…?" },
          { de: "Wie oft spielst du Fußball?", en: "How often do you play football?" }
        ],
        tip: {
          title: "Frequency words and their place",
          text: "Frequency words usually come **after the verb**: **Ich trinke immer Kaffee.** With a separable verb, they come before the prefix: **Ich stehe oft früh auf.** For ‘every day, every morning’ use **jeden** with **der** nouns: **jeden Tag, jeden Morgen**. For **die** nouns use **jede**: **jede Woche**.",
          table: {
            head: ["Word", "Meaning", "Example"],
            rows: [
              ["**immer**", "always (100%)", "Ich trinke immer Tee."],
              ["**meistens**", "usually", "Ich esse meistens Brot."],
              ["**oft**", "often", "Wir spielen oft Fußball."],
              ["**manchmal**", "sometimes", "Du kochst manchmal."],
              ["**selten**", "rarely", "Er liest selten."],
              ["**nie**", "never (0%)", "Ich trinke nie Kaffee."]
            ]
          },
          examples: [
            { de: "Wie oft spielst du Fußball? – Zweimal pro Woche.", en: "How often do you play football? – Twice a week." },
            { de: "Ich stehe jeden Morgen um sieben Uhr auf.", en: "I get up at seven every morning." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which word means ‘never’?",
            options: ["nie", "immer", "oft", "selten"], answer: 0 },
          { type: "mcq", prompt: "Which happens more often?",
            options: ["oft", "selten", "nie", "manchmal"], answer: 0 },
          { type: "mcq", prompt: "What does ‘Wie oft…?’ ask?",
            options: ["How often?", "How much?", "How old?", "How are you?"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich trinke ___ Kaffee.", en: "I always drink coffee.",
            options: ["immer", "nie", "selten", "manchmal"], answer: "immer" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich spiele ___ Fußball.", en: "I rarely play football.",
            options: ["selten", "immer", "oft", "meistens"], answer: "selten" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Ich stehe manchmal früh auf.",
            options: ["Ich stehe manchmal früh auf.", "Ich stehe immer früh auf.", "Ich stehe nie früh auf.", "Ich stehe oft früh auf."], answer: "Ich stehe manchmal früh auf." },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "immer", en: "always" },
              { de: "oft", en: "often" },
              { de: "manchmal", en: "sometimes" },
              { de: "selten", en: "rarely" }
            ] },
          { type: "type", prompt: "Type this in German", src: "never", answer: "nie" },
          { type: "order", src: "I never drink coffee.", answer: "Ich trinke nie Kaffee.", extra: ["immer"] },
          { type: "order", src: "How often do you play football?", answer: "Wie oft spielst du Fußball?", extra: ["spiele"] },
          { type: "order", src: "I get up early every day.", answer: "Ich stehe jeden Tag früh auf.", extra: ["oft"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 5: nicht vs. kein
         --------------------------------------------------- */
      {
        id: "u06l5",
        title: "nicht or kein?",
        emoji: "🚫",
        goal: "Say no and negate sentences correctly.",
        hook: "German has two ways to say ‘not’. One rule tells you which to use.",
        vocab: [
          { de: "nicht", en: "not", ex: "Ich arbeite nicht.", exEn: "I am not working." },
          { de: "kein", en: "no, not a", ex: "Ich habe kein Auto.", exEn: "I have no car." },
          { de: "Zeit", art: "die", en: "time", ex: "Ich habe keine Zeit.", exEn: "I have no time." },
          { de: "Geld", art: "das", en: "money", ex: "Ich habe kein Geld.", exEn: "I have no money." },
          { de: "Lust", art: "die", en: "desire, feeling like it", ex: "Ich habe keine Lust.", exEn: "I don’t feel like it." },
          { de: "richtig", en: "right, correct" },
          { de: "falsch", en: "wrong" },
          { de: "doch", en: "yes, I do (answer to a negative question)" },
          { de: "Ich habe keine Zeit.", en: "I have no time." },
          { de: "Das ist nicht richtig.", en: "That is not correct." },
          { de: "Doch!", en: "Yes, it is! / Yes, I do!" }
        ],
        tip: {
          title: "nicht vs. kein",
          text: "Use **kein** to negate a **noun** that has **ein** or **no article**: **ein Auto → kein Auto**, **Zeit → keine Zeit**. Use **nicht** for everything else: verbs, adjectives and nouns with **der/die/das**. **kein** has the same endings as **ein**: **kein** (der/das), **keine** (die/plural), **keinen** (der, after haben). To say ‘yes’ to a negative question, use **doch**: **Hast du keine Zeit? – Doch!**",
          table: {
            head: ["Positive", "Negative", "Rule"],
            rows: [
              ["Ich habe ein Auto.", "Ich habe **kein** Auto.", "ein + noun → kein"],
              ["Ich habe Zeit.", "Ich habe **keine** Zeit.", "no article → kein"],
              ["Ich habe einen Bruder.", "Ich habe **keinen** Bruder.", "der noun after haben → keinen"],
              ["Ich arbeite.", "Ich arbeite **nicht**.", "verb → nicht"],
              ["Das ist gut.", "Das ist **nicht** gut.", "adjective → nicht"]
            ]
          },
          examples: [
            { de: "Ich habe heute keine Zeit. Ich arbeite.", en: "I have no time today. I am working." },
            { de: "Du hast kein Geld? – Doch, ich habe Geld.", en: "You have no money? – Yes, I do have money." }
          ]
        },
        exercises: [
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich habe ___ Auto.", en: "I have no car.",
            options: ["kein", "keine", "keinen", "nicht"], answer: "kein" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich habe ___ Zeit.", en: "I have no time.",
            options: ["keine", "kein", "keinen", "nicht"], answer: "keine", explain: "**Zeit** is **die**, so we use **keine**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich habe ___ Bruder.", en: "I have no brother.",
            options: ["keinen", "kein", "keine", "nicht"], answer: "keinen", explain: "**Bruder** is **der**, and after **haben** it becomes **keinen**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich arbeite ___.", en: "I am not working.",
            options: ["nicht", "kein", "keine", "nie"], answer: "nicht" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das ist ___ gut.", en: "That is not good.",
            options: ["nicht", "kein", "keine", "keinen"], answer: "nicht" },
          { type: "mcq", prompt: "Which word negates a verb or an adjective?",
            options: ["nicht", "kein", "keine", "keinen"], answer: 0 },
          { type: "mcq", prompt: "Someone asks ‘Hast du keine Zeit?’ and you want to say ‘Yes, I do.’ What do you say?",
            options: ["Doch!", "Ja!", "Nein!", "Kein!"], answer: 0 },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Ich habe keine Zeit.",
            options: ["Ich habe keine Zeit.", "Ich habe keine Lust.", "Ich habe kein Geld.", "Ich habe keinen Hunger."], answer: "Ich habe keine Zeit." },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "nicht", en: "not" },
              { de: "richtig", en: "correct" },
              { de: "falsch", en: "wrong" },
              { de: "Geld", en: "money" }
            ] },
          { type: "type", prompt: "Type this in German", src: "I have no car.", answer: "Ich habe kein Auto." },
          { type: "order", src: "I have no time.", answer: "Ich habe keine Zeit.", extra: ["nicht"] },
          { type: "order", src: "I am not working.", answer: "Ich arbeite nicht.", extra: ["kein"] }
        ]
      }
    ],

    /* -----------------------------------------------------
       Unit mini-test: 10 items are drawn at random.
       Pass mark: 70% to unlock Unit 7.
       ----------------------------------------------------- */
    test: [
      { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ Deutsch.", en: "You are learning German.",
        options: ["lernst", "lerne", "lernt", "lernen"], answer: "lernst" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ihr ___ Musik.", en: "You (all) listen to music.",
        options: ["hört", "höre", "hörst", "hören"], answer: "hört" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wir ___ heute ein.", en: "We shop today.",
        options: ["kaufen", "kauft", "kaufe", "kaufst"], answer: "kaufen" },
      { type: "mcq", prompt: "Which sentence is correct?",
        options: ["Ich stehe um sieben Uhr auf.", "Ich aufstehe um sieben Uhr.", "Ich stehe auf um sieben Uhr.", "Ich auf stehe um sieben Uhr."], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich rufe Anna ___.", en: "I call Anna.",
        options: ["an", "auf", "ein", "mit"], answer: "an" },
      { type: "listen", prompt: "Which sentence do you hear?", text: "Kommst du mit?",
        options: ["Kommst du mit?", "Kommst du an?", "Kommst du auf?", "Kommst du ein?"], answer: "Kommst du mit?" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich spiele ___ Fußball.", en: "I like playing football.",
        options: ["gern", "lieber", "am liebsten", "nie"], answer: "gern" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Er ___ gern.", en: "He likes reading.",
        options: ["liest", "lest", "lese", "lesen"], answer: "liest" },
      { type: "mcq", prompt: "Which word means ‘most of all’?",
        options: ["am liebsten", "lieber", "gern", "immer"], answer: 0 },
      { type: "mcq", prompt: "Which word means ‘sometimes’?",
        options: ["manchmal", "meistens", "selten", "nie"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich trinke ___ Kaffee.", en: "I never drink coffee.",
        options: ["nie", "immer", "oft", "meistens"], answer: "nie" },
      { type: "listen", prompt: "Which question do you hear?", text: "Wie oft spielst du Fußball?",
        options: ["Wie oft spielst du Fußball?", "Wie alt bist du?", "Wie spät ist es?", "Wo spielst du Fußball?"], answer: "Wie oft spielst du Fußball?" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich habe ___ Zeit.", en: "I have no time.",
        options: ["keine", "kein", "keinen", "nicht"], answer: "keine" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich habe ___ Auto.", en: "I have no car.",
        options: ["kein", "keine", "keinen", "nicht"], answer: "kein" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich arbeite ___.", en: "I am not working.",
        options: ["nicht", "kein", "keine", "keinen"], answer: "nicht" },
      { type: "type", prompt: "Type this in German", src: "to get up", answer: "aufstehen" },
      { type: "order", src: "I get up at seven.", answer: "Ich stehe um sieben Uhr auf.", extra: ["aufstehe"] },
      { type: "order", src: "I like playing football.", answer: "Ich spiele gern Fußball.", extra: ["lieber"] },
      { type: "order", src: "I have no time.", answer: "Ich habe keine Zeit.", extra: ["nicht"] }
    ]
  });
})();
