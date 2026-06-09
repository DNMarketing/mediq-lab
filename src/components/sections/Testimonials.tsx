import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { PlaceholderBadge } from "../ui/Badge";

/**
 * Testimonials ("Echte Ergebnisse").
 * WICHTIG: KEINE erfundenen Erfolgsgeschichten. Alle Einträge sind als
 * Platzhalter gekennzeichnet und müssen durch echte, belegbare Stimmen
 * ersetzt werden.
 * TODO: Echte Testimonials mit Einverständnis einsetzen (Name, Uni/Semester,
 * konkretes Ergebnis). Erst dann die PlaceholderBadges entfernen.
 */
const TESTIMONIALS = [
  {
    quote:
      "[Platzhalter-Zitat – konkretes Ergebnis: z. B. „Ich bin vom Wackelkandidaten zum sicheren Bestehen gekommen und habe mein Lernsystem komplett umgestellt.“]",
    name: "[Vorname N.]",
    detail: "[Uni · Semester]",
  },
  {
    quote:
      "[Platzhalter-Zitat – z. B. „Nach einem Fehlversuch hätte mich ein Wiederholungsjahr im Ausland über 12.000 € gekostet. Mit der Methode habe ich die Nachprüfung bestanden.“]",
    name: "[Vorname N.]",
    detail: "[Uni im Ausland · Semester]",
  },
  {
    quote:
      "[Platzhalter-Zitat – z. B. „Endlich ein System statt Chaos. Ich lerne weniger Stunden und behalte trotzdem mehr.“]",
    name: "[Vorname N.]",
    detail: "[Staatliche Uni · Semester]",
  },
];

export function Testimonials() {
  return (
    <Section id="ergebnisse" className="relative">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Echte Ergebnisse"
            title="Was Mitglieder erreicht haben"
            subtitle="Keine Versprechen, sondern Erfahrungen aus der Community. Hier kommen echte Stimmen von Medizinstudierenden hin."
          />
          <PlaceholderBadge className="mb-2" />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-ink-800/50 p-7">
              <div className="mb-4 flex gap-0.5 text-accent" aria-label="Bewertung Platzhalter">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} aria-hidden>★</span>
                ))}
              </div>
              <blockquote className="flex-1 text-[15px] leading-relaxed text-slate-300">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-ink-700 text-xs text-slate-500">
                  Foto
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.detail}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-8 text-center text-xs text-slate-600">
          Ergebnisse sind individuell und keine Garantie. Wir zeigen hier nur echte,
          mit Einverständnis veröffentlichte Erfahrungen.
        </p>
      </Reveal>
    </Section>
  );
}
