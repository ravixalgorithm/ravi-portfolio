import Link from "next/link";
import { essays } from "@/data/site";

export default function WritingPage() {
  const years = Array.from(new Set(essays.map((essay) => essay.year)));

  return (
    <main className="page-shell">
      <header className="top-nav" aria-label="Primary navigation">
        <Link href="/">home</Link>
        <span aria-hidden="true">·</span>
        <Link href="/now">now</Link>
        <span aria-hidden="true">·</span>
        <Link href="/contact">contact</Link>
      </header>

      <section className="section first-section">
        <p>
          Notes on building infrastructure for the agent web, AI compatibility
          layers, and what I&apos;m learning as a 20-year-old solo founder.
        </p>
      </section>

      {years.map((year) => (
        <section className="section" key={year}>
          <h2>{year}</h2>
          <div className="essay-list">
            {essays
              .filter((essay) => essay.year === year)
              .map((essay) => (
                <article className="essay-entry" key={essay.title}>
                  <p className="essay-date">{essay.date}</p>
                  <div>
                    <h3>
                      <a href={essay.href}>{essay.title}</a>
                    </h3>
                    <p>{essay.subtitle}</p>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
