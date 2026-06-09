**Ganesh Prasath K R**  
**AI Engineer | LLM Applications | Production-Grade AI Systems**  
Chennai, Tamil Nadu, India  

**LinkedIn:** [linkedin.com/in/ganesh-prasath-k-r-301523309](https://www.linkedin.com/in/ganesh-prasath-k-r-301523309/)  

---

### About
I build **production-grade AI systems** end-to-end — from LLM orchestration pipelines to secure multi-tenant SaaS platforms with RAG, compliance tooling, and biometric systems. Strong focus on security, observability, tenant isolation, and real-world scalability.

---

### Featured Projects

#### **Axenza Drive** — Multi-Tenant Cloud Storage SaaS with AI-Native Sync
**May 2026 – Present** | *AI 4 Solutions*

- Commercial-grade, self-hosted **OneDrive alternative** built with **8 FastAPI microservices**.
- **Key Differentiator**: Automatic real-time AI knowledge sync — files uploaded to a connected folder instantly update the RAG chatbot’s knowledge base (zero manual re-upload).
- Designed a **3-tier sharing model** (public/private/connector-scoped) with Fernet-encrypted credentials, HMAC-SHA256 webhook signatures (300s replay protection), and connector-bound bearer tokens.
- Implemented **recursive CTE** for infinitely nested folder sync, incremental/full sync modes, and sequence-number event ordering.
- **Dual-layer tenant isolation**: PostgreSQL Row-Level Security + per-tenant MinIO credentials.

**Tech Stack**: FastAPI, MinIO, Traefik v3, Redis, Meilisearch, Next.js, Systems Design

---

#### **Custom Bot** — Multi-Tenant AI Chatbot SaaS Platform
**May 2026 – Present** | *AI 4 Solutions*

- Production-grade “**Build Your Own Chatbot**” SaaS (11 Docker services) — comparable to Intercom AI + Botpress, fully self-hosted.
- **Three-tier retrieval pipeline**: FAQ golden-source (synonym normalization + token overlap) → privacy-aware semantic cache → full RAG.
- Double-hashed API keys (SHA-256 prefix + bcrypt), Shadow DOM widget embedding with origin validation, HMAC-SHA256 webhooks (Stripe/GitHub patterns).
- Full observability: 50+ tests (pytest + Playwright E2E), load testing (250 concurrent users), architecture docs, changelog & roadmap.

**Tech Stack**: RAG, FastAPI, n8n, Docker, Redis, pgvector, Ollama, Azure OpenAI

---

#### **AI Agent Platform** (Personal)
- Local multi-step AI agent platform built with **LangGraph**.
- FastAPI backend with VS Code extension integration and Docker deployment.

**Tech Stack**: LangGraph, Ollama, FastAPI, Docker

---

#### **AML Adverse Media Screening** — Multilingual Compliance Pipeline
- 6-microservice multilingual AML pipeline for Singapore fintech (**MAS TRM compliant**).
- Routes searches across 4 engines with LLM-generated name variants (9 Unicode scripts).
- Fully on-premise LLM risk scoring (zero PII leakage) across 10 risk categories with relevance-weighted confidence.
- Switched to **MADLAD-400 (Apache 2.0)** for licensing compliance.

**Tech Stack**: FastAPI, Python, Redis, Docker, PostgreSQL, n8n, Ollama, MADLAD-400

---

#### **AML Background Verification System** — Compliance Microservices
- 6-service microservices platform for global sanctions, adverse media, and financial crime screening.
- Dual-pool Gemini model rotation + thread-safe quota tracking → **$0/month API cost** (~$1,200/year saved).
- Async gateway with 6-tier fuzzy name matching, Ollama/Mistral advisory layer, and auto-generated PDF reports.

**Tech Stack**: FastAPI, Python, n8n, Gemini 2.5, Redis, Docker, Azure MySQL

---

#### **AOB Scheduled Compliance Automation** — n8n Orchestration Engine
- Multi-tenant scheduled compliance engine evaluating risk bands (Very High → Low) and auto-triggering AML/Google/ACRA checks.
- Redis atomic counters for race-free tracking + SQL idempotency protection.
- Eliminated manual compliance review bottlenecks.

**Tech Stack**: Docker, Azure MySQL, Redis, Python, REST APIs

---

#### **Crescent Exchange** — Cross-Platform Fintech App
- Production currency exchange app for **iOS, Android, and Web**.
- Modular **Riverpod** state management + 40+ packages.
- 3-layer biometric security (ML Kit + TFLite + AES), Azure OCR for ID processing, real-time SignalR notifications.
- **Company Spot Award** (Dec 2025) by CTO & Managing Director.

**Tech Stack**: Flutter, Dart, Riverpod, TensorFlow, Google ML Kit, Azure OCR, SignalR, Firebase

---

#### **FaceAuth** — Multi-Tenant Biometric Verification SaaS
- Production biometric SaaS from scratch with configurable per-tenant fraud thresholds.
- **Hybrid liveness detection**: passive multi-scale fusion + active challenge-response (MediaPipe 478-point landmarks).
- AdaFace IR-101 ONNX model with 512-D embeddings in **Qdrant** vector DB (sub-millisecond matching).
- Internal + third-party REST API with full Prometheus/Grafana observability.

**Tech Stack**: Python, FastAPI, AdaFace ONNX, MiniFASNet, MediaPipe, Qdrant, Redis, Docker, PostgreSQL

---

### Analysis & Suggestions for Better Clarity (LinkedIn Optimization)

1. **Strengths**:
   - Strong focus on **production-grade, secure, multi-tenant AI systems**.
   - Excellent emphasis on security (encryption, isolation, replay protection, zero PII).
   - Good mix of **SaaS products**, compliance tools, and mobile/fintech experience.
   - Quantifiable achievements (cost savings, concurrent users, awards).

2. **Recommendations**:
   - **Consistent Formatting**: Use uniform bullet style and avoid repetition (some descriptions appear duplicated).
   - **Add Metrics Everywhere**: Include more numbers (users, latency, accuracy, cost savings) where possible.
   - **Group Similar Projects**: Consider grouping under “AI SaaS Platforms”, “AML/Compliance Solutions”, and “Biometrics & Fintech”.
   - **Top Skills Section**: Highlight top 5–8 skills prominently (FastAPI, RAG, Docker, Multi-tenancy, PostgreSQL, Redis, Ollama, etc.).
   - **Timeline**: Ensure dates are accurate and consistent.
   - **Visuals**: Add architecture diagrams, screenshots, or demo links (GitHub / live demos) to projects.

Would you like me to generate:
- A polished **full LinkedIn Experience section** version?
- A **resume-ready Markdown** version?
- Or focus on specific improvements (e.g., shortening bullets, adding keywords)?