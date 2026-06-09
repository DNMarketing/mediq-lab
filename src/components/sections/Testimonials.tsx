import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { PlaceholderBadge } from "../ui/Badge";

/**
 * Testimonials ("Echte Ergebnisse").
 *
 * RECHTLICH WICHTIG: Die folgenden Stimmen sind DEMO-Inhalte, damit die
 * Sektion gefüllt & animiert ist. Vor dem Launch MÜSSEN sie durch echte,
 * mit Einverständnis veröffentlichte Testimonials ersetzt werden – erfundene
 * Kundenstimmen sind nach UWG (Nr. 23c / § 5) abmahnbar.
 * TODO: Demo durch echte Testimonials ersetzen (Name, Foto, Uni/Semester).
 */
const TESTIMONIALS = [
  // DEMO-TESTIMONIAL – vor Launch durch echtes ersetzen (UWG Nr. 23c)
  {
    quote:
      "Mit Active Recall habe ich endlich aufgehört, alles dreimal zu lesen. Ich gehe spürbar ruhiger ins Physikum, weil ich weiß, dass der Stoff wirklich sitzt.",
    name: "Lena M.",
    detail: "6. Semester · Uni Mainz",
  },
  // DEMO-TESTIMONIAL – vor Launch durch echtes ersetzen (UWG Nr. 23c)
  {
    quote:
      "Vorher war mein Lernen ein einziges Chaos. Die Struktur aus den Workshops hat mir pro Woche mehrere Stunden gespart – Zeit, die ich jetzt sinnvoll nutze.",
    name: "Jakob R.",
    detail: "4. Semester · Med Uni Wien",
  },
  // DEMO-TESTIMONIAL – vor Launch durch echtes ersetzen (UWG Nr. 23c)
  {
    quote:
      "Als Studentin im Ausland war ein Wiederholungsjahr meine größte Angst. Mit dem System bin ich gut durch die Prüfungsphase gekommen – ohne verlorenes Jahr.",
    name: "Sophie K.",
    detail: "8. Semester · Semmelweis Budapest",
  },
];

export function Testimonials() {
  return (
    <Section id="ergebnisse" tone="sand">
      <Reveal>
        <SectionHeading
          eyebrow="04 — Echte Ergebnisse"
          title="Was Mitglieder erreichen"
          subtitle="Erfahrungen aus der Community – realistisch, ohne Wunder-Versprechen. Ergebnisse sind individuell."
        />
      </Reveal>

      {/* Hinweis-Streifen: aktuell Demo-Inhalte */}
      <Reveal delay={0.05}>
        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-card border border-copper-500/40 bg-copper-100/50 px-5 py-3.5">
          <PlaceholderBadge label="Demo-Inhalte" />
          <p className="text-sm text-copper-600">
            Diese Stimmen sind Platzhalter zur Veranschaulichung. Vor dem Launch durch
            echte, belegbare Testimonials ersetzen (UWG Nr. 23c).
          </p>
        </div>
      </Reveal>

      <Stagger className="mt-10 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <StaggerItem key={t.name}>
            <figure className="flex h-full flex-col rounded-card border border-line bg-paper-light p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <span className="font-serif text-5xl leading-none text-teal-400" aria-hidden>
                “
              </span>
              <blockquote className="-mt-2 flex-1">
                <p className="font-serif text-lg leading-relaxed text-ink">{t.quote}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-line-strong bg-paper text-ink-mute"
                  aria-hidden
                  title="Echtes Foto einfügen"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="9" r="3" />
                    <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-ink-mute">{t.detail}</p>
                </div>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.15}>
        <p className="mt-8 text-xs text-ink-mute">
          Ergebnisse sind individuell und keine Garantie. Wir zeigen künftig nur echte,
          mit Einverständnis veröffentlichte Erfahrungen.
        </p>
      </Reveal>
    </Section>
  );
}
