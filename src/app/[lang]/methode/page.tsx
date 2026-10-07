import { MethodeView, methodeMeta } from "@/views/MethodeView";
import { langFromParams, type LangParams } from "@/lib/lang-params";

export async function generateMetadata({ params }: LangParams) {
  return methodeMeta(await langFromParams(params));
}

export default async function Page({ params }: LangParams) {
  return <MethodeView lang={await langFromParams(params)} />;
}
