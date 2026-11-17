/* =========================================================
   Deutsch A1 — data/unit03.js
   Unit 3: Numbers, Time & Dates (6 lessons + mini-test)
   Registers itself with GA1.units.
   ========================================================= */
(function () {
  "use strict";

  var GA1 = (window.GA1 = window.GA1 || { units: [] });

  GA1.units.push({
    id: "u03",
    num: 3,
    title: "Numbers, Time & Dates",
    subtitle: "Count, tell the time and talk about dates",
    icon: "🔢",
    color: "#ff9f0a",
    outcomes: [
      "Count from 0 to 100",
      "Name the days of the week and the months",
      "Tell the time in informal and formal German",
      "Say prices and phone numbers",
      "Say dates and talk about birthdays"
    ],

    lessons: [
      /* ---------------------------------------------------
         Lesson 1: Numbers 0–100
         --------------------------------------------------- */
      {
        id: "u03l1",
        title: "Numbers 0–100",
        emoji: "🔢",
        goal: "Count from 0 to 100 and build any number in between.",
        hook: "Learn 0 to 12 by heart. After that, German numbers follow clear patterns.",
        vocab: [
          { de: "null", en: "zero (0)" },
          { de: "eins", en: "one (1)" },
          { de: "zwei", en: "two (2)" },
          { de: "drei", en: "three (3)" },
          { de: "vier", en: "four (4)" },
          { de: "fünf", en: "five (5)" },
          { de: "sechs", en: "six (6)" },
          { de: "sieben", en: "seven (7)" },
          { de: "acht", en: "eight (8)" },
          { de: "neun", en: "nine (9)" },
          { de: "zehn", en: "ten (10)" },
          { de: "elf", en: "eleven (11)" },
          { de: "zwölf", en: "twelve (12)" },
          { de: "zwanzig", en: "twenty (20)" },
          { de: "hundert", en: "one hundred (100)" }
        ],
        tip: {
          title: "How German numbers work",
          text: "From 13 to 19, say the unit and add **-zehn**. Tens end in **-zig**. From 21 on, German says the **units first**: 21 is ‘one-and-twenty’, **einundzwanzig**. Numbers are written as one long word.",
          table: {
            head: ["Number", "German", "Pattern"],
            rows: [
              ["13", "**drei**zehn", "unit + zehn"],
              ["16", "**sech**zehn", "sechs loses its s"],
              ["17", "**sieb**zehn", "sieben loses -en"],
              ["30", "dreißig", "ends in -ßig, not -zig"],
              ["60 / 70", "sechzig / siebzig", "same short forms"],
              ["21", "**ein**und**zwanzig**", "units + und + tens"],
              ["35", "**fünf**und**dreißig**", "units + und + tens"],
              ["99", "**neun**und**neunzig**", "units + und + tens"]
            ]
          },
          examples: [
            { de: "Ich bin vierundzwanzig.", en: "I am twenty-four." },
            { de: "Das Zimmer ist achtzehn Quadratmeter groß.", en: "The room is eighteen square meters." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which number is ‘zwölf’?",
            options: ["12", "2", "20", "7"], answer: 0 },
          { type: "mcq", prompt: "How do you say 16?",
            options: ["sechzehn", "sechszehn", "sechszig", "sechzig"], answer: 0 },
          { type: "mcq", prompt: "How do you say 21?",
            options: ["einundzwanzig", "zwanzigeins", "zweiundzehn", "zwanzigundeins"], answer: 0 },
          { type: "listen", prompt: "Which number do you hear?", text: "fünf",
            options: ["fünf", "vier", "sechs", "elf"], answer: "fünf" },
          { type: "match", prompt: "Match the German with the digit",
            pairs: [
              { de: "drei", en: "3" },
              { de: "acht", en: "8" },
              { de: "elf", en: "11" },
              { de: "zwanzig", en: "20" }
            ] },
          { type: "type", prompt: "Type this in German", src: "seven", answer: "sieben" },
          { type: "type", prompt: "Type this in German", src: "35", answer: "fünfunddreißig", accept: ["fuenfunddreissig"] },
          { type: "fill", prompt: "Fill in the blank", sentence: "Drei plus zwei ist ___.", en: "Three plus two is five.",
            options: ["fünf", "vier", "sechs"], answer: "fünf" }
        ]
      },

      /* ---------------------------------------------------
         Lesson 2: Days of the week
         --------------------------------------------------- */
      {
        id: "u03l2",
        title: "Days of the Week",
        emoji: "📅",
        goal: "Name the seven days and say what day it is.",
        hook: "All seven days end in -tag, except Mittwoch. Easy to remember!",
        vocab: [
          { de: "Montag", art: "der", pl: "Montage", en: "Monday" },
          { de: "Dienstag", art: "der", pl: "Dienstage", en: "Tuesday" },
          { de: "Mittwoch", art: "der", pl: "Mittwoche", en: "Wednesday" },
          { de: "Donnerstag", art: "der", pl: "Donnerstage", en: "Thursday" },
          { de: "Freitag", art: "der", pl: "Freitage", en: "Friday" },
          { de: "Samstag", art: "der", pl: "Samstage", en: "Saturday" },
          { de: "Sonntag", art: "der", pl: "Sonntage", en: "Sunday" },
          { de: "Tag", art: "der", pl: "Tage", en: "day" },
          { de: "Woche", art: "die", pl: "Wochen", en: "week" },
          { de: "Wochenende", art: "das", pl: "Wochenenden", en: "weekend", ex: "Am Wochenende bin ich hier.", exEn: "At the weekend I am here." },
          { de: "heute", en: "today", ex: "Heute ist Montag.", exEn: "Today is Monday." },
          { de: "morgen", en: "tomorrow", ex: "Morgen ist Dienstag.", exEn: "Tomorrow is Tuesday." },
          { de: "gestern", en: "yesterday" }
        ],
        tip: {
          title: "Days and ‘on’",
          text: "All days are masculine (**der**). To say ‘on Monday’, use **am**: **am Montag**. Careful: **morgen** (small m) means ‘tomorrow’, while **der Morgen** (capital M) means ‘morning’. The week starts on Monday in Germany.",
          table: {
            head: ["Day", "Short", "On…"],
            rows: [
              ["**Montag**", "Mo", "am Montag"],
              ["**Dienstag**", "Di", "am Dienstag"],
              ["**Mittwoch**", "Mi", "am Mittwoch"],
              ["**Donnerstag**", "Do", "am Donnerstag"],
              ["**Freitag**", "Fr", "am Freitag"],
              ["**Samstag**", "Sa", "am Samstag"],
              ["**Sonntag**", "So", "am Sonntag"]
            ]
          },
          examples: [
            { de: "Heute ist Freitag. Morgen ist Samstag.", en: "Today is Friday. Tomorrow is Saturday." },
            { de: "Am Montag bin ich müde.", en: "On Monday I am tired." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which day comes after Montag?",
            options: ["Dienstag", "Mittwoch", "Sonntag", "Freitag"], answer: 0 },
          { type: "mcq", prompt: "Which day is the middle of the week?",
            options: ["Mittwoch", "Montag", "Freitag", "Samstag"], answer: 0 },
          { type: "mcq", prompt: "How do you say ‘on Friday’?",
            options: ["am Freitag", "im Freitag", "um Freitag", "an Freitag"], answer: 0 },
          { type: "listen", prompt: "Which day do you hear?", text: "Donnerstag",
            options: ["Donnerstag", "Dienstag", "Samstag", "Sonntag"], answer: "Donnerstag" },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "heute", en: "today" },
              { de: "morgen", en: "tomorrow" },
              { de: "gestern", en: "yesterday" },
              { de: "Wochenende", en: "weekend" }
            ] },
          { type: "article", noun: "Woche", en: "week", answer: "die" },
          { type: "type", prompt: "Type this in German", src: "Sunday", answer: "der Sonntag", accept: ["Sonntag"] },
          { type: "order", src: "Today is Monday.", answer: "Heute ist Montag.", extra: ["morgen"] },
          { type: "order", src: "Tomorrow is Tuesday.", answer: "Morgen ist Dienstag.", extra: ["Heute"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 3: Months
         --------------------------------------------------- */
      {
        id: "u03l3",
        title: "The Months",
        emoji: "🗓️",
        goal: "Name the twelve months and say ‘in May’, ‘in March’.",
        hook: "The months look familiar. Only a few spellings and sounds are new.",
        vocab: [
          { de: "Januar", art: "der", en: "January" },
          { de: "Februar", art: "der", en: "February" },
          { de: "März", art: "der", en: "March" },
          { de: "April", art: "der", en: "April" },
          { de: "Mai", art: "der", en: "May" },
          { de: "Juni", art: "der", en: "June" },
          { de: "Juli", art: "der", en: "July" },
          { de: "August", art: "der", en: "August" },
          { de: "September", art: "der", en: "September" },
          { de: "Oktober", art: "der", en: "October" },
          { de: "November", art: "der", en: "November" },
          { de: "Dezember", art: "der", en: "December" },
          { de: "Monat", art: "der", pl: "Monate", en: "month" }
        ],
        tip: {
          title: "Months and ‘in’",
          text: "All months are masculine, but you rarely need the article. To say ‘in’ a month, use **im**: **im Mai**. Remember **J** sounds like English ‘y’, so **Januar** starts with ‘y’. **Juni** and **Juli** sound alike on the phone, so many Germans say ‘Juno’ and ‘Julei’.",
          table: {
            head: ["Month", "In…", "Note"],
            rows: [
              ["**Januar**", "im Januar", "J = ‘y’"],
              ["**März**", "im März", "ä = ‘e’"],
              ["**Mai**", "im Mai", "ai = ‘eye’"],
              ["**Juni / Juli**", "im Juni / im Juli", "stress on 1st / 2nd syllable"],
              ["**Dezember**", "im Dezember", "last month"]
            ]
          },
          examples: [
            { de: "Im Januar ist es kalt.", en: "In January it is cold." },
            { de: "Der Mai ist schön.", en: "May is beautiful." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which month is ‘März’?",
            options: ["March", "May", "June", "July"], answer: 0 },
          { type: "mcq", prompt: "Which month comes after Juni?",
            options: ["Juli", "Mai", "August", "April"], answer: 0 },
          { type: "mcq", prompt: "How do you say ‘in May’?",
            options: ["im Mai", "am Mai", "um Mai", "ins Mai"], answer: 0 },
          { type: "listen", prompt: "Which month do you hear?", text: "Oktober",
            options: ["Oktober", "November", "September", "August"], answer: "Oktober" },
          { type: "match", prompt: "Match the German with the English",
            pairs: [
              { de: "Januar", en: "January" },
              { de: "Juli", en: "July" },
              { de: "Oktober", en: "October" },
              { de: "Dezember", en: "December" }
            ] },
          { type: "fill", prompt: "Fill in the blank", sentence: "___ Dezember", en: "in December",
            options: ["im", "am", "um"], answer: "im", explain: "Months take **im**. Days take **am**." },
          { type: "article", noun: "Monat", en: "month", answer: "der" },
          { type: "type", prompt: "Type this in German", src: "May", answer: "Mai" },
          { type: "order", src: "in March", answer: "im März", extra: ["am"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 4: Clock time
         --------------------------------------------------- */
      {
        id: "u03l4",
        title: "Telling the Time",
        emoji: "🕒",
        goal: "Ask and tell the time in informal and formal German.",
        hook: "Germans use two systems. Friends say ‘quarter past three’. Timetables say ‘fifteen hundred’.",
        vocab: [
          { de: "Uhr", art: "die", pl: "Uhren", en: "clock, o’clock" },
          { de: "Stunde", art: "die", pl: "Stunden", en: "hour" },
          { de: "Minute", art: "die", pl: "Minuten", en: "minute" },
          { de: "Viertel", art: "das", pl: "Viertel", en: "quarter" },
          { de: "halb", en: "half" },
          { de: "nach", en: "past, after" },
          { de: "vor", en: "to, before" },
          { de: "Mittag", art: "der", en: "noon" },
          { de: "Mitternacht", art: "die", en: "midnight" },
          { de: "früh", en: "early" },
          { de: "spät", en: "late" },
          { de: "Wie spät ist es?", en: "What time is it?" },
          { de: "Wie viel Uhr ist es?", en: "What time is it?" },
          { de: "Um wie viel Uhr?", en: "At what time?" },
          { de: "Es ist drei Uhr.", en: "It is three o’clock." }
        ],
        tip: {
          title: "Informal and formal time",
          text: "**Informal** (talking): use **nach**, **vor**, **Viertel** and **halb**. Careful: **halb vier** means half **to** four, which is **3:30**, not 4:30. **Formal** (timetables, news, offices): say the hour, **Uhr**, then the minutes on the 24-hour clock.",
          table: {
            head: ["Time", "Informal", "Formal (3 p.m.)"],
            rows: [
              ["3:00", "drei Uhr", "fünfzehn Uhr"],
              ["3:10", "zehn nach drei", "fünfzehn Uhr zehn"],
              ["3:15", "Viertel nach drei", "fünfzehn Uhr fünfzehn"],
              ["3:30", "**halb vier**", "fünfzehn Uhr dreißig"],
              ["3:45", "Viertel vor vier", "fünfzehn Uhr fünfundvierzig"],
              ["3:50", "zehn vor vier", "fünfzehn Uhr fünfzig"]
            ]
          },
          examples: [
            { de: "Wie spät ist es? Es ist halb acht.", en: "What time is it? It is half past seven." },
            { de: "Der Zug kommt um fünfzehn Uhr dreißig.", en: "The train arrives at 15:30." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "What time is ‘halb vier’?",
            options: ["3:30", "4:30", "4:00", "3:45"], answer: 0 },
          { type: "mcq", prompt: "What time is ‘Viertel nach drei’?",
            options: ["3:15", "2:45", "3:45", "3:30"], answer: 0 },
          { type: "mcq", prompt: "Which time is the formal way to say 3:30 p.m.?",
            options: ["fünfzehn Uhr dreißig", "halb vier", "Viertel vor vier", "dreißig nach drei"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Es ist Viertel ___ drei.", en: "It is a quarter past three.",
            options: ["nach", "vor", "halb"], answer: "nach" },
          { type: "fill", prompt: "Fill in the blank", sentence: "Es ist zehn ___ fünf.", en: "It is ten to five.",
            options: ["vor", "nach", "um"], answer: "vor", explain: "**vor** means ‘to’ (before the hour)." },
          { type: "listen", prompt: "Which time do you hear?", text: "Es ist halb acht.",
            options: ["Es ist halb acht.", "Es ist acht Uhr.", "Es ist Viertel nach acht.", "Es ist halb sieben."], answer: "Es ist halb acht." },
          { type: "type", prompt: "Type this in German", src: "What time is it?", answer: "Wie spät ist es?", accept: ["Wie viel Uhr ist es?"] },
          { type: "order", src: "It is three o’clock.", answer: "Es ist drei Uhr.", extra: ["halb"] },
          { type: "order", src: "What time is it?", answer: "Wie spät ist es?", extra: ["bist"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 5: Prices and phone numbers
         --------------------------------------------------- */
      {
        id: "u03l5",
        title: "Prices & Phone Numbers",
        emoji: "💶",
        goal: "Ask for prices and say phone numbers out loud.",
        hook: "Prices and phone numbers are useful on day one: in a shop, at a café, or when you swap contacts.",
        vocab: [
          { de: "Euro", art: "der", pl: "Euro", en: "euro" },
          { de: "Cent", art: "der", pl: "Cent", en: "cent" },
          { de: "Preis", art: "der", pl: "Preise", en: "price" },
          { de: "kosten", en: "to cost", ex: "Das kostet zehn Euro.", exEn: "That costs ten euros." },
          { de: "Nummer", art: "die", pl: "Nummern", en: "number" },
          { de: "Telefonnummer", art: "die", pl: "Telefonnummern", en: "phone number" },
          { de: "Handy", art: "das", pl: "Handys", en: "mobile phone" },
          { de: "E-Mail", art: "die", pl: "E-Mails", en: "email" },
          { de: "Wie viel kostet das?", en: "How much does that cost?" },
          { de: "Das kostet zwei Euro fünfzig.", en: "That costs 2.50 euros." },
          { de: "Wie ist deine Telefonnummer?", en: "What is your phone number?" },
          { de: "Meine Nummer ist…", en: "My number is…" }
        ],
        tip: {
          title: "Saying prices and phone numbers",
          text: "In Germany the **comma** is the decimal sign, so **3,50 €** is read ‘three euros fifty’: **drei Euro fünfzig**. You do not say ‘cent’ when it is a normal price. Phone numbers are read as single digits or in pairs. To avoid confusion between **zwei** and **drei**, many people say **zwo** for 2 on the phone.",
          table: {
            head: ["Written", "Spoken", "Note"],
            rows: [
              ["2 €", "zwei Euro", "one word, no plural s"],
              ["3,50 €", "drei Euro fünfzig", "no ‘Cent’ needed"],
              ["0,80 €", "achtzig Cent", "less than 1 euro"],
              ["12,99 €", "zwölf Euro neunundneunzig", "two numbers"],
              ["Phone", "null eins fünf eins …", "digit by digit"]
            ]
          },
          examples: [
            { de: "Wie viel kostet das? Das kostet drei Euro fünfzig.", en: "How much is that? That costs 3.50 euros." },
            { de: "Meine Nummer ist null eins fünf eins, zwei drei, vier fünf.", en: "My number is 0151 23 45." }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "How do you say 3,50 €?",
            options: ["drei Euro fünfzig", "dreißig Euro fünf", "drei Cent fünfzig", "fünf Euro drei"], answer: 0 },
          { type: "mcq", prompt: "Which is the decimal sign in German prices?",
            options: ["the comma", "the dot", "the colon", "the dash"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Das ___ zehn Euro.", en: "That costs ten euros.",
            options: ["kostet", "koste", "kosten"], answer: "kostet", explain: "**das** takes the **-t** form: **das kostet**." },
          { type: "listen", prompt: "Which sentence do you hear?", text: "Das kostet zwei Euro fünfzig.",
            options: ["Das kostet zwei Euro fünfzig.", "Das kostet zwölf Euro fünf.", "Das kostet drei Euro fünfzig.", "Das kostet zwei Cent."],
            answer: "Das kostet zwei Euro fünfzig." },
          { type: "article", noun: "Preis", en: "price", answer: "der" },
          { type: "type", prompt: "Type this in German", src: "the phone number", answer: "die Telefonnummer", accept: ["Telefonnummer"] },
          { type: "order", src: "How much does that cost?", answer: "Wie viel kostet das?", extra: ["kosten"] },
          { type: "order", src: "What is your phone number? (informal)", answer: "Wie ist deine Telefonnummer?", extra: ["Ihre"] }
        ]
      },

      /* ---------------------------------------------------
         Lesson 6: Dates and birthdays
         --------------------------------------------------- */
      {
        id: "u03l6",
        title: "Dates & Birthdays",
        emoji: "🎂",
        goal: "Say dates with ordinal numbers and talk about your birthday.",
        hook: "Dates use ordinal numbers: the first, the second, the third. Add a few birthday phrases and you are ready to celebrate.",
        vocab: [
          { de: "Datum", art: "das", pl: "Daten", en: "date" },
          { de: "Geburtstag", art: "der", pl: "Geburtstage", en: "birthday" },
          { de: "Jahr", art: "das", pl: "Jahre", en: "year" },
          { de: "erste", en: "first (1st)" },
          { de: "zweite", en: "second (2nd)" },
          { de: "dritte", en: "third (3rd)" },
          { de: "vierte", en: "fourth (4th)" },
          { de: "siebte", en: "seventh (7th)" },
          { de: "zwanzigste", en: "twentieth (20th)" },
          { de: "Der Wievielte ist heute?", en: "What is the date today?" },
          { de: "Wann hast du Geburtstag?", en: "When is your birthday?" },
          { de: "Ich habe am 3. März Geburtstag.", en: "My birthday is on 3 March." },
          { de: "Alles Gute zum Geburtstag!", en: "Happy birthday!" },
          { de: "Herzlichen Glückwunsch!", en: "Congratulations!" }
        ],
        tip: {
          title: "Ordinal numbers and dates",
          text: "Ordinals end in **-te** up to 19 and in **-ste** from 20 on. Three are irregular: **erste, dritte, siebte**. In writing, a **dot** after the digit shows an ordinal: **3. März** is read **der dritte März**. After **am**, the ordinal ends in **-n**: **am dritten März**. German dates go **day, month, year**: **03.05.2026** is **3 May 2026**.",
          table: {
            head: ["Number", "Ordinal", "In a date"],
            rows: [
              ["1.", "erste", "der erste Mai"],
              ["2.", "zweite", "der zweite Mai"],
              ["3.", "dritte", "am dritten März"],
              ["7.", "siebte", "der siebte Juli"],
              ["20.", "zwanzigste", "am zwanzigsten Juni"],
              ["31.", "einunddreißigste", "der einunddreißigste Dezember"]
            ]
          },
          examples: [
            { de: "Wann hast du Geburtstag? Am 3. März.", en: "When is your birthday? On 3 March." },
            { de: "Alles Gute zum Geburtstag, Lena!", en: "Happy birthday, Lena!" }
          ]
        },
        exercises: [
          { type: "mcq", prompt: "Which word is ‘third’ (3rd)?",
            options: ["dritte", "drite", "dreite", "dreißigste"], answer: 0 },
          { type: "mcq", prompt: "In Germany, 03.05.2026 is…",
            options: ["3 May 2026", "5 March 2026", "30 May 2026", "3 March 2026"], answer: 0 },
          { type: "mcq", prompt: "What do you say to someone on their birthday?",
            options: ["Alles Gute zum Geburtstag!", "Gute Nacht!", "Auf Wiedersehen!", "Guten Appetit!"], answer: 0 },
          { type: "fill", prompt: "Fill in the blank", sentence: "Ich habe am ___ Mai Geburtstag.", en: "My birthday is on 1 May.",
            options: ["ersten", "erste", "eins"], answer: "ersten", explain: "After **am**, the ordinal ends in **-n**." },
          { type: "listen", prompt: "Which question do you hear?", text: "Wann hast du Geburtstag?",
            options: ["Wann hast du Geburtstag?", "Wie alt bist du?", "Wie spät ist es?", "Wo wohnst du?"], answer: "Wann hast du Geburtstag?" },
          { type: "match", prompt: "Match the ordinal with the number",
            pairs: [
              { de: "erste", en: "1st" },
              { de: "zweite", en: "2nd" },
              { de: "dritte", en: "3rd" },
              { de: "siebte", en: "7th" }
            ] },
          { type: "type", prompt: "Type this in German", src: "the birthday", answer: "der Geburtstag", accept: ["Geburtstag"] },
          { type: "order", src: "When is your birthday?", answer: "Wann hast du Geburtstag?", extra: ["bist"] },
          { type: "order", src: "Happy birthday!", answer: "Alles Gute zum Geburtstag!", extra: ["Danke"] }
        ]
      }
    ],

    /* -----------------------------------------------------
       Unit mini-test: 10 items are drawn at random.
       Pass mark: 70% to unlock Unit 4.
       ----------------------------------------------------- */
    test: [
      { type: "mcq", prompt: "How do you say 14?",
        options: ["vierzehn", "vierzig", "vier", "vierten"], answer: 0 },
      { type: "type", prompt: "Type this in German", src: "twelve", answer: "zwölf", accept: ["zwoelf"] },
      { type: "listen", prompt: "Which number do you hear?", text: "siebzehn",
        options: ["siebzehn", "siebzig", "sieben", "sechzehn"], answer: "siebzehn" },
      { type: "mcq", prompt: "How do you say 48?",
        options: ["achtundvierzig", "vierundachtzig", "achtvierzig", "vierzigacht"], answer: 0 },
      { type: "mcq", prompt: "Which day comes after Freitag?",
        options: ["Samstag", "Donnerstag", "Montag", "Mittwoch"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "___ Montag", en: "on Monday",
        options: ["am", "im", "um"], answer: "am" },
      { type: "listen", prompt: "Which month do you hear?", text: "Februar",
        options: ["Februar", "Januar", "April", "August"], answer: "Februar" },
      { type: "fill", prompt: "Fill in the blank", sentence: "___ Juli", en: "in July",
        options: ["im", "am", "um"], answer: "im" },
      { type: "mcq", prompt: "What time is ‘halb fünf’?",
        options: ["4:30", "5:30", "5:00", "4:45"], answer: 0 },
      { type: "mcq", prompt: "What time is ‘Viertel vor sechs’?",
        options: ["5:45", "6:15", "6:45", "5:15"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Es ist zehn ___ drei.", en: "It is ten past three.",
        options: ["nach", "vor", "halb"], answer: "nach" },
      { type: "type", prompt: "Type this in German", src: "What time is it?", answer: "Wie spät ist es?", accept: ["Wie viel Uhr ist es?"] },
      { type: "mcq", prompt: "How do you say 2,50 €?",
        options: ["zwei Euro fünfzig", "fünfzig Euro zwei", "zwölf Euro fünf", "zwei Cent fünfzig"], answer: 0 },
      { type: "fill", prompt: "Fill in the blank", sentence: "Das ___ fünf Euro.", en: "That costs five euros.",
        options: ["kostet", "kosten", "koste"], answer: "kostet" },
      { type: "mcq", prompt: "Which word is ‘first’ (1st)?",
        options: ["erste", "eine", "einste", "erste Mal"], answer: 0 },
      { type: "order", src: "How much does that cost?", answer: "Wie viel kostet das?", extra: ["kosten"] },
      { type: "order", src: "When is your birthday?", answer: "Wann hast du Geburtstag?", extra: ["bist"] },
      { type: "order", src: "Happy birthday!", answer: "Alles Gute zum Geburtstag!", extra: ["Danke"] }
    ]
  });
})();
