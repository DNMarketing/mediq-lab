import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Impressum – medIQ lab",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalShell title="Impressum">
      {/* TODO: Rechtskonformes Impressum nach § 5 DMG / § 18 MStV einsetzen.
          Mindestangaben: Anbieter, Anschrift, Kontakt, ggf. USt-IdNr.,
          Verantwortliche:r i.S.d. Presserechts. */}
      <p>
        <strong className="text-ink">Angaben gemäß § 5 DDG</strong>
      </p>
      <p>
        [Name / Firma]
        <br />
        [Straße &amp; Hausnummer]
        <br />
        [PLZ Ort]
        <br />
        [Land]
      </p>
      <p>
        <strong className="text-ink">Kontakt</strong>
        <br />
        E-Mail: [kontakt@…]
        <br />
        Telefon: [optional]
      </p>
      <p>
        <strong className="text-ink">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </strong>
        <br />
        [Name, Anschrift]
      </p>
      <p className="text-ink-mute">
        Platzhalter – bitte vor Veröffentlichung durch vollständige, geprüfte
        Pflichtangaben ersetzen.
      </p>
    </LegalShell>
  );
}
