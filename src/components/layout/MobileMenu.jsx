import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone } from 'lucide-react'
import { navLinks, consultants } from '../../data/siteContent'
import { scrollToId, telLink } from '../../utils/links'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import Logo from '../ui/Logo'
import Button from '../ui/Button'

export default function MobileMenu({ open, onClose }) {
  useLockBodyScroll(open)

  const handleNav = (href) => {
    onClose()
    setTimeout(() => scrollToId(href), 250)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] lg:hidden"
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-primary-950/40 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-sand p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary transition hover:bg-primary hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                  onClick={() => handleNav(link.href)}
                  className="rounded-2xl px-4 py-3.5 text-left font-display text-xl font-semibold text-primary transition hover:bg-white hover:text-accent"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="mt-auto space-y-4">
              <div className="rounded-2xl glass p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/50">Talk to a consultant</p>
                {consultants.map((c) => (
                  <a
                    key={c.phone}
                    href={telLink(c.phone)}
                    className="mt-2 flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    <Phone size={15} className="text-accent" /> {c.name} · {c.phone}
                  </a>
                ))}
              </div>
              <Button
                as="a"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNav('#contact')
                }}
                variant="primary"
                size="lg"
                className="w-full"
              >
                Plan My Trip
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
