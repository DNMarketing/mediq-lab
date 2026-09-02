import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { Erecht24Seal } from "@/components/ui/Erecht24Seal";
import { DATENSCHUTZ_HTML } from "@/lib/datenschutz-content";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalShell
      title="Datenschutzerklärung"
      showBadge={false}
      seal={<Erecht24Seal type="datenschutz" />}
    >
      {/* 1:1 aus dem eRecht24-Generator übernommen (siehe lib/datenschutz-content.ts). */}
      <div dangerouslySetInnerHTML={{ __html: DATENSCHUTZ_HTML }} />
    </LegalShell>
  );
}
