import { TeamView, teamMeta } from "@/views/TeamView";
import { langFromParams, type LangParams } from "@/lib/lang-params";

export async function generateMetadata({ params }: LangParams) {
  return teamMeta(await langFromParams(params));
}

export default async function Page({ params }: LangParams) {
  return <TeamView lang={await langFromParams(params)} />;
}
