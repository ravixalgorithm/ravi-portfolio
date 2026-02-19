"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modifier, setModifier] = useState("⌘");

    useEffect(() => {
        if (typeof window !== 'undefined' && navigator.userAgent.includes('Win')) {
            setModifier("Ctrl");
        }
    }, []);

    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-neutral-800/50">
            <div className="flex items-center justify-between px-6 md:px-8 py-4">
                {/* Brand / Logo */}
                <div className="flex items-center gap-3">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-cyan)] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-cyan)]"></span>
                    </div>
                    <Link href="/" className="text-sm md:text-md font-bold tracking-widest uppercase font-mono text-foreground hover:text-[var(--color-brand-cyan)] transition-colors group">
                        <span className="text-[var(--color-brand-cyan)] opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 duration-300">_</span>Ravi Pratap Singh
                    </Link>
                </div>

                {/* Desktop Extras (Status + CTA) */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Command Palette Trigger */}
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
                        className="group flex items-center gap-2 px-3 py-2 bg-neutral-900/80 hover:bg-neutral-800/80 backdrop-blur border border-neutral-800 rounded-lg transition-all cursor-pointer"
                    >
                        <span className="flex items-center justify-center min-w-[1.25rem] px-1 h-5 bg-neutral-800 group-hover:bg-neutral-700 rounded text-[10px] text-neutral-400 group-hover:text-neutral-300 font-mono transition-colors">{modifier}</span>
                        <span className="text-[10px] text-neutral-500 font-mono">+</span>
                        <span className="flex items-center justify-center w-5 h-5 bg-neutral-800 group-hover:bg-neutral-700 rounded text-[10px] text-neutral-400 group-hover:text-neutral-300 font-mono transition-colors">K</span>
                        <span className="text-[10px] text-neutral-500 group-hover:text-neutral-400 font-mono ml-1 uppercase tracking-wider transition-colors">Command Menu</span>
                    </button>

                    <div className="h-4 w-px bg-neutral-800" />

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="
                            flex items-center gap-2 px-4 py-1.5 
                            bg-foreground text-background 
                            text-xs font-bold font-mono uppercase tracking-wide
                            hover:bg-[var(--color-brand-teal)] hover:text-white 
                            transition-all duration-300
                        "
                    >
                        Let&apos;s Talk <ArrowUpRight className="w-3 h-3" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="xl:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-foreground cursor-pointer hover:text-[var(--color-brand-cyan)] transition-colors p-1">
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 w-full bg-background border-b border-neutral-800/50 p-8 flex flex-col gap-6 z-40 shadow-2xl"
                    >
                        <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-serif italic text-foreground hover:text-[var(--color-brand-violet)] transition-colors">About</Link>
                        <Link href="/projects" onClick={() => setIsOpen(false)} className="text-xl font-serif italic text-foreground hover:text-[var(--color-brand-violet)] transition-colors">Projects</Link>
                        <Link href="/experience" onClick={() => setIsOpen(false)} className="text-xl font-serif italic text-foreground hover:text-[var(--color-brand-violet)] transition-colors">Experience</Link>
                        <Link href="/education" onClick={() => setIsOpen(false)} className="text-xl font-serif italic text-foreground hover:text-[var(--color-brand-violet)] transition-colors">Education</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-serif italic text-foreground hover:text-[var(--color-brand-violet)] transition-colors">Contact</Link>

                        <div className="h-px w-full bg-neutral-800" />

                        {/* Mobile Status */}
                        <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                <span>AVAILABLE</span>
                            </div>
                            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-foreground underline decoration-dashed uppercase">
                                Let&apos;s Talk
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
