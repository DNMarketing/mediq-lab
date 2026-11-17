/**
 * Zentrale Konfiguration für medIQ lab.
 *
 * Alle Kauf-/Beitritts-CTAs der Seite verlinken auf diese eine Konstante.
 * Finale Skool-URL (lt. Kunde, 2026-10-04).
 */
export const SKOOL_URL = "https://www.skool.com/med-iq-lab-9744/about";

/** Instagram-Profil der Marke (Footer-Link, sameAs in JSON-LD). */
export const INSTAGRAM_URL = "https://www.instagram.com/mediq.lab/";

/** Kontakt-E-Mail (mit Bindestrich, lt. Kunde verbindlich). */
export const CONTACT_EMAIL = "info@mediq-lab.de";

/** Haupt-Navigation (echte Routen der Multipage-Site). */
export const NAV_LINKS = [
  { href: "/methode", label: "Methode" },
  { href: "/programm", label: "Programm" },
  { href: "/team", label: "Team" },
  { href: "/ueber", label: "Über uns" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

/**
 * Preis der Mitgliedschaft auf Skool: 34,99 € im Monat (lt. Kunde, E-Mail vom 13.11.2026).
 * Ersetzt das frühere Jahresmodell (399 €). Anzeige-Texte stehen in `money` der Wörterbücher.
 */
export const PRICING = {
  monthly: "34.99",
  lernplan: "49",
} as const;

/**
 * KI-Lernapp (Flutter-Web-App der Gründerinnen). Subdomain app.mediq-lab.de ist geplant,
 * DNS-Eintrag bei STRATO steht noch aus (Stand 15.11.2026).
 */
export const APP_URL = "https://app.mediq-lab.de";

/** Cal.com-Termine (lt. Kunde, 13.11.2026). Infogespräch kostenlos, Lernplan 49 €. */
export const CAL_INFO_URL = "https://cal.com/hannah-schlenker-rblxpn/individuelles-infogesprach";
export const CAL_LERNPLAN_URL = "https://cal.com/hannah-schlenker-rblxpn/lernplan";

/**
 * Verknappungs-Hinweis (Pill im Hero und im Abschluss-CTA), lt. Kunde gewünscht.
 * Bitte mit der echten Zahl freier Plätze pflegen; auf `null` = ausgeblendet.
 */
export const SPOTS_LEFT: string | null = null;
