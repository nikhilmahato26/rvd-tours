import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../../utils/motion'
import Badge from './Badge'

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={`flex flex-col ${alignment} max-w-2xl gap-4 ${className}`}
    >
      {eyebrow && <Badge tone={light ? 'light' : 'accent'}>{eyebrow}</Badge>}
      <h2
        className={`font-display text-3xl leading-[1.08] sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-primary'
        }`}
        style={{ fontWeight: 600 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed sm:text-lg ${light ? 'text-white/80' : 'text-primary/65'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
