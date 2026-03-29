import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Project } from '../../types'
import Badge from './Badge'

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const allTech = project.techStack.flatMap((g) => g.items).slice(0, 4)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      <Link to={`/projects/${project.slug}`} className="block h-full group">
        <div className="h-full bg-dark-800 border border-dark-600 rounded-2xl overflow-hidden card-hover flex flex-col">
          {/* Top accent bar */}
          <div className={`h-1 w-full bg-gradient-to-r ${project.highlight ?? 'from-indigo-500 to-violet-500'}`} />

          <div className="p-6 flex flex-col flex-1 gap-4">
            {/* Category + featured badge */}
            <div className="flex items-center justify-between gap-2">
              <Badge label={project.category} variant="category" />
              {project.featured && (
                <span className="text-xs text-amber-400/80 font-medium">★ Featured</span>
              )}
            </div>

            {/* Title + tagline */}
            <div className="flex-1">
              <h3 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors mb-1.5 leading-snug">
                {project.name}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed line-clamp-2">
                {project.tagline}
              </p>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-1.5">
              {allTech.map((tech) => (
                <Badge key={tech} label={tech} variant="default" />
              ))}
              {project.techStack.flatMap((g) => g.items).length > 4 && (
                <Badge
                  label={`+${project.techStack.flatMap((g) => g.items).length - 4} more`}
                  variant="default"
                />
              )}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-1 text-sm text-indigo-400 group-hover:text-indigo-300 font-medium transition-colors mt-auto pt-2 border-t border-dark-600/50">
              View Details
              <ArrowRight
                size={14}
                className="translate-x-0 group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
