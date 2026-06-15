import Link from "next/link";
import { CompanyMark } from "@/components/CompanyMark";
import { SiteSection } from "@/components/SiteSection";
import { SiteShell } from "@/components/SiteShell";
import { TechMarquee } from "@/components/TechMarquee";
import { decorate } from "@/components/decorate";
import {
  aboutClosing,
  aboutHighlights,
  aboutParagraphs,
  buildingNow,
  education,
  featured,
  heroStats,
  journey,
  profile,
  recentWriting,
} from "@/data/site";

export default function Home() {
  return (
    <SiteShell>
      <SiteSection label="About">
        <div className="site-prose">
          <p className="site-lead">
            {decorate(
              "building the context layer AI agents are missing.",
              aboutHighlights,
            )}
          </p>
          <div className="site-prose-body">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{decorate(paragraph, aboutHighlights)}</p>
            ))}
          </div>
          <p className="site-signature">{aboutClosing}</p>
        </div>
      </SiteSection>

      <SiteSection label="Highlights">
        <ul className="site-metrics">
          {heroStats.map((stat) => (
            <li key={stat.label} className="site-row">
              <span className="site-metrics-value">{stat.value}</span>
              <span className="site-metrics-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </SiteSection>

      <SiteSection label="Journey">
        <div className="site-prose">
          {journey.map((item) => (
            <article key={item.company} className="site-entry site-journey-entry">
              <div className="site-entry-head">
                <div className="site-entry-head-row">
                  <CompanyMark
                    company={item.company}
                    mark={item.mark}
                    markColor={item.markColor}
                    logo={item.logo}
                  />
                  <p className="site-entry-title">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.role} @ {item.company}
                      </a>
                    ) : (
                      `${item.role} @ ${item.company}`
                    )}
                  </p>
                </div>
                <div className="site-entry-head-meta">
                  <p className="site-entry-org">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </p>
                  <p className="site-entry-dates">{item.dates}</p>
                </div>
              </div>
              <div className="site-entry-body">
                <p>{decorate(item.description)}</p>
                {item.points.map((point) => (
                  <p key={point}>{decorate(point)}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SiteSection>

      <SiteSection label="Writing">
        <ul className="site-writing-list">
          {recentWriting.map((item) => (
            <li key={item.title} className="site-writing-item site-row">
              <Link href={item.href}>
                <span className="site-writing-date">{item.date}</span>
                <span className="site-writing-title">
                  <span>{item.title}</span>
                  <span className="site-row-arrow" aria-hidden="true">↗</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/writing" className="site-writing-more">
          All writing <span className="site-row-arrow" aria-hidden="true">↗</span>
        </Link>
      </SiteSection>

      <SiteSection label="Featured in">
        <div className="site-spotlight-list">
          {featured.slice(0, 4).map((item) => (
            <article key={item.title} className="site-spotlight site-row">
              <div className="site-spotlight-head">
                <h3 className="site-spotlight-title">{decorate(item.title)}</h3>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-spotlight-link"
                  >
                    {item.cta}
                    <span className="site-row-arrow" aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
              <p className="site-spotlight-desc">{decorate(item.context)}</p>
            </article>
          ))}
        </div>
      </SiteSection>

      <SiteSection label="Building now">
        <div className="site-build-head">
          <CompanyMark company="Onto" mark="O" markColor="#3b82f6" logo="/onto.jpeg" />
          <div className="site-build-text">
            <p className="site-build-name">
              <a href={buildingNow.href} target="_blank" rel="noopener noreferrer">
                Onto
              </a>
            </p>
            <p className="site-build-sub">
              External context infrastructure for AI agents.
            </p>
          </div>
        </div>
        <div className="site-timeline">
          {buildingNow.layers.map((layer) => (
            <div
              key={layer.name}
              className={`site-timeline-item site-timeline-item-${layer.status.toLowerCase()}`}
            >
              <span className="site-timeline-dot" aria-hidden="true" />
              <div>
                <div className="site-timeline-head">
                  <span className="site-timeline-name">{layer.name}</span>
                  <span className="site-timeline-status">{layer.status}</span>
                </div>
                <p className="site-timeline-desc">{layer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SiteSection>

      <SiteSection label="Education">
        <div className="site-edu-block">
          <p className="site-edu-degree">{education.degree}</p>
          <p className="site-edu-school">{decorate(education.school)}</p>
          <p className="site-edu-dates">{education.dates}</p>
          <p className="site-edu-note">{education.note}</p>
          <p className="site-edu-highlights">
            {education.highlights.join(" · ")}
          </p>
        </div>
      </SiteSection>

      <SiteSection label="Tech stack">
        <TechMarquee />
      </SiteSection>

      <SiteSection label="Contact">
        <div className="site-prose">
          <p className="site-contact-lead">Got something interesting to build?</p>
          <p className="site-contact-meta">
            {profile.location} · originally {profile.origin}
          </p>
          <dl className="site-contact-grid">
            <div className="site-contact-row site-row">
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div className="site-contact-row site-row">
              <dt>X</dt>
              <dd>
                <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
                  @ravixalgorithm
                </a>
              </dd>
            </div>
            <div className="site-contact-row site-row">
              <dt>GitHub</dt>
              <dd>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  ravixalgorithm
                </a>
              </dd>
            </div>
            <div className="site-contact-row site-row">
              <dt>LinkedIn</dt>
              <dd>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  ravixalgorithm
                </a>
              </dd>
            </div>
            <div className="site-contact-row site-row">
              <dt>Onto</dt>
              <dd>
                <a href={profile.onto} target="_blank" rel="noopener noreferrer">
                  buildonto.dev
                </a>
              </dd>
            </div>
          </dl>
          <p className="site-contact-note">{profile.status}</p>
          <p className="site-footer">
            © 2026 {profile.name} · Building Onto from Bangalore
          </p>
        </div>
      </SiteSection>
    </SiteShell>
  );
}
