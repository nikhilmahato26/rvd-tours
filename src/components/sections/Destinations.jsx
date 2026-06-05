import { motion } from 'framer-motion'
import { destinations } from '../../data/siteContent'
import { waLink } from '../../utils/links'
import { stagger, viewport } from '../../utils/motion'
import SectionTitle from '../ui/SectionTitle'
import DestinationCard from '../ui/DestinationCard'

export default function Destinations() {
  const handleExplore = (name) => {
    const msg = `Hi! I'd like to know more about tour packages for ${name}.`
    window.open(waLink(undefined, msg), '_blank')
  }

  return (
    <section id="destinations" className="relative bg-white py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <SectionTitle
          eyebrow="Popular Destinations"
          title="Where Would You Like to Go?"
          subtitle="From the snow valleys of the north to the sunny beaches of the west \u2014 discover India\u2019s most breathtaking escapes."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {destinations.map((d) => (
            <DestinationCard
              key={d.name}
              name={d.name}
              desc={d.desc}
              img={d.img}
              onExplore={() => handleExplore(d.name)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
