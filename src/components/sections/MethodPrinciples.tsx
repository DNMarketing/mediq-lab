import { PILLARS } from "@/lib/pillars";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { AnatomyBrain } from "../ui/Anatomy";

/**
 * Die vier Säulen des Studienerfolgs (Lernsystem, Prüfungsstrategie,
 * Stress & Resilienz, Netzwerk) als dramatische DUNKLE Sektion. Zentraler
 * Autoritäts-/Trust-Anker. Inhalte zentral in `lib/pillars.ts`.
 * Hintergrund: animiertes Gehirn-Line-Art (zeichnet sich) + Teal-Glow.
 */
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
            Die vier Säulen
          </div>
          <h2 className="mt-5 max-w-2xl font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-paper-light sm:text-[2.7rem]">
            Dein Studienerfolg steht auf vier Säulen.
          </h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-paper/70">
            Lernsystem, Prüfungsstrategie, Stress &amp; Resilienz und Netzwerk. Sie bilden
            die Grundlage für nachhaltigen Studienerfolg, und wir helfen dir, jede
            einzelne gezielt zu verbessern. Das ist der Unterschied zwischen härter
            lernen und klüger lernen.
          </p>
        </Reveal>

        <div className="mt-14">
          <Stagger as="ol" className="space-y-0">
            {PILLARS.map((p, i) => (
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
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.items.map((it) => (
                        <li
                          key={it}
                          className="rounded-full border border-line-onDark px-3 py-1 text-xs text-paper/80"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl border-t border-line-onDark pt-6 text-sm leading-relaxed text-paper/50">
              Die Lernstrategie-Workshops stützen sich auf etablierte lernpsychologische Forschung,
              unter anderem zum Testing-Effekt (Karpicke &amp; Roediger) und zum verteilten
              Lernen (Cepeda et al.).
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
