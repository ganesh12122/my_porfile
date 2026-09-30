# Axenza AI Platform

**Role:** Platform engineer — multi-tenant SaaS for embeddable AI assistants  
**Stack:** Python (FastAPI), React, PostgreSQL + pgvector, Redis, Docker, Traefik, LiteLLM  
**Status:** SIT. Standard and context-aware bots are in product use. Agent mode is a working pilot on a live tenant app.

---

## One paragraph

Axenza AI Platform is a multi-tenant product that lets a company upload its own knowledge, configure a bot, and embed it in a website or SaaS app with one script. The same platform serves simple FAQ bots, in-app copilots that know which screen and which user they are talking to, and agents that read the signed-in user’s live APIs and can navigate the host app after the user confirms. I built this from a single sales-bot request into a commercial SaaS: tenants, plans, knowledge ingestion, a widget, model routing, and a separate agent service that does not disturb the existing chat path.

---

## What a tenant gets

1. **Sign up** a workspace.
2. **Create a bot** in one of three modes.
3. **Add knowledge** — PDFs, FAQs, URLs, or folders from Axenza Drive.
4. **Test** in Playground, then **publish a widget** for allowed origins.
5. **Embed** the script in their site or product.

| Mode | What it does |
|------|----------------|
| **Standard** | FAQ match, semantic cache, then vector search and an LLM answer. Built for support and sales. |
| **Context-aware** | The host calls `setContext` with the page and the user (role, country, plan). Retrieval stays on that screen. FAQ and cache are evidence; the model writes the reply. Shipped with Lynkis. |
| **Agent** | Same widget, different service. It calls the tenant’s APIs for the signed-in user, then answers from that JSON. Navigation is a confirm chip the host app applies. Pilot on Lynkis SIT. |

Guide bots and agent bots stay separate. An agent never goes through the guide chat path, so a bad tool call cannot change how documentation bots answer.

---

## How the agent works (the part I would walk through)

The widget is a script on the host page, not an iframe.

- **JWT apps** pass a bearer token with `setAuth`. The DevOpsPro demo uses this.
- **Cookie apps** never hand the session to Axenza. The browser already holds an HttpOnly cookie. The agent asks the page to call its own API (`host_fetch`). Only the JSON comes back.
- **Tools are per screen.** A dashboard question can only use APIs bound to that page. The profile score comes from the company-status API, not the dashboard admin list.
- **“Take me to …”** does not navigate by itself. The host sends a list of real paths. The user clicks **Open Company profile?** or **Open Admins?** and the app opens that route.
- **One pass per message.** A fast classifier picks tools, the call runs, the model writes a short reply. A LangGraph loop exists and is off. Knowledge is evidence. Live JSON wins when a tool actually ran.

On the Lynkis pilot this is proven: “what’s my profile score?” returns the live number and the next step (Upload Documents). “Take me to company profile” and “take me to admins” open the right pages after a click.

---

## Architecture

```text
Host app (setContext, and for agents: host_fetch + navigate)
        → Widget  →  Widget gateway
                ├─ Guide / context-aware  →  agent runtime  →  FAQ, cache, vector, optional graph
                └─ Agent                  →  agent mode service  →  screen tools, then LLM
Knowledge: upload / Drive  →  ingestion workers  →  embeddings (pgvector)
Models: Fast / Smart / Powerful profiles  →  LiteLLM (fallback across providers)
Edge: Docker services behind Traefik, Redis limits, SIT deploy by image tag
```

Services include the chat API, widget gateway, agent runtime, agent mode, embeddings, LLM, ingestion, and Drive (identity, tenant, file, search, share, notification).

---

## What I took it through

| Stage | What shipped |
|-------|----------------|
| Foundation | Multi-tenant UI, bots, Drive knowledge, embeddable widget, SIT deploy, rate limits |
| Admin | Model catalog tied to plans, usage events, super-admin (impersonation, audit, plans) |
| Context-aware | `setContext`, screen-scoped retrieval, DevOpsPro reference app |
| Drive hygiene | Soft delete, restore, trash retention, share-link routing, migration runbooks |
| Commercial | Trial limits, upgrade request and approve, custom plans, storage alerts |
| Models and scale | Fast / Smart / Powerful via LiteLLM; multi-worker ingestion with fair tenant claims and progress |
| Personalization | Audience filters (role, country, plan), knowledge graph, hybrid vector × graph retrieval |
| Agent | Separate service, cookie and JWT auth, screen tools, confirm-to-navigate, Lynkis SIT pilot |

---

## What I would say in an interview

The hard part was not “call an LLM.” It was making one platform safe for many products: isolate guide chat from tool-using agents, never copy an HttpOnly session onto our servers, and only let a bot call the APIs that belong on the page the user is looking at. The Lynkis pilot is the proof. The score answer is the company’s real completion number. The navigation chips are the app’s real routes, and nothing moves until the user clicks.
