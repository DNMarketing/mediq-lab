import { NEXT_COHORT, SKOOL_URL } from "@/lib/config";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { Pill } from "../ui/Badge";
import { MedIcon } from "../ui/MedIcon";
import { EkgLine } from "../ui/Anatomy";

/**
 * Wiederkehrender dunkler Abschluss-CTA (Petrol + Teal-Glow + EKG-Signatur).
 * Auf jeder Seite präsent, damit der Skool-Weg immer schnell erreichbar ist.
 */
export function CTABand({
  eyebrow = "medIQ lab",
  title = (
    <>
      Lern ab heute klüger —{" "}
      <span className="italic text-copper-300">nicht härter.</span>
    </>
  ),
  subtitle = "Jedes Semester, das du jetzt sicherst, ist Zeit und Geld, das du nicht verlierst. Tritt der medIQ lab Community bei und bring dein Lernsystem auf ein neues Level.",
  note = "Start & Zahlung sicher über Skool · Community-Abo jederzeit kündbar · keine versteckten Kosten",
  secondaryHref = "/programm",
  secondaryLabel = "Programm & Preise",
  showCohort = true,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  note?: React.ReactNode;
  secondaryHref?: string;
  secondaryLabel?: string;
  showCohort?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-petrol-900 py-24 text-paper-light sm:py-32">
      <div className="glow-teal-bg pointer-events-none absolute inset-x-0 top-0 h-2/3" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 text-teal-400/40">
        <EkgLine beats={8} strokeWidth={1.4} className="h-10" />
      </div>
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            {showCohort && NEXT_COHORT && (
              <div className="mb-7 flex justify-center">
                <Pill onDark>
                  <span className="h-1.5 w-1.5 rounded-full bg-copper-300" aria-hidden />
                  Nächste Kohorte startet am {NEXT_COHORT}
                </Pill>
              </div>
            )}

            <div className="flex justify-center">
              <span className="eyebrow text-copper-300">
                <span className="rule-copper bg-copper-300/80" aria-hidden />
                {eyebrow}
              </span>
            </div>

            <h2 className="mt-5 font-serif text-[2.2rem] font-medium leading-[1.1] tracking-[-0.01em] text-paper-light sm:text-[3.2rem]">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-paper/75">
              {subtitle}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href={SKOOL_URL} variant="onDark" size="lg" className="w-full sm:w-auto">
                Jetzt beitreten
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
              {secondaryHref && (
                <CTAButton
                  href={secondaryHref}
                  external={false}
                  variant="onDarkGhost"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {secondaryLabel}
                </CTAButton>
              )}
            </div>

            {note && <p className="mt-6 text-sm text-paper/60">{note}</p>}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
