'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import { X, Lock, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'

/** Pull a short outcome metric from project copy when available */
function outcomeMetric(project: Project): string | null {
  const src = `${project.longDescription} ${project.description}`
  const patterns = [
    /(\d[\d,]+\+?\s*req(?:uests)?\/day[^.·]*)/i,
    /(\$0\s*API cost[^.·]*)/i,
    /(~\s*\$[\d,]+\s*\/?\s*year saved)/i,
    /(\d+-service microservices?)/i,
    /(\d+\s*Docker services)/i,
    /(SPOT Award)/i,
    /(zero manual re-upload)/i,
    /(MAS TRM-compliant)/i,
  ]
  for (const re of patterns) {
    const m = src.match(re)
    if (m) return m[1].trim()
  }
  return null
}

const categoryTint: Record<string, string> = {
  production: 'border-l-accent',
  compliance: 'border-l-accent-secondary',
  biometric: 'border-l-accent/70',
  personal: 'border-l-text-secondary',
}

function StatusBadge({ status }: { status: string }) {
  const live = status === 'production'
  return (
    <span
      className={`text-[10px] font-mono tracking-wide ${
        live ? 'text-accent' : 'text-text-secondary'
      }`}
    >
      {live ? '● LIVE' : '◎ DONE'}
    </span>
  )
}

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.97, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.97, opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className="bg-surface border border-border rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-text-secondary">{project.number}</span>
                  <StatusBadge status={project.status} />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                    {project.category}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold text-text-primary">{project.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-md hover:bg-accent-dim text-text-secondary hover:text-accent transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-text-secondary leading-relaxed mb-8">{project.longDescription}</p>

            <div className="mb-6">
              <p className="text-[10px] font-mono text-text-secondary mb-3 uppercase tracking-[0.15em]">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-accent-dim text-accent border border-border rounded text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent text-background rounded-md font-display font-semibold text-sm hover:bg-primary-hover transition-colors"
            >
              Inquire about this project
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function CaseStrip({
  project,
  index,
  onClick,
}: {
  project: Project
  index: number
  onClick: () => void
}) {
  const metric = outcomeMetric(project)

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
      onClick={onClick}
      className={`group w-full text-left border-y border-border border-l-2 ${categoryTint[project.category]} py-6 sm:py-7 px-4 sm:px-6 -mt-px hover:bg-accent-dim/50 transition-colors duration-200`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8">
        <span className="font-mono text-xs text-text-secondary shrink-0 pt-1 w-8">
          {project.number}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <StatusBadge status={project.status} />
          </div>

          {metric && (
            <p className="font-mono text-xs sm:text-sm text-accent mb-2 tracking-wide">{metric}</p>
          )}

          <p className="text-sm text-text-secondary leading-relaxed mb-4 max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2 py-0.5 font-mono text-text-secondary border border-border rounded"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 5 && (
                <span className="text-[11px] font-mono text-text-secondary">
                  +{project.techStack.length - 5}
                </span>
              )}
            </div>
            <span className="flex items-center gap-1.5 text-[11px] text-text-secondary/70 font-mono ml-auto">
              <Lock size={10} />
              Private · Inquire
            </span>
          </div>
        </div>

        <span className="hidden sm:flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0 pt-1">
          <ArrowUpRight size={20} />
        </span>
      </div>
    </motion.button>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary mb-8"
        >
          03 — Work
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 sm:mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            What I&apos;ve shipped
          </h2>
          <span className="text-text-secondary font-mono text-sm">
            {projects.length} systems
          </span>
        </motion.div>

        <div className="mb-4">
          {featured.map((p, i) => (
            <CaseStrip key={p.id} project={p} index={i} onClick={() => setSelected(p)} />
          ))}
        </div>

        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-border" />
          <span className="text-[10px] font-mono text-text-secondary tracking-[0.2em] uppercase">
            More
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div>
          {rest.map((p, i) => (
            <CaseStrip key={p.id} project={p} index={i} onClick={() => setSelected(p)} />
          ))}
        </div>
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
