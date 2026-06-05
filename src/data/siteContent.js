// =============================================================
//  R.V.D Best Quality Trip — Centralized Site Content
//  Edit everything here. Components read from this single file.
// =============================================================

import poster1 from '../assets/images/1.jpeg'
import poster2 from '../assets/images/2.jpeg'
import poster3 from '../assets/images/3.jpeg'
import poster4 from '../assets/images/4.jpeg'
import poster5 from '../assets/images/5.jpeg'

export const company = {
  name: 'R.V.D Best Quality Trip',
  shortName: 'R.V.D',
  tagline: 'Travel & Tourism Company',
  subheading: 'Creating unforgettable travel experiences across India.',
  website: 'www.rvdbestqualitytrip.com',
  websiteUrl: 'https://www.rvdbestqualitytrip.com',
  instagram: '@r.v.d_best_quality_trip',
  instagramUrl: 'https://instagram.com/r.v.d_best_quality_trip',
  address: {
    line1: 'Plot No. 256, Shop No. 5',
    line2: 'Sombazar Chowk, Gali No. 3',
    line3: 'Jain Nagar, Delhi – 110081',
    full: 'Plot No. 256, Shop No. 5, Sombazar Chowk, Gali No. 3, Jain Nagar, Delhi – 110081',
    mapQuery: 'Jain Nagar, Delhi 110081',
  },
}

export const consultants = [
  {
    name: 'Vishal Chaudhary',
    role: 'Travel Consultant',
    phone: '+91 7428958091',
    phoneDigits: '917428958091',
  },
  {
    name: 'Deepanshu Pal',
    role: 'Travel Consultant',
    phone: '+91 9654211968',
    phoneDigits: '919654211968',
  },
]

// Primary number used for global WhatsApp / Call CTAs
export const primaryContact = consultants[0]

export const whatsappMessage =
  'Hi R.V.D Best Quality Trip! I would like to plan a trip. Please share package details.'

// --------------------------------------------------------------
//  Navigation
// --------------------------------------------------------------
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'Offers', href: '#offers' },
  { label: 'About', href: '#why-choose-us' },
  { label: 'Contact', href: '#contact' },
]

