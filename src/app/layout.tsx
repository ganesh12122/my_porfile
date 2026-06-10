import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { CustomCursor } from '@/components/custom-cursor'
import { NoiseOverlay } from '@/components/noise-overlay'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ganesh Prasath K R | Agentic AI Developer',
  description: 'Building production-grade AI systems - LLM orchestration, RAG pipelines, multi-tenant SaaS',
  keywords: ['AI Engineer', 'Agentic AI', 'LLM', 'RAG', 'FastAPI', 'Python', 'Multi-tenant SaaS'],
  authors: [{ name: 'Ganesh Prasath K R' }],
  openGraph: {
    title: 'Ganesh Prasath K R | Agentic AI Developer',
    description: 'Building production-grade AI systems',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ganesh Prasath K R | Agentic AI Developer',
    description: 'Building production-grade AI systems',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
       <script src="http://localhost:3001/widget.js" data-widget-id="w_xiI2iDqu3BVBckNu14-mFKruu2UZIpo5" async></script>
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-text-primary`}
      >
        <ThemeProvider>
          <CustomCursor />
          <NoiseOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
