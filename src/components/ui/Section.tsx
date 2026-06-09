import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "paper" | "light" | "sand" | "petrol";

const toneClasses: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  light: "bg-paper-light text-ink",
  sand: "bg-paper-sand text-ink",
  petrol: "bg-petrol-900 text-paper-light",
};

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bare?: boolean;
  tone?: Tone;
};

export function Section({
  id,
  className,
  children,
  bare,
  tone = "paper",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 py-24 sm:py-32",
        toneClasses[tone],
        className,
      )}
    >
      {bare ? children : <Container>{children}</Container>}
    </section>
  );
}

/** Editorial-Eyebrow mit Kupfer-Linie. */
export function Eyebrow({
  children,
  onDark,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className={cn("eyebrow", onDark && "text-copper-300")}>
      <span className={cn("rule-copper", onDark && "bg-copper-300/80")} aria-hidden />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
  onDark,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  center?: boolean;
  onDark?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <div className={cn(center && "flex justify-center")}>
          <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          "mt-5 font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] sm:text-[2.6rem]",
          onDark ? "text-paper-light" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-[1.05rem] leading-relaxed",
            onDark ? "text-paper/70" : "text-ink-soft",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
