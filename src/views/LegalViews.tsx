import type { Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { LegalShell } from "@/components/LegalShell";
import { Erecht24Seal } from "@/components/ui/Erecht24Seal";
import { DATENSCHUTZ_HTML } from "@/lib/datenschutz-content";

export function impressumMeta(lang: Locale) {
  return pageMetadata(lang, "/impressum", { title: getDict(lang).legal.impressum, noindex: true });
}

export function datenschutzMeta(lang: Locale) {
  return pageMetadata(lang, "/datenschutz", { title: getDict(lang).legal.datenschutz, noindex: true });
}

/** Impressum: Pflichtangaben lt. Kunde (wörtlich), in allen Sprachen Deutsch. */
export function ImpressumView({ lang }: { lang: Locale }) {
  const t = getDict(lang).legal;
  return (
    <LegalShell title={t.impressum} notice={t.notice} seal={<Erecht24Seal type="impressum" />}>
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
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </section>
    </LegalShell>
  );
}

/** Datenschutz: 1:1 aus dem eRecht24-Generator (lib/datenschutz-content.ts). */
export function DatenschutzView({ lang }: { lang: Locale }) {
  const t = getDict(lang).legal;
  return (
    <LegalShell title={t.datenschutz} notice={t.notice} seal={<Erecht24Seal type="datenschutz" />}>
      <div dangerouslySetInnerHTML={{ __html: DATENSCHUTZ_HTML }} />
    </LegalShell>
  );
}
