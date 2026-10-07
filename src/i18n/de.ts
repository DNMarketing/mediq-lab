/**
 * Deutsches Wörterbuch = Referenz. Alle anderen Sprachen sind als `Dict`
 * typisiert und müssen exakt dieselben Schlüssel haben (TypeScript meckert
 * sonst). Auszeichnung: *kursiv*, \n = Umbruch, {yearly}/{monthly}/{lost}/
 * {spots} = Platzhalter (siehe `money` und `fill()`).
 */
export const de = {
  money: {
    yearly: "399 €",
    monthly: "33 €",
    lost: "10.000 bis 20.000 €",
  },

  meta: {
    titleDefault: "medIQ lab: Effizienter lernen. Sicher bestehen. Für Medizinstudierende in DE & EU-Ausland.",
    titleTemplate: "%s · medIQ lab",
    description:
      "Das Lern-Ökosystem für Medizinstudierende in Deutschland und im EU-Ausland: wissenschaftlich fundierte Lernmethoden, Prüfungsstrategie, eigene KI-Lernapp und eine Community, die dich durchs Studium trägt. Eine Mitgliedschaft, alles inklusive.",
    ogTitle: "medIQ lab: Effizienter lernen. Sicher bestehen.",
    ogDescription:
      "Wissenschaftlich fundiert durchs Medizinstudium, in Deutschland und im Ausland. Workshops, Lernzettel, KI-Lernapp und Community in einer Mitgliedschaft.",
  },

  common: {
    join: "Jetzt Platz sichern",
    toHome: "Zur Startseite",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    mainNav: "Hauptnavigation",
    skip: "Zum Inhalt springen",
    language: "Sprache",
    spots: "Nur noch {spots} Plätze frei",
  },

  nav: {
    methode: "Methode",
    programm: "Programm",
    team: "Team",
    ueber: "Über uns",
    faq: "FAQ",
    kontakt: "Kontakt",
  },

  mobileBar: { programm: "Programm" },

  footer: {
    tagline: "master your exams. become a physician.",
    blurb:
      "Das Lern-Ökosystem für Medizinstudierende. Effizienter lernen, sicher bestehen, und teure Umwege vermeiden.",
    pages: "Seiten",
    start: "Loslegen",
    joinCommunity: "Community beitreten →",
    programmPreise: "Programm & Preise",
    legal: "Rechtliches",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    rights: "© 2026 medIQ lab. Alle Rechte vorbehalten.",
    disclaimer: "medIQ lab ist kein Ersatz für offizielle Lehrveranstaltungen. Ergebnisse sind individuell.",
  },

  hero: {
    eyebrow: "Für Medizinstudierende in Deutschland & im Ausland",
    title: "Effizienter lernen.\nSicher bestehen.\n*Keine verlorenen Jahre.*",
    lead:
      "Fundierte Lernmethodik, klare Prüfungsstrategie, eigene KI-Lernapp und eine Community, die dich trägt. Damit dir kein teures Wiederholungsjahr dazwischenkommt, egal ob du in Deutschland oder im Ausland studierst.",
    ctaMethod: "So funktioniert die Methode",
    note: "Für Medizinstudierende in Deutschland & im EU-Ausland · {yearly} im Jahr, alles inklusive · Start über Skool",
    cardTitle: "Methode statt\nAuswendig-Pauken",
    cardBody: "Active Recall & Spaced Repetition, lernpsychologisch fundiert.",
  },

  problemTeaser: {
    eyebrow: "Das Problem",
    title: "Es liegt nicht daran, dass du *zu wenig lernst.*",
    lead: "Die meisten scheitern nicht am Fleiß, sondern am *fehlenden System.*",
    pains: [
      { lead: "Erschlagen von der Stofffülle", rest: ", und niemand zeigt dir, was wirklich geprüft wird." },
      { lead: "Lesen, markieren, wieder vergessen", rest: ". Fleiß ohne System verpufft." },
      { lead: "Ein Fehlversuch", rest: ", und ein Wiederholungsjahr kostet an Privat- und Auslands-Unis schnell {lost}." },
    ],
    quote: "Kein Talent-Problem. Ein *Methoden-Problem.*",
    cta: "Warum das so ist",
  },

  methodTeaser: {
    eyebrow: "Die vier Säulen",
    title: "Klüger lernen, nicht härter",
    subtitle:
      "Dein Studienerfolg steht auf vier Säulen: Lernsystem, Prüfungsstrategie, Stress & Resilienz und Netzwerk. Keine Motivationssprüche, sondern ein System, das dich durchs Studium trägt.",
    cta: "Die ganze Methode ansehen",
  },

  pillars: [
    {
      title: "Lernsystem",
      sub: "Säule 1",
      short: "Ein individuelles Lernsystem, das zu deinem Studienalltag passt: klare Strukturen, eingeplante Erholung, regelmäßige Reflexion.",
      body: "Ein nachhaltiges Lernsystem ist die Grundlage für langfristigen Studienerfolg. Es geht nicht nur darum, was du lernst, sondern wie du dein Lernen strukturierst, planst und an neue Herausforderungen anpasst. Wir helfen dir, ein Lernsystem zu entwickeln, das zu deinem Alltag passt: klare Lernstrukturen, eingeplante Erholungsphasen und regelmäßige Reflexion, damit dein Pensum langfristig effektiv und gesund bleibt.",
      items: ["Lernstrategie-Workshops", "Videoreihe Lernstrategien & Lernapps", "Lernplanerstellung live", "Semesterplaner"],
    },
    {
      title: "Prüfungsstrategie",
      sub: "Säule 2",
      short: "Ein strukturierter Prüfungsfahrplan mit realistischen Etappen, gezielten Wiederholungen und Simulation, bevor es ernst wird.",
      body: "Eine erfolgreiche Prüfungsvorbereitung beginnt lange vor dem Prüfungstag. Eine klare Strategie hilft, den Stoff sinnvoll zu priorisieren, den Überblick zu behalten und Wissen zum richtigen Zeitpunkt sicher abzurufen. Gemeinsam entwickeln wir deinen Prüfungsfahrplan mit realistischen Etappenzielen, planen Wiederholungen gezielt und passen die Strategie laufend an deinen Stand an.",
      items: ["Prüfungsfahrplan & Altfragen-Logik", "Mündliche Prüfungssimulation", "Live-Quiz, z. B. Anatomie", "Klausur-Leitfaden"],
    },
    {
      title: "Stress & Resilienz",
      sub: "Säule 3",
      short: "Effizient lernen, ohne deine mentale Gesundheit zu gefährden: Umgang mit Prüfungsangst, aktive Pausen, Mindset-Tools.",
      body: "Riesige Stoffmengen in kurzer Zeit, Versagensängste, oft weit weg von Familie und gewohntem Umfeld, und das Gefühl, nie genug getan zu haben. Wir vermitteln Methoden, mit denen du effizient lernst, ohne deine mentale Gesundheit zu gefährden: resilient mit Prüfungsangst und Rückschlägen umgehen, aktive Pausen und Mindset-Tools fest im Alltag verankern. Kein kurzfristiges Durchpowern, sondern gesund und motiviert bis zur Approbation.",
      items: ["Workshop Stress & Resilienz", "Videoreihe Stress & Resilienz", "Coaching bei Prüfungsangst", "Aktive Pausen & Mindset-Tools"],
    },
    {
      title: "Netzwerk",
      sub: "Säule 4",
      short: "Eine Community aus Medizinstudierenden in Deutschland und an EU-Unis, die sich pusht, Wissen teilt und Tipps aus höheren Semestern weitergibt.",
      body: "Welche Fachrichtung passt zu mir? Wo macht man gute Famulaturen oder das PJ? Ohne Kontakte bleibt das oft Ratschlag-Lotterie, und ein Studium im Ausland ohne gewachsenes Umfeld bringt zusätzliche Hürden. Wir schaffen eine Community aus Medizinstudierenden in Deutschland und an EU-Universitäten, die sich gegenseitig pusht, motiviert und Wissen teilt: in Lern-Sessions, Austauschgruppen und mit erprobten Tipps aus höheren Semestern.",
      items: ["Study Together, jede Woche", "Community-Café, jede Woche", "Gastvorträge von Ärztinnen & Ärzten", "High-Yield Hour & Q&As"],
    },
  ],

  cost: {
    eyebrow: "Was auf dem Spiel steht",
    line1: "Ein verlorenes Jahr:",
    value1: "{lost}.",
    line2: "Ein Jahr medIQ lab:",
    value2: "{yearly}.",
    text: "Die Frage ist nicht, ob du dir medIQ lab leisten kannst, sondern ob du dir ein verlorenes Jahr leisten willst.",
  },

  offer: {
    eyebrow: "So kommst du rein",
    title: "Ein Preis, alles drin",
    subtitle:
      "Keine Pakete, keine Upsells: eine Jahresmitgliedschaft mit Community, Workshops, Videoreihen, wöchentlichen Live Events, Downloads und KI-Lernapp.",
    plan: "Jahresmitgliedschaft",
    badge: "Alles inklusive",
    blurb: "Community und alle Workshops, ein Jahr lang, ein Preis.",
    perYear: "/ Jahr",
    perMonth: "Entspricht rund {monthly} im Monat.",
    included: [
      "Zugang zur Community auf Skool",
      "Workshop-Reihe, etwa 2× pro Semester",
      "Videoreihen zu Lernstrategien, Resilienz & Finanzen",
      "Study Together & Community-Café, jede Woche",
      "Gastvorträge von Ärzt:innen & Prüfungssimulation",
      "Semesterplaner, Lernzettel & Klausur-Leitfaden",
      "Eigene KI-Lernapp",
    ],
    details: "Alle Details ansehen",
    note: "Anmeldung & Zahlung sicher über Skool · keine versteckten Kosten",
  },

  faqTeaser: {
    eyebrow: "Bevor du dich entscheidest",
    title: "Die häufigsten Fragen",
    items: [
      {
        q: "Lohnt sich der Preis wirklich?",
        a: "Rechne ehrlich gegen: Ein verlorenes Semester kostet Monate an Miete und Lebenshaltung, an Privat- und Auslands-Unis kommt ein Wiederholungsjahr von {lost} dazu. Gemessen daran rechnen sich {yearly} im Jahr schon, wenn sie dir ein einziges verlorenes Semester ersparen.",
      },
      {
        q: "Bekomme ich „garantiert bestehen“?",
        a: "Nein, und jeder, der das verspricht, ist unseriös. Bestehen hängt von dir ab. Was wir liefern, ist ein erprobtes System und eine Community, die deine Chancen messbar verbessern, indem du klüger statt nur härter lernst.",
      },
      {
        q: "Ich studiere in Deutschland, passt das?",
        a: "Ja, ausdrücklich. medIQ lab ist für Medizinstudierende in Deutschland und im EU-Ausland gebaut. Die Methoden sind unabhängig von Standort und Curriculum, und Workshops, Live Events, Downloads und KI-Lernapp nutzt du online.",
      },
      {
        q: "Wie laufen Anmeldung und Zahlung ab?",
        a: "Vollständig und sicher über Skool. Du klickst auf einen Button, landest in der medIQ lab Community und schließt dort die Jahresmitgliedschaft ab. Diese Website wickelt keine Zahlung ab.",
      },
    ],
    all: "Alle Fragen & Antworten",
  },

  cta: {
    eyebrow: "medIQ lab",
    title: "Lern ab heute klüger, *nicht härter.*",
    subtitle:
      "Jedes Semester, das du jetzt sicherst, ist Zeit und Geld, das du nicht verlierst. Tritt der medIQ lab Community bei und bring dein Lernsystem auf ein neues Level.",
    note: "Start & Zahlung sicher über Skool · {yearly} im Jahr, alles inklusive · keine versteckten Kosten",
    secondary: "Programm & Preise",
  },

  video: {
    caption: "In 90 Sekunden verstehen",
    play: "Vorstellungsvideo abspielen",
    alt: "Faith und Hannah stellen medIQ lab vor",
    unsupported: "Dein Browser kann dieses Video nicht abspielen.",
    min: "min",
  },

  chat: {
    name: "medIQ lab Berater",
    status: "Antwortet sofort",
    open: "medIQ lab Berater öffnen",
    close: "Chat schließen",
    teaser: "Passt medIQ lab zu dir? Frag mich, ich helf dir in unter einer Minute. 👋",
    cta: {
      methode: "So funktioniert die Methode",
      methode2: "Die Methode ansehen",
      programm: "Programm & Preise",
      programm2: "Programm ansehen",
      kontakt: "Zur Kontaktseite",
    },
    options: {
      fear: "Angst vor der nächsten Prüfung",
      method: "Ich lerne viel, es bleibt nichts hängen",
      cost: "Kein Wiederholungsjahr riskieren",
      price: "Was kostet das?",
      priceExact: "Was kostet das genau?",
      who: "Für wen ist das?",
      fit: "Passt das zu mir?",
      contact: "Lieber persönlich fragen",
      restart: "Nochmal von vorn",
    },
    nodes: {
      start: ["Hey 👋 Ich zeig dir in unter einer Minute, ob medIQ lab zu dir passt.", "Was trifft gerade am ehesten auf dich zu?"],
      fear: [
        "Kenn ich, und es ist fast nie ein Wissensproblem.",
        "In medIQ lab bekommst du Prüfungsstrategie, Altfragen-Logik und konkrete Werkzeuge gegen den Druck, damit du ruhiger reingehst.",
      ],
      method: [
        "Dann liegt es fast immer an der Methode, nicht am Fleiß.",
        "Mit aktivem Abrufen und Spaced Repetition sitzt der Stoff wirklich, statt dreimal gelesen und wieder weg.",
      ],
      cost: [
        "Verständlich, das ist die teuerste Art, Zeit zu verlieren.",
        "Ein Wiederholungsjahr kostet an Privat- und Auslands-Unis schnell {lost}. Ein Jahr medIQ lab: {yearly}, und es soll dir genau das ersparen.",
      ],
      price: [
        "Ein Preis, alles drin:",
        "{yearly} im Jahr, das sind rund {monthly} im Monat. Community und alle Workshops sind enthalten.",
        "Dazu: Videoreihen, wöchentliche Live Events, Gastvorträge von Ärzt:innen, Prüfungssimulationen, Downloads und KI-Lernapp.",
        "Anmeldung läuft sicher über Skool.",
      ],
      who: [
        "Für Medizinstudierende in Deutschland und im EU-Ausland, ob staatlich oder privat, vom ersten Semester bis zum Examen.",
        "Wenn du viel lernst und trotzdem das Gefühl hast, es reicht nicht: genau für dich.",
      ],
      contact: ["Klar. Schreib uns einfach über die Kontaktseite, wir antworten ehrlich und ohne Verkaufsdruck."],
    },
  },

  pageMethode: {
    title: "Methode",
    description:
      "Die Methode hinter medIQ lab: die vier Säulen des Studienerfolgs, Lernsystem, Prüfungsstrategie, Stress & Resilienz und Netzwerk, lernpsychologisch fundiert. Klüger lernen statt härter, in Deutschland und im Ausland.",
    intro: {
      eyebrow: "Die Methode",
      title: "Eine Methode mit Fundament, *kein Bauchgefühl.*",
      lead: "medIQ lab ist keine Sammlung von Motivationssprüchen. Dahinter steht, wie Lernen nachweislich funktioniert, und wie du dir das im Medizinstudium konsequent zunutze machst.",
      ctaProgramm: "Programm ansehen",
    },
    problem: {
      eyebrow: "Du kennst das",
      title: "Es liegt nicht daran, dass du zu wenig lernst.",
      lead: "Die meisten Medizinstudierenden arbeiten hart, nur selten mit einem System, das wirklich trägt. Genau hier setzt medIQ lab an.",
      imageAlt: "Konzentrierte:r Studierende:r am Laptop",
      pains: [
        { title: "Erschlagen von der Stofffülle", body: "Tausende Seiten, hunderte Vorlesungen, und niemand zeigt dir, was wirklich prüfungsrelevant ist." },
        { title: "Lernen ohne System", body: "Du liest, markierst, liest nochmal, und vergisst es bis zur Prüfung wieder. Fleiß ohne Methode verpufft." },
        { title: "Prüfungsangst & Blackouts", body: "Du kannst den Stoff eigentlich, aber unter Druck ist plötzlich alles weg." },
        { title: "Drohende Wiederholungsprüfungen", body: "Ein Fehlversuch, und das ganze Semester wackelt. Die Angst lernt mit." },
        { title: "Verlorene Semester & Lebenszeit", body: "Jedes verlorene Semester heißt: mehr Miete, mehr Lebenshaltungskosten, späterer Berufseinstieg." },
        { title: "Hohe Studiengebühren im Ausland", body: "An Privat- und Auslands-Unis kostet ein Wiederholungsjahr schnell {lost}, zusätzlich." },
      ],
      quote: "Das ist kein Talent-Problem. Es ist ein *Methoden-Problem*.",
      quoteSub: "Und Methoden kann man lernen, schneller, als du denkst.",
    },
    principles: {
      eyebrow: "Die vier Säulen",
      title: "Dein Studienerfolg steht auf vier Säulen.",
      lead: "Lernsystem, Prüfungsstrategie, Stress & Resilienz und Netzwerk. Sie bilden die Grundlage für nachhaltigen Studienerfolg, und wir helfen dir, jede einzelne gezielt zu verbessern. Das ist der Unterschied zwischen härter lernen und klüger lernen.",
      research: "Die Lernstrategie-Workshops stützen sich auf etablierte lernpsychologische Forschung, unter anderem zum Testing-Effekt (Karpicke & Roediger) und zum verteilten Lernen (Cepeda et al.).",
    },
    practice: {
      eyebrow: "In der Praxis",
      title: "Vom Prinzip zum Studienalltag",
      subtitle: "Prinzipien allein bestehen keine Prüfung. In medIQ lab werden sie zu konkreten Werkzeugen, die du ab Tag 1 anwendest.",
      cta: "Alle Inhalte ansehen",
      items: [
        { title: "Anki, Karteikarten & KI-Lernapp", body: "Active Recall und Spaced Repetition werden konkret: Karten, die den Stoff wirklich abprüfen, fertige Lernzettel und unsere KI-Lernapp, die dich beim Abfragen und Wiederholen bis zum Examen begleitet." },
        { title: "Persönliche Lernpläne & Wochenstruktur", body: "Aus Prinzipien wird ein Plan: eine Wochenstruktur, die neben Klinik und Nebenjob durchhält, statt guter Vorsätze, die nach zwei Wochen kippen." },
        { title: "Altfragen-Analyse & mündliche Prüfungssimulation", body: "Prüfungsmuster erkennen, Schwerpunkte ableiten und die mündliche Prüfung unter realistischen Bedingungen proben, damit sie kein Blindflug wird." },
        { title: "Werkzeuge für den Kopf", body: "Prüfungsangst, Druck und Aufschieben begegnest du mit Methoden, die im Ernstfall funktionieren, nicht mit „reiß dich zusammen“." },
      ],
    },
    cta: {
      eyebrow: "Bereit?",
      title: "Lern ab heute mit *Methode.*",
      subtitle: "Die Prinzipien sind die halbe Miete, die andere Hälfte ist die Umsetzung mit System und Community. Genau dafür gibt es medIQ lab.",
      secondary: "Programm & Preise",
    },
  },

  pageProgramm: {
    title: "Programm",
    description:
      "Die medIQ lab Mitgliedschaft für Medizinstudierende in Deutschland und im EU-Ausland: Workshop-Reihe, Videoreihen, wöchentliche Live Events, Downloads und KI-Lernapp, alles in einem Preis. Anmeldung und Inhalte laufen über Skool.",
    intro: {
      eyebrow: "Das Programm",
      title: "Dein vollständiges System, *vom Lernsystem bis zum Examen.*",
      lead: "Eine Mitgliedschaft, alles drin: Workshop-Reihe, Videoreihen, wöchentliche Live Events wie Study Together und Community-Café, Gastvorträge von Ärzt:innen, mündliche Prüfungssimulationen, Downloads und unsere eigene KI-Lernapp. Für Medizinstudierende in Deutschland und im EU-Ausland, ob privat oder staatlich.",
      ctaMethod: "Erst die Methode ansehen",
    },
    vsl: {
      eyebrow: "90 Sekunden, die sich lohnen",
      title: "Faith und Hannah stellen medIQ lab vor",
      subtitle: "In anderthalb Minuten erfährst du, wer hinter medIQ lab steht, was dich in der Community erwartet und warum wir das machen. Direkt von den Gründerinnen.",
      ctaAbout: "Mehr über uns",
    },
    modules: {
      eyebrow: "Was du bekommst",
      title: "Alles, was in der Mitgliedschaft steckt",
      lead: "So werden die vier Säulen konkret: Workshop-Reihe, Videoreihen, wöchentliche Live Events und fertige Downloads, dazu unsere eigene KI-Lernapp. Alles in einem Preis.",
      imgHeart: "Anatomisches Herzmodell",
      imgMicroscope: "Mikroskop im Labor",
      appTitle: "Plus: unsere eigene KI-Lernapp",
      appBody: "Abfragen, wiederholen, strukturieren: Die medIQ lab KI-Lernapp begleitet dich zwischen den Events und ist in der Mitgliedschaft enthalten.",
      note: "Alle Termine, Aufzeichnungen und Materialien findest du im geschützten Bereich, direkt in der medIQ lab Community auf Skool.",
    },
    formats: [
      {
        title: "Workshop-Reihe",
        sub: "Etwa zweimal pro Semester, live",
        items: ["2 bis 3 Workshops zu Lernstrategien", "Workshop Stress & Resilienz", "Workshop Finanzen, Versicherungen & Co."],
      },
      {
        title: "Videoreihen",
        sub: "Ergänzend zu jedem Workshop",
        items: ["Lernstrategien, Lernapps & Optimierung des Studiums", "Stress & Resilienz", "Finanzen, Versicherungen & Co."],
      },
      {
        title: "Live Events",
        sub: "Jede Woche",
        items: [
          "Study Together, mindestens 1× pro Woche",
          "Community-Café, 1× pro Woche",
          "Lernplanerstellung & Q&As",
          "Live-Quiz, z. B. Anatomie",
          "Gastvorträge von Ärztinnen & Ärzten",
          "Mündliche Prüfungssimulation",
          "High-Yield Hour zu Themen aus der Community",
          "Klinische Fallbesprechungen (folgt)",
        ],
      },
      {
        title: "Downloads",
        sub: "Sofort nutzbar",
        items: ["Semesterplaner", "Lernzettel, Start: Muskeln & Skelett", "Klausur-Leitfaden"],
      },
    ],
    pricing: {
      eyebrow: "So kommst du rein",
      title: "Ein Preis, alles drin",
      subtitle: "Eine Jahresmitgliedschaft mit allem, was du brauchst: Community und alle Workshops inklusive. Anmeldung und Zahlung laufen sicher über Skool.",
      imgAlt: "Lernende Gruppe im Gespräch",
      badge: "Alles inklusive",
      plan: "Jahresmitgliedschaft",
      blurb: "Dein vollständiges System für ein ganzes Studienjahr. Community und alle Workshops sind enthalten, es gibt nichts dazuzukaufen.",
      perYear: "/ Jahr",
      perMonth: "Entspricht rund {monthly} im Monat.",
      compare: "Zum Vergleich: Ein einziges verlorenes Semester kostet schnell ein Vielfaches an Miete, Lebenshaltung und verlorener Zeit. An Privat- und Auslands-Unis kommt ein Wiederholungsjahr von {lost} obendrauf. Die Mitgliedschaft rechnet sich schon, wenn sie dir ein einziges verlorenes Semester erspart.",
      included: [
        "Zugang zur medIQ lab Community auf Skool",
        "Workshop-Reihe: Lernstrategien, Stress & Resilienz, Finanzen",
        "Videoreihen ergänzend zu jedem Workshop",
        "Study Together & Community-Café, jede Woche",
        "Q&As, Live-Quiz & Lernplanerstellung",
        "Gastvorträge von Ärztinnen & Ärzten",
        "Mündliche Prüfungssimulationen",
        "Semesterplaner, Lernzettel & Klausur-Leitfaden",
        "Unsere eigene KI-Lernapp",
      ],
      ctaNote: "Jährlich · sicher über Skool · alles inklusive",
      note: "Hinweis: Alle Inhalte, Anmeldung und Zahlung laufen in Skool. Diese Seite informiert und leitet dich dorthin weiter.",
    },
    cta: {
      eyebrow: "Loslegen",
      title: "Ein Preis, *alles drin.*",
      subtitle: "Anmeldung, Zahlung und alle Inhalte laufen sicher über Skool. Diese Seite informiert dich und leitet dich dorthin weiter.",
      secondary: "Offene Fragen? Zur FAQ",
    },
  },

  pageUeber: {
    title: "Über uns",
    description:
      "Wir stellen uns vor: Faith und Hannah, zwei Medizinstudentinnen mit einer gemeinsamen Mission, das Medizinstudium strukturierter, effektiver und ein Stück stressfreier zu machen. Unsere Mission, unsere vier Säulen, unsere Prinzipien.",
    intro: {
      eyebrow: "Wir stellen uns vor",
      title: "Studieren muss man *nicht alleine.*",
      lead: "Hinter medIQ lab stehen Faith und Hannah, zwei Medizinstudentinnen mit einer gemeinsamen Idee: das Medizinstudium strukturierter, effektiver und vor allem ein Stück stressfreier zu machen.",
    },
    who: {
      eyebrow: "Wer wir sind",
      title: "Faith und Hannah",
      imgAlt: "Faith und Hannah, die Gründerinnen von medIQ lab",
      p1: "Wir sind zwei Medizinstudentinnen mit der gleichen Mission: Studierenden das Lernen einfacher, strukturierter und effektiver zu machen.",
      p2: "Wir wissen aus eigener Erfahrung, wie sich das Medizinstudium anfühlt, und haben daraus ein System gebaut, das wirklich trägt: vom Lernsystem über die Prüfungsstrategie bis zur Community, die den Unterschied auf der langen Strecke macht.",
      quote: "Mehr als Lernen. *Eine Community.*",
      cta: "Das ganze Team ansehen",
    },
    labels: { year: "Studienjahr:", subjects: "Lieblingsfächer:", motivation: "Das motiviert mich", founderAlt: "{name}, Gründerin von medIQ lab" },
    founders: [
      {
        name: "Hannah",
        file: "hannah.jpg",
        year: "4. Studienjahr",
        subjects: ["Physiologie", "Simulation Medicine"],
        motivation: "Meine Motivation ist die Vision, das Medizinstudium durch gezielte Unterstützung stressfreier, effizienter und erfolgreicher zu meistern. Ich möchte anderen Studierenden genau die Werkzeuge und das Wissen an die Hand geben, die ich mir selbst zu Beginn meines Studiums gewünscht hätte. Denn niemand sollte sich im extremen Lernalltag alleine durchkämpfen müssen.",
      },
      {
        name: "Faith",
        file: "faith.jpg",
        year: "4. Studienjahr",
        subjects: ["Simulation Medicine", "Pathophysiologie"],
        motivation: "Meine Motivation ist es, Studierende so zu unterstützen, dass möglichst wenige von ihnen durch Prüfungen fallen. Gerade im ersten Studienjahr testen viele mühsam verschiedene Ansätze aus. Wer früh die passende Lernstrategie findet, senkt die eigene Durchfallquote, und spart wertvolle Zeit, Geld und Nerven.",
      },
    ],
    mission: {
      eyebrow: "Unsere Mission",
      title: "Weniger verlorene Semester. Mehr sichere Abschlüsse.",
      lead: "Jedes verlorene Semester kostet nicht nur Zeit, sondern Geld, Nerven und oft ein Stück Selbstvertrauen. An Privat- und Auslands-Unis kommen schnell Wiederholungsjahre von {lost} dazu. Das muss nicht sein.",
      points: [
        "Gemeinsam mit dir deinen eigenen Lernweg finden.",
        "Einen Raum schaffen, in dem ihr euch gegenseitig unterstützt und voneinander lernt.",
        "Eine Study-Life-Balance schaffen, die später im Beruf zur Work-Life-Balance wird.",
      ],
      quote: "Gute Medizin braucht Menschen, die durchhalten, *nicht ausbrennen.*",
    },
    pillarsSection: {
      eyebrow: "Unser Konzept",
      title: "Die vier Säulen des Studienerfolgs",
      subtitle: "Lernsystem, Prüfungsstrategie, Stress & Resilienz und Netzwerk. Sie bilden die Grundlage für nachhaltigen Studienerfolg, und wir helfen dir, jede einzelne gezielt zu verbessern.",
      cta: "Programm & Preis ansehen",
    },
    values: {
      eyebrow: "Was uns leitet",
      title: "Vier Prinzipien, die wir ernst meinen",
      subtitle: "Sie stehen nicht nur hier, sie entscheiden, wie wir Inhalte bauen und mit dir kommunizieren.",
      items: [
        { title: "Wissenschaft statt Bauchgefühl", body: "Wir bauen auf lernpsychologisch belegte Prinzipien, nicht auf Motivations-Zitate oder das nächste Wundertool." },
        { title: "Methode statt Talent-Mythos", body: "Bestehen ist keine Frage angeborener Genialität, sondern erlernbarer Systeme. Das nimmt Druck und macht dich unabhängig." },
        { title: "Ehrlichkeit statt Hype", body: "Keine garantierten Bestehens-Versprechen, keine erfundene Verknappung. Wir sagen, was realistisch ist, und was nicht." },
        { title: "Gemeinsam statt Einzelkämpfer", body: "Studium ist ein Marathon. Eine Community, die dich trägt und verbindlich hält, macht den Unterschied auf der langen Strecke." },
      ],
    },
    cta: {
      eyebrow: "Mitmachen",
      title: "Werde Teil von *medIQ lab.*",
      subtitle: "Wenn dich das überzeugt, ist der beste nächste Schritt der einfachste: komm in die Community und leg los.",
      secondary: "Die Methode ansehen",
    },
  },

  pageTeam: {
    title: "Team",
    description:
      "Die Menschen hinter medIQ lab: Faith und Hannah, Medizinstudentinnen und Gründerinnen, plus ein Team aus Coaching und Social Media, das dich durchs Medizinstudium begleitet, in Deutschland und im Ausland.",
    intro: {
      eyebrow: "Das Team",
      title: "Die Menschen hinter *medIQ lab.*",
      lead: "Kein anonymes Programm, sondern ein Team, das selbst mitten im Medizinstudium steckt, weiß, wie es sich anfühlt, und dich mit Methode, Coaching und einer starken Community begleitet.",
    },
    faceEyebrow: "Das Gesicht von medIQ lab",
    teamEyebrow: "Dahinter",
    teamTitle: "Das Team dahinter",
    leads: [
      { name: "Faith", role: "Gründerin & Medizinstudentin", file: "faith.jpg" },
      { name: "Hannah", role: "Gründerin & Medizinstudentin", file: "hannah.jpg" },
    ],
    team: [
      { name: "Daniela", role: "Heilpraktikerin, Entspannungstherapeutin, Life- & Businesscoach", file: "daniela.jpg" },
      { name: "Jessi", role: "Social Media", file: "jessi.jpg" },
      { name: "Lisi", role: "Social Media", file: "lisi.jpg" },
    ],
    cta: {
      eyebrow: "Lern uns kennen",
      title: "Werde Teil von *medIQ lab.*",
      subtitle: "Hinter medIQ lab stehen echte Menschen, die dich durchs Studium begleiten. Komm in die Community und lern uns kennen.",
      secondary: "Die Methode ansehen",
    },
  },

  pageFaq: {
    title: "FAQ",
    description:
      "Antworten auf die häufigsten Fragen zu medIQ lab: Für wen es ist (Deutschland und EU-Ausland), wie Anmeldung und Zahlung über Skool laufen, was die Jahresmitgliedschaft kostet (399 €, alles inklusive), und was wir bewusst nicht versprechen.",
    intro: {
      eyebrow: "FAQ",
      title: "Was du noch wissen willst",
      lead: "Die häufigsten Fragen zu Ablauf, Zugang, Preisen und dazu, was medIQ lab realistisch leisten kann, ehrlich beantwortet.",
      ctaContact: "Frage nicht dabei? Kontakt",
    },
    items: [
      {
        q: "Für wen ist medIQ lab?",
        a: "Für Medizinstudierende in Deutschland und im EU-Ausland, ob staatliche oder private Uni, vom ersten Semester bis zum Examen. Wenn du viel lernst und trotzdem das Gefühl hast, es reicht nicht, wenn du Prüfungen sicher bestehen und teure Verzögerungen vermeiden willst, bist du richtig.",
      },
      {
        q: "Funktioniert das auch, wenn ich in Deutschland studiere?",
        a: "Ja, ausdrücklich. medIQ lab ist für beides gebaut. Die Methoden sind unabhängig von Standort und Curriculum, und Workshops, Live Events, Downloads und KI-Lernapp nutzt du online, egal ob du in Heidelberg, Wien oder Pécs studierst.",
      },
      {
        q: "Was kostet die Mitgliedschaft?",
        a: "{yearly} im Jahr, alles inklusive: Community, Workshop-Reihe, Videoreihen, wöchentliche Live Events wie Study Together und Community-Café, Gastvorträge, Prüfungssimulationen, Downloads und die KI-Lernapp. Es gibt keine versteckten Extras und keine Upsells.",
      },
      {
        q: "Gibt es Rabatte oder eine Garantie?",
        a: "Es gibt einen Campus-Rabatt, sprich uns dazu einfach in der Community oder über die Kontaktseite an. Eine Bestehens-Garantie gibt es nicht, weil sie niemand seriös geben kann.",
      },
      {
        q: "Lohnt sich der Preis wirklich?",
        a: "Rechne ehrlich gegen: Ein einziges verlorenes Semester kostet dich Monate an Miete und Lebenshaltung plus einen späteren Berufseinstieg. An Privat- und Auslands-Unis kommt ein Wiederholungsjahr von oft {lost} dazu. Gemessen daran sind {yearly} im Jahr eine Investition, die sich schon rechnet, wenn sie dir ein einziges verlorenes Semester erspart.",
      },
      {
        q: "Wie laufen Anmeldung und Zahlung ab?",
        a: "Anmeldung und Zahlung erfolgen vollständig und sicher über Skool. Du klickst auf einen der Buttons, landest in der medIQ lab Community auf Skool und schließt dort die Jahresmitgliedschaft ab. Diese Website wickelt keine Zahlung ab.",
      },
      {
        q: "Bekomme ich „garantiert bestehen“?",
        a: "Nein, und jeder, der das verspricht, ist unseriös. Bestehen hängt von dir ab. Was wir liefern, ist ein erprobtes System und eine Community, die deine Chancen messbar verbessern, indem du klüger statt nur härter lernst.",
      },
    ],
    cta: {
      eyebrow: "Noch Fragen?",
      title: "Alles geklärt? *Dann los.*",
      subtitle: "Wenn deine Frage offen geblieben ist, schreib uns kurz, wir helfen dir weiter, bevor du dich entscheidest.",
      secondary: "Kontakt aufnehmen",
    },
  },

  pageKontakt: {
    title: "Kontakt",
    description: "Fragen zu medIQ lab, zur Methode oder zur Mitgliedschaft? Schreib uns, oder komm direkt in die Community auf Skool.",
    intro: {
      eyebrow: "Kontakt",
      title: "Sprich mit uns, *bevor du dich entscheidest.*",
      lead: "Ob Frage zur Methode, zur Mitgliedschaft, zum Campus-Rabatt oder zum Zugang: Wir antworten dir ehrlich und ohne Verkaufsdruck. Am schnellsten erreichst du uns direkt in der Community.",
    },
    community: {
      title: "Community auf Skool",
      body: "Der schnellste Draht: Stell deine Frage direkt in der medIQ lab Community, oft antworten dir auch andere Mitglieder.",
      cta: "Zur Community",
    },
    email: { title: "E-Mail", body: "Lieber klassisch? Schreib uns direkt." },
    note: "Wir antworten in der Regel innerhalb weniger Werktage. Für Anmeldung und Zahlung geht es direkt über Skool, diese Seite wickelt keine Zahlung ab.",
    form: {
      title: "Schreib uns",
      sub: "Wir melden uns persönlich zurück.",
      honeypot: "Nicht ausfüllen:",
      name: "Name",
      email: "E-Mail",
      topic: "Worum geht’s?",
      optional: "(optional)",
      topicPlaceholder: "z. B. Frage zur Mitgliedschaft",
      message: "Nachricht",
      submit: "Nachricht senden",
      consent: "Mit dem Absenden stimmst du der Verarbeitung deiner Angaben zur Bearbeitung deiner Anfrage zu (siehe Datenschutz).",
    },
  },

  legal: {
    impressum: "Impressum",
    datenschutz: "Datenschutzerklärung",
    /** Hinweis auf nicht-deutschen Seiten (Rechtstexte bleiben Deutsch). Für de leer. */
    notice: "",
  },
};

export type Dict = typeof de;
