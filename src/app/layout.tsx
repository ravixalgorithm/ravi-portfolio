import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ravixalgorithm.tech"),
  title: {
    default: "Ravi Pratap Singh",
    template: "%s · Ravi Pratap Singh",
  },
  description:
    "Founder & CEO at Onto, building the compatibility layer for the agent web.",
  openGraph: {
    title: "Ravi Pratap Singh",
    description:
      "Founder & CEO at Onto, building the compatibility layer for the agent web.",
    url: "https://ravixalgorithm.tech",
    siteName: "Ravi Pratap Singh",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
