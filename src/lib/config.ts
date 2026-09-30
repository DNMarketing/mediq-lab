/**
 * Zentrale Konfiguration für medIQ lab.
 *
 * TODO: Finale Skool-URL hier eintragen. Alle Kauf-/Beitritts-CTAs der Seite
 * verlinken auf diese eine Konstante, einmal ändern genügt.
 */
export const SKOOL_URL = "https://www.skool.com/mediqlab"; // TODO: finale Skool-URL einsetzen

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
 * Preise der Mitgliedschaft (ein Produkt, alles inklusive), lt. Gründerinnen
 * Stand 2026-09-30. Jährlich 399 € oder monatlich 49,99 €.
 * yearlyPerMonth/yearlySaving sind gerundete Einordnungen (399/12 ≈ 33,25;
 * 12 × 49,99 = 599,88 → rund 200 € Ersparnis).
 * TODO: klären, ob 399 € nur fürs erste Jahr gilt (danach gestaffelt?).
 */
export const PRICING = {
  yearly: "399",
  monthly: "49,99",
  yearlyPerMonth: "33",
  yearlySaving: "200",
} as const;

/**
 * Verknappungs-Hinweis (Pill im Hero und im Abschluss-CTA).
 * Auf `null`: ausgeblendet. Die Jahresmitgliedschaft hat keine echte
 * Platzbegrenzung, erfundene Knappheit wäre unzulässig (UWG).
 */
export const SPOTS_LEFT: string | null = null;
