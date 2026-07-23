'use client'

import { motion } from 'framer-motion'

const highlights = [
  { label: 'Production-first', desc: 'Real users, real scale — not just prototypes' },
  { label: 'Security-native', desc: 'Encryption, tenant isolation & replay protection by default' },
  { label: 'End-to-End Owner', desc: 'From architecture to production observability' },
  { label: 'Agentic AI Systems', desc: 'LangGraph + RAG pipelines for complex, reliable AI workflows' },
]

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary mb-8"
        >
          01 — About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-[1.1] text-text-primary">
              I don&apos;t build
              <br />
              <span className="text-accent">prototypes.</span>
              <br />
              I ship systems.
            </h2>

            <div className="space-y-5 text-base text-text-secondary leading-relaxed max-w-xl">
              <p>
                Chennai-based AI Engineer. Crossed over from ECE into production AI — that background
                gives me a systems-first mindset. I design for reliability, not just demos.
              </p>
              <p>
                1+ year at Ai4Solutions: four production systems built end-to-end — Multi-tenant AI
                Chatbot SaaS, cloud storage with real-time RAG sync, AML compliance platforms for
                Singapore fintech, and a biometric SaaS. Every system from scratch, full ownership.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5"
          >
            {/* Editorial quote — SPOT award */}
            <blockquote className="border-l-2 border-accent pl-5 mb-10">
              <p className="text-text-primary leading-relaxed text-[15px] sm:text-base">
                Awarded the{' '}
                <span className="text-accent font-semibold">Company SPOT Award</span> by CTO &amp;
                Managing Director for technical vision, end-to-end ownership, and hands-on leadership.
              </p>
              <footer className="mt-3 font-mono text-[11px] tracking-wide text-text-secondary">
                — Ai4Solutions · December 2025
              </footer>
            </blockquote>
          </motion.div>
        </div>

        {/* Horizontal editorial strip — no card grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 border-t border-border pt-10"
        >
          {highlights.map((item, i) => (
            <div key={item.label} className="relative">
              <span className="font-mono text-[10px] text-accent/70 mb-2 block">
                0{i + 1}
              </span>
              <h3 className="font-display text-base font-semibold text-text-primary mb-1.5">
                {item.label}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
