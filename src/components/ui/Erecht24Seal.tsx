/**
 * eRecht24-Siegel – bewusst SELF-HOSTED (Bild aus public/img), damit beim
 * Seitenaufruf kein externer Request an eRecht24 geht (konsistent mit dem
 * tracking-freien Setup). Der Link zu eRecht24 lädt erst beim Klick.
 */
export function Erecht24Seal({ type }: { type: "impressum" | "datenschutz" }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const file =
    type === "impressum" ? "erecht24-impressum.png" : "erecht24-datenschutz.png";
  const label =
    type === "impressum"
      ? "eRecht24 Siegel für ein rechtssicheres Impressum"
      : "eRecht24 Siegel für eine rechtssichere Datenschutzerklärung";

  return (
    <a
      href="https://www.e-recht24.de/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
      aria-label={label}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${base}/img/${file}`}
        alt={label}
        width={190}
        loading="lazy"
        decoding="async"
        className="h-auto w-[190px]"
      />
    </a>
  );
}
