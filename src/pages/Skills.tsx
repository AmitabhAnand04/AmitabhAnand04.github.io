import { motion } from 'framer-motion'
import { Code2, Brain, Layers, Cloud, Database, Plug } from 'lucide-react'
import { skillCategories } from '../data/skills'
import TechLogoStrip from '../components/ui/TechLogoStrip'

const iconMap: Record<string, React.ElementType> = {
  Code2, Brain, Layers, Cloud, Database, Plug,
}

function SkillBar({ name, level, years, index }: { name: string; level: number; years?: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-white/75 group-hover:text-white transition-colors">
          {name}
        </span>
        <div className="flex items-center gap-2">
          {years && <span className="text-xs text-white/30 font-mono">{years}</span>}
          <span className="text-xs font-semibold text-indigo-400">{level}%</span>
        </div>
      </div>
      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-center gap-6"
        >
          {/* Small avatar photo */}
          <div className="flex-shrink-0">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-indigo-500/30 shadow-glow-indigo">
              <img src="/photos/avatar.svg" alt="Amitabh Anand"
                   className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">
              Expertise
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
              Skills & Stack
            </h1>
            <p className="text-white/40 text-sm sm:text-base max-w-xl">
              Technologies and tools I work with daily — from AI frameworks to cloud infrastructure.
            </p>
          </div>
        </motion.div>

        {/* Skill categories */}
        <div className="space-y-10">
          {skillCategories.map((category, ci) => {
            const Icon = iconMap[category.icon] ?? Code2
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: ci * 0.08 }}
                className="bg-dark-800 border border-dark-600 rounded-2xl p-6 sm:p-8"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  <h2 className="font-bold text-white text-lg">{category.title}</h2>
                  <span className="ml-auto text-xs text-white/25 font-mono">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                  {category.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      years={skill.years}
                      index={si}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* LLM + Cloud logos strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-800 border border-dark-600 rounded-2xl p-6 sm:p-8 mt-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <Brain size={16} className="text-indigo-400" />
            </div>
            <h2 className="font-bold text-white text-lg">AI Models & Platforms</h2>
          </div>
          <TechLogoStrip variant="both" />
        </motion.div>

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-violet-500/5 border border-violet-500/15 rounded-2xl p-6"
        >
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse-slow" />
            Currently Exploring
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Model Context Protocol (MCP)', 'Google A2A Protocol', 'AI Foundry', 'Distributed Agent Systems'].map((item) => (
              <span
                key={item}
                className="bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
