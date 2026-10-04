/**
 * Bild-Quellen — bewusst SELF-HOSTED (lokal in `public/img/`).
 *
 * KEINE externen CDN-URLs (kein Unsplash-Hotlinking o. Ä.): So geht beim
 * Seitenaufruf keine IP an Dritt-Server (DSGVO, vgl. Google-Fonts-Urteil
 * LG München I, 3 O 17493/20). Dadurch ist kein Cookie-/Consent-Banner nötig.
 *
 * Bildrechte: aktuell Unsplash-Fotos (frei nutzbar), lokal gespeichert. Für den
 * finalen Auftritt bei Bedarf durch eigene/lizenzierte Aufnahmen ersetzen –
 * einfach die Dateien in `public/img/` austauschen.
 *
 * Fällt ein Bild aus, zeigt `<EditorialImage>` automatisch eine SVG-Illustration.
 */

// basePath (z. B. "/mediq-lab" bei GitHub Pages, "" bei Netlify-Root).
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Lokaler, basePath-korrekter Pfad zu einem Bild in `public/img/`. */
export function img(file: string): string {
  return `${BASE}/img/${file}`;
}

/**
 * Vorstellungsvideo (Hochformat 9:16, 86 s), SELF-HOSTED in `public/video/`:
 * keine Verbindung zu YouTube/Vimeo beim Seitenaufruf. Zwei Renditionen,
 * der Player wählt nach Bildschirmbreite. Quelle: Drive „Med/medIQ_lab_Vorstellungsvideo_4K.mp4".
 */
export const VIDEO = {
  src1080: `${BASE}/video/vorstellung-1080.mp4`,
  src720: `${BASE}/video/vorstellung-720.mp4`,
  poster: img("vorstellung-poster.jpg"),
  /** Laufzeit in Sekunden (für Texte wie „In 90 Sekunden"). */
  seconds: 86,
} as const;

export const IMAGES = {
  /** Problem: konzentrierte:r Studierende:r am Laptop. */
  problemStudent: img("problem-student.jpg"),
  /** VSL-Poster: anatomisches Skelettmodell. */
  vslSkeleton: img("vsl-skeleton.jpg"),
  /** Module: anatomisches Herzmodell. */
  moduleHeart: img("module-heart.jpg"),
  /** Module (sekundär): Mikroskop im Labor. */
  moduleMicroscope: img("module-microscope.jpg"),
  /** Zugang/Community: lernende Gruppe. */
  community: img("community.jpg"),
} as const;
