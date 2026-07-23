'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useTheme } from '@/components/theme-provider'
import { ArrowRight } from 'lucide-react'

const NeuralNetworkCanvas = dynamic(
  () => import('@/components/neural-canvas').then((m) => m.NeuralNetworkCanvas),
  { ssr: false, loading: () => null }
)

function Typewriter({ phrases, speed = 70 }: { phrases: string[]; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((i) => i + 1), speed)
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((i) => i - 1), speed / 2)
    } else {
      setIsDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
    }
    setDisplayedText(current.substring(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex, phrases, speed])

  return (
    <span>
      {displayedText}
      <span className="blinking-cursor text-accent">|</span>
    </span>
  )
}

const proofItems = [
  { value: '1+', label: 'yr shipping AI' },
  { value: '4', label: 'production systems' },
  { value: '3k+', label: 'req/day' },
  { value: '$0', label: 'API cost' },
]

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const phrases = [
    'Building autonomous LLM systems',
    'Orchestrating multi-agent pipelines',
    'Shipping production RAG architectures',
    'Making AI work in the real world',
  ]

  return (
    <>
      <section
        id="home"
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 will-change-transform">
          <NeuralNetworkCanvas />
        </div>

        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: isLight
              ? 'linear-gradient(to bottom, rgba(243,245,240,0.55) 0%, rgba(243,245,240,0.35) 40%, rgba(243,245,240,0.92) 100%)'
              : 'linear-gradient(to bottom, rgba(7,9,8,0.45) 0%, rgba(7,9,8,0.55) 45%, rgba(7,9,8,0.97) 100%)',
          }}
        />

        <div className="absolute inset-0 z-[1] atelier-grid opacity-40 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center pt-24 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-extrabold tracking-tight leading-[0.95] mb-6 text-text-primary"
          >
            Ganesh Prasath <span className="text-accent">K R</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="font-mono text-sm sm:text-base md:text-lg text-text-secondary mb-5 min-h-[1.6em]"
          >
            <Typewriter phrases={phrases} speed={70} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="text-base sm:text-lg text-text-secondary max-w-lg mx-auto mb-10 leading-relaxed"
          >
            Production AI engineer from Chennai — agents, RAG, and multi-tenant systems shipped
            end-to-end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.45, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-background font-display font-semibold text-sm tracking-wide rounded-md hover:bg-primary-hover transition-colors duration-200"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://drive.google.com/file/d/1i610nAQ-sAI1XsAPxgmA6GTeND9UObnc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-text-primary font-medium text-sm rounded-md hover:border-accent hover:text-accent transition-colors duration-200"
            >
              Resume
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.6 }}
            className="mt-10 font-mono text-[11px] tracking-[0.2em] uppercase text-text-secondary/70"
          >
            Agentic AI · Backend · Chennai
          </motion.p>
        </div>
      </section>

      <div className="relative z-10 border-y border-border bg-surface/80">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-6 sm:py-7">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-4">
            {proofItems.map((item, i) => (
              <div key={item.label} className="flex items-baseline gap-2.5">
                <span className="font-display text-xl sm:text-2xl font-bold text-accent tracking-tight">
                  {item.value}
                </span>
                <span className="font-mono text-[11px] sm:text-xs text-text-secondary tracking-wide">
                  {item.label}
                </span>
                {i < proofItems.length - 1 && (
                  <span className="hidden sm:inline text-border ml-4 select-none" aria-hidden>
                    /
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
