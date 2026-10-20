import { cn } from "@/lib/cn";

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
