# Complete Project Summary & Developer's Journey
**Project:** Axenza Sanctions & Adverse Media Search Service (Background Process Automation)
**Author:** ganesh

---

## 📅 The Genesis: Why I Built This

Background verification is historically a nightmare of manual labor. Teams of compliance officers spend hours Googling names, checking sanctions lists, and reading through news articles to figure out if a potential employee or a partner company is involved in fraud, money laundering, or terrorism financing. It's slow, expensive, and prone to human error. 

My goal was to build a fully automated, highly scalable, and intelligent background verification engine. I wanted a system that could take a payload of 400 employees and a parent company from a Kafka topic, process them all in parallel, and return a clean, deterministic risk score for each entity.

This is the story of how the **Axenza Sanctions & Adverse Media Search Service** was born.

---

## 🏗️ The Architecture: Orchestrating the Chaos

From day one, I knew this couldn't just be a massive, monolithic Python script. The process is too complex and involves too many external moving parts. I chose a **microservices architecture** backed by **n8n** for visual workflow orchestration.

### 1. The Orchestration Layer (n8n & Kafka)
I built the nervous system using n8n workflows. It starts with the `kafka_consumer_main_workflow`. When a verification request hits our Kafka topic (`ai-background-process-topic`), n8n picks it up and routes it. 

I split the processing into dedicated sub-workflows:
- `individual_employee_workflow`
- `individual_company_workflow`

This allowed the system to scale massively. However, scaling brought its own challenges. Early on, when processing hundreds of entities in parallel, I crashed our Azure PostgreSQL database with a `remaining connection slots are reserved for roles with the SUPERUSER attribute` error. n8n was opening too many concurrent DB connections to update the `activity_log`. I solved this by implementing PgBouncer (connection pooling) and optimizing our batching logic, making the system bulletproof under heavy load.

### 2. The AML & Sanctions Screening (`aml_search`)
For official watchlists, I integrated with OpenSanctions/Yente. This workflow queries the entity against global sanctions lists (OFAC, UN, EU). It’s fast and authoritative, but it's only half the battle. A person might not be on a sanctions list yet, but they might have been arrested for embezzlement yesterday. That’s where the Adverse Media search comes in.

### 3. The Adverse Media Search Service (`google_search`)
This was one of the most exciting services to build. I wrote a FastAPI microservice dedicated purely to finding bad news on the internet. 

The service categorizes searches into specific crime types: Financial Crimes, Money Laundering, Corruption/Bribery, and Sanctions. It dynamically constructs search queries to look for specific keywords ("convicted", "indicted", "wire fraud").

**A major architectural win:** I designed this service to be completely modular at the backend level. Currently, it supports being toggled between using **Google's Gemini AI (with Search Grounding)** and **Dedicated SERP APIs (like Searlo)**. By keeping the API contract identical (`GoogleSearchResponse` with `SearchResult` lists), the downstream systems never care which search backend is active. It gives us absolute flexibility over cost and performance.

### 4. The Brain: The Decision Engine (`decision_engine`)
This is my crowning achievement in this project. 

Getting 10 Google search results back is easy. Figuring out if those results actually mean the person is a criminal is the hard part. A naive system flags anyone whose name appears near the word "fraud". That means a "Chief Fraud Prevention Officer" gets flagged as a criminal. 

I built the `decision_engine` as a sophisticated, deterministic rules engine combined with optional AI validation:
- **Fuzzy Name Matching:** It handles reversed names, missing middle initials, and partial matches to ensure the article is actually about our subject.
- **False-Positive Filtering:** I implemented a strict `FALSE_POSITIVE_INDICATORS` list. If the text says "compliance officer" or "anti-money laundering training", the engine safely ignores the hit.
- **Calibrated Confidence Scoring:** It mathematically weighs the severity of the words. "Convicted" scores much higher than "alleged".
- **AI Fallback:** I built integration support for local and remote LLMs (Ollama, OpenAI, vLLM) so that an AI "compliance analyst" can double-check the deterministic engine's work.

---

## 🚀 The Result

What used to take a human compliance officer 30-45 minutes per entity now happens in seconds. 

The system reads the Kafka event, branches out to Yente for sanctions, hits the `google_search` service for adverse media, aggregates all the evidence, and passes it through the `decision_engine`. It then writes a final, clean risk status (from `NONE` to `CRITICAL`) back into the `activity_log` database.

Looking back at the journey—from designing the n8n webhook architecture to battling database connection limits, and finally perfecting the false-positive filtering in the Decision Engine—it has been incredibly rewarding. The system is modular, highly scalable, and structurally sound enough to handle compliance for thousands of entities a day.

*End of Log.*
