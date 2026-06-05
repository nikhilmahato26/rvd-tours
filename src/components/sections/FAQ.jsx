import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../../data/siteContent'
import { fadeUp, stagger, viewport } from '../../utils/motion'
import SectionTitle from '../ui/SectionTitle'

function FaqItem({ q, a, open, onToggle }) {
  return (
    <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl glass shadow-soft">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-lg font-semibold text-primary">{q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open ? 'rotate-45 bg-accent text-primary' : 'bg-primary/5 text-primary'
          }`}
        >
          <Plus size={18} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-primary/65">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative bg-sand py-20 sm:py-28">
      <div className="container-px mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="FAQ"
          title="Questions? We\u2019ve Got Answers"
          subtitle="Everything you need to know before booking your next adventure with us."
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 space-y-4"
        >
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
