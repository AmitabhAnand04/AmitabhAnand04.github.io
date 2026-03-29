import { useRef, useEffect } from 'react'

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

const doubled = [...items, ...items]

interface MarqueeCardProps {
  item: MarqueeItem
  cardRef: (el: HTMLDivElement | null) => void
}

function MarqueeCard({ item, cardRef }: MarqueeCardProps) {
  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 flex items-center gap-3 px-5 py-3 mx-2 rounded-xl bg-dark-800 border border-white/8 hover:border-indigo-500/30 transition-colors duration-200 group cursor-default"
      style={{ transformOrigin: 'center center', willChange: 'transform' }}
    >
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
  const mouseXRef = useRef<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let rafId: number

    const tick = () => {
      const mx = mouseXRef.current
      cardRefs.current.forEach((card) => {
        if (!card) return
        if (mx === null) {
          card.style.transform = 'scale(1)'
          card.style.zIndex = ''
          return
        }
        const rect = card.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const dist = Math.abs(mx - centerX)
        const radius = 200           // px — influence zone
        const maxScale = 1.55        // max size at cursor center
        const t = Math.max(0, 1 - dist / radius)
        const scale = 1 + (t * t) * (maxScale - 1)   // ease-out curve
        card.style.transform = `scale(${scale})`
        card.style.zIndex = scale > 1.02 ? '20' : ''
      })
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div
      className="relative w-full"
      style={{ overflowX: 'clip' }}   /* clip horizontal only — lets scaled cards breathe vertically */
      onMouseMove={(e) => { mouseXRef.current = e.clientX }}
      onMouseLeave={() => { mouseXRef.current = null }}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div
        className="flex items-center py-5"
        style={{
          animation: 'marqueeScroll 28s linear infinite',
          width: 'max-content',
        }}
      >
        {doubled.map((item, i) => (
          <MarqueeCard
            key={`${item.slug}-${i}`}
            item={item}
            cardRef={(el) => { cardRefs.current[i] = el }}
          />
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
