'use client'

import { motion } from 'framer-motion'
import { blogPosts } from '@/data/blog'

export function Blog() {
  return (
    <section id="blog" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-2 bg-text-secondary/10 border border-text-secondary/20 rounded-full font-mono text-sm tracking-widest text-text-secondary mb-4">
            05 · writing
          </span>
        </motion.div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16">
          Thinking out loud
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-surface border border-primary/20 rounded-lg hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-text-secondary text-xs">Draft</span>
                <span className="text-text-secondary text-xs">•</span>
                <span className="text-text-secondary text-xs">{post.category}</span>
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {post.title}
              </h3>
              
              <p className="text-text-secondary mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary">
            First articles dropping soon. Follow on LinkedIn for updates.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
