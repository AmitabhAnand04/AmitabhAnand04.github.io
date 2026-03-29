import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Clock, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react'

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amitabhanand76@gmail.com',
    href: 'mailto:amitabhanand76@gmail.com',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10 border-rose-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/amitabhanand04',
    href: 'https://linkedin.com/in/amitabhanand04',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/AmitabhAnand04',
    href: 'https://github.com/AmitabhAnand04',
    color: 'text-white/70',
    bg: 'bg-white/5 border-white/10',
  },
]

const faqs = [
  {
    q: 'Are you available for freelance or contract work?',
    a: 'Yes — I\'m open to freelance projects, especially those involving AI systems, LLM integrations, RAG pipelines, or enterprise backend development. Feel free to reach out with details.',
  },
  {
    q: 'What industries have you worked in?',
    a: 'I\'ve built systems for insurance, healthcare, real estate, sales/CRM, and enterprise data integration. My AI work spans document processing, chatbots, scheduling agents, and data validation.',
  },
  {
    q: 'Do you work remotely?',
    a: 'Yes, I work remotely and am comfortable with async communication across time zones.',
  },
  {
    q: 'What\'s your typical response time?',
    a: 'I typically respond to emails and LinkedIn messages within 24 hours on weekdays.',
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="border border-dark-600 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-dark-800 hover:bg-dark-700 transition-colors"
      >
        <span className="text-sm font-medium text-white/80">{q}</span>
        {open ? (
          <ChevronUp size={16} className="text-white/30 flex-shrink-0 ml-3" />
        ) : (
          <ChevronDown size={16} className="text-white/30 flex-shrink-0 ml-3" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-white/50 leading-relaxed bg-dark-800 border-t border-dark-600/50">
          <div className="pt-4">{a}</div>
        </div>
      )}
    </motion.div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build mailto link as fallback (no backend needed for GitHub Pages)
    const subject = encodeURIComponent(`[Portfolio] ${form.subject} — from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:amitabhanand76@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Let's Work Together
          </h1>
          <p className="text-white/40 text-sm sm:text-base max-w-lg">
            Whether it's a job opportunity, project collaboration, or just a chat about AI —
            I'm always happy to connect.
          </p>
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Contact photo */}
            <div className="flex items-center gap-4 bg-dark-800 border border-dark-600 rounded-2xl p-4">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-indigo-500/30 flex-shrink-0">
                <img src="/photos/contact.svg" alt="Amitabh Anand"
                     className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Amitabh Anand</p>
                <p className="text-xs text-white/40">Software Engineer</p>
                <p className="text-xs text-indigo-400 mt-0.5">Kolkata, India</p>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-green-500/5 border border-green-500/15 rounded-2xl p-5 flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-slow mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-400 text-sm mb-1">Open to Opportunities</p>
                <p className="text-xs text-white/40 leading-relaxed">
                  Available for full-time roles, freelance projects, and consulting engagements.
                </p>
              </div>
            </div>

            {/* Response time */}
            <div className="bg-dark-800 border border-dark-600 rounded-2xl p-5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                <Clock size={14} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-white/30 font-medium">Response Time</p>
                <p className="text-sm text-white/70">Usually within 24 hours</p>
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-4 bg-dark-800 border rounded-2xl card-hover ${s.bg}`}
                >
                  <div className={`w-8 h-8 rounded-xl ${s.bg} border flex items-center justify-center flex-shrink-0`}>
                    <s.icon size={15} className={s.color} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-white/30 font-medium">{s.label}</p>
                    <p className="text-sm text-white/70 truncate">{s.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-dark-800 border border-dark-600 rounded-2xl p-6 sm:p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 size={48} className="text-green-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-white/40 max-w-xs">
                    Your email client should have opened. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/40 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-dark-700 border border-dark-500 rounded-xl px-4 py-3 text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/40 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-dark-700 border border-dark-500 rounded-xl px-4 py-3 text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">
                      Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                      className="w-full bg-dark-700 border border-dark-500 rounded-xl px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all appearance-none"
                      style={{ fontSize: '16px' }}
                    >
                      <option value="" disabled>Select a subject...</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Project Collaboration">Project Collaboration</option>
                      <option value="Freelance Inquiry">Freelance Inquiry</option>
                      <option value="General Chat">Just saying hi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-dark-700 border border-dark-500 rounded-xl px-4 py-3 text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none"
                      style={{ fontSize: '16px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 rounded-xl text-white font-semibold text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-xl font-bold text-white">Common Questions</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
