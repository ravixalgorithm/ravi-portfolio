import Link from "next/link";
import { ArrowLeft, Terminal, Shield, Globe, BookOpen, Code2, Heart, Zap, PenTool, Lightbulb, Target, GraduationCap, Trophy, Award, Star, GitBranch, MapPin, Activity } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="px-6 py-20">

            {/* Header */}
            <header className="mb-20">
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-3 h-3" /> Return_Index
                </Link>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-white rounded-full" />
                    <span className="font-mono text-sm tracking-widest uppercase">Identity_Protocol // V1.0</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-serif italic leading-[0.9] tracking-tighter mb-8">
                    About <br />
                    <span className="not-italic font-bold">Ravi.</span>
                </h1>
                <p className="font-mono text-xs text-neutral-500 max-w-md">
                    [DOC_ID: RPS-2024-BIO] <br />
                    [CLASSIFICATION: PUBLIC] <br />
                    [STATUS: ACTIVELY_BUILDING]
                </p>
            </header>

            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-p:text-neutral-400 prose-p:leading-relaxed prose-headings:text-foreground">

                {/* 01 Core Belief */}
                <section className="mb-24 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-brand-teal)]" />
                    <div className="pl-12 py-4">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 mb-6 block">// 01_PHILOSOPHY_MANIFESTO</span>
                        <blockquote className="text-3xl md:text-5xl font-serif italic text-white leading-[1.1] tracking-tight mb-8">
                            &quot;I believe technology should empower everyone. Knowledge should be free. And the best things are built in the open.&quot;
                        </blockquote>
                        <div className="max-w-2xl space-y-4">
                            <p className="text-lg text-neutral-300 leading-relaxed">
                                I am a developer, founder, and open-source advocate. My work is defined by a commitment to transparency, technical excellence, and human-centric design.
                            </p>
                            <p className="text-sm text-neutral-500 font-mono">
                                [MISSION_DIRECTIVE: DEMOCRATIZE_POSSIBILITY]
                            </p>
                        </div>
                    </div>
                </section>

                {/* 02 What I Do */}
                <section className="mb-24">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-8 block border-b border-neutral-800 pb-2 uppercase tracking-widest">// 02_OPERATIONAL_ROLES</span>
                    <h2 className="text-5xl font-serif mb-10">What I Do.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                        {[
                            { icon: Code2, title: "Full Stack Development", desc: "Building performant web applications with React, Next.js, Node.js, and TypeScript." },
                            { icon: PenTool, title: "Design & Identity", desc: "Crafting editorial design systems and UI/UX that bridge the gap between form and function." },
                            { icon: BookOpen, title: "Technical Writing", desc: "Author of \"Beyond the Algorithm\" newsletter. Translating complex code into human stories." },
                            { icon: Lightbulb, title: "Product Strategy", desc: "Leading products from 0 to 1. Founder of community-driven open source ecosystems." },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5 items-start">
                                <div className="p-3.5 bg-neutral-900 border border-neutral-800 group transition-colors hover:border-[var(--color-brand-teal)]">
                                    <item.icon className="w-5 h-5 text-[var(--color-brand-teal)]" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                                    <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 03 Tech Toolbox */}
                <section className="mb-24">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-8 block border-b border-neutral-800 pb-2 uppercase tracking-widest">// 03_TECH_TOOLBOX</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 not-prose">
                        {[
                            { label: "Languages", items: ["TS/JS", "Java", "SQL", "Bash"] },
                            { label: "Frontend", items: ["Next.js", "React", "Tailwind", "Motion"] },
                            { label: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Supabase"] },
                            { label: "Tools", items: ["Git", "Docker", "Figma", "Vercel"] },
                        ].map((group, i) => (
                            <div key={i}>
                                <h3 className="text-[10px] font-mono text-[var(--color-brand-teal)] uppercase tracking-[0.2em] mb-4">{group.label}</h3>
                                <ul className="space-y-2">
                                    {group.items.map((item, j) => (
                                        <li key={j} className="text-base text-neutral-200 font-medium">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 04 Values */}
                <section className="mb-24 bg-neutral-900/40 p-12 border border-dashed border-neutral-800 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Shield className="w-32 h-32" />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 block">// 04_CORE_MANIFESTO</span>
                    <div className="flex flex-col gap-6 relative z-10">
                        <p className="text-2xl font-serif italic text-white group-hover:text-[var(--color-brand-teal)] transition-colors tracking-tight leading-none italic">Build in the open. Always.</p>
                        <p className="text-2xl font-serif italic text-white group-hover:text-[var(--color-brand-teal)] transition-colors tracking-tight leading-none italic">Ship fast. Learn faster.</p>
                        <p className="text-2xl font-serif italic text-white group-hover:text-[var(--color-brand-teal)] transition-colors tracking-tight leading-none italic">Empower others through knowledge.</p>
                        <p className="text-2xl font-serif italic text-white group-hover:text-[var(--color-brand-teal)] transition-colors tracking-tight leading-none italic">Design with intention.</p>
                        <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.3em] mt-8 pt-8 border-t border-neutral-800/50">Driven by curiosity // Fueled by impact</p>
                    </div>
                </section>

                {/* 05 Education */}
                <section className="mb-24">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6 block border-b border-neutral-800 pb-2 uppercase tracking-widest">// 05_ACADEMIC_PATHWAY</span>
                    <div className="not-prose p-6 border border-dashed border-neutral-800 hover:border-neutral-500 transition-colors group">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-purple-900/20 group-hover:bg-purple-900/40 transition-colors">
                                    <GraduationCap className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Academic Record</h3>
                                    <p className="text-sm text-neutral-500">B.Tech CSE @ HBTU Kanpur • CGPA 7.5 • 3 Certifications</p>
                                </div>
                            </div>
                            <Link href="/education" className="text-xs font-mono uppercase tracking-widest text-[var(--color-brand-teal)] hover:underline decoration-dashed">
                                VIEW_FULL →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 06 Open Dev Society */}
                <section className="mb-24">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6 block border-b border-neutral-800 pb-2 uppercase tracking-widest">// 06_COMMUNITY_INITIATIVE</span>
                    <h2 className="text-3xl font-serif mb-8">Open Dev Society.</h2>
                    <div className="grid md:grid-cols-2 gap-12 not-prose">
                        <div>
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Heart className="w-5 h-5 text-[var(--color-brand-teal)]" /> The Mission</h3>
                            <p className="text-sm text-neutral-400">A decentralized society of developers, designers, and writers building free, open-source public goods. No paywalls. No gatekeeping. Just code.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Globe className="w-5 h-5 text-[var(--color-brand-teal)]" /> The Impact</h3>
                            <p className="text-sm text-neutral-400">100+ active community members. 8,400+ GitHub stars. GitHub Trending status. Official partnerships with Siray.ai, Apertre 3.0, and JWOC.</p>
                        </div>
                    </div>
                    <div className="mt-8 p-4 font-mono text-sm text-center border-t border-b border-neutral-800 not-prose">
                        &quot;Your project. Your vision. Our community. Our support.&quot;
                    </div>
                </section>

                {/* 07 Achievements */}
                <section className="mb-24">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6 block border-b border-neutral-800 pb-2 uppercase tracking-widest">// 07_OPERATIONAL_MILESTONES</span>
                    <h2 className="text-3xl font-serif mb-8">Achievements.</h2>
                    <div className="space-y-4 not-prose">
                        {[
                            {
                                icon: Trophy,
                                title: "Global Top 10 Finalist",
                                desc: "Selected as a top 10 team worldwide in the Aspire CAYU Global AI Hackathon for \"AI for Impact\" among 500+ global teams.",
                                year: "2026",
                                color: "bg-amber-900/20 text-amber-500",
                            },
                            {
                                icon: Zap,
                                title: "GitHub Trending — OpenStock",
                                desc: "Featured as a Trending Repository globally on GitHub (Sept 2025); recognized by HelloGitHub as a top production-grade project.",
                                year: "2025",
                                color: "bg-teal-900/20 text-teal-400",
                            },
                            {
                                icon: Award,
                                title: "Harvard Aspire Leader",
                                desc: "Selected for the Harvard-affiliated Aspire Leaders Program (Top 2% acceptance); appointed Community Leader for Kanpur region, managing 150+ alumni network.",
                                year: "2024",
                                color: "bg-red-900/20 text-red-400",
                            },
                            {
                                icon: Target,
                                title: "6 Hackathons Competed",
                                desc: "Build with India (Unstop), AstroHack (Devpost), Aspire X Cayu AI, Reddit Daily Games, Gemini 3, The UI Strikes Back.",
                                year: "2024–2026",
                                color: "bg-blue-900/20 text-blue-400",
                            },
                            {
                                icon: BookOpen,
                                title: "Technical Writing & CP",
                                desc: "Author of \"Beyond the Algorithm\" (500+ subscribers). 200+ competitive programming problems across LeetCode (1478), CodeChef (1225), CodeStudio (1474).",
                                year: "Ongoing",
                                color: "bg-purple-900/20 text-purple-400",
                            },
                            {
                                icon: Shield,
                                title: "Certifications",
                                desc: "Nanodegree in Foundation of Generative AI (Udacity), Aspire Leader Program Certificate, Introduction to AI (AWS).",
                                year: "",
                                color: "bg-green-900/20 text-green-400",
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start p-5 border border-dashed border-neutral-800 hover:border-neutral-500 transition-colors group">
                                <div className={`p-2.5 ${item.color} rounded-none shrink-0`}>
                                    <item.icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                                        <h3 className="font-bold text-base">{item.title}</h3>
                                        {item.year && <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider shrink-0">{item.year}</span>}
                                    </div>
                                    <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 08 Fun Facts */}
                <section className="mb-24">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6 block border-b border-neutral-800 pb-2 uppercase tracking-widest">// 08_SYSTEM_METADATA</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center not-prose">
                        {[
                            { icon: Star, label: "GitHub Stars", value: "9,000+", color: "text-amber-500" },
                            { icon: GitBranch, label: "Commits", value: "Daily", color: "text-teal-400" },
                            { icon: MapPin, label: "Location", value: "Kanpur, IN", color: "text-rose-400" },
                            { icon: Activity, label: "Focus", value: "Impact", color: "text-blue-400" },
                        ].map((item, i) => (
                            <div key={i} className="p-6 border border-dashed border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60 hover:border-neutral-700 transition-all group overflow-hidden relative">
                                <div className="absolute -right-2 -top-2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                    <item.icon className="w-12 h-12" />
                                </div>
                                <item.icon className={`w-5 h-5 mx-auto mb-3 ${item.color} opacity-80`} />
                                <span className="text-xl font-bold block text-white mb-1">{item.value}</span>
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 09 CTA */}
                <section className="mb-24 py-16 border-y border-neutral-800 text-center not-prose relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                        <Globe className="w-full h-full scale-150" />
                    </div>
                    <h2 className="text-5xl font-serif mb-6 relative z-10">Let&apos;s Connect.</h2>
                    <p className="max-w-xl mx-auto text-neutral-400 mb-8">
                        Whether you want to collaborate, contribute to open source, or just say hello — I&apos;m always up for a conversation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="btn-tech">CONTACT_ME</Link>
                        <a href="https://github.com/ravixalgorithm" target="_blank" className="inline-flex items-center gap-2 px-6 py-2 border border-neutral-700 text-xs font-mono uppercase hover:bg-[var(--color-brand-teal)] hover:border-[var(--color-brand-teal)] hover:text-white transition-colors">GITHUB</a>
                        <a href="https://linkedin.com/in/ravixalgorithm" target="_blank" className="inline-flex items-center gap-2 px-6 py-2 border border-neutral-700 text-xs font-mono uppercase hover:bg-[var(--color-brand-teal)] hover:border-[var(--color-brand-teal)] hover:text-white transition-colors">LINKEDIN</a>
                        <a href="https://x.com/ravixalgorithm" target="_blank" className="inline-flex items-center gap-2 px-6 py-2 border border-neutral-700 text-xs font-mono uppercase hover:bg-[var(--color-brand-teal)] hover:border-[var(--color-brand-teal)] hover:text-white transition-colors">X</a>
                        <a href="mailto:ravixalgorithm@gmail.com" className="inline-flex items-center gap-2 px-6 py-2 border border-neutral-700 text-xs font-mono uppercase hover:bg-[var(--color-brand-teal)] hover:border-[var(--color-brand-teal)] hover:text-white transition-colors">EMAIL</a>
                    </div>
                </section>

            </div>

            {/* Footer */}
            <footer className="mt-20 pt-10 border-t border-dashed border-neutral-800 text-center font-mono text-xs text-neutral-500">
                <p className="mb-4">RAVI_PRATAP_SINGH // IDENTITY_PROTOCOL_V1</p>
                <p>&quot;Build in the open. Ship with passion. Impact with purpose.&quot;</p>
            </footer>
        </div>
    );
}
