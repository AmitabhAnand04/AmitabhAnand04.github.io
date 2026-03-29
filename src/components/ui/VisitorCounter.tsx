import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    // counterapi.dev — free, no auth, increments on each call
    fetch('https://api.counterapi.dev/v1/amitabhanand04-portfolio/visits/up')
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.count === 'number') setCount(data.count)
      })
      .catch(() => {
        // Fallback: show count from localStorage so something always displays
        const stored = parseInt(localStorage.getItem('vc') ?? '0', 10)
        const next = stored + 1
        localStorage.setItem('vc', String(next))
        setCount(next)
      })
  }, [])

  if (count === null) return null

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-white/40 font-mono">
      <Eye size={11} className="text-white/30" />
      {count.toLocaleString()} visits
    </span>
  )
}
