import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

const PAINS = [
  {
    title: "Erschlagen von der Stofffülle",
    body: "Tausende Seiten, hunderte Vorlesungen – und niemand zeigt dir, was wirklich prüfungsrelevant ist.",
  },
  {
    title: "Lernen ohne System",
    body: "Du liest, markierst, liest nochmal – und vergisst es bis zur Prüfung wieder. Fleiß ohne Methode verpufft.",
  },
  {
    title: "Prüfungsangst & Blackouts",
    body: "Du kannst den Stoff eigentlich – aber unter Druck ist plötzlich alles weg.",
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
    body: "An Privat- und Auslands-Unis kostet ein Wiederholungsjahr schnell 10.000–15.000 € – zusätzlich.",
  },
];

export function Problem() {
  return (
    <Section id="problem">
      <Reveal>
        <SectionHeading
          eyebrow="Du kennst das"
          title="Es liegt nicht daran, dass du zu wenig lernst."
          subtitle="Die meisten Medizinstudenten arbeiten hart – nur selten mit einem System, das wirklich trägt. Genau hier setzt medIQ lab an."
        />
      </Reveal>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PAINS.map((pain, i) => (
          <Reveal as="li" key={pain.title} delay={(i % 3) * 0.08}>
            <div className="h-full rounded-xl border border-line bg-ink-800/40 p-6 transition-colors hover:border-line-strong">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400">
                <span aria-hidden>✗</span>
              </div>
              <h3 className="font-medium text-white">{pain.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {pain.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>

      {/* Reframe */}
      <Reveal delay={0.1}>
        <div className="relative mt-12 overflow-hidden rounded-2xl border border-accent/20 bg-ink-800/60 p-8 text-center sm:p-12">
          <div className="glow-radial absolute inset-x-0 top-0 h-full opacity-70" />
          <p className="relative font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
            Das ist kein Talent-Problem.
            <br />
            <span className="text-gradient">Es ist ein Methoden-Problem.</span>
          </p>
          <p className="relative mx-auto mt-4 max-w-xl text-slate-400">
            Und Methoden kann man lernen – schneller, als du denkst.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
