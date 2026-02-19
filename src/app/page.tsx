"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, PenTool, Palette, Lightbulb, Package, Terminal, Zap, Users, Heart, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { experiences, skills } from "@/data/experience";
import { education } from "@/data/education";
import { TechIcon } from "@/components/TechIcon";
import { GlitchText } from "@/components/GlitchText";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-8 pt-32 pb-20 border-b border-dashed border-neutral-800 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-900/50 rounded-full blur-3xl -z-10 opacity-50" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-[var(--color-brand-teal)] rounded-full animate-pulse-slow"></span>
              <span className="text-mono">PORTFOLIO // V1.0 — HELLO_WORLD</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif italic mb-8 leading-[0.9] tracking-tighter">
              <GlitchText text="Ravi Pratap" /> <br />
              <GlitchText text="Singh." className="not-italic font-bold" />
            </h1>

            <p className="text-lg md:text-xl font-sans text-neutral-400 max-w-lg mb-4 leading-relaxed">
              Developer. Designer. Writer. Creator.
            </p>

            <p className="text-base font-sans text-neutral-500 max-w-lg mb-10 leading-relaxed">
              I build <strong className="text-white">impactful digital experiences</strong> and believe in the power of
              open source. Founder of{" "}
              <a href="https://opendevsociety.vercel.app" target="_blank" className="text-[var(--color-brand-teal)] underline decoration-dashed hover:decoration-solid">
                Open Dev Society
              </a>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/projects" className="btn-tech group text-center">
                <span className="flex items-center justify-center gap-2">
                  [ VIEW_PROJECTS ] <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/about" className="flex items-center justify-center gap-2 px-6 py-2 font-mono text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                [ READ_MY_STORY ]
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            {/* Glitch/Tech Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Decorative Borders */}
              <div className="absolute inset-0 border-2 border-neutral-800 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute inset-0 border-2 border-neutral-800 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />

              {/* Image Wrapper */}
              <div className="absolute inset-2 bg-neutral-900 rounded-xl overflow-hidden border border-neutral-700">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 pointer-events-none" />

                {/* The Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ravi.jpg"
                  alt="Ravi Pratap Singh"
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
                />

                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-neutral-950 border border-neutral-700 p-2 rounded shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400">ONLINE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roles / What I Do */}
      <section className="border-b border-dashed border-neutral-800 bg-neutral-900/30">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-dashed divide-neutral-800">
          {[
            { icon: Code2, title: "Developer", desc: "Clean, performant code. Full-stack web applications with modern tech.", label: "01_CODE" },
            { icon: Palette, title: "Designer", desc: "Thoughtful UI/UX. Design systems that feel alive and premium.", label: "02_DESIGN" },
            { icon: PenTool, title: "Writer", desc: "Technical writing, documentation, and content that educates.", label: "03_WRITE" },
            { icon: Lightbulb, title: "Creator", desc: "Ideas into reality. From concepts to shipped products.", label: "04_CREATE" },
          ].map((item) => (
            <div key={item.label} className="p-8 hover:bg-neutral-900 transition-colors group">
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-5 h-5 text-[var(--color-brand-teal)]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">{item.label}</h3>
              </div>
              <h4 className="text-xl font-serif mb-3 font-bold">{item.title}.</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="border-b border-dashed border-neutral-800">
        <div className="p-8 border-b border-dashed border-neutral-800 bg-neutral-900/30 flex justify-between items-center">
          <h2 className="text-mono text-xs uppercase tracking-widest text-neutral-500">
            // FEATURED_PROJECTS [ACTIVE_BUILDS]
          </h2>
          <Link href="/projects" className="text-xs font-mono underline decoration-dashed hover:decoration-solid">
            VIEW_ALL_PROJECTS
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dashed divide-neutral-800">
          {projects.filter(p => p.featured).slice(0, 4).map((project) => (
            <div key={project.name} className="p-6 sm:p-8 hover:bg-neutral-900/50 transition-colors border-b border-dashed border-neutral-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[var(--color-brand-teal)]" />
                  <h3 className="font-bold font-mono uppercase tracking-wider">{project.name}</h3>
                </div>
                <span className="text-[10px] font-mono border border-neutral-700 px-2 py-1 uppercase">
                  {project.language}
                </span>
              </div>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed h-16 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-y-4">
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-neutral-500">
                  {project.tags.map((tag) => (
                    <span key={tag} className="uppercase">#{tag.replace(/\s+/g, "_")}</span>
                  ))}
                </div>
                <a href={project.url} target="_blank" className="text-xs font-mono underline decoration-dashed hover:decoration-[var(--color-brand-rose)] hover:text-[var(--color-brand-rose)] hover:decoration-solid shrink-0">
                  VIEW_REPO
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-8 border-b border-dashed border-neutral-800 bg-neutral-950/50">
        <div className="text-center mb-16">
          <h2 className="text-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
            // SYSTEM_CAPABILITIES [TECH_STACK]
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif italic mb-6">Technical <span className="not-italic font-bold">Arsenal.</span></h3>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
            A curated set of technologies and tools I leverage to architect scalable, high-performance digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-neutral-900/40 border border-neutral-800 p-8 hover:border-neutral-700 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[var(--color-brand-teal)] rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                <h4 className="font-mono text-sm uppercase tracking-widest text-neutral-300">{skill.category}</h4>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="
                      inline-flex items-center gap-2
                      text-[11px] font-mono 
                      px-3 py-1.5 
                      bg-neutral-950/50 
                      border border-neutral-800 
                      text-neutral-400
                      hover:text-[var(--color-brand-teal)] hover:border-[var(--color-brand-teal)] hover:bg-[var(--color-brand-teal)]/10
                      transition-all duration-300
                      cursor-default
                      group/item
                    "
                  >
                    <TechIcon name={item} className="w-3.5 h-3.5 text-neutral-500 group-hover/item:text-[var(--color-brand-teal)] transition-colors" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-8 border-b border-dashed border-neutral-800 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic">
              Experience <span className="not-italic font-bold">Log.</span>
            </h2>
            <Link href="/experience" className="text-xs font-mono underline decoration-dashed hover:decoration-solid">
              VIEW_FULL_LOG
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            {/* Center Line (Hidden on mobile) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-dashed border-l border-neutral-800 hidden md:block" />

            {experiences.slice(0, 4).map((exp, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12 md:col-start-2"}`}>
                {/* Node Dot */}
                <div className={`absolute top-2 w-3 h-3 bg-neutral-800 border border-neutral-600 rounded-full hidden md:block
                      ${index % 2 === 0 ? "-right-[6.5px]" : "-left-[6.5px]"}
                   `} />

                <span className="font-mono text-[10px] text-[var(--color-brand-teal)] mb-2 block">{exp.date}</span>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <p className="font-mono text-xs text-neutral-500 mb-3">{exp.company}</p>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  {exp.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-mono px-2 py-1 bg-neutral-800/50 border border-neutral-800 text-neutral-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-8 border-b border-dashed border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
                  // ACADEMIC_RECORD [EDUCATION]
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif italic">
              Learning <span className="not-italic font-bold">Path.</span>
            </h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="group relative pl-8 border-l border-dashed border-neutral-800 hover:border-[var(--color-brand-teal)] transition-colors duration-300">
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-neutral-900 border border-neutral-700 group-hover:bg-[var(--color-brand-teal)] group-hover:border-[var(--color-brand-teal)] transition-colors duration-300 rotate-45" />

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h4 className="text-lg font-bold">{edu.institution}</h4>
                  <span className="font-mono text-xs text-neutral-500">{edu.year}</span>
                </div>
                <p className="text-sm text-neutral-400 font-mono mb-2">{edu.degree}</p>
                <p className="text-xs text-[var(--color-brand-teal)] font-mono">{edu.score}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/education" className="btn-tech inline-flex">
              [ VIEW_FULL_ACADEMICS ]
            </Link>
          </div>
        </div>
      </section>

      {/* Open Source / Community */}
      <section className="p-8 py-20 border-b border-dashed border-neutral-800 bg-neutral-900/30">
        <div className="max-w-2xl mx-auto text-center">
          <Users className="w-8 h-8 mx-auto mb-4" />
          <h2 className="heading-serif text-3xl mb-4">Open Source Believer.</h2>
          <p className="font-sans text-sm text-neutral-400 mb-8 max-w-md mx-auto">
            Founded <span className="font-bold">Open Dev Society</span> — a community of 100+ active developers
            building free, open-source public goods. <span className="font-bold">9,000+ GitHub stars</span> and <span className="font-bold">GitHub Trending</span> status.
          </p>
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-4 md:gap-8 text-mono text-xs border border-dashed border-neutral-800 bg-background p-6 md:p-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-center md:text-left">
              <span className="text-neutral-500 text-[10px] tracking-tight">MEMBERS:</span>
              <span className="text-white font-bold">100+</span>
            </div>
            <div className="hidden md:block text-neutral-800 self-center">|</div>
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-center md:text-left">
              <span className="text-neutral-500 text-[10px] tracking-tight">STARS:</span>
              <span className="text-white font-bold">9,000+</span>
            </div>
            <div className="hidden md:block text-neutral-800 self-center">|</div>
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-center md:text-left">
              <span className="text-neutral-500 text-[10px] tracking-tight">PROJECTS:</span>
              <span className="text-white font-bold">5+</span>
            </div>
            <div className="hidden md:block text-neutral-800 self-center">|</div>
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-center md:text-left">
              <span className="text-neutral-500 text-[10px] tracking-tight">IMPACT:</span>
              <span className="text-green-500 font-bold uppercase">Global</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 border-b border-dashed border-neutral-800">
        <div className="text-center mb-10">
          <h2 className="text-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
            // TRANSMISSION_OPEN [LET&apos;S_CONNECT]
          </h2>
          <h3 className="text-4xl font-serif italic mb-4">Let&apos;s Build <span className="not-italic font-bold">Together.</span></h3>
          <p className="text-neutral-400 text-sm max-w-md mx-auto">
            Have an idea? A project? Or just want to say hello? My inbox is always open.
          </p>
        </div>

        <div className="text-center flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link href="/contact" className="btn-tech text-center">
            INIT_CONTACT_PROTOCOL
          </Link>
          <a
            href="mailto:ravixalgorithm@gmail.com"
            className="font-mono text-[11px] uppercase tracking-widest border border-neutral-700 px-5 py-2.5 hover:bg-neutral-800 hover:text-white hover:border-neutral-500 transition-colors text-center"
          >
            SEND_EMAIL →
          </a>
        </div>
      </section>
    </>
  );
}
