import { UeberView, ueberMeta } from "@/views/UeberView";
import { langFromParams, type LangParams } from "@/lib/lang-params";

export async function generateMetadata({ params }: LangParams) {
  return ueberMeta(await langFromParams(params));
}

export default async function Page({ params }: LangParams) {
  return <UeberView lang={await langFromParams(params)} />;
}
