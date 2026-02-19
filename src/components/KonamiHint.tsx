"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Lock } from "lucide-react";

export const KonamiHint = () => {
    const [showHint, setShowHint] = useState(false);

    return (
        <div className="relative group">
            <button
                onClick={() => setShowHint(!showHint)}
                className="w-full flex items-center justify-between p-2 border border-dashed border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 hover:border-red-900/50 rounded-sm transition-all text-left"
            >
                <div className="flex items-center gap-2">
                    <Lock className="w-3 h-3 text-neutral-600 group-hover:text-red-500 transition-colors" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 group-hover:text-red-400 transition-colors">
                        Protocol 86
                    </span>
                </div>
                <div className="text-[9px] font-mono text-neutral-700 group-hover:text-red-900/50">
                    RESTRICTED
                </div>
            </button>

            <AnimatePresence>
                {showHint && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-12 left-0 w-full p-2 bg-black border border-red-900/30 rounded-sm z-50 shadow-xl"
                    >
                        <div className="flex items-start gap-2 mb-1">
                            <Terminal className="w-3 h-3 text-red-500 mt-0.5" />
                            <span className="text-[9px] font-mono text-red-400 leading-tight">
                                NEVER TRY.
                            </span>
                        </div>
                        <div className="text-[10px] font-mono text-neutral-400 flex flex-wrap gap-1 justify-center mt-2 border-t border-red-900/20 pt-2">
                            <span>↑</span><span>↑</span>
                            <span>↓</span><span>↓</span>
                            <span className="text-red-500 font-bold">B</span>
                            <span className="text-red-500 font-bold">A</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
