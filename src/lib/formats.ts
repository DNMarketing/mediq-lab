import type { IconName } from "@/components/ui/MedIcon";

/**
 * Die Formate der Mitgliedschaft, 1:1 aus dem „Content Plan MedIQ Community"
 * (Stand 2026-09-30): Workshop-Reihe, Videoreihen, Live Events, Downloads.
 * Wird auf /programm („Was du bekommst") gerendert. Die inhaltlichen
 * vier Säulen (Lernsystem etc.) liegen in `lib/pillars.ts`.
 */
export type Format = { icon: IconName; title: string; sub: string; items: string[] };

export const FORMATS: Format[] = [
  {
    icon: "milestone",
    title: "Workshop-Reihe",
    sub: "Etwa zweimal pro Semester, live",
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
    items: ["Semesterplaner", "Lernzettel, Start: Muskeln & Skelett", "Klausur-Leitfaden"],
  },
];
