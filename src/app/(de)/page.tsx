import { HomeView, homeMeta } from "@/views/HomeView";

export const metadata = homeMeta("de");

export default function Page() {
  return <HomeView lang="de" />;
}
