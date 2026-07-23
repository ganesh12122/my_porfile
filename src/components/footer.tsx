import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-surface border-t border-primary/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter">
              <span className="text-primary">G</span>anesh<span className="text-primary">.</span>dev
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              Building production-grade AI systems with a focus on scalability, security, and real-world impact.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ganesh-prasath-k-r-301523309/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:ganeshprasath12122@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-text-secondary hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-text-secondary text-sm">Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-text-secondary text-sm">+91 8778196537</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-text-secondary text-sm">ganeshprasath12122@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-6">Stats</h3>
            <div className="space-y-4">
              <div>
                <span className="text-3xl font-bold text-primary">1+</span>
                <span className="text-text-secondary ml-2">Year Production AI</span>
              </div>
              <div>
                <span className="text-3xl font-bold text-primary">4+</span>
                <span className="text-text-secondary ml-2">Systems Shipped</span>
              </div>
              <div>
                <span className="text-3xl font-bold text-primary">3,000+</span>
                <span className="text-text-secondary ml-2">Requests/Day</span>
              </div>
              <div>
                <span className="text-3xl font-bold text-primary">$0</span>
                <span className="text-text-secondary ml-2">API Cost Saved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Ganesh Prasath K R. All rights reserved.
          </p>
          <div className="group cursor-pointer">
            <p className="text-text-secondary text-sm hover:text-primary transition-colors">
              // built with intention, not a template
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
