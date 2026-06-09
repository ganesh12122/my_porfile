import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Blog } from '@/components/blog'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

function Divider() {
  return <div className="section-divider max-w-7xl mx-auto px-4 sm:px-6" />
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <Blog />
      <Divider />
      <Contact />
      <Footer />
    </main>
  )
}
