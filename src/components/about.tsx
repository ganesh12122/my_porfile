'use client'

import { motion } from 'framer-motion'
import { Award, Zap, Shield, Layers, Brain } from 'lucide-react'

const highlights = [
  { icon: Zap, label: 'Production-first', desc: 'Real users, real scale — not just prototypes' },
  { icon: Shield, label: 'Security-native', desc: 'Encryption, tenant isolation & replay protection by default' },
  { icon: Layers, label: 'End-to-End Owner', desc: 'From architecture to production observability' },
  { icon: Brain, label: 'Agentic AI Systems', desc: 'LangGraph + RAG pipelines for complex, reliable AI workflows' },
]

const coreSkills = [
  { name: 'Python / FastAPI', level: 95 },
  { name: 'LangGraph / n8n', level: 92 },
  { name: 'RAG & pgvector', level: 90 },
  { name: 'Docker / Traefik', level: 88 },
  { name: 'PostgreSQL / Redis', level: 85 },
  { name: 'Ollama / Gemini', level: 90 },
]

export function About() {
  return (
    <section id="about" className="section-padding relative">
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
            01 · about_me
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              I don't build<br />
              <span className="text-gradient-cyan">prototypes.</span><br />
              I ship systems.
            </h2>

            <div className="space-y-5 text-base text-text-secondary leading-relaxed mb-10">
              <p>
                Chennai-based AI Engineer. Crossed over from ECE into production AI — that background gives me a systems-first mindset. I design for reliability, not just demos.
              </p>
              <p>
                1+ year at Ai4Solutions: four production systems built end-to-end — Multi-tenant AI Chatbot SaaS, cloud storage with real-time RAG sync, AML compliance platforms for Singapore fintech, and a biometric SaaS. Every system from scratch, full ownership.
              </p>
            </div>

            {/* Skill bars */}
            <div className="space-y-4">
              {coreSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-text-primary font-mono">{skill.name}</span>
                    <span className="text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.07, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 bg-surface border border-primary/10 rounded-xl hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-text-primary mb-1.5">{item.label}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="sm:col-span-2 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl"
            >
              <p className="text-text-secondary italic leading-relaxed">
                "Awarded the <span className="text-primary font-semibold not-italic">Company SPOT Award</span> by CTO & Managing Director for technical vision, end-to-end ownership, and hands-on leadership."
              </p>
              <p className="text-xs text-text-secondary/60 mt-3 font-mono">— Ai4Solutions · December 2025</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
