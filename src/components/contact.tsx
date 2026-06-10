'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Github, Linkedin, Download } from 'lucide-react'

// Docker compose card — static, syntax-highlighted, premium look
function DockerComposeCard() {
  const lines = [
    { text: 'version: "3.9"',         type: 'string' },
    { text: 'services:',              type: 'key' },
    { text: '  ganesh_prasath:',      type: 'service' },
    { text: '    image: agentic-ai-engineer:latest', type: 'value' },
    { text: '    role: LLM · RAG · SaaS · Biometrics', type: 'value' },
    { text: '    location: Chennai, India', type: 'value' },
    { text: '    open_to_work: "true"', type: 'string' },
    { text: '    stack:',             type: 'key' },
    { text: '      - Python / FastAPI', type: 'item' },
    { text: '      - LangGraph / n8n', type: 'item' },
    { text: '      - RAG / pgvector',  type: 'item' },
    { text: '      - Docker / Traefik', type: 'item' },
    { text: '    looking_for:',        type: 'key' },
    { text: '      - Agentic AI roles', type: 'item' },
    { text: '      - LLM platform eng', type: 'item' },
    { text: '      - Remote friendly',  type: 'item' },
    { text: '    award: SPOT Award — Ai4Solutions 🏆', type: 'string' },
  ]

  const colorMap: Record<string, string> = {
    key:     'text-cyan-400',
    service: 'text-purple-400 font-semibold',
    value:   'text-slate-300',
    string:  'text-emerald-400',
    item:    'text-sky-300',
  }

  return (
    <div className="bg-[#0d1117] border border-primary/20 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,212,255,0.06)]">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="text-xs font-mono text-text-secondary">docker-compose.yml</span>
        <div className="w-16" />
      </div>

      {/* Code body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="flex items-start gap-3 group"
          >
            <span className="text-white/15 select-none w-5 text-right flex-shrink-0 text-xs pt-0.5">
              {i + 1}
            </span>
            <span className={`${colorMap[line.type]} whitespace-pre`}>{line.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const contactLinks = [
  {
    href: 'mailto:ganeshprasath12122@gmail.com',
    icon: Mail,
    label: 'Email',
    value: 'ganeshprasath12122@gmail.com',
  },
  {
    href: 'tel:+918778196537',
    icon: Phone,
    label: 'Phone',
    value: '+91 8778196537',
  },
  {
    href: '#',
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
  },
]

const socials = [
  { href: 'https://linkedin.com/in/ganesh-prasath-k-r-301523309', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/ganesh12122', icon: Github, label: 'GitHub' },
]

export function Contact() {
  return (
    <section id="contact" className="section-padding relative">
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
            06 · contact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16"
        >
          Let's build something
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-text-secondary leading-relaxed mb-10 text-base">
              Open to agentic AI roles, LLM platform engineering, and remote-friendly opportunities.
              If you're building something ambitious with AI — let's talk.
            </p>

            <div className="space-y-4 mb-10">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-surface border border-primary/10 rounded-xl hover:border-primary/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.07)] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary font-mono mb-0.5">{item.label}</p>
                    <p className="text-text-primary text-sm font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mb-10">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-surface border border-primary/10 rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-text-secondary hover:text-primary text-sm font-mono"
                >
                  <s.icon size={15} />
                  {s.label}
                </a>
              ))}
            </div>

            {/* Resume CTA */}
            <a
              href="https://drive.google.com/file/d/1i610nAQ-sAI1XsAPxgmA6GTeND9UObnc/view?usp=sharing"
              download
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:scale-[1.02]"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Right — docker-compose card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <DockerComposeCard />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
