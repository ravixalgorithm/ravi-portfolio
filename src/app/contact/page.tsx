"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Github, Sparkles, Send, ArrowUpRight, Copy, Check, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("ravixalgorithm@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="px-6 py-20 max-w-5xl mx-auto">

                {/* Header */}
                <header className="mb-20">
                    <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-8">
                        <ArrowLeft className="w-3 h-3" /> Return_Index
                    </Link>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-[var(--color-brand-rose)] rounded-full animate-pulse" />
                        <span className="font-mono text-sm tracking-widest uppercase text-neutral-500">
                            Transmission_Open // V1.0
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif italic mb-8 leading-[0.9] tracking-tighter">
                        Get in <span className="not-italic font-bold">Touch.</span>
                    </h1>
                    <p className="font-mono text-xs text-neutral-500 max-w-md">
                        [CHANNEL_STATUS: OPEN] <br />
                        Whether it&apos;s a project idea, collaboration, job opportunity, or just a friendly hello — I&apos;d love to hear from you.
                    </p>
                </header>

                {/* Contact Methods */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <Send className="w-4 h-4 text-neutral-400" />
                        <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              // AVAILABLE_CHANNELS
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800">
                        {/* Email Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-background p-8 hover:bg-neutral-900 transition-all group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-neutral-900 group-hover:bg-[var(--color-brand-teal)] group-hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 bg-green-900/20 border border-green-800 text-green-400">
                                    PREFERRED
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-sm text-neutral-400 mb-4">Best for project inquiries, collaborations, and opportunities.</p>
                            <div className="flex items-center gap-3">
                                <a
                                    href="mailto:ravixalgorithm@gmail.com"
                                    className="font-mono text-xs text-[var(--color-brand-teal)] hover:text-[var(--color-brand-rose)] transition-colors"
                                >
                                    ravixalgorithm@gmail.com
                                </a>
                                <button
                                    onClick={copyEmail}
                                    className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                                    title="Copy email"
                                >
                                    {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                                </button>
                            </div>
                        </motion.div>

                        {/* GitHub Card */}
                        <motion.a
                            href="https://github.com/ravixalgorithm"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="bg-background p-8 hover:bg-neutral-900 transition-all group block"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-neutral-900 group-hover:bg-white group-hover:text-black transition-colors">
                                    <Github className="w-6 h-6" />
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-brand-teal)] transition-colors">GitHub</h3>
                            <p className="text-sm text-neutral-400 mb-4">Check out my open-source work and contributions.</p>
                            <span className="font-mono text-xs text-neutral-500">@ravixalgorithm</span>
                        </motion.a>

                        {/* LinkedIn Card */}
                        <motion.a
                            href="https://linkedin.com/in/ravixalgorithm"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="bg-background p-8 hover:bg-neutral-900 transition-all group block"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-neutral-900 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-brand-teal)] transition-colors">LinkedIn</h3>
                            <p className="text-sm text-neutral-400 mb-4">Let&apos;s connect professionally and grow our network.</p>
                            <span className="font-mono text-xs text-neutral-500">in/ravixalgorithm</span>
                        </motion.a>

                        {/* X / Twitter Card */}
                        <motion.a
                            href="https://x.com/ravixalgorithm"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="bg-background p-8 hover:bg-neutral-900 transition-all group block"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-neutral-900 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                    <Twitter className="w-6 h-6" />
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-brand-teal)] transition-colors">X / Twitter</h3>
                            <p className="text-sm text-neutral-400 mb-4">Follow me on X for the latest updates and insights.</p>
                            <span className="font-mono text-xs text-neutral-500">x.com/ravixalgorithm</span>
                        </motion.a>

                    </div>
                </section>

                {/* CTA — Work With Me */}
                <section className="border border-dashed border-neutral-800 p-8 md:p-12 mb-20">
                    <div className="text-center max-w-2xl mx-auto">
                        <Sparkles className="w-8 h-8 mx-auto mb-6 text-[var(--color-brand-teal)]" />
                        <h2 className="text-3xl md:text-4xl font-serif italic mb-4">
                            Let&apos;s Build <span className="not-italic font-bold">Something.</span>
                        </h2>
                        <p className="text-neutral-400 text-sm mb-8 max-w-md mx-auto">
                            I&apos;m always open to exciting projects, open-source collaborations,
                            and conversations with fellow builders. Don&apos;t hesitate to reach out.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <a
                                href="mailto:ravixalgorithm@gmail.com?subject=Let's Work Together"
                                className="btn-tech text-center"
                            >
                                INIT_COLLABORATION →
                            </a>
                            <a
                                href="https://github.com/ravixalgorithm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-[11px] uppercase tracking-widest border border-neutral-700 px-5 py-2.5 hover:bg-neutral-800 hover:text-white hover:border-neutral-500 transition-colors text-center"
                            >
                                VIEW_GITHUB →
                            </a>
                        </div>
                    </div>
                </section>

                {/* Response Time */}
                <section className="text-center mb-20">
                    <div className="inline-block border border-dashed border-neutral-800 px-8 py-4 font-mono text-xs text-neutral-500">
                        <span className="text-[var(--color-brand-teal)] font-bold">EXPECTED_RESPONSE:</span> Within 24-48 hours
                        <span className="text-neutral-700 mx-2">|</span>
                        <span className="text-[var(--color-brand-teal)] font-bold">TIMEZONE:</span> IST (UTC+5:30)
                    </div>
                </section>

            </div>
        </div>
    );
}
