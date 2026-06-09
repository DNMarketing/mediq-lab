import { SKOOL_URL } from "@/lib/config";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { PlaceholderBadge } from "../ui/Badge";

function Check() {
  return (
    <span
      aria-hidden
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-[11px] text-accent"
    >
      ✓
    </span>
  );
}

const COMMUNITY_FEATURES = [
  "Zugang zur medIQ lab Community auf Skool",
  "Austausch, Lerngruppen & Q&A",
  "Ausgewählte Methoden-Inhalte zum Reinkommen",
  "Niedrige monatliche Schwelle, jederzeit kündbar",
];

const WORKSHOP_FEATURES = [
  "Die komplette Premium-Workshop-Reihe (alle Module)",
  "Schritt-für-Schritt-Lernsystem von Tag 1 bis Examen",
  "Prüfungs- & Altfragen-Strategie, Anki-Setups, Lernpläne",
  "Werkzeuge gegen Prüfungsangst & mentale Belastung",
  "Lebenslanger Zugang zu allen Workshop-Inhalten",
  "Community-Zugang inklusive",
];

export function Pricing() {
  return (
    <Section id="zugang" className="relative">
      <div aria-hidden className="glow-radial pointer-events-none absolute inset-x-0 top-0 h-80" />

      <Reveal>
        <SectionHeading
          center
          eyebrow="So kommst du rein"
          title="Zwei Wege – ein Ziel: sicher durchs Studium"
          subtitle="Starte niedrigschwellig in der Community oder geh direkt mit der kompletten Workshop-Reihe den schnellsten Weg. Anmeldung und Zahlung laufen sicher über Skool."
        />
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-2">
        {/* (a) Community-Abo */}
        <Reveal>
          <div className="flex h-full flex-col rounded-2xl border border-line bg-ink-800/50 p-8">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-white">
                Community-Abo
              </h3>
              <span className="rounded-full border border-line bg-ink-900/60 px-3 py-1 text-xs text-slate-400">
                Einstieg
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Der niedrigschwellige Einstieg. Lern die Community kennen und komm in
              Bewegung.
            </p>

            <div className="mt-6 flex items-end gap-2">
              <span className="font-display text-4xl font-semibold text-white">
                [XX&nbsp;€]
              </span>
              <span className="mb-1.5 text-sm text-slate-500">/ Monat</span>
              <PlaceholderBadge className="mb-2 ml-1" />
            </div>

            <ul className="mt-7 space-y-3">
              {COMMUNITY_FEATURES.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-slate-300">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex-1" />
            <CTAButton href={SKOOL_URL} variant="secondary" size="lg" className="w-full">
              Community beitreten
            </CTAButton>
            <p className="mt-3 text-center text-xs text-slate-500">
              Monatlich · jederzeit kündbar
            </p>
          </div>
        </Reveal>

        {/* (b) Premium-Workshop-Reihe (Hauptprodukt – hervorgehoben) */}
        <Reveal delay={0.1}>
          <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-accent/40 bg-ink-800/70 p-8 shadow-glow">
            <div aria-hidden className="glow-radial absolute inset-x-0 top-0 h-1/2 opacity-80" />
            <div className="absolute right-6 top-6">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink-950">
                Empfohlen
              </span>
            </div>

            <div className="relative">
              <h3 className="font-display text-xl font-semibold text-white">
                Premium-Workshop-Reihe
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Das zentrale Transformationsprodukt. Dein vollständiges System, um
                effizient zu lernen und sicher zu bestehen.
              </p>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-4xl font-semibold text-white">
                  [XXX&nbsp;€]
                </span>
                <span className="mb-1.5 text-sm text-slate-400">einmalig</span>
                <PlaceholderBadge className="mb-2 ml-1" />
              </div>

              <p className="mt-3 rounded-lg border border-line bg-ink-900/40 p-3 text-xs leading-relaxed text-slate-400">
                Zum Vergleich: Ein einziges verlorenes Semester kostet schnell ein
                Vielfaches – an Miete, Lebenshaltung und verlorener Zeit. Im Ausland
                kommt ein Wiederholungsjahr von 10.000–15.000&nbsp;€ obendrauf.
              </p>

              <ul className="mt-7 space-y-3">
                {WORKSHOP_FEATURES.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-slate-200">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              <CTAButton href={SKOOL_URL} size="lg" className="mt-8 w-full">
                Workshop-Reihe sichern
                <span aria-hidden>→</span>
              </CTAButton>
              <p className="mt-3 text-center text-xs text-slate-400">
                Einmalkauf · sicher über Skool · Details & Ratenoptionen dort
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-600">
          Hinweis: Die Präsentation aller Workshop-Details sowie Anmeldung und
          Zahlung erfolgen in Skool. Diese Seite informiert und leitet dich dorthin
          weiter. {/* TODO: finale Preise & ggf. Ratenzahlung/Garantie hier abbilden */}
        </p>
      </Reveal>
    </Section>
  );
}
