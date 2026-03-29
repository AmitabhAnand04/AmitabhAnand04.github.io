import { motion } from 'framer-motion'
import { MapPin, Download, Lightbulb, Rocket, Code2, GraduationCap, Award, BadgeCheck } from 'lucide-react'
import { timeline, education, certifications, awards } from '../data/skills'
import Badge from '../components/ui/Badge'

const philosophy = [
  {
    icon: Rocket,
    title: 'Ship Real Systems',
    desc: 'I build for production, not demos. Every project is designed to handle real load, real users, and real failures.',
  },
  {
    icon: Lightbulb,
    title: 'AI-First Thinking',
    desc: 'LLMs and agents are tools — powerful ones. I use them where they create genuine value, not just to say I used AI.',
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    desc: 'Maintainable, scalable, readable code. The next engineer (or future me) should be able to understand it without a meeting.',
  },
]

export default function About() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-5xl 2xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">

        {/* Hero split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Photo placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-2 border-indigo-500/30 shadow-glow-indigo">
                <img src="/photos/profile.png" alt="Amitabh Anand"
                     className="w-full h-full object-cover object-top" />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 -right-3 bg-dark-800 border border-green-500/30 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                <span className="text-xs text-green-400 font-medium">Available</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">
              About Me
            </p>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">
              Hi, I'm Amitabh Anand
            </h1>
            <p className="text-indigo-400 font-medium mb-5 flex items-center gap-2">
              <MapPin size={14} />
              Software Engineer · AI Developer
            </p>

            <div className="space-y-4 text-white/55 text-sm leading-relaxed mb-8">
              <p>
                I'm a Software Engineer with a strong focus on AI/ML systems, LLM integrations, and
                enterprise-grade Python backends. Since starting my career in 2023, I've built
                production systems that solve real, measurable problems — from enterprise data
                validation pipelines processing millions of records to multi-agent AI platforms
                deployed across business domains.
              </p>
              <p>
                My work sits at the intersection of AI and engineering: I don't just experiment
                with LLMs — I ship systems using them. RAG pipelines, multi-agent workflows,
                document intelligence, bilingual chatbots, agentic schedulers — these are things
                I've built and deployed, not prototyped.
              </p>
              <p>
                I work primarily with Python, FastAPI, LangChain, LangGraph, and the Azure + GCP
                cloud ecosystems. I care deeply about clean architecture, observable systems, and
                code that the next engineer can actually understand.
              </p>
            </div>

            <a
              href="/resume.pdf"
              download
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              Experience
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">My Journey</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent" />

            <div className="space-y-10">
              {timeline.map((entry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-3 sm:left-4.5 top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 border-2 border-dark-900 shadow-glow-indigo" />

                  <div className="bg-dark-800 border border-dark-600 rounded-2xl p-5 sm:p-6 card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="text-xs font-mono text-indigo-400 mb-1">{entry.period}</p>
                        <h3 className="font-bold text-white text-base">{entry.role}</h3>
                        <p className="text-sm text-white/40">{entry.industry}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {entry.points.map((point, j) => (
                        <li key={j} className="text-sm text-white/50 leading-relaxed flex gap-2">
                          <span className="text-indigo-400 mt-0.5 flex-shrink-0">·</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.tech.map((t) => (
                        <Badge key={t} label={t} variant="default" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-2">
              How I Work
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Core Philosophy</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {philosophy.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-800 border border-dark-600 rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={20} className="text-indigo-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Recognition
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Awards</h2>
          </motion.div>
          <div className="space-y-4">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Award size={18} className="text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-white text-sm">{award.title}</h3>
                    {award.count && (
                      <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-2.5 py-0.5 rounded-full border border-amber-500/30">
                        ×{award.count}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
              Credentials
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Certifications</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-800 border border-dark-600 rounded-2xl p-5 card-hover flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <BadgeCheck size={18} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{cert.name}</h3>
                  <p className="text-xs text-white/40 mb-1">{cert.issuer} · {cert.issued}</p>
                  {cert.credentialId && (
                    <p className="text-xs font-mono text-white/25">ID: {cert.credentialId}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">
              Academic Background
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Education</h2>
          </motion.div>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-800 border border-dark-600 rounded-2xl p-5 card-hover flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={18} className="text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-white text-sm">{edu.institution}</h3>
                      <p className="text-xs text-white/50 mt-0.5">
                        {edu.degree}{edu.field ? ` · ${edu.field}` : ''}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-white/30 shrink-0">{edu.period}</span>
                  </div>
                  {edu.grade && (
                    <span className="inline-block mt-2 text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2.5 py-0.5 rounded-full font-medium">
                      {edu.grade}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Beyond work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-800/50 border border-dark-600/50 rounded-3xl p-8"
        >
          <h2 className="text-xl font-bold text-white mb-6">Beyond Work</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { emoji: '📚', label: 'Continuous Learning' },
              { emoji: '🧩', label: 'Problem Solving' },
              { emoji: '🏆', label: 'Hackathons' },
              { emoji: '🤖', label: 'AI Research' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 p-4 bg-dark-800 border border-dark-600 rounded-xl text-center"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-xs text-white/50 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
