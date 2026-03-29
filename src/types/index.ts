export interface Project {
  id: number
  slug: string
  name: string
  tagline: string
  category: ProjectCategory
  description: string
  problem: string
  solution: string
  features: string[]
  techStack: TechStackGroup[]
  impact: string[]
  featured?: boolean
  highlight?: string // colored top border accent
}

export type ProjectCategory =
  | 'All'
  | 'AI / LLM'
  | 'Backend API'
  | 'RAG Systems'
  | 'Data & ML'
  | 'Full Stack'
  | 'Hackathon'

export interface TechStackGroup {
  layer: string
  items: string[]
}

export interface Skill {
  name: string
  level: number // 0-100
  years?: string
  icon?: string
}

export interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

export interface TimelineEntry {
  period: string
  role: string
  industry: string
  points: string[]
  tech: string[]
}
