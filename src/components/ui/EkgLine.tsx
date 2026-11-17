import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------ */
/* EKG-/Vitalkurve, wiederkehrendes Signaturelement mit laufendem    */
/* Puls. Eignet sich als Section-Divider oder Hero-Akzent.            */
/* ------------------------------------------------------------------ */

/**
 * Ein Herzschlag als saubere PQRST-Kurve (Ablauf wie im Lehrbuch-EKG):
 * Grundlinie → P-Welle (runder, kleiner Bogen) → PQ-Strecke (flach) → Q (kleine Zacke
 * nach unten) → R (hohe, spitze Zacke) → S (unter die Grundlinie) → ST-Strecke (flach)
 * → T-Welle (breiter, etwas höher als P, langsam an, schneller ab) → Grundlinie.
 * Werte in Anteilen von Schlagbreite (x) und Höhe (y, negativ = nach oben).
 * Die Grundlinie liegt mittig, R und S lassen oben/unten Luft, damit nichts anschneidet.
 */
function beatPath(x0: number, w: number, h: number): string {
  const mid = h / 2;
  const p = (fx: number, fy: number) => `${(x0 + w * fx).toFixed(2)} ${(mid + h * fy).toFixed(2)}`;
  return [
    `L${p(0.24, 0)}`,
    // P-Welle: flache Glocke, tangential aus und in die Grundlinie
    `C${p(0.262, 0)} ${p(0.272, -0.09)} ${p(0.295, -0.09)}`,
    `C${p(0.318, -0.09)} ${p(0.328, 0)} ${p(0.35, 0)}`,
    // PQ-Strecke
    `L${p(0.388, 0)}`,
    // Q, R, S
    `L${p(0.402, 0.055)}`,
    `L${p(0.427, -0.42)}`,
    `L${p(0.454, 0.2)}`,
    `L${p(0.47, 0)}`,
    // ST-Strecke
    `L${p(0.535, 0)}`,
    // T-Welle: breiter und höher als P, langsam an, etwas schneller ab
    `C${p(0.575, 0)} ${p(0.595, -0.165)} ${p(0.63, -0.165)}`,
    `C${p(0.66, -0.165)} ${p(0.672, 0)} ${p(0.7, 0)}`,
    // Grundlinie bis zum nächsten Schlag
    `L${p(1, 0)}`,
  ].join(" ");
}

function ekgPath(beats: number, beatW: number, h: number): string {
  let d = `M0 ${h / 2}`;
  for (let i = 0; i < beats; i++) d += ` ${beatPath(i * beatW, beatW, h)}`;
  return d;
}

/** Normierte Länge je Schlag (für den laufenden Puls, unabhängig von der Darstellungsgröße). */
const UNIT = 100;
/** Länge des hellen Pulses, gemessen in UNIT (gut ein Viertel Schlag). */
const PULSE = 26;

export function EkgLine({
  className,
  strokeWidth = 1.6,
  beats = 6,
}: {
  className?: string;
  strokeWidth?: number;
  beats?: number;
}) {
  const beatW = 200;
  const h = 80;
  const d = ekgPath(beats, beatW, h);
  const total = beats * UNIT;
  // Ein Durchlauf = Pulslänge + Strichlücke, dadurch nahtlose Schleife ohne Sprung.
  const runStyle = {
    strokeDasharray: `${PULSE} ${total}`,
    "--ekg-from": `${PULSE}`,
    "--ekg-to": `${-total}`,
    animationDuration: `${Math.max(1.8, beats * 0.5)}s`,
  } as React.CSSProperties;

  return (
    <svg
      viewBox={`0 0 ${beats * beatW} ${h}`}
      fill="none"
      preserveAspectRatio="none"
      className={cn("w-full overflow-visible", className)}
      aria-hidden
    >
      {/* ruhige Grundlinie */}
      <path
        d={d}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        opacity={0.28}
      />
      {/* laufender Puls (heller Teal-Sweep), bei reduzierter Bewegung ausgeblendet */}
      <path
        d={d}
        pathLength={total}
        stroke="currentColor"
        strokeWidth={strokeWidth * 1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        className="animate-ekg-run text-teal-400 motion-reduce:hidden"
        style={runStyle}
      />
    </svg>
  );
}
