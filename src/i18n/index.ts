import type { Locale } from "./config";
import { de, type Dict } from "./de";
import { en } from "./en";
import { fr } from "./fr";
import { it } from "./it";

const DICTS: Record<Locale, Dict> = { de, en, fr, it };

export function getDict(lang: Locale): Dict {
  return DICTS[lang];
}

export type { Dict };
export * from "./config";
export { Rich } from "./Rich";
