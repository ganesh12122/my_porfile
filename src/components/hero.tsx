'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'

const NeuralNetworkCanvas = dynamic(
  () => import('@/components/neural-canvas').then(m => m.NeuralNetworkCanvas),
  { ssr: false }
)

function Typewriter({ phrases, speed = 80 }: { phrases: string[]; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let timeout: NodeJS.Timeout
    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), speed)
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), speed / 2)
    } else {
      setIsDeleting(false)
      setPhraseIndex(i => (i + 1) % phrases.length)
    }
    setDisplayedText(current.substring(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex, phrases, speed])

  return (
    <span>
      {displayedText}
      <span className="blinking-cursor">|</span>
    </span>
  )
}

function Counter({ 
  value, 
  label, 
  suffix = "+", 
  duration = 2000 
}: { 
  value: number; 
  label: string; 
  suffix?: string; 
  duration?: number;
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const safeId = `counter-${label.replace(/[^a-zA-Z0-9]/g, '-')}`

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const step = Math.ceil(value / (duration / 16))
          const timer = setInterval(() => {
            start += step
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, 16)
        }
      })
    }, { threshold: 0.1 })

    const el = document.querySelector<HTMLElement>(`#${safeId}`)
    if (el) observer.observe(el)

    return () => observer.disconnect()
  }, [value, duration, hasAnimated, safeId])

  return (
    <div id={safeId} className="flex flex-col items-center">
      <span className="text-2xl sm:text-3xl font-bold font-mono" style={{ color: '#00d4ff' }}>
        {value === 1200 ? '$' : ''}{count}
        {suffix}
      </span>
      <span className="text-[10px] sm:text-xs mt-1 font-mono text-center leading-tight" style={{ color: '#64748b' }}>
        {label}
      </span>
    </div>
  )
}

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const phrases = [
    'Building autonomous LLM systems',
    'Orchestrating multi-agent pipelines',
    'Shipping production RAG architectures',
    'Making AI work in the real world',
  ]

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#050810' }}
    >
      {/* Canvas */}
      <div className="absolute inset-0 z-0">
        <NeuralNetworkCanvas />
      </div>

      {/* Gradient overlay — always dark regardless of theme */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to bottom, rgba(5,8,16,0.3) 0%, rgba(5,8,16,0.55) 50%, #050810 100%)' }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20 pb-12"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-5"
        >
          <span
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-xs sm:text-sm tracking-widest"
            style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)', color: '#00d4ff' }}
          >
            AGENTIC AI DEVELOPER
            <span className="blinking-cursor ml-2">|</span>
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-5 tracking-tight leading-tight"
          style={{ color: '#e2e8f0' }}
        >
          Ganesh Prasath{' '}
          <span style={{ color: '#00d4ff' }}>K R</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base sm:text-xl md:text-2xl mb-6 font-mono min-h-[1.5em]"
          style={{ color: '#64748b' }}
        >
          <Typewriter phrases={phrases} speed={80} />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-sm sm:text-base max-w-xl mx-auto mb-8 px-2"
          style={{ color: '#64748b' }}
        >
          From Chennai. 1+ year shipping production AI. End-to-end ownership.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-12 px-4 sm:px-0"
        >
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
            style={{ background: '#00d4ff', color: '#050810' }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 24px rgba(0,212,255,0.4)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1i610nAQ-sAI1XsAPxgmA6GTeND9UObnc/view?usp=sharing"
            download
            className="px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base"
            style={{ border: '1px solid rgba(0,212,255,0.35)', color: '#e2e8f0' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#00d4ff'; e.currentTarget.style.color = '#00d4ff' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)'; e.currentTarget.style.color = '#e2e8f0' }}
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base"
            style={{ border: '1px solid rgba(100,116,139,0.4)', color: '#94a3b8' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#94a3b8'; e.currentTarget.style.color = '#e2e8f0' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(100,116,139,0.4)'; e.currentTarget.style.color = '#94a3b8' }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6 max-w-2xl sm:max-w-4xl mx-auto mb-12 px-2"
        >
          <Counter value={1} label="Year Exp" suffix="+" />
          <Counter value={5} label="End-to-End Systems" suffix="+" />
          <Counter value={3} label="Multi-tenant SaaS" suffix="+" />
          <Counter value={40} label="Docker Services" suffix="+" />
          <Counter value={100} label="Security Focus" suffix="%" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono tracking-widest" style={{ color: '#475569' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-6 sm:h-8"
            style={{ background: 'linear-gradient(to bottom, #00d4ff, transparent)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
