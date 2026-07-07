"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { unsplash } from "@/lib/images";

type EditorialImageProps = {
  /** Unsplash-Foto-ID (siehe lib/images.ts). */
  id: string;
  alt: string;
  /** Breite für die Unsplash-Auslieferung. */
  width?: number;
  className?: string;
  /** Tailwind aspect-Klasse, z. B. "aspect-[4/5]". */
  aspect?: string;
  priority?: boolean;
};

/**
 * Editorial-Bild mit sauberem SVG-Fallback. Lädt ein Unsplash-Foto; schlägt
 * der Ladevorgang fehl, wird eine feine medizinische Linien-Illustration
 * gezeigt, niemals eine leere Box.
 */
export function EditorialImage({
  id,
  alt,
  width = 1400,
  className,
  aspect = "aspect-[4/5]",
  priority = false,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-paper-sand", aspect, className)}>
      {failed ? (
        <FallbackIllustration />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={unsplash(id, width)}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}

/** Feine anatomische Linien-Illustration als Bild-Fallback. */
function FallbackIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-petrol-50">
      <svg
        viewBox="0 0 200 200"
        fill="none"
        className="h-2/3 w-2/3 text-petrol-300"
        aria-hidden
      >
        <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        {/* stilisierter Hippocampus/Neuron-Bogen */}
        <path
          d="M62 132c-14-10-18-34-4-48 10-10 26-10 34 1 6-9 20-12 31-4 16 12 12 38-4 47"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="92" cy="86" r="3.5" fill="currentColor" />
        <circle cx="120" cy="92" r="3.5" fill="currentColor" />
        <path d="M92 86l28 6M76 110l40-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}
