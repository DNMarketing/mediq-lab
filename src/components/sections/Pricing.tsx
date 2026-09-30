import { SKOOL_URL, PRICING } from "@/lib/config";
import { IMAGES } from "@/lib/images";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";
import { EditorialImage } from "../ui/EditorialImage";

/** Ein Produkt, alles inklusive. */
const INCLUDED = [
  "Zugang zur medIQ lab Community auf Skool",
  "Workshop-Reihe: Lernstrategien, Stress & Resilienz, Finanzen",
  "Videoreihen ergänzend zu jedem Workshop",
  "Study Together & Community-Café, jede Woche",
  "Q&As, Live-Quiz & Lernplanerstellung",
  "Gastvorträge von Ärztinnen & Ärzten",
  "Mündliche Prüfungssimulationen",
  "Semesterplaner, Lernzettel & Klausur-Leitfaden",
  "Unsere eigene KI-Lernapp",
];

export function Pricing() {
  return (
    <Section id="zugang" tone="light">
      <Reveal>
        <SectionHeading
          center
          eyebrow="So kommst du rein"
          title="Ein Preis, alles drin"
          subtitle="Eine Jahresmitgliedschaft mit allem, was du brauchst: Community und alle Workshops inklusive. Anmeldung und Zahlung laufen sicher über Skool."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-card border border-teal-400/30 bg-petrol-900 text-paper-light shadow-glow-teal">
          <div className="glow-teal-bg pointer-events-none absolute inset-x-0 top-0 h-1/2" aria-hidden />
          {/* warmes Community-Bild als edler Kopf */}
          <div className="relative">
            <EditorialImage
              src={IMAGES.community}
              alt="Lernende Gruppe im Gespräch"
              aspect="aspect-[16/6]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-petrol-900 via-petrol-900/55 to-transparent" aria-hidden />
            <span className="absolute right-5 top-5 rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-paper-light">
              Alles inklusive
            </span>
          </div>

          <div className="relative p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-serif text-2xl font-medium text-paper-light sm:text-3xl">
                  Jahresmitgliedschaft
                </h3>
                <p className="mt-2 max-w-md text-sm text-paper/75">
                  Dein vollständiges System für ein ganzes Studienjahr. Community und alle
                  Workshops sind enthalten, es gibt nichts dazuzukaufen.
                </p>
              </div>
              <div className="shrink-0">
                <div className="flex items-end gap-2">
                  <span className="font-serif text-5xl font-medium text-paper-light">
                    {PRICING.yearly}&nbsp;€
                  </span>
                  <span className="mb-2 text-sm text-paper/70">/ Jahr</span>
                </div>
                <p className="mt-1 text-xs text-paper/60">
                  Entspricht rund {PRICING.yearlyPerMonth}&nbsp;€ im Monat.
                </p>
              </div>
            </div>

            <p className="mt-6 rounded-card border border-line-onDark bg-petrol-800/50 p-4 text-xs leading-relaxed text-paper/80">
              Zum Vergleich: Ein einziges verlorenes Semester kostet schnell ein
              Vielfaches an Miete, Lebenshaltung und verlorener Zeit. An Privat- und
              Auslands-Unis kommt ein Wiederholungsjahr von 10.000 bis 20.000&nbsp;€
              obendrauf. Die Mitgliedschaft rechnet sich schon, wenn sie dir ein
              einziges verlorenes Semester erspart.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {INCLUDED.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-paper/90">
                  <span aria-hidden className="mt-0.5 shrink-0 text-teal-300">
                    <MedIcon name="check" className="h-[18px] w-[18px]" strokeWidth={2} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <CTAButton href={SKOOL_URL} variant="onDark" size="lg" className="mt-8 w-full">
              Jetzt Platz sichern
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
            <p className="mt-3 text-center text-xs text-paper/70">
              Jährlich · sicher über Skool · alles inklusive
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-ink-mute">
          Hinweis: Alle Inhalte, Anmeldung und Zahlung laufen in Skool. Diese Seite
          informiert und leitet dich dorthin weiter.
        </p>
      </Reveal>
    </Section>
  );
}
