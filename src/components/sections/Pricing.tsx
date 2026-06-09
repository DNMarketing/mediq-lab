import { SKOOL_URL } from "@/lib/config";
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
    <Section id="zugang" tone="light">
      <Reveal>
        <SectionHeading
          center
          eyebrow="05 — So kommst du rein"
          title="Zwei Wege — ein Ziel: sicher durchs Studium"
          subtitle="Starte niedrigschwellig in der Community oder geh direkt mit der kompletten Workshop-Reihe den schnellsten Weg. Anmeldung und Zahlung laufen sicher über Skool."
        />
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 lg:grid-cols-5">
        {/* (a) Community-Abo */}
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col rounded-card border border-line bg-paper p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-medium text-ink">Community-Abo</h3>
              <span className="rounded-full border border-line px-3 py-1 text-xs text-ink-mute">
                Einstieg
              </span>
            </div>
            <p className="mt-2 text-sm text-ink-soft">
              Der niedrigschwellige Einstieg. Lern die Community kennen und komm in Bewegung.
            </p>

            <div className="mt-6 flex items-end gap-1.5">
              <span className="font-serif text-5xl font-medium text-ink">20&nbsp;€</span>
              <span className="mb-2 text-sm text-ink-mute">/ Monat</span>
            </div>

            <ul className="mt-7 space-y-3.5">
              {COMMUNITY_FEATURES.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-ink-soft">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex-1" />
            <CTAButton href={SKOOL_URL} variant="secondary" size="lg" className="w-full">
              Community beitreten
            </CTAButton>
            <p className="mt-3 text-center text-xs text-ink-mute">
              Monatlich · jederzeit kündbar
            </p>
          </div>
        </Reveal>

        {/* (b) Premium-Workshop-Reihe – Hauptprodukt, hervorgehoben */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="relative flex h-full flex-col overflow-hidden rounded-card border border-teal-400/30 bg-petrol-900 text-paper-light shadow-glow-teal">
            <div className="glow-teal-bg pointer-events-none absolute inset-x-0 top-0 h-1/2" aria-hidden />
            {/* warmes Community-Bild als edler Kopf */}
            <div className="relative">
              <EditorialImage
                id={IMAGES.community}
                alt="Lernende Gruppe im Gespräch"
                aspect="aspect-[16/7]"
                width={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-petrol-900 via-petrol-900/55 to-transparent" aria-hidden />
              <span className="absolute right-5 top-5 rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-paper-light">
                Empfohlen · Hauptprodukt
              </span>
            </div>

            <div className="relative flex flex-1 flex-col p-8">
              <h3 className="font-serif text-2xl font-medium text-paper-light">
                Premium-Workshop-Reihe
              </h3>
              <p className="mt-2 text-sm text-paper/75">
                Das zentrale Transformationsprodukt. Dein vollständiges System, um
                effizient zu lernen und sicher zu bestehen.
              </p>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-serif text-5xl font-medium text-paper-light">800&nbsp;€</span>
                <span className="mb-2 text-sm text-paper/70">einmalig</span>
              </div>

              <p className="mt-4 rounded-card border border-line-onDark bg-petrol-800/50 p-4 text-xs leading-relaxed text-paper/80">
                Zum Vergleich: Ein einziges verlorenes Semester kostet schnell ein
                Vielfaches an Miete, Lebenshaltung und verlorener Zeit. Im Ausland
                kommt ein Wiederholungsjahr von 10.000–15.000&nbsp;€ obendrauf. Die
                Workshop-Reihe rechnet sich schon, wenn sie dir ein einziges verlorenes
                Semester erspart.
              </p>

              <ul className="mt-7 space-y-3.5">
                {WORKSHOP_FEATURES.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-paper/90">
                    <Check onDark />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex-1" />
              <CTAButton href={SKOOL_URL} variant="onDark" size="lg" className="mt-8 w-full">
                Workshop-Reihe sichern
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
              <p className="mt-3 text-center text-xs text-paper/70">
                Einmalkauf · sicher über Skool · Details &amp; Ratenoptionen dort
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-ink-mute">
          Hinweis: Die Präsentation aller Workshop-Details sowie Anmeldung und Zahlung
          erfolgen in Skool. Diese Seite informiert und leitet dich dorthin weiter.
        </p>
      </Reveal>
    </Section>
  );
}
