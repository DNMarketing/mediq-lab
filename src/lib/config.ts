/**
 * Zentrale Konfiguration für medIQ lab.
 *
 * TODO: Finale Skool-URL hier eintragen. Alle Kauf-/Beitritts-CTAs der Seite
 * verlinken auf diese eine Konstante – einmal ändern genügt.
 */
export const SKOOL_URL = "https://www.skool.com/mediqlab"; // TODO: finale Skool-URL einsetzen

/** Kontakt-E-Mail. TODO: echte Adresse bestätigen/eintragen. */
export const CONTACT_EMAIL = "kontakt@mediqlab.de"; // TODO: finale Kontakt-E-Mail bestätigen

/** Haupt-Navigation (echte Routen der Multipage-Site). */
export const NAV_LINKS = [
  { href: "/methode", label: "Methode" },
  { href: "/programm", label: "Programm" },
  { href: "/ueber", label: "Über uns" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

/** LinkedIn-Profil des Gründers Dirk Schlenker (verifiziert vom Kunden). */
export const LINKEDIN_DIRK = "https://de.linkedin.com/in/dirk-schlenker-b3639578";

/**
 * Echte Knappheit – nur befüllen, wenn es stimmt (z. B. Kohorten-Start).
 * Auf `null` setzen, um den Scarcity-Hinweis komplett auszublenden.
 * TODO: echtes Datum der nächsten Kohorte eintragen oder auf null lassen.
 */
export const NEXT_COHORT: string | null = "[TODO: Datum nächste Kohorte]";
