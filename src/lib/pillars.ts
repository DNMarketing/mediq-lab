import type { IconName } from "@/components/ui/MedIcon";

/**
 * Die vier Säulen von medIQ lab. Einzige Quelle für Startseite (MethodTeaser),
 * /methode (MethodPrinciples) und /ueber (PillarGrid).
 *
 * TODO: Formulierungen gegen den finalen Content-Plan der Gründerinnen
 * abgleichen. Struktur aus den „Website Anmerkungen" abgeleitet
 * (4 Säulen, mündliche Prüfungssimulation, KI-Lernapp, Vorträge von Ärzt:innen).
 */
export type Pillar = {
  icon: IconName;
  title: string;
  sub: string;
  /** Kurzfassung für Karten (Startseite, /ueber). */
  short: string;
  /** Langfassung für die dunkle Methoden-Sektion auf /methode. */
  body: string;
};

export const PILLARS: Pillar[] = [
  {
    icon: "mind",
    title: "Lernmethode",
    sub: "Active Recall & Spaced Repetition",
    short:
      "Wissen aktiv abrufen und in wachsenden Abständen wiederholen. So sitzt der Stoff bis zum Examen, nicht nur bis zur nächsten Woche.",
    body:
      "Wissen festigt sich, indem du es aktiv aus dem Gedächtnis holst und in wachsenden Abständen wiederholst, nicht durch Wiederlesen und Markieren. Deshalb arbeiten wir mit Fragen, Fällen und Karteikarten, die gegen die Vergessenskurve laufen: Der Stoff wandert ins Langzeitgedächtnis und bleibt dort, auch Monate später in der Prüfung.",
  },
  {
    icon: "exam",
    title: "Prüfungsstrategie",
    sub: "Altfragen & mündliche Simulation",
    short:
      "Vom Prüfungsmuster rückwärts lernen und die mündliche Prüfung unter realen Bedingungen proben, bevor es ernst wird.",
    body:
      "Altfragen zeigen, welche Schwerpunkte immer wieder geprüft werden. Statt dich in jedem Detail zu verlieren, lernst du gezielt das, was zählt. Und weil Wissen allein keine mündliche Prüfung besteht, simulieren wir sie: mit echten Fragen, echtem Zeitdruck und ehrlichem Feedback, bevor es drauf ankommt.",
  },
  {
    icon: "structure",
    title: "KI-Lernapp & Lernzettel",
    sub: "Material, das mitdenkt",
    short:
      "Unsere eigene KI-Lernapp plus fertige Lernzettel, damit deine Zeit ins Verstehen fließt statt ins Zusammensuchen.",
    body:
      "Du musst dir nicht alles selbst zusammensuchen. In der Mitgliedschaft stecken fertige Lernzettel zu prüfungsrelevanten Themen und unsere eigene KI-Lernapp, die dich beim Abfragen, Wiederholen und Strukturieren unterstützt. So fließt deine Energie ins Verstehen, nicht in die Vorbereitung der Vorbereitung.",
  },
  {
    icon: "community",
    title: "Community & Mentoring",
    sub: "Vorträge, Coaching, Accountability",
    short:
      "Workshops, Vorträge von Ärzt:innen, Coaching bei Druck und eine Community, die dich dranbleiben lässt.",
    body:
      "Es bleibt nicht beim Lernen. Live-Workshops, Vorträge von Ärztinnen und Ärzten aus der Praxis, Coaching bei Prüfungsangst und mentaler Belastung und eine Community, in der du nicht allein bist. Verbindlichkeit macht auf der langen Strecke den Unterschied.",
  },
];
