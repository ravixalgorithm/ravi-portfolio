import Link from "next/link";
import { profile } from "@/data/site";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <header className="top-nav" aria-label="Primary navigation">
        <Link href="/">home</Link>
        <span aria-hidden="true">·</span>
        <Link href="/writing">writing</Link>
        <span aria-hidden="true">·</span>
        <Link href="/now">now</Link>
      </header>

      <section className="section first-section contact-lines">
        <p>
          Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p>
          Twitter:{" "}
          <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
            @ravixalgorithm
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin.com/in/ravixalgorithm
          </a>
        </p>
      </section>

      <section className="section compact">
        <p>
          I read everything I receive. I respond to most of it. I&apos;m slower than
          I&apos;d like to be — I&apos;m building solo. If you&apos;re a developer using Onto,
          a founder considering installing it, or someone with operational
          experience in developer tools who wants to help — please reach out.
        </p>
      </section>
    </main>
  );
}
