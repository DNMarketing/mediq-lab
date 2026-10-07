import { ImpressumView, impressumMeta } from "@/views/LegalViews";
import { langFromParams, type LangParams } from "@/lib/lang-params";

export async function generateMetadata({ params }: LangParams) {
  return impressumMeta(await langFromParams(params));
}

export default async function Page({ params }: LangParams) {
  return <ImpressumView lang={await langFromParams(params)} />;
}
