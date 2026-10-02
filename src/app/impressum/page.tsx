import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { Erecht24Seal } from "@/components/ui/Erecht24Seal";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalShell title="Impressum" showBadge={false} seal={<Erecht24Seal type="impressum" />}>
      <section>
        <p>
          medIQ LAB ist eine Marke der schlenker advisory GmbH, Amtsgericht Ulm, HRB 751751,
          Geschäftsführerin Tanja Schlenker USt-ID: DE462052494
        </p>
      </section>

      <section>
        <p>
          schlenker advisory GmbH
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
          Registergericht: Amtsgericht Ulm
        </p>
      </section>

      <section>
        <p>
          <strong className="text-ink">Vertreten durch:</strong>
          <br />
          Geschäftsführerin Tanja Schlenker
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: 01776007804
          <br />
          E-Mail: info@mediq-lab.de
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
