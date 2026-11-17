import { ShopView, shopMeta } from "@/views/ShopView";
import { langFromParams, type LangParams } from "@/lib/lang-params";

export async function generateMetadata({ params }: LangParams) {
  return shopMeta(await langFromParams(params));
}

export default async function Page({ params }: LangParams) {
  return <ShopView lang={await langFromParams(params)} />;
}
