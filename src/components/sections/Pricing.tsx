import { SKOOL_URL, PRICING } from "@/lib/config";
import { IMAGES } from "@/lib/images";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";
import { EditorialImage } from "../ui/EditorialImage";

function Check({ onDark }: { onDark?: boolean }) {
  return (
    <span
      aria-hidden
      className={
        onDark ? "mt-0.5 shrink-0 text-teal-300" : "mt-0.5 shrink-0 text-teal-600"
      }
    >
      <MedIcon name="check" className="h-[18px] w-[18px]" strokeWidth={2} />
    </span>
  );
}

/** Ein Produkt, alles inklusive. Gilt für beide Zahlweisen. */
const INCLUDED = [
  "Community auf Skool: Austausch, Lerngruppen & Q&A",
  "Alle Workshops: Lernsystem, Prüfungsstrategie, Zeitmanagement",
  "Fertige Lernzettel zu prüfungsrelevanten Themen",
  "Unsere eigene KI-Lernapp zum Abfragen & Wiederholen",
  "Mündliche Prüfungssimulationen mit Feedback",
  "Vorträge von Ärztinnen & Ärzten aus der Praxis",
  "Coaching bei Prüfungsangst & mentaler Belastung",
];

export function Pricing() {
  return (
    <Section id="zugang" tone="light">
      <Reveal>
        <SectionHeading
          center
          eyebrow="So kommst du rein"
          title="Ein Preis, alles drin"
          subtitle="Eine Mitgliedschaft mit allem, was du brauchst. Du entscheidest nur, ob du jährlich oder monatlich zahlst. Anmeldung und Zahlung laufen sicher über Skool."
        />
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 lg:grid-cols-5">
        {/* (a) Jahresmitgliedschaft, empfohlen */}
        <Reveal className="lg:col-span-3">
          <div className="relative flex h-full flex-col overflow-hidden rounded-card border border-teal-400/30 bg-petrol-900 text-paper-light shadow-glow-teal">
            <div className="glow-teal-bg pointer-events-none absolute inset-x-0 top-0 h-1/2" aria-hidden />
            {/* warmes Community-Bild als edler Kopf */}
            <div className="relative">
              <EditorialImage
                src={IMAGES.community}
                alt="Lernende Gruppe im Gespräch"
                aspect="aspect-[16/7]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-petrol-900 via-petrol-900/55 to-transparent" aria-hidden />
              <span className="absolute right-5 top-5 rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-paper-light">
                Empfohlen · du sparst rund {PRICING.yearlySaving}&nbsp;€
              </span>
            </div>

            <div className="relative flex flex-1 flex-col p-8">
              <h3 className="font-serif text-2xl font-medium text-paper-light">
                Jahresmitgliedschaft
              </h3>
              <p className="mt-2 text-sm text-paper/75">
                Dein vollständiges System für ein ganzes Studienjahr, zum besten Preis.
              </p>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-serif text-5xl font-medium text-paper-light">
                  {PRICING.yearly}&nbsp;€
                </span>
                <span className="mb-2 text-sm text-paper/70">/ Jahr</span>
              </div>
              <p className="mt-1 text-xs text-paper/60">
                Entspricht rund {PRICING.yearlyPerMonth}&nbsp;€ im Monat.
              </p>

              <p className="mt-4 rounded-card border border-line-onDark bg-petrol-800/50 p-4 text-xs leading-relaxed text-paper/80">
                Zum Vergleich: Ein einziges verlorenes Semester kostet schnell ein
                Vielfaches an Miete, Lebenshaltung und verlorener Zeit. An Privat- und
                Auslands-Unis kommt ein Wiederholungsjahr von 10.000 bis 20.000&nbsp;€
                obendrauf. Die Mitgliedschaft rechnet sich schon, wenn sie dir ein
                einziges verlorenes Semester erspart.
              </p>

              <ul className="mt-7 space-y-3.5">
                {INCLUDED.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-paper/90">
                    <Check onDark />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex-1" />
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

        {/* (b) Monatsmitgliedschaft, flexibel */}
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="flex h-full flex-col rounded-card border border-line bg-paper p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-medium text-ink">Monatlich</h3>
              <span className="rounded-full border border-line px-3 py-1 text-xs text-ink-mute">
                Flexibel
              </span>
            </div>
            <p className="mt-2 text-sm text-ink-soft">
              Gleicher Inhalt, monatlich zahlbar. Ideal, wenn du erst reinschnuppern willst.
            </p>

            <div className="mt-6 flex items-end gap-1.5">
              <span className="font-serif text-5xl font-medium text-ink">
                {PRICING.monthly}&nbsp;€
              </span>
              <span className="mb-2 text-sm text-ink-mute">/ Monat</span>
            </div>

            <ul className="mt-7 space-y-3.5">
              <li className="flex gap-3 text-sm text-ink-soft">
                <Check />
                Alles aus der Jahresmitgliedschaft
              </li>
              <li className="flex gap-3 text-sm text-ink-soft">
                <Check />
                Kein Jahresbetrag auf einmal
              </li>
              <li className="flex gap-3 text-sm text-ink-soft">
                <Check />
                Jederzeit auf jährlich wechseln
              </li>
            </ul>

            <div className="mt-8 flex-1" />
            <CTAButton href={SKOOL_URL} variant="secondary" size="lg" className="w-full">
              Monatlich starten
            </CTAButton>
            <p className="mt-3 text-center text-xs text-ink-mute">
              Monatlich · Laufzeit &amp; Kündigung siehst du in Skool
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-ink-mute">
          Hinweis: Alle Inhalte, Anmeldung und Zahlung laufen in Skool. Diese Seite
          informiert und leitet dich dorthin weiter.
        </p>
      </Reveal>
    </Section>
  );
}
