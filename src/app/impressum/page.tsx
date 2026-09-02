import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalShell title="Impressum" showBadge={false}>
      <section>
        <p>
          Dirk Schlenker
          <br />
          Albert-Einstein-Straße 7
          <br />
          97990 Weikersheim
        </p>
      </section>

      <section>
        <p>
          Handelsregister: HRB 751751
          <br />
          Registergericht: Amtsgericht Stuttgart
        </p>
      </section>

      <section>
        <p>
          <strong className="text-ink">Vertreten durch:</strong>
          <br />
          Dirk Schlenker
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: +491755896457
          <br />
          E-Mail: info@mediqlab.de
        </p>
      </section>

      <section>
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          DE462052494
        </p>
      </section>

      <section>
        <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </LegalShell>
  );
}
