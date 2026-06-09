'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-2 bg-text-secondary/10 border border-text-secondary/20 rounded-full font-mono text-sm tracking-widest text-text-secondary mb-4">
            04 · experience
          </span>
        </motion.div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16">
          Where I've worked
        </h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-16 md:mb-24"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(0,212,255,0.5)] z-10" />
              
              {/* Content */}
              <div className={`pl-10 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 ml-auto'}`}>
                <div className="bg-surface border border-primary/20 rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-text-primary">{exp.company}</h3>
                    <span className="text-primary font-mono text-sm">{exp.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-text-primary font-medium">{exp.role}</span>
                    <span className="text-text-secondary">•</span>
                    <span className="text-text-secondary">{exp.location}</span>
                  </div>
                  
                  <p className="text-text-secondary mb-6">{exp.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-primary mt-1">●</span>
                        <span className="text-text-secondary">{bullet}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
