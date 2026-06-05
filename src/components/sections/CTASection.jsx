import { motion } from 'framer-motion'
import { FileText, Phone, MessageCircle } from 'lucide-react'
import { waLink, telLink, scrollToId } from '../../utils/links'
import { fadeUp, viewport } from '../../utils/motion'
import Button from '../ui/Button'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-sand py-20 sm:py-24">
      <div className="container-px mx-auto max-w-[1400px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center shadow-card sm:px-12 sm:py-20"
        >
          {/* atmosphere */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-secondary/30 blur-[110px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Ready When You Are
            </span>
            <h2
              className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
              style={{ fontWeight: 600 }}
            >
              Let&apos;s Plan Your Next Journey
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Tell us where you dream of going. We&apos;ll handle the stays, transfers and surprises — you just pack your bags.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary" size="lg" icon={FileText} onClick={() => scrollToId('#contact')}>
                Get Free Quote
              </Button>
              <Button as="a" href={telLink()} variant="outline" size="lg" icon={Phone} className="!border-white/40 !bg-white/10 !text-white">
                Call Now
              </Button>
              <Button as="a" href={waLink()} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg" icon={MessageCircle}>
                WhatsApp Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
