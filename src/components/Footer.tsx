import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="border-t border-dashed border-neutral-800">
            {/* Main Footer Grid */}
            <div className="px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
                {/* Brand */}
                <div className="col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 bg-[var(--color-brand-teal)] rounded-full" />
                        <span className="font-mono text-md font-bold tracking-wider text-foreground">RAVI PRATAP SINGH</span>
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                        Developer. Designer. Writer. Creator. Building impactful digital experiences, one commit at a time.
                    </p>
                    <a
                        href="mailto:ravixalgorithm@gmail.com"
                        className="font-mono text-xs text-neutral-500 hover:text-white transition-colors"
                    >
                        ravixalgorithm@gmail.com
                    </a>
                </div>

                {/* Navigate */}
                <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">// Navigate</h4>
                    <ul className="space-y-1.5">
                        <li><Link href="/" className="text-sm text-neutral-400 hover:text-[var(--color-brand-teal)] hover:underline transition-colors">Home</Link></li>
                        <li><Link href="/about" className="text-sm text-neutral-400 hover:text-[var(--color-brand-teal)] hover:underline transition-colors">About</Link></li>
                        <li><Link href="/projects" className="text-sm text-neutral-400 hover:text-[var(--color-brand-teal)] hover:underline transition-colors">Projects</Link></li>
                        <li><Link href="/experience" className="text-sm text-neutral-400 hover:text-[var(--color-brand-teal)] hover:underline transition-colors">Experience</Link></li>
                        <li><Link href="/education" className="text-sm text-neutral-400 hover:text-[var(--color-brand-teal)] hover:underline transition-colors">Education</Link></li>
                        <li><Link href="/contact" className="text-sm text-neutral-400 hover:text-[var(--color-brand-teal)] hover:underline transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Connect */}
                <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">// Connect</h4>
                    <ul className="space-y-1.5">
                        <li><a href="https://github.com/ravixalgorithm" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-[var(--color-brand-teal)] hover:underline transition-colors">GitHub ↗</a></li>
                        <li><a href="https://linkedin.com/in/ravixalgorithm" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-[var(--color-brand-teal)] hover:underline transition-colors">LinkedIn ↗</a></li>
                        <li><a href="mailto:ravixalgorithm@gmail.com" className="text-sm text-neutral-400 hover:text-[var(--color-brand-teal)] hover:underline transition-colors">Email</a></li>
                    </ul>
                </div>
            </div>

            {/* Big 3D Text */}
            <div className="px-8 py-10 border-t border-dashed border-neutral-800 overflow-hidden">
                <h2
                    className="text-4xl md:text-5xl lg:text-7xl uppercase text-center leading-none tracking-tighter select-none text-neutral-400"
                    style={{
                        fontFamily: "var(--font-rock3d)",
                    }}
                >
                    RAVI PRATAP SINGH
                </h2>
            </div>

            {/* Bottom Bar */}
            <div className="px-8 py-4 border-t border-dashed border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-2">
                <span className="font-mono text-xs text-neutral-500">
                    © {new Date().getFullYear()} RAVI_PRATAP_SINGH — ALL_RIGHTS_RESERVED
                </span>
                <span className="font-mono text-xs text-neutral-500">
                    BUILT_WITH [ NEXT.JS + PASSION ]
                </span>
            </div>
        </footer>
    );
};
