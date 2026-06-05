import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { getIcon } from '../../utils/icons'
import { scaleIn } from '../../utils/motion'
import Badge from './Badge'

export default function PackageCard({ title, desc, icon, from, tag, onEnquire }) {
  const Icon = getIcon(icon)
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl glass p-7 shadow-soft"
    >
      {/* glow accent */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40" />

      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-accent shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon size={26} strokeWidth={2} />
        </div>
        {tag && <Badge tone="secondary">{tag}</Badge>}
      </div>

      <h3 className="mt-6 font-display text-2xl font-semibold text-primary">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-primary/65">{desc}</p>

      <div className="mt-6 flex items-center justify-between border-t border-primary/10 pt-5">
        <div>
          <p className="text-xs uppercase tracking-wide text-primary/45">Starting from</p>
          <p className="font-display text-xl font-semibold text-primary">{from}</p>
        </div>
        <button
          type="button"
          onClick={onEnquire}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent hover:text-primary"
        >
          Enquire <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  )
}
