import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    // countapi.xyz — free, no auth, stores count on their servers
    // Each call to /hit/ increments by 1 and returns the new total
    fetch('https://api.countapi.xyz/hit/amitabhanand04.github.io/visits')
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => setCount(null)) // silently fail — don't break UI
  }, [])

  if (count === null) return null

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-white/30 font-mono">
      <Eye size={11} className="text-white/20" />
      {count.toLocaleString()} visits
    </span>
  )
}
