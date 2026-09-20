"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SKOOL_URL } from "@/lib/config";

/**
 * medIQ lab Berater – ein leichter, scriptgesteuerter Conversion-Chat (kein
 * Backend/LLM). Qualifiziert den Besucher entlang seiner Pain-Points und führt
 * bei jedem Schritt Richtung Anmeldung (Skool) bzw. zu den passenden Seiten.
 * Nur clientseitig, Marken-Design, respektiert prefers-reduced-motion.
 */

type CTA = { label: string; href: string; external?: boolean; primary?: boolean };
type Option = { label: string; next: string };
type Node = { bot: string[]; ctas?: CTA[]; options?: Option[] };

const JOIN: CTA = { label: "Jetzt Platz sichern", href: SKOOL_URL, external: true, primary: true };

const TREE: Record<string, Node> = {
  start: {
    bot: [
      "Hey 👋 Ich zeig dir in unter einer Minute, ob medIQ lab zu dir passt.",
      "Was trifft gerade am ehesten auf dich zu?",
    ],
    options: [
      { label: "Angst vor der nächsten Prüfung", next: "fear" },
      { label: "Ich lerne viel, es bleibt nichts hängen", next: "method" },
      { label: "Kein Wiederholungsjahr riskieren", next: "cost" },
      { label: "Was kostet das?", next: "price" },
      { label: "Für wen ist das?", next: "who" },
    ],
  },
  fear: {
    bot: [
      "Kenn ich, und es ist fast nie ein Wissensproblem.",
      "In medIQ lab bekommst du Prüfungsstrategie, Altfragen-Logik und konkrete Werkzeuge gegen den Druck, damit du ruhiger reingehst.",
    ],
    ctas: [{ label: "So funktioniert die Methode", href: "/methode" }, JOIN],
    options: [
      { label: "Was kostet das?", next: "price" },
      { label: "Passt das zu mir?", next: "who" },
    ],
  },
  method: {
    bot: [
      "Dann liegt es fast immer an der Methode, nicht am Fleiß.",
      "Mit aktivem Abrufen und Spaced Repetition sitzt der Stoff wirklich, statt dreimal gelesen und wieder weg.",
    ],
    ctas: [{ label: "Die Methode ansehen", href: "/methode" }, JOIN],
    options: [
      { label: "Was kostet das?", next: "price" },
      { label: "Passt das zu mir?", next: "who" },
    ],
  },
  cost: {
    bot: [
      "Verständlich, gerade im Ausland.",
      "Ein Wiederholungsjahr kostet dort schnell 10.000 bis 15.000 €. Das komplette System kostet einen Bruchteil und soll dir genau das ersparen.",
    ],
    ctas: [{ label: "Programm & Preise", href: "/programm" }, JOIN],
    options: [
      { label: "Was kostet das genau?", next: "price" },
      { label: "Passt das zu mir?", next: "who" },
    ],
  },
  price: {
    bot: [
      "Zwei Wege rein:",
      "Community-Abo: 20 €/Monat, jederzeit kündbar.",
      "Komplette Workshop-Reihe: 800 € einmalig.",
      "Anmeldung läuft sicher über Skool.",
    ],
    ctas: [{ label: "Programm ansehen", href: "/programm" }, JOIN],
    options: [{ label: "Passt das zu mir?", next: "who" }],
  },
  who: {
    bot: [
      "Vor allem für Medizinstudierende im EU-Ausland, zum Beispiel in Ungarn, Österreich, der Slowakei oder Kroatien, vom ersten Semester bis zum Examen.",
      "Die Methoden funktionieren aber überall, auch in Deutschland.",
    ],
    ctas: [JOIN],
    options: [
      { label: "Lieber persönlich fragen", next: "contact" },
      { label: "Nochmal von vorn", next: "start" },
    ],
  },
  contact: {
    bot: ["Klar. Schreib uns einfach über die Kontaktseite, wir antworten ehrlich und ohne Verkaufsdruck."],
    ctas: [{ label: "Zur Kontaktseite", href: "/kontakt" }, JOIN],
    options: [{ label: "Nochmal von vorn", next: "start" }],
  },
};

type Msg = { from: "bot" | "user"; lines?: string[]; text?: string; ctas?: CTA[] };

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.9-5.4A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z" />
  </svg>
);
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

