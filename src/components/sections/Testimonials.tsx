import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { PlaceholderBadge } from "../ui/Badge";

/**
 * Testimonials ("Echte Ergebnisse").
 * RECHTLICH WICHTIG: KEINE erfundenen Kundenstimmen – nach § 5 UWG abmahnbar.
 * Diese Einträge sind klar als Platzhalter markiert und MÜSSEN durch echte,
 * mit Einverständnis veröffentlichte Stimmen ersetzt werden.
 * TODO: Echte Testimonials einsetzen (Name, Foto, Uni/Semester, Ergebnis).
 */
const SLOTS = [
  { detail: "[Uni · Semester]", hint: "z. B. vom Wackelkandidaten zum sicheren Bestehen" },
  { detail: "[Auslands-Uni · Semester]", hint: "z. B. Wiederholungsjahr (12.000 €) durch bestandene Nachprüfung vermieden" },
  { detail: "[Staatliche Uni · Semester]", hint: "z. B. weniger Lernstunden, mehr behalten" },
];

export function Testimonials() {
  return (
    <Section id="ergebnisse" tone="sand">
      <Reveal>
        <SectionHeading
          eyebrow="Echte Ergebnisse"
          title="Was Mitglieder erreicht haben"
          subtitle="Keine Versprechen, sondern Erfahrungen aus der Community. Hier erscheinen echte, mit Einverständnis veröffentlichte Stimmen von Medizinstudierenden."
        />
      </Reveal>

      {/* Rechtlicher Hinweis-Streifen */}
      <Reveal delay={0.05}>
        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-card border border-copper-500/40 bg-copper-100/50 px-5 py-3.5">
          <PlaceholderBadge />
          <p className="text-sm text-copper-600">
            Noch keine echten Stimmen hinterlegt. Erfundene Testimonials sind nach
            § 5 UWG abmahnbar – bitte nur reale, belegbare Erfahrungen einsetzen.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {SLOTS.map((s, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-card border border-dashed border-line-strong bg-paper-light p-7">
              <span className="font-serif text-5xl leading-none text-copper-300" aria-hidden>
                “
              </span>
              <blockquote className="mt-3 flex-1">
                <p className="font-serif text-lg font-medium uppercase tracking-[0.12em] text-ink-mute">
                  Echtes Testimonial einfügen
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-mute">{s.hint}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-line-strong text-ink-mute"
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="9" r="3" />
                    <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-ink-soft">[Vorname N.]</p>
                  <p className="text-xs text-ink-mute">{s.detail}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <p className="mt-8 text-xs text-ink-mute">
          Ergebnisse sind individuell und keine Garantie.
        </p>
      </Reveal>
    </Section>
  );
}
