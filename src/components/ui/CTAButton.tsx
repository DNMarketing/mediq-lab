import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "onDark" | "onDarkGhost" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-card font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 disabled:opacity-50";

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

const variants: Record<Variant, string> = {
  // Primär: tiefes Petrol, warmweißer Text – höchstes Vertrauen, klare Hierarchie
  primary:
    "bg-petrol-700 text-paper-light hover:bg-petrol-800 focus-visible:ring-offset-paper active:translate-y-px",
  // Sekundär: dezenter Rahmen auf hell
  secondary:
    "border border-line-strong bg-transparent text-ink hover:border-petrol-700 hover:text-petrol-700 focus-visible:ring-offset-paper active:translate-y-px",
  // Auf dunklen Petrol-Sektionen: Kupfer-CTA mit dunklem Text
  onDark:
    "bg-copper-500 text-petrol-900 hover:bg-copper-400 focus-visible:ring-offset-petrol-900 active:translate-y-px",
  // Auf dunklen Sektionen: dezenter Rahmen-Button
  onDarkGhost:
    "border border-line-onDark bg-transparent text-paper-light hover:border-copper-300 hover:text-copper-300 focus-visible:ring-offset-petrol-900 active:translate-y-px",
  ghost: "text-ink-soft hover:text-petrol-700 focus-visible:ring-offset-paper",
};

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  /** true = externer Link (neuer Tab). false = interne Route (Next Link). */
  external?: boolean;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = true,
}: CTAButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
