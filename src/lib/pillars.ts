import type { IconName } from "@/components/ui/MedIcon";

/**
 * Die vier Säulen von medIQ lab, 1:1 aus dem „Content Plan MedIQ Community"
 * der Gründerinnen (Stand 2026-09-30): Workshop-Reihe, Videoreihen,
 * Live Events, Downloads. Einzige Quelle für Startseite (MethodTeaser),
 * /methode (MethodPrinciples), /programm (Modules) und /ueber (PillarGrid).
 */
export type Pillar = {
  icon: IconName;
  title: string;
  sub: string;
  /** Kurzfassung für Karten (Startseite, /ueber). */
  short: string;
  /** Langfassung für die dunkle Methoden-Sektion auf /methode. */
  body: string;
  /** Konkrete Inhalte aus dem Content-Plan (/programm, /methode). */
  items: string[];
};

export const PILLARS: Pillar[] = [
  {
    icon: "mind",
    title: "Workshop-Reihe",
    sub: "Etwa zweimal pro Semester, live",
    short:
      "Live-Workshops zu Lernstrategien, Stress & Resilienz und Finanzen. Das Fundament, auf dem alles andere aufbaut.",
    body:
      "Das Fundament: In den Workshops lernst du, wie Lernen nachweislich funktioniert, Active Recall, Spaced Repetition, Prüfungsstrategie, und setzt es direkt auf deinen Stoff um. Dazu kommen Workshops zu Stress & Resilienz und zu Finanzen, Versicherungen und allem, was das Studium sonst noch mitbringt. Etwa zweimal pro Semester, live.",
    items: [
      "2 bis 3 Workshops zu Lernstrategien",
      "Workshop Stress & Resilienz",
      "Workshop Finanzen, Versicherungen & Co.",
    ],
  },
  {
    icon: "play",
    title: "Videoreihen",
    sub: "Ergänzend zu jedem Workshop",
    short:
      "Videoreihen, die jedes Workshop-Thema vertiefen: Lernstrategien, Lernapps, Resilienz, Finanzen. Jederzeit abrufbar.",
    body:
      "Zu jedem Workshop gibt es eine Videoreihe, die das Thema vertieft: Lernstrategien, Lernapps und die Optimierung deines Studiums, Stress & Resilienz, Finanzen und Versicherungen. Du schaust, wann es in deinen Wochenplan passt, und kannst jederzeit zurückspringen.",
    items: [
      "Lernstrategien, Lernapps & Optimierung des Studiums",
      "Stress & Resilienz",
      "Finanzen, Versicherungen & Co.",
    ],
  },
  {
    icon: "community",
    title: "Live Events",
    sub: "Jede Woche",
    short:
      "Study Together und Community-Café jede Woche, dazu Q&As, Live-Quiz, Gastvorträge von Ärzt:innen und mündliche Prüfungssimulation.",
    body:
      "Hier passiert der Alltag: Study Together mindestens einmal pro Woche, Community-Café zum lockeren Austausch, Lernplanerstellung, Q&As und Live-Quiz. Dazu Gastvorträge von Ärztinnen und Ärzten, mündliche Prüfungssimulationen unter echten Bedingungen und eine High-Yield Hour zu den Themen, die die Community gerade beschäftigen.",
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
    icon: "structure",
    title: "Downloads",
    sub: "Sofort nutzbar",
    short:
      "Semesterplaner, Lernzettel und Klausur-Leitfaden, fertig zum Loslegen. Material, das dir Stunden spart.",
    body:
      "Fertiges Material, das dir Stunden spart: ein Semesterplaner, Lernzettel zu prüfungsrelevanten Themen (der erste: Muskeln und Skelett) und ein Klausur-Leitfaden. Sofort nutzbar, laufend erweitert.",
    items: ["Semesterplaner", "Lernzettel, Start: Muskeln & Skelett", "Klausur-Leitfaden"],
  },
];
