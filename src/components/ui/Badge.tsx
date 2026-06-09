import { cn } from "@/lib/cn";

/**
 * Sichtbarer "Platzhalter"-Hinweis. Markiert im UI Inhalte, die vor dem
 * Go-Live durch echte Daten/Texte ersetzt werden müssen.
 * TODO: Vor dem Launch alle <PlaceholderBadge> entfernen.
 */
export function PlaceholderBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300",
        className,
      )}
    >
      ⚠ Platzhalter
    </span>
  );
}

/** Neutrales Pill-Label (z. B. Kohorten-Hinweis, Tags). */
export function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line-strong bg-ink-800/60 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur",
        className,
      )}
    >
      {children}
    </span>
  );
}
