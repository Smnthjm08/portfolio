import { Fragment } from "react";

/**
 * Renders `**emphasis**` in plain data strings as foreground-weight text.
 * Deliberately narrower than the Markdown component — no block elements.
 */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-medium text-foreground">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
