"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { experiences, skills } from "@/data/experience";
import { ArrowLeft, Briefcase, Users, GraduationCap, Terminal, Zap } from "lucide-react";

const typeConfig = {
    work: { label: "Employment", icon: Briefcase, color: "bg-blue-900/20 border-blue-800 text-blue-400" },
    community: { label: "Community", icon: Users, color: "bg-teal-900/20 border-teal-800 text-teal-400" },
    education: { label: "Education", icon: GraduationCap, color: "bg-purple-900/20 border-purple-800 text-purple-400" },
};

export default function ExperiencePage() {
    return (
        <div className="px-6 py-20">

            {/* Header */}
            <header className="mb-20">
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-3 h-3" /> Return_Index
                </Link>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-[var(--color-brand-teal)] rounded-full animate-pulse" />
                    <span className="font-mono text-sm tracking-widest uppercase text-neutral-500">Operational_Log // V1.0</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif italic mb-8 leading-[0.9] tracking-tighter">
                    Experience <span className="not-italic font-bold">Log.</span>
                </h1>
                <p className="font-mono text-xs text-neutral-500 max-w-md">
                    [LOG_STATUS: ACTIVE] <br />
                    A timeline of roles, responsibilities, and impact across work, community, and education.
                </p>
            </header>

            {/* Experience Timeline */}
            <section className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <Terminal className="w-4 h-4 text-neutral-400" />
                    <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            // EXPERIENCE_TIMELINE [{experiences.length} ENTRIES]
                    </h2>
                </div>

                <div className="space-y-px bg-neutral-800 border border-neutral-800">
                    {experiences.map((exp, index) => {
                        const config = typeConfig[exp.type];
                        const Icon = config.icon;

                        return (
                            <motion.div
                                key={`${exp.company}-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="bg-background p-8"
                            >
                                {/* Type Badge + Date */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 border text-[10px] font-mono uppercase tracking-widest ${config.color}`}>
                                        <Icon className="w-3 h-3" />
                                        <span>{config.label}</span>
                                    </div>
                                    <span className="font-mono text-[10px] text-neutral-400">{exp.date}</span>
                                </div>

                                {/* Role & Company */}
                                <h3 className="text-xl font-bold mb-1 leading-tight">{exp.role}</h3>
                                <p className="text-sm text-neutral-500 mb-3 font-mono">
                                    @ <span className="text-neutral-300 font-medium">{exp.company}</span>
                                </p>

                                {/* Description */}
                                <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                                    {exp.description}
                                </p>

                                {/* Bullet Points */}
                                {exp.bullets && exp.bullets.length > 0 && (
                                    <ul className="space-y-2 mb-4 ml-1">
                                        {exp.bullets.map((bullet, bi) => (
                                            <li key={bi} className="flex gap-2 text-sm text-neutral-400 leading-relaxed">
                                                <span className="text-[var(--color-brand-teal)] mt-1.5 shrink-0">•</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] font-mono border border-neutral-700 px-2 py-1 bg-neutral-900 uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Terminal — Init Sequence */}
            <section className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <Zap className="w-4 h-4 text-[var(--color-brand-teal)]" />
                    <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            // INIT_SEQUENCE [GETTING_STARTED]
                    </h2>
                </div>

                <div className="bg-black text-white p-8 rounded-sm font-mono text-sm shadow-2xl overflow-x-auto">
                    <div className="flex gap-2 mb-6 border-b border-white/20 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <span className="text-[var(--color-brand-teal)]">$</span> <span className="text-[var(--color-brand-rose)]">whoami</span>
                            <p className="mt-2 ml-4">&gt; Ravi Pratap Singh</p>
                            <p className="ml-4 text-gray-400">&gt; Frontend Lead @ Deexen AI | Founder @ Open Dev Society</p>
                        </div>

                        <div>
                            <span className="text-[var(--color-brand-teal)]">$</span> <span className="text-[var(--color-brand-rose)]">cat</span> current_status.txt
                            <p className="mt-2 ml-4">&gt; Building AI-powered dev tools &amp; open-source communities</p>
                            <p className="ml-4 text-gray-400">&gt; 8,400+ GitHub Stars | GitHub Trending | Harvard Aspire Leader</p>
                        </div>

                        <div>
                            <span className="text-[var(--color-brand-teal)]">$</span> <span className="text-[var(--color-brand-rose)]">ls</span> skills/
                            <p className="mt-2 ml-4">&gt; TypeScript/ React/ Next.js/ Node.js/ React-Native/</p>
                            <p className="ml-4">&gt; PostgreSQL/ MongoDB/ Supabase/ WebSockets/</p>
                        </div>

                        <div className="animate-pulse">
                            <span className="text-[var(--color-brand-teal)]">$</span> <span className="inline-block w-2 h-4 bg-[var(--color-brand-teal)] align-middle" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="mt-20 pt-10 border-t border-dashed border-neutral-800 text-center">
                <p className="font-serif italic text-2xl mb-6">&quot;Every line of code is a step forward.&quot;</p>
                <Link href="/contact" className="btn-tech inline-block">
                    [ LET&apos;S_WORK_TOGETHER ]
                </Link>
            </div>
        </div>
    );
}
