import { KontaktView, kontaktMeta } from "@/views/KontaktView";
import { langFromParams, type LangParams } from "@/lib/lang-params";

export async function generateMetadata({ params }: LangParams) {
  return kontaktMeta(await langFromParams(params));
}

export default async function Page({ params }: LangParams) {
  return <KontaktView lang={await langFromParams(params)} />;
}
