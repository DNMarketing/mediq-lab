import { Container } from "./ui/Container";
import { PlaceholderBadge } from "./ui/Badge";

/**
 * Inhalts-Gerüst für Rechtstexte (/impressum, /datenschutz). Header & Footer
 * kommen aus dem Root-Layout. Struktur ist vollständig angelegt, die
 * konkreten Pflichtangaben sind als [PLATZHALTER] markiert und vor dem
 * Go-Live rechtskonform zu befüllen (anwaltlich prüfen lassen).
 */
export function LegalShell({
  title,
  intro,
  updated = null,
  showBadge = true,
  seal,
  children,
}: {
  title: string;
  intro?: React.ReactNode;
  /** Datum-Zeile; `null`/leer = ausblenden. */
  updated?: string | null;
  /** „Platzhalter"-Badge am Titel; für fertige Seiten auf false. */
  showBadge?: boolean;
  /** Optionales Siegel; wird oben und unten (außerhalb des Prosa-Stylings) gezeigt. */
  seal?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Container className="max-w-3xl pt-24 pb-24 sm:pt-40 sm:pb-28">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <h1 className="font-serif text-[2.2rem] font-medium leading-[1.1] tracking-[-0.01em] text-ink sm:text-[3rem]">
          {title}
        </h1>
        {showBadge && <PlaceholderBadge />}
      </div>
      {updated && <p className="text-sm text-ink-mute">Zuletzt aktualisiert: {updated}</p>}
      {seal && <div className="mt-8 flex justify-center sm:justify-start">{seal}</div>}
      {intro && <div className="mt-6 leading-relaxed text-ink-soft">{intro}</div>}
      <div className="mt-10 space-y-6 leading-relaxed text-ink-soft [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-ink [&_h2]:mb-2 [&_h3]:mt-6 [&_h3]:font-medium [&_h3]:text-ink [&_h3]:mb-1 [&_h4]:mt-4 [&_h4]:font-medium [&_h4]:text-ink-soft [&_p]:mt-2 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-ink [&_a]:text-petrol-700 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-copper-600 [&_a]:break-words">
        {children}
      </div>
      {seal && <div className="mt-14 flex justify-center border-t border-line pt-10 sm:justify-start">{seal}</div>}
    </Container>
  );
}