// --------------------------------------------------------------
//  Hero background carousel (cinematic mountains)
//  Swap with /assets/images locals anytime.
// --------------------------------------------------------------
export const heroSlides = [
  { name: 'Kashmir', img: 'https://images.pexels.com/photos/27497828/pexels-photo-27497828.jpeg' },
  { name: 'Manali', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1920&q=80' },
  { name: 'Shimla', img: 'https://images.pexels.com/photos/30550228/pexels-photo-30550228.jpeg' },
  { name: 'Leh Ladakh', img: 'https://images.pexels.com/photos/37839609/pexels-photo-37839609.jpeg' },
  { name: 'Mussoorie', img: 'https://images.pexels.com/photos/2070307/pexels-photo-2070307.jpeg' },
  { name: 'Nainital', img: 'https://images.pexels.com/photos/16060830/pexels-photo-16060830.jpeg' },
  { name: 'Auli', img: 'https://images.pexels.com/photos/9963746/pexels-photo-9963746.jpeg' },
]

// --------------------------------------------------------------
//  Hero travel experience cards (4)
// --------------------------------------------------------------
export const experiences = [
  {
    title: 'Adventure Rafting',
    desc: 'Ride roaring rapids through the Himalayan foothills with certified guides.',
    img: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Hill Station Tours',
    desc: 'Misty mornings, pine valleys and colonial charm across India\u2019s finest hills.',
    img: 'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Paragliding Adventures',
    desc: 'Soar above valleys and lakes with breathtaking aerial views and total safety.',
    img: 'https://images.pexels.com/photos/14022247/pexels-photo-14022247.jpeg',
  },
  {
    title: 'Snow Experiences',
    desc: 'Skiing, snow trekking and pristine white landscapes in Auli & Gulmarg.',
    img: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=900&q=80',
  },
]

// --------------------------------------------------------------
//  Trust bar chips
// --------------------------------------------------------------
export const trustItems = [
  'Family Tours',
  'Honeymoon Packages',
  'Adventure Tours',
  'Custom Trips',
  '24/7 Support',
  'Best Price Guarantee',
]

// --------------------------------------------------------------
//  Poster carousel (A4 portrait — DO NOT crop)
//  Add your poster image URL in `img` and it will render as the full card.
//  Set `img: null` to render the branded placeholder poster.
// --------------------------------------------------------------
export const posters = [
  { title: 'Tour Package 1', subtitle: 'Special Offer', price: 'Contact us', img: poster1, theme: 'kashmir' },
  { title: 'Tour Package 2', subtitle: 'Special Offer', price: 'Contact us', img: poster2, theme: 'manali' },
  { title: 'Tour Package 3', subtitle: 'Special Offer', price: 'Contact us', img: poster3, theme: 'ladakh' },
  { title: 'Tour Package 4', subtitle: 'Special Offer', price: 'Contact us', img: poster4, theme: 'goa' },
  { title: 'Tour Package 5', subtitle: 'Special Offer', price: 'Contact us', img: poster5, theme: 'shimla' },
]

// --------------------------------------------------------------
//  Popular destinations (8)
// --------------------------------------------------------------
export const destinations = [
  { name: 'Kashmir', desc: 'Shikara rides, snow peaks & tulip gardens.', img: 'https://images.unsplash.com/photo-1566837497312-7be4ebb33f6b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Manali', desc: 'Solang Valley, Rohtang & riverside cafes.', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80' },
  { name: 'Shimla', desc: 'The Mall, toy train & colonial heritage.', img: 'https://images.unsplash.com/photo-1597167071847-e67ca96b5b29?auto=format&fit=crop&w=900&q=80' },
  { name: 'Leh Ladakh', desc: 'Pangong Lake, monasteries & high passes.', img: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=900&q=80' },
  { name: 'Mussoorie', desc: 'Queen of Hills, Kempty Falls & ropeway.', img: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=900&q=80' },
  { name: 'Nainital', desc: 'Boating on the lake & snow-view points.', img: 'https://images.unsplash.com/photo-1623691841459-d8a30f9d6d6e?auto=format&fit=crop&w=900&q=80' },
  { name: 'Auli', desc: 'Skiing slopes & panoramic Himalayan views.', img: 'https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&w=900&q=80' },
  { name: 'Goa', desc: 'Golden beaches, nightlife & water sports.', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80' },
]

// --------------------------------------------------------------
//  Tour package categories (7)
// --------------------------------------------------------------
export const packages = [
  { title: 'Family Packages', desc: 'Comfortable, wholesome itineraries built around every age group.', icon: 'Users', from: '\u20B99,999', tag: 'Most Loved' },
  { title: 'Honeymoon Packages', desc: 'Private, romantic getaways with candlelight dinners & premium stays.', icon: 'Heart', from: '\u20B912,499', tag: 'Couples' },
  { title: 'Adventure Tours', desc: 'Rafting, paragliding, trekking & snow sports for thrill-seekers.', icon: 'Mountain', from: '\u20B910,499', tag: 'Thrill' },
  { title: 'Group Tours', desc: 'Friends & big-group departures with the best per-head pricing.', icon: 'Users2', from: '\u20B98,499', tag: 'Best Value' },
  { title: 'Corporate Tours', desc: 'Offsites, MICE & team retreats handled end-to-end.', icon: 'Briefcase', from: '\u20B913,999', tag: 'Business' },
  { title: 'Religious Tours', desc: 'Char Dham, Vaishno Devi & spiritual circuits with care.', icon: 'Landmark', from: '\u20B97,499', tag: 'Pilgrimage' },
  { title: 'Custom Tours', desc: 'Tell us your dream trip — we craft it exactly to your taste.', icon: 'Sparkles', from: 'On request', tag: 'Tailored' },
]

// --------------------------------------------------------------
//  Why choose us (6)
// --------------------------------------------------------------
export const whyChooseUs = [
  { title: 'Trusted Travel Partner', desc: 'Hundreds of happy travellers across India trust us with their journeys.', icon: 'ShieldCheck' },
  { title: 'Customized Packages', desc: 'Every itinerary is tailored to your budget, dates and travel style.', icon: 'SlidersHorizontal' },
  { title: '24/7 Support', desc: 'Real humans on call before, during and after your trip — always.', icon: 'Headset' },
  { title: 'Verified Hotels', desc: 'Hand-picked, quality-checked stays. No surprises on arrival.', icon: 'BedDouble' },
  { title: 'Affordable Pricing', desc: 'Best-price guarantee with transparent, no-hidden-cost quotes.', icon: 'BadgeIndianRupee' },
  { title: 'Expert Travel Planning', desc: 'Seasoned consultants who know every route, season and shortcut.', icon: 'Compass' },
]

// --------------------------------------------------------------
//  Testimonials
// --------------------------------------------------------------
export const testimonials = [
  { name: 'Ananya Sharma', city: 'Delhi', rating: 5, text: 'Our Kashmir trip was flawless — every hotel, every cab, perfectly arranged. Vishal ji planned it beautifully!' },
  { name: 'Rohit & Priya', city: 'Gurugram', rating: 5, text: 'Booked our honeymoon to Manali. Romantic stays, smooth transfers and amazing pricing. Highly recommend R.V.D!' },
  { name: 'Karan Mehta', city: 'Noida', rating: 5, text: 'Did the Leh Ladakh bike expedition with friends. Brilliantly organised and 24/7 support was a lifesaver.' },
  { name: 'Sneha Verma', city: 'Faridabad', rating: 5, text: 'Family tour to Shimla–Mussoorie was so well planned. Kids loved it and nothing felt rushed. Thank you Deepanshu!' },
  { name: 'Aman Gupta', city: 'Delhi', rating: 5, text: 'Transparent pricing, no hidden charges and genuinely helpful team. Our Goa trip was a blast.' },
]

// --------------------------------------------------------------
//  FAQ
// --------------------------------------------------------------
export const faqs = [
  { q: 'How do I book a tour package?', a: 'Just send us an enquiry through the contact form, WhatsApp or a call. Our consultant will share a customised quote and itinerary within hours.' },
  { q: 'Are the packages customizable?', a: 'Absolutely. Every package is fully customizable — dates, hotels, transport, number of travellers and add-on activities can all be tailored to you.' },
  { q: 'What is included in the package price?', a: 'Typically accommodation, transfers, sightseeing and selected meals. Exact inclusions are listed clearly in your quote with no hidden charges.' },
  { q: 'Do you arrange honeymoon and family trips?', a: 'Yes — we specialise in honeymoon, family, group, corporate, religious and fully custom tours across India.' },
  { q: 'Is support available during the trip?', a: 'Yes, we provide 24/7 on-trip support. You can reach our team any time during your journey for assistance.' },
  { q: 'How early should I book?', a: 'For peak seasons (summer & festive months) we recommend booking 3–4 weeks ahead to lock in the best hotels and prices.' },
]

// --------------------------------------------------------------
//  Contact form select options
// --------------------------------------------------------------
export const destinationOptions = [
  'Kashmir', 'Manali', 'Shimla', 'Leh Ladakh', 'Mussoorie',
  'Nainital', 'Auli', 'Goa', 'Other / Not sure',
]

export const stats = [
  { value: '5000+', label: 'Happy Travellers' },
  { value: '8+', label: 'Top Destinations' },
  { value: '4.9', label: 'Average Rating' },
  { value: '24/7', label: 'Support' },
]
