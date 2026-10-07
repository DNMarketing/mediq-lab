import { FaqView, faqMeta } from "@/views/FaqView";
import { langFromParams, type LangParams } from "@/lib/lang-params";

export async function generateMetadata({ params }: LangParams) {
  return faqMeta(await langFromParams(params));
}

export default async function Page({ params }: LangParams) {
  return <FaqView lang={await langFromParams(params)} />;
}
