import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { decorate } from "@/components/decorate";
import { SiteShell } from "@/components/SiteShell";
import { essays, type EssayBlock } from "@/data/site";

export function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = essays.find((item) => item.slug === slug);
  if (!essay) return {};
  return { title: `${essay.title} — Ravi Pratap Singh`, description: essay.subtitle };
}

function Block({ block }: { block: EssayBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="site-article-h2">{block.text}</h2>;
    case "quote":
      return (
        <blockquote className="site-article-quote">
          {decorate(block.text)}
        </blockquote>
      );
    case "ul":
      return (
        <ul className="site-article-ul">
          {block.items.map((item) => (
            <li key={item}>{decorate(item)}</li>
          ))}
        </ul>
      );
    default:
      return <p>{decorate(block.text)}</p>;
  }
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = essays.find((item) => item.slug === slug);
  if (!essay) notFound();

  return (
    <SiteShell>
      <article className="site-grid site-section">
        <div className="site-aside site-article-aside">
          <Link href="/writing" className="site-article-back">
            ← Writing
          </Link>
          <p className="site-article-date">
            {essay.date}, {essay.year}
          </p>
          <p className="site-article-readtime">{essay.readTime}</p>
        </div>
        <div className="site-main site-article">
          <header className="site-article-head">
            <h1 className="site-article-title">{essay.title}</h1>
            <p className="site-article-sub">{essay.subtitle}</p>
          </header>
          <div className="site-article-body">
            {essay.body.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>
          <footer className="site-article-foot">
            <Link href="/writing" className="site-writing-more">
              ← All writing
            </Link>
          </footer>
        </div>
      </article>
    </SiteShell>
  );
}
