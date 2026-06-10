import { DIRK_PHOTO, LINKEDIN_DIRK } from "@/lib/config";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { AnatomyBrain } from "../ui/Anatomy";
import { Portrait } from "../ui/Portrait";
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
              {/* Porträt Dirk Schlenker – zeigt /public-Foto, sonst Platzhalter */}
              <div className="relative flex aspect-square items-center justify-center overflow-hidden border-b border-line-onDark bg-petrol-800/60">
                <Portrait file={DIRK_PHOTO} alt="Dirk Schlenker, Gründer von medIQ lab" />
              </div>
              <figcaption className="p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-serif text-xl font-medium text-paper-light">
                    Dirk Schlenker
                  </p>
                  <PlaceholderBadge label="Bio Platzhalter" />
                </div>
                <p className="mt-1 text-sm text-teal-300">Gründer von medIQ lab</p>
                <a
                  href={LINKEDIN_DIRK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-paper/80 transition-colors hover:text-teal-300"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.25 8.25h4.5V24h-4.5V8.25Zm7.25 0h4.31v2.15h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V24h-4.5v-6.99c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.7V24h-4.5V8.25Z" />
                  </svg>
                  LinkedIn-Profil ansehen
                </a>
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
