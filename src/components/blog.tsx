'use client'

import { motion } from 'framer-motion'

const upcomingTopics = [
  {
    title: 'How I built a three-tier RAG pipeline that doesn\'t leak context across tenants',
    category: 'RAG Architecture',
    readTime: '~15 min',
  },
  {
    title: 'LangGraph vs n8n: what I learned shipping both in the same production system',
    category: 'Agentic AI',
    readTime: '~12 min',
  },
  {
    title: 'False positives in AML screening: building a deterministic decision engine',
    category: 'Compliance Engineering',
    readTime: '~10 min',
  },
]

export function Blog() {
  return (
    <section id="blog" className="section-padding relative bg-surface/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary mb-8"
        >
          05 — Writing
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 sm:mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            Thinking out loud
          </h2>
          <span className="text-text-secondary font-mono text-sm">First posts dropping soon</span>
        </motion.div>

        <div className="border-t border-border">
          {upcomingTopics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="border-b border-border py-6 sm:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent/70">
                    {topic.category}
                  </span>
                  <span className="font-mono text-[10px] text-text-secondary/50">·</span>
                  <span className="font-mono text-[10px] text-text-secondary/60">{topic.readTime}</span>
                </div>
                <p className="font-display text-lg sm:text-xl font-semibold text-text-primary group-hover:text-accent transition-colors duration-200 leading-snug max-w-2xl">
                  {topic.title}
                </p>
              </div>
              <span className="font-mono text-[11px] text-text-secondary border border-border rounded px-2.5 py-1 shrink-0 self-start sm:self-center">
                Coming Soon
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 font-mono text-xs text-text-secondary/60"
        >
          Follow on{' '}
          <a
            href="https://linkedin.com/in/ganesh-prasath-k-r-301523309"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            LinkedIn
          </a>{' '}
          for updates when articles drop.
        </motion.p>
      </div>
    </section>
  )
}
