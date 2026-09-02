import { Section, Eyebrow } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";

/** Kurz-Problem für die Startseite. Kernaussagen hervorgehoben, keine graue Text-Wüste. */
const PAINS = [
  { lead: "Erschlagen von der Stofffülle", rest: ", und niemand zeigt dir, was wirklich geprüft wird." },
  { lead: "Lesen, markieren, wieder vergessen", rest: ". Fleiß ohne System verpufft." },
  { lead: "Ein Fehlversuch im Ausland", rest: ", und ein Wiederholungsjahr kostet schnell 10.000 bis 15.000 €." },
];

export function ProblemTeaser() {
  return (
    <Section tone="paper">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <Eyebrow>Das Problem</Eyebrow>
          <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.1] tracking-[-0.01em] text-ink sm:text-[2.7rem]">
            Es liegt nicht daran, dass du{" "}
            <span className="italic text-petrol-700">zu wenig lernst.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Die meisten scheitern im Ausland nicht am Fleiß, sondern am{" "}
            <span className="font-medium text-ink">fehlenden System.</span>
          </p>
        </Reveal>

        <Stagger as="ul" className="mt-10">
          {PAINS.map((p) => (
            <StaggerItem as="li" key={p.lead}>
              <div className="flex gap-4 border-t border-line py-6">
                <span
                  className="mt-[0.6rem] h-2 w-2 shrink-0 rounded-full bg-copper-500"
                  aria-hidden
                />
                <p className="text-lg leading-relaxed text-ink-soft">
                  <span className="font-medium text-ink">{p.lead}</span>
                  {p.rest}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <blockquote className="mt-10 border-l-2 border-copper-500 pl-6">
            <p className="font-serif text-2xl font-medium leading-snug text-ink sm:text-3xl">
              Kein Talent-Problem. Ein{" "}
              <span className="italic text-petrol-700">Methoden-Problem.</span>
            </p>
          </blockquote>
          <div className="mt-8">
            <CTAButton href="/methode" variant="secondary" external={false}>
              Warum das so ist
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
