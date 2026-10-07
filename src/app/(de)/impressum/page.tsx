import { ImpressumView, impressumMeta } from "@/views/LegalViews";

export const metadata = impressumMeta("de");

export default function Page() {
  return <ImpressumView lang="de" />;
}
