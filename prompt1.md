# MASTER PROMPT — Ganesh Prasath Portfolio Website
# Give this entire prompt to: Cursor, v0.dev, Bolt, Lovable, or any AI coding agent

---

## ROLE

You are a senior frontend engineer and creative director at a top design studio. You are building a **world-class personal portfolio** for an Agentic AI Developer. This is NOT a template. This should look like it was built by someone who ships production AI systems — creative, technical, unique, and deeply intentional. Every design decision must scream "this person builds real things."

---

## TECH STACK (mandatory)

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + custom CSS variables
- **Animations**: Framer Motion (page transitions, scroll reveals, hover states)
- **3D / Canvas effects**: Three.js OR react-three-fiber (hero background — see below)
- **Fonts**: JetBrains Mono (code/accent text) + Cal Sans or Inter (body)
- **Icons**: Lucide React
- **Particles / shaders**: tsParticles or a custom WebGL canvas
- **Deployment**: Static export for GitHub Pages (`output: 'export'` in next.config.js)

---

## AESTHETIC DIRECTION

**Theme**: Dark, techy, elegant — NOT generic developer portfolio dark theme.

Think: a RAG pipeline visualized as glowing nodes. A terminal that actually types. Agent orchestration flows rendered as ambient background art. The feeling of opening a well-engineered system.

**Palette**:
- Background: `#050810` (near-black with blue tint)
- Surface cards: `#0c1220`
- Primary accent: `#00d4ff` (electric cyan)
- Secondary accent: `#7c6fff` (soft purple)
- Text primary: `#e2e8f0`
- Text secondary: `#64748b`
- Borders: `rgba(0,212,255,0.12)`

**Typography**:
- Hero name: Cal Sans or Syne, 72–96px, tight tracking
- Section headings: Inter 700, 36–48px
- Code labels, tags, eyebrows: JetBrains Mono, 11–13px, letter-spacing 0.1em
- Body: Inter 400, 16–18px, line-height 1.85

**The signature element**: An animated neural-network / agent-graph canvas in the hero — nodes that pulse and connect, representing LangGraph multi-agent orchestration. Should be subtle, ambient, NOT distracting. Cyan nodes, purple edges, slow movement.

---

## SECTIONS — BUILD ALL OF THESE

### 1. HERO SECTION

