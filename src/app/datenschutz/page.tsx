import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Datenschutz – medIQ lab",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalShell title="Datenschutzerklärung">
      {/* TODO: Rechtskonforme Datenschutzerklärung (DSGVO) einsetzen.
          Themen u. a.: Verantwortliche:r, Hosting (Netlify), Server-Logs,
          ggf. eingebettetes VSL-Video (z. B. YouTube/Vimeo) & dessen Cookies,
          Weiterleitung zu Skool, Kontaktaufnahme, Rechte der Betroffenen.
          Empfehlung: anwaltlich geprüfter Generator/Vorlage. */}
      <p>
        <strong className="text-slate-200">1. Verantwortliche Stelle</strong>
        <br />
        [Name, Anschrift, Kontakt – siehe Impressum]
      </p>
      <p>
        <strong className="text-slate-200">2. Hosting</strong>
        <br />
        Diese Website wird statisch über [Netlify] ausgeliefert. Beim Aufruf
        werden technisch notwendige Server-Logs verarbeitet. [Details ergänzen.]
      </p>
      <p>
        <strong className="text-slate-200">3. Eingebettete Inhalte (Video)</strong>
        <br />
        Sofern ein VSL-Video von einem Drittanbieter (z. B. YouTube/Vimeo)
        eingebettet wird, gelten dessen Datenschutzbestimmungen. [Anbieter &
        Rechtsgrundlage ergänzen, ggf. Consent-Lösung.]
      </p>
      <p>
        <strong className="text-slate-200">4. Weiterleitung zu Skool</strong>
        <br />
        Beitritt und Zahlung erfolgen extern auf skool.com. Mit Klick auf einen
        CTA verlässt du diese Website; es gilt die Datenschutzerklärung von Skool.
      </p>
      <p>
        <strong className="text-slate-200">5. Deine Rechte</strong>
        <br />
        Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und
        Widerspruch nach DSGVO. [Kontakt & Aufsichtsbehörde ergänzen.]
      </p>
      <p className="text-slate-500">
        Platzhalter – bitte vor Veröffentlichung durch eine vollständige,
        rechtskonforme Datenschutzerklärung ersetzen.
      </p>
    </LegalShell>
  );
}
