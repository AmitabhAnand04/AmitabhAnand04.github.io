import { useRef } from 'react'

interface MarqueeItem {
  name: string
  slug: string
  label: string
}

const items: MarqueeItem[] = [
  { name: 'OpenAI',        slug: 'openai',        label: 'OpenAI' },
  { name: 'Claude',        slug: 'anthropic',     label: 'Claude' },
  { name: 'Gemini',        slug: 'googlegemini',  label: 'Gemini' },
  { name: 'Llama',         slug: 'meta',          label: 'Llama' },
  { name: 'DeepSeek',      slug: 'deepseek',      label: 'DeepSeek' },
  { name: 'Ollama',        slug: 'ollama',        label: 'Ollama' },
  { name: 'Mistral',       slug: 'mistral',       label: 'Mistral' },
  { name: 'Azure',         slug: 'microsoftazure',label: 'Azure' },
  { name: 'Google Cloud',  slug: 'googlecloud',   label: 'Google Cloud' },
  { name: 'Salesforce',    slug: 'salesforce',    label: 'Salesforce' },
]

// Duplicate for seamless loop
const doubled = [...items, ...items]

function MarqueeCard({ item }: { item: MarqueeItem }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 mx-2 rounded-xl bg-dark-800 border border-white/8 hover:border-indigo-500/30 transition-colors duration-200 group cursor-default">
      <img
        src={`https://cdn.simpleicons.org/${item.slug}/ffffff`}
        alt={item.name}
        className="w-7 h-7 opacity-60 group-hover:opacity-100 transition-opacity duration-200"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
      />
      <span className="text-sm font-medium text-white/55 group-hover:text-white/90 transition-colors duration-200 whitespace-nowrap">
        {item.label}
      </span>
    </div>
  )
}

export default function LogoMarquee() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="relative overflow-hidden w-full">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div
        ref={ref}
        className="flex items-center py-2"
        style={{
          animation: 'marqueeScroll 28s linear infinite',
          width: 'max-content',
        }}
      >
        {doubled.map((item, i) => (
          <MarqueeCard key={`${item.slug}-${i}`} item={item} />
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
