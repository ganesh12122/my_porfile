'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="section-padding relative bg-surface/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary mb-8"
        >
          04 — Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-text-primary"
        >
          Where I&apos;ve worked
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-border to-transparent" />

          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative pl-10 sm:pl-14 mb-12 last:mb-0"
            >
              <div className="absolute left-0 sm:left-1 top-2 w-4 h-4 rounded-full border-2 border-accent bg-background z-10" />

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                <h3 className="font-display text-2xl font-bold text-text-primary">{exp.company}</h3>
                <span className="font-mono text-sm text-accent">{exp.period}</span>
              </div>

              <p className="text-text-primary font-medium mb-1">{exp.role}</p>
              <p className="font-mono text-xs text-text-secondary mb-5">{exp.location}</p>

              <p className="text-text-secondary mb-6 leading-relaxed max-w-3xl">{exp.description}</p>

              <ul className="space-y-3 mb-6 max-w-3xl">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary text-sm sm:text-[15px] leading-relaxed">
                    <span className="text-accent mt-1.5 shrink-0 text-[8px]">●</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 font-mono text-[11px] text-text-secondary border border-border rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
