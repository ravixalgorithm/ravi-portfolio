import Image from "next/image";
import { profile } from "@/data/site";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="site">
      <div className="site-top-fade" aria-hidden="true" />
      <div className="site-grid site-hero-row">
        <div className="site-aside site-hero-contact">
          <a className="site-hero-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <p className="site-hero-location">Bengaluru, India</p>
        </div>
        <header className="site-main site-hero">
          <div className="site-hero-name">
            <span className="site-hero-name-text">
              I am <span className="site-hero-name-core">Ravi</span>
            </span>
            <Image
              src="/ravi-profile.png"
              alt="Ravi Pratap Singh"
              width={94}
              height={116}
              className="site-hero-photo"
              priority
            />
          </div>
          <p className="site-hero-role">
            Founder <span className="site-dot">·</span> Onto{" "}
            <span className="site-dot">·</span> Open Dev Society
          </p>
        </header>
      </div>
      {children}
    </main>
  );
}
