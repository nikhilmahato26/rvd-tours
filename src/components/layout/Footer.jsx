import { Instagram, Phone, MapPin, Globe, Mail, Heart } from 'lucide-react'
import { company, consultants, navLinks, packages } from '../../data/siteContent'
import { scrollToId, telLink, mapLink } from '../../utils/links'
import Logo from '../ui/Logo'

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault()
    scrollToId(href)
  }

  return (
    <footer className="relative overflow-hidden bg-primary-950 text-white">
      {/* glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container-px mx-auto max-w-[1400px] py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {company.subheading} From snow-capped peaks to golden beaches, we craft journeys you\u2019ll never forget.
            </p>
            <a
              href={company.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-white/90 transition hover:border-accent hover:text-accent"
            >
              <Instagram size={17} /> {company.instagram}
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-sm text-white/65 transition hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-lg font-semibold">Packages</h4>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {packages.map((p) => (
                <li key={p.title}>
                  <a
                    href="#packages"
                    onClick={(e) => handleNav(e, '#packages')}
                    className="text-sm text-white/65 transition hover:text-accent"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-lg font-semibold">Get in Touch</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li>
                <a href={mapLink()} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition hover:text-accent">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span>{company.address.full}</span>
                </a>
              </li>
              {consultants.map((c) => (
                <li key={c.phone}>
                  <a href={telLink(c.phone)} className="flex items-center gap-3 transition hover:text-accent">
                    <Phone size={17} className="shrink-0 text-accent" />
                    <span>{c.name} · {c.phone}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition hover:text-accent">
                  <Globe size={17} className="shrink-0 text-accent" />
                  <span>{company.website}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart size={13} className="fill-accent text-accent" /> for unforgettable journeys
          </p>
        </div>
      </div>
    </footer>
  )
}
