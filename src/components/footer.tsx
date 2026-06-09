'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-primary/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-secondary">
          © 2026 Ganesh Prasath K R · Built with Next.js + Framer Motion
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ganesh12122"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/ganesh-prasath-k-r-301523309"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:ganeshprasath12122@gmail.com"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
