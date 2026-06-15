type CompanyMarkProps = {
  company: string;
  mark?: string;
  markColor?: string;
  logo?: string;
};

export function CompanyMark({
  company,
  mark,
  markColor = "#3b82f6",
  logo,
}: CompanyMarkProps) {
  if (logo) {
    return (
      <div
        className="site-entry-mark site-entry-mark-logo"
        style={{ backgroundImage: `url(${logo})` }}
        aria-hidden="true"
      />
    );
  }

  const label = mark ?? company.charAt(0).toUpperCase();

  return (
    <div
      className="site-entry-mark"
      style={{ background: markColor }}
      aria-hidden="true"
    >
      {label}
    </div>
  );
}
