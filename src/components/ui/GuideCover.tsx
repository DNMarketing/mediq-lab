import { cn } from "@/lib/cn";
import { AnatomyHeart } from "./Anatomy";
import { EkgLine } from "./EkgLine";

/**
 * Platzhalter-Cover für den Anatomie Survival Guide im Stil der Skool-Kursbilder
 * (dunkles Petrol, Kupfer-Linienzeichnung, EKG). Wird durch das echte Cover ersetzt,
 * sobald es fertig ist.
 */
export function GuideCover({
  word,
  code,
  label,
  className,
}: {
  /** Fach-Wort in der Sprache der Ausgabe, z. B. „Anatomie“ / „Anatomy“. */
  word: string;
  /** Sprachkürzel der Ausgabe, z. B. „DE“. */
  code: string;
  /** Zugänglicher Name, z. B. „Cover-Vorschau“. */
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("relative aspect-[3/4] [container-type:inline-size] [perspective:1400px]", className)} role="img" aria-label={`${label}: ${word} Survival Guide (${code})`}>
      {/* Seitenblock hinter dem Cover */}
      <div className="absolute inset-y-[2%] left-[4%] right-[-3%] rounded-r-[10px] bg-paper-deep shadow-soft" aria-hidden />
      <div
        className="absolute inset-0 origin-left overflow-hidden rounded-l-[3px] rounded-r-[10px] bg-petrol-900 text-paper-light shadow-lift [transform:rotateY(-7deg)]"
        aria-hidden
      >
        <div className="glow-teal-bg absolute inset-0" />
        {/* Buchrücken */}
        <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

        <div className="relative flex h-full flex-col p-[9%]">
          <div className="flex items-start justify-between">
            <span className="font-logo text-[8cqw]">
              med<span className="text-copper-300">IQ</span>
              <span className="text-copper-300">···</span>
            </span>
            <span className="rounded-full border border-copper-300/60 px-[3cqw] py-[0.8cqw] text-[4.6cqw] font-semibold tracking-[0.18em] text-copper-300">{code}</span>
          </div>

          <div className="mt-[18%]">
            <span className="block text-[6cqw] font-semibold uppercase tracking-[0.24em] text-copper-300">{word}</span>
            <span className="mt-[2cqw] block font-display text-[16cqw] font-bold leading-[0.95] tracking-[-0.02em] text-paper-light">
              Survival
              <br />
              Guide
            </span>
          </div>

          <div className="absolute bottom-[16%] right-[6%] w-[52%] text-copper-300/80">
            <AnatomyHeart strokeWidth={1.3} />
          </div>

          <div className="mt-auto text-copper-300/70">
            <EkgLine beats={3} strokeWidth={1.2} className="h-[9cqw]" />
          </div>
        </div>
      </div>
    </div>
  );
}
