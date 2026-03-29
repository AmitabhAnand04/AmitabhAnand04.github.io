import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Download, Sun, Moon, Monitor } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
]

const modeLabel = { system: 'System', light: 'Light', dark: 'Dark' } as const
const ModeIcon = ({ mode, size = 14 }: { mode: 'system' | 'light' | 'dark'; size?: number }) => {
  if (mode === 'light')  return <Sun size={size} />
  if (mode === 'dark')   return <Moon size={size} />
  return <Monitor size={size} />
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { mode, cycleMode } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-900/80 backdrop-blur-xl border-b border-dark-700/50 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/photos/logo.png" alt="AA" className="w-9 h-9 rounded-lg shadow-glow-indigo group-hover:shadow-glow-violet transition-shadow duration-300 object-cover" />
              <span className="hidden sm:block font-semibold text-white/90 group-hover:text-white transition-colors">
                Amitabh Anand
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'text-white'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme toggle */}
              <button
                onClick={cycleMode}
                title={`Theme: ${modeLabel[mode]} — click to cycle`}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-white/50 hover:text-white/90 hover:bg-white/5 border border-transparent hover:border-dark-600 transition-all text-xs font-medium"
              >
                <ModeIcon mode={mode} />
                <span className="hidden lg:block">{modeLabel[mode]}</span>
              </button>
              <a
                href="/resume.pdf"
                download
                className="btn-outline flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white"
              >
                <Download size={14} />
                Resume
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col h-full px-6 pt-6 pb-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-2">
                  <img src="/photos/logo.png" alt="AA" className="w-9 h-9 rounded-lg object-cover" />
                  <span className="font-semibold text-white">Amitabh Anand</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => {
                  const active = location.pathname === link.path
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium transition-all ${
                          active
                            ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.label}
                        {active && <span className="w-2 h-2 rounded-full bg-indigo-400" />}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Theme toggle */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                onClick={cycleMode}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-white/60 hover:text-white/90 border border-dark-600 hover:border-dark-500 bg-dark-800 transition-all text-sm font-medium"
              >
                <span className="flex items-center gap-2">
                  <ModeIcon mode={mode} size={16} />
                  Theme: {modeLabel[mode]}
                </span>
                <span className="text-xs text-white/30">tap to change</span>
              </motion.button>

              {/* Mobile CTA */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="/resume.pdf"
                download
                className="btn-primary flex items-center justify-center gap-2 py-4 rounded-xl text-white font-medium"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
