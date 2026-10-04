/**
 * Zentrale Konfiguration für medIQ lab.
 *
 * Alle Kauf-/Beitritts-CTAs der Seite verlinken auf diese eine Konstante.
 * Finale Skool-URL (lt. Kunde, 2026-10-04).
 */
export const SKOOL_URL = "https://www.skool.com/med-iq-lab-9744/about";

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
 * Preis der Mitgliedschaft: EIN Produkt, 399 € jährlich, Community und alle
 * Workshops inklusive (lt. Gründerinnen, Stand 2026-09-30). Keine Monatsoption.
 * yearlyPerMonth ist nur die gerundete Einordnung (399/12 ≈ 33,25).
 */
export const PRICING = {
  yearly: "399",
  yearlyPerMonth: "33",
} as const;

/**
 * Verknappungs-Hinweis (Pill im Hero und im Abschluss-CTA), lt. Kunde gewünscht.
 * Bitte mit der echten Zahl freier Plätze pflegen; auf `null` = ausgeblendet.
 */
export const SPOTS_LEFT: string | null = null;
