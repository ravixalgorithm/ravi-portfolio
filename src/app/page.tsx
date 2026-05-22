import Image from "next/image";
import Link from "next/link";
import { profile, projects, recentWriting } from "@/data/site";

export default function Home() {
  return (
    <main className="page-shell">
      <header className="top-nav" aria-label="Primary navigation">
        <Link href="/writing">writing</Link>
        <span aria-hidden="true">·</span>
        <Link href="/now">now</Link>
        <span aria-hidden="true">·</span>
        <Link href="/contact">contact</Link>
      </header>

      <section className="hero hero-with-photo">
        <Image
          src="/ravi.jpg"
          alt={profile.name}
          width={88}
          height={88}
          priority
          className="hero-photo"
        />
        <div>
          <h1>{profile.name}</h1>
          <p>{profile.role}</p>
        </div>
      </section>

      <section className="section">
        <p>
          I&apos;m building{" "}
          <a href={profile.onto} target="_blank" rel="noopener noreferrer">
            Onto
          </a>
          , the compatibility layer for the agent web. Before this, I co-founded
          Open Dev Society, an open source community that crossed 11,200 GitHub
          stars and reached 10,500 active users through OpenStock. I&apos;m a computer
          science undergraduate at HBTU Kanpur, building from Bulandshahr, India.
          Selected for the Harvard-affiliated Aspire Leaders Program in the top
          2% of global applicants.
        </p>
      </section>

      <section className="section compact">
        <p>
          <span className="label">Right now:</span> Building Layer 1 of Onto in
          production. The MCP server is live in Anthropic&apos;s official directory.
          Layer 2 SDK is shipping to first design partners. Layer 3 is being
          designed. <Link href="/now">Read more at /now</Link> →
        </p>
      </section>

      <section className="section">
        <h2>Recent writing</h2>
        <ul className="plain-list">
          {recentWriting.map((item) => (
            <li key={item.title}>
              <Link href={item.href}>{item.title}</Link>
              <span> — {item.date}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <ul className="plain-list">
          {projects.map((project) => (
            <li key={project.name}>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
              <span> · {project.context}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span> · </span>
        <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
          twitter
        </a>
        <span> · </span>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <span> · </span>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          github
        </a>
      </footer>
    </main>
  );
}
