"use client";

import { useState } from "react";

/**
 * Rundes Gründer-Porträt mit sauberem Fallback. Lädt eine Bilddatei aus
 * /public; ist sie (noch) nicht vorhanden, wird der markierte
 * „ECHTES FOTO EINFÜGEN“-Platzhalter gezeigt – nie eine kaputte Bildbox.
 *
 * Bewusst als kompaktes, scharfes Rund-Porträt (statt verwaschenem
 * Vollbild-Zuschnitt), damit auch ein kleineres Quellbild gestochen wirkt.
 *
 * `file` ist der Dateiname in /public (basePath wird automatisch ergänzt).
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
        <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-dashed border-teal-400/40 text-teal-300">
          <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    <div className="relative h-36 w-36">
      {/* feiner Teal-Ring */}
      <div className="absolute -inset-1.5 rounded-full border border-teal-400/30" aria-hidden />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${base}/${file}`}
        alt={alt}
        width={144}
        height={144}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="h-36 w-36 rounded-full object-cover shadow-lift ring-1 ring-paper/10"
      />
    </div>
  );
}
