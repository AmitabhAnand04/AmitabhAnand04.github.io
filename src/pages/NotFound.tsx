import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-8xl font-black gradient-text mb-4">404</p>
        <h1 className="text-2xl font-bold text-white mb-3">Lost in the void</h1>
        <p className="text-white/40 text-sm mb-8 max-w-xs mx-auto">
          This page doesn't exist. Maybe it was deleted, or you mistyped the URL.
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm"
        >
          <Home size={15} />
          Back to Home
        </Link>
      </motion.div>
    </main>
  )
}
