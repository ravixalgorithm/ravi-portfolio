import { Reveal } from "./Reveal";

export function SiteSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="site-grid site-section">
      <div className="site-aside site-section-label">
        <h2>{label}</h2>
      </div>
      <Reveal className="site-main site-section-content site-section-panel">
        {children}
      </Reveal>
    </section>
  );
}
