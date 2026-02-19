export interface Experience {
    role: string;
    company: string;
    type: "work" | "community" | "education";
    date: string;
    description: string;
    bullets?: string[];
    tags: string[];
}

export const experiences: Experience[] = [
    {
        role: "Frontend Lead Developer",
        company: "Deexen AI",
        type: "work",
        date: "Jan 2026 — Present",
        description:
            "Engineered a rich code-editing environment and led frontend architecture for an AI-powered development platform.",
        bullets: [
            "Engineered a rich code-editing environment integrating Monaco Editor with syntax highlighting, dynamic file tree visualization, and a responsive terminal UI layout.",
            "Built the complete application shell including secure authentication flows, protected user dashboards, and file management interfaces using modular React components.",
            "Led frontend architecture and mentored a junior developer on React best practices; developed high-performance landing pages optimized for Core Web Vitals.",
        ],
        tags: ["React", "Next.js", "Monaco Editor", "TypeScript"],
    },
    {
        role: "Founder & Lead Developer",
        company: "Open Dev Society",
        type: "community",
        date: "Jul 2024 — Present",
        description:
            "Founded a decentralized society of developers building free, open-source public goods. Achieved GitHub Trending status with 8,400+ stars.",
        bullets: [
            "Grew community to 100+ active members and achieved GitHub Trending status (Global Top Lists), earned over 8,400 stars from numerous tech publications.",
            "Secured an exclusive partnership with Siray.ai; served as official Community Partner for Apertre 3.0 and JWOC.",
            "Mentored 30+ first-time contributors, reviewed 100+ PRs, and established a CI/CD pipeline maintaining 99.9% uptime across 5 flagship repositories.",
            "Led end-to-end development of OpenHaven and OpenReadMe, implementing social authentication and serverless image generation.",
        ],
        tags: ["Leadership", "Open Source", "Community", "CI/CD"],
    },
];

export const skills = [
    {
        category: "Languages",
        items: ["Java", "C", "SQL", "JavaScript", "TypeScript", "HTML", "CSS", "Bash"],
    },
    {
        category: "Frontend & UI",
        items: [
            "React.js",
            "Next.js",
            "React Native",
            "Expo",
            "Tailwind CSS",
            "ShadCN-UI",
            "Material-UI",
            "Framer Motion",
            "GSAP",
        ],
    },
    {
        category: "Backend & DB",
        items: [
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MongoDB",
            "Supabase",
            "WebSockets",
            "OAuth",
            "Vercel",
            "Inngest",
        ],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "CodeRabbit", "Postman", "Figma", "VS Code", "Antigravity IDE", "Vercel"],
    },
];
