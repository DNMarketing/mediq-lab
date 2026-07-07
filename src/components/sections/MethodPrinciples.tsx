import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { AnatomyBrain } from "../ui/Anatomy";

/**
 * Die lernwissenschaftlichen Prinzipien hinter medIQ lab, als dramatische
 * DUNKLE Sektion. Zentraler Autoritäts-/Trust-Anker (ersetzt das frühere
 * Gründer-Porträt): die Methode selbst trägt das Vertrauen, nicht ein Gesicht.
 * Hintergrund: animiertes Gehirn-Line-Art (zeichnet sich) + Teal-Glow.
 */
const PRINCIPLES = [
  {
    title: "Aktives Abrufen",
    sub: "Active Recall",
    body: "Wissen festigt sich, indem du es aktiv aus dem Gedächtnis holst, nicht durch passives Wiederlesen oder Markieren. Jedes Abrufen ist ein Trainingsreiz, der die Erinnerungsspur stärkt. Deshalb arbeiten wir konsequent mit Fragen, Fällen und Karteikarten statt mit Text-Highlightern.",
  },
  {
    title: "Verteiltes Lernen",
    sub: "Spaced Repetition",
    body: "In wachsenden Abständen wiederholen statt kurz vor der Prüfung zu pauken. So arbeitest du gezielt gegen die Vergessenskurve: Der Stoff wandert ins Langzeitgedächtnis, und bleibt dort, auch Monate später im Examen. Ein Algorithmus plant die Wiederholungen, du musst nur dranbleiben.",
  },
  {
    title: "Prüfungsorientierung",
    sub: "Altfragen-Logik",
    body: "Vom Prüfungsmuster rückwärts gedacht: Altfragen zeigen, welche Schwerpunkte immer wieder geprüft werden. Statt dich in jedem Detail zu verlieren, lernst du gezielt das, was zählt, und gehst mit einem klaren Bild davon in die Prüfung, was auf dich zukommt.",
  },
];

export function MethodPrinciples() {
  return (
    <section className="relative overflow-hidden bg-petrol-900 py-24 text-paper-light sm:py-32">
      {/* Hintergrund: Gehirn-Line-Art + Teal-Glow */}
      <div className="glow-teal-bg pointer-events-none absolute -right-20 top-10 h-[640px] w-[640px]" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 text-teal-400/15 lg:block"
        aria-hidden
      >
        <AnatomyBrain strokeWidth={1.4} />
      </div>

      <Container className="relative">
        <Reveal>
          <div className="eyebrow text-teal-300">
            <span className="rule-copper bg-teal-400/80" aria-hidden />
            Die drei Prinzipien
          </div>
          <h2 className="mt-5 max-w-2xl font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-paper-light sm:text-[2.7rem]">
            Drei Prinzipien, die nachweislich funktionieren.
          </h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-paper/70">
            medIQ lab basiert nicht auf Motivationssprüchen, sondern auf lernpsychologisch
            gut belegten Prinzipien. Das ist der Unterschied zwischen härter lernen und
            klüger lernen.
          </p>
        </Reveal>

        <div className="mt-14">
          <Stagger as="ol" className="space-y-0">
            {PRINCIPLES.map((p, i) => (
              <StaggerItem as="li" key={p.title}>
                <div className="flex flex-col gap-4 border-t border-line-onDark py-8 sm:flex-row sm:gap-8">
                  <span className="step-num font-serif text-3xl font-medium leading-none text-teal-300 sm:w-16">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="font-serif text-xl font-medium text-paper-light sm:text-2xl">
                        {p.title}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.18em] text-teal-300/80">
                        {p.sub}
                      </span>
                    </div>
                    <p className="mt-3 leading-relaxed text-paper/70">{p.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl border-t border-line-onDark pt-6 text-sm leading-relaxed text-paper/50">
              {/* TODO: Studien-Quellen verlinken (z. B. Karpicke & Roediger zur
                  Testing-Effekt-Forschung, Cepeda et al. zu Spacing), um die
                  Wissenschaftlichkeit sichtbar und überprüfbar zu machen. */}
              [PLATZHALTER: Studien-Quellen verlinken], z. B. Forschung zu Testing-Effekt
              (Karpicke &amp; Roediger) und Spacing (Cepeda et al.), um die Prinzipien
              belegbar zu machen.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
