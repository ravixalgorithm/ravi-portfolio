import Link from "next/link";
import { SiteSection } from "@/components/SiteSection";
import { SiteShell } from "@/components/SiteShell";
import { essays } from "@/data/site";

export default function WritingPage() {
  const years = Array.from(new Set(essays.map((essay) => essay.year)));

  return (
    <SiteShell>
      <SiteSection label="Writing">
        <div className="site-prose">
          <p className="site-lead">
            Notes on agent infrastructure, compatibility layers, and building as a
            solo founder.
          </p>
          <p className="site-contact-meta">
            <Link href="/">home</Link>
          </p>
        </div>
      </SiteSection>

      {years.map((year) => (
        <SiteSection key={year} label={year}>
          <ul className="site-writing-list">
            {essays
              .filter((essay) => essay.year === year)
              .map((essay) => (
                <li key={essay.title} className="site-writing-item site-row">
                  <Link href={`/writing/${essay.slug}`}>
                    <span className="site-writing-date">{essay.date}</span>
                    <span className="site-writing-main">
                      <span className="site-writing-title">
                        <span>{essay.title}</span>
                        <span className="site-row-arrow" aria-hidden="true">↗</span>
                      </span>
                      <span className="site-spotlight-desc">{essay.subtitle}</span>
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </SiteSection>
      ))}
    </SiteShell>
  );
}
