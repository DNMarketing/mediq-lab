import { cn } from "@/lib/cn";

/**
 * Sichtbarer Platzhalter-Hinweis. Markiert Inhalte, die vor dem Go-Live
 * durch echte Daten/Texte/Bilder ersetzt werden müssen.
 * TODO: Vor dem Launch alle <PlaceholderBadge> entfernen.
 */
export function PlaceholderBadge({
  className,
  label = "Platzhalter",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-card border border-copper-500/40 bg-copper-100/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-copper-600",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-copper-500" aria-hidden />
      {label}
    </span>
  );
}

/** Neutrales Pill-Label (z. B. Kohorten-Hinweis, Tags). */
export function Pill({
  children,
  className,
  onDark,
}: {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium",
        onDark
          ? "border border-line-onDark bg-petrol-800/60 text-paper/90"
          : "border border-line-strong bg-paper-light text-ink-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}
