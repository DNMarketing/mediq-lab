import { Container } from "./ui/Container";
import { PlaceholderBadge } from "./ui/Badge";

/**
 * Inhalts-Gerüst für Rechtstexte (/impressum, /datenschutz). Header & Footer
 * kommen aus dem Root-Layout. Struktur ist vollständig angelegt – die
 * konkreten Pflichtangaben sind als [PLATZHALTER] markiert und vor dem
 * Go-Live rechtskonform zu befüllen (anwaltlich prüfen lassen).
 */
export function LegalShell({
  title,
  intro,
  updated = "[PLATZHALTER: Datum letzte Aktualisierung]",
  children,
}: {
  title: string;
  intro?: React.ReactNode;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="max-w-3xl pt-32 pb-24 sm:pt-40 sm:pb-28">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <h1 className="font-serif text-[2.2rem] font-medium leading-[1.1] tracking-[-0.01em] text-ink sm:text-[3rem]">
          {title}
        </h1>
        <PlaceholderBadge />
      </div>
      <p className="text-sm text-ink-mute">Zuletzt aktualisiert: {updated}</p>
      {intro && <div className="mt-6 leading-relaxed text-ink-soft">{intro}</div>}
      <div className="mt-10 space-y-8 leading-relaxed text-ink-soft [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-ink [&_h2]:mb-2 [&_h3]:font-medium [&_h3]:text-ink [&_h3]:mt-4 [&_h3]:mb-1 [&_p]:mt-2 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_a]:text-petrol-700 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-copper-600">
        {children}
      </div>
    </Container>
  );
}
