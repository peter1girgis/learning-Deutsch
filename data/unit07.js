/* =========================================================
   Deutsch A1 — data/unit07.js
   Unit 7: Shopping (5 lessons + mini-test)
   Registers itself with GA1.units.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  GA1.units.push({
    id: "u07",
    num: 7,
    title: "Shopping",
    subtitle: "Buy clothes, food and everyday things",
    icon: "🛍️",
    color: "#ffd60a",
    outcomes: [
      "Name clothes and colors",
      "Talk to people in stores and at the market",
      "Ask and say what things cost",
      "Use the accusative with ein, kein and mein",
      "Describe things with basic adjectives"
    ],

    lessons: [
      /* ---------------------------------------------------
         Lesson 1: Clothes and colors
         --------------------------------------------------- */
      {
        id: "u07l1",
        title: "Clothes & Colors",
        emoji: "👕",
        goal: "Name common clothes and colors.",
        hook: "Before you can go shopping, you need the words for what you want to buy and what color it should be.",
        vocab: [
          { de: "Kleidung", art: "die", en: "clothes", ex: "Ich kaufe neue Kleidung.", exEn: "I am buying new clothes." },
          { de: "Hose", art: "die", pl: "Hosen", en: "pants, trousers", ex: "Die Hose ist blau.", exEn: "The pants are blue." },
          { de: "Jacke", art: "die", pl: "Jacken", en: "jacket", ex: "Die Jacke ist schwarz.", exEn: "The jacket is black." },
          { de: "Pullover", art: "der", pl: "Pullover", en: "sweater", ex: "Der Pullover ist grau.", exEn: "The sweater is gray." },
          { de: "T-Shirt", art: "das", pl: "T-Shirts", en: "T-shirt", ex: "Das T-Shirt ist weiß.", exEn: "The T-shirt is white." },
          { de: "Kleid", art: "das", pl: "Kleider", en: "dress", ex: "Das Kleid ist rot.", exEn: "The dress is red." },
          { de: "Rock", art: "der", pl: "Röcke", en: "skirt" },
          { de: "Mantel", art: "der", pl: "Mäntel", en: "coat" },
          { de: "Hemd", art: "das", pl: "Hemden", en: "shirt" },
          { de: "Schuh", art: "der", pl: "Schuhe", en: "shoe" },
          { de: "Mütze", art: "die", pl: "Mützen", en: "cap, hat" },
          { de: "rot", en: "red" },
          { de: "blau", en: "blue" },
          { de: "grün", en: "green" },
          { de: "gelb", en: "yellow" },
          { de: "schwarz", en: "black" },
          { de: "weiß", en: "white" },
          { de: "grau", en: "gray" },
          { de: "braun", en: "brown" },
          { de: "Welche Farbe?", en: "Which color?" },
          { de: "Die Hose ist blau.", en: "The pants are blue." }
        ],
        tip: {
          title: "Colors are easy",
          text: "Colors are adjectives. After **sein** they **never change**: **Der Pullover ist rot. Die Jacke ist rot. Die Schuhe sind rot.** Ask for a color with **Welche Farbe?** Learn each clothing noun **with its article**. Many clothing words are plural in German, for example **die Schuhe** (shoes) and **die Hosen** (pants). Note: **Hose** is singular in German, so you say **Die Hose ist blau.**",
          table: {
            head: ["Article", "Noun", "Meaning"],
            rows: [
              ["**der**", "Pullover, Rock, Mantel, Schuh", "sweater, skirt, coat, shoe"],
              ["**die**", "Hose, Jacke, Mütze", "pants, jacket, cap"],
              ["**das**", "T-Shirt, Kleid, Hemd", "T-shirt, dress, shirt"]
            ]
          },
          examples: [
            { de: "Welche Farbe hat die Jacke? – Sie ist schwarz.", en: "What color is the jacket? – It is black." },
            { de: "Das Kleid ist rot und die Schuhe sind weiß.", en: "The dress is red and the shoes are white." }
          ]
        },
        exercises: [
          { type: "article", noun: "Pullover", en: "sweater", answer: "der" },
          { type: "article", noun: "Jacke", en: "jacket", answer: "die" },
          { type: "article", noun: "Kleid", en: "dress", answer: "das" },
          { type: "article", noun: "Mantel", en: "coat", answer: "der" },
          { type: "mcq", prompt: "What color is ‘grün’?",
            options: ["green", "red", "yellow", "gray"], answer: 0 },
          { type: "mcq", prompt: "Which word means ‘white’?",
            options: ["weiß", "schwarz", "grau", "braun"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die Hose ist ___.", en: "The pants are blue.",
            options: ["blau", "Blau", "blaue", "blauen"], answer: "blau", explain: "After **sein**, the color does not change." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das T-Shirt ist ___.", en: "The T-shirt is white.",
            options: ["weiß", "schwarz", "rot", "gelb"], answer: "weiß" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Die Jacke ist schwarz.",
            options: ["Die Jacke ist schwarz.", "Die Jacke ist grau.", "Die Hose ist schwarz.", "Das Kleid ist schwarz."], answer: "Die Jacke ist schwarz." },
          { type: "match", prompt: "Match the color with the English",
            pairs: [
              { de: "rot", en: "red" },
              { de: "gelb", en: "yellow" },
              { de: "braun", en: "brown" },
              { de: "grau", en: "gray" }
            ] },
          { type: "type", prompt: "Type this in German", src: "the coat", answer: "der Mantel", accept: ["Mantel"] },
          { type: "order", src: "The pants are blue.", answer: "Die Hose ist blau.", extra: ["sind"] },
          { type: "order", src: "Which color?", answer: "Welche Farbe?", extra: ["Was"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 2: Stores and the market
         --------------------------------------------------- */
      {
        id: "u07l2",
        title: "Stores & Market",
        emoji: "🏪",
        goal: "Know the main shops and talk to a shop assistant.",
        hook: "Bakery, supermarket, market stall: with a few set phrases you can handle each one.",
        vocab: [
          { de: "Geschäft", art: "das", pl: "Geschäfte", en: "store, shop" },
          { de: "Supermarkt", art: "der", pl: "Supermärkte", en: "supermarket" },
          { de: "Bäckerei", art: "die", pl: "Bäckereien", en: "bakery" },
          { de: "Metzgerei", art: "die", pl: "Metzgereien", en: "butcher’s shop" },
          { de: "Apotheke", art: "die", pl: "Apotheken", en: "pharmacy" },
          { de: "Buchhandlung", art: "die", pl: "Buchhandlungen", en: "bookstore" },
          { de: "Markt", art: "der", pl: "Märkte", en: "market" },
          { de: "Kaufhaus", art: "das", pl: "Kaufhäuser", en: "department store" },
          { de: "Obst", art: "das", en: "fruit" },
          { de: "Gemüse", art: "das", en: "vegetables" },
          { de: "Kilo", art: "das", en: "kilo", ex: "Ein Kilo Äpfel, bitte.", exEn: "A kilo of apples, please." },
          { de: "Stück", art: "das", en: "piece" },
          { de: "Kann ich Ihnen helfen?", en: "Can I help you?" },
          { de: "Ich suche eine Jacke.", en: "I am looking for a jacket." },
          { de: "Haben Sie Brot?", en: "Do you have bread?" },
          { de: "Sonst noch etwas?", en: "Anything else?" },
          { de: "Das ist alles, danke.", en: "That is all, thank you." },
          { de: "geöffnet", en: "open" },
          { de: "geschlossen", en: "closed" }
        ],
        tip: {
          title: "Talking to a shop assistant",
          text: "Staff often start with **Kann ich Ihnen helfen?** Answer with **Ich suche …** (I am looking for …), **Ich brauche …** (I need …) or **Haben Sie …?** (Do you have …?). Shop names ending in **-ei** and **-ke** are almost always **die**: **die Bäckerei, die Apotheke**. At a market, give amounts without ‘of’: **ein Kilo Äpfel**, **ein Stück Käse**. When you are done, say **Das ist alles, danke.**",
          table: {
            head: ["Shop", "You buy…", "Example"],
            rows: [
              ["**die Bäckerei**", "Brot, Brötchen", "Ich möchte Brot, bitte."],
              ["**die Metzgerei**", "Fleisch, Wurst", "Haben Sie Wurst?"],
              ["**die Apotheke**", "Medikamente", "Ich brauche Hustensaft."],
              ["**der Markt**", "Obst, Gemüse", "Ein Kilo Tomaten, bitte."],
              ["**die Buchhandlung**", "Bücher", "Ich suche ein Buch."]
            ]
          },
          examples: [
            { de: "Kann ich Ihnen helfen? – Ja, ich suche eine Jacke.", en: "Can I help you? – Yes, I am looking for a jacket." },
            { de: "Ein Kilo Äpfel, bitte. – Sonst noch etwas? – Nein, das ist alles, danke.", en: "A kilo of apples, please. – Anything else? – No, that is all, thank you." }
          ]
        },
        exercises: [
          { type: "article", noun: "Supermarkt", en: "supermarket", answer: "der" },
          { type: "article", noun: "Bäckerei", en: "bakery", answer: "die" },
          { type: "article", noun: "Geschäft", en: "store", answer: "das" },
          { type: "article", noun: "Apotheke", en: "pharmacy", answer: "die" },
          { type: "mcq", prompt: "What does ‘Sonst noch etwas?’ mean?",
            options: ["Anything else?", "How much is it?", "Is it open?", "Can I pay?"], answer: 0 },
          { type: "mcq", prompt: "Where do you buy bread?",
            options: ["In der Bäckerei", "In der Apotheke", "In der Buchhandlung", "In der Metzgerei"], answer: 0 },
          { type: "mcq", prompt: "Which phrase means ‘I am looking for…’?",
            options: ["Ich suche …", "Ich habe …", "Ich bin …", "Ich komme …"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ eine Jacke.", en: "I am looking for a jacket.",
            options: ["suche", "suchst", "sucht", "suchen"], answer: "suche" },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ Sie Brot?", en: "Do you have bread?",
            options: ["Haben", "Hat", "Habe", "Sind"], answer: "Haben" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ein Kilo Äpfel, ___.", en: "A kilo of apples, please.",
            options: ["bitte", "danke", "hallo", "gern"], answer: "bitte" },
          { type: "listen", prompt: "Which question do you hear?", text: "Kann ich Ihnen helfen?",
            options: ["Kann ich Ihnen helfen?", "Wie geht es Ihnen?", "Wo wohnen Sie?", "Was kostet das?"], answer: "Kann ich Ihnen helfen?" },
          { type: "match", prompt: "Match the shop with the English",
            pairs: [
              { de: "Bäckerei", en: "bakery" },
              { de: "Apotheke", en: "pharmacy" },
              { de: "Markt", en: "market" },
              { de: "Buchhandlung", en: "bookstore" }
            ] },
          { type: "type", prompt: "Type this in German", src: "That is all, thank you.", answer: "Das ist alles, danke." },
          { type: "order", src: "Do you have bread?", answer: "Haben Sie Brot?", extra: ["Hast"] },
          { type: "order", src: "I am looking for a jacket.", answer: "Ich suche eine Jacke.", extra: ["ein"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 3: Prices
         --------------------------------------------------- */
      {
        id: "u07l3",
        title: "Wie viel kostet…?",
        emoji: "💶",
        goal: "Ask for prices and understand the answer.",
        hook: "Knowing how to ask what something costs is the most useful shopping sentence of all.",
        vocab: [
          { de: "kosten", en: "to cost", ex: "Wie viel kostet das?", exEn: "How much does that cost?" },
          { de: "Euro", art: "der", pl: "Euro", en: "euro" },
          { de: "Cent", art: "der", pl: "Cent", en: "cent" },
          { de: "Preis", art: "der", pl: "Preise", en: "price" },
          { de: "teuer", en: "expensive", ex: "Der Mantel ist teuer.", exEn: "The coat is expensive." },
          { de: "billig", en: "cheap" },
          { de: "günstig", en: "good value, inexpensive" },
          { de: "bezahlen", en: "to pay", ex: "Ich bezahle mit Karte.", exEn: "I pay by card." },
          { de: "bar", en: "in cash" },
          { de: "Karte", art: "die", pl: "Karten", en: "card" },
          { de: "Kasse", art: "die", pl: "Kassen", en: "checkout, cash register" },
          { de: "Wie viel kostet die Jacke?", en: "How much does the jacket cost?" },
          { de: "Was kostet das?", en: "What does that cost?" },
          { de: "Das macht zwanzig Euro.", en: "That comes to twenty euros." },
          { de: "Zahlen Sie bar oder mit Karte?", en: "Do you pay in cash or by card?" },
          { de: "Stimmt so.", en: "Keep the change." }
        ],
        tip: {
          title: "Asking for prices",
          text: "Use **Wie viel kostet …?** for one thing and **Wie viel kosten …?** for several things. The verb agrees with the thing you ask about: **Wie viel kostet der Mantel?** but **Wie viel kosten die Schuhe?** In the answer, use **er** (der), **sie** (die), **es** (das) or **sie** (plural): **Er kostet fünfzig Euro.** **Euro** and **Cent** do not take a plural ending after numbers. Say prices like this: **neunzehn Euro neunundneunzig** (€19.99).",
          table: {
            head: ["Question", "Answer"],
            rows: [
              ["Wie viel kostet **der** Mantel?", "**Er** kostet neunzig Euro."],
              ["Wie viel kostet **die** Jacke?", "**Sie** kostet fünfzig Euro."],
              ["Wie viel kostet **das** Kleid?", "**Es** kostet vierzig Euro."],
              ["Wie viel kosten **die** Schuhe?", "**Sie** kosten sechzig Euro."]
            ]
          },
          examples: [
            { de: "Wie viel kostet das T-Shirt? – Es kostet zehn Euro.", en: "How much does the T-shirt cost? – It costs ten euros." },
            { de: "Das macht zwanzig Euro fünfzig. – Hier, bitte. Stimmt so.", en: "That comes to 20.50. – Here you go. Keep the change." }
          ]
        },
        exercises: [
          { type: "fill", prompt: "Fill in the blank", sentence: "Wie viel ___ die Jacke?", en: "How much does the jacket cost?",
            options: ["kostet", "kosten", "koste", "kostest"], answer: "kostet" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wie viel ___ die Schuhe?", en: "How much do the shoes cost?",
            options: ["kosten", "kostet", "koste", "kostest"], answer: "kosten", explain: "**die Schuhe** is plural, so the verb is **kosten**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wie viel kostet der Mantel? – ___ kostet neunzig Euro.", en: "How much is the coat? – It costs ninety euros.",
            options: ["Er", "Sie", "Es", "Wir"], answer: "Er" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wie viel kostet das Kleid? – ___ kostet vierzig Euro.", en: "How much is the dress? – It costs forty euros.",
            options: ["Es", "Er", "Sie", "Ihr"], answer: "Es" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich bezahle mit ___.", en: "I pay by card.",
            options: ["Karte", "Kasse", "Preis", "Euro"], answer: "Karte" },
          { type: "mcq", prompt: "Which word means ‘expensive’?",
            options: ["teuer", "billig", "günstig", "bar"], answer: 0 },
          { type: "mcq", prompt: "What does ‘Stimmt so.’ mean when you pay?",
            options: ["Keep the change.", "That is wrong.", "I have no cash.", "How much is it?"], answer: 0 },
          { type: "listen", prompt: "Which question do you hear?", text: "Wie viel kostet die Jacke?",
            options: ["Wie viel kostet die Jacke?", "Wie viel kosten die Schuhe?", "Wie viel kostet das Kleid?", "Wie alt ist die Jacke?"], answer: "Wie viel kostet die Jacke?" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Das macht zwanzig Euro.",
            options: ["Das macht zwanzig Euro.", "Das macht dreißig Euro.", "Das macht zehn Euro.", "Das macht zwölf Euro."], answer: "Das macht zwanzig Euro." },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "teuer", en: "expensive" },
              { de: "billig", en: "cheap" },
              { de: "bar", en: "in cash" },
              { de: "bezahlen", en: "to pay" }
            ] },
          { type: "type", prompt: "Type this in German", src: "How much does that cost?", answer: "Wie viel kostet das?", accept: ["Was kostet das?"] },
          { type: "order", src: "How much does the jacket cost?", answer: "Wie viel kostet die Jacke?", extra: ["kosten"] },
          { type: "order", src: "That comes to twenty euros.", answer: "Das macht zwanzig Euro.", extra: ["kostet"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 4: Accusative with ein / kein / mein
         --------------------------------------------------- */
      {
        id: "u07l4",
        title: "The Accusative",
        emoji: "🎯",
        goal: "Use einen, keinen and meinen for things you buy, need and have.",
        hook: "Only one group of nouns changes. Once you see which one, the accusative is simple.",
        vocab: [
          { de: "brauchen", en: "to need", ex: "Ich brauche einen Mantel.", exEn: "I need a coat." },
          { de: "suchen", en: "to look for", ex: "Ich suche meinen Schlüssel.", exEn: "I am looking for my key." },
          { de: "nehmen", en: "to take", ex: "Ich nehme den Pullover.", exEn: "I’ll take the sweater." },
          { de: "tragen", en: "to wear, to carry", ex: "Sie trägt eine Mütze.", exEn: "She is wearing a cap." },
          { de: "kaufen", en: "to buy", ex: "Er kauft einen Rock.", exEn: "He buys a skirt." },
          { de: "Schlüssel", art: "der", pl: "Schlüssel", en: "key" },
          { de: "Tasche", art: "die", pl: "Taschen", en: "bag" },
          { de: "Handy", art: "das", pl: "Handys", en: "cell phone" },
          { de: "Regenschirm", art: "der", pl: "Regenschirme", en: "umbrella" },
          { de: "Ich brauche einen Mantel.", en: "I need a coat." },
          { de: "Ich nehme den Pullover.", en: "I’ll take the sweater." },
          { de: "Ich habe keinen Regenschirm.", en: "I don’t have an umbrella." }
        ],
        tip: {
          title: "Only der changes",
          text: "The **accusative** is the case for the **direct object**: the thing that is bought, needed, taken or searched for. Verbs like **kaufen, brauchen, suchen, nehmen, haben** take it. **Only masculine (der) nouns change**: **der → den**, **ein → einen**, **kein → keinen**, **mein → meinen**. **die, das and plural stay the same.** Note: **nehmen** is irregular: **ich nehme, du nimmst, er nimmt**. **tragen** adds an umlaut: **du trägst, er trägt**.",
          table: {
            head: ["", "der (m)", "die (f)", "das (n)", "Plural"],
            rows: [
              ["**the**", "**den** Mantel", "die Jacke", "das Kleid", "die Schuhe"],
              ["**a**", "**einen** Mantel", "eine Jacke", "ein Kleid", "– Schuhe"],
              ["**no**", "**keinen** Mantel", "keine Jacke", "kein Kleid", "keine Schuhe"],
              ["**my**", "**meinen** Mantel", "meine Jacke", "mein Kleid", "meine Schuhe"]
            ]
          },
          examples: [
            { de: "Ich brauche einen Mantel und eine Mütze.", en: "I need a coat and a cap." },
            { de: "Welchen Pullover nimmst du? – Ich nehme den roten.", en: "Which sweater do you take? – I’ll take the red one." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which nouns change in the accusative?",
            options: ["Masculine (der)", "Feminine (die)", "Neuter (das)", "Plural"], answer: 0 },
          { type: "mcq", prompt: "What is ‘der Mantel’ as a direct object?",
            options: ["den Mantel", "der Mantel", "dem Mantel", "die Mantel"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich brauche ___ Mantel.", en: "I need a coat.",
            options: ["einen", "ein", "eine", "einer"], answer: "einen", explain: "**Mantel** is **der**, so **ein** becomes **einen**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich kaufe ___ Jacke.", en: "I am buying a jacket.",
            options: ["eine", "einen", "ein", "einem"], answer: "eine", explain: "**die** nouns do not change: **eine Jacke**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich suche ___ Handy.", en: "I am looking for a cell phone.",
            options: ["ein", "einen", "eine", "einem"], answer: "ein" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich habe ___ Regenschirm.", en: "I don’t have an umbrella.",
            options: ["keinen", "kein", "keine", "nicht"], answer: "keinen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich suche ___ Schlüssel.", en: "I am looking for my key.",
            options: ["meinen", "mein", "meine", "meiner"], answer: "meinen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ den Pullover.", en: "I’ll take the sweater.",
            options: ["nehme", "nehmen", "nimmst", "nimmt"], answer: "nehme" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ die Schuhe.", en: "You take the shoes.",
            options: ["nimmst", "nehmst", "nehme", "nimmt"], answer: "nimmst", explain: "**nehmen** changes **e** to **i** for **du** and **er/sie**." },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Ich brauche einen Mantel.",
            options: ["Ich brauche einen Mantel.", "Ich brauche eine Jacke.", "Ich brauche ein Kleid.", "Ich kaufe einen Mantel."], answer: "Ich brauche einen Mantel." },
          { type: "match", prompt: "Match the nominative with the accusative",
            pairs: [
              { de: "der Mantel", en: "den Mantel" },
              { de: "ein Rock", en: "einen Rock" },
              { de: "kein Schlüssel", en: "keinen Schlüssel" },
              { de: "mein Hut", en: "meinen Hut" }
            ] },
          { type: "type", prompt: "Type this in German", src: "I need a coat.", answer: "Ich brauche einen Mantel." },
          { type: "order", src: "I’ll take the sweater.", answer: "Ich nehme den Pullover.", extra: ["der"] },
          { type: "order", src: "I am looking for my key.", answer: "Ich suche meinen Schlüssel.", extra: ["mein"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 5: Basic adjectives
         --------------------------------------------------- */
      {
        id: "u07l5",
        title: "Describing Things",
        emoji: "✨",
        goal: "Describe things with basic adjectives and opposites.",
        hook: "Is it too big? Too expensive? With a few pairs of opposites you can say exactly what you think.",
        vocab: [
          { de: "schön", en: "beautiful, nice", ex: "Das Kleid ist schön.", exEn: "The dress is beautiful." },
          { de: "hässlich", en: "ugly" },
          { de: "groß", en: "big, tall", ex: "Die Hose ist zu groß.", exEn: "The pants are too big." },
          { de: "klein", en: "small, short" },
          { de: "neu", en: "new" },
          { de: "alt", en: "old" },
          { de: "lang", en: "long" },
          { de: "kurz", en: "short" },
          { de: "bequem", en: "comfortable" },
          { de: "modern", en: "modern, fashionable" },
          { de: "sehr", en: "very", ex: "Der Rock ist sehr schön.", exEn: "The skirt is very nice." },
          { de: "zu", en: "too", ex: "Die Schuhe sind zu klein.", exEn: "The shoes are too small." },
          { de: "passen", en: "to fit, to suit", ex: "Die Jacke passt.", exEn: "The jacket fits." },
          { de: "Die Hose ist zu klein.", en: "The pants are too small." },
          { de: "Das gefällt mir.", en: "I like it." }
        ],
        tip: {
          title: "Adjectives after sein",
          text: "After **sein** the adjective **never changes**: **Der Mantel ist neu. Die Jacke ist neu. Die Schuhe sind neu.** Use **sehr** (very) and **zu** (too) before it: **sehr schön, zu teuer**. Use **nicht** to say the opposite: **Das ist nicht teuer.** **Preview:** directly before a noun, the adjective gets an ending: **ein neuer Mantel** (der), **eine neue Jacke** (die), **ein neues Kleid** (das). You only need to recognize this for now.",
          table: {
            head: ["Adjective", "Opposite", "Example"],
            rows: [
              ["**groß**", "**klein**", "Die Hose ist zu groß."],
              ["**neu**", "**alt**", "Das Handy ist neu."],
              ["**lang**", "**kurz**", "Der Rock ist kurz."],
              ["**teuer**", "**billig**", "Die Jacke ist teuer."],
              ["**schön**", "**hässlich**", "Das Kleid ist schön."]
            ]
          },
          examples: [
            { de: "Die Schuhe sind schön, aber zu teuer.", en: "The shoes are nice, but too expensive." },
            { de: "Passt die Hose? – Nein, sie ist zu klein.", en: "Do the pants fit? – No, they are too small." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "What is the opposite of ‘groß’?",
            options: ["klein", "neu", "lang", "alt"], answer: 0 },
          { type: "mcq", prompt: "What is the opposite of ‘neu’?",
            options: ["alt", "kurz", "teuer", "schön"], answer: 0 },
          { type: "mcq", prompt: "Which word means ‘too’ (as in ‘too small’)?",
            options: ["zu", "sehr", "auch", "und"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Der Rock ist ___ schön.", en: "The skirt is very nice.",
            options: ["sehr", "zu", "nicht", "kein"], answer: "sehr" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die Schuhe sind ___ klein.", en: "The shoes are too small.",
            options: ["zu", "sehr", "kein", "nie"], answer: "zu" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die Jacke ist ___.", en: "The jacket is new.",
            options: ["neu", "neue", "neuen", "neuer"], answer: "neu", explain: "After **sein**, adjectives have no ending." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die Schuhe ___ schön.", en: "The shoes are nice.",
            options: ["sind", "ist", "bin", "bist"], answer: "sind" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die Hose ___ nicht.", en: "The pants don’t fit.",
            options: ["passt", "passen", "passe", "passe"], answer: "passt" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Die Hose ist zu klein.",
            options: ["Die Hose ist zu klein.", "Die Hose ist zu groß.", "Die Hose ist sehr klein.", "Die Hose ist nicht klein."], answer: "Die Hose ist zu klein." },
          { type: "match", prompt: "Match the opposites",
            pairs: [
              { de: "groß", en: "klein" },
              { de: "neu", en: "alt" },
              { de: "lang", en: "kurz" },
              { de: "teuer", en: "billig" }
            ] },
          { type: "type", prompt: "Type this in German", src: "ugly", answer: "hässlich", accept: ["haesslich"] },
          { type: "order", src: "The shoes are too expensive.", answer: "Die Schuhe sind zu teuer.", extra: ["ist"] },
          { type: "order", src: "The dress is very nice.", answer: "Das Kleid ist sehr schön.", extra: ["zu"] }
        ]
      }
    ],

    /* -----------------------------------------------------
       Unit mini-test: 10 items are drawn at random.
       Pass mark: 70% to unlock Unit 8.
       ----------------------------------------------------- */
    test: [
      { type: "article", noun: "Pullover", en: "sweater", answer: "der" },
      { type: "article", noun: "Hose", en: "pants", answer: "die" },
      { type: "article", noun: "Kleid", en: "dress", answer: "das" },
      { type: "mcq", prompt: "Which word means ‘yellow’?",
        options: ["gelb", "grün", "grau", "braun"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Die Jacke ist ___.", en: "The jacket is black.",
        options: ["schwarz", "schwarze", "schwarzen", "schwarzer"], answer: "schwarz" },
      { type: "mcq", prompt: "What does ‘Sonst noch etwas?’ mean?",
        options: ["Anything else?", "How much is it?", "Can I pay?", "Is it open?"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ eine Jacke.", en: "I am looking for a jacket.",
        options: ["suche", "suchst", "sucht", "suchen"], answer: "suche" },
      { type: "listen", prompt: "Which question do you hear?", text: "Kann ich Ihnen helfen?",
        options: ["Kann ich Ihnen helfen?", "Wie geht es Ihnen?", "Wo wohnen Sie?", "Was kostet das?"], answer: "Kann ich Ihnen helfen?" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wie viel ___ die Jacke?", en: "How much does the jacket cost?",
        options: ["kostet", "kosten", "koste", "kostest"], answer: "kostet" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wie viel ___ die Schuhe?", en: "How much do the shoes cost?",
        options: ["kosten", "kostet", "koste", "kostest"], answer: "kosten" },
      { type: "mcq", prompt: "Which word means ‘cheap’?",
        options: ["billig", "teuer", "groß", "neu"], answer: 0 },
      { type: "listen", prompt: "Which sentence do you hear?", text: "Das macht zwanzig Euro.",
        options: ["Das macht zwanzig Euro.", "Das macht dreißig Euro.", "Das macht zehn Euro.", "Das macht zwölf Euro."], answer: "Das macht zwanzig Euro." },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich brauche ___ Mantel.", en: "I need a coat.",
        options: ["einen", "ein", "eine", "einer"], answer: "einen" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich kaufe ___ Jacke.", en: "I am buying a jacket.",
        options: ["eine", "einen", "ein", "einem"], answer: "eine" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich habe ___ Regenschirm.", en: "I don’t have an umbrella.",
        options: ["keinen", "kein", "keine", "nicht"], answer: "keinen" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ den Pullover.", en: "I’ll take the sweater.",
        options: ["nehme", "nehmen", "nimmst", "nimmt"], answer: "nehme" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Die Schuhe sind ___ klein.", en: "The shoes are too small.",
        options: ["zu", "sehr", "kein", "nie"], answer: "zu" },
      { type: "mcq", prompt: "What is the opposite of ‘groß’?",
        options: ["klein", "neu", "lang", "alt"], answer: 0 },
      { type: "type", prompt: "Type this in German", src: "How much does that cost?", answer: "Wie viel kostet das?", accept: ["Was kostet das?"] },
      { type: "order", src: "I need a coat.", answer: "Ich brauche einen Mantel.", extra: ["ein"] },
      { type: "order", src: "The pants are too small.", answer: "Die Hose ist zu klein.", extra: ["sind"] }
    ]
  });
})();
