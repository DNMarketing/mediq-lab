import { cn } from "@/lib/cn";

/**
 * Wortmarke "medIQ lab".
 * TODO: Bei Bedarf durch echtes SVG-Logo ersetzen.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-lg font-semibold tracking-tight text-white",
        className,
      )}
    >
      med
      <span className="text-accent">IQ</span>
      <span className="ml-1 font-sans text-sm font-normal text-slate-400">
        lab
      </span>
    </span>
  );
}
