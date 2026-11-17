/* =========================================================
   Deutsch A1 — data/unit04.js
   Unit 4: Family & People (5 lessons + mini-test)
   Registers itself with GA1.units.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  GA1.units.push({
    id: "u04",
    num: 4,
    title: "Family & People",
    subtitle: "Talk about your family, friends and work",
    icon: "👨‍👩‍👧‍👦",
    color: "#ff375f",
    outcomes: [
      "Name family members",
      "Use mein, dein, sein and ihr correctly",
      "Use the verb haben (to have)",
      "Describe how people look and what they are like",
      "Talk about jobs and ages"
    ],

    lessons: [
      /* ---------------------------------------------------
         Lesson 1: Family members
         --------------------------------------------------- */
      {
        id: "u04l1",
        title: "Family Members",
        emoji: "👪",
        goal: "Name the people in your family.",
        hook: "Family words come in pairs: one masculine, one feminine. Learn them together and you remember both.",
        vocab: [
          { de: "Familie", art: "die", pl: "Familien", en: "family", ex: "Die Familie ist groß.", exEn: "The family is big." },
          { de: "Mutter", art: "die", pl: "Mütter", en: "mother" },
          { de: "Vater", art: "der", pl: "Väter", en: "father", ex: "Der Vater ist Arzt.", exEn: "The father is a doctor." },
          { de: "Eltern", art: "die", en: "parents" },
          { de: "Bruder", art: "der", pl: "Brüder", en: "brother" },
          { de: "Schwester", art: "die", pl: "Schwestern", en: "sister" },
          { de: "Geschwister", art: "die", en: "siblings" },
          { de: "Sohn", art: "der", pl: "Söhne", en: "son" },
          { de: "Tochter", art: "die", pl: "Töchter", en: "daughter" },
          { de: "Kind", art: "das", pl: "Kinder", en: "child" },
          { de: "Großmutter", art: "die", pl: "Großmütter", en: "grandmother", ex: "Die Großmutter ist alt.", exEn: "The grandmother is old." },
          { de: "Großvater", art: "der", pl: "Großväter", en: "grandfather" },
          { de: "Onkel", art: "der", pl: "Onkel", en: "uncle" },
          { de: "Tante", art: "die", pl: "Tanten", en: "aunt" }
        ],
        tip: {
          title: "Family pairs and plurals",
          text: "Most family words come as a masculine and a feminine form. Many plurals add an umlaut: **Vater → Väter**, **Tochter → Töchter**. **Eltern** (parents) and **Geschwister** (siblings) are always plural. In everyday speech, children say **Oma** and **Opa** for grandma and grandpa.",
          table: {
            head: ["Masculine", "Feminine", "Together"],
            rows: [
              ["**der Vater**", "**die Mutter**", "die Eltern"],
              ["**der Bruder**", "**die Schwester**", "die Geschwister"],
              ["**der Sohn**", "**die Tochter**", "die Kinder"],
              ["**der Großvater**", "**die Großmutter**", "die Großeltern"],
              ["**der Onkel**", "**die Tante**", "–"]
            ]
          },
          examples: [
            { de: "Der Vater ist Arzt und die Mutter ist Lehrerin.", en: "The father is a doctor and the mother is a teacher." },
            { de: "Die Kinder sind hier.", en: "The children are here." }
          ]
        },
        exercises: [
          { type: "article", noun: "Mutter", en: "mother", answer: "die" },
          { type: "article", noun: "Bruder", en: "brother", answer: "der" },
          { type: "article", noun: "Kind", en: "child", answer: "das" },
          { type: "mcq", prompt: "Which word means ‘parents’?",
            options: ["Eltern", "Geschwister", "Kinder", "Familie"], answer: 0 },
          { type: "mcq", prompt: "What is the plural of ‘Bruder’?",
            options: ["Brüder", "Bruders", "Bruder", "Brudere"], answer: 0 },
          { type: "listen", prompt: "Which word do you hear?", text: "Großmutter",
            options: ["Großmutter", "Großvater", "Mutter", "Tante"], answer: "Großmutter" },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "der Sohn", en: "son" },
              { de: "die Tochter", en: "daughter" },
              { de: "der Onkel", en: "uncle" },
              { de: "die Tante", en: "aunt" }
            ] },
          { type: "type", prompt: "Type this in German", src: "the sister", answer: "die Schwester", accept: ["Schwester"] },
          { type: "order", src: "The family is big.", answer: "Die Familie ist groß.", extra: ["der"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 2: mein / dein / sein / ihr
         --------------------------------------------------- */
      {
        id: "u04l2",
        title: "mein, dein, sein, ihr",
        emoji: "🏷️",
        goal: "Say whose family and friends you mean.",
        hook: "‘My mother’, ‘your brother’, ‘her friend’. One small word shows who belongs to whom.",
        vocab: [
          { de: "mein", en: "my", ex: "Das ist mein Vater.", exEn: "This is my father." },
          { de: "dein", en: "your (informal)", ex: "Wie heißt dein Bruder?", exEn: "What is your brother’s name?" },
          { de: "sein", en: "his, its", ex: "Das ist sein Hund.", exEn: "That is his dog." },
          { de: "ihr", en: "her, their", ex: "Das ist ihre Schwester.", exEn: "That is her sister." },
          { de: "unser", en: "our", ex: "Das ist unser Haus.", exEn: "That is our house." },
          { de: "Ihr", en: "your (formal)", ex: "Wie heißt Ihre Frau?", exEn: "What is your wife’s name?" },
          { de: "Freund", art: "der", pl: "Freunde", en: "friend (male), boyfriend" },
          { de: "Freundin", art: "die", pl: "Freundinnen", en: "friend (female), girlfriend" },
          { de: "Mann", art: "der", pl: "Männer", en: "man, husband" },
          { de: "Wer ist das?", en: "Who is that?" },
          { de: "Das ist meine Mutter.", en: "This is my mother." },
          { de: "Das sind meine Eltern.", en: "These are my parents." }
        ],
        tip: {
          title: "Possessive words: they follow the noun",
          text: "These words match the **owner** (ich → mein, du → dein) and the **noun** that follows. With **der** and **das** nouns they have no ending. With **die** nouns and with **plural** nouns they add **-e**. Watch out: **sein** also means ‘to be’, and **ihr** can mean ‘her’ or ‘you (plural)’. The sentence tells you which one it is.",
          table: {
            head: ["Owner", "der / das noun", "die / plural noun"],
            rows: [
              ["**ich**", "mein Vater", "meine Mutter"],
              ["**du**", "dein Vater", "deine Mutter"],
              ["**er / es**", "sein Vater", "seine Mutter"],
              ["**sie**", "ihr Vater", "ihre Mutter"],
              ["**wir**", "unser Vater", "unsere Mutter"],
              ["**ihr**", "euer Vater", "eure Mutter"],
              ["**Sie**", "Ihr Vater", "Ihre Mutter"]
            ]
          },
          examples: [
            { de: "Das ist mein Bruder und das ist meine Schwester.", en: "This is my brother and this is my sister." },
            { de: "Anna und ihre Eltern sind hier.", en: "Anna and her parents are here." }
          ]
        },
        exercises: [
          { type: "fill", prompt: "Fill in the blank", sentence: "Das ist ___ Mutter.", en: "This is my mother.",
            options: ["meine", "mein", "meinen"], answer: "meine", explain: "**Mutter** is **die**, so the ending is **-e**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das ist ___ Vater.", en: "This is my father.",
            options: ["mein", "meine", "meiner"], answer: "mein", explain: "**Vater** is **der**, so there is no ending." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wie heißt ___ Bruder?", en: "What is your brother’s name? (informal)",
            options: ["dein", "deine", "Ihr"], answer: "dein" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das sind ___ Eltern.", en: "These are my parents.",
            options: ["meine", "mein", "meiner"], answer: "meine", explain: "Plural nouns take **-e**: **meine Eltern**." },
          { type: "mcq", prompt: "Anna says: ‘Das ist ___ Bruder.’ (Anna’s brother)",
            options: ["ihr", "sein", "dein", "mein"], answer: 0 },
          { type: "mcq", prompt: "Which phrase means ‘his sister’?",
            options: ["seine Schwester", "sein Schwester", "ihre Schwester", "meine Schwester"], answer: 0 },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Das ist mein Vater.",
            options: ["Das ist mein Vater.", "Das ist meine Mutter.", "Das sind meine Eltern.", "Das ist dein Vater."], answer: "Das ist mein Vater." },
          { type: "type", prompt: "Type this in German", src: "my mother", answer: "meine Mutter" },
          { type: "order", src: "This is my sister.", answer: "Das ist meine Schwester.", extra: ["mein"] },
          { type: "order", src: "What is your brother’s name?", answer: "Wie heißt dein Bruder?", extra: ["deine"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 3: haben
         --------------------------------------------------- */
      {
        id: "u04l3",
        title: "haben: to have",
        emoji: "🎒",
        goal: "Say what you have and ask others what they have.",
        hook: "Haben is the second most important verb after sein. Germans even ‘have’ hunger instead of ‘being’ hungry.",
        vocab: [
          { de: "haben", en: "to have", ex: "Ich habe eine Schwester.", exEn: "I have a sister." },
          { de: "Hunger", art: "der", en: "hunger", ex: "Ich habe Hunger.", exEn: "I am hungry." },
          { de: "Durst", art: "der", en: "thirst", ex: "Du hast Durst.", exEn: "You are thirsty." },
          { de: "Auto", art: "das", pl: "Autos", en: "car" },
          { de: "Fahrrad", art: "das", pl: "Fahrräder", en: "bicycle" },
          { de: "Wohnung", art: "die", pl: "Wohnungen", en: "apartment" },
          { de: "Frage", art: "die", pl: "Fragen", en: "question" },
          { de: "Problem", art: "das", pl: "Probleme", en: "problem" },
          { de: "Hast du Geschwister?", en: "Do you have siblings?" },
          { de: "Ich habe einen Bruder.", en: "I have a brother." },
          { de: "Ich habe keine Geschwister.", en: "I have no siblings." },
          { de: "Ich habe eine Frage.", en: "I have a question." }
        ],
        tip: {
          title: "The verb haben",
          text: "**haben** is irregular in the **du** and **er/sie/es** forms: the **b** disappears (**du hast, er hat**). Say ‘I have’ for hunger and thirst: **Ich habe Hunger**. After **haben**, a masculine noun changes **ein** to **einen**: **Ich habe einen Bruder**. You will learn why in Unit 7.",
          table: {
            head: ["Pronoun", "haben", "Example"],
            rows: [
              ["**ich**", "habe", "Ich habe Hunger."],
              ["**du**", "hast", "Du hast eine Frage."],
              ["**er / sie / es**", "hat", "Er hat ein Auto."],
              ["**wir**", "haben", "Wir haben eine Wohnung."],
              ["**ihr**", "habt", "Ihr habt Durst."],
              ["**sie / Sie**", "haben", "Sie haben Kinder."]
            ]
          },
          examples: [
            { de: "Hast du Geschwister? Ja, ich habe einen Bruder.", en: "Do you have siblings? Yes, I have a brother." },
            { de: "Nein, ich habe keine Geschwister.", en: "No, I have no siblings." }
          ]
        },
        exercises: [
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ einen Bruder.", en: "I have a brother.",
            options: ["habe", "hast", "hat", "haben"], answer: "habe" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ Hunger.", en: "You are hungry.",
            options: ["hast", "habe", "hat", "habt"], answer: "hast", explain: "The **b** disappears: **du hast**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Sie ___ eine Schwester.", en: "She has a sister.",
            options: ["hat", "hast", "habe", "habt"], answer: "hat" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Wir ___ ein Auto.", en: "We have a car.",
            options: ["haben", "habt", "hat", "hast"], answer: "haben" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ihr ___ Durst.", en: "You (all) are thirsty.",
            options: ["habt", "haben", "hat", "hast"], answer: "habt", explain: "**ihr** takes **habt**." },
          { type: "mcq", prompt: "How do you say ‘I am thirsty’?",
            options: ["Ich habe Durst.", "Ich bin Durst.", "Ich hat Durst.", "Ich habe durstig."], answer: 0 },
          { type: "listen", prompt: "Which question do you hear?", text: "Hast du Geschwister?",
            options: ["Hast du Geschwister?", "Hast du Hunger?", "Hast du ein Auto?", "Hast du eine Frage?"], answer: "Hast du Geschwister?" },
          { type: "match", prompt: "Match the pronoun with the form of haben",
            pairs: [
              { de: "ich", en: "habe" },
              { de: "du", en: "hast" },
              { de: "er", en: "hat" },
              { de: "ihr", en: "habt" }
            ] },
          { type: "order", src: "I have a brother.", answer: "Ich habe einen Bruder.", extra: ["ein"] },
          { type: "order", src: "Do you have siblings?", answer: "Hast du Geschwister?", extra: ["bist"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 4: Describing people
         --------------------------------------------------- */
      {
        id: "u04l4",
        title: "Describing People",
        emoji: "🙂",
        goal: "Describe how people look and what they are like.",
        hook: "A handful of adjectives and a few colors let you describe almost anyone.",
        vocab: [
          { de: "klein", en: "small, short" },
          { de: "alt", en: "old", ex: "Mein Großvater ist alt.", exEn: "My grandfather is old." },
          { de: "jung", en: "young" },
          { de: "nett", en: "nice", ex: "Sie ist sehr nett.", exEn: "She is very nice." },
          { de: "freundlich", en: "friendly" },
          { de: "lustig", en: "funny" },
          { de: "sehr", en: "very" },
          { de: "lang", en: "long, tall" },
          { de: "kurz", en: "short (length)" },
          { de: "Haare", art: "die", en: "hair", ex: "Ihre Haare sind lang.", exEn: "Her hair is long." },
          { de: "Augen", art: "die", en: "eyes", ex: "Seine Augen sind braun.", exEn: "His eyes are brown." },
          { de: "blond", en: "blond" },
          { de: "braun", en: "brown" },
          { de: "schwarz", en: "black" },
          { de: "blau", en: "blue" },
          { de: "grün", en: "green" }
        ],
        tip: {
          title: "Adjectives after sein",
          text: "After **sein**, adjectives never change: **Er ist groß. Sie ist groß. Sie sind groß.** Put **sehr** (very) in front to make them stronger. For hair and eyes, German uses the plural nouns **Haare** and **Augen**, so the verb is **sind**: **Seine Haare sind braun.**",
          table: {
            head: ["Words", "Meaning", "Example"],
            rows: [
              ["**groß / klein**", "big, tall / small", "Er ist groß."],
              ["**alt / jung**", "old / young", "Mein Opa ist alt."],
              ["**lang / kurz**", "long / short", "Ihre Haare sind lang."],
              ["**blond, braun, schwarz**", "hair colors", "Seine Haare sind schwarz."],
              ["**blau, grün, braun**", "eye colors", "Ihre Augen sind blau."]
            ]
          },
          examples: [
            { de: "Meine Schwester ist sehr lustig.", en: "My sister is very funny." },
            { de: "Sein Bruder ist jung und freundlich.", en: "His brother is young and friendly." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "What is the opposite of ‘klein’?",
            options: ["groß", "alt", "kurz", "nett"], answer: 0 },
          { type: "mcq", prompt: "What is the opposite of ‘alt’?",
            options: ["jung", "klein", "lang", "lustig"], answer: 0 },
          { type: "mcq", prompt: "Which word means ‘funny’?",
            options: ["lustig", "freundlich", "nett", "jung"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Er ___ sehr nett.", en: "He is very nice.",
            options: ["ist", "sind", "bin", "bist"], answer: "ist" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Seine Haare ___ braun.", en: "His hair is brown.",
            options: ["sind", "ist", "bin", "seid"], answer: "sind", explain: "**Haare** is plural, so the verb is **sind**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ihre Augen ___ blau.", en: "Her eyes are blue.",
            options: ["sind", "ist", "hat", "haben"], answer: "sind" },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Sie ist sehr freundlich.",
            options: ["Sie ist sehr freundlich.", "Sie ist sehr nett.", "Sie ist sehr jung.", "Sie ist sehr lustig."], answer: "Sie ist sehr freundlich." },
          { type: "match", prompt: "Match the color with the English word",
            pairs: [
              { de: "braun", en: "brown" },
              { de: "schwarz", en: "black" },
              { de: "blau", en: "blue" },
              { de: "grün", en: "green" }
            ] },
          { type: "type", prompt: "Type this in German", src: "young", answer: "jung" },
          { type: "order", src: "My father is old.", answer: "Mein Vater ist alt.", extra: ["meine"] },
          { type: "order", src: "She is very nice.", answer: "Sie ist sehr nett.", extra: ["bin"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 5: Jobs and ages
         --------------------------------------------------- */
      {
        id: "u04l5",
        title: "Jobs & Ages",
        emoji: "💼",
        goal: "Say what you do and how old you are.",
        hook: "‘What do you do?’ and ‘How old are you?’ are two of the most common questions in any first conversation.",
        vocab: [
          { de: "Beruf", art: "der", pl: "Berufe", en: "job, profession" },
          { de: "arbeiten", en: "to work", ex: "Ich arbeite in Berlin.", exEn: "I work in Berlin." },
          { de: "studieren", en: "to study (at university)", ex: "Ich studiere Informatik.", exEn: "I study computer science." },
          { de: "Informatik", art: "die", en: "computer science" },
          { de: "Informatiker", art: "der", pl: "Informatiker", en: "computer scientist (male)" },
          { de: "Informatikerin", art: "die", pl: "Informatikerinnen", en: "computer scientist (female)" },
          { de: "Ingenieur", art: "der", pl: "Ingenieure", en: "engineer (male)" },
          { de: "Ingenieurin", art: "die", pl: "Ingenieurinnen", en: "engineer (female)" },
          { de: "Verkäufer", art: "der", pl: "Verkäufer", en: "sales assistant (male)" },
          { de: "Verkäuferin", art: "die", pl: "Verkäuferinnen", en: "sales assistant (female)" },
          { de: "Koch", art: "der", pl: "Köche", en: "cook (male)" },
          { de: "Köchin", art: "die", pl: "Köchinnen", en: "cook (female)" },
          { de: "Was bist du von Beruf?", en: "What do you do for a living?" },
          { de: "Was sind Sie von Beruf?", en: "What do you do for a living? (formal)" },
          { de: "Ich bin 21 Jahre alt.", en: "I am 21 years old." }
        ],
        tip: {
          title: "Jobs, ages and the verb arbeiten",
          text: "To make a job female, add **-in**: **Koch → Köchin**. Some words also get an umlaut. After **sein**, jobs take **no article**: **Ich bin Koch.** For age, say **Ich bin 21 Jahre alt** (or just **Ich bin 21**). The verb **arbeiten** adds an extra **e** in the **du** and **er/sie** forms because the stem ends in **-t**: **du arbeitest, er arbeitet**.",
          table: {
            head: ["Masculine", "Feminine", "English"],
            rows: [
              ["**der Koch**", "**die Köchin**", "cook"],
              ["**der Verkäufer**", "**die Verkäuferin**", "sales assistant"],
              ["**der Ingenieur**", "**die Ingenieurin**", "engineer"],
              ["**der Informatiker**", "**die Informatikerin**", "computer scientist"],
              ["**der Lehrer**", "**die Lehrerin**", "teacher"]
            ]
          },
          examples: [
            { de: "Was bist du von Beruf? Ich bin Informatiker.", en: "What do you do? I am a computer scientist." },
            { de: "Wie alt ist deine Schwester? Sie ist 18 Jahre alt.", en: "How old is your sister? She is 18 years old." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "What is the female form of ‘Koch’?",
            options: ["Köchin", "Kochin", "Köche", "Kochfrau"], answer: 0 },
          { type: "mcq", prompt: "How do you ask someone’s job? (informal)",
            options: ["Was bist du von Beruf?", "Wie alt bist du?", "Woher kommst du?", "Wo wohnst du?"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ in Berlin.", en: "I work in Berlin.",
            options: ["arbeite", "arbeitest", "arbeitet", "arbeiten"], answer: "arbeite" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ sehr viel.", en: "You work a lot.",
            options: ["arbeitest", "arbeitst", "arbeite", "arbeitet"], answer: "arbeitest",
            explain: "The stem ends in **-t**, so **du** takes **-est**." },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich bin 21 Jahre ___.", en: "I am 21 years old.",
            options: ["alt", "jung", "Jahre", "alte"], answer: "alt" },
          { type: "listen", prompt: "Which question do you hear?", text: "Was sind Sie von Beruf?",
            options: ["Was sind Sie von Beruf?", "Was bist du von Beruf?", "Wie alt sind Sie?", "Woher kommen Sie?"], answer: "Was sind Sie von Beruf?" },
          { type: "match", prompt: "Match the job with the English",
            pairs: [
              { de: "Ingenieur", en: "engineer (male)" },
              { de: "Verkäuferin", en: "sales assistant (female)" },
              { de: "Informatikerin", en: "computer scientist (female)" },
              { de: "Köchin", en: "cook (female)" }
            ] },
          { type: "article", noun: "Beruf", en: "job", answer: "der" },
          { type: "type", prompt: "Type this in German", src: "I study computer science.", answer: "Ich studiere Informatik." },
          { type: "order", src: "What do you do for a living?", answer: "Was bist du von Beruf?", extra: ["bin"] },
          { type: "order", src: "I am 21 years old.", answer: "Ich bin 21 Jahre alt.", extra: ["habe"] }
        ]
      }
    ],

    /* -----------------------------------------------------
       Unit mini-test: 10 items are drawn at random.
       Pass mark: 70% to unlock Unit 5.
       ----------------------------------------------------- */
    test: [
      { type: "article", noun: "Schwester", en: "sister", answer: "die" },
      { type: "article", noun: "Vater", en: "father", answer: "der" },
      { type: "mcq", prompt: "What is the plural of ‘Tochter’?",
        options: ["Töchter", "Tochters", "Tochter", "Tochteren"], answer: 0 },
      { type: "listen", prompt: "Which word do you hear?", text: "Geschwister",
        options: ["Geschwister", "Schwester", "Eltern", "Familie"], answer: "Geschwister" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Das ist ___ Schwester.", en: "This is my sister.",
        options: ["meine", "mein", "meinen"], answer: "meine" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Das ist ___ Bruder.", en: "This is your brother. (informal)",
        options: ["dein", "deine", "Ihre"], answer: "dein" },
      { type: "mcq", prompt: "Which phrase means ‘her mother’?",
        options: ["ihre Mutter", "ihr Mutter", "seine Mutter", "mein Mutter"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Wir ___ eine Wohnung.", en: "We have an apartment.",
        options: ["haben", "habt", "hat", "hast"], answer: "haben" },
      { type: "fill", prompt: "Fill in the blank", sentence: "Du ___ eine Frage.", en: "You have a question.",
        options: ["hast", "habe", "hat", "habt"], answer: "hast" },
      { type: "mcq", prompt: "How do you say ‘I am hungry’?",
        options: ["Ich habe Hunger.", "Ich bin Hunger.", "Ich hast Hunger.", "Ich habe hungrig."], answer: 0 },
      { type: "mcq", prompt: "What is the opposite of ‘jung’?",
        options: ["alt", "klein", "kurz", "nett"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ihre Haare ___ lang.", en: "Her hair is long.",
        options: ["sind", "ist", "bin", "hat"], answer: "sind" },
      { type: "listen", prompt: "Which sentence do you hear?", text: "Er ist sehr lustig.",
        options: ["Er ist sehr lustig.", "Er ist sehr alt.", "Er ist sehr nett.", "Er ist sehr jung."], answer: "Er ist sehr lustig." },
      { type: "mcq", prompt: "What is the female form of ‘Ingenieur’?",
        options: ["Ingenieurin", "Ingenieure", "Ingenieurfrau", "Ingenieurein"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Ich ___ als Koch.", en: "I work as a cook.",
        options: ["arbeite", "arbeitest", "arbeitet", "arbeiten"], answer: "arbeite" },
      { type: "type", prompt: "Type this in German", src: "the job", answer: "der Beruf", accept: ["Beruf"] },
      { type: "order", src: "This is my mother.", answer: "Das ist meine Mutter.", extra: ["mein"] },
      { type: "order", src: "Do you have siblings?", answer: "Hast du Geschwister?", extra: ["bist"] },
      { type: "order", src: "I am 21 years old.", answer: "Ich bin 21 Jahre alt.", extra: ["habe"] }
    ]
  });
})();
