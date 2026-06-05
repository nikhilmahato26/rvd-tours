import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import {
  Phone, MapPin, Globe, Instagram, ChevronDown,
  Compass, MessageCircle, FileText,
} from 'lucide-react'
import {
  company, consultants, heroSlides, experiences, trustItems,
} from '../../data/siteContent'
import { waLink, telLink, mapLink, scrollToId } from '../../utils/links'
import { fadeUp, stagger, viewport } from '../../utils/motion'
import Logo from '../ui/Logo'
import Button from '../ui/Button'

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="group relative h-64 overflow-hidden rounded-3xl shadow-card"
    >
      <img
        src={exp.img}
        alt={exp.title}
        loading={index === 0 ? 'eager' : 'lazy'}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-xl font-semibold text-white">{exp.title}</h3>
        <p className="mt-1.5 text-sm leading-snug text-white/75">{exp.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative isolate min-h-screen w-full overflow-hidden bg-primary-950 pb-32 pt-28 sm:pt-32">
      {/* ---------- Background carousel ---------- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.4 }, scale: { duration: 6, ease: 'linear' } }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[active].img}
              alt={heroSlides[active].name}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/55 to-primary-950/85" />
        <div className="absolute inset-0 bg-primary-950/30" />
      </div>

      {/* slide label */}
      <div className="absolute right-5 top-28 z-10 hidden items-center gap-2 sm:flex lg:right-12">
        <div className="flex gap-1.5">
          {heroSlides.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActive(i)}
              aria-label={s.name}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? 'w-8 bg-accent' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">
          {heroSlides[active].name}
        </span>
      </div>

      <div className="container-px relative z-10 mx-auto max-w-[1400px]">
        {/* ---------- Top contact bar ---------- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto grid w-full max-w-4xl grid-cols-2 items-center gap-3 rounded-3xl glass-dark p-4 sm:grid-cols-3 sm:gap-4 sm:p-5"
        >
          {/* Left consultant */}
          <a href={telLink(consultants[0].phone)} className="flex items-center gap-3 text-left">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
              <Phone size={18} />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">{consultants[0].name}</p>
              <p className="text-[11px] text-white/65">{consultants[0].role}</p>
              <p className="text-xs font-medium text-accent">{consultants[0].phone}</p>
            </div>
          </a>

          {/* Center logo */}
          <div className="order-last  col-span-2 flex justify-center sm:order-none sm:col-span-1">
            <Logo light />
          </div>

          {/* Right consultant */}
          <a href={telLink(consultants[1].phone)} className="flex items-center justify-end gap-3 text-right">
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">{consultants[1].name}</p>
              <p className="text-[11px] text-white/65">{consultants[1].role}</p>
              <p className="text-xs font-medium text-accent">{consultants[1].phone}</p>
            </div>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
              <Phone size={18} />
            </div>
          </a>
        </motion.div>

        {/* ---------- Branding ---------- */}
        <motion.div
          variants={stagger(0.14, 0.3)}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-12 max-w-4xl text-center sm:mt-16"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              <Compass size={14} className="text-accent" /> Travel & Tourism Company
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-8xl"
            style={{ fontWeight: 600 }}
          >
            R.V.D <span className="text-gradient">Best Quality</span> Trip
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-sm font-semibold uppercase tracking-[0.32em] text-accent sm:text-base"
          >
            Travel &amp; Tourism Company
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {company.subheading}
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="lg" icon={Compass} onClick={() => scrollToId('#packages')}>
              Explore Packages
            </Button>
            <Button variant="outline" size="lg" icon={FileText} onClick={() => scrollToId('#contact')} className="!text-white !border-white/40 !bg-white/10">
              Get Free Quote
            </Button>
            <Button as="a" href={waLink()} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg" icon={MessageCircle}>
              WhatsApp Now
            </Button>
          </motion.div>
        </motion.div>

        {/* ---------- Travel experience cards ---------- */}
        <motion.div
          variants={stagger(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 sm:mt-20"
        >
          {/* Tablet 2x2 + Desktop 4-row grid */}
          <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.title} exp={exp} index={i} />
            ))}
          </div>

          {/* Mobile swiper */}
          <div className="sm:hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1.15}
              spaceBetween={16}
              centeredSlides
              loop
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="!pb-12"
            >
              {experiences.map((exp, i) => (
                <SwiperSlide key={exp.title}>
                  <ExperienceCard exp={exp} index={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        {/* ---------- Trust bar ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl glass-dark px-6 py-4"
        >
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium text-white/85 sm:text-sm">{item}</span>
              {i < trustItems.length - 1 && <span className="hidden text-white/20 sm:inline">·</span>}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ---------- Bottom floating glass info bar ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        className="container-px relative z-10 mx-auto mt-12 max-w-[1400px]"
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl glass-dark text-white shadow-card lg:grid-cols-4">
          <a href={mapLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-5 transition hover:bg-white/5">
            <MapPin size={20} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <p className="text-[11px] uppercase tracking-wide text-white/55">Address</p>
              <p className="mt-0.5 text-sm leading-snug text-white/90">{company.address.line3}</p>
            </div>
          </a>
          <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-5 transition hover:bg-white/5">
            <Globe size={20} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <p className="text-[11px] uppercase tracking-wide text-white/55">Website</p>
              <p className="mt-0.5 text-sm leading-snug text-white/90">{company.website}</p>
            </div>
          </a>
          <a href={company.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-5 transition hover:bg-white/5">
            <Instagram size={20} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <p className="text-[11px] uppercase tracking-wide text-white/55">Instagram</p>
              <p className="mt-0.5 text-sm leading-snug text-white/90">{company.instagram}</p>
            </div>
          </a>
          <a href={telLink(consultants[0].phone)} className="flex items-start gap-3 p-5 transition hover:bg-white/5">
            <Phone size={20} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <p className="text-[11px] uppercase tracking-wide text-white/55">Phone</p>
              <p className="mt-0.5 text-sm leading-snug text-white/90">{consultants[0].phone}</p>
            </div>
          </a>
        </div>
      </motion.div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <ChevronDown className="animate-bounce text-white/60" />
      </div>
    </section>
  )
}
