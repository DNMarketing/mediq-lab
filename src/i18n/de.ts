/**
 * Deutsches Wörterbuch = Referenz. Alle anderen Sprachen sind als `Dict`
 * typisiert und müssen exakt dieselben Schlüssel haben (TypeScript meckert
 * sonst). Auszeichnung: *kursiv*, \n = Umbruch, {monthly}/{lernplan}/{lost}/
 * {spots} = Platzhalter (siehe `money` und `fill()`).
 */
export const de = {
  money: {
    monthly: "34,99 €",
    lernplan: "49 €",
    lost: "10.000 bis 20.000 €",
  },

  meta: {
    titleDefault: "medIQ lab: Lernsystem und Community fürs Medizinstudium",
    titleTemplate: "%s · medIQ lab",
    description:
      "Lern-Community für Medizinstudierende in Deutschland und im EU-Ausland: Workshops zu Lernstrategien und Resilienz, wöchentliche Live-Events, Lernzettel.",
    ogTitle: "medIQ lab: Lern-Community fürs Medizinstudium",
    ogDescription:
      "Lernsystem und Community für Medizinstudierende in Deutschland und im Ausland: Workshops, Videoreihen, Lernzettel und wöchentliche Live-Events auf Skool.",
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
    infoCall: "Kostenloses Infogespräch",
    toApp: "Zur KI-App",
  },

  nav: {
    methode: "Methode",
    programm: "Programm",
    team: "Team",
    ueber: "Über uns",
    faq: "FAQ",
    kontakt: "Kontakt",
    shop: "Shop",
    app: "KI-App",
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
    eyebrow: "Faith & Hannah · Gründerinnen von medIQ lab",
    title: "Das Lernsystem fürs Medizinstudium,\n*das wir uns selbst gewünscht hätten.*",
    lead:
      "Wir sind Faith und Hannah und studieren selbst Medizin, im 4. Studienjahr. Bei medIQ lab bekommst du, was uns am Anfang gefehlt hat: Lernmethodik, Prüfungsstrategie, unsere eigene KI-Lernapp und eine Community, die dich trägt. Egal ob du in Deutschland oder im EU-Ausland studierst.",
    note: "Infogespräch kostenlos · Community {monthly} im Monat über Skool",
    imgAlt: "Faith (links) und Hannah (rechts), die Gründerinnen von medIQ lab, im Arztkittel mit Stethoskop",
    videoCta: "Uns im Video kennenlernen",
  },

  homeFounders: {
    eyebrow: "Das Gesicht von medIQ lab",
    title: "Hi, wir sind *Faith und Hannah.*",
    lead: "Zwei Medizinstudentinnen mit einer Mission: das Medizinstudium strukturierter, effektiver und ein Stück stressfreier machen. Im Video erzählen wir dir in 90 Sekunden, warum wir medIQ lab gegründet haben.",
    quotes: [
      { name: "Faith", text: "Wer früh die passende Lernstrategie findet, fällt seltener durch und spart Zeit, Geld und Nerven." },
      { name: "Hannah", text: "Ich möchte dir genau die Werkzeuge geben, die ich mir selbst zu Beginn meines Studiums gewünscht hätte." },
    ],
    cta: "Mehr über uns",
  },

  journey: {
    eyebrow: "So begleiten wir dich",
    title: "In drei Schritten *zu deinem Lernsystem.*",
    subtitle:
      "Erst schauen wir gemeinsam, wo du stehst. Dann lernst du mit uns und der Community. Und wenn du magst, bleiben wir jeden Monat an deiner Seite.",
    step: "Schritt",
    optional: "Auf Wunsch",
    steps: [
      {
        title: "Statusanalyse",
        body: "Im kostenlosen Infogespräch schauen wir uns an, wo du gerade stehst: Semester, anstehende Prüfungen und wie du bisher lernst. Auf Wunsch erstellen wir dir daraus deinen persönlichen Lernplan.",
        meta: "Infogespräch kostenlos · Lernplan {lernplan}",
        cta: "Infogespräch buchen",
      },
      {
        title: "Workshops & Live-Events",
        body: "In der Community setzt du deinen Plan um: Workshops zu Lernstrategien und Resilienz, Study Together, Live-Quiz und Gastvorträge von Ärztinnen und Ärzten. Jede Woche live.",
        meta: "{monthly} im Monat über Skool",
        cta: "Zur Community",
      },
      {
        title: "Monatliche Check-ups",
        body: "Einmal im Monat schauen wir gemeinsam auf deinen Plan: Was läuft, wo hakt es, was steht als Nächstes an? So bleibt dein Lernsystem aktuell, auch wenn sich das Semester ändert.",
        meta: "Optional, sprich uns im Infogespräch darauf an",
        cta: "Im Infogespräch anfragen",
      },
    ],
    lernplanCta: "Lernplan buchen",
  },

  appShowcase: {
    eyebrow: "Unsere KI-Lernapp",
    title: "Dein Stoff als Lernpfad. *Prof. MedIQ erklärt, wenn es hakt.*",
    subtitle:
      "Unsere eigene Lernapp führt dich Level für Level durch jedes Fach bis zur Abschlussklausur. Was du falsch beantwortest, landet in der Fehler-Arena, bis es sitzt. Auf Deutsch und Englisch.",
    tabsLabel: "Funktionen der App",
    tabs: [
      {
        label: "Lernpfad",
        title: "Jedes Fach als Weltkarte",
        body: "Level für Level bis zur Abschlussklausur. Prof. MedIQ zeigt dir, wo du stehst und was als Nächstes kommt.",
        alt: "medIQ lab App: Weltkarte eines Fachs mit Lektion und Abschlussklausur",
      },
      {
        label: "KI-Erklärungen",
        title: "Erklärt, wie du es brauchst",
        body: "Nach jeder Frage kannst du im Material nachlesen, nachfragen oder dir den Inhalt als Bild, Schaubild, Gegenüberstellung, Eselsbrücke oder Merkgeschichte erklären lassen.",
        alt: "medIQ lab App: richtig beantwortete Frage mit KI-Hilfen wie Eselsbrücke und Merkgeschichte",
      },
      {
        label: "Fehler-Arena",
        title: "Wissenslücken gezielt schließen",
        body: "Falsch beantwortete Fragen sammeln sich in der Fehler-Arena. Erst wenn du alle besiegt hast, ist die Abschlussklausur frei.",
        alt: "medIQ lab App: Fehler-Arena, alle Fehler besiegt, Abschlussklausur freigeschaltet",
      },
      {
        label: "Fortschritt",
        title: "Dein Lernstand auf einen Blick",
        body: "Lernzeit der Woche, Lern-Streak und Erfolgsquote, dazu alle aktiven Fächer. In Liga und Duellen misst du dich mit anderen.",
        alt: "medIQ lab App: Statistik mit Lernzeit, Lern-Streak, Erfolgsquote und aktiven Fächern",
      },
    ],
    features: ["Deutsch & Englisch", "Multiple Choice & Freitext", "Liga & Duelle"],
    cta: "Zur KI-App",
  },

  communityShowcase: {
    eyebrow: "Einblick in die Community",
    title: "So sieht es *in der Community aus.*",
    subtitle:
      "Kurse, Lernzettel und ein voller Kalender mit Workshops, Study Together und Live-Quiz. Alles an einem Ort, auf Skool.",
    courses: {
      title: "Klassenzimmer",
      body: "Start hier, Semesterplaner und Lernzettel zu Anatomie (Deutsch und Englisch) und Biochemie.",
      alt: "Skool-Klassenzimmer der medIQ lab Community mit Kursen wie Semesterplaner, Lernzettel Anatomie und Lernzettel Biochemie",
    },
    calendar: {
      title: "Kalender",
      body: "Workshops wie Stress & Resilienz oder SOS Anatomie, regelmäßig Study Together und Live-Quiz, zum Beispiel zum EKG.",
      alt1: "Kalender der medIQ lab Community: Workshop Stress und Resilienz, Study Together, Anatomie-Workshop",
      alt2: "Kalender der medIQ lab Community: EKG-Live-Quiz, Study Together, Workshop zum Lernen über die Feiertage",
    },
    caption: "Screenshots aus der medIQ lab Community auf Skool, Stand November 2026.",
    cta: "Community beitreten",
  },

  shopTeaser: {
    eyebrow: "Neu im Shop · ab Dezember",
    title: "Der Anatomie *Survival Guide.*",
    body: "Unser erstes digitales Produkt, auf Deutsch und Englisch. Trag dich ein, dann sagen wir dir Bescheid, sobald er erhältlich ist.",
    cta: "Zum Shop",
  },

  problemTeaser: {
    eyebrow: "Das Problem",
    title: "Es liegt nicht daran, dass du *zu wenig lernst.*",
    lead: "Die meisten scheitern nicht am Fleiß, sondern am fehlenden System. Drei Symptome, die fast jede:r im Medizinstudium kennt.",
    symptom: "Symptom",
    figure: "Abb.",
    pains: [
      {
        title: "Erschlagen von der Stofffülle",
        body: "Tausende Seiten, hunderte Vorlesungen, und niemand zeigt dir, was davon wirklich geprüft wird.",
        caption: "Schematisch: der Stoff eines Semesters und der Teil, auf den es in der Prüfung ankommt.",
      },
      {
        title: "Lesen, markieren, wieder vergessen",
        body: "Was du nur liest und markierst, ist nach wenigen Tagen zum großen Teil wieder weg. Fleiß ohne System verpufft.",
        caption: "Schematisch, nach der Vergessenskurve von Hermann Ebbinghaus (1885).",
      },
      {
        title: "Ein Fehlversuch zieht Kreise",
        body: "Erst die Wiederholungsprüfung, dann mehr Druck, im schlimmsten Fall ein Wiederholungsjahr. An Privat- und Auslands-Unis kostet das schnell {lost}.",
        caption: "Wie sich ein einziger Fehlversuch ausbreiten kann.",
      },
    ],
    matrix: { all: "Stoff im Semester", exam: "Was wirklich geprüft wird" },
    curve: {
      retention: "Behalten",
      start: "Lerntag",
      exam: "Prüfung",
      passive: "Nur lesen & markieren",
      spaced: "Wiederholen nach System",
    },
    ripple: ["Ein Fehlversuch", "Wiederholungsprüfung", "Mehr Druck", "Wiederholungsjahr"],
    diagnosis: "Diagnose",
    quote: "Kein Talent-Problem. Ein *Methoden-Problem.*",
    quoteSub: "Und Methoden kann man lernen, schneller, als du denkst.",
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
      body: "Riesige Stoffmengen in kurzer Zeit, Versagensängste, oft weit weg von Familie und gewohntem Umfeld, und das Gefühl, nie genug getan zu haben. Wir vermitteln Methoden, mit denen du effizient lernst, ohne deine mentale Gesundheit zu gefährden: resilient mit Prüfungsangst und Rückschlägen umgehen, aktive Pausen und Mindset-Tools fest im Alltag verankern. Kein kurzfristiges Durchpowern, sondern gesund und motiviert bis zur Approbation. Unsere Workshops ersetzen keine psychologische oder ärztliche Behandlung. Wenn Angst dich dauerhaft blockiert, wende dich an die psychologische Beratung deiner Hochschule oder deines Studierendenwerks.",
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
    line1: "Ein Wiederholungsjahr an einer Privat- oder Auslandsuni kostet schnell",
    value1: "{lost}.",
    line2: "Ein Monat medIQ lab:",
    value2: "{monthly}.",
    text: "Die Frage ist nicht, ob du dir medIQ lab leisten kannst, sondern ob du dir ein verlorenes Jahr leisten willst.",
  },

  offer: {
    eyebrow: "So kommst du rein",
    title: "Ein Preis, alles drin",
    subtitle:
      "Eine Mitgliedschaft mit Community, Workshops, Videoreihen, wöchentlichen Live-Events, Downloads und KI-Lernapp.",
    plan: "Mitgliedschaft",
    badge: "Alles inklusive",
    blurb: "Community und alle Workshops, ein Preis im Monat.",
    per: "/ Monat",
    billing: "Monatlich, sicher über Skool.",
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
    extra: "Optional dazu: deine persönliche Lernplan-Erstellung für {lernplan}.",
    extraCta: "Lernplan buchen",
  },

  faqTeaser: {
    eyebrow: "Bevor du dich entscheidest",
    title: "Die häufigsten Fragen",
    items: [
      {
        q: "Lohnt sich der Preis wirklich?",
        a: "Rechne ehrlich gegen: Ein verlorenes Semester kostet Monate an Miete und Lebenshaltung, und an Privat- und Auslands-Unis kostet ein Wiederholungsjahr schnell {lost}. Gemessen daran rechnen sich {monthly} im Monat schon, wenn sie dir ein einziges verlorenes Semester ersparen.",
      },
      {
        q: "Ich studiere in Deutschland, passt das?",
        a: "Ja, ausdrücklich. medIQ lab ist für Medizinstudierende in Deutschland und im EU-Ausland gebaut. Die Methoden sind unabhängig von Standort und Curriculum, und Workshops, Live-Events, Downloads und KI-Lernapp nutzt du online.",
      },
      {
        q: "Wie laufen Anmeldung und Zahlung ab?",
        a: "Vollständig und sicher über Skool. Du klickst auf einen Button, landest in der medIQ lab Community und schließt dort die Mitgliedschaft ab. Diese Website wickelt keine Zahlung ab.",
      },
    ],
    all: "Alle Fragen & Antworten",
  },

  cta: {
    eyebrow: "medIQ lab",
    title: "Lern ab heute klüger, *nicht härter.*",
    subtitle:
      "Jedes Semester, das du jetzt sicherst, ist Zeit und Geld, das du nicht verlierst. Tritt der medIQ lab Community bei und bau dein Lernsystem mit Workshops, wöchentlichen Live-Events und Lernzetteln auf.",
    note: "Start & Zahlung sicher über Skool · {monthly} im Monat, alles inklusive · keine versteckten Kosten",
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
    name: "medIQ lab Assistent",
    status: "Automatischer Chat, antwortet sofort",
    open: "medIQ lab Assistent öffnen",
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
        "Mit aktivem Abrufen und Spaced Repetition behältst du den Stoff länger, statt ihn dreimal zu lesen und wieder zu vergessen.",
      ],
      cost: [
        "Verständlich, das ist die teuerste Art, Zeit zu verlieren.",
        "Ein Wiederholungsjahr kostet an Privat- und Auslands-Unis schnell {lost}. medIQ lab kostet {monthly} im Monat, und soll dir genau das ersparen.",
      ],
      price: [
        "Ein Preis, alles drin:",
        "{monthly} im Monat. Community und alle Workshops sind enthalten.",
        "Dazu: Videoreihen, wöchentliche Live-Events, Gastvorträge von Ärzt:innen, Prüfungssimulationen, Downloads und KI-Lernapp.",
        "Anmeldung läuft sicher über Skool. Optional gibt es die persönliche Lernplan-Erstellung für {lernplan}.",
      ],
      who: [
        "Für Medizinstudierende in Deutschland und im EU-Ausland, ob staatlich oder privat, vom ersten Semester bis zum Examen.",
        "Wenn du viel lernst und trotzdem das Gefühl hast, es reicht nicht: genau für dich.",
      ],
      contact: ["Klar. Schreib uns einfach über die Kontaktseite, wir antworten ehrlich und ohne Verkaufsdruck."],
    },
  },

  pageMethode: {
    title: "Lernmethode fürs Medizinstudium: die 4 Säulen",
    description:
      "Wie medIQ lab Abrufen statt Wiederlesen und verteiltes Wiederholen ins Medizinstudium bringt: Lernsystem, Prüfungsstrategie, Stress & Resilienz, Netzwerk.",
    intro: {
      eyebrow: "Die Methode",
      title: "Eine Methode mit Fundament, *kein Bauchgefühl.*",
      lead: "medIQ lab ist keine Sammlung von Motivationssprüchen. Dahinter steht, wie Lernen funktioniert, und wie du dir das im Medizinstudium konsequent zunutze machst.",
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
        { title: "Hohe Studiengebühren im Ausland", body: "An Privat- und Auslands-Unis kostet ein Wiederholungsjahr zusätzlich schnell {lost}." },
      ],
      quote: "Das ist kein Talent-Problem. Es ist ein *Methoden-Problem*.",
      quoteSub: "Und Methoden kann man lernen, schneller, als du denkst.",
    },
    principles: {
      eyebrow: "Die vier Säulen",
      title: "Dein Studienerfolg steht auf vier Säulen.",
      lead: "Lernsystem, Prüfungsstrategie, Stress & Resilienz und Netzwerk. Sie bilden die Grundlage für nachhaltigen Studienerfolg, und wir helfen dir, jede einzelne gezielt zu verbessern. Das ist der Unterschied zwischen härter lernen und klüger lernen.",
      research: "Die Lernstrategie-Workshops stützen sich auf Studien zum Abrufen von Wissen ([Roediger & Karpicke 2006](https://doi.org/10.1111/j.1467-9280.2006.01693.x); [Karpicke & Roediger 2008](https://doi.org/10.1126/science.1152408)) und eine Metaanalyse zum verteilten Lernen ([Cepeda et al. 2006](https://doi.org/10.1037/0033-2909.132.3.354)).",
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
    title: "Programm und Preis für Medizinstudierende",
    description:
      "Workshops etwa 2× pro Semester, wöchentlich Study Together und Community-Café, mündliche Prüfungssimulation und Lernzettel in einer Mitgliedschaft.",
    intro: {
      eyebrow: "Das Programm",
      title: "Dein vollständiges System, *vom Lernsystem bis zum Examen.*",
      lead: "Eine Mitgliedschaft, alles drin: Workshop-Reihe, Videoreihen, wöchentliche Live-Events wie Study Together und Community-Café, Gastvorträge von Ärzt:innen, mündliche Prüfungssimulationen, Downloads und unsere eigene KI-Lernapp. Für Medizinstudierende in Deutschland und im EU-Ausland, ob privat oder staatlich.",
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
      lead: "So werden die vier Säulen konkret: Workshop-Reihe, Videoreihen, wöchentliche Live-Events und fertige Downloads, dazu unsere eigene KI-Lernapp. Alles in einem Preis.",
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
        title: "Live-Events",
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
      subtitle: "Eine Mitgliedschaft mit allem, was du brauchst: Community und alle Workshops inklusive. Anmeldung und Zahlung laufen sicher über Skool.",
      imgAlt: "Lernende Gruppe im Gespräch",
      badge: "Alles inklusive",
      plan: "Mitgliedschaft",
      blurb: "Dein vollständiges System, Monat für Monat. Community und alle Workshops sind enthalten.",
      per: "/ Monat",
      billing: "Monatlich, sicher über Skool.",
      compare: "Zum Vergleich: Ein einziges verlorenes Semester kostet schnell ein Vielfaches an Miete, Lebenshaltung und verlorener Zeit. An Privat- und Auslands-Unis kostet ein Wiederholungsjahr außerdem schnell {lost}. Die Mitgliedschaft rechnet sich schon, wenn sie dir ein einziges verlorenes Semester erspart.",
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
      ctaNote: "Monatlich · sicher über Skool · alles inklusive",
      note: "Hinweis: Alle Inhalte, Anmeldung und Zahlung laufen in Skool. Diese Seite informiert und leitet dich dorthin weiter.",
    },
    cta: {
      eyebrow: "Loslegen",
      title: "Bereit? *Dann rein in die Community.*",
      subtitle: "Anmeldung, Zahlung und alle Inhalte laufen sicher über Skool. Diese Seite informiert dich und leitet dich dorthin weiter.",
      secondary: "Offene Fragen? Zur FAQ",
    },
  },

  pageUeber: {
    title: "Über uns: von Medizinstudentinnen gegründet",
    description:
      "Faith und Hannah studieren Medizin im 4. Studienjahr und haben medIQ lab gegründet. Warum, für wen und nach welchen Prinzipien wir arbeiten.",
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
        motivation: "Meine Motivation ist es, Studierende so zu unterstützen, dass möglichst wenige von ihnen durch Prüfungen fallen. Gerade im ersten Studienjahr testen viele mühsam verschiedene Ansätze aus. Wer früh die passende Lernstrategie findet, fällt seltener durch und spart wertvolle Zeit, Geld und Nerven.",
      },
    ],
    mission: {
      eyebrow: "Unsere Mission",
      title: "Weniger verlorene Semester. Mehr sichere Abschlüsse.",
      lead: "Jedes verlorene Semester kostet nicht nur Zeit, sondern Geld, Nerven und oft ein Stück Selbstvertrauen. An Privat- und Auslands-Unis kostet ein Wiederholungsjahr schnell {lost}. Das muss nicht sein.",
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
    title: "Team: die Gründerinnen Faith und Hannah",
    description:
      "Die Gründerinnen Faith und Hannah, Coach Daniela sowie Jessi und Lisi aus dem Social-Media-Team: wer bei medIQ lab welche Aufgabe hat.",
    intro: {
      eyebrow: "Das Team",
      title: "Die Menschen hinter *medIQ lab.*",
      lead: "Hinter medIQ lab stehen die Medizinstudentinnen Faith und Hannah. Unterstützt werden sie von Daniela für Entspannung und Coaching und von Jessi und Lisi für Social Media.",
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
    title: "FAQ: Kosten, Anmeldung und Ablauf",
    description:
      "Was medIQ lab kostet, wie die Anmeldung über Skool läuft, ob es einen Campus-Rabatt gibt und ob das auch in Deutschland passt: Antworten auf einen Blick.",
    intro: {
      eyebrow: "FAQ",
      title: "Was du noch wissen willst",
      lead: "Die häufigsten Fragen zu Ablauf, Zugang und Preisen, ehrlich beantwortet.",
      ctaContact: "Frage nicht dabei? Kontakt",
    },
    items: [
      {
        q: "Für wen ist medIQ lab?",
        a: "Für Medizinstudierende in Deutschland und im EU-Ausland, ob staatliche oder private Uni, vom ersten Semester bis zum Examen. Wenn du viel lernst und trotzdem das Gefühl hast, es reicht nicht, wenn du Prüfungen sicher bestehen und teure Verzögerungen vermeiden willst, bist du richtig.",
      },
      {
        q: "Funktioniert das auch, wenn ich in Deutschland studiere?",
        a: "Ja, ausdrücklich. medIQ lab ist für beides gebaut. Die Methoden sind unabhängig von Standort und Curriculum, und Workshops, Live-Events, Downloads und KI-Lernapp nutzt du online, egal ob du in Heidelberg, Wien oder Pécs studierst.",
      },
      {
        q: "Was kostet die Mitgliedschaft?",
        a: "{monthly} im Monat, alles inklusive: Community, Workshop-Reihe, Videoreihen, wöchentliche Live-Events wie Study Together und Community-Café, Gastvorträge, Prüfungssimulationen, Downloads und die KI-Lernapp. Es gibt keine versteckten Kosten. Optional kannst du eine persönliche Lernplan-Erstellung für {lernplan} dazubuchen. Alle Formate im Detail findest du im [Programm der Mitgliedschaft](/programm/).",
      },
      {
        q: "Gibt es Rabatte?",
        a: "Ja, es gibt einen Campus-Rabatt. Sprich uns dazu einfach in der Community oder über die [Kontaktseite](/kontakt/) an.",
      },
      {
        q: "Lohnt sich der Preis wirklich?",
        a: "Rechne ehrlich gegen: Ein einziges verlorenes Semester kostet dich Monate an Miete und Lebenshaltung plus einen späteren Berufseinstieg. An Privat- und Auslands-Unis kostet ein Wiederholungsjahr zusätzlich schnell {lost}. Gemessen daran sind {monthly} im Monat eine Investition, die sich schon rechnet, wenn sie dir ein einziges verlorenes Semester erspart.",
      },
      {
        q: "Wie laufen Anmeldung und Zahlung ab?",
        a: "Anmeldung und Zahlung erfolgen vollständig und sicher über Skool. Du klickst auf einen der Buttons, landest in der medIQ lab Community auf Skool und schließt dort die Mitgliedschaft ab. Diese Website wickelt keine Zahlung ab.",
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
    title: "Kontakt: Fragen zur Mitgliedschaft",
    description: "Schreib uns über das Formular oder an info@mediq-lab.de. Wir antworten meist innerhalb weniger Werktage, am schnellsten in der Community auf Skool.",
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

  pageShop: {
    title: "Shop: Anatomie Survival Guide und Lernplan",
    description:
      "Der Anatomie Survival Guide von medIQ lab erscheint im Dezember auf Deutsch und Englisch. Dazu: persönliche Lernplan-Erstellung und kostenloses Infogespräch.",
    intro: {
      eyebrow: "Shop",
      title: "Lernmaterial von uns, *für deine Prüfungen.*",
      lead: "Digitale Produkte und persönliche Begleitung von Faith und Hannah. Den Anfang macht unser Anatomie Survival Guide.",
    },
    product: {
      badge: "Erscheint im Dezember 2026",
      eyebrow: "Digitales Produkt",
      name: "Anatomie Survival Guide",
      lead: "Anatomie ist für viele die erste große Hürde im Medizinstudium. Unser Survival Guide soll dir genau dabei helfen: kompakt, auf Deutsch und Englisch, von Medizinstudentinnen für Medizinstudierende.",
      coverLabel: "Cover-Vorschau",
      langLabel: "Sprachversion",
      planned: "geplant",
      langs: [
        { code: "DE", label: "Deutsch", cover: "Anatomie", planned: false },
        { code: "EN", label: "English", cover: "Anatomy", planned: false },
        { code: "CZ", label: "Čeština", cover: "Anatomie", planned: true },
      ],
      facts: [
        { k: "Format", v: "Digitaler Download" },
        { k: "Sprachen", v: "Deutsch, Englisch, Tschechisch geplant" },
        { k: "Erscheint", v: "Dezember 2026" },
        { k: "Preis", v: "folgt zum Start" },
      ],
      contentsTitle: "Was drin ist",
      contentsNote: "Inhaltsübersicht und Beispielseiten folgen, sobald der Guide fertig ist.",
      buy: "Kaufen ab Dezember",
    },
    waitlist: {
      title: "Sag mir Bescheid, wenn er da ist",
      sub: "Wir schicken dir eine E-Mail, sobald der Guide erhältlich ist.",
      honeypot: "Nicht ausfüllen:",
      email: "E-Mail",
      lang: "Sprachversion",
      submit: "Vormerken",
      consent:
        "Mit dem Absenden stimmst du zu, dass wir deine E-Mail-Adresse speichern, um dich über den Start des Guides zu informieren (siehe Datenschutz). Du kannst das jederzeit widerrufen.",
    },
    services: {
      eyebrow: "Persönliche Begleitung",
      title: "Lieber direkt *mit uns?*",
      subtitle: "Neben digitalen Produkten begleiten wir dich auch persönlich. Termine buchst du direkt in unserem Kalender.",
      items: [
        {
          price: "kostenlos",
          title: "Individuelles Infogespräch",
          body: "Wir schauen gemeinsam, wo du stehst und was dir gerade am meisten weiterhilft. Unverbindlich.",
          cta: "Termin wählen",
        },
        {
          price: "{lernplan}",
          title: "Persönliche Lernplan-Erstellung",
          body: "Wir erstellen mit dir deinen Lernplan, abgestimmt auf deine Prüfungen und deinen Alltag.",
          cta: "Termin buchen",
        },
        {
          price: "{monthly} / Monat",
          title: "medIQ lab Community",
          body: "Workshops, Live-Events, Lernzettel und Austausch mit anderen Medizinstudierenden auf Skool.",
          cta: "Zur Community",
        },
      ],
      note: "Termine buchst du über Cal.com, die Mitgliedschaft läuft über Skool.",
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
