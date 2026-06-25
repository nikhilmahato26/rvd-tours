import Hero from '../components/sections/Hero'
import PosterCarousel from '../components/sections/PosterCarousel'
import Destinations from '../components/sections/Destinations'
import VideoShowcase from '../components/sections/VideoShowcase'
import Packages from '../components/sections/Packages'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Testimonials from '../components/sections/Testimonials'
import CTASection from '../components/sections/CTASection'
import ContactSection from '../components/sections/ContactSection'
import FAQ from '../components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <PosterCarousel />
      <Destinations />
      <VideoShowcase />
      <Packages />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <ContactSection />
      <FAQ />
    </>
  )
}
