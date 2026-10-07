import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { rootMetadata } from "@/lib/seo";
import { PREFIXED_LOCALES } from "@/i18n/config";
import { langFromParams, type LangParams } from "@/lib/lang-params";

/** Root-Layout für alle Sprachen mit URL-Präfix (/en, /fr, /it). */
export const dynamicParams = false;

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LangParams) {
  return rootMetadata(await langFromParams(params));
}

export default async function LangLayout({ children, params }: LangParams & { children: React.ReactNode }) {
  const lang = await langFromParams(params);
  return <RootShell lang={lang}>{children}</RootShell>;
}
