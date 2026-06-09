export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  bullets: string[]
  skills: string[]
  logo?: string
}

export const experiences: Experience[] = [
  {
    id: 'ai4solutions',
    company: 'Ai4Solutions',
    role: 'Software Engineer · Agentic AI & Backend',
    period: 'May 2025 – Present',
    location: 'Chennai, India',
    description: 'Building production-grade AI systems end-to-end — from LLM orchestration pipelines to secure multi-tenant SaaS platforms with RAG, compliance tooling, and biometric systems.',
    skills: ['LangGraph', 'FastAPI', 'RAG', 'Multi-tenant SaaS', 'Docker', 'PostgreSQL', 'Redis', 'Ollama'],
    bullets: [
      'Designed and delivered multi-agent AI pipelines using LangGraph and n8n, implementing tool use, retrieval augmentation, and agent reasoning across production workloads',
      'Built and owned a three-tier RAG retrieval pipeline — reducing unnecessary LLM calls and preventing privacy leaks across tenants',
      'Engineered dual-pool Gemini model rotation with thread-safe quota tracking: 3,000+ requests/day at $0 API cost, saving ~$1,200/year',
      'Maintained full CI/CD pipelines and production observability via Prometheus metrics and Grafana dashboards with alerting',
      'Integrated Azure OCR for ID document processing, ONNX-based face embedding models, and on-premise Ollama model inference',
    ],
  },
]
