import { IMAGES } from "@/lib/images";
import { Section, Eyebrow } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { EditorialImage } from "../ui/EditorialImage";

const PAINS = [
  {
    title: "Erschlagen von der Stofffülle",
    body: "Tausende Seiten, hunderte Vorlesungen, und niemand zeigt dir, was wirklich prüfungsrelevant ist.",
  },
  {
    title: "Lernen ohne System",
    body: "Du liest, markierst, liest nochmal, und vergisst es bis zur Prüfung wieder. Fleiß ohne Methode verpufft.",
  },
  {
    title: "Prüfungsangst & Blackouts",
    body: "Du kannst den Stoff eigentlich, aber unter Druck ist plötzlich alles weg.",
  },
  {
    title: "Drohende Wiederholungsprüfungen",
    body: "Ein Fehlversuch, und das ganze Semester wackelt. Die Angst lernt mit.",
  },
  {
    title: "Verlorene Semester & Lebenszeit",
    body: "Jedes verlorene Semester heißt: mehr Miete, mehr Lebenshaltungskosten, späterer Berufseinstieg.",
  },
  {
    title: "Hohe Studiengebühren im Ausland",
    body: "An Privat- und Auslands-Unis kostet ein Wiederholungsjahr schnell 10.000 bis 15.000 €, zusätzlich.",
  },
];

export function Problem() {
  return (
    <Section id="problem" tone="paper">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Bild + Intro (sticky, asymmetrisch) */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow>Du kennst das</Eyebrow>
              <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.6rem]">
                Es liegt nicht daran, dass du zu wenig lernst.
              </h2>
              <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
                Die meisten Medizinstudierenden arbeiten hart, nur selten mit einem
                System, das wirklich trägt. Genau hier setzt medIQ lab an.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <EditorialImage
                id={IMAGES.problemStudent}
                alt="Konzentrierte:r Studierende:r am Laptop"
                aspect="aspect-[5/4]"
                className="mt-8 frame"
                width={900}
              />
            </Reveal>
          </div>
        </div>

        {/* Pain-Liste mit Stagger */}
        <div className="lg:col-span-7">
          <Stagger as="ul" className="border-t border-line">
            {PAINS.map((pain) => (
              <StaggerItem as="li" key={pain.title}>
                <div className="flex gap-5 border-b border-line py-6">
                  <span
                    className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink-mute"
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M6 6l12 12M18 6 6 18" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-ink">{pain.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-ink-soft">{pain.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Reframe als Pull-Quote */}
          <Reveal delay={0.1}>
            <blockquote className="mt-10 border-l-2 border-copper-500 pl-6">
              <p className="pull-quote">
                Das ist kein Talent-Problem. Es ist ein{" "}
                <span className="italic text-petrol-700">Methoden-Problem</span>.
              </p>
              <p className="mt-3 text-ink-soft">
                Und Methoden kann man lernen, schneller, als du denkst.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
