import { motion } from 'framer-motion'

interface LogoItem {
  name: string
  slug?: string       // simple icons CDN slug
  color: string       // tailwind text color for fallback badge
  bg: string          // tailwind bg color for fallback badge
  useCdn: boolean
}

const llms: LogoItem[] = [
  { name: 'OpenAI',     slug: 'openai',        color: 'text-white/80',   bg: 'bg-white/8',       useCdn: true },
  { name: 'Claude',     slug: 'anthropic',     color: 'text-orange-300', bg: 'bg-orange-500/10', useCdn: true },
  { name: 'Gemini',     slug: 'googlegemini',  color: 'text-blue-300',   bg: 'bg-blue-500/10',   useCdn: true },
  { name: 'Llama',      slug: 'meta',          color: 'text-sky-300',    bg: 'bg-sky-500/10',    useCdn: true },
  { name: 'DeepSeek',   slug: 'deepseek',      color: 'text-indigo-300', bg: 'bg-indigo-500/10', useCdn: true },
  { name: 'Ollama',     slug: 'ollama',        color: 'text-violet-300', bg: 'bg-violet-500/10', useCdn: true },
  { name: 'Mistral',    slug: 'mistral',       color: 'text-amber-300',  bg: 'bg-amber-500/10',  useCdn: true },
]

const clouds: LogoItem[] = [
  { name: 'Microsoft Azure', slug: 'microsoftazure', color: 'text-blue-300',  bg: 'bg-blue-500/10',  useCdn: true },
  { name: 'Google Cloud',    slug: 'googlecloud',    color: 'text-red-300',   bg: 'bg-red-500/10',   useCdn: true },
  { name: 'Salesforce',      slug: 'salesforce',     color: 'text-sky-300',   bg: 'bg-sky-500/10',   useCdn: true },
]

function LogoBadge({ item, index }: { item: LogoItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/8 bg-dark-800 hover:border-indigo-500/30 hover:bg-dark-700 transition-all duration-200 cursor-default group`}
    >
      {item.useCdn && item.slug ? (
        <img
          src={`https://cdn.simpleicons.org/${item.slug}/ffffff`}
          alt={item.name}
          className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
          onError={(e) => {
            // fallback: hide image if CDN fails
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
      ) : (
        <span className={`w-5 h-5 flex items-center justify-center text-xs font-bold ${item.color}`}>
          {item.name[0]}
        </span>
      )}
      <span className="text-sm font-medium text-white/65 group-hover:text-white/90 transition-colors whitespace-nowrap">
        {item.name}
      </span>
    </motion.div>
  )
}

interface TechLogoStripProps {
  variant?: 'llms' | 'clouds' | 'both'
  title?: string
}

export default function TechLogoStrip({ variant = 'both', title }: TechLogoStripProps) {
  const showLLMs = variant === 'llms' || variant === 'both'
  const showClouds = variant === 'clouds' || variant === 'both'

  return (
    <div className="space-y-6">
      {title && (
        <h3 className="text-base font-semibold text-white/60">{title}</h3>
      )}

      {showLLMs && (
        <div>
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-3">
            LLMs I Work With
          </p>
          <div className="flex flex-wrap gap-2">
            {llms.map((item, i) => (
              <LogoBadge key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      )}

      {showClouds && (
        <div>
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-3">
            Cloud Platforms
          </p>
          <div className="flex flex-wrap gap-2">
            {clouds.map((item, i) => (
              <LogoBadge key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
