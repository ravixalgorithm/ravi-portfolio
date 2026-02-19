"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowLeft, Package, ExternalLink, Globe, Calendar } from "lucide-react";

export default function ProjectsPage() {
    return (
        <div className="px-6 py-20">

            {/* Header */}
            <header className="mb-20">
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-3 h-3" /> Return_Index
                </Link>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-white rounded-full" />
                    <span className="font-mono text-sm tracking-widest uppercase">System_Modules // Full_Index</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.9] tracking-tighter mb-8">
                    Project <span className="not-italic font-bold">Index.</span>
                </h1>
                <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                    The complete catalog of things I&apos;ve built, designed, and shipped. Each one a reflection of craft and intention.
                </p>
            </header>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.name} className="p-6 sm:p-8 border border-dashed border-neutral-800 hover:bg-neutral-900/50 transition-colors group flex flex-col justify-between h-full">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <Package className="w-5 h-5 text-[var(--color-brand-teal)]" />
                                    <h3 className="font-bold font-mono uppercase tracking-wider text-sm">{project.name}</h3>
                                </div>
                                <span className="text-[10px] font-mono border border-neutral-700 px-2 py-1 uppercase">
                                    {project.language}
                                </span>
                            </div>
                            <p className="text-sm text-neutral-400 mb-6 leading-relaxed line-clamp-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 text-[10px] font-mono text-neutral-500 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="uppercase border border-neutral-800 px-2 py-0.5">#{tag.replace(/\s+/g, "_")}</span>
                                ))}
                            </div>

                            {project.date && (
                                <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500 mb-6">
                                    <Calendar className="w-3 h-3" />
                                    <span>{project.date}</span>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                            <span className="text-[10px] font-mono uppercase bg-neutral-900 px-2 py-1 rounded">
                                {project.language}
                            </span>
                            <div className="flex items-center gap-3">
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" className="flex items-center gap-1 text-xs font-mono text-[var(--color-brand-teal)] hover:text-[var(--color-brand-rose)]">
                                        <Globe className="w-3 h-3" /> LIVE
                                    </a>
                                )}
                                <a href={project.url} target="_blank" className="flex items-center gap-1 text-xs font-mono underline decoration-dashed hover:decoration-solid group-hover:text-[var(--color-brand-rose)]">
                                    REPO_ACCESS <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="mt-20 pt-10 border-t border-dashed border-neutral-800 text-center font-mono text-xs text-neutral-500">
                <p>END_OF_LIST // {projects.length}_MODULES_FOUND</p>
            </footer>
        </div>
    );
}
