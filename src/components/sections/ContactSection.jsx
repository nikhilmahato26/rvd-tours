import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import {
  User, Phone, MapPin, Calendar, Users, MessageSquare,
  Send, CheckCircle2, Instagram, Globe,
} from 'lucide-react'
import { company, consultants, destinationOptions, primaryContact } from '../../data/siteContent'
import { waLink, telLink, mapLink } from '../../utils/links'
import { fadeLeft, fadeRight, viewport } from '../../utils/motion'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

const fieldBase =
  'w-full rounded-2xl border border-primary/15 bg-white/80 px-4 py-3.5 pl-11 text-sm text-primary placeholder:text-primary/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30'

function Field({ icon: Icon, error, children }) {
  return (
    <div>
      <div className="relative">
        <Icon size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" />
        {children}
      </div>
      {error && <p className="mt-1.5 pl-1 text-xs font-medium text-red-500">{error.message}</p>}
    </div>
  )
}

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const msg =
      `New Trip Enquiry%0A%0A` +
      `Name: ${data.name}%0A` +
      `Phone: ${data.phone}%0A` +
      `Destination: ${data.destination}%0A` +
      `Travel Date: ${data.date || 'Flexible'}%0A` +
      `Travellers: ${data.travelers}%0A` +
      `Message: ${data.message || '-'}`
    window.open(`https://wa.me/${primaryContact.phoneDigits}?text=${msg}`, '_blank')
    setSent(true)
    reset()
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <SectionTitle
          eyebrow="Contact Us"
          title="Plan My Trip"
          subtitle="Share a few details and our travel consultant will get back to you with a customised quote \u2014 usually within a few hours."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="rounded-3xl glass p-6 shadow-card sm:p-8 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field icon={User} error={errors.name}>
                <input
                  className={fieldBase}
                  placeholder="Your Name"
                  {...register('name', { required: 'Name is required' })}
                />
              </Field>

              <Field icon={Phone} error={errors.phone}>
                <input
                  className={fieldBase}
                  placeholder="Phone Number"
                  inputMode="tel"
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: { value: /^[0-9+\-\s]{8,15}$/, message: 'Enter a valid phone number' },
                  })}
                />
              </Field>

              <Field icon={MapPin} error={errors.destination}>
                <select
                  className={`${fieldBase} appearance-none`}
                  defaultValue=""
                  {...register('destination', { required: 'Select a destination' })}
                >
                  <option value="" disabled>Choose Destination</option>
                  {destinationOptions.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </Field>

              <Field icon={Calendar} error={errors.date}>
                <input
                  type="date"
                  className={fieldBase}
                  {...register('date')}
                />
              </Field>

              <Field icon={Users} error={errors.travelers}>
                <input
                  type="number"
                  min="1"
                  className={fieldBase}
                  placeholder="No. of Travellers"
                  {...register('travelers', {
                    required: 'Required',
                    min: { value: 1, message: 'At least 1 traveller' },
                  })}
                />
              </Field>

              <div className="sm:col-span-2">
                <Field icon={MessageSquare} error={errors.message}>
                  <textarea
                    rows={4}
                    className={`${fieldBase} resize-none pt-3.5`}
                    placeholder="Tell us about your dream trip (optional)"
                    {...register('message')}
                  />
                </Field>
              </div>
            </div>

            <Button onClick={handleSubmit(onSubmit)} variant="primary" size="lg" icon={sent ? CheckCircle2 : Send} className="mt-6 w-full">
              {sent ? 'Enquiry Sent — Opening WhatsApp' : 'Send Enquiry'}
            </Button>
            <p className="mt-3 text-center text-xs text-primary/50">
              We respect your privacy. Your details are only used to plan your trip.
            </p>
          </motion.div>

          {/* Info panel */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-5 lg:col-span-2"
          >
            <div className="rounded-3xl bg-primary p-7 text-white shadow-card">
              <h3 className="font-display text-xl font-semibold">Talk to a Consultant</h3>
              <div className="mt-5 space-y-4">
                {consultants.map((c) => (
                  <a key={c.phone} href={telLink(c.phone)} className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 transition hover:bg-white/10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/20 text-accent">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{c.name}</p>
                      <p className="text-xs text-accent">{c.phone}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl glass p-7 shadow-soft">
              <a href={mapLink()} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-primary transition hover:text-accent">
                <MapPin size={20} className="mt-0.5 shrink-0 text-accent" />
                <p className="text-sm leading-snug">{company.address.full}</p>
              </a>
              <div className="mt-4 space-y-3 border-t border-primary/10 pt-4">
                <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-primary/75 transition hover:text-accent">
                  <Globe size={17} className="text-accent" /> {company.website}
                </a>
                <a href={company.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-primary/75 transition hover:text-accent">
                  <Instagram size={17} className="text-accent" /> {company.instagram}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
