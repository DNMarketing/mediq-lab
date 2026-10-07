import { ProgrammView, programmMeta } from "@/views/ProgrammView";

export const metadata = programmMeta("de");

export default function Page() {
  return <ProgrammView lang="de" />;
}