- Full viewport height
- **Background**: Animated Three.js or WebGL canvas — floating connected nodes (like a live agent graph). Nodes slowly drift and pulse. Edges glow faintly between connected nodes. Colors: cyan (#00d4ff) nodes, purple (#7c6fff) edges. Keep it at 15-20% opacity so text is readable.
- **Content** (centered left-aligned):
  - Eyebrow: `[ AGENTIC AI DEVELOPER ]` in JetBrains Mono with a blinking cursor
  - Name: `Ganesh Prasath K R` — large, bold, with the `K R` in cyan
  - Typewriter effect cycling through: `"Building autonomous LLM systems"` → `"Orchestrating multi-agent pipelines"` → `"Shipping production RAG architectures"` → `"Making AI work in the real world"`
  - Subtext: `"From Chennai. 1+ year shipping production AI. End-to-end ownership."` in muted color
  - CTAs: `[View Projects →]` (solid cyan) + `[Download Resume]` (outline) + `[Get in Touch]` (ghost)
- **Stats row** at bottom of hero with counter animation on scroll-into-view:
  - `1+` Years Production AI
  - `4+` Systems Shipped
  - `3,000+` Requests / Day
  - `$0` API Cost (Gemini Rotation)
  - `11` Docker Services (largest system)

---

### 2. ABOUT SECTION

- Split layout: left = text, right = animated skill constellation
- **Left**:
  - Section eyebrow: `// 01 · about_me`
  - Heading: "I don't build prototypes. I ship systems."
  - Story paragraphs:
    > "I'm a Chennai-based AI Engineer who crossed over from Electronics & Communication Engineering into building production AI systems. That background gives me a systems-first mindset — I design for reliability, not just demos."
    > "In just over a year at Ai4Solutions, I've gone from zero to shipping four production systems end-to-end — a multi-tenant AI Chatbot SaaS with 11 Docker services, a cloud storage platform with real-time RAG sync, two AML compliance platforms for Singapore fintech, and a biometric SaaS. Every system from scratch, full ownership."
  - Award card with glowing left border:
    ```
    🏆 SPOT AWARD — Ai4Solutions, Dec 2025
    Awarded by CTO & Managing Director for technical vision,
    end-to-end ownership, and hands-on leadership.
    ```
- **Right**: Animated radial skill graph — concentric rings with skill nodes. Core center: "Python". Inner ring: LangGraph, FastAPI, pgvector. Outer ring: Redis, Docker, Qdrant, Azure, n8n, Traefik. Nodes pulse gently. On hover, a node expands showing a tooltip with context.

---

### 3. SKILLS SECTION

- Section eyebrow: `// 02 · tech_stack`
- Heading: "What I build with"
- **Layout**: Horizontal scrolling marquee rows (two rows, opposite directions) of skill tags — like a ticker tape. Tags have category-color coding:
  - Cyan: Agentic AI (LangGraph, n8n, dify, Ollama, Gemini API, OpenAI-compatible)
  - Purple: RAG & Vector (pgvector, Qdrant, Meilisearch, nomic-embed-text, Three-tier RAG, Semantic Cache)
  - Blue: Backend (Python 3.11/3.12, FastAPI, SQLAlchemy 2.0, Alembic, REST API, Microservices)
  - Teal: DevOps (Docker, Docker Compose, Traefik v3, Azure, CI/CD, Prometheus, Grafana)
  - Orange: AI Integration (Azure OCR, AdaFace ONNX, ONNX Runtime, MediaPipe, MinIO)
- Below marquee: 4 featured skill cards with progress-style indicators and context text (not fake % bars — use a qualitative label: "Production · Daily use" or "Integrated · 2+ projects")

---

### 4. PROJECTS SECTION

- Section eyebrow: `// 03 · projects`
- Heading: "What I've shipped"
- **Layout**: Bento grid (asymmetric) — two large featured cards on top, two smaller cards below
- Each project card:
  - Dark card with subtle gradient border (cyan-to-purple) on hover
  - Project number in JetBrains Mono, muted
  - Status badge: `[ PRODUCTION ]` in green
  - Title bold, large
  - Description: 2–3 lines
  - Tech stack tags (cyan pill tags)
  - Bottom row: `Private · Available on request` with lock icon
  - On hover: card lifts with box-shadow glow, gradient border animates

**Project data**:

**01 — Custom Bot · Multi-Tenant Agentic AI Chatbot SaaS** *(FEATURED — large card)*
> Production SaaS with 11 Docker services. Companies build AI bots, upload knowledge bases, deploy embeddable widgets. Powered by LangGraph-orchestrated agentic runtime with a proprietary three-tier RAG pipeline: FAQ golden-source → privacy-guarded semantic cache → full pgvector RAG. 3,000+ req/day at $0 API cost via Gemini dual-pool rotation.
Tags: LangGraph · FastAPI · pgvector · Redis · Ollama · n8n · MinIO · Docker · React

**02 — Axenza Drive · Cloud Storage SaaS with AI-Native Knowledge Sync** *(FEATURED — large card)*
> Self-hosted multi-tenant cloud storage (8 FastAPI microservices) with automatic real-time AI knowledge sync. Files uploaded to connector-bound folders update the RAG chatbot's knowledge base instantly — zero manual re-upload. Dual-layer tenant isolation: PostgreSQL RLS + per-tenant MinIO credentials.
Tags: FastAPI · PostgreSQL · pgvector · MinIO · Meilisearch · Traefik v3 · Next.js 15

**03 — AML Background Verification & Adverse Media Screening**
> Two MAS TRM-compliant AML platforms for a Singapore fintech. Global sanctions screening, multilingual adverse media across 9 Unicode scripts, on-premise LLM risk scoring. 6-tier fuzzy name-matching, Redis atomic INCR for race-condition-free parallel tracking.
Tags: Gemini 2.5 · Ollama · n8n · Redis · PostgreSQL · FastAPI · Docker

**04 — FaceAuth · Multi-Tenant Biometric Verification SaaS**
> Biometric SaaS with hybrid liveness detection (passive multi-scale fusion + active challenge-response via MediaPipe 478-point landmarks). AdaFace IR-101 ONNX for 512-D face embeddings. Exposed as both internal product and third-party REST API.
Tags: AdaFace ONNX · MediaPipe · Qdrant · FastAPI · Redis · PostgreSQL

---

### 5. EXPERIENCE SECTION

- Section eyebrow: `// 04 · experience`
- Heading: "Where I've worked"
- **Layout**: Vertical timeline with animated progress line drawing down as you scroll
- Timeline dot glows cyan
- **Ai4Solutions** — May 2025 – Present
  - Role: Software Engineer · Agentic AI & Backend
  - Location: Chennai, India
  - Bullet points (animate in one by one on scroll):
    - Designed and delivered multi-agent AI pipelines using LangGraph and n8n, implementing tool use, retrieval augmentation, and agent reasoning across production workloads
    - Built and owned a three-tier RAG retrieval pipeline — reducing unnecessary LLM calls and preventing privacy leaks across tenants
    - Engineered dual-pool Gemini model rotation with thread-safe quota tracking: 3,000+ requests/day at $0 API cost, saving ~$1,200/year
    - Maintained full CI/CD pipelines and production observability via Prometheus metrics and Grafana dashboards with alerting
    - Integrated Azure OCR for ID document processing, ONNX-based face embedding models, and on-premise Ollama model inference

---

### 6. BLOG / WRITING SECTION

- Section eyebrow: `// 05 · writing`
- Heading: "Thinking out loud"
- Show 3 placeholder article cards with "Coming Soon" state:
  - "How I built a three-tier RAG pipeline that doesn't leak user context across tenants"
  - "LangGraph vs n8n: what I learned shipping both in the same system"
  - "Why your RAG is slower than it needs to be: semantic caching explained"
- Cards have lock/draft icon, muted styling, subtle hover
- Small note: "First articles dropping soon. Follow on LinkedIn for updates."

---

### 7. CONTACT SECTION

- Section eyebrow: `// 06 · contact`
- Heading: "Let's build something"
- **Left**: Short text + contact links (email, LinkedIn, GitHub) with icon buttons that glow on hover
- **Right**: Animated terminal widget that "types out" a JSON profile on load:
```json
{
  "name": "Ganesh Prasath K R",
  "role": "Agentic AI Developer",
  "location": "Chennai, India",
  "experience": "1+ year production AI",
  "open_to_work": true,
  "primary_stack": ["Python", "LangGraph", "FastAPI", "pgvector"],
  "looking_for": ["Agentic AI roles", "LLM platform engineering", "Remote-friendly"]
}
```
- Terminal should have fake typing animation character by character, with blinking cursor at end

---

### 8. FOOTER

- Minimal: `Ganesh Prasath K R · Chennai · 2026`
- Social icon row (GitHub, LinkedIn, Email)
- Easter egg: hovering the copyright shows `// built with intention, not a template`

---

## ANIMATIONS & INTERACTIONS — MANDATORY

1. **Page load**: Fade-in sequence — nav first, then hero eyebrow, then name (letter by letter), then rest
2. **Scroll reveals**: Every section fades + slides up (Framer Motion `whileInView`) with staggered children
3. **Hero typewriter**: Cycles through role descriptions with smooth erase-and-retype effect
4. **Stats counter**: Numbers count up from 0 when scrolled into view
5. **Project cards**: `y: -8px` lift + cyan glow shadow on hover, gradient border animates
6. **Nav**: Shrinks slightly on scroll, background blurs
7. **Skill marquee**: Two rows scrolling in opposite directions, pauses on hover
8. **Timeline line**: Draws itself downward as user scrolls using SVG stroke-dashoffset animation
9. **Terminal**: Character-by-character typing with realistic variable delay
10. **Cursor**: Custom cursor — small cyan dot with a larger trailing ring (desktop only)
11. **Section transitions**: Subtle noise/grain texture overlay adds depth without being distracting
12. **Mobile**: All animations respect `prefers-reduced-motion`. Hamburger menu with smooth slide-in drawer.

---

## CONTACT DETAILS (use exactly)

- Email: ganeshprasath12122@gmail.com
- Phone: +91 8778196537
- Location: Chennai, India
- LinkedIn: [UPDATE WITH ACTUAL URL]
- GitHub: [UPDATE WITH ACTUAL URL]
- Resume file: `Ganesh_Prasath_Ai_engineer_resume.pdf` (place in `/public` folder)

---

## DEPLOYMENT NOTES (GitHub Pages)

- Use `output: 'export'` in `next.config.js`
- Add `basePath` if deploying to a subpath repo (not needed for `username.github.io`)
- All images: use `unoptimized: true` in next config for static export
- Add a `.nojekyll` file in `/public` to prevent GitHub's Jekyll processing
- GitHub Actions workflow for auto-deploy on push to `main`

---

## QUALITY BAR

Before considering this done, check:
- [ ] Loads in under 2 seconds
- [ ] Looks stunning on mobile (375px) and desktop (1440px)
- [ ] All animations are smooth (60fps), no jank
- [ ] No stock-looking template vibes anywhere
- [ ] The hero canvas doesn't kill performance (use `requestAnimationFrame` properly, cap at 60fps)
- [ ] Dark theme is the only theme (no light mode toggle needed)
- [ ] Typography hierarchy is clean and intentional
- [ ] Someone opening this for 5 seconds should understand: "this person builds serious AI systems"

---

*This prompt was crafted specifically for Ganesh Prasath K R — Agentic AI Developer, Chennai.*
*Do not water down any of these requirements. Build it fully.*