import { NEXT_COHORT, SKOOL_URL } from "@/lib/config";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { Pill } from "../ui/Badge";
import { MedIcon } from "../ui/MedIcon";
import { EkgLine } from "../ui/Anatomy";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-petrol-900 py-24 text-paper-light sm:py-32">
      <div className="glow-teal-bg pointer-events-none absolute inset-x-0 top-0 h-2/3" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 text-teal-400/40">
        <EkgLine beats={8} strokeWidth={1.4} className="h-10" />
      </div>
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            {NEXT_COHORT && (
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
                medIQ lab
              </span>
            </div>

            <h2 className="mt-5 font-serif text-[2.2rem] font-medium leading-[1.1] tracking-[-0.01em] text-paper-light sm:text-[3.2rem]">
              Lern ab heute klüger —{" "}
              <span className="italic text-copper-300">nicht härter.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-paper/75">
              Jedes Semester, das du jetzt sicherst, ist Zeit und Geld, das du nicht
              verlierst. Tritt der medIQ&nbsp;lab Community bei und bring dein
              Lernsystem auf ein neues Level.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href={SKOOL_URL} variant="onDark" size="lg" className="w-full sm:w-auto">
                Jetzt beitreten
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
              <CTAButton
                href="#zugang"
                external={false}
                size="lg"
                className="w-full border border-line-onDark bg-transparent text-paper-light hover:border-copper-300 hover:text-copper-300 sm:w-auto"
              >
                Zugang vergleichen
              </CTAButton>
            </div>

            <p className="mt-6 text-sm text-paper/60">
              Start &amp; Zahlung sicher über Skool · Community-Abo jederzeit kündbar ·
              keine versteckten Kosten
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
