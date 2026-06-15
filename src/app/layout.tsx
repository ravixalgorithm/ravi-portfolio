import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ravixalgorithm.tech"),
  title: {
    default: "Ravi Pratap Singh",
    template: "%s · Ravi Pratap Singh",
  },
  description:
    "Founder & CEO at Onto — building the live external context layer that lets AI agents read, watch, and govern the open web.",
  openGraph: {
    title: "Ravi Pratap Singh",
    description:
      "Founder & CEO at Onto — building the live external context layer that lets AI agents read, watch, and govern the open web.",
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
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
