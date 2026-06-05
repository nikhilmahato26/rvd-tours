import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { Phone } from 'lucide-react'
import { waLink, telLink } from '../../utils/links'
import useScrolled from '../../hooks/useScrolled'

export default function FloatingActions() {
  const show = useScrolled(400)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.6, pointerEvents: show ? 'auto' : 'none' }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-5 right-5 z-40 flex flex-col gap-3"
    >
      <a
        href={telLink()}
        aria-label="Call us"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary p-3.5 text-white shadow-card transition hover:bg-primary-950"
      >
        <Phone size={22} />
      </a>
      <motion.a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition hover:bg-[#1fb457]"
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </motion.div>
  )
}
