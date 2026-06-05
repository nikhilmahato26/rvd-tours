import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`glass rounded-3xl shadow-soft ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
