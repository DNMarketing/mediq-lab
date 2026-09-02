import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalShell
      title="Datenschutzerklärung"
      showBadge={false}
      intro={
        <p>
          Diese Website verarbeitet so wenige Daten wie möglich. Sie setzt{" "}
          <strong className="text-ink">keine Cookies</strong> und bindet{" "}
          <strong className="text-ink">keine Tracking-, Analyse- oder Werbedienste</strong>{" "}
          ein. Ein Cookie- oder Consent-Banner ist daher nicht erforderlich.
        </p>
      }
    >
      <section>
        <h2>1. Verantwortliche Stelle</h2>
        <p>
          Verantwortlich im Sinne der DSGVO ist:
          <br />
          Dirk Schlenker
          <br />
          Albert-Einstein-Straße 7
          <br />
          97990 Weikersheim
          <br />
          Telefon: +491755896457
          <br />
          E-Mail: {CONTACT_EMAIL}
        </p>
      </section>

      <section>
        <h2>2. Keine Cookies, kein Tracking</h2>
        <p>
          Diese Website setzt keinerlei Cookies und verwendet keine Analyse-, Tracking-
          oder Werbe-Tools (z. B. Google Analytics, Meta-Pixel o. Ä.). Es findet keine
          Reichweitenmessung und keine Profilbildung statt.
        </p>
        <p>
          Schriften und Bilder werden lokal von dieser Website ausgeliefert (self-hosted).
          Es werden keine externen Dienste, CDNs oder Schriftarten Dritter (z. B. Google
          Fonts, Unsplash) eingebunden. Beim reinen Aufruf der Seite baut dein Browser
          daher keine Verbindung zu Servern Dritter auf.
        </p>
      </section>

      <section>
        <h2>3. Hosting und Server-Logfiles</h2>
        <p>
          Die Website wird bei einem Hosting-Dienstleister (Auftragsverarbeiter) als
          statische Seite bereitgestellt. Beim Aufruf verarbeitet der Hoster technisch
          notwendige Zugriffsdaten in Server-Logfiles: IP-Adresse, Datum und Uhrzeit,
          angefragte Datei/URL, Referrer sowie Browser- und Betriebssystem-Kennung. Diese
          Daten sind für die sichere, stabile Auslieferung der Seite erforderlich; eine
          Zusammenführung mit anderen Daten oder eine Identifizierung einzelner Personen
          erfolgt nicht.
        </p>
        <p>
          Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren und
          funktionsfähigen Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Sofern der Hoster Daten in
          einem Drittland (z. B. USA) verarbeitet, geschieht dies auf Grundlage geeigneter
          Garantien (Standardvertragsklauseln).
        </p>
      </section>

      <section>
        <h2>4. Kontaktaufnahme (Formular und E-Mail)</h2>
        <p>
          Wenn du uns über das Kontaktformular oder per E-Mail kontaktierst, verarbeiten wir
          die von dir angegebenen Daten (Name, E-Mail-Adresse und deine Nachricht)
          ausschließlich zur Bearbeitung deiner Anfrage. Zur Übermittlung des Formulars kann
          ein Formular-Dienstleister als Auftragsverarbeiter eingesetzt werden.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Beantwortung einer Anfrage / vor-
          vertragliche Maßnahmen) bzw. lit. f (berechtigtes Interesse an der Kommunikation).
          Wir löschen die Daten, sobald sie zur Bearbeitung nicht mehr erforderlich sind und
          keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      <section>
        <h2>5. Weiterleitung zu Skool</h2>
        <p>
          Anmeldung, Community und Zahlung erfolgen extern auf skool.com. Mit dem Klick auf
          einen entsprechenden Button verlässt du diese Website; ab dann gilt die
          Datenschutzerklärung von Skool. Auf die dortige Verarbeitung haben wir keinen
          Einfluss. Dasselbe gilt für andere externe Links (z. B. LinkedIn): Erst mit deinem
          Klick wird eine Verbindung zum jeweiligen Anbieter aufgebaut.
        </p>
      </section>

      <section>
        <h2>6. Deine Rechte</h2>
        <p>Dir stehen nach DSGVO folgende Rechte zu:</p>
        <ul>
          <li>Auskunft über die verarbeiteten Daten (Art. 15)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16)</li>
          <li>Löschung (Art. 17) und Einschränkung der Verarbeitung (Art. 18)</li>
          <li>Datenübertragbarkeit (Art. 20)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21)</li>
          <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77)</li>
        </ul>
        <p>
          Zur Ausübung genügt eine formlose Nachricht an {CONTACT_EMAIL}. Zuständige
          Aufsichtsbehörde ist der Landesbeauftragte für den Datenschutz und die
          Informationsfreiheit Baden-Württemberg (LfDI BW).
        </p>
      </section>

      <p className="text-sm text-ink-mute">
        Stand: aktuelle Fassung. Wir passen diese Erklärung an, sobald sich die
        Verarbeitung ändert (etwa wenn künftig ein Video oder ein weiterer Dienst
        eingebunden wird). Im Zweifel bitte rechtlich prüfen lassen.
      </p>
    </LegalShell>
  );
}
