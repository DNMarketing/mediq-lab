import { Section, Eyebrow } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";

/** Kurz-Problem für die Startseite (die ausführliche Version lebt auf /methode). */
const PAINS = [
  "Erschlagen von der Stofffülle, und niemand zeigt dir, was wirklich zählt.",
  "Lernen ohne System: lesen, markieren, vergessen. Fleiß ohne Methode verpufft.",
  "Angst vor Prüfungen, Wiederholungsjahren und verlorenen Semestern.",
];

export function ProblemTeaser() {
  return (
    <Section tone="paper">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Das Problem</Eyebrow>
            <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.6rem]">
              Es liegt nicht daran, dass du zu wenig lernst.
            </h2>
            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
              Die meisten Medizinstudierenden arbeiten hart, nur selten mit einem System,
              das wirklich trägt. Das ist kein Talent-Problem, sondern ein Methoden-Problem.
            </p>
            <div className="mt-8">
              <CTAButton href="/methode" variant="secondary" external={false}>
                Warum das so ist
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Stagger as="ul" className="border-t border-line">
            {PAINS.map((pain) => (
              <StaggerItem as="li" key={pain}>
                <div className="flex gap-5 border-b border-line py-6">
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink-mute"
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M6 6l12 12M18 6 6 18" />
                    </svg>
                  </span>
                  <p className="text-lg leading-relaxed text-ink-soft">{pain}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <blockquote className="mt-9 border-l-2 border-copper-500 pl-6">
              <p className="pull-quote">
                Das ist kein Talent-Problem. Es ist ein{" "}
                <span className="italic text-petrol-700">Methoden-Problem</span>.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
