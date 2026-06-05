import { motion } from 'framer-motion'
import { packages } from '../../data/siteContent'
import { waLink } from '../../utils/links'
import { stagger, viewport } from '../../utils/motion'
import SectionTitle from '../ui/SectionTitle'
import PackageCard from '../ui/PackageCard'

export default function Packages() {
  const handleEnquire = (title) => {
    const msg = `Hi! I'm interested in your ${title}. Please share more details.`
    window.open(waLink(undefined, msg), '_blank')
  }

  return (
    <section id="packages" className="relative overflow-hidden bg-sand py-20 sm:py-28">
      <div className="pointer-events-none absolute right-1/4 top-0 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container-px mx-auto max-w-[1400px]">
        <SectionTitle
          eyebrow="Tour Packages"
          title="Curated Trips for Every Traveller"
          subtitle="Whatever your reason to travel \u2014 we have a package shaped around it, fully customizable to your budget and dates."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {packages.map((p) => (
            <PackageCard key={p.title} {...p} onEnquire={() => handleEnquire(p.title)} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
