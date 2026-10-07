import { Container } from "./ui/Container";

/**
 * Inhalts-Gerüst für Rechtstexte (/impressum, /datenschutz). Die Texte selbst
 * bleiben in allen Sprachversionen Deutsch (Sitz der Betreiberin); auf
 * nicht-deutschen Seiten erscheint ein kurzer Hinweis in der Seitensprache.
 */
export function LegalShell({
  title,
  notice,
  seal,
  children,
}: {
  title: string;
  /** Hinweis in der Seitensprache (leer = kein Hinweis). */
  notice?: string;
  /** Optionales Siegel; wird oben und unten (außerhalb des Prosa-Stylings) gezeigt. */
  seal?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Container className="max-w-3xl pt-24 pb-24 sm:pt-40 sm:pb-28">
      <h1 className="font-serif text-[2.2rem] font-medium leading-[1.1] tracking-[-0.01em] text-ink sm:text-[3rem]">{title}</h1>
      {notice && (
        <p className="mt-4 rounded-card border border-line bg-paper-light px-4 py-3 text-sm leading-relaxed text-ink-soft">{notice}</p>
      )}
      {seal && <div className="mt-8 flex justify-center sm:justify-start">{seal}</div>}
      <div
        lang="de"
        className="mt-10 space-y-6 leading-relaxed text-ink-soft [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-ink [&_h2]:mb-2 [&_h3]:mt-6 [&_h3]:font-medium [&_h3]:text-ink [&_h3]:mb-1 [&_h4]:mt-4 [&_h4]:font-medium [&_h4]:text-ink-soft [&_p]:mt-2 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-ink [&_a]:text-petrol-700 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-copper-600 [&_a]:break-words"
      >
        {children}
      </div>
      {seal && <div className="mt-14 flex justify-center border-t border-line pt-10 sm:justify-start">{seal}</div>}
    </Container>
  );
}
