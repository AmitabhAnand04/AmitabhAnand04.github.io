import { SkillCategory, TimelineEntry } from '../types'

export interface Education {
  institution: string
  degree: string
  field: string
  period: string
  grade?: string
}

export interface Certification {
  name: string
  issuer: string
  issued: string
  credentialId?: string
  image?: string
}

export interface Award {
  title: string
  count?: number
  description: string
  image?: string
}

export const education: Education[] = [
  {
    institution: 'Birla Institute of Technology, Mesra',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science',
    period: 'Jan 2020 – May 2023',
    grade: 'First Class with Distinction',
  },
  {
    institution: 'Birla Institute of Technology, Mesra',
    degree: 'Diploma',
    field: 'Computer Science',
    period: 'Jun 2017 – Jun 2020',
    grade: 'First Class with Distinction',
  },
  {
    institution: 'Jawahar Navodaya Vidyalaya (JNV)',
    degree: 'Matriculation',
    field: '',
    period: 'Jul 2010 – May 2015',
    grade: '8.60 / 10',
  },
]

export const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    issued: 'Aug 2023',
    credentialId: '2F161604DF1F48E',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    issued: 'Jul 2023',
    credentialId: '46D22C6E0360076F',
  },
]

export const awards: Award[] = [
  {
    title: 'Outstanding Performance Award',
    count: 3,
    description: 'Awarded three times for exceptional contributions to AI system development and delivery of high-impact production projects.',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 95, years: '3+ yrs' },
      { name: 'SQL', level: 80, years: '3+ yrs' },
      { name: 'C#', level: 60, years: '~8 mos' },
      { name: 'C++', level: 55, years: '1+ yr' },
    ],
  },
  {
    title: 'AI & LLMs',
    icon: 'Brain',
    skills: [
      { name: 'LangChain', level: 92, years: '2+ yrs' },
      { name: 'LangGraph', level: 88, years: '1+ yr' },
      { name: 'Claude (Anthropic)', level: 90, years: '2+ yrs' },
      { name: 'OpenAI API', level: 90, years: '2+ yrs' },
      { name: 'Google Gemini', level: 82, years: '1+ yr' },
      { name: 'RAG Systems', level: 90, years: '2+ yrs' },
      { name: 'Ragas (Evaluation)', level: 80, years: '1+ yr' },
      { name: 'CrewAI / OpenAI Swarm', level: 75, years: '1+ yr' },
      { name: 'Pydantic AI', level: 78, years: '1+ yr' },
      { name: 'Haystack', level: 72, years: '1+ yr' },
      { name: 'Ollama', level: 75, years: '1+ yr' },
    ],
  },
  {
    title: 'Frameworks',
    icon: 'Layers',
    skills: [
      { name: 'FastAPI', level: 95, years: '3+ yrs' },
      { name: 'Flask', level: 85, years: '3+ yrs' },
      { name: 'Streamlit', level: 85, years: '1+ yr' },
    ],
  },
  {
    title: 'Microsoft Azure',
    icon: 'Cloud',
    skills: [
      { name: 'Azure Cosmos DB', level: 88, years: '2+ yrs' },
      { name: 'Azure Blob Storage', level: 80, years: '2+ yrs' },
      { name: 'Azure Form Recognizer', level: 82, years: '2+ yrs' },
      { name: 'Azure Service Bus', level: 78, years: '1+ yr' },
      { name: 'Azure WebJobs / Functions', level: 75, years: '1+ yr' },
      { name: 'Azure Key Vault', level: 70, years: '1+ yr' },
    ],
  },
  {
    title: 'Google Cloud Platform',
    icon: 'Cloud',
    skills: [
      { name: 'Google Cloud Document AI', level: 82, years: '2+ yrs' },
      { name: 'Google Generative AI (Gemini API)', level: 80, years: '1+ yr' },
    ],
  },
  {
    title: 'Databases & Storage',
    icon: 'Database',
    skills: [
      { name: 'Azure Cosmos DB', level: 88, years: '2+ yrs' },
      { name: 'PostgreSQL', level: 82, years: '2+ yrs' },
      { name: 'SQL Server', level: 78, years: '2+ yrs' },
      { name: 'ChromaDB (vector)', level: 80, years: '1+ yr' },
      { name: 'Redis', level: 72, years: '1+ yr' },
      { name: 'SQLAlchemy', level: 78, years: '2+ yrs' },
    ],
  },
  {
    title: 'Integrations',
    icon: 'Plug',
    skills: [
      { name: 'Salesforce API', level: 80, years: '1+ yr' },
      { name: 'OData / Dynamics 365', level: 75, years: '1+ yr' },
      { name: 'Microsoft Graph / SharePoint', level: 72, years: '1+ yr' },
      { name: 'OpenAI Whisper', level: 78, years: '1+ yr' },
      { name: 'Pandas', level: 85, years: '3+ yrs' },
      { name: 'Scikit-learn', level: 72, years: '1+ yr' },
    ],
  },
]

