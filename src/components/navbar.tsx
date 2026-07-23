'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/components/theme-provider'
import { Menu, X, Moon, Sun } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-primary/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-bold tracking-tighter"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-primary">G</span>anesh<span className="text-primary">.</span>dev
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
            </motion.a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-surface border border-primary/20 text-text-primary hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-text-primary"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Button (Desktop) */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-surface border border-primary/20 text-text-primary hover:text-primary transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-text-primary"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-primary/20 z-50 p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold text-text-primary">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-text-primary hover:text-primary transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}

                <div className="pt-6 border-t border-primary/20">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-3 p-3 bg-surface border border-primary/20 rounded-lg w-full justify-center"
                  >
                    {theme === 'dark' ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
                    <span className="text-text-primary">Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
