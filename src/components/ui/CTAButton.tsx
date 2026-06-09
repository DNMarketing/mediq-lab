import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:opacity-50";

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-ink-950 hover:bg-accent-soft hover:shadow-glow active:scale-[0.98]",
  secondary:
    "border border-line-strong bg-ink-800/70 text-white hover:border-accent/50 hover:bg-ink-700 active:scale-[0.98]",
  ghost: "text-slate-300 hover:text-white",
};

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  /** Externe Skool-Links öffnen in neuem Tab. */
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
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
    </a>
  );
}
