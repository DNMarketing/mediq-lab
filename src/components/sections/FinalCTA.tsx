import { NEXT_COHORT, SKOOL_URL } from "@/lib/config";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { Pill } from "../ui/Badge";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="glow-radial pointer-events-none absolute inset-x-0 top-0 h-full" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:64px_64px] [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]"
      />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            {NEXT_COHORT && (
              <div className="mb-6 flex justify-center">
                <Pill>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Nächste Kohorte startet am {NEXT_COHORT}
                </Pill>
              </div>
            )}

            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Lern ab heute klüger –{" "}
              <span className="text-gradient">nicht härter.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
              Jedes Semester, das du jetzt sicherst, ist Zeit und Geld, das du nicht
              verlierst. Tritt der medIQ&nbsp;lab Community bei und bring dein
              Lernsystem auf ein neues Level.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href={SKOOL_URL} size="lg" className="w-full sm:w-auto">
                Jetzt beitreten
                <span aria-hidden>→</span>
              </CTAButton>
              <CTAButton
                href="#zugang"
                variant="secondary"
                size="lg"
                external={false}
                className="w-full sm:w-auto"
              >
                Zugang vergleichen
              </CTAButton>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Start &amp; Zahlung sicher über Skool · Community-Abo jederzeit kündbar ·
              keine versteckten Kosten
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