function CtaButtons({ ctas }: { ctas: CTA[] }) {
  return (
    <div className="mt-2 flex flex-col gap-2">
      {ctas.map((c) =>
        c.external ? (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 rounded-card px-4 py-2.5 text-sm font-medium transition-colors ${
              c.primary
                ? "bg-copper-500 text-petrol-900 hover:bg-copper-400"
                : "border border-line-strong text-ink hover:border-petrol-700 hover:text-petrol-700"
            }`}
          >
            {c.label}
          </a>
        ) : (
          <Link
            key={c.label}
            href={c.href}
            className="inline-flex items-center justify-center gap-2 rounded-card border border-line-strong px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-petrol-700 hover:text-petrol-700"
          >
            {c.label}
          </Link>
        ),
      )}
    </div>
  );
}

export function MedIQChat() {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Teaser nach kurzer Zeit, nur wenn noch nie geöffnet.
  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem("mediq_chat_seen") === "1";
    } catch {}
    if (seen) return;
    const t = setTimeout(() => setTeaser(true), 7000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing, options]);

  const goToNode = (key: string) => {
    const n = TREE[key];
    if (!n) return;
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", lines: n.bot, ctas: n.ctas }]);
      setOptions(n.options ?? []);
    }, 550);
  };

  const openChat = () => {
    setOpen(true);
    setTeaser(false);
    try {
      localStorage.setItem("mediq_chat_seen", "1");
    } catch {}
    if (messages.length === 0) goToNode("start");
  };

  const choose = (opt: Option) => {
    setMessages((m) => [...m, { from: "user", text: opt.label }]);
    setOptions([]);
    goToNode(opt.next);
  };

  return (
    <>
      {/* Bubble + Teaser (geschlossen) */}
      {!open && (
        <div className="fixed bottom-24 right-4 z-40 flex flex-col items-end gap-2 md:bottom-6 md:right-6">
          {teaser && (
            <button
              type="button"
              onClick={openChat}
              className="max-w-[15rem] rounded-card border border-line bg-paper-light px-4 py-3 text-left text-sm leading-snug text-ink shadow-lift"
            >
              Passt medIQ&nbsp;lab zu dir? Frag mich, ich helf dir in unter einer Minute. 👋
            </button>
          )}
          <button
            type="button"
            onClick={openChat}
            aria-label="medIQ lab Berater öffnen"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-petrol-700 text-paper-light shadow-lift transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-petrol-700 bg-teal-400" />
            </span>
            <ChatIcon />
          </button>
        </div>
      )}

      {/* Panel (offen) */}
      {open && (
        <div className="fixed inset-x-3 bottom-3 top-20 z-50 flex flex-col overflow-hidden rounded-card border border-line bg-paper-light shadow-lift sm:inset-x-auto sm:right-6 sm:top-auto sm:h-[560px] sm:w-[380px]">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-line bg-petrol-900 px-4 py-3 text-paper-light">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/20 text-teal-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M2 12h3.5l1.5-5 3 10 2-7 1.2 2H22" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="font-serif text-base font-medium leading-none">medIQ lab Berater</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-paper/70">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> Antwortet sofort
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Chat schließen"
              className="flex h-8 w-8 items-center justify-center rounded-full text-paper/80 transition-colors hover:bg-white/10 hover:text-paper-light"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Verlauf */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-paper px-4 py-4">
            {messages.map((m, i) =>
              m.from === "bot" ? (
                <div key={i} className="max-w-[85%]">
                  <div className="rounded-card rounded-tl-sm border border-line bg-paper-light px-3.5 py-2.5 text-sm leading-relaxed text-ink shadow-soft">
                    {m.lines?.map((l, j) => (
                      <p key={j} className={j > 0 ? "mt-1.5" : ""}>
                        {l}
                      </p>
                    ))}
                  </div>
                  {m.ctas && <CtaButtons ctas={m.ctas} />}
                </div>
              ) : (
                <div key={i} className="ml-auto max-w-[85%] rounded-card rounded-tr-sm bg-petrol-700 px-3.5 py-2.5 text-sm leading-relaxed text-paper-light">
                  {m.text}
                </div>
              ),
            )}
            {typing && (
              <div className="flex w-14 items-center gap-1 rounded-card rounded-tl-sm border border-line bg-paper-light px-3.5 py-3 shadow-soft">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-mute [animation-delay:-0.2s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-mute [animation-delay:-0.1s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-mute" />
              </div>
            )}
          </div>

          {/* Quick-Replies + persistenter CTA */}
          <div className="border-t border-line bg-paper-light px-4 py-3">
            {options.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {options.map((o) => (
                  <button
                    key={o.label}
                    type="button"
                    onClick={() => choose(o)}
                    className="rounded-full border border-petrol-300 bg-petrol-50 px-3 py-1.5 text-xs font-medium text-petrol-700 transition-colors hover:bg-petrol-700 hover:text-paper-light"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            )}
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-card bg-copper-500 px-4 py-2.5 text-sm font-semibold text-petrol-900 transition-colors hover:bg-copper-400"
            >
              Jetzt Platz sichern
            </a>
          </div>
        </div>
      )}
    </>
  );
}
