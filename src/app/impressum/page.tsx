import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalShell
      title="Impressum"
      intro={
        <p>
          Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2
          Medienstaatsvertrag (MStV). Die konkreten Pflichtangaben sind als{" "}
          <strong className="text-ink">[PLATZHALTER]</strong> markiert und vor
          Veröffentlichung vollständig und rechtssicher zu ergänzen (anwaltlich prüfen
          lassen).
        </p>
      }
    >
      <section>
        <h2>Diensteanbieter</h2>
        <p>
          [PLATZHALTER: Name / Firma inkl. Rechtsform]
          <br />
          [PLATZHALTER: Straße &amp; Hausnummer]
          <br />
          [PLATZHALTER: PLZ Ort]
          <br />
          [PLATZHALTER: Land]
        </p>
      </section>

      <section>
        <h2>Vertreten durch</h2>
        <p>[PLATZHALTER: vertretungsberechtigte Person(en), bei Gesellschaften]</p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          E-Mail: {CONTACT_EMAIL}
          {/* TODO: E-Mail in src/lib/config.ts final bestätigen. */}
          <br />
          Telefon: [PLATZHALTER: optional]
        </p>
      </section>

      <section>
        <h2>Registereintrag</h2>
        <p>
          [PLATZHALTER: Registergericht &amp; Registernummer, falls vorhanden, sonst
          Abschnitt entfernen]
        </p>
      </section>

      <section>
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:{" "}
          [PLATZHALTER: USt-IdNr., falls vorhanden]
        </p>
      </section>

      <section>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>[PLATZHALTER: Name und Anschrift der verantwortlichen Person]</p>
      </section>

      <section>
        <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen. [PLATZHALTER: bei abweichender
          Regelung anpassen.] Die EU-Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            ec.europa.eu/consumers/odr
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Haftung für Inhalte &amp; Links</h2>
        <p>
          Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
          Gewähr übernehmen. Für Inhalte externer Links (z. B. Skool) sind ausschließlich
          deren Betreiber verantwortlich; zum Zeitpunkt der Verlinkung waren keine
          Rechtsverstöße erkennbar. [PLATZHALTER: durch anwaltlich geprüfte Formulierung
          ersetzen.]
        </p>
      </section>

      <section>
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Betreiber erstellten Inhalte und Werke auf diesen Seiten
          unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
          gekennzeichnet. [PLATZHALTER: prüfen/ergänzen.]
        </p>
      </section>

      <p className="text-sm text-ink-mute">
        Hinweis: Dieses Impressum ist ein strukturierter Entwurf. Vor Veröffentlichung
        durch vollständige, geprüfte Pflichtangaben ersetzen.
      </p>
    </LegalShell>
  );
}
