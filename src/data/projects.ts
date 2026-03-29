import { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    slug: 'sttm-auto-match',
    name: 'STTM Auto-Match System',
    tagline: 'Enterprise-grade Source-to-Target data validation at scale',
    category: 'Data & ML',
    featured: true,
    highlight: 'from-indigo-500 to-violet-500',
    description:
      'An enterprise data integration validation platform that automatically maps, transforms, and compares data between source and target systems — replacing days of manual reconciliation with a fully automated pipeline.',
    problem:
      'Enterprise data migration teams spent days manually creating Excel mappings, running transformations by hand, and comparing expected vs. actual data row by row. For datasets with millions of records, this was error-prone and unsustainable.',
    solution:
      'Built a full pipeline that parses Excel-based field mapping definitions, connects to multiple data sources, applies field-level transformations (1:1, N:1, 1:N, M:N), validates data against business rules, and compares rows by composite keys — with AI-powered mismatch analysis and async job execution.',
    features: [
      'Handles 5M+ rows using chunked batch processing (40–80 MB RAM)',
      'Supports SQL Server, Cosmos DB, OData/Dynamics 365, Azure Service Bus',
      'AI-generated transformations via Claude when not in registry',
      'Async job queue with real-time progress tracking and resume-on-failure',
      'Validation rules: null checks, type, length, format, enum (R001–R006)',
      'Mismatch analysis with root cause grouping and fix suggestions',
      'Scheduled recurring jobs via APScheduler',
      'Version control and approval workflow for STTM documents',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI', 'PostgreSQL'] },
      { layer: 'AI', items: ['Claude (Anthropic)', 'Google Gemini'] },
      { layer: 'Cloud', items: ['Azure Cosmos DB', 'Azure Service Bus', 'Azure Blob Storage'] },
      { layer: 'Data', items: ['SQL Server', 'OData / Dynamics 365', 'pyodbc', 'Pydantic'] },
      { layer: 'Infra', items: ['APScheduler', 'Connection Pooling', 'Async Workers'] },
    ],
    impact: [
      'Reduced data validation time from days to minutes for enterprise migrations',
      'Processes 5M+ records per run with minimal memory footprint',
      'Eliminated manual row-by-row comparison in cross-system migrations',
      'Applicable to any ERP, CRM, or finance system migration project',
    ],
  },
  {
    id: 2,
    slug: 'magicDrive-ai-platform',
    name: 'Multi-Service AI Platform',
    tagline: 'Modular AI agents for Knowledge Base, Legal, Sales & Appointments',
    category: 'AI / LLM',
    featured: true,
    highlight: 'from-violet-500 to-purple-600',
    description:
      'A modular, multi-service AI platform where each module handles a specific business function — Knowledge Base Q&A, Legal Query handling, Sales/Support conversations, and Appointment Scheduling — all exposed as independent microservices.',
    problem:
      'Businesses need AI for multiple departments but cannot afford one monolithic chatbot that tries to do everything. Each department has different context, tone, and data requirements.',
    solution:
      'Built a plug-and-play architecture where each domain runs as an independent FastAPI microservice with its own prompts, RAG pipeline, and data sources — all sharing common infrastructure.',
    features: [
      'Independent microservices per business domain',
      'Swappable LLMs (Claude, OpenAI, Gemini) per module',
      'Domain-specific prompt engineering and context management',
      'Conversation history maintained per session in Cosmos DB',
      'Shared logging and observability infrastructure',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'AI', items: ['LangChain', 'LangGraph', 'Claude', 'OpenAI', 'Gemini'] },
      { layer: 'Cloud', items: ['Azure Cosmos DB'] },
    ],
    impact: [
      'Enterprises can deploy AI across multiple departments from one codebase',
      'Each department gets a domain-specific bot, not a generic chatbot',
      'Easily extendable — adding a new module takes hours, not weeks',
    ],
  },
  {
    id: 3,
    slug: 'insurance-chatbot-api',
    name: 'Insurance Chatbot API',
    tagline: 'Secure, production-ready chatbot for insurance companies',
    category: 'Backend API',
    highlight: 'from-cyan-500 to-blue-500',
    description:
      'A secure, production-ready chatbot API for insurance companies with OAuth2 authentication, admin management panel, and full conversation logging.',
    problem:
      'Insurance companies receive high volumes of repetitive queries about policies, claims, and eligibility. Manual handling is expensive and slow — and existing generic chatbots lack the domain specificity needed.',
    solution:
      'Built a FastAPI backend with OAuth2 auth, LLM-powered responses grounded in insurance policy documents, an admin API for configuration and monitoring, and Azure Cosmos DB for audit-ready conversation storage.',
    features: [
      'OAuth2 token-based authentication for secure API access',
      'LLM responses grounded in insurance policy knowledge base',
      'Admin API to manage bot config and view conversation logs',
      'Full conversation storage for compliance and audit',
      'Dev and production environment separation',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI', 'OAuth2'] },
      { layer: 'AI', items: ['OpenAI', 'Claude'] },
      { layer: 'Cloud', items: ['Azure Cosmos DB'] },
    ],
    impact: [
      'Handles policyholder queries 24/7 without human agents',
      'Auditable conversation history for compliance requirements',
      'Reduces call center inbound volume significantly',
    ],
  },
  {
    id: 4,
    slug: 'doctor-appointments-api',
    name: 'Medical Scheduling API',
    tagline: 'Healthcare appointment scheduling and medical data management',
    category: 'Backend API',
    highlight: 'from-green-500 to-teal-500',
    description:
      'A healthcare appointment scheduling and medical data management API designed for clinics and healthcare providers — programmatic booking, availability checks, and patient record access.',
    problem:
      'Manual scheduling over phone and email is inefficient, error-prone, and hard to scale. Clinics needed a reliable API to power their digital scheduling workflows.',
    solution:
      'Built a RESTful API with full CRUD for appointments, availability management, and patient records — backed by Azure Cosmos DB and ready to plug into any front-end or third-party scheduling tool.',
    features: [
      'Create, update, and cancel appointments via REST API',
      'Availability and slot management',
      'Patient record storage and retrieval',
      'Azure Cosmos DB for scalable, schema-flexible storage',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'Cloud', items: ['Azure Cosmos DB'] },
    ],
    impact: [
      'Enables clinics to digitize booking workflows end-to-end',
      'Pluggable into any telehealth or patient-facing front-end',
      'Removes phone/email bottleneck for appointment management',
    ],
  },
  {
    id: 5,
    slug: 'email-sales-lead-pipeline',
    name: 'Email Sales Lead Pipeline',
    tagline: 'Emails → structured CRM records, automatically',
    category: 'AI / LLM',
    featured: true,
    highlight: 'from-orange-500 to-pink-500',
    description:
      'An automated pipeline that reads incoming sales emails, uses LLMs to extract structured lead data, and pushes records directly into Salesforce CRM — zero manual data entry.',
    problem:
      'Sales teams were manually reading inquiry emails and copying lead info (name, company, intent, contact) into CRM — slow, inconsistent, and a poor use of sales time.',
    solution:
      'Built an Azure WebJob that polls the email inbox, sends each email to an LLM (Claude/DeepSeek) for structured extraction, validates the output, and inserts it into Salesforce via API — with error logging to Cosmos DB.',
    features: [
      'Continuous email polling via Azure WebJob',
      'LLM-powered extraction of name, company, intent, contact info',
      'Direct Salesforce CRM record creation via API',
      'Error logging and failed record review via Cosmos DB',
      'Supports Claude and DeepSeek as extraction models',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python'] },
      { layer: 'AI', items: ['Claude (Anthropic)', 'DeepSeek'] },
      { layer: 'Cloud', items: ['Azure WebJobs', 'Azure Cosmos DB'] },
      { layer: 'Integration', items: ['Salesforce API'] },
    ],
    impact: [
      'Sales teams get CRM records without touching an email',
      'Consistent, structured data quality vs manual copy-paste',
      'Scales to any email volume without adding headcount',
    ],
  },
  {
    id: 6,
    slug: 'spanish-bilingual-chatbot',
    name: 'Spanish Bilingual Chatbot API',
    tagline: 'AI customer support for Spanish & English markets with lead capture',
    category: 'AI / LLM',
    highlight: 'from-yellow-500 to-orange-500',
    description:
      'A customer-facing chatbot API supporting both Spanish and English, with document upload processing and automatic Salesforce lead capture from conversations.',
    problem:
      'Businesses serving Spanish-speaking markets lacked AI support tools that could handle bilingual conversations, process documents, and capture leads simultaneously.',
    solution:
      'Built a FastAPI backend with carefully engineered bilingual prompts, Google Cloud Document AI for uploaded document extraction, and automatic lead capture from conversations pushed to Salesforce.',
    features: [
      'Seamless Spanish/English bilingual conversation handling',
      'Uploaded document processing (IDs, forms) via Document AI',
      'Automatic lead extraction and Salesforce record creation',
      'Context-aware responses maintained across conversation turns',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'AI', items: ['Claude (Anthropic)', 'DeepSeek'] },
      { layer: 'Cloud', items: ['Google Cloud Document AI'] },
      { layer: 'Integration', items: ['Salesforce API'] },
    ],
    impact: [
      'Serves bilingual customers with native-quality language handling',
      'Captures leads while assisting users — no separate lead form needed',
      'Applicable to insurance, real estate, and financial services',
    ],
  },
  {
    id: 7,
    slug: 'real-estate-ai-assistant',
    name: 'Real Estate AI Assistant',
    tagline: 'Natural language property search with interactive map',
    category: 'Full Stack',
    featured: true,
    highlight: 'from-blue-500 to-cyan-500',
    description:
      'A full-stack AI-powered real estate assistant where users describe what they\'re looking for in natural language and see matching properties on an interactive map — built with React, LangGraph, and Leaflet.',
    problem:
      'Traditional real estate search is filter-based and rigid. Buyers and renters can\'t just say "3-bedroom near good schools under $500K" and get relevant results — they have to manually apply 10 different filters.',
    solution:
      'Built a React frontend with Leaflet.js map integration and a LangGraph agent backend that parses natural language queries, applies filters intelligently, and renders results spatially on the map.',
    features: [
      'Natural language property search ("near good schools", "quiet neighborhood")',
      'Interactive Leaflet.js map with property pins',
      'LangGraph agent handles multi-turn conversation for refinement',
      'Conversational guided journey for buyers and renters',
      'Fully responsive — mobile-friendly map and search interface',
    ],
    techStack: [
      { layer: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Leaflet.js'] },
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'AI', items: ['LangGraph', 'LangChain', 'OpenAI', 'Claude'] },
    ],
    impact: [
      'Eliminates the frustration of rigid filter-based property search',
      'Visual map experience beats list-based search for spatial decisions',
      'Applicable to any property marketplace or agency platform',
    ],
  },
  {
    id: 8,
    slug: 'rag-knowledge-base',
    name: 'RAG Knowledge Base System',
    tagline: 'Turn any document collection into a conversational knowledge base',
    category: 'RAG Systems',
    highlight: 'from-violet-500 to-indigo-500',
    description:
      'A Retrieval-Augmented Generation (RAG) system that indexes large document collections and lets users query them in natural language — getting precise, source-grounded answers.',
    problem:
      'Large organizations have massive document libraries (policies, manuals, SOPs) that nobody can efficiently search. Keyword search misses context; manual lookup is too slow.',
    solution:
      'Built a pipeline that ingests documents, chunks and embeds them into a vector database, then retrieves the most relevant chunks at query time to provide grounded LLM answers with correctness scoring.',
    features: [
      'Document ingestion, chunking, and vector embedding pipeline',
      'Semantic search via Chroma vector database',
      'Grounded LLM answers (no hallucinations — answers cite source)',
      'Correctness scoring to evaluate response quality',
      'FastAPI REST interface for easy integration',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'AI', items: ['LangChain', 'OpenAI', 'Claude'] },
      { layer: 'Database', items: ['Chroma (vector DB)', 'Azure Cosmos DB'] },
    ],
    impact: [
      'Any document collection becomes conversationally searchable in minutes',
      'Support teams get instant, accurate answers from documentation',
      'Reduces time spent searching internal knowledge from hours to seconds',
    ],
  },
  {
    id: 9,
    slug: 'rag-evaluator',
    name: 'RAG Evaluator / AI Audit System',
    tagline: 'Quantitative quality metrics for RAG pipelines before production',
    category: 'RAG Systems',
    highlight: 'from-pink-500 to-rose-500',
    description:
      'A comprehensive evaluation suite for RAG pipelines that measures response quality across faithfulness, answer relevancy, context recall, and correctness — with trend tracking and visual dashboards.',
    problem:
      'Teams building RAG systems had no objective way to measure quality. "It feels good" is not a deployment standard. Without metrics, regressions go undetected.',
    solution:
      'Integrated the Ragas evaluation framework with a REST API, Azure Cosmos DB result storage, and Matplotlib dashboards — enabling teams to run evaluations in CI/CD and track quality over time.',
    features: [
      'Metrics: faithfulness, answer relevancy, context precision/recall, correctness',
      'REST API for integration with CI/CD pipelines',
      'Result storage and trend tracking in Azure Cosmos DB',
      'Matplotlib visualization plots for metric dashboards',
      'Supports comparison of different RAG configurations',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'AI', items: ['Ragas', 'LangChain'] },
      { layer: 'Data', items: ['Pandas', 'Matplotlib', 'Azure Cosmos DB'] },
    ],
    impact: [
      'Teams can deploy RAG to production with confidence, not guesswork',
      'Catches quality regressions before users do',
      'Enables data-driven decisions on chunk size, model, and retriever choice',
    ],
  },
  {
    id: 10,
    slug: 'document-pdf-processing-api',
    name: 'Document & PDF Processing API',
    tagline: 'Automated structured data extraction from any document type',
    category: 'AI / LLM',
    highlight: 'from-teal-500 to-green-500',
    description:
      'A document intelligence API that ingests PDFs, scanned forms, images, and ID documents and extracts structured, machine-readable data — replacing manual data entry completely.',
    problem:
      'Businesses receive thousands of documents (invoices, passports, medical forms, applications) requiring manual data entry. This is slow, costly, and error-prone at scale.',
    solution:
      'Built a parallel processing pipeline using Google Cloud Document AI and Azure Form Recognizer for OCR and entity extraction, returning structured JSON from any document type.',
    features: [
      'Supports PDFs, scanned images, ID documents, and forms',
      'Google Cloud Document AI for entity and layout extraction',
      'Azure Form Recognizer for structured form fields',
      'Parallel batch processing for high document volumes',
      'Returns clean structured JSON output',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'AI', items: ['Google Cloud Document AI', 'Azure Form Recognizer'] },
      { layer: 'Processing', items: ['Parallel Processing', 'Batch Pipeline'] },
    ],
    impact: [
      'Eliminates manual data entry for document-heavy workflows',
      'Handles invoices, passports, medical forms, and applications uniformly',
      'Scales to thousands of documents per hour via batch processing',
    ],
  },
  {
    id: 11,
    slug: 'audio-ai-detection',
    name: 'Audio AI Detection & Transcription',
    tagline: 'Voice transcription, speaker detection, and audio anomaly analysis',
    category: 'AI / LLM',
    highlight: 'from-purple-500 to-pink-500',
    description:
      'A multi-component audio intelligence platform covering high-accuracy voice transcription, speaker detection, and audio anomaly/fraud detection — exposed as REST APIs.',
    problem:
      'Call centers and security teams needed automated transcription, speaker detection, and fraud flagging for audio streams — without expensive proprietary software.',
    solution:
      'Built using OpenAI Whisper (both Python and optimized C++ via whisper.cpp) with FastAPI endpoints for real-time and batch audio processing, plus speaker diarization and anomaly detection.',
    features: [
      'High-accuracy transcription via OpenAI Whisper',
      'C++ whisper.cpp for performance-critical deployments',
      'Speaker diarization and voice activity detection',
      'Audio anomaly and fraud pattern detection',
      'Supports multiple audio formats',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI', 'C++'] },
      { layer: 'AI', items: ['OpenAI Whisper', 'whisper.cpp'] },
      { layer: 'Integration', items: ['Google APIs'] },
    ],
    impact: [
      'Automates call center QA and compliance monitoring',
      'Detects fraud patterns in phone-based interactions',
      'Provides accessibility transcription for recorded content',
    ],
  },
  {
    id: 12,
    slug: 'chatbot-logging-search',
    name: 'Chatbot Logging & Search API',
    tagline: 'Observability infrastructure for production chatbot systems',
    category: 'Backend API',
    highlight: 'from-slate-500 to-gray-600',
    description:
      'Logging infrastructure and search API to capture, store, retrieve, and analyze chatbot conversations and errors — the observability backbone for multiple deployed chatbot systems.',
    problem:
      'Without structured logging, debugging production chatbots meant searching through flat log files. There was no way to query by user, session, date range, or error type.',
    solution:
      'Built a structured logging service that writes conversations and errors to Azure Cosmos DB with a consistent schema, plus a search API with filtered query endpoints.',
    features: [
      'Structured conversation and error logging to Cosmos DB',
      'Search API with filters: user, date, session, error type',
      'Serves as shared logging backbone across multiple chatbot projects',
      'Supports audit trail requirements',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'Cloud', items: ['Azure Cosmos DB'] },
    ],
    impact: [
      'Dev teams can debug production chatbot issues in minutes, not hours',
      'Product teams can analyze conversation patterns at scale',
      'Provides audit-ready logs for compliance requirements',
    ],
  },
  {
    id: 13,
    slug: 'mental-health-support-app',
    name: 'Mental Health Support App',
    tagline: 'Anonymous AI-powered mental wellness support platform',
    category: 'Hackathon',
    featured: true,
    highlight: 'from-rose-500 to-pink-500',
    description:
      'An anonymous mental health support platform providing empathetic AI responses, personalized coping strategies, and professional resource referrals — built during a hackathon.',
    problem:
      'Many people experiencing mental health challenges lack immediate access to professional help. The gap between "feeling bad" and "getting help" is often too wide, especially after hours.',
    solution:
      'Built a Streamlit-based app with Google Gemini LLM using carefully engineered empathetic prompts that generate coping strategies tailored to the user\'s situation, with no personal data stored — fully anonymous.',
    features: [
      'Anonymous — no login, no personal data stored',
      'Empathetic LLM responses with carefully crafted prompts',
      'Personalized coping strategy generation per situation',
      'Professional resource and hotline directory',
      'Simple, accessible Streamlit UI',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'Frontend', items: ['Streamlit'] },
      { layer: 'AI', items: ['Google Gemini', 'Google Generative AI'] },
    ],
    impact: [
      'Provides immediate mental wellness support when professionals aren\'t available',
      'Hackathon project demonstrating AI for social good',
      'Fully anonymous — removes the biggest barrier to seeking help',
    ],
  },
  {
    id: 14,
    slug: 'appointment-scheduling-agent',
    name: 'Appointment Scheduling AI Agent',
    tagline: 'Agentic AI that autonomously books and manages appointments',
    category: 'AI / LLM',
    highlight: 'from-blue-500 to-indigo-500',
    description:
      'An agentic AI system that autonomously handles appointment booking through natural conversation — understanding availability, preferences, and confirmation steps without human involvement.',
    problem:
      'Small and medium businesses spend significant time managing scheduling manually — phone calls, back-and-forth emails, and calendar conflicts consume staff time daily.',
    solution:
      'Built a LangGraph agent that maintains multi-turn conversation state, checks availability, proposes times, handles rescheduling and cancellation, and confirms bookings autonomously.',
    features: [
      'Multi-turn conversation with full state management via LangGraph',
      'Autonomous availability checking and time slot proposal',
      'Handles rescheduling, cancellation, and conflict resolution',
      'Configurable for any service business domain',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'AI', items: ['LangGraph', 'LangChain', 'OpenAI', 'Claude'] },
    ],
    impact: [
      'Automates 100% of routine scheduling conversations',
      'Available 24/7 — no staff needed for booking',
      'Applicable to clinics, salons, law offices, consultancies',
    ],
  },
  {
    id: 15,
    slug: 'insurance-eligibility-agent',
    name: 'Insurance Eligibility Check Agent',
    tagline: 'Real-time insurance eligibility verification via AI conversation',
    category: 'AI / LLM',
    highlight: 'from-cyan-500 to-teal-500',
    description:
      'An AI agent that verifies insurance eligibility in real time through conversational queries — replacing manual verification calls and portal lookups.',
    problem:
      'Healthcare providers and insurance reps spend significant time on eligibility verification calls and portal lookups — a repetitive, manual process that delays patient care.',
    solution:
      'Built a LangChain agent that orchestrates the eligibility verification flow, connects to insurance data sources, and returns coverage details, co-pay information, and eligibility status conversationally.',
    features: [
      'Conversational eligibility verification flow',
      'Returns coverage details, co-pay, and eligibility status',
      'Handles multi-step verification logic autonomously',
      'FastAPI endpoint for easy integration into existing systems',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'AI', items: ['LangChain', 'OpenAI', 'Claude'] },
    ],
    impact: [
      'Eliminates manual verification calls for healthcare providers',
      'Speeds up patient check-in with instant eligibility confirmation',
      'Reduces administrative burden on insurance operations teams',
    ],
  },
  {
    id: 16,
    slug: 'nonprofit-chatbot',
    name: 'Non-Profit Organization Chatbot',
    tagline: 'Automated FAQ and donor inquiry handling for non-profits',
    category: 'Backend API',
    highlight: 'from-emerald-500 to-green-500',
    description:
      'A chatbot API tailored for a non-profit organization to automatically handle donor and public inquiries, FAQs, and informational requests — reducing the burden on volunteers.',
    problem:
      'Non-profits run lean — volunteer time is precious. Repetitive website inquiries (donation process, programs, events, contacts) consume hours that should go toward actual mission work.',
    solution:
      'Built a lightweight FastAPI chatbot with non-profit-specific knowledge base and LLM-powered responses, optimized for budget-conscious deployment.',
    features: [
      'LLM answers about programs, donations, events, and contacts',
      'Non-profit-specific knowledge base and prompt engineering',
      'Lightweight deployment suitable for non-profit budgets',
      'Easy to update knowledge base without code changes',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'AI', items: ['LLMs (OpenAI / Claude)'] },
    ],
    impact: [
      'Frees volunteers from answering repetitive inquiries',
      'Provides 24/7 website support for donors and the public',
      'Low-cost deployment fitting non-profit budget constraints',
    ],
  },
  {
    id: 17,
    slug: 'web-scraper-crawler',
    name: 'AI-Powered Web Scraper & Crawler',
    tagline: 'Turn any website into a queryable knowledge base',
    category: 'Data & ML',
    highlight: 'from-amber-500 to-yellow-500',
    description:
      'A suite of web crawling tools that scrape websites at scale, index the content, and expose it through AI-powered search — turning any website into a queryable knowledge base.',
    problem:
      'External websites and portals have valuable information (scholarships, listings, documentation) that isn\'t available via API and is too large to read manually.',
    solution:
      'Built crawlers using BeautifulSoup and Pydantic AI for structured extraction, indexed content via Haystack/LangChain for semantic search, and exposed results through a Streamlit UI and REST API.',
    features: [
      'Recursive website crawling with configurable depth',
      'Pydantic AI for structured data validation and extraction',
      'Haystack/LangChain indexing for semantic search',
      'Streamlit UI for interactive querying',
      'REST API for programmatic access to indexed data',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'Scraping', items: ['BeautifulSoup', 'Pydantic AI'] },
      { layer: 'AI', items: ['Haystack', 'LangChain'] },
      { layer: 'Frontend', items: ['Streamlit'] },
    ],
    impact: [
      'Any website becomes conversationally searchable without an API',
      'EdTech teams can aggregate scholarship and course data automatically',
      'Internal teams can search external documentation semantically',
    ],
  },
  {
    id: 18,
    slug: 'gcp-vs-ollama-cost-analysis',
    name: 'GCP vs Ollama Cost Analysis',
    tagline: 'Benchmarking cloud vs local LLM deployment costs',
    category: 'Data & ML',
    highlight: 'from-lime-500 to-green-500',
    description:
      'An analysis tool that benchmarks and compares the performance, latency, and cost of running LLMs on Google Cloud Platform versus locally via Ollama — helping teams make informed infrastructure decisions.',
    problem:
      'Engineering teams making infrastructure decisions for AI deployment had no objective way to compare cloud vs. local LLM costs and performance for their specific workloads.',
    solution:
      'Built a benchmarking tool that runs identical prompts against GCP-hosted and Ollama local models, measures response time and token throughput, calculates cost per query, and generates comparison reports.',
    features: [
      'Side-by-side benchmark: GCP LLMs vs local Ollama models',
      'Measures latency, token throughput, and output quality',
      'Cost-per-query calculation based on current pricing models',
      'Excel and Python-based comparison reports',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python'] },
      { layer: 'Analysis', items: ['Pandas', 'SQL', 'Excel'] },
      { layer: 'Integration', items: ['Google Cloud APIs', 'Ollama'] },
    ],
    impact: [
      'Helps AI teams choose the right infrastructure with data, not guesswork',
      'Directly informs cloud vs. on-premise LLM build/buy decisions',
      'Quantifies cost savings of local deployment for high-volume use cases',
    ],
  },
  {
    id: 19,
    slug: 'graphrag-ticket-query',
    name: 'GraphRAG Database Query App',
    tagline: 'Query databases and ticket systems in plain English',
    category: 'RAG Systems',
    highlight: 'from-indigo-500 to-blue-500',
    description:
      'A Graph-based RAG system that lets users query structured databases and ticket/support systems using natural language — no SQL required.',
    problem:
      'Operations and support teams could not query their own databases or ticket systems without developer help. Writing SQL is a barrier that slows down data-driven decisions.',
    solution:
      'Built a GraphRAG system that models structured data as a knowledge graph, maps natural language queries to graph traversals, and synthesizes results via LLM into readable answers.',
    features: [
      'Natural language to graph query translation',
      'Handles structured databases and ticket systems',
      'LLM synthesis of results into readable answers',
      'FastAPI REST interface for integration',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'AI', items: ['GraphRAG', 'LangChain', 'LLMs'] },
    ],
    impact: [
      'Non-technical teams can query databases without SQL',
      'Support ops can search ticket history conversationally',
      'Business analysts get self-serve data access via natural language',
    ],
  },
  {
    id: 20,
    slug: 'label-recognition-gemini',
    name: 'Label Recognition with Gemini',
    tagline: 'AI-powered product label reading for logistics and retail',
    category: 'AI / LLM',
    highlight: 'from-red-500 to-orange-500',
    description:
      'A computer vision system that reads and interprets product and package labels using Google Gemini\'s multimodal capabilities — automating label data extraction for logistics, retail, and compliance.',
    problem:
      'Manual label scanning and data entry in logistics and retail is slow, error-prone, and hard to scale. Traditional OCR struggles with complex label layouts and mixed content.',
    solution:
      'Leveraged Gemini\'s multimodal (vision + language) capabilities through a LangChain pipeline that extracts structured label fields (product name, barcode, ingredients, dates) and returns typed JSON.',
    features: [
      'Multimodal label understanding via Gemini Vision',
      'LangChain pipeline for structured field extraction',
      'Batch and single-image processing endpoints',
      'Returns structured JSON with label data',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'AI', items: ['Google Gemini', 'LangChain'] },
    ],
    impact: [
      'Automates label data extraction for logistics workflows',
      'Supports compliance verification of label content at scale',
      'Handles complex, mixed-content labels that traditional OCR misses',
    ],
  },
  {
    id: 21,
    slug: 'report-clustering',
    name: 'Report Clustering & Analysis',
    tagline: 'Automatically surface patterns in large volumes of text reports',
    category: 'Data & ML',
    highlight: 'from-violet-500 to-fuchsia-500',
    description:
      'A machine learning system that groups large volumes of text reports and sentences by semantic similarity, identifies patterns, and generates cluster-level summaries with visual dashboards.',
    problem:
      'Teams receiving hundreds of reports (incidents, support tickets, feedback) had no way to quickly see top themes and patterns. Manual categorization doesn\'t scale.',
    solution:
      'Built an ML pipeline using TF-IDF and sentence embeddings with K-Means clustering, storing assignments in Cosmos DB and surfacing patterns via Matplotlib dashboards and a REST API.',
    features: [
      'TF-IDF and sentence embedding vectorization',
      'K-Means and hierarchical clustering',
      'Cluster distribution visualization with Matplotlib',
      'Result storage and trend tracking in Azure Cosmos DB',
      'REST API for programmatic access',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'FastAPI'] },
      { layer: 'ML', items: ['Scikit-learn', 'Pandas', 'Matplotlib'] },
      { layer: 'Cloud', items: ['Azure Cosmos DB'] },
    ],
    impact: [
      'Ops teams spot recurring incident patterns without manual tagging',
      'Product teams analyze user feedback themes at scale automatically',
      'Support teams identify top issue categories without reading everything',
    ],
  },
  {
    id: 22,
    slug: 'multi-agent-crewai',
    name: 'Multi-Agent AI System',
    tagline: 'Collaborative AI agents using CrewAI and OpenAI Swarm',
    category: 'AI / LLM',
    highlight: 'from-sky-500 to-blue-500',
    description:
      'A multi-agent orchestration system where specialized AI agents collaborate in parallel to complete complex, multi-step tasks — built using CrewAI and OpenAI Swarm frameworks.',
    problem:
      'Single LLM calls cannot handle tasks requiring multiple specialized capabilities (research, write, review, validate). Complex workflows need coordinated agent collaboration.',
    solution:
      'Implemented CrewAI for role-based agent definitions and OpenAI Swarm for agent handoffs and parallel execution — with Flask/FastAPI orchestrating the crew and returning final results.',
    features: [
      'Role-based agent definitions (researcher, writer, reviewer)',
      'OpenAI Swarm for parallel agent execution and handoffs',
      'Complex multi-step workflow automation',
      'Google Cloud APIs as data sources for agents',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'Flask', 'FastAPI'] },
      { layer: 'AI', items: ['CrewAI', 'OpenAI Swarm', 'Google Cloud APIs'] },
    ],
    impact: [
      'Automates complex content generation and review workflows',
      'Multi-stage document processing with specialized agent roles',
      'Foundation for exploring and shipping agentic AI architectures',
    ],
  },
  {
    id: 23,
    slug: 'genai-pocs',
    name: 'GenAI LLM Evaluation POCs',
    tagline: 'Benchmarking Claude, Gemini, and DeepSeek across real tasks',
    category: 'AI / LLM',
    highlight: 'from-neutral-500 to-slate-500',
    description:
      'A collection of proof-of-concept integrations evaluating Claude, Google Gemini, and DeepSeek across different task types — used to make informed model selection decisions for production projects.',
    problem:
      'Before committing to an LLM for production, teams needed objective evaluation of capabilities, latency, cost, and output quality across their specific use cases.',
    solution:
      'Built direct API integrations with each provider, tested on task-specific prompts (summarization, extraction, Q&A, code generation), and compared results for production decision-making.',
    features: [
      'Claude (Anthropic), Gemini, and DeepSeek integrations',
      'Task-specific evaluation: summarization, extraction, Q&A, code gen',
      'Response quality, latency, and cost comparison',
      'Served as model selection tool for multiple production projects',
    ],
    techStack: [
      { layer: 'AI', items: ['Anthropic SDK', 'Google Generative AI', 'DeepSeek API'] },
      { layer: 'Backend', items: ['Python'] },
    ],
    impact: [
      'Informed LLM selection across 10+ production projects',
      'Saved significant cost by identifying the right model per task type',
      'Built deep familiarity with multiple frontier model APIs',
    ],
  },
  {
    id: 24,
    slug: 'langchain-langgraph-modules',
    name: 'LangChain / LangGraph Mastery',
    tagline: 'Full 6-module implementation of LangChain Academy curriculum',
    category: 'AI / LLM',
    highlight: 'from-green-500 to-emerald-500',
    description:
      'A structured, hands-on implementation of LangChain Academy\'s complete 6-module curriculum — covering RAG, agents, memory, multi-agent systems, and LangGraph state machines.',
    problem:
      'LangChain and LangGraph are powerful but complex frameworks. Deep mastery requires building real implementations, not just reading documentation.',
    solution:
      'Completed all 6 academy modules with full working implementations — from basic LCEL chains through complex LangGraph state machines with memory and multi-agent supervision.',
    features: [
      'Module 1: LangChain basics and LCEL chains',
      'Module 2: RAG fundamentals (loading, splitting, embedding, retrieval)',
      'Module 3: Agent fundamentals with tool use',
      'Module 4: LangGraph state graphs and conditional edges',
      'Module 5: Memory and persistence in agents',
      'Module 6: Multi-agent systems and supervision',
    ],
    techStack: [
      { layer: 'AI', items: ['LangChain', 'LangGraph', 'OpenAI'] },
      { layer: 'Database', items: ['Chroma'] },
      { layer: 'Backend', items: ['Python'] },
    ],
    impact: [
      'Deep reference implementations for all major LangChain patterns',
      'Foundation for 10+ production LangChain/LangGraph projects',
      'Demonstrates comprehensive mastery of the full AI agent stack',
    ],
  },
  {
    id: 25,
    slug: 'haystack-rag',
    name: 'Haystack RAG System',
    tagline: 'Semantic search and Q&A over large scraped websites',
    category: 'RAG Systems',
    highlight: 'from-orange-500 to-amber-500',
    description:
      'A document indexing and retrieval system built with the Haystack framework that crawls entire websites and provides semantic search and Q&A over the indexed content.',
    problem:
      'Large documentation sites and web portals are hard to navigate. Keyword search misses context and intent — users need semantic understanding of their queries.',
    solution:
      'Built a pipeline that crawls websites with a custom scraper, preprocesses and indexes content via Haystack with BM25 + dense retrieval hybrid, and provides conversational Q&A on top.',
    features: [
      'Full website crawling and content extraction',
      'Haystack pipeline with hybrid BM25 + dense retrieval',
      'Semantic search with contextual Q&A',
      'Alternative to Elasticsearch for document Q&A use cases',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python'] },
      { layer: 'AI', items: ['Haystack', 'LangChain', 'LLMs'] },
      { layer: 'Scraping', items: ['BeautifulSoup'] },
    ],
    impact: [
      'Any documentation site becomes semantically searchable',
      'Provides natural language access to large web content collections',
      'Demonstrates alternative RAG frameworks beyond LangChain',
    ],
  },
  {
    id: 26,
    slug: 'sharepoint-monitor',
    name: 'SharePoint Document Monitor',
    tagline: 'Automated event-driven monitoring for SharePoint document changes',
    category: 'Backend API',
    highlight: 'from-blue-600 to-indigo-600',
    description:
      'An automated monitoring service that watches SharePoint document libraries for changes (new files, edits, deletions) and triggers downstream workflows or alerts.',
    problem:
      'Enterprise teams working in SharePoint had no automated way to react to document changes — new uploads, modifications, and deletions went unnoticed until someone checked manually.',
    solution:
      'Built a Python service using the Microsoft Graph API to poll SharePoint document libraries for changes and trigger configurable downstream actions.',
    features: [
      'Polls SharePoint via Microsoft Graph API for changes',
      'Detects new uploads, modifications, and deletions',
      'Triggers configurable downstream actions (notifications, processing)',
      'Designed to run as a background service or Azure Function',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python'] },
      { layer: 'Integration', items: ['Microsoft SharePoint API', 'Microsoft Graph API'] },
    ],
    impact: [
      'Bridges SharePoint events into automated data workflows',
      'Enables compliance triggers on document changes for audit',
      'Removes the need for manual checking of document library updates',
    ],
  },
  {
    id: 27,
    slug: 'flask-session-management',
    name: 'Flask Session Management',
    tagline: 'Production-grade session patterns: Redis, OAuth, and Flask-Login',
    category: 'Backend API',
    highlight: 'from-gray-500 to-slate-600',
    description:
      'A comprehensive demonstration of production Flask session management — covering server-side Redis sessions, Flask-Login authentication, and persistent auth flows with SQLAlchemy.',
    problem:
      'Flask\'s default cookie-based sessions have security and scalability limitations. Many developers don\'t know how to implement proper server-side sessions in Flask.',
    solution:
      'Built a full reference implementation with Flask-Login for authentication, Flask-Session for Redis-backed server-side sessions, and SQLAlchemy for user record persistence.',
    features: [
      'Server-side Redis sessions (not cookie-stored)',
      'Flask-Login for current_user context and protected routes',
      'SQLAlchemy user records with session expiry',
      'Remember-me and logout flows',
      'Production-grade security patterns',
    ],
    techStack: [
      { layer: 'Backend', items: ['Python', 'Flask', 'SQLAlchemy'] },
      { layer: 'Auth', items: ['Flask-Login', 'Flask-Session'] },
      { layer: 'Database', items: ['Redis', 'SQLAlchemy'] },
    ],
    impact: [
      'Reference implementation for secure Flask web applications',
      'Demonstrates server-side session migration from cookie sessions',
      'Flask auth best practices in one working codebase',
    ],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export const categories = [
  'All',
  'AI / LLM',
  'Backend API',
  'RAG Systems',
  'Data & ML',
  'Full Stack',
  'Hackathon',
] as const
