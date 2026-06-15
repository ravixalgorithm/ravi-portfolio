import { Fragment, type ReactNode } from "react";
import { BrandInline, brandNames } from "./brands";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Wrap any known brand name found in `text` with its inline logo.
function brandify(text: string): ReactNode {
  if (brandNames.length === 0) return text;

  const lookup = new Set(brandNames);
  const pattern = brandNames
    .map((name) => `\\b${escapeRegExp(name)}\\b`)
    .join("|");
  const parts = text.split(new RegExp(`(${pattern})`, "g"));

  return parts.map((part, index) =>
    lookup.has(part) ? (
      <BrandInline key={`brand-${index}`} name={part} />
    ) : (
      part
    ),
  );
}

/**
 * Renders prose with inline brand logos everywhere, plus a teal highlighter
 * marker on the given `highlights` phrases. Brands inside a highlighted phrase
 * still get their logo (the marker wraps the decorated content).
 */
export function decorate(text: string, highlights: string[] = []): ReactNode {
  if (highlights.length === 0) return brandify(text);

  const lookup = new Set(highlights);
  const pattern = [...highlights]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join("|");
  const parts = text.split(new RegExp(`(${pattern})`, "g"));

  return parts.map((part, index) =>
    lookup.has(part) ? (
      <mark key={index} className="site-mark">
        {brandify(part)}
      </mark>
    ) : (
      <Fragment key={index}>{brandify(part)}</Fragment>
    ),
  );
}
