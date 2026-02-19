"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import { GlitchText } from "@/components/GlitchText";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">

            {/* Background Noise/Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="text-center z-10 max-w-lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 flex justify-center"
                >
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20 animate-pulse">
                        <AlertTriangle className="w-8 h-8 text-red-500" />
                    </div>
                </motion.div>

                <h1 className="text-8xl font-black font-mono mb-2 tracking-tighter text-neutral-800 select-none">
                    404
                </h1>

                <h2 className="text-2xl font-bold font-mono mb-6 text-red-500 uppercase tracking-widest">
                    <GlitchText text="SYSTEM MALFUNCTION" />
                </h2>

                <p className="text-neutral-400 font-mono text-sm mb-10 leading-relaxed border-l-2 border-red-900/50 pl-4 text-left">
                    &gt; ERROR: DESTINATION_NOT_FOUND<br />
                    &gt; DIAGNOSTIC: The requested coordinates do not map to a known sector.<br />
                    &gt; ACTION: Return to base immediately.
                </p>

                <div className="flex gap-4 justify-center">
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-6 py-3 bg-neutral-900 border border-neutral-700 hover:border-[var(--color-brand-teal)] hover:text-[var(--color-brand-teal)] transition-all rounded-sm font-mono text-xs uppercase tracking-widest group"
                    >
                        <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Return to Mission
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-6 py-3 border border-transparent hover:bg-neutral-900/50 transition-all rounded-sm font-mono text-xs uppercase tracking-widest text-neutral-500 hover:text-white"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                </div>
            </div>

            {/* Scanline */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20" />
        </div>
    );
}
