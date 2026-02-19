"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { KonamiHint } from "./KonamiHint";
import {
    ArrowUpRight,
    FileText,
    Package,
    Briefcase,
    Mail,
    Github,
    Megaphone,
    Zap,
    Linkedin,
    Twitter,
    Globe,
    ExternalLink,
} from "lucide-react";

const quickLinks = [
    { label: "About", href: "/about", icon: FileText },
    { label: "Projects", href: "/projects", icon: Package },
    { label: "Experience", href: "/experience", icon: Briefcase },
    { label: "Education", href: "/education", icon: Zap },
    { label: "Contact", href: "/contact", icon: Mail },
];

const socialLinks = [
    { label: "GitHub", href: "https://github.com/ravixalgorithm", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/ravixalgorithm", icon: Linkedin },
    { label: "X / Twitter", href: "https://x.com/ravixalgorithm", icon: Twitter },
];

const visitLinks: { label: string; href: string; logo?: string; icon?: any }[] = [
    { label: "Open Dev Society", href: "https://opendevsociety.vercel.app", logo: "/ods.png" },
    { label: "VORQ Agency", href: "https://vorq.agency", logo: "/vorq.svg" },
];

const highlights = [
    { text: "9000+ GitHub Stars", type: "stat" as const },
    { text: "GitHub Trending (Global)", type: "achievement" as const },
    { text: "Harvard Aspire Leader 2024", type: "achievement" as const },
    { text: "Global Top 10 Finalist — Aspire X CAYU Hackathon", type: "stat" as const },
];

export const SidebarPanels = () => {
    return (
        <>
            {/* ─── LEFT SIDEBAR ─── */}
            <motion.aside
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="fixed left-[max(0.75rem,calc((100vw-64rem)/2-12rem))] top-24 z-30 hidden xl:flex flex-col gap-6 w-40"
            >
                {/* Quick Links */}
                <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-3 flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-[var(--color-brand-teal)] rounded-full" />
                        Navigate
                    </h4>
                    <ul className="space-y-1.5">
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-[var(--color-brand-teal)] transition-colors group"
                                >
                                    <link.icon className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <span className="uppercase tracking-wider">{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Divider */}
                <div className="w-full h-px border-t border-dashed border-neutral-800" />

                {/* Social / External */}
                <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-3 flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-[var(--color-brand-teal)] rounded-full" />
                        Connect
                    </h4>
                    <ul className="space-y-1.5">
                        {socialLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors group"
                                >
                                    <link.icon className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <span className="uppercase tracking-wider">{link.label}</span>
                                    <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-60 transition-opacity" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Divider */}
                <div className="w-full h-px border-t border-dashed border-neutral-800" />

                {/* Visit */}
                <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-3 flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-[var(--color-brand-rose)] rounded-full" />
                        Visit
                    </h4>
                    <ul className="space-y-1.5">
                        {visitLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors group"
                                >
                                    <div className="w-3 h-3 relative opacity-60 group-hover:opacity-100 transition-opacity">
                                        {link.logo ? (
                                            <Image
                                                src={link.logo}
                                                alt={link.label}
                                                fill
                                                className="object-contain grayscale brightness-125 group-hover:grayscale-0 transition-all"
                                            />
                                        ) : (
                                            link.icon && <link.icon className="w-full h-full" />
                                        )}
                                    </div>
                                    <span className="uppercase tracking-wider">{link.label}</span>
                                    <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-60 transition-opacity" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.aside>

            {/* ─── RIGHT SIDEBAR ─── */}
            <motion.aside
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="fixed right-[max(0.75rem,calc((100vw-64rem)/2-12rem))] top-24 z-30 hidden xl:flex flex-col gap-6 w-40"
            >
                {/* Status */}
                <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-3 flex items-center gap-1.5">
                        <Zap className="w-3 h-3" />
                        Status
                    </h4>
                    <div className="flex items-center gap-2 p-2 border border-dashed border-neutral-800 bg-neutral-900/60 rounded-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Available</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px border-t border-dashed border-neutral-800" />

                {/* Highlights */}
                <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-3 flex items-center gap-1.5">
                        <Megaphone className="w-3 h-3" />
                        Highlights
                    </h4>
                    <ul className="space-y-2">
                        {highlights.map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-1.5 text-xs font-mono text-neutral-400 leading-tight"
                            >
                                <span
                                    className={`mt-[3px] w-1 h-1 rounded-full shrink-0 ${item.type === "achievement"
                                        ? "bg-[var(--color-brand-teal)]"
                                        : "bg-[var(--color-brand-rose)]"
                                        }`}
                                />
                                <span className="uppercase tracking-wider">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Divider */}
                <div className="w-full h-px border-t border-dashed border-neutral-800" />

                {/* Konami Hint */}
                <div>
                    <KonamiHint />
                </div>
            </motion.aside>
        </>
    );
};
