import { featuredTech, techStack } from "@/data/site";

const ROW_COUNT = 3;

// Flatten the grouped stack, then deal items round-robin into rows so each
// row carries a spread of categories rather than one bucket.
const flat = techStack.flatMap((group) => group.items);
const rows = Array.from({ length: ROW_COUNT }, (_, row) =>
  flat.filter((_, index) => index % ROW_COUNT === row),
);
const featured = new Set(featuredTech);

function Sequence({ items, hidden }: { items: string[]; hidden?: boolean }) {
  return (
    <div className="site-marquee-seq" aria-hidden={hidden || undefined}>
      {items.map((name) => (
        <span key={name} className="site-marquee-cell">
          <span
            className={`site-marquee-item${
              featured.has(name) ? " is-featured" : ""
            }`}
          >
            {name}
          </span>
          <span className="site-marquee-sep" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export function TechMarquee() {
  return (
    <div className="site-marquee" aria-label="Tech stack">
      {rows.map((items, row) => (
        <div
          key={row}
          className={`site-marquee-row site-marquee-row-${
            row % 2 === 0 ? "ltr" : "rtl"
          }`}
        >
          {/* Two identical sequences let the track loop seamlessly at -50%. */}
          <div className="site-marquee-track">
            <Sequence items={items} />
            <Sequence items={items} hidden />
          </div>
        </div>
      ))}
    </div>
  );
}
