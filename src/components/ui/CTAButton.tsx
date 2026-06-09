import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "onDark" | "ghost";

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
  ghost:
    "text-ink-soft hover:text-petrol-700 focus-visible:ring-offset-paper",
};

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
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
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
    </a>
  );
}
