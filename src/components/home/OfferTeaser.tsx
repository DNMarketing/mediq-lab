import { SKOOL_URL, PRICING } from "@/lib/config";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";

const INCLUDED = [
  "Workshop-Reihe, etwa 2× pro Semester",
  "Videoreihen zu Lernstrategien, Resilienz & Finanzen",
  "Study Together & Community-Café, jede Woche",
  "Gastvorträge von Ärzt:innen & Prüfungssimulation",
  "Semesterplaner, Lernzettel & Klausur-Leitfaden",
  "Eigene KI-Lernapp",
];

/** Kompakte Angebots-Section auf der Startseite: ein Produkt, zwei Zahlweisen. */
export function OfferTeaser() {
  return (
    <Section tone="sand">
      <Reveal>
        <SectionHeading
          center
          eyebrow="So kommst du rein"
          title="Ein Preis, alles drin"
          subtitle="Keine Pakete, keine Upsells: eine Mitgliedschaft mit Workshops, Videoreihen, wöchentlichen Live Events, Downloads und KI-Lernapp. Du wählst nur, wie du zahlst."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-card border border-teal-400/30 bg-petrol-900 p-6 text-paper-light shadow-glow-teal sm:p-9">
          <div className="glow-teal-bg pointer-events-none absolute inset-x-0 top-0 h-1/2" aria-hidden />

          <div className="relative grid gap-4 sm:grid-cols-2">
            {/* Jährlich (empfohlen) */}
            <div className="rounded-card border border-teal-400/40 bg-petrol-800/60 p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Jährlich</span>
                <span className="rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-paper-light">
                  Empfohlen
                </span>
              </div>
              <div className="mt-3 flex items-end gap-1.5">
                <span className="font-serif text-4xl font-medium">{PRICING.yearly}&nbsp;€</span>
                <span className="mb-1.5 text-sm text-paper/70">/ Jahr</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-paper/70">
                Entspricht rund {PRICING.yearlyPerMonth}&nbsp;€ im Monat. Du sparst rund{" "}
                {PRICING.yearlySaving}&nbsp;€ gegenüber monatlicher Zahlung.
              </p>
            </div>

            {/* Monatlich */}
            <div className="rounded-card border border-line-onDark p-5">
              <span className="text-sm font-medium">Monatlich</span>
              <div className="mt-3 flex items-end gap-1.5">
                <span className="font-serif text-4xl font-medium">{PRICING.monthly}&nbsp;€</span>
                <span className="mb-1.5 text-sm text-paper/70">/ Monat</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-paper/70">
                Gleicher Inhalt, volle Flexibilität.
              </p>
            </div>
          </div>

          <ul className="relative mt-7 grid gap-2.5 sm:grid-cols-2">
            {INCLUDED.map((f) => (
              <li key={f} className="flex gap-3 text-sm text-paper/90">
                <span aria-hidden className="mt-0.5 shrink-0 text-teal-300">
                  <MedIcon name="check" className="h-[17px] w-[17px]" strokeWidth={2} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={SKOOL_URL} variant="onDark" size="lg" className="w-full sm:flex-1">
              Jetzt Platz sichern
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
            <CTAButton
              href="/programm"
              variant="onDarkGhost"
              size="lg"
              external={false}
              className="w-full sm:w-auto"
            >
              Alle Details ansehen
            </CTAButton>
          </div>
          <p className="relative mt-4 text-center text-xs text-paper/60">
            Anmeldung &amp; Zahlung sicher über Skool · keine versteckten Kosten
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
