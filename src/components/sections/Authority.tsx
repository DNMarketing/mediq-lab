import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { AnatomyBrain } from "../ui/Anatomy";
import { PlaceholderBadge } from "../ui/Badge";

/**
 * Authority / Methode – zentraler Trust-Anker als dramatische DUNKLE Sektion.
 *  (a) Gründer Dirk Schlenker (Porträt-Platzhalter, Bio als TODO)
 *  (b) Wissenschaftlich begründete Lernmethode (durchnummeriert, animiert)
 * Hintergrund: animiertes Gehirn-Line-Art (zeichnet sich) + klinischer Teal-Glow.
 */
const PRINCIPLES = [
  {
    title: "Aktives Abrufen",
    sub: "Active Recall",
    body: "Wissen festigt sich, indem du es aktiv aus dem Gedächtnis holst – nicht durch passives Wiederlesen. Lernpsychologisch klar belegt.",
  },
  {
    title: "Verteiltes Lernen",
    sub: "Spaced Repetition",
    body: "In wachsenden Abständen wiederholen statt vor der Prüfung pauken. So wandert Stoff ins Langzeitgedächtnis – und bleibt dort.",
  },
  {
    title: "Prüfungsorientierung",
    sub: "Altfragen-Logik",
    body: "Vom Prüfungsmuster rückwärts gedacht: Du lernst gezielt, was geprüft wird – statt dich in Details zu verlieren.",
  },
];

export function Authority() {
  return (
    <section
      id="methode"
      className="relative scroll-mt-20 overflow-hidden bg-petrol-900 py-24 text-paper-light sm:py-32"
    >
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
            02 — Warum medIQ lab
          </div>
          <h2 className="mt-5 max-w-2xl font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-paper-light sm:text-[2.7rem]">
            Eine Methode mit Fundament — kein Bauchgefühl.
          </h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-paper/70">
            medIQ lab basiert nicht auf Motivationssprüchen, sondern auf
            lernpsychologisch belegten Prinzipien. Das ist der Unterschied zwischen
            härter lernen und klüger lernen.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* (a) Gründer Dirk Schlenker */}
          <Reveal className="lg:col-span-5">
            <figure className="overflow-hidden rounded-card shadow-lift glass-dark">
              {/* Porträt-Platzhalter – ECHTES FOTO EINFÜGEN */}
              <div className="relative flex aspect-[4/3] items-center justify-center border-b border-line-onDark bg-petrol-800/60">
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-teal-400/40 text-teal-300">
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="9" r="3.2" />
                      <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
                    </svg>
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
                    Echtes Foto einfügen
                  </p>
                </div>
              </div>
              <figcaption className="p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-serif text-xl font-medium text-paper-light">
                    Dirk Schlenker
                  </p>
                  <PlaceholderBadge label="Bio Platzhalter" />
                </div>
                <p className="mt-1 text-sm text-teal-300">Gründer von medIQ lab</p>
                <p className="mt-4 leading-relaxed text-paper/70">
                  {/* TODO: Bio Dirk Schlenker – persönliche Geschichte, eigener
                      Studienweg, warum diese Methode. Wichtigster Vertrauensbeweis. */}
                  [TODO: Bio Dirk Schlenker] — hier kommt die persönliche Geschichte
                  hinter medIQ lab hin: Werdegang, Erfahrung und warum daraus diese
                  Methode entstanden ist. Authentisch, konkret, nahbar.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line-onDark pt-6">
                  <div>
                    <p className="font-serif text-2xl font-medium text-paper-light">[X]</p>
                    <p className="text-xs text-paper/60">Jahre Erfahrung</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-medium text-paper-light">[X]</p>
                    <p className="text-xs text-paper/60">begleitete Studierende</p>
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {/* (b) Prinzipien – durchnummeriert, animiert */}
          <div className="lg:col-span-7">
            <Stagger as="ol" className="space-y-0">
              {PRINCIPLES.map((p, i) => (
                <StaggerItem as="li" key={p.title}>
                  <div className="flex gap-6 border-t border-line-onDark py-7">
                    <span className="step-num font-serif text-3xl font-medium leading-none text-teal-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <h3 className="font-serif text-xl font-medium text-paper-light">{p.title}</h3>
                        <span className="text-xs uppercase tracking-[0.18em] text-teal-300/80">
                          {p.sub}
                        </span>
                      </div>
                      <p className="mt-2 leading-relaxed text-paper/70">{p.body}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.15}>
              <p className="mt-5 text-xs text-paper/50">
                {/* TODO: Optional Studien-Quellen verlinken (z. B. Karpicke & Roediger,
                    Cepeda et al.), um die Wissenschaftlichkeit zu belegen. */}
                Tipp: Mit Studien-Quellen belegen, um die Wissenschaftlichkeit sichtbar zu machen.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
