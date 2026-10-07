import type { Dict } from "@/i18n/de";
import { Stagger, StaggerItem } from "../ui/Motion";
import { MedIcon, type IconName } from "../ui/MedIcon";

/** Icons der vier Säulen (Reihenfolge wie im Wörterbuch). */
export const PILLAR_ICONS: IconName[] = ["structure", "exam", "mind", "community"];

/** Die vier Säulen als Karten-Raster (Startseite, /ueber). */
export function PillarGrid({ pillars, className = "" }: { pillars: Dict["pillars"]; className?: string }) {
  return (
    <Stagger as="ul" className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {pillars.map((p, i) => (
        <StaggerItem as="li" key={p.title}>
          <div className="group flex h-full flex-col rounded-card border border-line bg-paper-light p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-glow-teal-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-card border border-line bg-paper text-petrol-700 transition-colors group-hover:border-teal-400/40 group-hover:bg-teal-100 group-hover:text-teal-600">
              <MedIcon name={PILLAR_ICONS[i]} className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-medium text-ink">{p.title}</h3>
            <span className="mt-1 text-xs uppercase tracking-[0.16em] text-teal-600">{p.sub}</span>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.short}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
