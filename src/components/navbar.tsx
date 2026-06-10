'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/components/theme-provider'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const navHeight = 64
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-primary/10 shadow-[0_1px_20px_rgba(0,0,0,0.3)]'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="font-mono font-bold tracking-widest text-sm" style={{ color: scrolled ? 'var(--primary)' : '#00d4ff' }}>
          GP<span style={{ color: scrolled ? 'var(--text-secondary)' : '#475569' }}>.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNav(e, link.href)}
              className="font-mono text-sm transition-colors duration-200 hover:text-primary"
              style={{ color: scrolled ? 'var(--text-secondary)' : '#64748b' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border transition-all duration-200"
            style={{
              borderColor: scrolled ? 'rgba(var(--primary-rgb, 0,212,255), 0.2)' : 'rgba(0,212,255,0.2)',
              color: scrolled ? 'var(--text-secondary)' : '#64748b',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex px-3 lg:px-4 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 border"
            style={{
              background: 'rgba(0,212,255,0.08)',
              borderColor: 'rgba(0,212,255,0.25)',
              color: '#00d4ff',
            }}
          >
            Hire me
          </a>

          <button
            className="md:hidden p-2 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: scrolled ? 'var(--text-secondary)' : '#64748b' }}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(5,8,16,0.97)', borderBottom: '1px solid rgba(0,212,255,0.1)' }}
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => handleNav(e, link.href)}
                  className="font-mono text-sm py-3 px-3 rounded-lg transition-colors hover:text-primary hover:bg-primary/5"
                  style={{ color: '#64748b' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={e => handleNav(e, '#contact')}
                className="mt-2 mx-3 py-3 text-center rounded-lg font-mono text-sm border"
                style={{ background: 'rgba(0,212,255,0.08)', borderColor: 'rgba(0,212,255,0.25)', color: '#00d4ff' }}
              >
                Hire me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
