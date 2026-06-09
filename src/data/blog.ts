export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  status: 'draft' | 'coming-soon' | 'published'
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How I built a three-tier RAG pipeline that doesn\'t leak user context across tenants',
    excerpt: 'A deep dive into my proprietary three-tier RAG architecture: golden-source FAQ → privacy-guarded semantic cache → full pgvector RAG. Learn how I achieved 99.9% tenant isolation while maintaining sub-second response times.',
    date: 'Coming Soon',
    readTime: '15 min read',
    status: 'coming-soon',
    category: 'RAG Architecture',
  },
  {
    id: '2',
    title: 'LangGraph vs n8n: what I learned shipping both in the same system',
    excerpt: 'After building production systems with both LangGraph and n8n, here\'s what I learned about agent orchestration, workflow automation, and when to use each tool — or both together.',
    date: 'Coming Soon',
    readTime: '12 min read',
    status: 'coming-soon',
    category: 'Agentic AI',
  },
  {
    id: '3',
    title: 'Why your RAG is slower than it needs to be: semantic caching explained',
    excerpt: 'Most RAG implementations miss the most important optimization: caching. I\'ll show you how semantic caching can reduce your LLM costs by 60% while improving response times.',
    date: 'Coming Soon',
    readTime: '10 min read',
    status: 'coming-soon',
    category: 'Performance Optimization',
  },
]
