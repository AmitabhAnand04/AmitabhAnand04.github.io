import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, Layers } from 'lucide-react'
import { projects } from '../data/projects'
import Badge from '../components/ui/Badge'
import ProjectCard from '../components/ui/ProjectCard'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="pt-32 pb-20 text-center">
        <p className="text-white/50 text-lg mb-6">Project not found.</p>
        <Link to="/projects" className="btn-primary inline-flex px-6 py-3 rounded-xl text-white font-medium text-sm">
          ← Back to Projects
        </Link>
      </main>
    )
  }

  const related = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3)

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-10 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge label={project.category} variant="category" size="md" />
            {project.featured && (
              <span className="text-sm text-amber-400/80 font-medium">★ Featured Project</span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            {project.name}
          </h1>
          <p className="text-lg text-white/50 mb-6">{project.tagline}</p>

          {/* Accent bar */}
          <div className={`h-1 w-24 rounded-full bg-gradient-to-r ${project.highlight ?? 'from-indigo-500 to-violet-500'}`} />
        </motion.div>

        {/* Overview stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          {[
            { label: 'Category', value: project.category },
            { label: 'Type', value: project.techStack.length > 3 ? 'Full System' : 'API Service' },
            { label: 'Tech Layers', value: `${project.techStack.length} layers` },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-dark-800 border border-dark-600 rounded-xl p-4 text-center"
            >
              <div className="text-xs text-white/30 mb-1 font-medium">{item.label}</div>
              <div className="text-sm font-semibold text-white/80">{item.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Content sections */}
        <div className="space-y-10">
          {/* Description */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500 inline-block" />
              Overview
            </h2>
            <p className="text-white/60 leading-relaxed">{project.description}</p>
          </motion.section>

          {/* The Problem */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-rose-500/5 border border-rose-500/15 rounded-2xl p-6"
          >
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-rose-400">⚡</span> The Problem
            </h2>
            <p className="text-white/60 leading-relaxed">{project.problem}</p>
          </motion.section>

          {/* The Solution */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-indigo-500/5 border border-indigo-500/15 rounded-2xl p-6"
          >
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-indigo-400">💡</span> The Solution
            </h2>
            <p className="text-white/60 leading-relaxed">{project.solution}</p>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-cyan-500 to-indigo-500 inline-block" />
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 text-white/60 text-sm leading-relaxed"
                >
                  <CheckCircle2 size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  {f}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers size={18} className="text-violet-400" />
              Tech Stack
            </h2>
            <div className="space-y-3">
              {project.techStack.map((group) => (
                <div key={group.layer} className="flex flex-wrap items-start gap-2">
                  <span className="text-xs font-semibold text-white/30 uppercase tracking-wider w-20 shrink-0 pt-1">
                    {group.layer}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} label={item} variant="indigo" size="md" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Impact */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-500/5 border border-green-500/15 rounded-2xl p-6"
          >
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-green-400">✓</span> Impact & Use Cases
            </h2>
            <ul className="space-y-2">
              {project.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                  <span className="text-green-400 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Related Projects */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-white mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Back */}
        <div className="mt-14 pt-8 border-t border-dark-600/40">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-indigo-400 transition-colors font-medium group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  )
}
