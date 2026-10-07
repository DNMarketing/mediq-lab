import { FaqView, faqMeta } from "@/views/FaqView";

export const metadata = faqMeta("de");

export default function Page() {
  return <FaqView lang="de" />;
}
