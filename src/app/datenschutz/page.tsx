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
      intro={
        <p>
          Diese Erklärung informiert über die Verarbeitung personenbezogener Daten beim
          Besuch dieser Website nach DSGVO. Die Struktur ist vollständig angelegt;
          konkrete Angaben (z. B. Verantwortliche Stelle) sind als{" "}
          <strong className="text-ink">[PLATZHALTER]</strong> markiert. Vor
          Veröffentlichung durch eine rechtssichere Fassung ersetzen (anwaltlich prüfen
          oder geprüften Generator nutzen).
        </p>
      }
    >
      <section>
        <h2>1. Verantwortliche Stelle</h2>
        <p>
          Verantwortlich im Sinne der DSGVO ist:
          <br />
          [PLATZHALTER: Name, Anschrift, siehe Impressum]
          <br />
          E-Mail: {CONTACT_EMAIL}
        </p>
      </section>

      <section>
        <h2>2. Hosting</h2>
        <p>
          Diese Website wird als statische Seite über [PLATZHALTER: Netlify, Netlify Inc.]
          ausgeliefert. Beim Aufruf verarbeitet der Hoster technisch notwendige Daten
          (u. a. IP-Adresse, Zeitpunkt, abgerufene Datei, User-Agent) in Server-Logfiles.
          Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren, stabilen
          Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Sofern der Hoster Daten außerhalb der EU
          (z. B. USA) verarbeitet, erfolgt dies auf Grundlage geeigneter Garantien
          [PLATZHALTER: Standardvertragsklauseln / Data Privacy Framework bestätigen].
        </p>
      </section>

      <section>
        <h2>3. Server-Logfiles</h2>
        <p>
          Es werden folgende Daten protokolliert: IP-Adresse, Datum und Uhrzeit,
          angefragte URL, Referrer, Browser-/Betriebssystem-Kennung. Eine Zusammenführung
          mit anderen Daten oder eine Identifizierung einzelner Personen findet nicht
          statt. Speicherdauer: [PLATZHALTER: Angabe ergänzen].
        </p>
      </section>

      <section>
        <h2>4. Kontaktaufnahme (Formular &amp; E-Mail)</h2>
        <p>
          Wenn du uns über das Kontaktformular oder per E-Mail kontaktierst, verarbeiten
          wir die angegebenen Daten (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung
          deiner Anfrage. Das Formular wird über [PLATZHALTER: Netlify Forms] verarbeitet.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw.
          lit. f (berechtigtes Interesse an der Beantwortung). Die Daten werden gelöscht,
          sobald sie nicht mehr erforderlich sind [PLATZHALTER: Frist ergänzen].
        </p>
      </section>

      <section>
        <h2>5. Schriftarten</h2>
        <p>
          Die verwendeten Schriften (Fraunces, IBM Plex Sans) werden lokal mit der Website
          ausgeliefert (self-hosted, via next/font). Beim Seitenaufruf wird dafür keine
          Verbindung zu Servern Dritter (z. B. Google Fonts) hergestellt.
        </p>
      </section>

      <section>
        <h2>6. Eingebettete Inhalte (Video)</h2>
        <p>
          Sofern ein Erklärvideo eines Drittanbieters (z. B. YouTube/Vimeo) eingebettet
          wird, kann beim Abspielen eine Verbindung zu dessen Servern aufgebaut werden; es
          gelten dessen Datenschutzbestimmungen. [PLATZHALTER: Anbieter, Rechtsgrundlage
          und ggf. Consent-Lösung ergänzen, sobald ein Video eingebunden ist.]
        </p>
      </section>

      <section>
        <h2>7. Weiterleitung zu Skool</h2>
        <p>
          Anmeldung und Zahlung erfolgen extern auf skool.com. Mit dem Klick auf einen
          entsprechenden Button verlässt du diese Website; ab dann gilt die
          Datenschutzerklärung von Skool. Wir haben keinen Einfluss auf die dortige
          Verarbeitung.
        </p>
      </section>

      <section>
        <h2>8. Cookies &amp; Analyse</h2>
        <p>
          Diese Website setzt keine Tracking- oder Analyse-Cookies und bindet keine
          Analyse-Dienste ein. [PLATZHALTER: aktualisieren, falls künftig Tools wie
          Analytics oder ein Pixel ergänzt werden, dann ist eine Consent-Lösung nötig.]
        </p>
      </section>

      <section>
        <h2>9. Deine Rechte</h2>
        <p>Dir stehen nach DSGVO folgende Rechte zu:</p>
        <ul>
          <li>Auskunft über die verarbeiteten Daten (Art. 15)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16)</li>
          <li>Löschung (Art. 17) und Einschränkung der Verarbeitung (Art. 18)</li>
          <li>Datenübertragbarkeit (Art. 20)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21)</li>
          <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3)</li>
          <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77)</li>
        </ul>
        <p>
          Zur Ausübung genügt eine formlose Nachricht an {CONTACT_EMAIL}. Zuständige
          Aufsichtsbehörde: [PLATZHALTER: Behörde nach Sitz ergänzen].
        </p>
      </section>

      <section>
        <h2>10. Aktualität und Änderungen</h2>
        <p>
          Diese Datenschutzerklärung wird angepasst, sobald sich rechtliche oder
          technische Rahmenbedingungen ändern. [PLATZHALTER: Stand/Version pflegen.]
        </p>
      </section>

      <p className="text-sm text-ink-mute">
        Hinweis: Dieser Text ist ein strukturierter Entwurf und ersetzt keine
        Rechtsberatung. Vor Veröffentlichung rechtssicher finalisieren.
      </p>
    </LegalShell>
  );
}
