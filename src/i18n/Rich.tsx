import { Fragment } from "react";

/**
 * Rendert Übersetzungs-Strings mit leichter Auszeichnung:
 *   *so*  → hervorgehoben (Klasse `em`, z. B. kursiv Petrol)
 *   \n    → Zeilenumbruch
 * Hält die Wörterbücher frei von JSX.
 */
export function Rich({
  text,
  em = "text-petrol-700 italic",
}: {
  text: string;
  em?: string;
}) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {line.split("*").map((part, i) =>
            i % 2 === 1 ? (
              <span key={i} className={em}>
                {part}
              </span>
            ) : (
              <Fragment key={i}>{part}</Fragment>
            ),
          )}
        </Fragment>
      ))}
    </>
  );
}
