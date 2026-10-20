import { Fragment } from "react";

/**
 * Rendert Übersetzungs-Strings mit leichter Auszeichnung:
 *   *so*            → hervorgehoben (Klasse `em`, z. B. kursiv Petrol)
 *   [Text](/pfad/)  → interner Link
 *   [Text](https…)  → externer Link (neuer Tab)
 *   \n              → Zeilenumbruch
 * Hält die Wörterbücher frei von JSX.
 */
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function Emphasis({ text, em }: { text: string; em: string }) {
  return (
    <>
      {text.split("*").map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className={em}>
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

function Line({ text, em, link }: { text: string; em: string; link: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const [whole, label, href] = m;
    const start = m.index ?? 0;
    if (start > last) out.push(<Emphasis key={`t${last}`} text={text.slice(last, start)} em={em} />);
    const external = /^https?:\/\//.test(href);
    out.push(
      <a
        key={`a${start}`}
        href={href}
        className={link}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </a>,
    );
    last = start + whole.length;
  }
  if (last < text.length) out.push(<Emphasis key={`t${last}`} text={text.slice(last)} em={em} />);
  return <>{out}</>;
}

export function Rich({
  text,
  em = "text-petrol-700 italic",
  link = "underline decoration-copper-500/50 underline-offset-4 transition-colors hover:text-petrol-700",
}: {
  text: string;
  em?: string;
  link?: string;
}) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          <Line text={line} em={em} link={link} />
        </Fragment>
      ))}
    </>
  );
}
