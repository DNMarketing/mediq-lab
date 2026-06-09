/**
 * Bild-Quellen (Unsplash, direkt per images.unsplash.com).
 * Alle IDs wurden auf Erreichbarkeit (HTTP 200) geprüft. Falls eine URL
 * doch nicht lädt, fällt <EditorialImage> automatisch auf eine SVG-
 * Illustration zurück (keine leere Box).
 *
 * Bildsprache: gezielt, hochwertig, echt medizinisch/menschlich – keine
 * generischen Stockfotos. Das Hero nutzt bewusst animierte anatomische
 * Line-Art (siehe components/ui/Anatomy.tsx) statt eines Fotos.
 *
 * TODO (vor Go-Live): Stock-Fotos durch lizenzierte bzw. eigene Aufnahmen
 * ersetzen.
 */

export function unsplash(id: string, w = 1600): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const IMAGES = {
  /** Problem: konzentrierte:r Studierende:r am Laptop (menschlich, fokussiert). */
  problemStudent: "photo-1513258496099-48168024aec0",
  /** VSL-Poster: anatomisches Skelettmodell auf Grau (klar, premium). */
  vslSkeleton: "photo-1530210124550-912dc1381cb8",
  /** Module: anatomisches Herzmodell. */
  moduleHeart: "photo-1530026405186-ed1f139313f8",
  /** Module (sekundär): Mikroskop im Labor. */
  moduleMicroscope: "photo-1518152006812-edab29b069ac",
  /** Zugang/Community: lernende Gruppe, warm & menschlich. */
  community: "photo-1522202176988-66273c2fd55f",
  /** Optionaler Akzent: DNA-Doppelhelix (high-tech). */
  dna: "photo-1628595351029-c2bf17511435",
  /** Optionaler Akzent: fluoreszierende Zellen (medizinisches Detail). */
  cells: "photo-1576086213369-97a306d36557",
} as const;
