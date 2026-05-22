import Link from "next/link";

export default function NowPage() {
  return (
    <main className="page-shell">
      <header className="top-nav" aria-label="Primary navigation">
        <Link href="/">home</Link>
        <span aria-hidden="true">·</span>
        <Link href="/writing">writing</Link>
        <span aria-hidden="true">·</span>
        <Link href="/contact">contact</Link>
      </header>

      <section className="section first-section">
        <p>What I&apos;m working on, as of May 2026.</p>

        <p>
          Onto is now live across six production surfaces — buildonto.dev,
          app.buildonto.dev, docs.buildonto.dev, api.buildonto.dev,
          @ontosdk/next on npm, and @ontosdk/mcp listed in Anthropic&apos;s official
          MCP Registry.
        </p>

        <p>
          I built all of this solo over the last 10 weeks. I&apos;m a CS undergrad at
          HBTU Kanpur. I&apos;m not on a team. I don&apos;t have funding. I shipped this
          with free-tier tooling because I wanted to prove that the compatibility
          layer for the agent web could be built without permission.
        </p>

        <p>
          Current focus: closing first paying customers on Layer 1, shipping
          multi-site enforcement on the Serve SDK, and finalizing the Layer 3
          prototype for Q3 2026.
        </p>
      </section>

      <section className="section compact">
        <h2>Conversations in progress</h2>
        <ul className="plain-list">
          <li>Y Combinator S26 application is in active review</li>
          <li>F4F (S16VC&apos;s accelerator) is in active conversation</li>
          <li>
            Several AI developer teams evaluating Onto&apos;s Read API as a Firecrawl
            alternative
          </li>
        </ul>
      </section>

      <section className="section compact">
        <p>
          Reading: Andy Grove on operational excellence. Bret Victor on the
          future of programming interfaces. Anything by Patrick McKenzie on
          shipping software.
        </p>
        <p className="muted">Last updated: May 20, 2026.</p>
      </section>
    </main>
  );
}
