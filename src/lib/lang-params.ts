import { notFound } from "next/navigation";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/i18n/config";

export type LangParams = { params: Promise<{ lang: string }> };

/** Sprache aus dem [lang]-Segment lesen; unbekannte Werte und "de" (liegt im Root) → 404. */
export async function langFromParams(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang) || lang === DEFAULT_LOCALE) notFound();
  return lang;
}
