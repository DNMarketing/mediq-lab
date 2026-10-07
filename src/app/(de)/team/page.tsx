import { TeamView, teamMeta } from "@/views/TeamView";

export const metadata = teamMeta("de");

export default function Page() {
  return <TeamView lang="de" />;
}
