/* =========================================================
   Deutsch A1 — data/unit09.js
   Unit 9: Travel & Directions (5 lessons + mini-test)
   Registers itself with GA1.units.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  GA1.units.push({
    id: "u09",
    num: 9,
    title: "Travel & Directions",
    subtitle: "Get around, find your way and book a room",
    icon: "✈️",
    color: "#a2845e",
    outcomes: [
      "Name means of transport and say how you travel",
      "Buy tickets and understand station announcements",
      "Ask for and understand directions",
      "Book a hotel room",
      "Talk about the weather and the seasons"
    ],

    lessons: [
      /* ---------------------------------------------------
         Lesson 1: Transport
         --------------------------------------------------- */
      {
        id: "u09l1",
        title: "Transport",
        emoji: "🚆",
        goal: "Name means of transport and say how you travel.",
        hook: "Bus, train or bike? Learn the words and the one little phrase that goes with all of them.",
        vocab: [
          { de: "Zug", art: "der", pl: "Züge", en: "train", ex: "Ich fahre mit dem Zug.", exEn: "I travel by train." },
          { de: "Bus", art: "der", pl: "Busse", en: "bus" },
          { de: "Straßenbahn", art: "die", pl: "Straßenbahnen", en: "tram" },
          { de: "U-Bahn", art: "die", pl: "U-Bahnen", en: "subway" },
          { de: "Auto", art: "das", pl: "Autos", en: "car" },
          { de: "Fahrrad", art: "das", pl: "Fahrräder", en: "bicycle" },
          { de: "Flugzeug", art: "das", pl: "Flugzeuge", en: "airplane" },
          { de: "Taxi", art: "das", pl: "Taxis", en: "taxi" },
          { de: "Schiff", art: "das", pl: "Schiffe", en: "ship" },
          { de: "fahren", en: "to drive, to ride, to travel", ex: "Du fährst mit dem Bus.", exEn: "You take the bus." },
          { de: "fliegen", en: "to fly" },
          { de: "gehen", en: "to go, to walk" },
          { de: "zu Fuß", en: "on foot" },
          { de: "Arbeit", art: "die", en: "work" },
          { de: "Wie kommst du zur Arbeit?", en: "How do you get to work?" },
          { de: "Ich fahre mit dem Bus.", en: "I take the bus." },
          { de: "Ich gehe zu Fuß.", en: "I walk." }
        ],
        tip: {
          title: "mit + vehicle",
          text: "To say **how** you travel, use **mit** + the vehicle. After **mit** the article changes (dative): **der → dem**, **das → dem**, **die → der**. So: **mit dem Bus, mit dem Auto, mit der U-Bahn**. The one exception is **zu Fuß** (on foot), which has no **mit**. **fahren** is irregular: **ich fahre, du fährst, er fährt**. **Wie kommst du zur Arbeit?** is the standard question for commuting. **zur** is a short form of **zu der**.",
          table: {
            head: ["Vehicle", "mit …", "Meaning"],
            rows: [
              ["**der** Zug", "mit **dem** Zug", "by train"],
              ["**das** Auto", "mit **dem** Auto", "by car"],
              ["**die** U-Bahn", "mit **der** U-Bahn", "by subway"],
              ["–", "zu Fuß", "on foot"]
            ]
          },
          examples: [
            { de: "Ich fahre mit dem Bus zur Arbeit.", en: "I take the bus to work." },
            { de: "Du fährst mit der U-Bahn, aber er geht zu Fuß.", en: "You take the subway, but he walks." }
          ]
        },
        exercises: [
          { type: "article", noun: "Zug", en: "train", answer: "der" },
          { type: "article", noun: "Straßenbahn", en: "tram", answer: "die" },
          { type: "article", noun: "Fahrrad", en: "bicycle", answer: "das" },
          { type: "article", noun: "Flugzeug", en: "airplane", answer: "das" },
          { type: "mcq", prompt: "What does ‘zu Fuß’ mean?",
            options: ["on foot", "by foot bus", "too far", "at the end"], answer: 0 },
          { type: "mcq", prompt: "Which question asks how you get to work?",
            options: ["Wie kommst du zur Arbeit?", "Wo ist die Arbeit?", "Was ist deine Arbeit?", "Wann kommst du?"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich fahre ___ dem Bus.", en: "I take the bus.",
            options: ["mit", "in", "auf", "zu"], answer: "mit" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich fahre mit ___ U-Bahn.", en: "I take the subway.",
            options: ["der", "dem", "den", "die"], answer: "der", explain: "**die U-Bahn** becomes **der U-Bahn** after **mit**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ mit dem Zug.", en: "You travel by train.",
            options: ["fährst", "fahrst", "fahre", "fährt"], answer: "fährst", explain: "**fahren** takes an umlaut for **du** and **er/sie**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Er ___ mit dem Auto.", en: "He drives.",
            options: ["fährt", "fahrt", "fahre", "fahren"], answer: "fährt" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Ich fahre mit dem Bus zur Arbeit.",
            options: ["Ich fahre mit dem Bus zur Arbeit.", "Ich fahre mit dem Zug zur Arbeit.", "Ich gehe zu Fuß zur Arbeit.", "Ich fahre mit dem Auto zur Arbeit."], answer: "Ich fahre mit dem Bus zur Arbeit." },
          { type: "match", prompt: "Match the transport with the English",
            pairs: [
              { de: "Zug", en: "train" },
              { de: "Fahrrad", en: "bicycle" },
              { de: "Flugzeug", en: "airplane" },
              { de: "Schiff", en: "ship" }
            ] },
          { type: "type", prompt: "Type this in German", src: "I walk.", answer: "Ich gehe zu Fuß." },
          { type: "order", src: "I take the bus.", answer: "Ich fahre mit dem Bus.", extra: ["fährst"] },
          { type: "order", src: "How do you get to work?", answer: "Wie kommst du zur Arbeit?", extra: ["Wo"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 2: Tickets and stations
         --------------------------------------------------- */
      {
        id: "u09l2",
        title: "Tickets & Stations",
        emoji: "🎫",
        goal: "Buy a ticket and understand train information.",
        hook: "At the station you hear short, fixed announcements. Learn the pattern and you will understand most of them.",
        vocab: [
          { de: "Bahnhof", art: "der", pl: "Bahnhöfe", en: "train station" },
          { de: "Haltestelle", art: "die", pl: "Haltestellen", en: "stop (bus, tram)" },
          { de: "Flughafen", art: "der", pl: "Flughäfen", en: "airport" },
          { de: "Gleis", art: "das", pl: "Gleise", en: "platform, track", ex: "Der Zug fährt auf Gleis fünf.", exEn: "The train leaves from platform five." },
          { de: "Fahrkarte", art: "die", pl: "Fahrkarten", en: "ticket (transport)" },
          { de: "Abfahrt", art: "die", pl: "Abfahrten", en: "departure" },
          { de: "Ankunft", art: "die", en: "arrival" },
          { de: "Verspätung", art: "die", pl: "Verspätungen", en: "delay" },
          { de: "abfahren", en: "to depart", ex: "Der Zug fährt um zehn Uhr ab.", exEn: "The train leaves at ten o’clock." },
          { de: "ankommen", en: "to arrive", ex: "Wann kommt der Zug an?", exEn: "When does the train arrive?" },
          { de: "umsteigen", en: "to change (trains)" },
          { de: "einfach", en: "one-way" },
          { de: "hin und zurück", en: "return, round trip" },
          { de: "Eine Fahrkarte nach Berlin, bitte.", en: "A ticket to Berlin, please." },
          { de: "Einfach oder hin und zurück?", en: "One-way or return?" },
          { de: "Wann fährt der Zug nach Hamburg?", en: "When does the train to Hamburg leave?" }
        ],
        tip: {
          title: "Train talk uses separable verbs",
          text: "Station verbs are **separable**, like in Unit 6: **abfahren → Der Zug fährt um zehn Uhr ab.** **ankommen → Wann kommt der Zug an?** **umsteigen → Ich steige in Köln um.** Use **nach** + city for the destination: **nach Berlin, nach Hamburg**. To buy a ticket, say **Eine Fahrkarte nach … , bitte.** The clerk may ask **Einfach oder hin und zurück?** Say **einfach** for one-way and **hin und zurück** for a return ticket.",
          table: {
            head: ["Verb", "Sentence", "Meaning"],
            rows: [
              ["**abfahren**", "Der Zug fährt um neun Uhr ab.", "The train leaves at nine."],
              ["**ankommen**", "Der Bus kommt um zehn Uhr an.", "The bus arrives at ten."],
              ["**umsteigen**", "Ich steige in Köln um.", "I change in Cologne."]
            ]
          },
          examples: [
            { de: "Eine Fahrkarte nach München, bitte. – Einfach oder hin und zurück?", en: "A ticket to Munich, please. – One-way or return?" },
            { de: "Der Zug nach Berlin hat zehn Minuten Verspätung.", en: "The train to Berlin is ten minutes late." }
          ]
        },
        exercises: [
          { type: "article", noun: "Bahnhof", en: "train station", answer: "der" },
          { type: "article", noun: "Haltestelle", en: "stop", answer: "die" },
          { type: "article", noun: "Gleis", en: "platform", answer: "das" },
          { type: "article", noun: "Fahrkarte", en: "ticket", answer: "die" },
          { type: "mcq", prompt: "What does ‘hin und zurück’ mean?",
            options: ["return trip", "one-way", "delay", "platform"], answer: 0 },
          { type: "mcq", prompt: "Which word means ‘delay’?",
            options: ["Verspätung", "Abfahrt", "Ankunft", "Gleis"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Der Zug fährt um zehn Uhr ___.", en: "The train leaves at ten o’clock.",
            options: ["ab", "an", "auf", "ein"], answer: "ab" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wann ___ der Zug an?", en: "When does the train arrive?",
            options: ["kommt", "kommen", "komme", "kommst"], answer: "kommt" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Eine Fahrkarte ___ Berlin, bitte.", en: "A ticket to Berlin, please.",
            options: ["nach", "mit", "in", "zu"], answer: "nach" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ in Köln um.", en: "I change in Cologne.",
            options: ["steige", "steigst", "steigt", "steigen"], answer: "steige" },
          { type: "listen", prompt: "Which question do you hear?", text: "Wann fährt der Zug nach Hamburg?",
            options: ["Wann fährt der Zug nach Hamburg?", "Wann kommt der Zug in Hamburg an?", "Wo fährt der Zug nach Hamburg?", "Wann fährt der Bus nach Hamburg?"], answer: "Wann fährt der Zug nach Hamburg?" },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "Abfahrt", en: "departure" },
              { de: "Ankunft", en: "arrival" },
              { de: "einfach", en: "one-way" },
              { de: "Flughafen", en: "airport" }
            ] },
          { type: "type", prompt: "Type this in German", src: "A ticket to Berlin, please.", answer: "Eine Fahrkarte nach Berlin, bitte.", accept: ["Ein Ticket nach Berlin, bitte."] },
          { type: "order", src: "The train leaves at ten o’clock.", answer: "Der Zug fährt um zehn Uhr ab.", extra: ["an"] },
          { type: "order", src: "One-way or return?", answer: "Einfach oder hin und zurück?", extra: ["aber"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 3: Asking for directions
         --------------------------------------------------- */
      {
        id: "u09l3",
        title: "Asking for Directions",
        emoji: "🧭",
        goal: "Ask the way and understand simple directions.",
        hook: "Lost in a German city? These phrases will get you where you need to go.",
        vocab: [
          { de: "geradeaus", en: "straight ahead" },
          { de: "links", en: "left", ex: "Gehen Sie links.", exEn: "Go left." },
          { de: "rechts", en: "right", ex: "Die Bank ist rechts.", exEn: "The bank is on the right." },
          { de: "Straße", art: "die", pl: "Straßen", en: "street" },
          { de: "Ecke", art: "die", pl: "Ecken", en: "corner" },
          { de: "Kreuzung", art: "die", pl: "Kreuzungen", en: "intersection" },
          { de: "Ampel", art: "die", pl: "Ampeln", en: "traffic light" },
          { de: "Platz", art: "der", pl: "Plätze", en: "square, place" },
          { de: "Bank", art: "die", pl: "Banken", en: "bank" },
          { de: "Post", art: "die", en: "post office" },
          { de: "weit", en: "far" },
          { de: "nah", en: "near" },
          { de: "Entschuldigung, wo ist der Bahnhof?", en: "Excuse me, where is the train station?" },
          { de: "Wie komme ich zum Bahnhof?", en: "How do I get to the train station?" },
          { de: "Gehen Sie geradeaus.", en: "Go straight ahead." },
          { de: "Die erste Straße links.", en: "The first street on the left." },
          { de: "Ist es weit?", en: "Is it far?" }
        ],
        tip: {
          title: "Asking and giving directions",
          text: "Ask **Wo ist …?** (where is?) or **Wie komme ich zu …?** (how do I get to?). After **zu**, use **zum** for **der/das** nouns and **zur** for **die** nouns: **zum Bahnhof** (der), **zum Hotel** (das), **zur Post** (die). To give directions, use the polite command: **verb + Sie**: **Gehen Sie geradeaus. Fahren Sie nach links.** You will learn more about commands in Unit 11. Useful chunks: **die erste Straße links, die zweite Straße rechts, an der Ampel**.",
          table: {
            head: ["Say…", "Meaning"],
            rows: [
              ["**Gehen Sie geradeaus.**", "Go straight ahead."],
              ["**Gehen Sie links / rechts.**", "Go left / right."],
              ["**Die erste Straße links.**", "The first street on the left."],
              ["**An der Ampel rechts.**", "Right at the traffic light."],
              ["**Es ist nicht weit.**", "It is not far."]
            ]
          },
          examples: [
            { de: "Entschuldigung, wie komme ich zur Post? – Gehen Sie geradeaus und dann links.", en: "Excuse me, how do I get to the post office? – Go straight ahead and then left." },
            { de: "Wo ist der Bahnhof? – Die zweite Straße rechts. Es ist nicht weit.", en: "Where is the train station? – The second street on the right. It is not far." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which word means ‘straight ahead’?",
            options: ["geradeaus", "links", "rechts", "weit"], answer: 0 },
          { type: "mcq", prompt: "‘Gehen Sie links.’ means:",
            options: ["Go left.", "Go right.", "Go straight.", "Stop here."], answer: 0 },
          { type: "mcq", prompt: "Which question asks for the way?",
            options: ["Wie komme ich zum Bahnhof?", "Wie heißt der Bahnhof?", "Wann fährt der Bahnhof?", "Was kostet der Bahnhof?"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wie komme ich ___ Bahnhof?", en: "How do I get to the train station?",
            options: ["zum", "zur", "zu der", "nach"], answer: "zum", explain: "**Bahnhof** is **der**, so **zu dem → zum**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wie komme ich ___ Post?", en: "How do I get to the post office?",
            options: ["zur", "zum", "zu dem", "nach"], answer: "zur", explain: "**Post** is **die**, so **zu der → zur**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ Sie geradeaus.", en: "Go straight ahead.",
            options: ["Gehen", "Gehe", "Geht", "Gehst"], answer: "Gehen" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die erste Straße ___.", en: "The first street on the left.",
            options: ["links", "rechts", "geradeaus", "weit"], answer: "links" },
          { type: "fill", prompt: "Fill in the blank", sentence: "An der ___ rechts.", en: "Right at the traffic light.",
            options: ["Ampel", "Ecke", "Bank", "Straße"], answer: "Ampel" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Gehen Sie geradeaus und dann links.",
            options: ["Gehen Sie geradeaus und dann links.", "Gehen Sie geradeaus und dann rechts.", "Gehen Sie links und dann geradeaus.", "Fahren Sie geradeaus und dann links."], answer: "Gehen Sie geradeaus und dann links." },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "links", en: "left" },
              { de: "rechts", en: "right" },
              { de: "weit", en: "far" },
              { de: "Kreuzung", en: "intersection" }
            ] },
          { type: "type", prompt: "Type this in German", src: "Go straight ahead.", answer: "Gehen Sie geradeaus." },
          { type: "order", src: "How do I get to the train station?", answer: "Wie komme ich zum Bahnhof?", extra: ["zur"] },
          { type: "order", src: "Is it far?", answer: "Ist es weit?", extra: ["nah"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 4: Hotel and booking
         --------------------------------------------------- */
      {
        id: "u09l4",
        title: "Hotel & Booking",
        emoji: "🏨",
        goal: "Book a room and ask for what you need.",
        hook: "From arrival to check-out, a handful of phrases will make your hotel stay easy.",
        vocab: [
          { de: "Hotel", art: "das", pl: "Hotels", en: "hotel" },
          { de: "Rezeption", art: "die", en: "reception" },
          { de: "Einzelzimmer", art: "das", pl: "Einzelzimmer", en: "single room" },
          { de: "Doppelzimmer", art: "das", pl: "Doppelzimmer", en: "double room" },
          { de: "Nacht", art: "die", pl: "Nächte", en: "night", ex: "Wir bleiben zwei Nächte.", exEn: "We are staying two nights." },
          { de: "Frühstück", art: "das", en: "breakfast" },
          { de: "Reservierung", art: "die", pl: "Reservierungen", en: "reservation" },
          { de: "Pass", art: "der", pl: "Pässe", en: "passport" },
          { de: "reservieren", en: "to reserve", ex: "Ich möchte ein Zimmer reservieren.", exEn: "I would like to reserve a room." },
          { de: "buchen", en: "to book" },
          { de: "bleiben", en: "to stay" },
          { de: "frei", en: "free, available" },
          { de: "inklusive", en: "included" },
          { de: "Haben Sie ein Zimmer frei?", en: "Do you have a room available?" },
          { de: "Ich möchte ein Doppelzimmer für zwei Nächte.", en: "I would like a double room for two nights." },
          { de: "Ist das Frühstück inklusive?", en: "Is breakfast included?" }
        ],
        tip: {
          title: "Booking phrases",
          text: "Start with **Ich möchte …** (I would like …) or **Haben Sie … frei?** (Do you have … available?). Use **für** + a number + **Nächte** to say how long: **für zwei Nächte** (one night: **für eine Nacht**). With **möchte** + another verb, the second verb goes to the **end**: **Ich möchte ein Zimmer reservieren.** Ask about price with **Wie viel kostet das Zimmer pro Nacht?** and about breakfast with **Ist das Frühstück inklusive?** At the desk you may need to show your **Pass**.",
          table: {
            head: ["Situation", "German"],
            rows: [
              ["Asking", "**Haben Sie ein Zimmer frei?**"],
              ["Booking", "**Ich möchte ein Zimmer reservieren.**"],
              ["Length", "**Für zwei Nächte.**"],
              ["Price", "**Wie viel kostet das Zimmer pro Nacht?**"],
              ["Breakfast", "**Ist das Frühstück inklusive?**"]
            ]
          },
          examples: [
            { de: "Guten Tag. Haben Sie ein Doppelzimmer frei? – Für wie viele Nächte?", en: "Hello. Do you have a double room available? – For how many nights?" },
            { de: "Wir möchten zwei Nächte bleiben. Ist das Frühstück inklusive?", en: "We would like to stay two nights. Is breakfast included?" }
          ]
        },
        exercises: [
          { type: "article", noun: "Hotel", en: "hotel", answer: "das" },
          { type: "article", noun: "Rezeption", en: "reception", answer: "die" },
          { type: "article", noun: "Frühstück", en: "breakfast", answer: "das" },
          { type: "article", noun: "Pass", en: "passport", answer: "der" },
          { type: "mcq", prompt: "What does ‘Haben Sie ein Zimmer frei?’ ask?",
            options: ["Do you have a room available?", "Is the room free of charge?", "Where is my room?", "How much is the room?"], answer: 0 },
          { type: "mcq", prompt: "What is the plural of ‘die Nacht’?",
            options: ["die Nächte", "die Nachten", "die Nachts", "die Nacht"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich möchte ein Zimmer ___.", en: "I would like to reserve a room.",
            options: ["reservieren", "reserviere", "reserviert", "reservierst"], answer: "reservieren", explain: "After **möchte**, the second verb is an infinitive at the end." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ein Zimmer ___ zwei Nächte.", en: "A room for two nights.",
            options: ["für", "mit", "in", "nach"], answer: "für" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ist das ___ inklusive?", en: "Is breakfast included?",
            options: ["Frühstück", "Reservierung", "Rezeption", "Hotel"], answer: "Frühstück" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Haben Sie ein Zimmer ___?", en: "Do you have a room available?",
            options: ["frei", "billig", "bar", "weit"], answer: "frei" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Ich möchte ein Doppelzimmer für zwei Nächte.",
            options: ["Ich möchte ein Doppelzimmer für zwei Nächte.", "Ich möchte ein Einzelzimmer für zwei Nächte.", "Ich möchte ein Doppelzimmer für drei Nächte.", "Ich möchte ein Doppelzimmer für eine Nacht."], answer: "Ich möchte ein Doppelzimmer für zwei Nächte." },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "Einzelzimmer", en: "single room" },
              { de: "Doppelzimmer", en: "double room" },
              { de: "buchen", en: "to book" },
              { de: "bleiben", en: "to stay" }
            ] },
          { type: "type", prompt: "Type this in German", src: "Is breakfast included?", answer: "Ist das Frühstück inklusive?" },
          { type: "order", src: "Do you have a room available?", answer: "Haben Sie ein Zimmer frei?", extra: ["Hast"] },
          { type: "order", src: "I would like to reserve a room.", answer: "Ich möchte ein Zimmer reservieren.", extra: ["reserviere"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 5: Weather and seasons
         --------------------------------------------------- */
      {
        id: "u09l5",
        title: "Weather & Seasons",
        emoji: "🌦️",
        goal: "Talk about the weather and the four seasons.",
        hook: "Weather is the world’s favorite small talk. Here is how to join in, in German.",
        vocab: [
          { de: "Wetter", art: "das", en: "weather", ex: "Wie ist das Wetter?", exEn: "What is the weather like?" },
          { de: "Sonne", art: "die", en: "sun" },
          { de: "Regen", art: "der", en: "rain" },
          { de: "Schnee", art: "der", en: "snow" },
          { de: "Wind", art: "der", pl: "Winde", en: "wind" },
          { de: "Wolke", art: "die", pl: "Wolken", en: "cloud" },
          { de: "Grad", art: "das", en: "degree", ex: "Es sind zwanzig Grad.", exEn: "It is twenty degrees." },
          { de: "warm", en: "warm" },
          { de: "kalt", en: "cold" },
          { de: "heiß", en: "hot" },
          { de: "kühl", en: "cool" },
          { de: "regnen", en: "to rain", ex: "Es regnet.", exEn: "It is raining." },
          { de: "schneien", en: "to snow", ex: "Es schneit.", exEn: "It is snowing." },
          { de: "scheinen", en: "to shine", ex: "Die Sonne scheint.", exEn: "The sun is shining." },
          { de: "Frühling", art: "der", en: "spring" },
          { de: "Sommer", art: "der", en: "summer" },
          { de: "Herbst", art: "der", en: "autumn, fall" },
          { de: "Winter", art: "der", en: "winter" },
          { de: "Wie ist das Wetter?", en: "What is the weather like?" },
          { de: "Im Sommer ist es heiß.", en: "In summer it is hot." }
        ],
        tip: {
          title: "Weather uses ‘es’",
          text: "German weather sentences use **es** as the subject: **Es regnet. Es schneit. Es ist kalt.** The sun and wind have normal subjects: **Die Sonne scheint. Der Wind ist stark.** Say the temperature with **Es sind … Grad.** For seasons use **im** (in dem): **im Frühling, im Sommer, im Herbst, im Winter**. All four seasons are **der** nouns. Ask **Wie ist das Wetter?** or **Wie ist das Wetter im Winter?**",
          table: {
            head: ["Season", "Typical weather", "Example"],
            rows: [
              ["**der Frühling**", "mild, rainy", "Im Frühling regnet es oft."],
              ["**der Sommer**", "hot, sunny", "Im Sommer scheint die Sonne."],
              ["**der Herbst**", "cool, windy", "Im Herbst ist es kühl."],
              ["**der Winter**", "cold, snow", "Im Winter schneit es."]
            ]
          },
          examples: [
            { de: "Wie ist das Wetter heute? – Es regnet und es ist kalt.", en: "What is the weather like today? – It is raining and it is cold." },
            { de: "Im Sommer sind es dreißig Grad. Das ist sehr heiß!", en: "In summer it is thirty degrees. That is very hot!" }
          ]
        },
        exercises: [
          { type: "article", noun: "Wetter", en: "weather", answer: "das" },
          { type: "article", noun: "Sonne", en: "sun", answer: "die" },
          { type: "article", noun: "Winter", en: "winter", answer: "der" },
          { type: "mcq", prompt: "Which word means ‘cold’?",
            options: ["kalt", "warm", "heiß", "kühl"], answer: 0 },
          { type: "mcq", prompt: "What does ‘Es schneit.’ mean?",
            options: ["It is snowing.", "It is raining.", "It is windy.", "It is hot."], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Es ___.", en: "It is raining.",
            options: ["regnet", "regne", "regnen", "regnest"], answer: "regnet" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Die Sonne ___.", en: "The sun is shining.",
            options: ["scheint", "scheinen", "scheine", "scheinst"], answer: "scheint" },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ Sommer ist es heiß.", en: "In summer it is hot.",
            options: ["Im", "In", "Am", "Auf"], answer: "Im" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Es ___ zwanzig Grad.", en: "It is twenty degrees.",
            options: ["sind", "ist", "hat", "gibt"], answer: "sind" },
          { type: "listen", prompt: "Which question do you hear?", text: "Wie ist das Wetter?",
            options: ["Wie ist das Wetter?", "Wie spät ist es?", "Wie alt bist du?", "Wo ist das Wetter?"], answer: "Wie ist das Wetter?" },
          { type: "match", prompt: "Match the season with the English",
            pairs: [
              { de: "Frühling", en: "spring" },
              { de: "Sommer", en: "summer" },
              { de: "Herbst", en: "autumn" },
              { de: "Winter", en: "winter" }
            ] },
          { type: "type", prompt: "Type this in German", src: "What is the weather like?", answer: "Wie ist das Wetter?" },
          { type: "order", src: "In winter it is snowing.", answer: "Im Winter schneit es.", extra: ["regnet"] },
          { type: "order", src: "In summer it is hot.", answer: "Im Sommer ist es heiß.", extra: ["kalt"] }
        ]
      }
    ],

    /* -----------------------------------------------------
       Unit mini-test: 10 items are drawn at random.
       Pass mark: 70% to unlock Unit 10.
       ----------------------------------------------------- */
    test: [
      { type: "article", noun: "Bahnhof", en: "train station", answer: "der" },
      { type: "article", noun: "Haltestelle", en: "stop", answer: "die" },
      { type: "article", noun: "Gleis", en: "platform", answer: "das" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich fahre ___ dem Zug.", en: "I travel by train.",
        options: ["mit", "in", "auf", "zu"], answer: "mit" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ mit dem Bus.", en: "You take the bus.",
        options: ["fährst", "fahrst", "fahre", "fährt"], answer: "fährst" },
      { type: "mcq", prompt: "What does ‘zu Fuß’ mean?",
        options: ["on foot", "too far", "at the end", "by bus"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Der Zug fährt um zehn Uhr ___.", en: "The train leaves at ten o’clock.",
        options: ["ab", "an", "auf", "ein"], answer: "ab" },
      { type: "mcq", prompt: "What does ‘hin und zurück’ mean?",
        options: ["return trip", "one-way", "delay", "platform"], answer: 0 },
      { type: "listen", prompt: "Which question do you hear?", text: "Wann fährt der Zug nach Hamburg?",
        options: ["Wann fährt der Zug nach Hamburg?", "Wann kommt der Zug in Hamburg an?", "Wo fährt der Zug nach Hamburg?", "Wann fährt der Bus nach Hamburg?"], answer: "Wann fährt der Zug nach Hamburg?" },
      { type: "mcq", prompt: "Which word means ‘straight ahead’?",
        options: ["geradeaus", "links", "rechts", "weit"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wie komme ich ___ Bahnhof?", en: "How do I get to the train station?",
        options: ["zum", "zur", "zu der", "nach"], answer: "zum" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wie komme ich ___ Post?", en: "How do I get to the post office?",
        options: ["zur", "zum", "zu dem", "nach"], answer: "zur" },
      { type: "listen", prompt: "Which sentence do you hear?", text: "Gehen Sie geradeaus und dann links.",
        options: ["Gehen Sie geradeaus und dann links.", "Gehen Sie geradeaus und dann rechts.", "Gehen Sie links und dann geradeaus.", "Fahren Sie geradeaus und dann links."], answer: "Gehen Sie geradeaus und dann links." },
      { type: "fill", prompt: "Fill in the blank", sentence: "Haben Sie ein Zimmer ___?", en: "Do you have a room available?",
        options: ["frei", "billig", "bar", "weit"], answer: "frei" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ein Zimmer ___ zwei Nächte.", en: "A room for two nights.",
        options: ["für", "mit", "in", "nach"], answer: "für" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Es ___.", en: "It is raining.",
        options: ["regnet", "regne", "regnen", "regnest"], answer: "regnet" },
      { type: "fill", prompt: "Fill in the blank", sentence: "___ Sommer ist es heiß.", en: "In summer it is hot.",
        options: ["Im", "In", "Am", "Auf"], answer: "Im" },
      { type: "mcq", prompt: "What does ‘Es schneit.’ mean?",
        options: ["It is snowing.", "It is raining.", "It is windy.", "It is hot."], answer: 0 },
      { type: "type", prompt: "Type this in German", src: "Go straight ahead.", answer: "Gehen Sie geradeaus." },
      { type: "order", src: "I take the bus.", answer: "Ich fahre mit dem Bus.", extra: ["fährst"] },
      { type: "order", src: "Do you have a room available?", answer: "Haben Sie ein Zimmer frei?", extra: ["Hast"] },
      { type: "order", src: "What is the weather like?", answer: "Wie ist das Wetter?", extra: ["Wo"] }
    ]
  });
})();
