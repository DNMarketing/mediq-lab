import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  /** Container weglassen, wenn die Section ihr eigenes Layout steuert. */
  bare?: boolean;
};

export function Section({ id, className, children, bare }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 sm:py-28", className)}
    >
      {bare ? children : <Container>{children}</Container>}
    </section>
  );
}

/** Kleine Überschrift über der H2 ("Eyebrow"). */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-accent">
      <span className="h-px w-6 bg-accent/60" aria-hidden />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}
