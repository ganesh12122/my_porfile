export interface Skill {
  name: string
  category: 'agentic' | 'rag' | 'backend' | 'devops' | 'ai-integration'
  description: string
  level: 'expert' | 'advanced' | 'intermediate'
}

export const skills: Skill[] = [
  // Agentic AI
  { name: 'LangGraph', category: 'agentic', description: 'Multi-agent orchestration and state management', level: 'expert' },
  { name: 'n8n', category: 'agentic', description: 'Workflow automation and agent orchestration', level: 'expert' },
  { name: 'Ollama', category: 'agentic', description: 'Local LLM deployment and management', level: 'expert' },
  { name: 'Gemini API', category: 'agentic', description: 'Google Gemini model integration', level: 'expert' },
  { name: 'OpenAI API', category: 'agentic', description: 'GPT model integration and fine-tuning', level: 'advanced' },
  
  // RAG & Vector
  { name: 'pgvector', category: 'rag', description: 'PostgreSQL vector extension for RAG', level: 'expert' },
  { name: 'Qdrant', category: 'rag', description: 'Vector database for high-performance embeddings', level: 'expert' },
  { name: 'Meilisearch', category: 'rag', description: 'Hybrid search with semantic capabilities', level: 'advanced' },
  { name: 'Three-tier RAG', category: 'rag', description: 'Golden-source → Semantic Cache → Full RAG', level: 'expert' },
  { name: 'Semantic Cache', category: 'rag', description: 'LLM call optimization with caching layers', level: 'expert' },
  
  // Backend
  { name: 'Python 3.11/3.12', category: 'backend', description: 'Production-grade backend development', level: 'expert' },
  { name: 'FastAPI', category: 'backend', description: 'Async web framework for APIs', level: 'expert' },
  { name: 'SQLAlchemy 2.0', category: 'backend', description: 'ORM for database operations', level: 'expert' },
  { name: 'Alembic', category: 'backend', description: 'Database migrations', level: 'advanced' },
  { name: 'REST API', category: 'backend', description: 'RESTful API design and implementation', level: 'expert' },
  { name: 'Microservices', category: 'backend', description: 'Distributed system architecture', level: 'expert' },
  
  // DevOps
  { name: 'Docker', category: 'devops', description: 'Containerization and orchestration', level: 'expert' },
  { name: 'Docker Compose', category: 'devops', description: 'Multi-container orchestration', level: 'expert' },
  { name: 'Traefik v3', category: 'devops', description: 'Modern reverse proxy and load balancer', level: 'expert' },
  { name: 'Azure', category: 'devops', description: 'Cloud infrastructure and services', level: 'advanced' },
  { name: 'CI/CD', category: 'devops', description: 'Automated deployment pipelines', level: 'advanced' },
  { name: 'Prometheus', category: 'devops', description: 'Monitoring and alerting', level: 'advanced' },
  { name: 'Grafana', category: 'devops', description: 'Observability dashboards', level: 'advanced' },
  
  // AI Integration
  { name: 'AdaFace ONNX', category: 'ai-integration', description: 'Face embedding models', level: 'expert' },
  { name: 'MediaPipe', category: 'ai-integration', description: 'Multi-modal machine learning', level: 'expert' },
  { name: 'ONNX Runtime', category: 'ai-integration', description: 'Model inference optimization', level: 'expert' },
  { name: 'MinIO', category: 'ai-integration', description: 'Object storage for AI data', level: 'advanced' },
  { name: 'Azure OCR', category: 'ai-integration', description: 'Document processing and text extraction', level: 'advanced' },
]

export const skillCategories = {
  agentic: {
    label: 'Agentic AI',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  rag: {
    label: 'RAG & Vector',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
  backend: {
    label: 'Backend',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  devops: {
    label: 'DevOps',
    color: 'text-teal-400',
    bg: 'bg-teal-400/10',
    border: 'border-teal-400/20',
  },
  'ai-integration': {
    label: 'AI Integration',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
  },
}
