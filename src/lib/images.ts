/**
 * Bild-Quellen (Unsplash, direkt per images.unsplash.com).
 * Alle IDs wurden auf Erreichbarkeit (HTTP 200) geprüft. Falls eine URL
 * doch nicht lädt, fällt <EditorialImage> automatisch auf eine SVG-
 * Illustration zurück (keine leere Box).
 *
 * TODO (vor Go-Live): Diese Stock-Fotos durch lizenzierte bzw. eigene
 * hochwertige Aufnahmen ersetzen. Unsplash ist kostenlos nutzbar, für eine
 * Marke empfiehlt sich jedoch eigenes/redaktionell lizenziertes Bildmaterial.
 */

export function unsplash(id: string, w = 1600): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const IMAGES = {
  /** Hero: aufgeschlagenes Lehrbuch mit handschriftlichen Notizen, warm. */
  heroStudy: "photo-1456513080510-7bf3a84b82f8",
  /** VSL-Poster: aufgeschlagenes Buch, atmosphärisch. */
  vslBook: "photo-1532012197267-da84d127e765",
  /** Problem: stimmungsvoller Bibliotheksgang (nächtliches Lernen). */
  problemLibrary: "photo-1481627834876-b7833e8f5570",
  /** Methode: Hand schreibt Notizen mit Stift. */
  methodNotes: "photo-1450101499163-c8848c66ca85",
  /** Methode (sekundär): Stapel alter Fachbücher. */
  methodBooks: "photo-1491841573634-28140fc7ced7",
  /** Module: anatomisches Herzmodell. */
  moduleHeart: "photo-1530026405186-ed1f139313f8",
  /** Module (sekundär): Mikroskop im Labor. */
  moduleMicroscope: "photo-1518152006812-edab29b069ac",
  /** Zugang/Community: lernende Gruppe, warm & menschlich. */
  community: "photo-1522202176988-66273c2fd55f",
} as const;
