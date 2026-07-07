"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SKOOL_URL } from "@/lib/config";
import { MedIcon } from "./ui/MedIcon";

/**
 * Sticky Bottom-CTA-Leiste, nur mobil. Hält den primären Skool-CTA durchgängig
 * daumen-erreichbar (High-Ticket-Conversion). Blendet sich aus, sobald der finale
 * CTA-Block oder der Footer im Blick ist (per `data-mobilecta="hide"`), damit sie
 * keine Links/Buttons dort überdeckt. Respektiert die iOS-Safe-Area.
 */
export function MobileCTABar() {
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const onProgramm = pathname?.startsWith("/programm");

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll('[data-mobilecta="hide"]'),
    );
    if (targets.length === 0) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        setHidden(visible.size > 0);
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 pb-[max(0.7rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 md:hidden ${
        hidden ? "pointer-events-none translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-center gap-2.5 px-4 pt-3">
        {!onProgramm && (
          <Link
            href="/programm"
            className="inline-flex shrink-0 items-center justify-center rounded-card border border-line-strong px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-petrol-700 hover:text-petrol-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Programm
          </Link>
        )}
        <a
          href={SKOOL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-card bg-petrol-700 px-5 py-3 text-[15px] font-medium text-paper-light transition-colors hover:bg-petrol-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:translate-y-px"
        >
          Jetzt beitreten
          <MedIcon name="arrowRight" className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
