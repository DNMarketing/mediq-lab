"use client";

import { useRef, useState } from "react";
import { videoFor } from "@/lib/images";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { MedIcon } from "./MedIcon";

/**
 * Self-hosted Vorstellungsvideo (Hochformat). Lädt vor dem Klick NICHTS außer
 * dem Poster (preload="none"), dann native Controls mit Ton. Rendition nach
 * Bildschirmbreite: unter 640px die 720er, sonst die 1080er. Sprachfassung
 * über `videoFor(lang)` (fällt auf Deutsch zurück, solange keine Übersetzung da ist).
 */
export function VideoPlayer({ lang, t, className = "" }: { lang: Locale; t: Dict["video"]; className?: string }) {
  const v = videoFor(lang);
  const [playing, setPlaying] = useState(false);
  const [src, setSrc] = useState<string>(v.src1080);
  const ref = useRef<HTMLVideoElement>(null);

  const start = () => {
    setSrc(window.innerWidth < 640 ? v.src720 : v.src1080);
    setPlaying(true);
    // Nach dem Rendern des <video> abspielen (Autoplay mit Ton ist nach Klick erlaubt).
    requestAnimationFrame(() => ref.current?.play().catch(() => {}));
  };

  const mm = Math.floor(v.seconds / 60);
  const ss = String(v.seconds % 60).padStart(2, "0");

  return (
    <figure className={`group relative aspect-[9/16] overflow-hidden rounded-card border border-line bg-petrol-900 shadow-lift ${className}`}>
      {playing ? (
        <video ref={ref} src={src} poster={v.poster} controls playsInline preload="none" className="absolute inset-0 h-full w-full object-cover">
          {t.unsupported}
        </video>
      ) : (
        <button
          type="button"
          onClick={start}
          aria-label={t.play}
          className="absolute inset-0 h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-inset"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={v.poster}
            alt={t.alt}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-petrol-900/80 via-petrol-900/20 to-transparent" aria-hidden />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-paper-light text-petrol-800 shadow-lift transition-transform duration-200 group-hover:scale-105">
              <MedIcon name="play" className="ml-0.5 h-7 w-7" />
            </span>
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-petrol-900/60 px-2.5 py-1 text-xs text-paper-light backdrop-blur">
            {mm}:{ss} {t.min}
          </span>
          <span className="absolute inset-x-0 bottom-0 px-5 pb-5 text-sm font-medium text-paper-light">{t.caption}</span>
        </button>
      )}
    </figure>
  );
}