export const timeline: TimelineEntry[] = [
  {
    period: 'Dec 2024 — Present',
    role: 'Software Engineer',
    industry: 'magicWorkshop · Product-based · Full-time',
    points: [
      'Architected and shipped the STTM Auto-Match System — processing 5M+ records with chunked batch processing and AI-powered mismatch analysis',
      'Built a modular multi-service AI platform with independent microservices for Knowledge Base, Legal, Sales, and Appointment domains',
      'Led development of email-to-CRM automation pipelines using Claude and DeepSeek LLMs with Salesforce integration',
      'Designed and deployed RAG systems, bilingual chatbot APIs, and multi-agent agentic workflows in production',
    ],
    tech: ['Python', 'FastAPI', 'LangGraph', 'Claude', 'Azure', 'PostgreSQL'],
  },
  {
    period: 'Apr 2024 — Dec 2024',
    role: 'Software Engineer',
    industry: 'Pursuit Software · Service-based · Full-time',
    points: [
      'Built production AI systems using Google Cloud Platform and LLM integrations for enterprise clients',
      'Developed document intelligence APIs using Google Cloud Document AI and Azure Form Recognizer',
      'Created RAG evaluation frameworks, chatbot logging infrastructure, and Haystack-based search systems',
      'Integrated Salesforce CRM with AI-powered lead extraction pipelines',
    ],
    tech: ['Python', 'FastAPI', 'GCP', 'LangChain', 'Azure Cosmos DB', 'Salesforce API'],
  },
  {
    period: 'Aug 2023 — Mar 2024',
    role: 'Software Engineer Trainee',
    industry: 'Pursuit Software · Service-based · Full-time',
    points: [
      'Transitioned from internship to full-time trainee role, working across AI and backend development',
      'Built REST APIs using FastAPI and Flask for healthcare scheduling and medical data management',
      'Developed web scraping pipelines and NLP solutions using NLTK and Python',
      'Worked with Visual Studio, C#/.NET stack alongside Python-based AI exploration',
    ],
    tech: ['Python', 'C#', '.NET', 'FastAPI', 'Flask', 'SQL', 'NLTK'],
  },
  {
    period: 'Jan 2023 — Jul 2023',
    role: 'Software Intern',
    industry: 'Pursuit Software · Service-based · Internship',
    points: [
      'Contributed to software development projects applying OOP principles and backend development',
      'Built initial Python tooling and explored early LLM APIs (GPT, Gemini)',
      'Gained hands-on experience with software design patterns and full development lifecycle',
    ],
    tech: ['Python', 'OOP', 'Software Development', 'REST APIs'],
  },
  {
    period: 'Feb 2022 — May 2022',
    role: 'Cyber Security Intern',
    industry: 'TalaKunchi Networks Pvt Ltd · Internship',
    points: [
      'Worked on cyber security fundamentals and network security practices',
      'Gained exposure to security tools, vulnerability analysis, and secure software principles',
    ],
    tech: ['Cyber Security', 'Network Security'],
  },
]
