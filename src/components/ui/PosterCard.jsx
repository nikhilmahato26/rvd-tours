import { motion } from 'framer-motion'

// Theme gradients for the branded placeholder poster (used when img is null).
const themeGradients = {
  kashmir: 'from-[#0B1F44] via-[#16386f] to-[#2563EB]',
  manali: 'from-[#0B1F44] via-[#1f4f7a] to-[#3a7bd5]',
  ladakh: 'from-[#13294b] via-[#3a2c5f] to-[#FF9F1C]',
  goa: 'from-[#0B1F44] via-[#0e6e7a] to-[#FF9F1C]',
  shimla: 'from-[#0B1F44] via-[#274472] to-[#5b8fb9]',
  auli: 'from-[#0B1F44] via-[#1e3a5f] to-[#9bbcd6]',
  default: 'from-[#0B1F44] via-[#16386f] to-[#FF9F1C]',
}

function PlaceholderPoster({ title, subtitle, price, theme }) {
  const grad = themeGradients[theme] || themeGradients.default
  return (
    <div className={`relative flex h-full w-full flex-col justify-between bg-gradient-to-br ${grad} p-6`}>
      {/* decorative rings */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/15" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-52 w-52 rounded-full border border-white/10" />

      <div className="relative">
        <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
          R.V.D Best Quality Trip
        </span>
      </div>

      <div className="relative">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">{subtitle}</p>
        <h3 className="mt-2 font-display text-3xl font-semibold leading-tight text-white">{title}</h3>
      </div>

      <div className="relative flex items-end justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-wide text-white/60">Starting</p>
          <p className="font-display text-2xl font-bold text-white">{price}</p>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
          Per Person*
        </span>
      </div>
    </div>
  )
}

export default function PosterCard({ poster }) {
  const { title, subtitle, price, img, theme } = poster
  return (
    <div className="group h-full px-2 pb-10 pt-2">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 240, damping: 22 }}
        className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-2xl border border-white/60 bg-white shadow-card"
      >
        {/* Poster files are 2:3 portrait, so the full artwork stays visible. */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '2 / 3' }}>
          {img ? (
            <img
              src={img}
              alt={title}
              loading="lazy"
              className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
              <PlaceholderPoster title={title} subtitle={subtitle} price={price} theme={theme} />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
