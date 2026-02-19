import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono, Rock_3D } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const rock3d = Rock_3D({ weight: "400", subsets: ["latin"], variable: "--font-rock3d" });

export const metadata: Metadata = {
  title: "Ravi Pratap Singh — Developer | Designer | Writer | Creator",
  description: "Portfolio of Ravi Pratap Singh — a developer, designer, writer, and creator building impactful digital experiences.",
  icons: {
    icon: "/favicon.ico",
  },
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SidebarPanels } from "@/components/SidebarPanels";
import { CustomCursor } from "@/components/CustomCursor";
import { CommandPalette } from "@/components/CommandPalette";
import { SystemAlert } from "@/components/SystemAlert";
import { ConsoleSignature } from "@/components/ConsoleSignature";
import { SelfDestruct } from "@/components/SelfDestruct";
import { KonamiCode } from "@/components/KonamiCode";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} ${rock3d.variable} antialiased`}>
        <CustomCursor />
        <SystemAlert />
        <ConsoleSignature />
        <SelfDestruct />
        <KonamiCode />
        <CommandPalette />
        <main className="min-h-screen bg-background text-foreground cursor-none">
          <SidebarPanels />
          <div className="max-w-5xl mx-auto border-x border-dashed border-neutral-800 min-h-screen bg-background">
            <Navbar />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
