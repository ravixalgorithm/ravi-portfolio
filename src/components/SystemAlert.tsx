"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Terminal, CheckCircle } from "lucide-react";

export const SystemAlert = () => {
    const [alert, setAlert] = useState<{ message: string; type: 'info' | 'warning' | 'success' } | null>(null);

    useEffect(() => {
        const handleAlert = (e: CustomEvent) => {
            setAlert({ message: e.detail.message, type: e.detail.type || 'info' });

            // Auto dismiss
            setTimeout(() => {
                setAlert(null);
            }, 3000);
        };

        window.addEventListener('system-alert' as any, handleAlert as any);
        return () => window.removeEventListener('system-alert' as any, handleAlert as any);
    }, []);

    return (
        <AnimatePresence>
            {alert && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 20, x: "-50%" }}
                    className="fixed bottom-8 left-1/2 md:bottom-12 z-[100] flex items-center gap-3 px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg shadow-2xl min-w-[300px] max-w-[90vw]"
                >
                    <div className={`p-1.5 rounded-md ${alert.type === 'warning' ? 'bg-orange-500/10 text-orange-500' :
                            alert.type === 'success' ? 'bg-green-500/10 text-green-500' :
                                'bg-blue-500/10 text-blue-500'
                        }`}>
                        {alert.type === 'warning' ? <AlertTriangle className="w-4 h-4" /> :
                            alert.type === 'success' ? <CheckCircle className="w-4 h-4" /> :
                                <Terminal className="w-4 h-4" />}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">System Message</span>
                        <span className="text-sm font-mono text-neutral-200">{alert.message}</span>
                    </div>

                    {/* Scanline decoration */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] opacity-10" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
