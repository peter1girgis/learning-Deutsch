/* =========================================================
   Deutsch A1 — data/unit11.js
   Unit 11: Modal Verbs & Imperative (5 lessons + mini-test)
   Registers itself with GA1.units.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  GA1.units.push({
    id: "u11",
    num: 11,
    title: "Modal Verbs & Imperative",
    subtitle: "Can, must, want, may, and giving commands",
    icon: "🗝️",
    color: "#c8e04a",
    outcomes: [
      "Use können and müssen",
      "Use wollen, dürfen and möchten",
      "Build sentences with the sentence bracket and make polite requests",
      "Form the imperative for du, ihr and Sie",
      "Arrange appointments and invite people"
    ],

    lessons: [
      /* ---------------------------------------------------
         Lesson 1: können and müssen
         --------------------------------------------------- */
      {
        id: "u11l1",
        title: "können & müssen",
        emoji: "💪",
        goal: "Say what you can do and what you have to do.",
        hook: "Two little verbs unlock a huge number of sentences: ‘I can…’ and ‘I have to…’.",
        vocab: [
          { de: "können", en: "can, to be able to", ex: "Ich kann schwimmen.", exEn: "I can swim." },
          { de: "müssen", en: "must, to have to", ex: "Ich muss arbeiten.", exEn: "I have to work." },
          { de: "Klavier", art: "das", pl: "Klaviere", en: "piano", ex: "Kannst du Klavier spielen?", exEn: "Can you play the piano?" },
          { de: "Sprache", art: "die", pl: "Sprachen", en: "language" },
          { de: "arbeiten", en: "to work" },
          { de: "lernen", en: "to learn" },
          { de: "schwimmen", en: "to swim" },
          { de: "sprechen", en: "to speak", ex: "Ich kann Deutsch sprechen.", exEn: "I can speak German." },
          { de: "Ich kann nicht kommen.", en: "I can’t come." },
          { de: "Ich muss heute arbeiten.", en: "I have to work today." },
          { de: "Kannst du Klavier spielen?", en: "Can you play the piano?" }
        ],
        tip: {
          title: "Modal verb + infinitive",
          text: "**Modal verbs** are helper verbs. They are conjugated and stand in **second position**, while the **main verb goes to the end as an infinitive**: **Ich kann schwimmen. Ich muss heute arbeiten.** Watch out: in the singular, **ich** and **er/sie/es** use the **same form** with no ending (**ich kann, er kann**). The **du** form ends in **-st**, and the plural forms are regular.",
          table: {
            head: ["Pronoun", "können", "müssen"],
            rows: [
              ["**ich**", "kann", "muss"],
              ["**du**", "kannst", "musst"],
              ["**er / sie / es**", "kann", "muss"],
              ["**wir**", "können", "müssen"],
              ["**ihr**", "könnt", "müsst"],
              ["**sie / Sie**", "können", "müssen"]
            ]
          },
          examples: [
            { de: "Ich kann Deutsch sprechen, aber ich muss noch viel lernen.", en: "I can speak German, but I still have to learn a lot." },
            { de: "Kannst du Klavier spielen? – Nein, ich kann nur Gitarre spielen.", en: "Can you play the piano? – No, I can only play the guitar." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which sentence is correct?",
            options: ["Er kann schwimmen.", "Er kannt schwimmen.", "Er können schwimmen.", "Er kann schwimmt."], answer: 0 },
          { type: "mcq", prompt: "What does ‘Ich muss arbeiten.’ mean?",
            options: ["I have to work.", "I can work.", "I want to work.", "I like working."], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ Klavier spielen.", en: "I can play the piano.",
            options: ["kann", "kannst", "können", "könnt"], answer: "kann" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ heute arbeiten.", en: "You have to work today.",
            options: ["musst", "muss", "müssen", "müsst"], answer: "musst" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Er ___ gut schwimmen.", en: "He can swim well.",
            options: ["kann", "kannst", "können", "könnt"], answer: "kann", explain: "**ich** and **er/sie/es** use the same form: **kann**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wir ___ lernen.", en: "We have to study.",
            options: ["müssen", "muss", "musst", "müsst"], answer: "müssen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ihr ___ Deutsch sprechen.", en: "You (all) can speak German.",
            options: ["könnt", "können", "kann", "kannst"], answer: "könnt" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Ich muss heute arbeiten.",
            options: ["Ich muss heute arbeiten.", "Ich kann heute arbeiten.", "Ich muss morgen arbeiten.", "Ich will heute arbeiten."], answer: "Ich muss heute arbeiten." },
          { type: "match", prompt: "Match the pronoun with ‘können’",
            pairs: [
              { de: "ich", en: "kann" },
              { de: "du", en: "kannst" },
              { de: "wir", en: "können" },
              { de: "ihr", en: "könnt" }
            ] },
          { type: "type", prompt: "Type this in German", src: "I can swim.", answer: "Ich kann schwimmen." },
          { type: "order", src: "I have to work today.", answer: "Ich muss heute arbeiten.", extra: ["arbeite"] },
          { type: "order", src: "Can you play the piano?", answer: "Kannst du Klavier spielen?", extra: ["kann"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 2: wollen, dürfen, möchten
         --------------------------------------------------- */
      {
        id: "u11l2",
        title: "wollen, dürfen, möchten",
        emoji: "🙋",
        goal: "Say what you want, what you are allowed to do and what you would like.",
        hook: "Three more modals for wishes and rules, and one tricky difference between ‘must not’ and ‘don’t have to’.",
        vocab: [
          { de: "wollen", en: "to want", ex: "Wir wollen Fußball spielen.", exEn: "We want to play football." },
          { de: "dürfen", en: "may, to be allowed to", ex: "Darf ich hier sitzen?", exEn: "May I sit here?" },
          { de: "möchten", en: "would like to", ex: "Ich möchte einen Kaffee.", exEn: "I would like a coffee." },
          { de: "man", en: "one, you (in general)", ex: "Hier darf man nicht parken.", exEn: "You may not park here." },
          { de: "parken", en: "to park" },
          { de: "rauchen", en: "to smoke" },
          { de: "sitzen", en: "to sit" },
          { de: "Darf ich?", en: "May I?" },
          { de: "Hier darf man nicht rauchen.", en: "Smoking is not allowed here." },
          { de: "Ich möchte einen Kaffee.", en: "I would like a coffee." },
          { de: "Du musst nicht kommen.", en: "You don’t have to come." }
        ],
        tip: {
          title: "Want, may, would like",
          text: "**wollen** = want (strong), **möchten** = would like (polite, the one you use in shops and cafés), **dürfen** = may / be allowed. **wollen** and **dürfen** follow the same pattern as **können**: no ending for **ich** and **er**. **möchten** is regular, with **-e** for **ich** and **er**. Important: **nicht dürfen** means **must not**, but **nicht müssen** only means **don’t have to**. **Du darfst nicht rauchen** (forbidden) ≠ **Du musst nicht rauchen** (not necessary).",
          table: {
            head: ["Pronoun", "wollen", "dürfen", "möchten"],
            rows: [
              ["**ich**", "will", "darf", "möchte"],
              ["**du**", "willst", "darfst", "möchtest"],
              ["**er / sie / es**", "will", "darf", "möchte"],
              ["**wir**", "wollen", "dürfen", "möchten"],
              ["**ihr**", "wollt", "dürft", "möchtet"],
              ["**sie / Sie**", "wollen", "dürfen", "möchten"]
            ]
          },
          examples: [
            { de: "Ich möchte einen Kaffee, aber ich darf keinen Zucker nehmen.", en: "I would like a coffee, but I may not take sugar." },
            { de: "Hier darf man nicht parken. Du musst nicht warten.", en: "You may not park here. You don’t have to wait." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "‘Du darfst nicht rauchen’ means:",
            options: ["You must not smoke.", "You don’t have to smoke.", "You can’t smoke well.", "You don’t want to smoke."], answer: 0 },
          { type: "mcq", prompt: "‘Du musst nicht kommen’ means:",
            options: ["You don’t have to come.", "You must not come.", "You can’t come.", "You may come."], answer: 0 },
          { type: "mcq", prompt: "Which modal is the polite way to order in a café?",
            options: ["möchten", "wollen", "müssen", "dürfen"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ einen Kaffee.", en: "I would like a coffee.",
            options: ["möchte", "möchtest", "möchten", "möchtet"], answer: "möchte" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ hier nicht parken.", en: "You may not park here.",
            options: ["darfst", "darf", "dürfen", "dürft"], answer: "darfst" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wir ___ Fußball spielen.", en: "We want to play football.",
            options: ["wollen", "will", "willst", "wollt"], answer: "wollen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Er ___ Pizza essen.", en: "He wants to eat pizza.",
            options: ["will", "willst", "wollen", "wollt"], answer: "will" },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ ich hier sitzen?", en: "May I sit here?",
            options: ["Darf", "Dürfen", "Darfst", "Muss"], answer: "Darf" },
          { type: "listen", prompt: "Which question do you hear?", text: "Darf ich hier sitzen?",
            options: ["Darf ich hier sitzen?", "Kann ich hier sitzen?", "Darf ich hier parken?", "Muss ich hier sitzen?"], answer: "Darf ich hier sitzen?" },
          { type: "match", prompt: "Match the pronoun with ‘dürfen’",
            pairs: [
              { de: "ich", en: "darf" },
              { de: "du", en: "darfst" },
              { de: "wir", en: "dürfen" },
              { de: "ihr", en: "dürft" }
            ] },
          { type: "type", prompt: "Type this in German", src: "May I?", answer: "Darf ich?" },
          { type: "order", src: "I would like a coffee.", answer: "Ich möchte einen Kaffee.", extra: ["ein"] },
          { type: "order", src: "You may not park here.", answer: "Hier darfst du nicht parken.", extra: ["darf"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 3: Sentence bracket and polite requests
         --------------------------------------------------- */
      {
        id: "u11l3",
        title: "Sentence Bracket & Requests",
        emoji: "🧱",
        goal: "Build sentences with the bracket and ask politely for help.",
        hook: "The modal verb and the infinitive form a frame around the sentence. Learn it once and you can build long sentences easily.",
        vocab: [
          { de: "helfen", en: "to help", ex: "Können Sie mir helfen?", exEn: "Can you help me?" },
          { de: "wiederholen", en: "to repeat", ex: "Können Sie das bitte wiederholen?", exEn: "Can you repeat that, please?" },
          { de: "fragen", en: "to ask", ex: "Darf ich Sie etwas fragen?", exEn: "May I ask you something?" },
          { de: "etwas", en: "something" },
          { de: "Entschuldigung", en: "excuse me, sorry" },
          { de: "natürlich", en: "of course" },
          { de: "gern", en: "gladly" },
          { de: "Moment", art: "der", pl: "Momente", en: "moment" },
          { de: "Einen Moment, bitte.", en: "One moment, please." },
          { de: "Können Sie mir helfen?", en: "Can you help me?" },
          { de: "Darf ich Sie etwas fragen?", en: "May I ask you something?" }
        ],
        tip: {
          title: "Sentence bracket (Satzklammer)",
          text: "The **modal verb** stays in **position 2** and the **infinitive** goes to the **very end**: the rest of the sentence sits between them like a bracket. With a **separable verb**, the verb stays in one piece at the end: **Ich muss früh aufstehen.** In a **question**, the modal comes first: **Kannst du mir helfen?** For polite requests to strangers, use **Sie**: **Können Sie mir helfen?** **Darf ich …?** asks for permission. You will also hear **Könnten Sie …?**, which is even more polite. Answers: **Natürlich! Gern! Einen Moment, bitte.**",
          table: {
            head: ["Position 1", "Modal (pos. 2)", "Middle", "Infinitive (end)"],
            rows: [
              ["**Ich**", "kann", "heute nicht", "kommen."],
              ["**Ich**", "muss", "früh", "aufstehen."],
              ["**Wir**", "wollen", "Fußball", "spielen."],
              ["**Können**", "Sie", "mir bitte", "helfen?"],
              ["**Darf**", "ich", "Sie etwas", "fragen?"]
            ]
          },
          examples: [
            { de: "Entschuldigung, können Sie mir helfen? – Natürlich! Was möchten Sie wissen?", en: "Excuse me, can you help me? – Of course! What would you like to know?" },
            { de: "Ich muss morgen früh aufstehen und möchte jetzt schlafen.", en: "I have to get up early tomorrow and would like to sleep now." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Where does the main verb go in a sentence with a modal?",
            options: ["At the end, as an infinitive", "Right after the modal", "At the start", "It disappears"], answer: 0 },
          { type: "mcq", prompt: "Which sentence is correct?",
            options: ["Ich muss früh aufstehen.", "Ich muss aufstehen früh.", "Ich aufstehen muss früh.", "Ich stehe muss früh auf."], answer: 0 },
          { type: "mcq", prompt: "Which request is polite to a stranger?",
            options: ["Können Sie mir helfen?", "Hilf mir!", "Kannst du helfen?", "Ich helfe dir."], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich kann heute nicht ___.", en: "I can’t come today.",
            options: ["kommen", "komme", "kommst", "kommt"], answer: "kommen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Können Sie mir ___?", en: "Can you help me?",
            options: ["helfen", "helfe", "hilft", "helft"], answer: "helfen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Darf ich Sie etwas ___?", en: "May I ask you something?",
            options: ["fragen", "frage", "fragt", "fragst"], answer: "fragen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich muss früh ___.", en: "I have to get up early.",
            options: ["aufstehen", "stehen auf", "aufsteht", "auf"], answer: "aufstehen" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Können Sie das bitte wiederholen?",
            options: ["Können Sie das bitte wiederholen?", "Können Sie mir bitte helfen?", "Können Sie das bitte lesen?", "Können Sie bitte warten?"], answer: "Können Sie das bitte wiederholen?" },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "helfen", en: "to help" },
              { de: "fragen", en: "to ask" },
              { de: "wiederholen", en: "to repeat" },
              { de: "natürlich", en: "of course" }
            ] },
          { type: "type", prompt: "Type this in German", src: "One moment, please.", answer: "Einen Moment, bitte." },
          { type: "order", src: "Can you help me?", answer: "Können Sie mir helfen?", extra: ["Kannst"] },
          { type: "order", src: "May I ask you something?", answer: "Darf ich Sie etwas fragen?", extra: ["dich"] },
          { type: "order", src: "Can you repeat that, please?", answer: "Können Sie das bitte wiederholen?", extra: ["Kannst"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 4: Imperative
         --------------------------------------------------- */
      {
        id: "u11l4",
        title: "The Imperative",
        emoji: "📢",
        goal: "Give commands and instructions to du, ihr and Sie.",
        hook: "Three forms for three kinds of listeners, and each one is easy to build.",
        vocab: [
          { de: "warten", en: "to wait", ex: "Warten Sie bitte.", exEn: "Please wait." },
          { de: "kommen", en: "to come", ex: "Komm!", exEn: "Come!" },
          { de: "nehmen", en: "to take", ex: "Nimm den Bus!", exEn: "Take the bus!" },
          { de: "lesen", en: "to read", ex: "Lies das Buch!", exEn: "Read the book!" },
          { de: "sein", en: "to be", ex: "Sei ruhig!", exEn: "Be quiet!" },
          { de: "langsam", en: "slow, slowly" },
          { de: "schnell", en: "fast, quickly" },
          { de: "leise", en: "quiet, quietly" },
          { de: "bitte", en: "please" },
          { de: "Warten Sie bitte.", en: "Please wait." },
          { de: "Sprechen Sie bitte langsam.", en: "Please speak slowly." },
          { de: "Kommt mit!", en: "Come along! (you all)" }
        ],
        tip: {
          title: "Three imperative forms",
          text: "**du**: take the **stem** of the verb, no ending and no **du**: **kommen → Komm!** Verbs that change **e → i/ie** keep the change: **nehmen → Nimm! lesen → Lies! sprechen → Sprich!** **ihr**: the normal **ihr** form without **ihr**: **Kommt! Lest! Wartet!** **Sie**: the infinitive form **+ Sie** after the verb: **Kommen Sie! Warten Sie bitte!** Separable verbs: the prefix goes to the end: **Steh auf! Kommt mit! Rufen Sie an!** **sein** is irregular: **Sei! Seid! Seien Sie!** Add **bitte** to be polite.",
          table: {
            head: ["Verb", "du", "ihr", "Sie"],
            rows: [
              ["**kommen**", "Komm!", "Kommt!", "Kommen Sie!"],
              ["**warten**", "Warte!", "Wartet!", "Warten Sie!"],
              ["**nehmen**", "Nimm!", "Nehmt!", "Nehmen Sie!"],
              ["**lesen**", "Lies!", "Lest!", "Lesen Sie!"],
              ["**aufstehen**", "Steh auf!", "Steht auf!", "Stehen Sie auf!"],
              ["**sein**", "Sei!", "Seid!", "Seien Sie!"]
            ]
          },
          examples: [
            { de: "Komm bitte schnell! Wir müssen gehen.", en: "Please come quickly! We have to go." },
            { de: "Entschuldigung, sprechen Sie bitte langsam.", en: "Excuse me, please speak slowly." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "What is the du-imperative of ‘kommen’?",
            options: ["Komm!", "Kommst!", "Kommen!", "Kommt!"], answer: 0 },
          { type: "mcq", prompt: "What is the du-imperative of ‘sprechen’?",
            options: ["Sprich!", "Sprech!", "Sprichst!", "Sprecht!"], answer: 0 },
          { type: "mcq", prompt: "Which sentence is a polite command to a stranger?",
            options: ["Warten Sie bitte.", "Warte bitte.", "Wartet bitte.", "Sie warten bitte."], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ bitte ruhig! (du)", en: "Please be quiet!",
            options: ["Sei", "Bist", "Seid", "Sein"], answer: "Sei" },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ das Buch! (du)", en: "Read the book!",
            options: ["Lies", "Lese", "Lest", "Liest"], answer: "Lies" },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ Sie bitte langsam.", en: "Please speak slowly.",
            options: ["Sprechen", "Sprich", "Sprecht", "Sprichst"], answer: "Sprechen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ bitte mit! (ihr)", en: "Please come along!",
            options: ["Kommt", "Komm", "Kommen", "Kommst"], answer: "Kommt" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Steh ___! (du)", en: "Get up!",
            options: ["auf", "an", "ein", "mit"], answer: "auf" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Warten Sie bitte.",
            options: ["Warten Sie bitte.", "Warte bitte.", "Wartet bitte.", "Kommen Sie bitte."], answer: "Warten Sie bitte." },
          { type: "match", prompt: "Match the verb with its du-imperative",
            pairs: [
              { de: "kommen", en: "Komm!" },
              { de: "nehmen", en: "Nimm!" },
              { de: "lesen", en: "Lies!" },
              { de: "sein", en: "Sei!" }
            ] },
          { type: "type", prompt: "Type this in German", src: "Please wait. (formal)", answer: "Warten Sie bitte.", accept: ["Bitte warten Sie."] },
          { type: "order", src: "Please come along! (formal)", answer: "Kommen Sie bitte mit!", extra: ["Kommt"] },
          { type: "order", src: "Be quiet! (informal)", answer: "Sei ruhig!", extra: ["Bist"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 5: Appointments and invitations
         --------------------------------------------------- */
      {
        id: "u11l5",
        title: "Appointments & Invitations",
        emoji: "📅",
        goal: "Make appointments, invite people and accept or decline.",
        hook: "Combine everything you have learned to plan a meeting, a visit to the doctor or a party.",
        vocab: [
          { de: "Termin", art: "der", pl: "Termine", en: "appointment", ex: "Ich habe einen Termin.", exEn: "I have an appointment." },
          { de: "Einladung", art: "die", pl: "Einladungen", en: "invitation" },
          { de: "Party", art: "die", pl: "Partys", en: "party" },
          { de: "Arzt", art: "der", pl: "Ärzte", en: "doctor (male)" },
          { de: "einladen", en: "to invite", ex: "Ich lade dich zur Party ein.", exEn: "I’m inviting you to the party." },
          { de: "vereinbaren", en: "to arrange", ex: "Ich möchte einen Termin vereinbaren.", exEn: "I would like to make an appointment." },
          { de: "absagen", en: "to cancel, to decline" },
          { de: "passen", en: "to suit, to be convenient", ex: "Das passt mir gut.", exEn: "That suits me well." },
          { de: "zusammen", en: "together" },
          { de: "leider", en: "unfortunately" },
          { de: "schade", en: "too bad, a pity" },
          { de: "Hast du am Samstag Zeit?", en: "Do you have time on Saturday?" },
          { de: "Wollen wir zusammen essen?", en: "Shall we eat together?" },
          { de: "Ja, gern!", en: "Yes, gladly!" },
          { de: "Leider kann ich nicht.", en: "Unfortunately I can’t." },
          { de: "Wann treffen wir uns?", en: "When shall we meet?" },
          { de: "Passt es Ihnen um drei Uhr?", en: "Does three o’clock suit you?" }
        ],
        tip: {
          title: "Inviting and planning",
          text: "Start an invitation with **Hast du am Samstag Zeit?** or suggest something with **Wollen wir …?** (Shall we …?) plus an infinitive at the end: **Wollen wir Fußball spielen?** To accept: **Ja, gern! Das passt gut.** To decline politely: **Leider kann ich nicht. Ich habe schon einen Termin. Schade!** **einladen** is separable: **Ich lade dich zur Party ein.** For appointments use **Ich möchte einen Termin vereinbaren** and **Passt es Ihnen um drei Uhr?** Fix the time with **um + hour**: **um drei Uhr**, **am Montag**.",
          table: {
            head: ["Goal", "German"],
            rows: [
              ["Invite", "**Hast du am Samstag Zeit? Wollen wir …?**"],
              ["Accept", "**Ja, gern! Das passt gut.**"],
              ["Decline", "**Leider kann ich nicht. Tut mir leid.**"],
              ["Arrange", "**Wann treffen wir uns? Um sieben Uhr.**"],
              ["Appointment", "**Ich möchte einen Termin vereinbaren.**"]
            ]
          },
          examples: [
            { de: "Hast du am Samstag Zeit? Ich lade dich zur Party ein. – Ja, gern! Wann treffen wir uns?", en: "Do you have time on Saturday? I’m inviting you to the party. – Yes, gladly! When shall we meet?" },
            { de: "Ich möchte einen Termin beim Arzt vereinbaren. – Passt es Ihnen am Montag um zehn Uhr?", en: "I would like to make a doctor’s appointment. – Does Monday at ten o’clock suit you?" }
          ]
        },
        exercises: [
          { type: "article", noun: "Termin", en: "appointment", answer: "der" },
          { type: "article", noun: "Einladung", en: "invitation", answer: "die" },
          { type: "article", noun: "Party", en: "party", answer: "die" },
          { type: "mcq", prompt: "How do you politely say ‘Unfortunately I can’t.’?",
            options: ["Leider kann ich nicht.", "Ja, gern!", "Das passt gut.", "Wollen wir?"], answer: 0 },
          { type: "mcq", prompt: "What does ‘Wollen wir …?’ express?",
            options: ["A suggestion (Shall we …?)", "A command", "A refusal", "A question about time"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ dich zur Party ein.", en: "I’m inviting you to the party.",
            options: ["lade", "ladest", "lädt", "laden"], answer: "lade" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wollen wir Fußball ___?", en: "Shall we play football?",
            options: ["spielen", "spiele", "spielt", "spielst"], answer: "spielen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Hast du ___ Samstag Zeit?", en: "Do you have time on Saturday?",
            options: ["am", "im", "um", "an"], answer: "am" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das ___ mir gut.", en: "That suits me well.",
            options: ["passt", "passen", "passe", "passest"], answer: "passt" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich möchte einen Termin ___.", en: "I would like to make an appointment.",
            options: ["vereinbaren", "vereinbare", "vereinbart", "vereinbarst"], answer: "vereinbaren" },
          { type: "listen", prompt: "Which question do you hear?", text: "Wann treffen wir uns?",
            options: ["Wann treffen wir uns?", "Wo treffen wir uns?", "Wann essen wir?", "Wer trifft uns?"], answer: "Wann treffen wir uns?" },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "leider", en: "unfortunately" },
              { de: "schade", en: "too bad" },
              { de: "zusammen", en: "together" },
              { de: "absagen", en: "to cancel" }
            ] },
          { type: "type", prompt: "Type this in German", src: "Yes, gladly!", answer: "Ja, gern!" },
          { type: "order", src: "Shall we eat together?", answer: "Wollen wir zusammen essen?", extra: ["will"] },
          { type: "order", src: "Do you have time on Saturday?", answer: "Hast du am Samstag Zeit?", extra: ["im"] }
        ]
      }
    ],

    /* -----------------------------------------------------
       Unit mini-test: 10 items are drawn at random.
       Pass mark: 70% to unlock Unit 12.
       ----------------------------------------------------- */
    test: [
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ Klavier spielen.", en: "I can play the piano.",
        options: ["kann", "kannst", "können", "könnt"], answer: "kann" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ heute arbeiten.", en: "You have to work today.",
        options: ["musst", "muss", "müssen", "müsst"], answer: "musst" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wir ___ lernen.", en: "We have to study.",
        options: ["müssen", "muss", "musst", "müsst"], answer: "müssen" },
      { type: "mcq", prompt: "Which sentence is correct?",
        options: ["Er kann schwimmen.", "Er kannt schwimmen.", "Er können schwimmen.", "Er kann schwimmt."], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ einen Kaffee.", en: "I would like a coffee.",
        options: ["möchte", "möchtest", "möchten", "möchtet"], answer: "möchte" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ hier nicht parken.", en: "You may not park here.",
        options: ["darfst", "darf", "dürfen", "dürft"], answer: "darfst" },
      { type: "mcq", prompt: "‘Du musst nicht kommen’ means:",
        options: ["You don’t have to come.", "You must not come.", "You can’t come.", "You may come."], answer: 0 },
      { type: "mcq", prompt: "‘Du darfst nicht rauchen’ means:",
        options: ["You must not smoke.", "You don’t have to smoke.", "You can’t smoke well.", "You don’t want to smoke."], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wir ___ Fußball spielen.", en: "We want to play football.",
        options: ["wollen", "will", "willst", "wollt"], answer: "wollen" },
      { type: "listen", prompt: "Which question do you hear?", text: "Darf ich hier sitzen?",
        options: ["Darf ich hier sitzen?", "Kann ich hier sitzen?", "Darf ich hier parken?", "Muss ich hier sitzen?"], answer: "Darf ich hier sitzen?" },
      { type: "mcq", prompt: "Where does the main verb go in a sentence with a modal?",
        options: ["At the end, as an infinitive", "Right after the modal", "At the start", "It disappears"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Können Sie mir ___?", en: "Can you help me?",
        options: ["helfen", "helfe", "hilft", "helft"], answer: "helfen" },
      { type: "mcq", prompt: "What is the du-imperative of ‘kommen’?",
        options: ["Komm!", "Kommst!", "Kommen!", "Kommt!"], answer: 0 },
      { type: "mcq", prompt: "What is the du-imperative of ‘sprechen’?",
        options: ["Sprich!", "Sprech!", "Sprichst!", "Sprecht!"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "___ Sie bitte langsam.", en: "Please speak slowly.",
        options: ["Sprechen", "Sprich", "Sprecht", "Sprichst"], answer: "Sprechen" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Steh ___! (du)", en: "Get up!",
        options: ["auf", "an", "ein", "mit"], answer: "auf" },
      { type: "listen", prompt: "Which sentence do you hear?", text: "Warten Sie bitte.",
        options: ["Warten Sie bitte.", "Warte bitte.", "Wartet bitte.", "Kommen Sie bitte."], answer: "Warten Sie bitte." },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ dich zur Party ein.", en: "I’m inviting you to the party.",
        options: ["lade", "ladest", "lädt", "laden"], answer: "lade" },
      { type: "mcq", prompt: "How do you politely say ‘Unfortunately I can’t.’?",
        options: ["Leider kann ich nicht.", "Ja, gern!", "Das passt gut.", "Wollen wir?"], answer: 0 },
      { type: "type", prompt: "Type this in German", src: "I can swim.", answer: "Ich kann schwimmen." },
      { type: "order", src: "I have to work today.", answer: "Ich muss heute arbeiten.", extra: ["arbeite"] },
      { type: "order", src: "Can you help me?", answer: "Können Sie mir helfen?", extra: ["Kannst"] },
      { type: "order", src: "Be quiet! (informal)", answer: "Sei ruhig!", extra: ["Bist"] }
    ]
  });
})();
