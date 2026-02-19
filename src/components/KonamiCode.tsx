"use client";

import { useEffect, useState } from "react";
import { MatrixRain } from "./MatrixRain";
import { AnimatePresence, motion } from "framer-motion";

// Defined outside to be stable
const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "b", "a"
];

export const KonamiCode = () => {
    const [activated, setActivated] = useState(false);
    const [input, setInput] = useState<string[]>([]);

    // Handle Input
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setInput((prev) => {
                const newInput = [...prev, e.key];
                if (newInput.length > konamiCode.length) {
                    newInput.shift();
                }
                return newInput;
            });
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Handle Code Activation
    useEffect(() => {
        if (input.join(",") === konamiCode.join(",")) {
            setActivated((prev) => !prev);

            // Dispatch event in a timeout to ensure it doesn't conflict with current render cycle
            setTimeout(() => {
                window.dispatchEvent(new CustomEvent('system-alert', {
                    detail: {
                        message: !activated ? "GOD MODE ACTIVATE. Welcome to the Matrix." : "God Mode Deactivated.",
                        type: 'success'
                    }
                }));
            }, 0);

            setInput([]);
        }
    }, [input, activated]);

    // Handle Timer
    const [timeLeft, setTimeLeft] = useState(10);
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (activated) {
            setTimeLeft(10);
            interval = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        setActivated(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [activated]);

    return (
        <AnimatePresence>
            {activated && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <MatrixRain />
                    </motion.div>

                    {/* Countdown Timer */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-24 right-6 z-[60] font-mono text-xs md:text-sm text-green-500 bg-black/80 border border-green-500/30 px-4 py-2 rounded shadow-[0_0_15px_rgba(34,197,94,0.2)] backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span>MATRIX SIMULATION ACTIVE</span>
                        </div>
                        <div className="mt-1 text-right text-xs text-green-400/70">
                            AUTO-DISCONNECT IN: <span className="text-white font-bold">{timeLeft.toString().padStart(2, '0')}s</span>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
