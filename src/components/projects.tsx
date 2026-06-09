'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import { X, Lock, ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'

const categoryColor: Record<string, string> = {
  production: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  compliance: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  biometric: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  personal: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
      status === 'production' ? 'text-green-400 bg-green-400/10 border-green-400/20' : 'text-text-secondary bg-text-secondary/10 border-text-secondary/20'
    }`}>
      {status === 'production' ? '● LIVE' : '◎ DONE'}
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="bg-surface border border-primary/20 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-[0_0_60px_rgba(0,212,255,0.1)]"
          onClick={e => e.stopPropagation()}
        >
          <div className="p-5 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-text-secondary">{project.number}</span>
                  <StatusBadge status={project.status} />
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${categoryColor[project.category]}`}>
                    {project.category.toUpperCase()}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-text-primary">{project.title}</h2>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-primary/10 text-text-secondary hover:text-primary transition-all">
                <X size={18} />
              </button>
            </div>

            <p className="text-text-secondary leading-relaxed mb-8">{project.longDescription}</p>

            <div className="mb-6">
              <p className="text-xs font-mono text-text-secondary mb-3 uppercase tracking-widest">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-xs font-mono text-text-secondary mb-3 uppercase tracking-widest">Tags</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-surface border border-text-secondary/20 text-text-secondary rounded-lg text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary/80 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
            >
              <ExternalLink size={16} />
              Inquire About This Project
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function FeaturedCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative p-5 sm:p-8 bg-surface border border-primary/10 rounded-2xl cursor-pointer hover:border-primary/40 hover:shadow-[0_0_40px_rgba(0,212,255,0.08)] transition-all duration-300"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-text-secondary">{project.number}</span>
          <StatusBadge status={project.status} />
        </div>
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${categoryColor[project.category]}`}>
          {project.category.toUpperCase()}
        </span>
      </div>

      <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-200">
        {project.title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.techStack.slice(0, 5).map((tech, i) => (
          <span key={i} className="text-[11px] px-2 py-0.5 bg-primary/8 text-primary/80 border border-primary/15 rounded font-mono">
            {tech}
          </span>
        ))}
        {project.techStack.length > 5 && (
          <span className="text-[11px] px-2 py-0.5 bg-text-secondary/10 text-text-secondary rounded font-mono">
            +{project.techStack.length - 5}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-text-secondary">
          <Lock size={11} />
          <span>Private repo</span>
        </div>
        <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-mono">
          View details →
        </span>
      </div>

      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-secondary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
    </motion.div>
  )
}

function MiniCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      onClick={onClick}
      className="group p-5 bg-surface border border-primary/10 rounded-xl cursor-pointer hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.06)] transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs text-text-secondary">{project.number}</span>
        <StatusBadge status={project.status} />
      </div>
      <h4 className="font-bold text-text-primary text-sm mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h4>
      <p className="text-xs text-text-secondary line-clamp-2 mb-3 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1">
        {project.techStack.slice(0, 3).map((tech, i) => (
          <span key={i} className="text-[10px] px-1.5 py-0.5 bg-primary/8 text-primary/70 rounded font-mono border border-primary/10">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-text-secondary/10 border border-text-secondary/20 rounded-full font-mono text-sm tracking-widest text-text-secondary">
            03 · projects
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">What I've shipped</h2>
          <span className="text-text-secondary font-mono text-sm">{projects.length} production systems</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
          {featured.map((p, i) => (
            <FeaturedCard key={p.id} project={p} index={i} onClick={() => setSelected(p)} />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-primary/10" />
          <span className="text-xs font-mono text-text-secondary tracking-widest">MORE PROJECTS</span>
          <div className="flex-1 h-px bg-primary/10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {rest.map((p, i) => (
            <MiniCard key={p.id} project={p} index={i} onClick={() => setSelected(p)} />
          ))}
        </div>

      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
