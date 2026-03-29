import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { projects, categories } from '../data/projects'
import { ProjectCategory } from '../types'
import ProjectCard from '../components/ui/ProjectCard'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(false)

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.techStack.flatMap((g) => g.items).some((t) => t.toLowerCase().includes(q))
      return matchCat && matchSearch
    })
  }, [activeCategory, search])

  const displayed = showAll ? filtered : filtered.slice(0, 9)

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-6xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            All Projects
          </h1>
          <p className="text-white/40 text-sm sm:text-base max-w-xl">
            A collection of AI systems, APIs, and tools built for real-world problems — spanning
            enterprise data, healthcare, real estate, and beyond.
          </p>
        </motion.div>

        {/* Filter + Search bar */}
        <div className="flex flex-col gap-4 mb-10">
          {/* Category filters — horizontal scroll on mobile */}
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            <div className="flex gap-2 w-max sm:w-auto sm:flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat as ProjectCategory); setShowAll(false) }}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white border-transparent shadow-glow-indigo'
                      : 'bg-transparent text-white/50 border-dark-600 hover:text-white hover:border-indigo-500/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-sm">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setShowAll(false) }}
              className="w-full bg-dark-800 border border-dark-600 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white/80 placeholder-white/25 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
            />
          </div>
        </div>

        {/* Count */}
        <p className="text-sm text-white/30 mb-6">
          Showing <span className="text-white/60 font-medium">{displayed.length}</span> of{' '}
          <span className="text-white/60 font-medium">{filtered.length}</span> projects
        </p>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 text-white/30"
            >
              <p className="text-lg font-medium mb-2">No projects found</p>
              <p className="text-sm">Try a different category or search term</p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {displayed.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: (i % 9) * 0.05 }}
                >
                  <ProjectCard project={project} index={i} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load more */}
        {!showAll && filtered.length > 9 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="btn-outline px-8 py-3.5 rounded-xl text-white/80 font-semibold text-sm"
            >
              Load All {filtered.length - 9} More
            </button>
          </motion.div>
        )}
      </div>
    </main>
  )
}
