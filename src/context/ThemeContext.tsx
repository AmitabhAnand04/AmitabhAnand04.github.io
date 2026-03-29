import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type ThemeMode = 'dark' | 'light' | 'system'

interface ThemeCtx {
  mode: ThemeMode
  isDark: boolean
  setMode: (m: ThemeMode) => void
  cycleMode: () => void
}

const ThemeContext = createContext<ThemeCtx>({
  mode: 'system',
  isDark: true,
  setMode: () => {},
  cycleMode: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    try { return (localStorage.getItem('theme') as ThemeMode) ?? 'system' } catch { return 'system' }
  })

  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => setSystemDark(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const isDark = mode === 'system' ? systemDark : mode === 'dark'

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
    root.classList.toggle('light', !isDark)
  }, [isDark])

  const setMode = (m: ThemeMode) => {
    setModeState(m)
    try { localStorage.setItem('theme', m) } catch {}
  }

  const cycleMode = () => {
    const order: ThemeMode[] = ['system', 'light', 'dark']
    setMode(order[(order.indexOf(mode) + 1) % order.length])
  }

  return (
    <ThemeContext.Provider value={{ mode, isDark, setMode, cycleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
