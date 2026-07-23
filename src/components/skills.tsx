'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'

const categories = [
  { id: 'agentic', label: 'Agentic AI' },
  { id: 'rag', label: 'RAG & Vector' },
  { id: 'backend', label: 'Backend' },
  { id: 'devops', label: 'DevOps' },
  { id: 'ai-integration', label: 'AI Integration' },
] as const

const levelDots: Record<string, number> = {
  expert: 3,
  advanced: 2,
  intermediate: 1,
}

export function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-surface/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary mb-8"
        >
          02 — Stack
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-14 text-text-primary"
        >
          What I build with
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, ci) => {
            const catSkills = skills.filter((s) => s.category === cat.id)
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.06 }}
                className="border-t border-border pt-5"
              >
                <div className="flex items-baseline justify-between mb-5">
                  <h3 className="font-display text-sm font-semibold text-accent tracking-wide">
                    {cat.label}
                  </h3>
                  <span className="font-mono text-[10px] text-text-secondary">
                    {catSkills.length}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {catSkills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-3 py-1.5 group"
                    >
                      <span className="font-mono text-sm text-text-primary group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-1" aria-label={skill.level}>
                        {[1, 2, 3].map((n) => (
                          <span
                            key={n}
                            className={`w-1.5 h-1.5 rounded-full ${
                              n <= levelDots[skill.level]
                                ? 'bg-accent'
                                : 'bg-border'
                            }`}
                          />
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mt-10 justify-end"
        >
          {[
            { dots: 3, label: 'Expert' },
            { dots: 2, label: 'Advanced' },
            { dots: 1, label: 'Intermediate' },
          ].map(({ dots, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3].map((n) => (
                  <span
                    key={n}
                    className={`w-1.5 h-1.5 rounded-full ${n <= dots ? 'bg-accent' : 'bg-border'}`}
                  />
                ))}
              </div>
              <span className="text-[11px] text-text-secondary font-mono">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
