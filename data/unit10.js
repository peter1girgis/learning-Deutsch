/* =========================================================
   Deutsch A1 — data/unit10.js
   Unit 10: Grammar Fundamentals (5 lessons + mini-test)
   Registers itself with GA1.units.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  GA1.units.push({
    id: "u10",
    num: 10,
    title: "Grammar Fundamentals",
    subtitle: "Cases, pronouns, word order and questions",
    icon: "🧩",
    color: "#00c7be",
    outcomes: [
      "Tell the nominative from the accusative",
      "Use articles in the nominative, accusative and dative",
      "Replace nouns with personal pronouns",
      "Build sentences with the verb in second position",
      "Ask yes/no questions and negate correctly"
    ],

    lessons: [
      /* ---------------------------------------------------
         Lesson 1: Nominative vs. accusative
         --------------------------------------------------- */
      {
        id: "u10l1",
        title: "Nominative vs. Accusative",
        emoji: "🎯",
        goal: "Tell the subject from the object of a sentence.",
        hook: "Who does something and who gets it done to them? Two small endings tell you.",
        vocab: [
          { de: "Mann", art: "der", pl: "Männer", en: "man" },
          { de: "Frau", art: "die", pl: "Frauen", en: "woman" },
          { de: "Kind", art: "das", pl: "Kinder", en: "child" },
          { de: "Hund", art: "der", pl: "Hunde", en: "dog" },
          { de: "Apfel", art: "der", pl: "Äpfel", en: "apple" },
          { de: "sehen", en: "to see", ex: "Der Mann sieht den Hund.", exEn: "The man sees the dog." },
          { de: "essen", en: "to eat", ex: "Das Kind isst einen Apfel.", exEn: "The child eats an apple." },
          { de: "lieben", en: "to love" },
          { de: "Wer?", en: "Who? (subject)" },
          { de: "Wen?", en: "Whom? (object)" },
          { de: "Wer sieht den Hund?", en: "Who sees the dog?" },
          { de: "Wen sieht der Mann?", en: "Whom does the man see?" }
        ],
        tip: {
          title: "Subject and object",
          text: "The **subject** is who or what does the action: it is in the **nominative**. The **direct object** is who or what the action is done to: it is in the **accusative**. Only **masculine** nouns change: **der → den**, **ein → einen**. Ask **Wer?** for the subject and **Wen?** or **Was?** for the object. Because the endings show who is who, the object can come first: **Den Apfel isst das Kind.** Careful: **essen** and **sehen** change their vowel for **du** and **er**: **du isst, er isst, du siehst, er sieht**.",
          table: {
            head: ["Case", "der (m)", "die (f)", "das (n)", "Plural"],
            rows: [
              ["**Nominative**", "der Hund", "die Frau", "das Kind", "die Kinder"],
              ["**Accusative**", "**den** Hund", "die Frau", "das Kind", "die Kinder"],
              ["**Nom. (a)**", "ein Hund", "eine Frau", "ein Kind", "–"],
              ["**Acc. (a)**", "**einen** Hund", "eine Frau", "ein Kind", "–"]
            ]
          },
          examples: [
            { de: "Der Mann sieht den Hund. Der Hund sieht den Mann.", en: "The man sees the dog. The dog sees the man." },
            { de: "Wer isst einen Apfel? – Das Kind.", en: "Who is eating an apple? – The child." }
          ]
        },
        exercises: [
          { type: "article", noun: "Hund", en: "dog", answer: "der" },
          { type: "article", noun: "Kind", en: "child", answer: "das" },
          { type: "article", noun: "Frau", en: "woman", answer: "die" },
          { type: "mcq", prompt: "In ‘Der Hund sieht den Mann’, who sees?",
            options: ["The dog", "The man", "Both", "Nobody"], answer: 0 },
          { type: "mcq", prompt: "Which question word asks for the accusative object?",
            options: ["Wen?", "Wer?", "Wo?", "Wann?"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich sehe ___ Hund.", en: "I see the dog.",
            options: ["den", "der", "dem", "die"], answer: "den" },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ Frau liest ein Buch.", en: "The woman reads a book.",
            options: ["Die", "Den", "Der", "Das"], answer: "Die" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das Kind isst ___ Apfel.", en: "The child eats an apple.",
            options: ["einen", "ein", "eine", "einem"], answer: "einen", explain: "**Apfel** is **der**, so the accusative is **einen**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ den Hund.", en: "You see the dog.",
            options: ["siehst", "sehst", "sehe", "sieht"], answer: "siehst", explain: "**sehen** changes **e** to **ie** for **du** and **er/sie**." },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Der Mann sieht den Hund.",
            options: ["Der Mann sieht den Hund.", "Der Hund sieht den Mann.", "Die Frau sieht den Hund.", "Der Mann sieht das Kind."], answer: "Der Mann sieht den Hund." },
          { type: "match", prompt: "Match the nominative with the accusative",
            pairs: [
              { de: "der Hund", en: "den Hund" },
              { de: "ein Apfel", en: "einen Apfel" },
              { de: "mein Bruder", en: "meinen Bruder" },
              { de: "kein Tisch", en: "keinen Tisch" }
            ] },
          { type: "type", prompt: "Type this in German", src: "I see the dog.", answer: "Ich sehe den Hund." },
          { type: "order", src: "The man sees the dog.", answer: "Der Mann sieht den Hund.", extra: ["dem"] },
          { type: "order", src: "Who sees the dog?", answer: "Wer sieht den Hund?", extra: ["Wen"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 2: Articles and cases
         --------------------------------------------------- */
      {
        id: "u10l2",
        title: "Articles & Cases",
        emoji: "🗂️",
        goal: "Use the right article after common prepositions.",
        hook: "You have met three cases without noticing. Here they are in one place.",
        vocab: [
          { de: "für", en: "for", ex: "Das Geschenk ist für meinen Bruder.", exEn: "The gift is for my brother." },
          { de: "ohne", en: "without", ex: "Ich gehe ohne meinen Hund.", exEn: "I go without my dog." },
          { de: "mit", en: "with", ex: "Ich spreche mit meinem Bruder.", exEn: "I talk with my brother." },
          { de: "von", en: "from, of" },
          { de: "bei", en: "at, near, with" },
          { de: "aus", en: "out of, from" },
          { de: "nach", en: "to, after" },
          { de: "Geschenk", art: "das", pl: "Geschenke", en: "gift" },
          { de: "Bruder", art: "der", pl: "Brüder", en: "brother" },
          { de: "Tante", art: "die", pl: "Tanten", en: "aunt" },
          { de: "sprechen", en: "to speak" },
          { de: "Das Geschenk ist für dich.", en: "The gift is for you." },
          { de: "Ich wohne bei meiner Tante.", en: "I live with my aunt." }
        ],
        tip: {
          title: "Three cases at A1",
          text: "**Nominative**: the subject. **Accusative**: the direct object and after **für, ohne, durch, gegen**. **Dative**: after **mit, von, bei, aus, nach, zu** and after location prepositions (**in, auf, neben, unter…**) when you answer **Wo?** The dative changes more articles: **der/das → dem**, **die → der**, **plural → den**. **ein-words**: **einem** (der/das), **einer** (die). Memory trick: **für + acc., mit + dat.** Learn these chunks first.",
          table: {
            head: ["Case", "der", "die", "das", "Plural"],
            rows: [
              ["**Nominative**", "der / ein", "die / eine", "das / ein", "die"],
              ["**Accusative**", "**den / einen**", "die / eine", "das / ein", "die"],
              ["**Dative**", "**dem / einem**", "**der / einer**", "**dem / einem**", "**den**"]
            ]
          },
          examples: [
            { de: "Das Geschenk ist für meinen Bruder. Ich spreche mit meinem Bruder.", en: "The gift is for my brother. I am talking with my brother." },
            { de: "Ich wohne bei meiner Tante und fahre mit dem Bus.", en: "I live with my aunt and take the bus." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which preposition always takes the accusative?",
            options: ["für", "mit", "von", "nach"], answer: 0 },
          { type: "mcq", prompt: "Which preposition always takes the dative?",
            options: ["mit", "für", "ohne", "durch"], answer: 0 },
          { type: "mcq", prompt: "What is ‘die Tante’ in the dative?",
            options: ["der Tante", "dem Tante", "den Tante", "die Tante"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das Geschenk ist für ___ Bruder.", en: "The gift is for my brother.",
            options: ["meinen", "meinem", "mein", "meiner"], answer: "meinen", explain: "**für** takes the accusative: **der Bruder → meinen Bruder**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich spreche mit ___ Bruder.", en: "I am talking with my brother.",
            options: ["meinem", "meinen", "mein", "meiner"], answer: "meinem", explain: "**mit** takes the dative: **dem Bruder → meinem Bruder**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich wohne bei ___ Tante.", en: "I live with my aunt.",
            options: ["meiner", "meinem", "meinen", "meine"], answer: "meiner" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich fahre mit ___ Auto.", en: "I travel by car.",
            options: ["dem", "den", "der", "das"], answer: "dem" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich gehe ohne ___ Hund.", en: "I go without the dog.",
            options: ["den", "dem", "der", "das"], answer: "den" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Das Geschenk ist für dich.",
            options: ["Das Geschenk ist für dich.", "Das Geschenk ist von dir.", "Das Geschenk ist für mich.", "Das Geschenk ist für ihn."], answer: "Das Geschenk ist für dich." },
          { type: "match", prompt: "Match the preposition with the English",
            pairs: [
              { de: "für", en: "for" },
              { de: "ohne", en: "without" },
              { de: "mit", en: "with" },
              { de: "nach", en: "to, after" }
            ] },
          { type: "type", prompt: "Type this in German", src: "The gift is for you.", answer: "Das Geschenk ist für dich." },
          { type: "order", src: "I talk with my brother.", answer: "Ich spreche mit meinem Bruder.", extra: ["meinen"] },
          { type: "order", src: "I live with my aunt.", answer: "Ich wohne bei meiner Tante.", extra: ["meine"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 3: Personal pronouns
         --------------------------------------------------- */
      {
        id: "u10l3",
        title: "Personal Pronouns",
        emoji: "🙋",
        goal: "Replace nouns with pronouns in different cases.",
        hook: "Pronouns save you from repeating nouns. Learn the three sets together.",
        vocab: [
          { de: "kennen", en: "to know (a person)", ex: "Kennst du Anna?", exEn: "Do you know Anna?" },
          { de: "besuchen", en: "to visit", ex: "Ich besuche ihn.", exEn: "I visit him." },
          { de: "gefallen", en: "to please, to be liked", ex: "Das Kleid gefällt mir.", exEn: "I like the dress." },
          { de: "mich", en: "me (acc.)" },
          { de: "dich", en: "you (acc., informal)" },
          { de: "ihn", en: "him, it (masculine, acc.)" },
          { de: "uns", en: "us" },
          { de: "euch", en: "you all (acc. and dat.)" },
          { de: "mir", en: "to me (dat.)" },
          { de: "dir", en: "to you (dat., informal)" },
          { de: "Ich liebe dich.", en: "I love you." },
          { de: "Wie geht es dir?", en: "How are you?" },
          { de: "Das gefällt mir.", en: "I like that." }
        ],
        tip: {
          title: "Three pronoun sets",
          text: "Each pronoun has a **nominative** form (subject), an **accusative** form (object) and a **dative** form. Only a few change in the accusative: **er → ihn**, **ich → mich**, **du → dich**, **wir → uns**, **ihr → euch**. **sie, es and Sie** stay the same. A noun becomes a pronoun by its **gender**: **der Hund → er/ihn**, **die Frau → sie**, **das Buch → es**. The dative appears in set phrases: **Wie geht es dir?**, **Das gefällt mir.**, **Es tut mir leid.**",
          table: {
            head: ["Nom.", "Acc.", "Dat."],
            rows: [
              ["**ich**", "mich", "mir"],
              ["**du**", "dich", "dir"],
              ["**er**", "**ihn**", "ihm"],
              ["**sie** (she)", "sie", "ihr"],
              ["**es**", "es", "ihm"],
              ["**wir**", "uns", "uns"],
              ["**ihr**", "euch", "euch"],
              ["**sie / Sie**", "sie / Sie", "ihnen / Ihnen"]
            ]
          },
          examples: [
            { de: "Wo ist der Hund? – Ich sehe ihn nicht.", en: "Where is the dog? – I don’t see him." },
            { de: "Kennst du Anna? – Ja, ich kenne sie gut. Ich besuche sie oft.", en: "Do you know Anna? – Yes, I know her well. I visit her often." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "What is ‘er’ in the accusative?",
            options: ["ihn", "ihm", "ihr", "er"], answer: 0 },
          { type: "mcq", prompt: "Which pronoun replaces ‘das Buch’?",
            options: ["es", "er", "sie", "ihn"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich sehe ___.", en: "I see him (the dog).",
            options: ["ihn", "er", "ihm", "sie"], answer: "ihn" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich liebe ___.", en: "I love you.",
            options: ["dich", "du", "dir", "dein"], answer: "dich" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Kennst du Anna? – Ja, ich kenne ___ gut.", en: "Do you know Anna? – Yes, I know her well.",
            options: ["sie", "ihn", "es", "ihr"], answer: "sie" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wie geht es ___?", en: "How are you? (informal)",
            options: ["dir", "dich", "du", "dein"], answer: "dir" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das Kleid gefällt ___.", en: "I like the dress.",
            options: ["mir", "mich", "ich", "mein"], answer: "mir" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das Buch ist gut. ___ ist neu.", en: "The book is good. It is new.",
            options: ["Es", "Er", "Sie", "Ihn"], answer: "Es" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Ich liebe dich.",
            options: ["Ich liebe dich.", "Ich liebe mich.", "Ich liebe sie.", "Ich liebe ihn."], answer: "Ich liebe dich." },
          { type: "match", prompt: "Match the nominative with the accusative",
            pairs: [
              { de: "ich", en: "mich" },
              { de: "du", en: "dich" },
              { de: "er", en: "ihn" },
              { de: "wir", en: "uns" }
            ] },
          { type: "type", prompt: "Type this in German", src: "How are you? (informal)", answer: "Wie geht es dir?" },
          { type: "order", src: "I visit him.", answer: "Ich besuche ihn.", extra: ["er"] },
          { type: "order", src: "I like that.", answer: "Das gefällt mir.", extra: ["mich"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 4: Word order
         --------------------------------------------------- */
      {
        id: "u10l4",
        title: "Word Order",
        emoji: "🧱",
        goal: "Build main clauses with the verb in second position.",
        hook: "The golden rule of German: the conjugated verb is always in position two.",
        vocab: [
          { de: "heute", en: "today", ex: "Heute lerne ich Deutsch.", exEn: "Today I learn German." },
          { de: "morgen", en: "tomorrow" },
          { de: "jetzt", en: "now" },
          { de: "dann", en: "then" },
          { de: "am Wochenende", en: "on the weekend" },
          { de: "Wochenende", art: "das", pl: "Wochenenden", en: "weekend" },
          { de: "Eltern", art: "die", en: "parents" },
          { de: "Kino", art: "das", pl: "Kinos", en: "cinema" },
          { de: "Am Wochenende besuche ich meine Eltern.", en: "On the weekend I visit my parents." },
          { de: "Dann koche ich.", en: "Then I cook." },
          { de: "Morgen habe ich Zeit.", en: "Tomorrow I have time." }
        ],
        tip: {
          title: "Verb in position two",
          text: "In a normal statement the **conjugated verb** is always the **second element**. The first element can be the subject, a time word, or an object. If you move something else to the front, the **subject jumps behind the verb**: **Ich lerne heute Deutsch. → Heute lerne ich Deutsch.** The meaning stays the same, only the focus changes. **W-questions** start with the question word and the verb is second: **Wann kommst du?** Words like **und, aber, oder, denn** do not count as an element, so the order after them stays normal. With separable verbs the prefix still goes to the end.",
          table: {
            head: ["Position 1", "Position 2 (verb)", "Rest"],
            rows: [
              ["**Ich**", "lerne", "heute Deutsch."],
              ["**Heute**", "lerne", "ich Deutsch."],
              ["**Am Wochenende**", "besuche", "ich meine Eltern."],
              ["**Dann**", "koche", "ich."],
              ["**Wann**", "kommst", "du?"]
            ]
          },
          examples: [
            { de: "Heute habe ich Zeit, aber morgen arbeite ich.", en: "Today I have time, but tomorrow I work." },
            { de: "Am Samstag kaufen wir ein und dann koche ich.", en: "On Saturday we shop and then I cook." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "In a statement, which position is the conjugated verb in?",
            options: ["Position 2", "Position 1", "Position 3", "The end"], answer: 0 },
          { type: "mcq", prompt: "Which sentence is correct?",
            options: ["Heute lerne ich Deutsch.", "Heute ich lerne Deutsch.", "Ich heute lerne Deutsch.", "Lerne heute ich Deutsch."], answer: 0 },
          { type: "mcq", prompt: "Which sentence is correct?",
            options: ["Am Samstag kaufen wir ein.", "Am Samstag wir kaufen ein.", "Wir am Samstag kaufen ein.", "Am Samstag kaufen ein wir."], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Morgen ___ ich Zeit.", en: "Tomorrow I have time.",
            options: ["habe", "hast", "hat", "haben"], answer: "habe" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Am Wochenende ___ ich meine Eltern.", en: "On the weekend I visit my parents.",
            options: ["besuche", "besuchst", "besucht", "besuchen"], answer: "besuche" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich lerne Deutsch, ___ du hörst Musik.", en: "I learn German, and you listen to music.",
            options: ["und", "dann", "heute", "jetzt"], answer: "und" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wann ___ du?", en: "When are you coming?",
            options: ["kommst", "komme", "kommt", "kommen"], answer: "kommst" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Heute lerne ich Deutsch.",
            options: ["Heute lerne ich Deutsch.", "Heute lernst du Deutsch.", "Morgen lerne ich Deutsch.", "Heute lerne ich Englisch."], answer: "Heute lerne ich Deutsch." },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "heute", en: "today" },
              { de: "morgen", en: "tomorrow" },
              { de: "jetzt", en: "now" },
              { de: "dann", en: "then" }
            ] },
          { type: "type", prompt: "Type this in German", src: "Then I cook.", answer: "Dann koche ich." },
          { type: "order", src: "Today I learn German.", answer: "Heute lerne ich Deutsch.", extra: ["lernst"] },
          { type: "order", src: "On Saturday we go shopping.", answer: "Am Samstag kaufen wir ein.", extra: ["kauft"] },
          { type: "order", src: "On the weekend I visit my parents.", answer: "Am Wochenende besuche ich meine Eltern.", extra: ["meinen"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 5: Yes/no questions and negation
         --------------------------------------------------- */
      {
        id: "u10l5",
        title: "Questions & Negation",
        emoji: "❓",
        goal: "Ask yes/no questions and say no in the right way.",
        hook: "Flip the verb to the front and you have a question. Add nicht or kein and you have a ‘no’.",
        vocab: [
          { de: "Frage", art: "die", pl: "Fragen", en: "question" },
          { de: "Antwort", art: "die", pl: "Antworten", en: "answer" },
          { de: "ja", en: "yes" },
          { de: "nein", en: "no" },
          { de: "doch", en: "yes (to a negative question)" },
          { de: "nichts", en: "nothing", ex: "Ich esse nichts.", exEn: "I eat nothing." },
          { de: "niemand", en: "nobody" },
          { de: "stimmen", en: "to be correct" },
          { de: "Stimmt das?", en: "Is that right?" },
          { de: "Das stimmt nicht.", en: "That is not true." },
          { de: "Hast du Zeit?", en: "Do you have time?" },
          { de: "Lernst du Deutsch?", en: "Do you learn German?" },
          { de: "Ich fahre nicht nach Berlin.", en: "I am not going to Berlin." }
        ],
        tip: {
          title: "Yes/no questions and negation",
          text: "For a **yes/no question**, put the **verb first**: **Lernst du Deutsch? Hast du Zeit?** Answer **Ja** or **Nein**. For a **negative question**, answer **Doch** to say yes: **Hast du keine Zeit? – Doch!** To negate, use **kein** for nouns with **ein** or no article, and **nicht** for everything else. **nicht** usually goes **at the end** (**Ich arbeite nicht.**), **before an adjective** (**Das ist nicht gut.**) or **before a place or direction** (**Ich fahre nicht nach Berlin.**). Other negatives: **nie** (never), **nichts** (nothing), **niemand** (nobody).",
          table: {
            head: ["Type", "Example", "Rule"],
            rows: [
              ["Question", "**Lernst** du Deutsch?", "verb first"],
              ["Verb", "Ich arbeite **nicht**.", "nicht at the end"],
              ["Adjective", "Das ist **nicht** gut.", "nicht before the adjective"],
              ["Place", "Ich fahre **nicht** nach Berlin.", "nicht before the place"],
              ["Noun", "Ich habe **keine** Zeit.", "kein + noun"]
            ]
          },
          examples: [
            { de: "Hast du heute Zeit? – Nein, ich habe keine Zeit. Ich arbeite.", en: "Do you have time today? – No, I have no time. I am working." },
            { de: "Trinkst du keinen Kaffee? – Doch, aber ich trinke nie Tee.", en: "You don’t drink coffee? – Yes I do, but I never drink tea." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which sentence is a yes/no question?",
            options: ["Lernst du Deutsch?", "Du lernst Deutsch.", "Wann lernst du?", "Ich lerne Deutsch."], answer: 0 },
          { type: "mcq", prompt: "Someone asks ‘Hast du keine Zeit?’ and you do have time. You say:",
            options: ["Doch!", "Ja!", "Nein!", "Nicht!"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ du Deutsch?", en: "Do you learn German?",
            options: ["Lernst", "Lerne", "Lernt", "Lernen"], answer: "Lernst" },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ du Zeit?", en: "Do you have time?",
            options: ["Hast", "Hat", "Habe", "Haben"], answer: "Hast" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich trinke ___ Kaffee.", en: "I drink no coffee.",
            options: ["keinen", "kein", "keine", "nicht"], answer: "keinen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das Wetter ist ___ gut.", en: "The weather is not good.",
            options: ["nicht", "kein", "keine", "nie"], answer: "nicht" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich fahre ___ nach Berlin.", en: "I am not going to Berlin.",
            options: ["nicht", "kein", "keinen", "nichts"], answer: "nicht" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich esse ___.", en: "I eat nothing.",
            options: ["nichts", "nicht", "kein", "niemand"], answer: "nichts" },
          { type: "listen", prompt: "Which question do you hear?", text: "Hast du Zeit?",
            options: ["Hast du Zeit?", "Hast du Geld?", "Hast du Hunger?", "Hast du keine Zeit?"], answer: "Hast du Zeit?" },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "nie", en: "never" },
              { de: "nichts", en: "nothing" },
              { de: "niemand", en: "nobody" },
              { de: "doch", en: "yes (to a negative)" }
            ] },
          { type: "type", prompt: "Type this in German", src: "Do you have time?", answer: "Hast du Zeit?" },
          { type: "order", src: "Do you learn German?", answer: "Lernst du Deutsch?", extra: ["Lerne"] },
          { type: "order", src: "I am not going to Berlin.", answer: "Ich fahre nicht nach Berlin.", extra: ["kein"] }
        ]
      }
    ],

    /* -----------------------------------------------------
       Unit mini-test: 10 items are drawn at random.
       Pass mark: 70% to unlock Unit 11.
       ----------------------------------------------------- */
    test: [
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich sehe ___ Hund.", en: "I see the dog.",
        options: ["den", "der", "dem", "die"], answer: "den" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Das Kind isst ___ Apfel.", en: "The child eats an apple.",
        options: ["einen", "ein", "eine", "einem"], answer: "einen" },
      { type: "mcq", prompt: "Which question word asks for the accusative object?",
        options: ["Wen?", "Wer?", "Wo?", "Wann?"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Das Geschenk ist für ___ Bruder.", en: "The gift is for my brother.",
        options: ["meinen", "meinem", "mein", "meiner"], answer: "meinen" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich spreche mit ___ Bruder.", en: "I am talking with my brother.",
        options: ["meinem", "meinen", "mein", "meiner"], answer: "meinem" },
      { type: "mcq", prompt: "Which preposition always takes the dative?",
        options: ["mit", "für", "ohne", "durch"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich fahre mit ___ Auto.", en: "I travel by car.",
        options: ["dem", "den", "der", "das"], answer: "dem" },
      { type: "mcq", prompt: "What is ‘er’ in the accusative?",
        options: ["ihn", "ihm", "ihr", "er"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich liebe ___.", en: "I love you.",
        options: ["dich", "du", "dir", "dein"], answer: "dich" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wie geht es ___?", en: "How are you? (informal)",
        options: ["dir", "dich", "du", "dein"], answer: "dir" },
      { type: "listen", prompt: "Which sentence do you hear?", text: "Ich liebe dich.",
        options: ["Ich liebe dich.", "Ich liebe mich.", "Ich liebe sie.", "Ich liebe ihn."], answer: "Ich liebe dich." },
      { type: "mcq", prompt: "Which sentence is correct?",
        options: ["Heute lerne ich Deutsch.", "Heute ich lerne Deutsch.", "Ich heute lerne Deutsch.", "Lerne heute ich Deutsch."], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Morgen ___ ich Zeit.", en: "Tomorrow I have time.",
        options: ["habe", "hast", "hat", "haben"], answer: "habe" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wann ___ du?", en: "When are you coming?",
        options: ["kommst", "komme", "kommt", "kommen"], answer: "kommst" },
      { type: "fill", prompt: "Fill in the blank", sentence: "___ du Deutsch?", en: "Do you learn German?",
        options: ["Lernst", "Lerne", "Lernt", "Lernen"], answer: "Lernst" },
      { type: "mcq", prompt: "Someone asks ‘Hast du keine Zeit?’ and you do have time. You say:",
        options: ["Doch!", "Ja!", "Nein!", "Nicht!"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich trinke ___ Kaffee.", en: "I drink no coffee.",
        options: ["keinen", "kein", "keine", "nicht"], answer: "keinen" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich fahre ___ nach Berlin.", en: "I am not going to Berlin.",
        options: ["nicht", "kein", "keinen", "nichts"], answer: "nicht" },
      { type: "article", noun: "Hund", en: "dog", answer: "der" },
      { type: "type", prompt: "Type this in German", src: "Do you have time?", answer: "Hast du Zeit?" },
      { type: "order", src: "The man sees the dog.", answer: "Der Mann sieht den Hund.", extra: ["dem"] },
      { type: "order", src: "Today I learn German.", answer: "Heute lerne ich Deutsch.", extra: ["lernst"] }
    ]
  });
})();
