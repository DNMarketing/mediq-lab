import type { Metadata } from "next";
import { SKOOL_URL } from "@/lib/config";
import { PageIntro } from "@/components/ui/PageIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { MedIcon } from "@/components/ui/MedIcon";
import { AnatomyDna } from "@/components/ui/Anatomy";
import { VSL } from "@/components/sections/VSL";
import { Modules } from "@/components/sections/Modules";
import { Pricing } from "@/components/sections/Pricing";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Programm",
  description:
    "Die medIQ lab Mitgliedschaft für Medizinstudierende in Deutschland und im EU-Ausland: Workshop-Reihe, Videoreihen, wöchentliche Live Events, Downloads und KI-Lernapp, alles in einem Preis. Anmeldung und Inhalte laufen über Skool.",
};

const DnaVisual = (
  <div className="relative mx-auto flex max-w-[18rem] justify-center">
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-card border border-line bg-paper-light shadow-soft">
      <div className="glow-teal-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="absolute inset-y-6 left-1/2 -translate-x-1/2 text-petrol-700">
        <AnatomyDna strokeWidth={1.7} />
      </div>
    </div>
  </div>
);

export default function ProgrammPage() {
  return (
    <>
      <PageIntro
        eyebrow="Das Programm"
        title={
          <>
            Dein vollständiges System,{" "}
            <span className="text-petrol-700 italic">vom Lernsystem bis zum Examen.</span>
          </>
        }
        lead="Eine Mitgliedschaft, alles drin: Workshop-Reihe, Videoreihen, wöchentliche Live Events wie Study Together und Community-Café, Gastvorträge von Ärzt:innen, mündliche Prüfungssimulationen, Downloads und unsere eigene KI-Lernapp. Für Medizinstudierende in Deutschland und im EU-Ausland, ob privat oder staatlich."
        visual={DnaVisual}
        actions={
          <>
            <CTAButton href={SKOOL_URL} size="lg">
              Jetzt Platz sichern
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
            <CTAButton href="/methode" variant="secondary" size="lg" external={false}>
              Erst die Methode ansehen
            </CTAButton>
          </>
        }
      />

      <VSL />
      <Modules />
      <Pricing />

      <CTABand
        eyebrow="Loslegen"
        title={
          <>
            Ein Preis,{" "}
            <span className="italic text-copper-300">alles drin.</span>
          </>
        }
        subtitle="Anmeldung, Zahlung und alle Inhalte laufen sicher über Skool. Diese Seite informiert dich und leitet dich dorthin weiter."
        secondaryHref="/faq"
        secondaryLabel="Offene Fragen? Zur FAQ"
      />
    </>
  );
}
