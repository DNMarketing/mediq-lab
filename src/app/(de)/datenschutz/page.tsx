import { DatenschutzView, datenschutzMeta } from "@/views/LegalViews";

export const metadata = datenschutzMeta("de");

export default function Page() {
  return <DatenschutzView lang="de" />;
}
