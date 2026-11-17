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
export type VideoSet = { src1080: string; src720: string; poster: string; seconds: number };

function videoSet(suffix: string, seconds: number): VideoSet {
  return {
    src1080: `${BASE}/video/vorstellung${suffix}-1080.mp4`,
    src720: `${BASE}/video/vorstellung${suffix}-720.mp4`,
    poster: img(`vorstellung${suffix}-poster.jpg`),
    seconds,
  };
}

export const VIDEO = videoSet("", 86);

/**
 * Englische Fassung (46 s), Quelle: medIQ_lab_Vorstellungsvideo_EN_4K.mp4, transkodiert am 16.11.2026.
 * Läuft auf allen nicht-deutschen Seiten (EN, FR, IT), solange es keine eigene Sprachfassung gibt.
 */
export const VIDEO_EN = videoSet("-en", 46);

/**
 * Eigene Sprachfassungen. Für eine neue Sprache (z. B. Französisch) Dateien
 * `public/video/vorstellung-fr-{1080,720}.mp4` + `public/img/vorstellung-fr-poster.jpg`
 * ablegen und hier `fr: videoSet("-fr", <Sekunden>)` eintragen.
 */
const VIDEO_BY_LANG: Partial<Record<string, VideoSet>> = {
  de: VIDEO,
  en: VIDEO_EN,
};

export function videoFor(lang: string): VideoSet {
  return VIDEO_BY_LANG[lang] ?? VIDEO_EN;
}

export const IMAGES = {
  /** Problem: konzentrierte:r Studierende:r am Laptop. */
  problemStudent: img("problem-student.jpg"),
  /** Module: anatomisches Herzmodell. */
  moduleHeart: img("module-heart.jpg"),
  /** Module (sekundär): Mikroskop im Labor. */
  moduleMicroscope: img("module-microscope.jpg"),
  /** Zugang/Community: lernende Gruppe. */
  community: img("community.jpg"),
} as const;

/**
 * Screenshots der KI-Lernapp (Drive „App Screenshots", 13.11.2026), je Sprache.
 * Deutsch für /, Englisch für alle anderen Sprachen (die App gibt es auf DE und EN).
 */
export const APP_SHOTS = ["weltkarte", "ki-hilfe", "fehler-arena", "statistik"] as const;
export function appShot(name: (typeof APP_SHOTS)[number], lang: string): string {
  return img(`app/${name}-${lang === "de" ? "de" : "en"}.jpg`);
}

/** Screenshots der Skool-Community (Drive „Skool Screenshots", Stand 13.11.2026). */
export const COMMUNITY_SHOTS = {
  kurse: img("community/kurse.jpg"),
  eventsNov: img("community/events-november.jpg"),
  eventsDez: img("community/events-dezember.jpg"),
} as const;

/** Gründerinnen-Foto für den Hero (Faith links, Hannah rechts, Arztkittel), eng zugeschnitten aus team/faith-hannah.jpg. */
export const FOUNDERS_PHOTO = img("team/faith-hannah-hero.jpg");
