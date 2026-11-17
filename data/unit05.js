/* =========================================================
   Deutsch A1 — data/unit05.js
   Unit 5: Food & Drink (5 lessons + mini-test)
   Registers itself with GA1.units.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  GA1.units.push({
    id: "u05",
    num: 5,
    title: "Food & Drink",
    subtitle: "Eat, order and say what you like",
    icon: "🍽️",
    color: "#bf5af2",
    outcomes: [
      "Name meals, foods and drinks",
      "Learn nouns with der, die, das and their plurals",
      "Order in a café or restaurant and ask for the bill",
      "Say what you would like with ich möchte",
      "Talk about what you like and dislike"
    ],

    lessons: [
      /* ---------------------------------------------------
         Lesson 1: Meals and groceries
         --------------------------------------------------- */
      {
        id: "u05l1",
        title: "Meals & Groceries",
        emoji: "🛒",
        goal: "Name the three meals and common foods.",
        hook: "Breakfast, lunch and dinner each have their own word. Add a few basic foods and you can already talk about your day.",
        vocab: [
          { de: "Frühstück", art: "das", pl: "Frühstücke", en: "breakfast" },
          { de: "Mittagessen", art: "das", pl: "Mittagessen", en: "lunch" },
          { de: "Abendessen", art: "das", pl: "Abendessen", en: "dinner" },
          { de: "Brot", art: "das", pl: "Brote", en: "bread", ex: "Ich esse Brot.", exEn: "I eat bread." },
          { de: "Brötchen", art: "das", pl: "Brötchen", en: "bread roll" },
          { de: "Fleisch", art: "das", en: "meat" },
          { de: "Fisch", art: "der", pl: "Fische", en: "fish" },
          { de: "Reis", art: "der", en: "rice" },
          { de: "Gemüse", art: "das", en: "vegetables" },
          { de: "Obst", art: "das", en: "fruit" },
          { de: "Kartoffel", art: "die", pl: "Kartoffeln", en: "potato" },
          { de: "Tomate", art: "die", pl: "Tomaten", en: "tomato" },
          { de: "Salat", art: "der", pl: "Salate", en: "salad" },
          { de: "Suppe", art: "die", pl: "Suppen", en: "soup", ex: "Ich esse Suppe.", exEn: "I eat soup." },
          { de: "essen", en: "to eat", ex: "Zum Frühstück esse ich Brot.", exEn: "For breakfast I eat bread." },
          { de: "trinken", en: "to drink", ex: "Ich trinke Wasser.", exEn: "I drink water." }
        ],
        tip: {
          title: "Meals and the verbs essen and trinken",
          text: "Use **zum** to say what you eat ‘for’ a meal: **zum Frühstück**. The verb **essen** changes its vowel for **du** and **er/sie**: **ich esse, du isst, er isst**. **Trinken** is regular: **ich trinke, du trinkst, er trinkt**. Note that **das Essen** also means ‘food’ in general.",
          table: {
            head: ["Meal", "Usually at", "Example"],
            rows: [
              ["**das Frühstück**", "7–9 a.m.", "Zum Frühstück esse ich Brot."],
              ["**das Mittagessen**", "12–2 p.m.", "Zum Mittagessen esse ich Suppe."],
              ["**das Abendessen**", "6–7 p.m.", "Zum Abendessen esse ich Salat."]
            ]
          },
          examples: [
            { de: "Ich esse Fisch und trinke Wasser.", en: "I eat fish and drink water." },
            { de: "Du isst Gemüse und Obst.", en: "You eat vegetables and fruit." }
          ]
        },
        exercises: [
          { type: "article", noun: "Brot", en: "bread", answer: "das" },
          { type: "article", noun: "Suppe", en: "soup", answer: "die" },
          { type: "article", noun: "Salat", en: "salad", answer: "der" },
          { type: "mcq", prompt: "Which meal do you eat first in the day?",
            options: ["Frühstück", "Mittagessen", "Abendessen", "Obst"], answer: 0 },
          { type: "listen", prompt: "Which word do you hear?", text: "Kartoffel",
            options: ["Kartoffel", "Tomate", "Gemüse", "Fleisch"], answer: "Kartoffel" },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "Fisch", en: "fish" },
              { de: "Reis", en: "rice" },
              { de: "Obst", en: "fruit" },
              { de: "Fleisch", en: "meat" }
            ] },
          { type: "fill", prompt: "Fill in the blank", sentence: "Zum Frühstück ___ ich Brot.", en: "For breakfast I eat bread.",
            options: ["esse", "isst", "essen"], answer: "esse", explain: "**ich** takes **-e**: **ich esse**." },
          { type: "type", prompt: "Type this in German", src: "the soup", answer: "die Suppe", accept: ["Suppe"] },
          { type: "order", src: "I eat soup.", answer: "Ich esse Suppe.", extra: ["isst"] },
          { type: "order", src: "I drink water.", answer: "Ich trinke Wasser.", extra: ["trinkst"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 2: der / die / das and plurals
         --------------------------------------------------- */
      {
        id: "u05l2",
        title: "der, die, das & Plurals",
        emoji: "🎯",
        goal: "Learn useful article rules and the main plural patterns.",
        hook: "Every German noun has a gender. A few endings give you the answer and save you a lot of guessing.",
        vocab: [
          { de: "Kaffee", art: "der", en: "coffee" },
          { de: "Tee", art: "der", en: "tea" },
          { de: "Saft", art: "der", pl: "Säfte", en: "juice" },
          { de: "Cola", art: "die", en: "cola" },
          { de: "Orange", art: "die", pl: "Orangen", en: "orange" },
          { de: "Zucker", art: "der", en: "sugar" },
          { de: "Salz", art: "das", en: "salt" },
          { de: "Nudeln", art: "die", en: "noodles, pasta" },
          { de: "Pizza", art: "die", pl: "Pizzen", en: "pizza" },
          { de: "Kuchen", art: "der", pl: "Kuchen", en: "cake" },
          { de: "Schokolade", art: "die", pl: "Schokoladen", en: "chocolate" },
          { de: "Hähnchen", art: "das", pl: "Hähnchen", en: "chicken" },
          { de: "Gurke", art: "die", pl: "Gurken", en: "cucumber" },
          { de: "Zwiebel", art: "die", pl: "Zwiebeln", en: "onion" }
        ],
        tip: {
          title: "Gender hints and plural patterns",
          text: "Always learn the **article together with the noun**. Some endings help: nouns ending in **-e** are usually **die** (**die Gurke**, but **der Kaffee**), **-ung** is always **die**, and **-chen** is always **das** (**das Hähnchen**). All plurals use **die**. The most common plural endings are in the table.",
          table: {
            head: ["Plural ending", "Singular", "Plural"],
            rows: [
              ["**-n / -en**", "die Tomate", "die Tomaten"],
              ["**-e**", "der Fisch", "die Fische"],
              ["**¨ + -e**", "der Saft", "die Säfte"],
              ["**¨ + -er**", "das Buch", "die Bücher"],
              ["**-s**", "das Auto", "die Autos"],
              ["**no change**", "das Brötchen", "die Brötchen"]
            ]
          },
          examples: [
            { de: "Zwei Brötchen und drei Tomaten, bitte.", en: "Two bread rolls and three tomatoes, please." },
            { de: "Die Säfte sind lecker.", en: "The juices are tasty." }
          ]
        },
        exercises: [
          { type: "article", noun: "Kaffee", en: "coffee", answer: "der" },
          { type: "article", noun: "Schokolade", en: "chocolate", answer: "die" },
          { type: "article", noun: "Hähnchen", en: "chicken", answer: "das" },
          { type: "article", noun: "Pizza", en: "pizza", answer: "die" },
          { type: "mcq", prompt: "Nouns ending in ‘-chen’ are always…",
            options: ["das", "der", "die", "den"], answer: 0 },
          { type: "mcq", prompt: "What is the plural of ‘Tomate’?",
            options: ["Tomaten", "Tomate", "Tomates", "Tomäte"], answer: 0 },
          { type: "mcq", prompt: "What is the plural of ‘Saft’?",
            options: ["Säfte", "Safte", "Säfter", "Safts"], answer: 0 },
          { type: "listen", prompt: "Which word do you hear?", text: "Schokolade",
            options: ["Schokolade", "Zwiebel", "Zucker", "Kuchen"], answer: "Schokolade" },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "Tee", en: "tea" },
              { de: "Zucker", en: "sugar" },
              { de: "Salz", en: "salt" },
              { de: "Kuchen", en: "cake" }
            ] },
          { type: "type", prompt: "Type this in German", src: "the coffee", answer: "der Kaffee", accept: ["Kaffee"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 3: Ordering in a café or restaurant
         --------------------------------------------------- */
      {
        id: "u05l3",
        title: "Café & Restaurant",
        emoji: "☕",
        goal: "Order a drink or a meal and ask for the bill.",
        hook: "Five or six phrases get you through any café visit in Germany, from the menu to the bill.",
        vocab: [
          { de: "Speisekarte", art: "die", pl: "Speisekarten", en: "menu" },
          { de: "Kellner", art: "der", pl: "Kellner", en: "waiter" },
          { de: "Kellnerin", art: "die", pl: "Kellnerinnen", en: "waitress" },
          { de: "Tisch", art: "der", pl: "Tische", en: "table" },
          { de: "Getränk", art: "das", pl: "Getränke", en: "drink" },
          { de: "Rechnung", art: "die", pl: "Rechnungen", en: "bill" },
          { de: "Trinkgeld", art: "das", en: "tip (money)" },
          { de: "bestellen", en: "to order" },
          { de: "bezahlen", en: "to pay" },
          { de: "Die Speisekarte, bitte.", en: "The menu, please." },
          { de: "Einen Kaffee, bitte.", en: "A coffee, please." },
          { de: "Zahlen, bitte!", en: "The bill, please!" },
          { de: "Zusammen oder getrennt?", en: "Together or separate?" },
          { de: "Stimmt so.", en: "Keep the change." },
          { de: "Guten Appetit!", en: "Enjoy your meal!" }
        ],
        tip: {
          title: "Useful café phrases",
          text: "To order, say what you want plus **bitte**. For **der** nouns, **ein** becomes **einen**: **Einen Kaffee, bitte** (more in Unit 7). For **die** nouns use **eine**, for **das** nouns **ein**. When you pay, the waiter often asks **Zusammen oder getrennt?** Say the total or round up and add **Stimmt so** to leave a tip.",
          table: {
            head: ["Situation", "You say", "Meaning"],
            rows: [
              ["Ask for the menu", "**Die Speisekarte, bitte.**", "The menu, please."],
              ["Order (der)", "**Einen Kaffee, bitte.**", "A coffee, please."],
              ["Order (die)", "**Eine Cola, bitte.**", "A cola, please."],
              ["Order (das)", "**Ein Wasser, bitte.**", "A water, please."],
              ["Pay", "**Zahlen, bitte!**", "The bill, please!"],
              ["Leave a tip", "**Stimmt so.**", "Keep the change."]
            ]
          },
          examples: [
            { de: "Einen Tee und ein Wasser, bitte.", en: "A tea and a water, please." },
            { de: "Zahlen, bitte! – Zusammen oder getrennt?", en: "The bill, please! – Together or separate?" }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "You want to pay. What do you say?",
            options: ["Zahlen, bitte!", "Guten Appetit!", "Die Speisekarte, bitte.", "Stimmt so."], answer: 0 },
          { type: "mcq", prompt: "The waiter says ‘Guten Appetit!’. What does it mean?",
            options: ["Enjoy your meal!", "The bill, please!", "What would you like?", "Good night!"], answer: 0 },
          { type: "mcq", prompt: "You pay and want to leave a tip. What do you say?",
            options: ["Stimmt so.", "Zusammen.", "Getrennt.", "Noch einmal."], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ Kaffee, bitte.", en: "A coffee, please.",
            options: ["Einen", "Eine", "Ein"], answer: "Einen", explain: "**Kaffee** is **der**, so **ein** becomes **einen**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ Cola, bitte.", en: "A cola, please.",
            options: ["Eine", "Einen", "Ein"], answer: "Eine", explain: "**Cola** is **die**, so we use **eine**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ Wasser, bitte.", en: "A water, please.",
            options: ["Ein", "Einen", "Eine"], answer: "Ein", explain: "**Wasser** is **das**, so we use **ein**." },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Die Speisekarte, bitte.",
            options: ["Die Speisekarte, bitte.", "Die Rechnung, bitte.", "Einen Tee, bitte.", "Zahlen, bitte."], answer: "Die Speisekarte, bitte." },
          { type: "article", noun: "Tisch", en: "table", answer: "der" },
          { type: "type", prompt: "Type this in German", src: "the bill", answer: "die Rechnung", accept: ["Rechnung"] },
          { type: "order", src: "The menu, please.", answer: "Die Speisekarte, bitte.", extra: ["Rechnung"] },
          { type: "order", src: "The bill, please!", answer: "Zahlen, bitte!", extra: ["Speisekarte"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 4: ich möchte
         --------------------------------------------------- */
      {
        id: "u05l4",
        title: "Ich möchte…",
        emoji: "🙏",
        goal: "Say politely what you would like.",
        hook: "Möchten is the polite way to ask for things. It sounds friendly and is used everywhere.",
        vocab: [
          { de: "möchten", en: "would like", ex: "Ich möchte einen Tee.", exEn: "I would like a tea." },
          { de: "mit", en: "with", ex: "Kaffee mit Milch", exEn: "coffee with milk" },
          { de: "ohne", en: "without", ex: "Tee ohne Zucker", exEn: "tea without sugar" },
          { de: "oder", en: "or" },
          { de: "Was möchten Sie?", en: "What would you like? (formal)" },
          { de: "Was möchtest du?", en: "What would you like? (informal)" },
          { de: "Ich möchte einen Tee.", en: "I would like a tea." },
          { de: "Ich möchte bestellen.", en: "I would like to order." },
          { de: "Ich möchte zahlen.", en: "I would like to pay." },
          { de: "Sonst noch etwas?", en: "Anything else?" },
          { de: "Das ist alles.", en: "That is all." },
          { de: "Hier, bitte.", en: "Here you are." }
        ],
        tip: {
          title: "The verb möchten",
          text: "**möchten** is already polite, so you do not need to add much more. Notice that **ich** and **er/sie/es** have the same form. If you add a second verb, it goes to the **end** of the sentence: **Ich möchte bestellen.** You will study this pattern in Unit 11.",
          table: {
            head: ["Pronoun", "möchten", "Example"],
            rows: [
              ["**ich**", "möchte", "Ich möchte einen Kaffee."],
              ["**du**", "möchtest", "Was möchtest du?"],
              ["**er / sie / es**", "möchte", "Er möchte ein Wasser."],
              ["**wir**", "möchten", "Wir möchten zahlen."],
              ["**ihr**", "möchtet", "Möchtet ihr Kuchen?"],
              ["**sie / Sie**", "möchten", "Was möchten Sie?"]
            ]
          },
          examples: [
            { de: "Was möchten Sie? – Ich möchte eine Suppe, bitte.", en: "What would you like? – I would like a soup, please." },
            { de: "Ich möchte einen Kaffee mit Milch, aber ohne Zucker.", en: "I would like a coffee with milk but without sugar." }
          ]
        },
        exercises: [
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ einen Kaffee.", en: "I would like a coffee.",
            options: ["möchte", "möchtest", "möchten", "möchtet"], answer: "möchte" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Was ___ du?", en: "What would you like?",
            options: ["möchtest", "möchte", "möchten", "möchtet"], answer: "möchtest", explain: "**du** takes **-st**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wir ___ zahlen.", en: "We would like to pay.",
            options: ["möchten", "möchte", "möchtet", "möchtest"], answer: "möchten" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Was ___ Sie?", en: "What would you like? (formal)",
            options: ["möchten", "möchtest", "möchte", "möchtet"], answer: "möchten" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Er ___ ein Wasser.", en: "He would like a water.",
            options: ["möchte", "möchtest", "möchten", "möchtet"], answer: "möchte" },
          { type: "mcq", prompt: "How do you ask politely ‘What would you like?’ to a stranger?",
            options: ["Was möchten Sie?", "Was möchtest du?", "Was möchte ich?", "Was möchtet ihr?"], answer: 0 },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Ich möchte einen Tee.",
            options: ["Ich möchte einen Tee.", "Ich möchte einen Kaffee.", "Ich möchte zahlen.", "Ich möchte bestellen."], answer: "Ich möchte einen Tee." },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "mit", en: "with" },
              { de: "ohne", en: "without" },
              { de: "oder", en: "or" },
              { de: "Das ist alles.", en: "That is all." }
            ] },
          { type: "type", prompt: "Type this in German", src: "I would like to pay.", answer: "Ich möchte zahlen." },
          { type: "order", src: "I would like a coffee.", answer: "Ich möchte einen Kaffee.", extra: ["ein"] },
          { type: "order", src: "What would you like? (informal)", answer: "Was möchtest du?", extra: ["möchte"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 5: Likes and dislikes
         --------------------------------------------------- */
      {
        id: "u05l5",
        title: "Likes & Dislikes",
        emoji: "😋",
        goal: "Say what you like, what you do not like and how food tastes.",
        hook: "Talking about food is a great way to start a conversation. Here is how to say what you love and what you avoid.",
        vocab: [
          { de: "mögen", en: "to like", ex: "Ich mag Pizza.", exEn: "I like pizza." },
          { de: "schmecken", en: "to taste", ex: "Das schmeckt gut.", exEn: "That tastes good." },
          { de: "lecker", en: "tasty" },
          { de: "süß", en: "sweet" },
          { de: "sauer", en: "sour" },
          { de: "salzig", en: "salty" },
          { de: "scharf", en: "spicy, sharp" },
          { de: "Lieblingsessen", art: "das", pl: "Lieblingsessen", en: "favorite food" },
          { de: "Lieblingsgetränk", art: "das", pl: "Lieblingsgetränke", en: "favorite drink" },
          { de: "Magst du Kaffee?", en: "Do you like coffee?" },
          { de: "Ich mag Fisch nicht.", en: "I don’t like fish." },
          { de: "Das schmeckt gut.", en: "That tastes good." },
          { de: "Das schmeckt nicht.", en: "That doesn’t taste good." }
        ],
        tip: {
          title: "The verb mögen",
          text: "**mögen** is irregular: **ich mag**, **du magst**, **er mag**. To say you do not like something, put **nicht** at the end: **Ich mag Fisch nicht.** To talk about taste, use **schmecken** with **gut**, **nicht** or an adjective: **Das schmeckt lecker.** For favorites, add **Lieblings-** in front of a noun: **mein Lieblingsessen**.",
          table: {
            head: ["Pronoun", "mögen", "Example"],
            rows: [
              ["**ich**", "mag", "Ich mag Pizza."],
              ["**du**", "magst", "Magst du Kaffee?"],
              ["**er / sie / es**", "mag", "Sie mag Schokolade."],
              ["**wir**", "mögen", "Wir mögen Suppe."],
              ["**ihr**", "mögt", "Mögt ihr Fisch?"],
              ["**sie / Sie**", "mögen", "Sie mögen Obst."]
            ]
          },
          examples: [
            { de: "Magst du Fisch? – Nein, ich mag Fisch nicht.", en: "Do you like fish? – No, I don’t like fish." },
            { de: "Mein Lieblingsessen ist Pizza.", en: "My favorite food is pizza." }
          ]
        },
        exercises: [
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ Pizza.", en: "I like pizza.",
            options: ["mag", "magst", "mögen", "mögt"], answer: "mag" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ Kaffee.", en: "You like coffee.",
            options: ["magst", "mag", "mögen", "mögt"], answer: "magst" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Er ___ Fisch nicht.", en: "He doesn’t like fish.",
            options: ["mag", "magst", "mögen", "mögt"], answer: "mag", explain: "**ich** and **er/sie/es** share the form **mag**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wir ___ Suppe.", en: "We like soup.",
            options: ["mögen", "mag", "magst", "mögt"], answer: "mögen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das ___ gut.", en: "That tastes good.",
            options: ["schmeckt", "schmecke", "schmecken", "schmeckst"], answer: "schmeckt" },
          { type: "mcq", prompt: "Which word means ‘tasty’?",
            options: ["lecker", "scharf", "sauer", "salzig"], answer: 0 },
          { type: "mcq", prompt: "What is the opposite of ‘süß’?",
            options: ["sauer", "lecker", "scharf", "gut"], answer: 0 },
          { type: "listen", prompt: "Which question do you hear?", text: "Magst du Kaffee?",
            options: ["Magst du Kaffee?", "Möchtest du Kaffee?", "Trinkst du Kaffee?", "Magst du Tee?"], answer: "Magst du Kaffee?" },
          { type: "match", prompt: "Match the taste with the English",
            pairs: [
              { de: "süß", en: "sweet" },
              { de: "sauer", en: "sour" },
              { de: "salzig", en: "salty" },
              { de: "scharf", en: "spicy" }
            ] },
          { type: "type", prompt: "Type this in German", src: "my favorite food", answer: "mein Lieblingsessen" },
          { type: "order", src: "I like pizza.", answer: "Ich mag Pizza.", extra: ["magst"] },
          { type: "order", src: "That tastes good.", answer: "Das schmeckt gut.", extra: ["mag"] }
        ]
      }
    ],

    /* -----------------------------------------------------
       Unit mini-test: 10 items are drawn at random.
       Pass mark: 70% to unlock Unit 6.
       ----------------------------------------------------- */
    test: [
      { type: "article", noun: "Fleisch", en: "meat", answer: "das" },
      { type: "article", noun: "Kartoffel", en: "potato", answer: "die" },
      { type: "article", noun: "Reis", en: "rice", answer: "der" },
      { type: "mcq", prompt: "Which meal is eaten in the evening?",
        options: ["Abendessen", "Frühstück", "Mittagessen", "Brötchen"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ Gemüse.", en: "You eat vegetables.",
        options: ["isst", "esse", "essen", "esst"], answer: "isst" },
      { type: "mcq", prompt: "What is the plural of ‘Kartoffel’?",
        options: ["Kartoffeln", "Kartoffel", "Kartoffeler", "Kartöffel"], answer: 0 },
      { type: "mcq", prompt: "Which plural is correct?",
        options: ["die Säfte", "die Safte", "die Saften", "die Safts"], answer: 0 },
      { type: "listen", prompt: "Which word do you hear?", text: "Zwiebel",
        options: ["Zwiebel", "Gurke", "Tomate", "Orange"], answer: "Zwiebel" },
      { type: "fill", prompt: "Fill in the blank", sentence: "___ Tee, bitte.", en: "A tea, please.",
        options: ["Einen", "Eine", "Ein"], answer: "Einen" },
      { type: "mcq", prompt: "How do you say ‘The bill, please!’?",
        options: ["Zahlen, bitte!", "Stimmt so!", "Guten Appetit!", "Die Speisekarte, bitte."], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ eine Suppe.", en: "I would like a soup.",
        options: ["möchte", "möchtest", "möchten", "möchtet"], answer: "möchte" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Was ___ Sie?", en: "What would you like? (formal)",
        options: ["möchten", "möchte", "möchtest", "möchtet"], answer: "möchten" },
      { type: "mcq", prompt: "What does ‘Kaffee ohne Zucker’ mean?",
        options: ["coffee without sugar", "coffee with sugar", "tea without sugar", "coffee or sugar"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ Schokolade.", en: "You like chocolate.",
        options: ["magst", "mag", "mögen", "mögt"], answer: "magst" },
      { type: "listen", prompt: "Which sentence do you hear?", text: "Das schmeckt lecker.",
        options: ["Das schmeckt lecker.", "Das schmeckt nicht.", "Das ist süß.", "Das ist scharf."], answer: "Das schmeckt lecker." },
      { type: "type", prompt: "Type this in German", src: "the menu", answer: "die Speisekarte", accept: ["Speisekarte"] },
      { type: "order", src: "I drink water.", answer: "Ich trinke Wasser.", extra: ["trinkst"] },
      { type: "order", src: "I would like to pay.", answer: "Ich möchte zahlen.", extra: ["bestellen"] },
      { type: "order", src: "Do you like coffee?", answer: "Magst du Kaffee?", extra: ["mag"] }
    ]
  });
})();
