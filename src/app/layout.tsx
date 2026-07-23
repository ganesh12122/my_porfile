import type { Metadata } from 'next'
import { Syne, Outfit, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { NoiseOverlay } from '@/components/noise-overlay'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  weight: ['400', '500'],
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          src="https://sit-platform.axenza.ai/widget.js"
          data-widget-id="w_I2pNd61vD6WfCmf0hzSZeGxclnW4Jvbs"
          async
        />
      </head>
      <body
        className={`${syne.variable} ${outfit.variable} ${ibmPlexMono.variable} font-sans bg-background text-text-primary antialiased`}
      >
        <ThemeProvider>
          <NoiseOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
