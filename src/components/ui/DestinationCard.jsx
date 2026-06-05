import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { scaleIn } from '../../utils/motion'

export default function DestinationCard({ name, desc, img, onExplore }) {
  return (
    <motion.button
      type="button"
      onClick={onExplore}
      variants={scaleIn}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="group relative h-72 w-full overflow-hidden rounded-3xl text-left shadow-card sm:h-80"
    >
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/30 to-transparent" />

      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full glass-dark text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
        <ArrowUpRight size={18} />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-center gap-1.5 text-accent">
          <MapPin size={15} />
          <span className="text-xs font-semibold uppercase tracking-[0.16em]">Explore</span>
        </div>
        <h3 className="mt-1 font-display text-2xl font-semibold text-white">{name}</h3>
        <p className="mt-1 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-400 group-hover:max-h-20 group-hover:opacity-100">
          {desc}
        </p>
      </div>
    </motion.button>
  )
}
