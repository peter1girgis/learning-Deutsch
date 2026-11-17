/* =========================================================
   Deutsch A1 — data/unit08.js
   Unit 8: House & Home (5 lessons + mini-test)
   Registers itself with GA1.units.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  GA1.units.push({
    id: "u08",
    num: 8,
    title: "House & Home",
    subtitle: "Rooms, furniture and where things are",
    icon: "🏠",
    color: "#5e5ce6",
    outcomes: [
      "Name the rooms of a home",
      "Name common furniture and use compound nouns",
      "Say what there is with es gibt",
      "Say where things are with in, auf, neben, unter and more",
      "Describe your home"
    ],

    lessons: [
      /* ---------------------------------------------------
         Lesson 1: Rooms
         --------------------------------------------------- */
      {
        id: "u08l1",
        title: "Rooms & Home",
        emoji: "🚪",
        goal: "Name the rooms of a house or apartment.",
        hook: "Home is where you practice German every day. Start by naming the rooms.",
        vocab: [
          { de: "Wohnung", art: "die", pl: "Wohnungen", en: "apartment", ex: "Ich wohne in einer Wohnung.", exEn: "I live in an apartment." },
          { de: "Haus", art: "das", pl: "Häuser", en: "house", ex: "Das Haus ist groß.", exEn: "The house is big." },
          { de: "Zimmer", art: "das", pl: "Zimmer", en: "room", ex: "Die Wohnung hat drei Zimmer.", exEn: "The apartment has three rooms." },
          { de: "Wohnzimmer", art: "das", pl: "Wohnzimmer", en: "living room" },
          { de: "Schlafzimmer", art: "das", pl: "Schlafzimmer", en: "bedroom" },
          { de: "Küche", art: "die", pl: "Küchen", en: "kitchen", ex: "Wir kochen in der Küche.", exEn: "We cook in the kitchen." },
          { de: "Bad", art: "das", pl: "Bäder", en: "bathroom" },
          { de: "Toilette", art: "die", pl: "Toiletten", en: "toilet" },
          { de: "Flur", art: "der", pl: "Flure", en: "hallway" },
          { de: "Balkon", art: "der", pl: "Balkone", en: "balcony" },
          { de: "Garten", art: "der", pl: "Gärten", en: "garden" },
          { de: "Keller", art: "der", pl: "Keller", en: "basement" },
          { de: "wohnen", en: "to live (somewhere)", ex: "Wo wohnst du?", exEn: "Where do you live?" },
          { de: "Wo wohnst du?", en: "Where do you live?" },
          { de: "Ich wohne in einer Wohnung.", en: "I live in an apartment." }
        ],
        tip: {
          title: "Rooms and their articles",
          text: "Learn each room **with its article**. Most rooms ending in **-zimmer** are **das**: **das Wohnzimmer, das Schlafzimmer**. Rooms ending in **-e** are mostly **die**: **die Küche, die Toilette**. For **where** something happens, German uses **in** + a case ending: **in der Küche** (die), **im Bad** (das), **im Wohnzimmer** (das). Treat these as ready-made chunks for now. You will learn the rule in Lesson 4.",
          table: {
            head: ["Article", "Rooms"],
            rows: [
              ["**der**", "Flur, Balkon, Garten, Keller"],
              ["**die**", "Küche, Toilette, Wohnung"],
              ["**das**", "Zimmer, Wohnzimmer, Schlafzimmer, Bad, Haus"]
            ]
          },
          examples: [
            { de: "Wir kochen in der Küche und essen im Wohnzimmer.", en: "We cook in the kitchen and eat in the living room." },
            { de: "Wo wohnst du? – Ich wohne in einer Wohnung in Berlin.", en: "Where do you live? – I live in an apartment in Berlin." }
          ]
        },
        exercises: [
          { type: "article", noun: "Küche", en: "kitchen", answer: "die" },
          { type: "article", noun: "Bad", en: "bathroom", answer: "das" },
          { type: "article", noun: "Balkon", en: "balcony", answer: "der" },
          { type: "article", noun: "Wohnzimmer", en: "living room", answer: "das" },
          { type: "mcq", prompt: "Which room is ‘das Schlafzimmer’?",
            options: ["Bedroom", "Kitchen", "Bathroom", "Hallway"], answer: 0 },
          { type: "mcq", prompt: "What does ‘Wo wohnst du?’ ask?",
            options: ["Where do you live?", "Who are you?", "How old are you?", "What do you do?"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wir kochen in der ___.", en: "We cook in the kitchen.",
            options: ["Küche", "Bad", "Flur", "Keller"], answer: "Küche" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ in einer Wohnung.", en: "I live in an apartment.",
            options: ["wohne", "wohnst", "wohnt", "wohnen"], answer: "wohne" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die Wohnung hat drei ___.", en: "The apartment has three rooms.",
            options: ["Zimmer", "Zimmers", "Zimmern", "Zimmere"], answer: "Zimmer", explain: "**Zimmer** has the same form in the plural: **das Zimmer, die Zimmer**." },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Das Wohnzimmer ist groß.",
            options: ["Das Wohnzimmer ist groß.", "Das Schlafzimmer ist groß.", "Das Wohnzimmer ist klein.", "Die Küche ist groß."], answer: "Das Wohnzimmer ist groß." },
          { type: "match", prompt: "Match the room with the English",
            pairs: [
              { de: "Küche", en: "kitchen" },
              { de: "Flur", en: "hallway" },
              { de: "Garten", en: "garden" },
              { de: "Keller", en: "basement" }
            ] },
          { type: "type", prompt: "Type this in German", src: "the apartment", answer: "die Wohnung", accept: ["Wohnung"] },
          { type: "order", src: "Where do you live?", answer: "Wo wohnst du?", extra: ["Wer"] },
          { type: "order", src: "The house is big.", answer: "Das Haus ist groß.", extra: ["Die"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 2: Furniture
         --------------------------------------------------- */
      {
        id: "u08l2",
        title: "Furniture",
        emoji: "🛋️",
        goal: "Name common furniture and understand compound nouns.",
        hook: "German builds long words from short ones. Learn the trick and you can guess many new words.",
        vocab: [
          { de: "Tisch", art: "der", pl: "Tische", en: "table", ex: "Der Tisch ist braun.", exEn: "The table is brown." },
          { de: "Stuhl", art: "der", pl: "Stühle", en: "chair" },
          { de: "Bett", art: "das", pl: "Betten", en: "bed" },
          { de: "Sofa", art: "das", pl: "Sofas", en: "sofa" },
          { de: "Schrank", art: "der", pl: "Schränke", en: "cupboard, wardrobe" },
          { de: "Regal", art: "das", pl: "Regale", en: "shelf" },
          { de: "Lampe", art: "die", pl: "Lampen", en: "lamp" },
          { de: "Fenster", art: "das", pl: "Fenster", en: "window" },
          { de: "Tür", art: "die", pl: "Türen", en: "door" },
          { de: "Teppich", art: "der", pl: "Teppiche", en: "carpet, rug" },
          { de: "Fernseher", art: "der", pl: "Fernseher", en: "television" },
          { de: "Kühlschrank", art: "der", pl: "Kühlschränke", en: "refrigerator" },
          { de: "Herd", art: "der", pl: "Herde", en: "stove" },
          { de: "Dusche", art: "die", pl: "Duschen", en: "shower" },
          { de: "Möbel", art: "die", en: "furniture (plural)" },
          { de: "Das Sofa ist neu.", en: "The sofa is new." }
        ],
        tip: {
          title: "Compound nouns",
          text: "German often joins two nouns into one. **The last word decides the article**: **der Schrank → der Kühlschrank** (cool + cupboard = refrigerator). **das Zimmer → das Wohnzimmer** (living + room). **die Tür → die Haustür** (house + door). When you meet a long word, split it from the end and you can usually work out its meaning. Also note: **Möbel** (furniture) is always plural: **Die Möbel sind neu.**",
          table: {
            head: ["Compound", "Parts", "Meaning"],
            rows: [
              ["**der Kühlschrank**", "kühl + der Schrank", "refrigerator"],
              ["**das Schlafzimmer**", "schlafen + das Zimmer", "bedroom"],
              ["**die Haustür**", "das Haus + die Tür", "front door"],
              ["**der Bücherschrank**", "die Bücher + der Schrank", "bookcase"]
            ]
          },
          examples: [
            { de: "Im Schlafzimmer gibt es ein Bett und einen Schrank.", en: "In the bedroom there is a bed and a wardrobe." },
            { de: "Der Fernseher steht im Wohnzimmer.", en: "The TV is in the living room." }
          ]
        },
        exercises: [
          { type: "article", noun: "Tisch", en: "table", answer: "der" },
          { type: "article", noun: "Lampe", en: "lamp", answer: "die" },
          { type: "article", noun: "Bett", en: "bed", answer: "das" },
          { type: "article", noun: "Kühlschrank", en: "refrigerator", answer: "der", explain: "The last part decides: **der Schrank → der Kühlschrank**." },
          { type: "mcq", prompt: "In a compound noun, which part decides the article?",
            options: ["The last word", "The first word", "The longest word", "Neither"], answer: 0 },
          { type: "mcq", prompt: "What does ‘Fenster’ mean?",
            options: ["window", "door", "wall", "floor"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das Sofa ist ___.", en: "The sofa is new.",
            options: ["neu", "neue", "neuen", "neuer"], answer: "neu" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wir essen am ___.", en: "We eat at the table.",
            options: ["Tisch", "Bett", "Regal", "Herd"], answer: "Tisch" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die Möbel ___ neu.", en: "The furniture is new.",
            options: ["sind", "ist", "bin", "bist"], answer: "sind", explain: "**Möbel** is plural in German, so we use **sind**." },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Der Fernseher steht im Wohnzimmer.",
            options: ["Der Fernseher steht im Wohnzimmer.", "Der Fernseher steht im Schlafzimmer.", "Der Tisch steht im Wohnzimmer.", "Der Fernseher ist im Bad."], answer: "Der Fernseher steht im Wohnzimmer." },
          { type: "match", prompt: "Match the furniture with the English",
            pairs: [
              { de: "Stuhl", en: "chair" },
              { de: "Schrank", en: "wardrobe" },
              { de: "Teppich", en: "rug" },
              { de: "Regal", en: "shelf" }
            ] },
          { type: "type", prompt: "Type this in German", src: "the door", answer: "die Tür", accept: ["Tür", "die Tuer", "Tuer"] },
          { type: "order", src: "The sofa is new.", answer: "Das Sofa ist neu.", extra: ["sind"] },
          { type: "order", src: "The table is brown.", answer: "Der Tisch ist braun.", extra: ["Die"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 3: es gibt
         --------------------------------------------------- */
      {
        id: "u08l3",
        title: "Es gibt …",
        emoji: "🔎",
        goal: "Say what there is (and is not) in a room.",
        hook: "Es gibt means ‘there is’ and ‘there are’. One short phrase, and you can describe any room.",
        vocab: [
          { de: "es gibt", en: "there is, there are", ex: "Es gibt einen Tisch.", exEn: "There is a table." },
          { de: "Gibt es …?", en: "Is there …? Are there …?" },
          { de: "hier", en: "here" },
          { de: "dort", en: "there" },
          { de: "nur", en: "only" },
          { de: "auch", en: "also, too" },
          { de: "viele", en: "many" },
          { de: "zwei", en: "two" },
          { de: "drei", en: "three" },
          { de: "Bild", art: "das", pl: "Bilder", en: "picture" },
          { de: "Wand", art: "die", pl: "Wände", en: "wall" },
          { de: "Pflanze", art: "die", pl: "Pflanzen", en: "plant" },
          { de: "Es gibt keinen Balkon.", en: "There is no balcony." },
          { de: "Gibt es hier einen Supermarkt?", en: "Is there a supermarket here?" }
        ],
        tip: {
          title: "es gibt + accusative",
          text: "**es gibt** never changes: it is always **gibt**, for one thing or many: **Es gibt einen Tisch. Es gibt zwei Stühle.** What follows is in the **accusative** (you know this from Unit 7): **der → einen/keinen**, **die → eine/keine**, **das → ein/kein**, plural → **keine** or no article. For questions, put **gibt** first: **Gibt es einen Balkon?** Answer with **Ja, es gibt einen Balkon** or **Nein, es gibt keinen Balkon.**",
          table: {
            head: ["Noun", "Positive", "Negative"],
            rows: [
              ["der Balkon", "Es gibt **einen** Balkon.", "Es gibt **keinen** Balkon."],
              ["die Lampe", "Es gibt **eine** Lampe.", "Es gibt **keine** Lampe."],
              ["das Sofa", "Es gibt **ein** Sofa.", "Es gibt **kein** Sofa."],
              ["die Stühle", "Es gibt zwei Stühle.", "Es gibt **keine** Stühle."]
            ]
          },
          examples: [
            { de: "Im Wohnzimmer gibt es ein Sofa und einen Fernseher.", en: "In the living room there is a sofa and a TV." },
            { de: "Gibt es hier einen Supermarkt? – Ja, dort.", en: "Is there a supermarket here? – Yes, over there." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "What does ‘es gibt’ mean?",
            options: ["there is / there are", "it gives", "I have", "he is"], answer: 0 },
          { type: "mcq", prompt: "Which sentence is correct for several chairs?",
            options: ["Es gibt zwei Stühle.", "Es geben zwei Stühle.", "Es gibt zwei Stuhl.", "Es sind zwei Stühle gibt."], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Es gibt ___ Tisch.", en: "There is a table.",
            options: ["einen", "ein", "eine", "einem"], answer: "einen", explain: "**Tisch** is **der**, so the accusative is **einen**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Es gibt ___ Lampe.", en: "There is a lamp.",
            options: ["eine", "einen", "ein", "einer"], answer: "eine" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Es gibt ___ Sofa.", en: "There is a sofa.",
            options: ["ein", "einen", "eine", "einem"], answer: "ein" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Es gibt ___ Balkon.", en: "There is no balcony.",
            options: ["keinen", "kein", "keine", "nicht"], answer: "keinen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ es hier einen Supermarkt?", en: "Is there a supermarket here?",
            options: ["Gibt", "Geben", "Ist", "Hat"], answer: "Gibt" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Es gibt einen Balkon.",
            options: ["Es gibt einen Balkon.", "Es gibt keinen Balkon.", "Es gibt einen Garten.", "Es gibt eine Küche."], answer: "Es gibt einen Balkon." },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "hier", en: "here" },
              { de: "dort", en: "there" },
              { de: "nur", en: "only" },
              { de: "viele", en: "many" }
            ] },
          { type: "type", prompt: "Type this in German", src: "There is no balcony.", answer: "Es gibt keinen Balkon." },
          { type: "order", src: "There is a table.", answer: "Es gibt einen Tisch.", extra: ["ein"] },
          { type: "order", src: "Is there a balcony?", answer: "Gibt es einen Balkon?", extra: ["geben"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 4: Location prepositions
         --------------------------------------------------- */
      {
        id: "u08l4",
        title: "Where Is It?",
        emoji: "📍",
        goal: "Say where things are with in, auf, neben, unter and more.",
        hook: "Put the little words in the right place and you can say exactly where anything is.",
        vocab: [
          { de: "in", en: "in", ex: "Das Buch ist im Regal.", exEn: "The book is in the bookcase." },
          { de: "auf", en: "on (top of)", ex: "Die Lampe steht auf dem Tisch.", exEn: "The lamp is on the table." },
          { de: "neben", en: "next to", ex: "Der Stuhl steht neben der Tür.", exEn: "The chair is next to the door." },
          { de: "unter", en: "under", ex: "Die Katze ist unter dem Bett.", exEn: "The cat is under the bed." },
          { de: "über", en: "above, over" },
          { de: "vor", en: "in front of" },
          { de: "hinter", en: "behind" },
          { de: "zwischen", en: "between" },
          { de: "an", en: "at, on (a wall)", ex: "Das Bild hängt an der Wand.", exEn: "The picture hangs on the wall." },
          { de: "stehen", en: "to stand (be upright)" },
          { de: "liegen", en: "to lie (be flat)" },
          { de: "hängen", en: "to hang" },
          { de: "Katze", art: "die", pl: "Katzen", en: "cat" },
          { de: "Buch", art: "das", pl: "Bücher", en: "book" },
          { de: "Wo ist die Katze?", en: "Where is the cat?" },
          { de: "Die Lampe steht auf dem Tisch.", en: "The lamp is on the table." }
        ],
        tip: {
          title: "Wo? → dative",
          text: "Ask **Wo?** (where?) and answer with a preposition. To say **where something is**, these prepositions take the **dative**: **der → dem**, **das → dem**, **die → der**, **plural → den** (and the noun adds **-n**). Two common shortcuts: **in dem → im** and **an dem → am**. Use **stehen** for upright things, **liegen** for things lying flat and **hängen** for things on a wall or ceiling. Dative also has **ein-words**: **einem, einer**. At A1 you only need to recognize and use the set phrases below.",
          table: {
            head: ["Noun", "Wo?", "Example"],
            rows: [
              ["**der** Tisch", "auf **dem** Tisch", "Die Lampe steht auf dem Tisch."],
              ["**das** Bett", "unter **dem** Bett", "Die Katze liegt unter dem Bett."],
              ["**die** Tür", "neben **der** Tür", "Der Stuhl steht neben der Tür."],
              ["**die** Bücher", "auf **den** Bücher**n**", "Die Brille liegt auf den Büchern."],
              ["das Regal", "**im** Regal", "Das Buch steht im Regal."]
            ]
          },
          examples: [
            { de: "Wo ist mein Handy? – Auf dem Tisch, neben der Lampe.", en: "Where is my cell phone? – On the table, next to the lamp." },
            { de: "Der Stuhl steht zwischen dem Tisch und dem Sofa.", en: "The chair is between the table and the sofa." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which word means ‘under’?",
            options: ["unter", "über", "neben", "hinter"], answer: 0 },
          { type: "mcq", prompt: "Which word means ‘next to’?",
            options: ["neben", "zwischen", "vor", "auf"], answer: 0 },
          { type: "mcq", prompt: "Which question asks ‘Where is the cat?’",
            options: ["Wo ist die Katze?", "Wer ist die Katze?", "Was ist die Katze?", "Wie ist die Katze?"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die Lampe steht auf ___ Tisch.", en: "The lamp is on the table.",
            options: ["dem", "der", "den", "die"], answer: "dem", explain: "**Tisch** is **der**, and after **Wo?** it becomes **dem**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Der Stuhl steht neben ___ Tür.", en: "The chair is next to the door.",
            options: ["der", "dem", "den", "die"], answer: "der", explain: "**die** nouns become **der** in the dative." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die Katze ist unter ___ Bett.", en: "The cat is under the bed.",
            options: ["dem", "der", "den", "das"], answer: "dem" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das Bild hängt ___ der Wand.", en: "The picture hangs on the wall.",
            options: ["an", "auf", "unter", "neben"], answer: "an" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das Buch steht ___ Regal.", en: "The book is in the bookcase.",
            options: ["im", "in", "am", "auf"], answer: "im", explain: "**in dem** becomes **im**." },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Die Katze ist unter dem Bett.",
            options: ["Die Katze ist unter dem Bett.", "Die Katze ist auf dem Bett.", "Die Katze ist neben dem Bett.", "Die Katze ist hinter dem Bett."], answer: "Die Katze ist unter dem Bett." },
          { type: "match", prompt: "Match the preposition with the English",
            pairs: [
              { de: "auf", en: "on top of" },
              { de: "unter", en: "under" },
              { de: "neben", en: "next to" },
              { de: "hinter", en: "behind" }
            ] },
          { type: "type", prompt: "Type this in German", src: "Where is the cat?", answer: "Wo ist die Katze?" },
          { type: "order", src: "The lamp is on the table.", answer: "Die Lampe steht auf dem Tisch.", extra: ["der"] },
          { type: "order", src: "The cat is under the bed.", answer: "Die Katze ist unter dem Bett.", extra: ["über"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 5: Describing your home
         --------------------------------------------------- */
      {
        id: "u08l5",
        title: "Describing Your Home",
        emoji: "🏡",
        goal: "Describe your home: size, rooms, rent and atmosphere.",
        hook: "Put everything together and tell someone about the place where you live.",
        vocab: [
          { de: "Miete", art: "die", pl: "Mieten", en: "rent", ex: "Die Miete kostet 600 Euro.", exEn: "The rent costs 600 euros." },
          { de: "Quadratmeter", art: "der", pl: "Quadratmeter", en: "square meter" },
          { de: "Stock", art: "der", en: "floor, story" },
          { de: "Erdgeschoss", art: "das", en: "ground floor" },
          { de: "Aufzug", art: "der", pl: "Aufzüge", en: "elevator" },
          { de: "Nachbar", art: "der", pl: "Nachbarn", en: "neighbor" },
          { de: "Zentrum", art: "das", en: "city center" },
          { de: "hell", en: "bright" },
          { de: "dunkel", en: "dark" },
          { de: "ruhig", en: "quiet" },
          { de: "laut", en: "loud" },
          { de: "gemütlich", en: "cozy" },
          { de: "mieten", en: "to rent" },
          { de: "Wie viele Zimmer hat die Wohnung?", en: "How many rooms does the apartment have?" },
          { de: "Die Wohnung hat fünfzig Quadratmeter.", en: "The apartment has fifty square meters." },
          { de: "Sie ist hell und ruhig.", en: "It is bright and quiet." }
        ],
        tip: {
          title: "Talking about your home",
          text: "Use **haben** for size and rooms: **Die Wohnung hat drei Zimmer.** Ask **Wie viele …?** for things you can count: **Wie viele Zimmer?** Use **sein** with adjectives: **Sie ist hell.** Link it all with **und**, **aber** and **auch**. **Die Miete kostet …** works like prices in Unit 7. Combine what you learned: **Es gibt einen Balkon, aber keinen Garten.** Note: after **aber** and **und** the word order stays normal.",
          table: {
            head: ["Topic", "Question", "Answer"],
            rows: [
              ["Rooms", "Wie viele Zimmer hat die Wohnung?", "Sie hat drei Zimmer."],
              ["Size", "Wie groß ist die Wohnung?", "Sie hat fünfzig Quadratmeter."],
              ["Price", "Wie viel kostet die Miete?", "Sie kostet sechshundert Euro."],
              ["Where", "Wo ist die Wohnung?", "Sie ist im Zentrum."],
              ["Feel", "Wie ist die Wohnung?", "Sie ist hell und gemütlich."]
            ]
          },
          examples: [
            { de: "Ich wohne in einer kleinen Wohnung. Sie ist hell und ruhig.", en: "I live in a small apartment. It is bright and quiet." },
            { de: "Es gibt einen Balkon, aber keinen Aufzug.", en: "There is a balcony, but no elevator." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which question asks about the number of rooms?",
            options: ["Wie viele Zimmer hat die Wohnung?", "Wie groß ist die Wohnung?", "Wo ist die Wohnung?", "Wie ist die Wohnung?"], answer: 0 },
          { type: "mcq", prompt: "What is the opposite of ‘laut’?",
            options: ["ruhig", "hell", "dunkel", "neu"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die Wohnung ___ drei Zimmer.", en: "The apartment has three rooms.",
            options: ["hat", "ist", "gibt", "haben"], answer: "hat" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wie ___ Zimmer hat die Wohnung?", en: "How many rooms does the apartment have?",
            options: ["viele", "viel", "vielen", "wie"], answer: "viele" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die Wohnung hat viele Fenster. Sie ist ___.", en: "It is bright.",
            options: ["hell", "dunkel", "laut", "alt"], answer: "hell" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Es gibt einen Balkon, ___ keinen Garten.", en: "There is a balcony, but no garden.",
            options: ["aber", "und", "oder", "weil"], answer: "aber" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die Miete ___ sechshundert Euro.", en: "The rent costs six hundred euros.",
            options: ["kostet", "kosten", "ist", "gibt"], answer: "kostet" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Die Wohnung hat fünfzig Quadratmeter.",
            options: ["Die Wohnung hat fünfzig Quadratmeter.", "Die Wohnung hat drei Zimmer.", "Die Wohnung hat sechzig Quadratmeter.", "Die Wohnung ist im Zentrum."], answer: "Die Wohnung hat fünfzig Quadratmeter." },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "hell", en: "bright" },
              { de: "gemütlich", en: "cozy" },
              { de: "Miete", en: "rent" },
              { de: "Nachbar", en: "neighbor" }
            ] },
          { type: "type", prompt: "Type this in German", src: "It is bright and quiet.", answer: "Sie ist hell und ruhig." },
          { type: "order", src: "How many rooms does the apartment have?", answer: "Wie viele Zimmer hat die Wohnung?", extra: ["viel"] },
          { type: "order", src: "There is a balcony, but no garden.", answer: "Es gibt einen Balkon, aber keinen Garten.", extra: ["kein"] }
        ]
      }
    ],

    /* -----------------------------------------------------
       Unit mini-test: 10 items are drawn at random.
       Pass mark: 70% to unlock Unit 9.
       ----------------------------------------------------- */
    test: [
      { type: "article", noun: "Küche", en: "kitchen", answer: "die" },
      { type: "article", noun: "Schlafzimmer", en: "bedroom", answer: "das" },
      { type: "article", noun: "Balkon", en: "balcony", answer: "der" },
      { type: "mcq", prompt: "What does ‘Wo wohnst du?’ ask?",
        options: ["Where do you live?", "Who are you?", "What do you do?", "How old are you?"], answer: 0 },
      { type: "article", noun: "Kühlschrank", en: "refrigerator", answer: "der" },
      { type: "mcq", prompt: "In a compound noun, which part decides the article?",
        options: ["The last word", "The first word", "The longest word", "Neither"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Es gibt ___ Tisch.", en: "There is a table.",
        options: ["einen", "ein", "eine", "einem"], answer: "einen" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Es gibt ___ Sofa.", en: "There is a sofa.",
        options: ["ein", "einen", "eine", "einem"], answer: "ein" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Es gibt ___ Balkon.", en: "There is no balcony.",
        options: ["keinen", "kein", "keine", "nicht"], answer: "keinen" },
      { type: "fill", prompt: "Fill in the blank", sentence: "___ es hier einen Supermarkt?", en: "Is there a supermarket here?",
        options: ["Gibt", "Geben", "Ist", "Hat"], answer: "Gibt" },
      { type: "listen", prompt: "Which sentence do you hear?", text: "Es gibt einen Balkon.",
        options: ["Es gibt einen Balkon.", "Es gibt keinen Balkon.", "Es gibt einen Garten.", "Es gibt eine Küche."], answer: "Es gibt einen Balkon." },
      { type: "mcq", prompt: "Which word means ‘under’?",
        options: ["unter", "über", "neben", "hinter"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Die Lampe steht auf ___ Tisch.", en: "The lamp is on the table.",
        options: ["dem", "der", "den", "die"], answer: "dem" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Der Stuhl steht neben ___ Tür.", en: "The chair is next to the door.",
        options: ["der", "dem", "den", "die"], answer: "der" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Das Buch steht ___ Regal.", en: "The book is in the bookcase.",
        options: ["im", "in", "am", "auf"], answer: "im" },
      { type: "listen", prompt: "Which sentence do you hear?", text: "Die Katze ist unter dem Bett.",
        options: ["Die Katze ist unter dem Bett.", "Die Katze ist auf dem Bett.", "Die Katze ist neben dem Bett.", "Die Katze ist hinter dem Bett."], answer: "Die Katze ist unter dem Bett." },
      { type: "fill", prompt: "Fill in the blank", sentence: "Die Wohnung ___ drei Zimmer.", en: "The apartment has three rooms.",
        options: ["hat", "ist", "gibt", "haben"], answer: "hat" },
      { type: "mcq", prompt: "What is the opposite of ‘laut’?",
        options: ["ruhig", "hell", "dunkel", "neu"], answer: 0 },
      { type: "type", prompt: "Type this in German", src: "Where is the cat?", answer: "Wo ist die Katze?" },
      { type: "order", src: "There is a table.", answer: "Es gibt einen Tisch.", extra: ["ein"] },
      { type: "order", src: "The lamp is on the table.", answer: "Die Lampe steht auf dem Tisch.", extra: ["der"] }
    ]
  });
})();
