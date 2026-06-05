import { motion } from 'framer-motion'
import { getIcon } from '../../utils/icons'
import { whyChooseUs, stats } from '../../data/siteContent'
import { fadeUp, scaleIn, stagger, viewport } from '../../utils/motion'
import SectionTitle from '../ui/SectionTitle'

function FeatureCard({ title, desc, icon }) {
  const Icon = getIcon(icon)
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -6 }}
      className="group relative flex gap-4 rounded-3xl glass p-6 shadow-soft"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary p-3.5 text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
        <Icon size={22} strokeWidth={2} />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-primary/65">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Your Journey, In Expert Hands"
          subtitle="We obsess over the details so you can simply relax and enjoy the trip. Here\u2019s what sets R.V.D apart."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid grid-cols-2 gap-4 rounded-3xl bg-primary p-8 text-white sm:grid-cols-4 sm:gap-6 sm:p-10"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-accent sm:text-4xl lg:text-5xl">{s.value}</p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-white/70 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
