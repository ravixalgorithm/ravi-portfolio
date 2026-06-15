import type { IconType } from "react-icons";
import { SiAnthropic, SiGithub, SiOpenai } from "react-icons/si";

type Brand =
  | { kind: "icon"; icon: IconType; color: string }
  | { kind: "image"; src: string }
  | { kind: "chip"; short: string; color: string };

// Real image logos for own ventures + YC; brand icons where they exist;
// small letter-chips for institutions without a usable mark.
const registry: Record<string, Brand> = {
  Onto: { kind: "image", src: "/onto.jpeg" },
  "Open Dev Society": { kind: "image", src: "/ods.jpeg" },
  Anthropic: { kind: "icon", icon: SiAnthropic, color: "#d97757" },
  GitHub: { kind: "icon", icon: SiGithub, color: "#181717" },
  OpenAI: { kind: "icon", icon: SiOpenai, color: "#412991" },
  "Google for Startups": { kind: "image", src: "/google.png" },
  "Y Combinator": { kind: "image", src: "/Y_Combinator_logo.svg" },
  "YC Startup School": { kind: "image", src: "/Y_Combinator_logo.svg" },
  Antler: { kind: "image", src: "/antler.png" },
};

// Longest names first so multi-word brands win over any short substring.
export const brandNames = Object.keys(registry).sort(
  (a, b) => b.length - a.length,
);

export function BrandInline({ name }: { name: string }) {
  const brand = registry[name];
  if (!brand) return <>{name}</>;

  return (
    <span className="site-brand">
      {brand.kind === "icon" ? (
        <brand.icon
          className="site-brand-logo"
          style={{ color: brand.color }}
          aria-hidden
        />
      ) : brand.kind === "image" ? (
        <span
          className="site-brand-img"
          style={{ backgroundImage: `url(${brand.src})` }}
          aria-hidden
        />
      ) : (
        <span
          className="site-brand-chip"
          style={{ backgroundColor: brand.color }}
          aria-hidden
        >
          {brand.short}
        </span>
      )}
      {name}
    </span>
  );
}
