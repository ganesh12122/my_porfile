export interface Project {
  id: string
  number: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  category: 'production' | 'personal' | 'compliance' | 'biometric'
  featured: boolean
  status: 'production' | 'in-progress' | 'completed'
  tags: string[]
  link?: string
  github?: string
  image?: string
}

export const projects: Project[] = [
  {
    id: '01',
    number: '01',
    title: 'Custom Bot',
    description: 'Multi-Tenant AI Chatbot SaaS with LangGraph orchestration and three-tier RAG pipeline',
    longDescription: 'Production SaaS with 11 Docker services. Companies build AI bots, upload knowledge bases, deploy embeddable widgets. Powered by LangGraph-orchestrated agentic runtime with a proprietary three-tier RAG pipeline: FAQ golden-source → privacy-guarded semantic cache → full pgvector RAG. 3,000+ req/day at $0 API cost via Gemini dual-pool rotation.',
    techStack: ['LangGraph', 'FastAPI', 'pgvector', 'Redis', 'Ollama', 'n8n', 'MinIO', 'Docker', 'React'],
    category: 'production',
    featured: true,
    status: 'production',
    tags: ['Agentic AI', 'Multi-Tenant SaaS', 'RAG', 'Production'],
  },
  {
    id: '02',
    number: '02',
    title: 'Axenza Drive',
    description: 'Cloud Storage SaaS with AI-Native Knowledge Sync and automatic real-time RAG updates',
    longDescription: 'Self-hosted multi-tenant cloud storage (8 FastAPI microservices) with automatic real-time AI knowledge sync. Files uploaded to connector-bound folders update the RAG chatbot\'s knowledge base instantly — zero manual re-upload. Dual-layer tenant isolation: PostgreSQL RLS + per-tenant MinIO credentials.',
    techStack: ['FastAPI', 'PostgreSQL', 'pgvector', 'MinIO', 'Meilisearch', 'Traefik v3', 'Next.js 15'],
    category: 'production',
    featured: true,
    status: 'production',
    tags: ['Cloud Storage', 'RAG Sync', 'Multi-Tenant', 'Production'],
  },
  {
    id: '03',
    number: '03',
    title: 'AML Compliance Suite',
    description: 'MAS TRM-compliant AML platforms for Singapore fintech with multilingual adverse media screening',
    longDescription: 'Two MAS TRM-compliant AML platforms for a Singapore fintech. Global sanctions screening, multilingual adverse media across 9 Unicode scripts, on-premise LLM risk scoring. 6-tier fuzzy name-matching, Redis atomic INCR for race-condition-free parallel tracking.',
    techStack: ['Gemini 2.5', 'Ollama', 'n8n', 'Redis', 'PostgreSQL', 'FastAPI', 'Docker'],
    category: 'compliance',
    featured: true,
    status: 'production',
    tags: ['Compliance', 'AML', 'Multi-lingual', 'Production'],
  },
  {
    id: '04',
    number: '04',
    title: 'FaceAuth',
    description: 'Multi-Tenant Biometric Verification SaaS with hybrid liveness detection and ONNX face embeddings',
    longDescription: 'Biometric SaaS with hybrid liveness detection (passive multi-scale fusion + active challenge-response via MediaPipe 478-point landmarks). AdaFace IR-101 ONNX for 512-D face embeddings. Exposed as both internal product and third-party REST API.',
    techStack: ['AdaFace ONNX', 'MediaPipe', 'Qdrant', 'FastAPI', 'Redis', 'PostgreSQL'],
    category: 'biometric',
    featured: true,
    status: 'production',
    tags: ['Biometrics', 'Security', 'ONNX', 'Production'],
  },
  {
    id: '05',
    number: '05',
    title: 'AI Agent Platform',
    description: 'Local multi-step AI agent platform with LangGraph and VS Code extension integration',
    longDescription: 'Personal local multi-step AI agent platform built with LangGraph. FastAPI backend with VS Code extension integration and Docker deployment. Demonstrates advanced agent orchestration and tool use capabilities.',
    techStack: ['LangGraph', 'Ollama', 'FastAPI', 'Docker'],
    category: 'personal',
    featured: false,
    status: 'completed',
    tags: ['Agentic AI', 'Personal Project', 'Tool Use'],
  },
  {
    id: '06',
    number: '06',
    title: 'AOB Compliance Automation',
    description: 'n8n Orchestration Engine for scheduled compliance automation with risk band evaluation',
    longDescription: 'Multi-tenant scheduled compliance engine evaluating risk bands (Very High → Low) and auto-triggering AML/Google/ACRA checks. Redis atomic counters for race-free tracking + SQL idempotency protection. Eliminated manual compliance review bottlenecks.',
    techStack: ['Docker', 'Azure MySQL', 'Redis', 'Python', 'REST APIs', 'n8n'],
    category: 'compliance',
    featured: false,
    status: 'completed',
    tags: ['Automation', 'Compliance', 'n8n', 'Orchestration'],
  },
  {
    id: '07',
    number: '07',
    title: 'Crescent Exchange',
    description: 'Cross-Platform Fintech App with 3-layer biometric security and real-time notifications',
    longDescription: 'Production currency exchange app for iOS, Android, and Web. Modular Riverpod state management + 40+ packages. 3-layer biometric security (ML Kit + TFLite + AES), Azure OCR for ID processing, real-time SignalR notifications. Company Spot Award winner.',
    techStack: ['Flutter', 'Dart', 'Riverpod', 'TensorFlow', 'Google ML Kit', 'Azure OCR', 'SignalR', 'Firebase'],
    category: 'biometric',
    featured: false,
    status: 'production',
    tags: ['Fintech', 'Mobile', 'Biometrics', 'Flutter'],
  },
  {
    id: '08',
    number: '08',
    title: 'AML Background Verification',
    description: '6-service microservices platform for global sanctions and adverse media screening',
    longDescription: '6-service microservices platform for global sanctions, adverse media, and financial crime screening. Dual-pool Gemini model rotation + thread-safe quota tracking → $0/month API cost (~$1,200/year saved). Async gateway with 6-tier fuzzy name matching, Ollama/Mistral advisory layer.',
    techStack: ['FastAPI', 'Python', 'n8n', 'Gemini 2.5', 'Redis', 'Docker', 'Azure MySQL'],
    category: 'compliance',
    featured: false,
    status: 'production',
    tags: ['Compliance', 'Microservices', 'Gemini', 'Production'],
  },
]
