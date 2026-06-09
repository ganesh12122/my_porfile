'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'

const categories = [
  { id: 'agentic',          label: 'Agentic AI',      color: '#22d3ee' },
  { id: 'rag',              label: 'RAG & Vector',    color: '#a78bfa' },
  { id: 'backend',          label: 'Backend',         color: '#60a5fa' },
  { id: 'devops',           label: 'DevOps',          color: '#2dd4bf' },
  { id: 'ai-integration',   label: 'AI Integration',  color: '#fb923c' },
] as const

const levelDot: Record<string, string> = {
  expert:       'bg-green-400',
  advanced:     'bg-yellow-400',
  intermediate: 'bg-orange-400',
}

export function Skills() {
  // Two rows for marquee — each row gets ALL skills so it fills width
  const half = Math.ceil(skills.length / 2)
  const row1 = skills.slice(0, half)
  const row2 = skills.slice(half)

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-text-secondary/10 border border-text-secondary/20 rounded-full font-mono text-sm tracking-widest text-text-secondary">
            02 · tech_stack
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16"
        >
          What I build with
        </motion.h2>

        <div className="space-y-3 mb-12 sm:mb-20">
          {[row1, row2].map((row, ri) => (
            <div key={ri} className="overflow-hidden w-full">
              {/* width:max-content makes the track wider than viewport so marquee actually scrolls */}
              <div
                className={`flex gap-3 items-center ${ri === 1 ? 'animate-marquee-reverse' : 'animate-marquee'}`}
                style={{ width: 'max-content' }}
              >
                {[...row, ...row, ...row].map((skill, i) => {
                  const cat = categories.find(c => c.id === skill.category)!
                  return (
                    <div
                      key={i}
                      className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-surface border border-white/[0.06] rounded-lg"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: cat.color, boxShadow: `0 0 5px ${cat.color}` }}
                      />
                      <span className="font-mono text-xs text-text-secondary whitespace-nowrap">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ── Category grid ──────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat, ci) => {
            const catSkills = skills.filter(s => s.category === cat.id)
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: ci * 0.08 }}
                className="p-6 bg-surface border border-black/[0.07] dark:border-white/[0.06] rounded-2xl hover:border-primary/30 transition-colors duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}` }}
                  />
                  <span className="font-bold text-sm" style={{ color: cat.color }}>
                    {cat.label}
                  </span>
                  <span className="ml-auto text-[10px] font-mono text-text-secondary/50">
                    {catSkills.length} tools
                  </span>
                </div>

                {/* Skill rows */}
                <div className="space-y-2">
                  {catSkills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: ci * 0.08 + si * 0.04 }}
                      className="flex items-center justify-between px-3 py-2.5 bg-background/40 rounded-lg border border-black/[0.06] dark:border-white/[0.04] hover:border-primary/30 transition-colors group"
                    >
                      <span className="font-mono text-sm text-text-primary group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${levelDot[skill.level]}`} />
                        <span className="text-[10px] text-text-secondary capitalize font-mono">
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex items-center gap-6 mt-8 justify-end"
        >
          {[
            { dot: 'bg-green-400',  label: 'Expert' },
            { dot: 'bg-yellow-400', label: 'Advanced' },
            { dot: 'bg-orange-400', label: 'Intermediate' },
          ].map(({ dot, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
              <span className="text-xs text-text-secondary font-mono">{label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
