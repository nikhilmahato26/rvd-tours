import { company, primaryContact, whatsappMessage } from '../data/siteContent'

// Build a WhatsApp deep link
export const waLink = (digits = primaryContact.phoneDigits, message = whatsappMessage) =>
  `https://wa.me/${digits}?text=${encodeURIComponent(message)}`

// Build a tel: link from a display phone number
export const telLink = (phone = primaryContact.phone) =>
  `tel:${phone.replace(/\s+/g, '')}`

// Google Maps link from the address
export const mapLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address.mapQuery)}`

// Smooth scroll to an in-page anchor (accounts for fixed navbar)
export const scrollToId = (href) => {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    const offset = 84
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
