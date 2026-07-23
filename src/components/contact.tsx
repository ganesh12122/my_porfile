'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Github, Linkedin, Download } from 'lucide-react'

function DockerComposeCard() {
  const lines = [
    { text: 'version: "3.9"', type: 'string' },
    { text: 'services:', type: 'key' },
    { text: '  ganesh_prasath:', type: 'service' },
    { text: '    image: agentic-ai-engineer:latest', type: 'value' },
    { text: '    role: LLM · RAG · SaaS · Biometrics', type: 'value' },
    { text: '    location: Chennai, India', type: 'value' },
    { text: '    open_to_work: "true"', type: 'string' },
    { text: '    stack:', type: 'key' },
    { text: '      - Python / FastAPI', type: 'item' },
    { text: '      - LangGraph / n8n', type: 'item' },
    { text: '      - RAG / pgvector', type: 'item' },
    { text: '      - Docker / Traefik', type: 'item' },
    { text: '    looking_for:', type: 'key' },
    { text: '      - Agentic AI roles', type: 'item' },
    { text: '      - LLM platform eng', type: 'item' },
    { text: '      - Remote friendly', type: 'item' },
    { text: '    award: SPOT Award — Ai4Solutions', type: 'string' },
  ]

  // Terminal shell stays dark in both themes — always use bright syntax colors
  const colorMap: Record<string, string> = {
    key: 'text-[#c8f542]',
    service: 'text-[#3dffa8] font-semibold',
    value: 'text-[#a8b4a4]',
    string: 'text-[#a8d600]',
    item: 'text-[#eef2ea]/80',
  }

  return (
    <div
      className="border border-border rounded-lg overflow-hidden"
      style={{ background: '#0a0e0c' }}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/8 bg-white/[0.03]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs font-mono text-[#8a9588]">docker-compose.yml</span>
        <div className="w-14" />
      </div>

      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
        {lines.map((line, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-white/20 select-none w-5 text-right shrink-0 text-[10px] pt-0.5">
              {i + 1}
            </span>
            <span className={`${colorMap[line.type]} whitespace-pre`}>{line.text}</span>
          </div>
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
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary mb-8"
        >
          05 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-14 text-text-primary"
        >
          Let&apos;s build something
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-text-secondary leading-relaxed mb-10 text-base max-w-md">
              Open to agentic AI roles, LLM platform engineering, and remote-friendly opportunities.
              If you&apos;re building something ambitious with AI — let&apos;s talk.
            </p>

            <div className="space-y-1 mb-8">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 py-3.5 border-b border-border hover:border-accent/40 group transition-colors"
                >
                  <item.icon className="w-4 h-4 text-accent shrink-0" />
                  <div>
                    <p className="text-[10px] text-text-secondary font-mono uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-text-primary text-sm font-medium group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border text-text-secondary hover:text-accent hover:border-accent/40 transition-colors text-sm font-mono rounded-md"
                >
                  <s.icon size={14} />
                  {s.label}
                </a>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1i610nAQ-sAI1XsAPxgmA6GTeND9UObnc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-accent text-background font-display font-semibold text-sm rounded-md hover:bg-primary-hover transition-colors"
            >
              <Download size={15} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <DockerComposeCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
