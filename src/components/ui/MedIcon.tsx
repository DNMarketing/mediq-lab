import { cn } from "@/lib/cn";

/**
 * Feine, einheitliche Linien-Iconografie (kein Emoji-Stil).
 * 24×24, 1.6er Strichstärke, ruhig und medizinisch-sachlich.
 */
export type IconName =
  | "structure"
  | "repeat"
  | "exam"
  | "clock"
  | "milestone"
  | "mind"
  | "community"
  | "microscope"
  | "pulse"
  | "check"
  | "arrowRight"
  | "play"
  | "plus";

const PATHS: Record<IconName, React.ReactNode> = {
  // Lernsystematik, geschichtete Struktur
  structure: (
    <>
      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
      <path d="M3 12l9 4.5L21 12" />
      <path d="M3 16.5 12 21l9-4.5" />
    </>
  ),
  // Spaced Repetition, Wiederholungs-Zyklus
  repeat: (
    <>
      <path d="M4 9a8 8 0 0 1 13.3-3.3L20 8" />
      <path d="M20 4v4h-4" />
      <path d="M20 15a8 8 0 0 1-13.3 3.3L4 16" />
      <path d="M4 20v-4h4" />
    </>
  ),
  // Prüfungsstrategie, Dokument mit Häkchen
  exam: (
    <>
      <path d="M6 3h9l4 4v14H6V3Z" />
      <path d="M15 3v4h4" />
      <path d="m9 13 1.8 1.8L14 11.5" />
    </>
  ),
  // Zeitmanagement, Uhr
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  // Examens-Prep, Meilenstein/Fahne
  milestone: (
    <>
      <path d="M6 21V4" />
      <path d="M6 5h11l-2.2 3L17 11H6" />
    </>
  ),
  // Mentale Belastung, Kopf/Geist
  mind: (
    <>
      <path d="M14.5 20v-2.2a5.5 5.5 0 1 0-6.6-7.6" />
      <path d="M5 13.5 3.5 12 5 10.5" />
      <path d="M8 20v-3l-2.2-1.3A5.5 5.5 0 0 1 9 6" />
      <circle cx="13" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  // Community, Menschen
  community: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6" />
      <path d="M17.5 13.5A5.5 5.5 0 0 1 20.5 19" />
    </>
  ),
  microscope: (
    <>
      <path d="M6 21h13" />
      <path d="M9 17a6 6 0 0 0 9-5" />
      <path d="m9 4 3.5 2-2 3.5L7 7.5 9 4Z" />
      <path d="m11 9.5 2.5 4.5" />
      <path d="M8 17h4" />
    </>
  ),
  pulse: (
    <>
      <path d="M2 12h4l2.5-6 4 13 3-9 1.5 2H22" />
    </>
  ),
  check: <path d="m4 12.5 5 5L20 6.5" />,
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  play: <path d="M8 5.5v13l11-6.5-11-6.5Z" />,
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
};

export function MedIcon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", className)}
      aria-hidden
    >
      {PATHS[name]}
    </svg>
  );
}
