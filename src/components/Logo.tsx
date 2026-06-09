import { cn } from "@/lib/cn";

/**
 * Wortmarke "medIQ lab" – Serif mit Kupfer-Akzent auf "IQ".
 * TODO: Bei Bedarf durch echtes SVG-Logo ersetzen.
 */
export function Logo({
  className,
  onDark,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "font-serif text-[1.35rem] font-medium tracking-[-0.01em]",
        onDark ? "text-paper-light" : "text-ink",
        className,
      )}
    >
      med<span className="text-copper-500">IQ</span>
      <span
        className={cn(
          "ml-1.5 align-middle font-sans text-[0.6rem] font-semibold uppercase tracking-[0.28em]",
          onDark ? "text-paper/60" : "text-ink-mute",
        )}
      >
        lab
      </span>
    </span>
  );
}
