/**
 * Zentrale Konfiguration für medIQ lab.
 *
 * TODO: Finale Skool-URL hier eintragen. Alle Kauf-/Beitritts-CTAs der Seite
 * verlinken auf diese eine Konstante, einmal ändern genügt.
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
 * Verknappungs-Hinweis für die Conversion: freie Plätze der aktuellen Runde.
 * Erscheint als Pill im Hero und im Abschluss-CTA.
 *
 * WICHTIG: Nur mit einer ECHTEN Zahl befüllen. Erfundene Knappheit ist
 * unzulässig (Fake-Verknappung, UWG). Auf `null` setzen, um den Hinweis
 * komplett auszublenden, wenn es keine echte Begrenzung gibt.
 * TODO: echte Zahl freier Plätze eintragen oder auf null setzen.
 */
export const SPOTS_LEFT: string | null = "[X]";
