import { SKOOL_URL } from "@/lib/config";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";

function Check({ onDark }: { onDark?: boolean }) {
  return (
    <span aria-hidden className={onDark ? "mt-0.5 shrink-0 text-teal-300" : "mt-0.5 shrink-0 text-teal-600"}>
      <MedIcon name="check" className="h-[17px] w-[17px]" strokeWidth={2} />
    </span>
  );
}

const COMMUNITY = ["Community, Lerngruppen & Q&A", "Ausgewählte Methoden-Inhalte", "Niedrige Schwelle, jederzeit kündbar"];
const WORKSHOP = [
  "Das komplette Lernsystem bis zum Examen",
  "Prüfungsstrategie, Anki-Setups & Lernpläne",
  "Community-Zugang inklusive",
  "Lebenslanger Zugang zu allen Inhalten",
];

/** Kompakte Angebots-Section auf der Startseite: Preis/Angebot ohne Extra-Klick sichtbar. */
export function OfferTeaser() {
  return (
    <Section tone="sand">
      <Reveal>
        <SectionHeading
          center
          eyebrow="So kommst du rein"
          title="Zwei Wege, ein Ziel"
          subtitle="Steig niedrigschwellig über die Community ein oder geh direkt mit der kompletten Workshop-Reihe. Anmeldung und Zahlung laufen sicher über Skool."
        />
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-4xl items-stretch gap-5 md:grid-cols-2">
        {/* Community-Abo */}
        <Reveal>
          <div className="flex h-full flex-col rounded-card border border-line bg-paper-light p-7 shadow-soft">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-medium text-ink">Community-Abo</h3>
              <span className="rounded-full border border-line px-3 py-1 text-xs text-ink-mute">Einstieg</span>
            </div>
            <div className="mt-4 flex items-end gap-1.5">
              <span className="font-serif text-4xl font-medium text-ink">20&nbsp;€</span>
              <span className="mb-1.5 text-sm text-ink-mute">/ Monat</span>
            </div>
            <ul className="mt-6 space-y-3">
              {COMMUNITY.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-ink-soft">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex-1" />
            <CTAButton href={SKOOL_URL} variant="secondary" className="mt-7 w-full">
              Community beitreten
            </CTAButton>
          </div>
        </Reveal>

        {/* Premium-Workshop-Reihe (hervorgehoben) */}
        <Reveal delay={0.1}>
          <div className="relative flex h-full flex-col overflow-hidden rounded-card border border-teal-400/30 bg-petrol-900 p-7 text-paper-light shadow-glow-teal">
            <div className="glow-teal-bg pointer-events-none absolute inset-x-0 top-0 h-1/2" aria-hidden />
            <div className="relative flex items-center justify-between">
              <h3 className="font-serif text-xl font-medium">Workshop-Reihe</h3>
              <span className="rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-paper-light">
                Empfohlen
              </span>
            </div>
            <div className="relative mt-4 flex items-end gap-2">
              <span className="font-serif text-4xl font-medium">800&nbsp;€</span>
              <span className="mb-1.5 text-sm text-paper/70">einmalig</span>
            </div>
            <ul className="relative mt-6 space-y-3">
              {WORKSHOP.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-paper/90">
                  <Check onDark />
                  {f}
                </li>
              ))}
            </ul>
            <div className="relative flex-1" />
            <CTAButton href={SKOOL_URL} variant="onDark" className="relative mt-7 w-full">
              Workshop-Reihe sichern
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-8 text-center">
          <CTAButton href="/programm" variant="ghost" external={false}>
            Alle Details &amp; Inhalte ansehen
            <MedIcon name="arrowRight" className="h-4 w-4" />
          </CTAButton>
        </div>
      </Reveal>
    </Section>
  );
}
