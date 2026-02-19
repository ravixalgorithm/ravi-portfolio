export interface Project {
    name: string;
    description: string;
    tags: string[];
    language: string;
    url: string;
    liveUrl?: string;
    date?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        name: "OpenStock",
        description:
            "Featured as a Trending Repository on GitHub, serving 7,500+ active users. High-frequency trading dashboard integrating TradingView & Finnhub APIs with live candlestick charts, sector heatmaps, and an AI-market summarizer.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Finnhub API"],
        language: "TypeScript",
        url: "https://github.com/Open-Dev-Society/OpenStock",
        liveUrl: "https://openstock.vercel.app",
        date: "Oct 2025",
        featured: true,
    },
    {
        name: "VIRALIS",
        description:
            "Gemini 3 Hackathon project — Content Studio module using Google Gemini 3 for multi-modal script generation. Secure OAuth 2.0 for YouTube & Instagram integration with a drag-and-drop Content Board.",
        tags: ["Next.js 15", "Google Gemini 3", "YouTube API", "OAuth 2.0"],
        language: "TypeScript",
        url: "https://github.com/ravixalgorithm/viralis",
        liveUrl: "https://viralis.vercel.app",
        date: "Feb 2026",
        featured: true,
    },
    {
        name: "InvoiceAI",
        description:
            "Chat-to-Invoice platform using Tambo AI — generate high-fidelity PDF invoices through natural language, reducing manual data entry by 90%. Features multi-tenancy and real-time AI-UI state sync.",
        tags: ["Next.js 15", "Tambo AI", "Supabase", "Tailwind"],
        language: "TypeScript",
        url: "https://github.com/ravixalgorithm/invoiceai",
        liveUrl: "https://invoiceai.vercel.app",
        date: "Feb 2026",
        featured: true,
    },
    {
        name: "HBTU College Study App",
        description:
            "Production React Native app serving 1,000+ students with secure OTP authentication, encrypted downloads, a normalized PostgreSQL schema (15+ tables) with RLS & RBAC, and a companion admin dashboard for 200+ faculty.",
        tags: ["React Native", "Next.js", "Supabase", "Expo"],
        language: "TypeScript",
        url: "https://github.com/ravixalgorithm/hbtu-study-app",
        date: "Nov 2025",
        featured: true,
    },
];
