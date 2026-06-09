"use client";

import { useState } from "react";

/**
 * Porträt mit sauberem Fallback. Lädt eine Bilddatei aus /public; ist sie
 * (noch) nicht vorhanden, wird der markierte „ECHTES FOTO EINFÜGEN“-
 * Platzhalter gezeigt – niemals eine kaputte Bildbox.
 *
 * `file` ist der Dateiname in /public (basePath wird automatisch ergänzt).
 * Auf `null` setzen, um direkt den Platzhalter zu erzwingen.
 */
export function Portrait({
  file,
  alt,
}: {
  file: string | null;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (!file || failed) {
    return (
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-teal-400/40 text-teal-300">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="9" r="3.2" />
            <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
          </svg>
        </div>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
          Echtes Foto einfügen
        </p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${base}/${file}`}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
