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
    title: 'Axenza AI Platform',
    description:
      'Enterprise-grade multi-tenant SaaS — Context-Aware Bots, Graph-RAG, LiteLLM model gateway, and real-time document drive',
    longDescription:
      'Production multi-tenant SaaS with 11+ Docker microservices. Organizations build context-aware AI bots that know *who* is asking (role, country, plan) and *where* they are in the app via a custom `setContext` SDK. Powered by a proprietary three-tier RAG pipeline (FAQ → semantic cache → full pgvector RAG) with Axenza Drive for real-time knowledge sync. LiteLLM gateway abstracts Azure/OpenAI/Ollama behind Fast, Smart, and Powerful profiles with automatic fallback. Multi-worker ingestion with fair-tenant claim and ETA/Progress % tracking. Full commercial loop: trial → plan upgrade → custom tier, all admin-configurable.',
    techStack: ['LangGraph', 'FastAPI', 'pgvector', 'LiteLLM', 'Redis', 'Ollama', 'MinIO', 'Traefik v3', 'Next.js 15'],
    category: 'production',
    featured: true,
    status: 'in-progress',
    tags: ['Agentic AI', 'Multi-Tenant SaaS', 'RAG', 'Graph-RAG', 'Production'],
  },
  {
    id: '02',
    number: '02',
    title: 'Axenza Drive',
    description: 'Cloud Storage SaaS with AI-Native Knowledge Sync and automatic real-time RAG updates',
    longDescription:
      'Self-hosted multi-tenant cloud storage (8 FastAPI microservices) with automatic real-time AI knowledge sync. Files uploaded to connector-bound folders update the RAG chatbot\'s knowledge base instantly — zero manual re-upload. Dual-layer tenant isolation: PostgreSQL RLS + per-tenant MinIO credentials. Full Drive features: soft delete, restore, move, trash retention, public share links, and storage alerts. Integrated Meilisearch hybrid search across all tenant documents.',
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
    description: 'MAS TRM-compliant AML platforms for Singapore fintech — global sanctions screening, multilingual adverse media, and AI decision engine',
    longDescription:
      'Two MAS TRM-compliant AML platforms for a Singapore fintech. Automated background verification at scale: Kafka-driven n8n workflows process 400+ entities in parallel. OpenSanctions/Yente for global sanctions (OFAC, UN, EU), plus a custom FastAPI adverse media service with Gemini Search Grounding/SERP toggle. A sophisticated Decision Engine handles 6-tier fuzzy name matching, false-positive filtering (compliance officer ≠ criminal), and calibrated confidence scoring. PgBouncer connection pooling to survive heavy parallel load. Redis atomic counters for race-free parallel tracking.',
    techStack: ['Gemini 2.5', 'Ollama', 'n8n', 'Kafka', 'Redis', 'PostgreSQL', 'FastAPI', 'Docker', 'PgBouncer'],
    category: 'compliance',
    featured: true,
    status: 'production',
    tags: ['Compliance', 'AML', 'Multi-lingual', 'Decision Engine', 'Production'],
  },
  {
    id: '04',
    number: '04',
    title: 'FaceAuth',
    description: 'Multi-Tenant Biometric Verification SaaS — hybrid liveness detection, ONNX face embeddings, zero PII retention',
    longDescription:
      'Biometric KYC SaaS solving liveness (real human vs. photo/screen replay), 1:1 verification (live face vs. ID doc), and 1:N de-duplication/fraud. AdaFace IR-101 ONNX for 512-D face embeddings stored in Qdrant — raw images deleted immediately after embedding (GDPR/SOC2 by design). Hybrid liveness: MiniFASNetV2 passive detection + MediaPipe 478-landmark active challenge-response. Full pipeline executes in under 300ms. Decoupled CI/CD (push-api-prod.bat) cut backend deployments from 15+ minutes to ~5 seconds.',
    techStack: ['AdaFace ONNX', 'MediaPipe', 'Qdrant', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Nginx'],
    category: 'biometric',
    featured: true,
    status: 'production',
    tags: ['Biometrics', 'KYC', 'Security', 'ONNX', 'Zero-PII', 'Production'],
  },
  {
    id: '05',
    number: '05',
    title: 'AI Agent Platform',
    description: 'Local multi-step AI agent platform with LangGraph and VS Code extension integration',
    longDescription:
      'Personal local multi-step AI agent platform built with LangGraph. FastAPI backend with VS Code extension integration and Docker deployment. Demonstrates advanced agent orchestration, tool use, and ReAct-style reasoning loops using on-premise Ollama models.',
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
    longDescription:
      'Multi-tenant scheduled compliance engine evaluating risk bands (Very High → Low) and auto-triggering AML/Google/ACRA checks. Redis atomic INCR counters for race-condition-free parallel tracking + SQL idempotency protection. Eliminated manual compliance review bottlenecks for a Singapore fintech\'s ongoing entity monitoring.',
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
    description: 'Cross-Platform Fintech App with 3-layer biometric security and real-time notifications — Company SPOT Award winner',
    longDescription:
      'Production currency exchange app for iOS, Android, and Web. Modular Riverpod state management + 40+ packages. 3-layer biometric security (ML Kit + TFLite + AES-encrypted local store), Azure OCR for ID document processing, real-time SignalR push notifications. Awarded the Company SPOT Award by CTO & Managing Director for technical vision and end-to-end ownership.',
    techStack: ['Flutter', 'Dart', 'Riverpod', 'TensorFlow Lite', 'Google ML Kit', 'Azure OCR', 'SignalR', 'Firebase'],
    category: 'biometric',
    featured: false,
    status: 'production',
    tags: ['Fintech', 'Mobile', 'Biometrics', 'Flutter', 'SPOT Award'],
  },
]
