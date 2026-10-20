import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------ */
/* EKG-/Vitalkurve, wiederkehrendes Signaturelement mit laufendem    */
/* Puls. Eignet sich als Section-Divider oder Hero-Akzent.            */
/* ------------------------------------------------------------------ */
function ekgPath(beats: number, beatW: number, h: number): string {
  const mid = h / 2;
  let d = `M0 ${mid}`;
  for (let i = 0; i < beats; i++) {
    const x = i * beatW;
    d +=
      ` H${(x + beatW * 0.32).toFixed(1)}` +
      ` l${(beatW * 0.04).toFixed(1)} ${(-h * 0.08).toFixed(1)}` +
      ` l${(beatW * 0.03).toFixed(1)} ${(h * 0.16).toFixed(1)}` +
      ` l${(beatW * 0.04).toFixed(1)} ${(-h * 0.66).toFixed(1)}` +
      ` l${(beatW * 0.04).toFixed(1)} ${(h * 0.9).toFixed(1)}` +
      ` l${(beatW * 0.04).toFixed(1)} ${(-h * 0.46).toFixed(1)}` +
      ` l${(beatW * 0.03).toFixed(1)} ${(h * 0.12).toFixed(1)}` +
      ` H${(x + beatW).toFixed(1)}`;
  }
  return d;
}

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
  return (
    <svg
      viewBox={`0 0 ${beats * beatW} ${h}`}
      fill="none"
      preserveAspectRatio="none"
      className={cn("w-full", className)}
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
        stroke="currentColor"
        strokeWidth={strokeWidth * 1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        className="animate-ekg-run text-teal-400 motion-reduce:hidden"
        style={{ strokeDasharray: "160 2600" }}
      />
    </svg>
  );
}
