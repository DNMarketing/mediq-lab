import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { EkgLine } from "./Anatomy";

/**
 * Einheitlicher, edler Seiten-Kopf für Unterseiten. Schafft den Abstand zum
 * fixierten Header, setzt eine dramatische Serif-H1 und eine ruhige Lead-Zeile.
 * Optionales anatomisches Visual (rechte Spalte) + EKG-Signatur als Abschluss.
 */
export function PageIntro({
  eyebrow,
  title,
  lead,
  actions,
  visual,
  align = "left",
  ekg = true,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
  align?: "left" | "center";
  ekg?: boolean;
  className?: string;
}) {
  const centered = align === "center" && !visual;

  return (
    <section className={cn("relative overflow-hidden pt-32 sm:pt-40", className)}>
      <Container>
        <div
          className={cn(
            "grid items-center gap-12 lg:gap-10",
            visual ? "lg:grid-cols-12" : "",
          )}
        >
          <div
            className={cn(
              visual ? "lg:col-span-7" : centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
            )}
          >
            <Reveal>
              <div className={cn("eyebrow", centered && "justify-center")}>
                <span className="rule-copper" aria-hidden />
                {eyebrow}
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 font-serif text-[2.6rem] font-medium leading-[1.05] tracking-[-0.015em] text-ink sm:text-[3.7rem]">
                {title}
              </h1>
            </Reveal>
            {lead && (
              <Reveal delay={0.12}>
                <p
                  className={cn(
                    "mt-6 text-lg leading-relaxed text-ink-soft",
                    centered ? "mx-auto max-w-2xl" : "max-w-xl",
                  )}
                >
                  {lead}
                </p>
              </Reveal>
            )}
            {actions && (
              <Reveal delay={0.18}>
                <div
                  className={cn(
                    "mt-9 flex flex-col gap-3 sm:flex-row sm:items-center",
                    centered && "sm:justify-center",
                  )}
                >
                  {actions}
                </div>
              </Reveal>
            )}
          </div>

          {visual && (
            <div className="relative lg:col-span-5">
              <div
                className="glow-teal-bg pointer-events-none absolute -inset-10 -z-10"
                aria-hidden
              />
              {visual}
            </div>
          )}
        </div>
      </Container>

      {ekg && (
        <div className="mt-16 text-petrol-700/45 sm:mt-20">
          <EkgLine beats={8} strokeWidth={1.5} className="h-12" />
        </div>
      )}
    </section>
  );
}
