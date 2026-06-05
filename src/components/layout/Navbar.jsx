import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { navLinks } from '../../data/siteContent'
import { scrollToId } from '../../utils/links'
import useScrolled from '../../hooks/useScrolled'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (e, href) => {
    e.preventDefault()
    scrollToId(href)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-400 ${
            scrolled ? 'glass shadow-soft' : 'bg-transparent'
          }`}
        >
          <div className="container-px mx-auto flex max-w-[1400px] items-center justify-between py-3.5">
            <button onClick={(e) => handleNav(e, '#home')} aria-label="Home">
              <Logo light={!scrolled} />
            </button>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    scrolled
                      ? 'text-primary/80 hover:bg-primary/5 hover:text-primary'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                as="a"
                href="#contact"
                onClick={(e) => handleNav(e, '#contact')}
                variant={scrolled ? 'primary' : 'primary'}
                size="sm"
                className="hidden sm:inline-flex"
              >
                Plan My Trip
              </Button>
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className={`flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
                  scrolled ? 'bg-primary/5 text-primary' : 'glass-dark text-white'
                }`}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
