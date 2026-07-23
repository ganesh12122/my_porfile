import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface/50 py-12 sm:py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-10 mb-12">
          <div className="max-w-sm">
            <a href="#home" className="font-display text-2xl font-bold tracking-tight text-text-primary">
              Ganesh<span className="text-accent">.</span>dev
            </a>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              Production AI systems — agents, RAG, multi-tenant SaaS. Built with intention, not a template.
            </p>
            <p className="mt-4 font-mono text-[11px] text-text-secondary/70">
              Writing soon — follow on LinkedIn for updates.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { name: 'About', href: '#about' },
              { name: 'Work', href: '#projects' },
              { name: 'Experience', href: '#experience' },
              { name: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-text-secondary hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            <a
              href="https://github.com/ganesh12122"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ganesh-prasath-k-r-301523309/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ganeshprasath12122@gmail.com"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-secondary text-xs font-mono">
            © {year} Ganesh Prasath K R
          </p>
          <p className="text-text-secondary/60 text-xs font-mono">
            // voltage atelier
          </p>
        </div>
      </div>
    </footer>
  )
}
