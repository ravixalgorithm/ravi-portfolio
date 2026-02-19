"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, BookOpen, Award, MapPin, Calendar } from "lucide-react";

import { education, certifications } from "@/data/education";

export default function EducationPage() {
    return (
        <div className="px-6 py-20">

            {/* Header */}
            <header className="mb-20">
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-3 h-3" /> Return_Index
                </Link>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                    <span className="font-mono text-sm tracking-widest uppercase text-neutral-500">Academic_Record // V1.0</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif italic mb-8 leading-[0.9] tracking-tighter">
                    Education <span className="not-italic font-bold">Log.</span>
                </h1>
                <p className="font-mono text-xs text-neutral-500 max-w-md">
                    [RECORD_STATUS: ACTIVE] <br />
                    Academic journey, certifications, and continuous learning milestones.
                </p>
            </header>

            {/* Education Timeline */}
            <section className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <GraduationCap className="w-4 h-4 text-purple-500" />
                    <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                        // ACADEMIC_TIMELINE [{education.length} INSTITUTIONS]
                    </h2>
                </div>

                <div className="space-y-px bg-neutral-800 border border-neutral-800">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.institution}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-background p-8"
                        >
                            {/* Badge + Year */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border text-[10px] font-mono uppercase tracking-widest bg-purple-900/20 border-purple-800 text-purple-400">
                                    <GraduationCap className="w-3 h-3" />
                                    <span>Academic</span>
                                </div>
                                <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400">
                                    <Calendar className="w-3 h-3" />
                                    <span>{edu.year}</span>
                                </div>
                            </div>

                            {/* Institution */}
                            <h3 className="text-xl font-bold mb-1 leading-tight">{edu.institution}</h3>
                            <p className="text-sm text-neutral-500 mb-3 font-mono">
                                {edu.degree}
                            </p>

                            {/* Location */}
                            {edu.location && (
                                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono mb-4">
                                    <MapPin className="w-3 h-3" />
                                    <span>{edu.location}</span>
                                </div>
                            )}

                            {/* Score Badge */}
                            <div className="flex items-center gap-3 mb-5">
                                <span className={`text-sm font-mono font-bold px-3 py-1.5 border-2 ${edu.scoreType === "cgpa"
                                    ? "border-[var(--color-brand-teal)] text-[var(--color-brand-teal)] bg-teal-900/20"
                                    : "border-purple-500 text-purple-400 bg-purple-900/20"
                                    }`}>
                                    {edu.score}
                                </span>
                            </div>

                            {/* Highlights */}
                            <ul className="space-y-1.5">
                                {edu.highlights.map((highlight, hi) => (
                                    <li key={hi} className="flex gap-2 text-sm text-neutral-400 leading-relaxed">
                                        <span className="text-purple-400 mt-0.5 shrink-0">›</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Certifications */}
            <section className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <Award className="w-4 h-4 text-[var(--color-brand-teal)]" />
                    <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                        // CERTIFICATIONS [{certifications.length} VERIFIED]
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                            className="bg-background p-6 hover:bg-neutral-900 transition-colors"
                        >
                            <div className="p-2 bg-green-900/20 text-green-400 w-fit mb-4">
                                <Award className="w-4 h-4" />
                            </div>
                            <h3 className="font-bold text-sm mb-1">{cert.title}</h3>
                            <p className="text-xs text-neutral-400 font-mono uppercase tracking-wider">{cert.issuer}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Learning Philosophy */}
            <section className="mb-20 border border-dashed border-neutral-800 p-8 md:p-12 bg-neutral-900/30">
                <div className="max-w-lg mx-auto text-center">
                    <BookOpen className="w-8 h-8 mx-auto mb-4 text-purple-500" />
                    <p className="text-xl font-serif italic mb-2">&quot;Education is not preparation for life;</p>
                    <p className="text-xl font-serif italic mb-6">education is life itself.&quot;</p>
                    <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">— John Dewey</p>
                </div>
            </section>

            {/* CTA */}
            <div className="mt-20 pt-10 border-t border-dashed border-neutral-800 text-center">
                <p className="font-serif italic text-2xl mb-6">&quot;Never stop learning, never stop building.&quot;</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/experience" className="btn-tech inline-block">
                        [ VIEW_EXPERIENCE ]
                    </Link>
                    <Link href="/projects" className="font-mono text-[11px] uppercase tracking-widest border border-neutral-700 px-5 py-2.5 hover:bg-neutral-800 hover:text-white hover:border-neutral-500 transition-colors inline-block">
                        [ VIEW_PROJECTS ]
                    </Link>
                </div>
            </div>
        </div>
    );
}
