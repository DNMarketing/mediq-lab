import type { IconName } from "@/components/ui/MedIcon";

/**
 * Die vier Säulen des Studienerfolgs, wie medIQ lab sie auf Instagram
 * (@mediq.lab, Posts „Säule 1–4" + „Eine Idee wird zum Konzept") definiert:
 * Lernsystem, Prüfungsstrategie, Stress & Resilienz, Netzwerk.
 * Einzige Quelle für Startseite (MethodTeaser), /methode (MethodPrinciples)
 * und /ueber (PillarGrid). Die Formate (Workshops, Videos, Live Events,
 * Downloads) liegen getrennt in `lib/formats.ts`.
 */
export type Pillar = {
  icon: IconName;
  title: string;
  sub: string;
  /** Kurzfassung für Karten (Startseite, /ueber). */
  short: string;
  /** Langfassung für die dunkle Methoden-Sektion auf /methode. */
  body: string;
  /** Womit die Säule konkret eingelöst wird (Formate aus dem Content-Plan). */
  items: string[];
};

export const PILLARS: Pillar[] = [
  {
    icon: "structure",
    title: "Lernsystem",
    sub: "Säule 1",
    short:
      "Ein individuelles Lernsystem, das zu deinem Studienalltag passt: klare Strukturen, eingeplante Erholung, regelmäßige Reflexion.",
    body:
      "Ein nachhaltiges Lernsystem ist die Grundlage für langfristigen Studienerfolg. Es geht nicht nur darum, was du lernst, sondern wie du dein Lernen strukturierst, planst und an neue Herausforderungen anpasst. Wir helfen dir, ein Lernsystem zu entwickeln, das zu deinem Alltag passt: klare Lernstrukturen, eingeplante Erholungsphasen und regelmäßige Reflexion, damit dein Pensum langfristig effektiv und gesund bleibt.",
    items: [
      "Lernstrategie-Workshops",
      "Videoreihe Lernstrategien & Lernapps",
      "Lernplanerstellung live",
      "Semesterplaner",
    ],
  },
  {
    icon: "exam",
    title: "Prüfungsstrategie",
    sub: "Säule 2",
    short:
      "Ein strukturierter Prüfungsfahrplan mit realistischen Etappen, gezielten Wiederholungen und Simulation, bevor es ernst wird.",
    body:
      "Eine erfolgreiche Prüfungsvorbereitung beginnt lange vor dem Prüfungstag. Eine klare Strategie hilft, den Stoff sinnvoll zu priorisieren, den Überblick zu behalten und Wissen zum richtigen Zeitpunkt sicher abzurufen. Gemeinsam entwickeln wir deinen Prüfungsfahrplan mit realistischen Etappenzielen, planen Wiederholungen gezielt und passen die Strategie laufend an deinen Stand an.",
    items: [
      "Prüfungsfahrplan & Altfragen-Logik",
      "Mündliche Prüfungssimulation",
      "Live-Quiz, z. B. Anatomie",
      "Klausur-Leitfaden",
    ],
  },
  {
    icon: "mind",
    title: "Stress & Resilienz",
    sub: "Säule 3",
    short:
      "Effizient lernen, ohne deine mentale Gesundheit zu gefährden: Umgang mit Prüfungsangst, aktive Pausen, Mindset-Tools.",
    body:
      "Riesige Stoffmengen in kurzer Zeit, Versagensängste, oft weit weg von Familie und gewohntem Umfeld, und das Gefühl, nie genug getan zu haben. Wir vermitteln Methoden, mit denen du effizient lernst, ohne deine mentale Gesundheit zu gefährden: resilient mit Prüfungsangst und Rückschlägen umgehen, aktive Pausen und Mindset-Tools fest im Alltag verankern. Kein kurzfristiges Durchpowern, sondern gesund und motiviert bis zur Approbation.",
    items: [
      "Workshop Stress & Resilienz",
      "Videoreihe Stress & Resilienz",
      "Coaching bei Prüfungsangst",
      "Aktive Pausen & Mindset-Tools",
    ],
  },
  {
    icon: "community",
    title: "Netzwerk",
    sub: "Säule 4",
    short:
      "Eine Community aus Medizinstudierenden in Deutschland und an EU-Unis, die sich pusht, Wissen teilt und Tipps aus höheren Semestern weitergibt.",
    body:
      "Welche Fachrichtung passt zu mir? Wo macht man gute Famulaturen oder das PJ? Ohne Kontakte bleibt das oft Ratschlag-Lotterie, und ein Studium im Ausland ohne gewachsenes Umfeld bringt zusätzliche Hürden. Wir schaffen eine Community aus Medizinstudierenden in Deutschland und an EU-Universitäten, die sich gegenseitig pusht, motiviert und Wissen teilt: in Lern-Sessions, Austauschgruppen und mit erprobten Tipps aus höheren Semestern.",
    items: [
      "Study Together, jede Woche",
      "Community-Café, jede Woche",
      "Gastvorträge von Ärztinnen & Ärzten",
      "High-Yield Hour & Q&As",
    ],
  },
];
