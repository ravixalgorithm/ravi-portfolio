"use client";

import {
    SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3,
    SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiSupabase,
    SiGit, SiGithub, SiFigma, SiPostman, SiVercel,
    SiC, SiKalilinux, SiGnubash, SiPython, SiRedux, SiGraphql,
    SiDocker, SiPrisma, SiStripe, SiFramer, SiGreensock, SiMui, SiExpo,
    SiShadcnui, SiWebrtc, SiSocketdotio, SiAuth0, SiClerk
} from "react-icons/si";
import { FaJava, FaDatabase, FaCode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { LucideProps, Terminal, Cpu, Globe, Server, Database, Code2 } from "lucide-react";

interface TechIconProps extends LucideProps {
    name: string;
}

export function TechIcon({ name, className, ...props }: TechIconProps) {
    // Normalize name for easier matching
    const key = name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "");

    const iconMap: Record<string, React.ElementType> = {
        // Languages
        java: FaJava,
        c: SiC,
        sql: FaDatabase,
        javascript: SiJavascript,
        typescript: SiTypescript,
        html: SiHtml5,
        css: SiCss3,
        bash: SiGnubash,
        python: SiPython,

        // Frontend
        reactjs: SiReact,
        react: SiReact,
        nextjs: SiNextdotjs,
        reactnative: SiReact,
        expo: SiExpo,
        tailwindcss: SiTailwindcss,
        shadcnui: SiShadcnui, // May fall back if not available, usually a shapes icon
        materialui: SiMui,
        framermotion: SiFramer,
        gsap: SiGreensock,
        redux: SiRedux,
        graphql: SiGraphql,

        // Backend
        nodejs: SiNodedotjs,
        expressjs: SiExpress,
        postgresql: SiPostgresql,
        mongodb: SiMongodb,
        supabase: SiSupabase,
        websockets: SiSocketdotio,
        oauth: SiAuth0, // As proxy for OAuth
        vercel: SiVercel,
        inngest: Server, // Fallback

        // Tools
        git: SiGit,
        github: SiGithub,
        coderabbit: FaCode, // Fallback
        postman: SiPostman,
        figma: SiFigma,
        vscode: VscVscode,
        antigravityide: Cpu, // Placeholder
    };

    // Special handlers for cases where Si properties might differ or missing
    if (key.includes("shadcn")) return <Code2 className={className} {...props} />;
    if (key.includes("vscode")) return <VscVscode className={className} {...props} />;

    const Icon = iconMap[key] || Terminal; // Default to Terminal icon

    return <Icon className={className} {...props} />;
}
