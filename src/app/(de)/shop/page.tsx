import { ShopView, shopMeta } from "@/views/ShopView";

export const metadata = shopMeta("de");

export default function Page() {
  return <ShopView lang="de" />;
}
