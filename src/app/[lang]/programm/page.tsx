import { ProgrammView, programmMeta } from "@/views/ProgrammView";
import { langFromParams, type LangParams } from "@/lib/lang-params";

export async function generateMetadata({ params }: LangParams) {
  return programmMeta(await langFromParams(params));
}

export default async function Page({ params }: LangParams) {
  return <ProgrammView lang={await langFromParams(params)} />;
}
