import { KontaktView, kontaktMeta } from "@/views/KontaktView";

export const metadata = kontaktMeta("de");

export default function Page() {
  return <KontaktView lang="de" />;
}
