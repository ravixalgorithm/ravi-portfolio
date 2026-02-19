"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SelfDestruct = () => {
    const [active, setActive] = useState(false);
    const [count, setCount] = useState(5);

    useEffect(() => {
        const handleDestruct = () => {
            setActive(true);
            setCount(5);

            const timer = setInterval(() => {
                setCount((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        setTimeout(() => {
                            window.location.reload();
                        }, 500);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        };

        window.addEventListener('self-destruct' as any, handleDestruct);
        return () => window.removeEventListener('self-destruct' as any, handleDestruct);
    }, []);

    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] bg-red-600 flex flex-col items-center justify-center overflow-hidden"
                >
                    <motion.div
                        animate={{
                            x: [-10, 10, -10, 10, 0],
                            y: [-5, 5, -5, 5, 0]
                        }}
                        transition={{ repeat: Infinity, duration: 0.1 }}
                        className="text-center"
                    >
                        <h1 className="text-9xl font-black text-black mb-4 font-mono">CRITICAL ERROR</h1>
                        <p className="text-4xl font-bold text-black font-mono uppercase tracking-widest">
                            System Self-Destruct Sequence Initiated
                        </p>
                        <div className="mt-12 text-[15rem] leading-none font-black text-black font-mono">
                            {count}
                        </div>
                    </motion.div>

                    {/* Strobe effect */}
                    <motion.div
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.2 }}
                        className="absolute inset-0 bg-black pointer-events-none mix-blend-overlay"
                    />

                    {/* Scanlines */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
