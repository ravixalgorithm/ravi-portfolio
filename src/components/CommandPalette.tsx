"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    Search,
    FileText,
    Briefcase,
    GraduationCap,
    Mail,
    Github,
    Linkedin,
    Terminal,
    AlertTriangle,
    Link,
    Copy
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CommandPalette() {
    const [open, setOpen] = React.useState(false);
    const [modifier, setModifier] = React.useState("⌘");
    const router = useRouter();

    React.useEffect(() => {
        if (typeof window !== 'undefined' && navigator.userAgent.includes('Win')) {
            setModifier("Ctrl");
        }

        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        const openPalette = () => setOpen(true);

        document.addEventListener("keydown", down);
        document.addEventListener("open-command-palette", openPalette as EventListener);
        return () => {
            document.removeEventListener("keydown", down);
            document.removeEventListener("open-command-palette", openPalette as EventListener);
        };
    }, []);

    React.useEffect(() => {
        if (!open) return;

        const down = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [open]);

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false);
        command();
    }, []);

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="command-palette-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setOpen(false);
                        }}
                    >
                        <motion.div
                            key="command-palette-modal"
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            className="w-full max-w-lg bg-[#0a0a0a] border border-neutral-800 rounded-xl shadow-2xl overflow-hidden"

                            onClick={(e) => e.stopPropagation()}
                        >
                            <Command className="w-full" label="Command Menu">
                                <div className="flex items-center border-b border-neutral-800 px-4 py-3">
                                    <Terminal className="w-4 h-4 text-neutral-500 mr-3" />
                                    <Command.Input
                                        autoFocus
                                        placeholder="Type a command or search..."
                                        className="flex-1 bg-transparent outline-none text-sm text-white placeholder-neutral-500 font-mono"
                                    />
                                    <div className="text-[10px] bg-neutral-900 border border-neutral-800 px-1.5 py-0.5 rounded text-neutral-500 font-mono">ESC</div>
                                </div>

                                <Command.List className="max-h-[500px] overflow-y-auto p-2 scrollbar-hide">
                                    <Command.Empty className="py-6 text-center text-sm text-neutral-500 font-mono">
                                        No results found.
                                    </Command.Empty>

                                    <Command.Group heading="Pages" className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-2 px-2 mt-2">
                                        <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                                            <User className="w-4 h-4 mr-2" />
                                            Home
                                        </CommandItem>
                                        <CommandItem onSelect={() => runCommand(() => router.push("/about"))}>
                                            <FileText className="w-4 h-4 mr-2" />
                                            About
                                        </CommandItem>
                                        <CommandItem onSelect={() => runCommand(() => router.push("/projects"))}>
                                            <Terminal className="w-4 h-4 mr-2" />
                                            Projects
                                        </CommandItem>
                                        <CommandItem onSelect={() => runCommand(() => router.push("/experience"))}>
                                            <Briefcase className="w-4 h-4 mr-2" />
                                            Experience
                                        </CommandItem>
                                        <CommandItem onSelect={() => runCommand(() => router.push("/education"))}>
                                            <GraduationCap className="w-4 h-4 mr-2" />
                                            Education
                                        </CommandItem>
                                        <CommandItem onSelect={() => runCommand(() => router.push("/contact"))}>
                                            <Mail className="w-4 h-4 mr-2" />
                                            Contact
                                        </CommandItem>
                                    </Command.Group>

                                    <div className="my-2 h-px bg-neutral-800 mx-2" />

                                    <Command.Group heading="Socials" className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-2 px-2">
                                        <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/ravixalgorithm", "_blank"))}>
                                            <Github className="w-4 h-4 mr-2" />
                                            GitHub
                                        </CommandItem>
                                        <CommandItem onSelect={() => runCommand(() => window.open("https://linkedin.com/in/ravixalgorithm", "_blank"))}>
                                            <Linkedin className="w-4 h-4 mr-2" />
                                            LinkedIn
                                        </CommandItem>
                                    </Command.Group>

                                    <div className="my-2 h-px bg-neutral-800 mx-2" />

                                    <Command.Group heading="Utility" className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-2 px-2">
                                        <CommandItem onSelect={() => runCommand(() => {
                                            navigator.clipboard.writeText(window.location.href);
                                            window.dispatchEvent(new CustomEvent('system-alert', { detail: { message: "URL copied to clipboard.", type: 'success' } }));
                                        })}>
                                            <Link className="w-4 h-4 mr-2" />
                                            Copy Current URL
                                        </CommandItem>
                                        <CommandItem onSelect={() => runCommand(() => {
                                            navigator.clipboard.writeText("contact@ravipratap.com");
                                            window.dispatchEvent(new CustomEvent('system-alert', { detail: { message: "Email copied to clipboard.", type: 'success' } }));
                                        })}>
                                            <Copy className="w-4 h-4 mr-2" />
                                            Copy Email Address
                                        </CommandItem>
                                    </Command.Group>

                                    <div className="my-2 h-px bg-neutral-800 mx-2" />

                                    <Command.Group heading="System" className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-2 px-2">
                                        <CommandItem onSelect={() => runCommand(() => window.location.reload())}>
                                            <Settings className="w-4 h-4 mr-2" />
                                            Reload System
                                        </CommandItem>
                                    </Command.Group>

                                    <div className="my-2 h-px bg-neutral-800 mx-2" />

                                    <Command.Group heading="Classified / Intel" className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-2 px-2">
                                        <CommandItem onSelect={() => runCommand(() => window.dispatchEvent(new CustomEvent('system-alert', { detail: { message: "HEAD detached. Maintaining independence.", type: 'warning' } })))}>
                                            <Terminal className="w-4 h-4 mr-2 text-neutral-500" />
                                            git status --relationship
                                        </CommandItem>
                                        <CommandItem onSelect={() => runCommand(() => window.dispatchEvent(new CustomEvent('system-alert', { detail: { message: "File not found. Did you mean 'github'?", type: 'info' } })))}>
                                            <Search className="w-4 h-4 mr-2 text-neutral-500" />
                                            cat ./social-life
                                        </CommandItem>
                                        <CommandItem onSelect={() => runCommand(() => window.dispatchEvent(new CustomEvent('system-alert', { detail: { message: "Permission denied. Coffee levels critical.", type: 'warning' } })))}>
                                            <AlertTriangle className="w-4 h-4 mr-2 text-neutral-500" />
                                            sudo sleep
                                        </CommandItem>
                                        <CommandItem onSelect={() => runCommand(() => window.dispatchEvent(new CustomEvent('system-alert', { detail: { message: "A biological machine turning caffeine into code.", type: 'success' } })))}>
                                            <User className="w-4 h-4 mr-2 text-neutral-500" />
                                            whoami
                                        </CommandItem>
                                        <CommandItem onSelect={() => runCommand(() => window.dispatchEvent(new Event('self-destruct')))}>
                                            <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
                                            <span className="text-red-500">sudo self-destruct</span>
                                        </CommandItem>
                                    </Command.Group>

                                </Command.List>


                                <div className="border-t border-neutral-800 px-4 py-2 flex justify-between items-center bg-neutral-900/50">
                                    <span className="text-[10px] text-neutral-500 font-mono">Run commands</span>
                                    <span className="text-[10px] text-neutral-600 font-mono">v1.0.0</span>
                                </div>
                            </Command>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


        </>
    );
}

function CommandItem({ children, onSelect }: { children: React.ReactNode; onSelect: () => void }) {
    return (
        <Command.Item
            onSelect={onSelect}
            className="flex items-center px-3 py-2 text-sm text-neutral-400 rounded-md cursor-pointer hover:bg-neutral-800 hover:text-white aria-selected:bg-neutral-800 aria-selected:text-white transition-colors"
        >
            {children}
        </Command.Item>
    );
}
