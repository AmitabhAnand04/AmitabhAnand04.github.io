import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import VisitorCounter from '../ui/VisitorCounter'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
]

const socials = [
  {
    icon: Github,
    href: 'https://github.com/AmitabhAnand04',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/amitabhanand04',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:amitabhanand76@gmail.com',
    label: 'Email',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-dark-700/50 bg-dark-900/50 backdrop-blur-sm">
      <div className="max-w-6xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
                AA
              </div>
              <span className="font-semibold text-white">Amitabh Anand</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed">
              Software Engineer building intelligent systems powered by AI.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-white/50 hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors w-fit"
                >
                  <s.icon size={14} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Amitabh Anand. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <VisitorCounter />
            <p className="text-xs text-white/30 flex items-center gap-1">
              Built with <Heart size={10} className="text-rose-400 fill-rose-400" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
