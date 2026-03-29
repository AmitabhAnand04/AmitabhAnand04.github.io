import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Brain, Database, Globe, Cpu, GitBranch, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { featuredProjects } from '../data/projects'
import ProjectCard from '../components/ui/ProjectCard'
import Badge from '../components/ui/Badge'
import LogoMarquee from '../components/ui/LogoMarquee'

const techBadges = [
  'Python', 'FastAPI', 'LangChain', 'LangGraph',
  'Azure', 'Claude AI', 'RAG', 'Multi-Agent',
]

const stats = [
  { value: 27, suffix: '+', label: 'Projects Built' },
  { value: 5, suffix: 'M+', label: 'Records Processed' },
  { value: 10, suffix: '+', label: 'AI / LLM Integrations' },
  { value: 3, suffix: '+', label: 'Years Experience' },
]

const services = [
  { icon: Brain, title: 'AI & LLM Engineering', desc: 'End-to-end LLM integration with Claude, OpenAI, and Gemini across production systems.' },
  { icon: GitBranch, title: 'Multi-Agent Systems', desc: 'LangGraph and CrewAI orchestration for complex, collaborative agentic workflows.' },
  { icon: Database, title: 'RAG & Knowledge Systems', desc: 'Vector search, document indexing, and retrieval pipelines that ground AI in real data.' },
  { icon: Zap, title: 'Backend API Development', desc: 'High-performance FastAPI services with PostgreSQL, Cosmos DB, and Redis.' },
  { icon: Globe, title: 'Cloud & Integrations', desc: 'Azure, GCP, Salesforce, SharePoint — connecting enterprise systems with AI.' },
  { icon: Cpu, title: 'Data Pipelines & Automation', desc: 'ETL validation, document processing, and intelligent automation at scale.' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 50
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current = Math.min(current + increment, target)
            setCount(Math.floor(current))
            if (current >= target) clearInterval(timer)
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center hero-bg px-4 pt-24 pb-8 overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

        {/* Main content — grows to fill, centers vertically */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 flex items-center">
          {/* Split: text left, photo right */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left: text content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 text-sm text-green-400 font-medium mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                Open to new opportunities
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[1.08] tracking-tight mb-6"
              >
                Building{' '}
                <span className="gradient-text">Intelligent</span>
                <br />
                Systems.
                <br />
                <span className="text-white/80">Powered by AI.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-base sm:text-lg text-white/50 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
              >
                I'm <span className="text-white/80 font-medium">Amitabh Anand</span>, a Software Engineer
                specializing in AI/ML systems, LLM integrations, RAG pipelines, and enterprise-grade
                Python backends that solve real problems at scale.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12"
              >
                <Link
                  to="/projects"
                  className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm shadow-glow-indigo w-full sm:w-auto justify-center"
                >
                  View My Work
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="btn-outline flex items-center gap-2 px-7 py-3.5 rounded-xl text-white/80 font-semibold text-sm w-full sm:w-auto justify-center"
                >
                  Get In Touch
                </Link>
              </motion.div>

              {/* Tech badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2"
              >
            {techBadges.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.06 }}
              >
                <Badge label={tech} variant="default" size="md" />
              </motion.div>
            ))}
            </motion.div>
            </div>{/* end left column */}

            {/* Right: Hero photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="hidden lg:flex flex-shrink-0 items-center justify-center"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-violet-500/20 blur-2xl scale-110 pointer-events-none" />
                {/* Photo frame */}
                <div className="relative w-72 xl:w-80 h-80 xl:h-96 rounded-3xl overflow-hidden border border-indigo-500/30 shadow-glow-indigo">
                  {/*
                    ── PHOTO SLOT: Home Hero ──────────────────────────────
                    Replace the div below with:
                    <img src="/photos/hero.jpg" alt="Amitabh Anand"
                         className="w-full h-full object-cover object-top" />
                    Put your photo at: public/photos/hero.jpg
                    ─────────────────────────────────────────────────────── */}
                  <div className="w-full h-full bg-gradient-to-br from-indigo-900/60 via-violet-900/40 to-dark-800 flex items-end justify-center pb-8">
                    <span className="text-7xl font-black gradient-text select-none">AA</span>
                  </div>
                </div>
                {/* Floating badge — Years */}
                <div className="absolute -bottom-4 -left-4 bg-dark-800 border border-dark-600 rounded-2xl px-4 py-2.5 shadow-card">
                  <p className="text-xs text-white/30 font-medium">Experience</p>
                  <p className="text-lg font-black gradient-text">3+ yrs</p>
                </div>
                {/* Floating badge — Projects */}
                <div className="absolute -top-4 -right-4 bg-dark-800 border border-dark-600 rounded-2xl px-4 py-2.5 shadow-card">
                  <p className="text-xs text-white/30 font-medium">Projects</p>
                  <p className="text-lg font-black gradient-text">27+</p>
                </div>
              </div>
            </motion.div>

          </div>{/* end flex row */}
        </div>{/* end centered content */}

        {/* Scroll indicator — natural bottom of flex column, never overlaps content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="relative z-10 flex flex-col items-center gap-1 text-white/30 mt-6 pb-2"
        >
          <span className="text-xs tracking-wider">SCROLL</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-dark-800/50 border-y border-dark-600/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/40 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                Featured Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Selected Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="flex items-center gap-1.5 text-sm text-white/50 hover:text-indigo-400 transition-colors font-medium group"
            >
              View all 27 projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="section-padding bg-dark-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What I Do</h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">
              From intelligent backends to production AI systems — end-to-end.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08 }}
                className="bg-dark-800 border border-dark-600 rounded-2xl p-6 card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                  <service.icon size={18} className="text-indigo-400" />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">{service.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LLM MARQUEE */}
      <section className="py-14 border-y border-dark-700/40 bg-dark-800/20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <p className="text-xs font-semibold text-white/25 uppercase tracking-widest text-center">
            AI Models & Platforms I Build With
          </p>
        </div>
        <LogoMarquee />
      </section>

      {/* CTA BANNER */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600/20 via-violet-600/20 to-purple-600/20 border border-indigo-500/20 p-10 sm:p-14 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-violet-600/10 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Have a project in mind?
              </h2>
              <p className="text-white/50 mb-8 max-w-lg mx-auto text-sm sm:text-base">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of something great.
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold"
              >
                Let's Talk
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
