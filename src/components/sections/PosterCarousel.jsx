import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { posters } from '../../data/siteContent'
import SectionTitle from '../ui/SectionTitle'
import PosterCard from '../ui/PosterCard'

export default function PosterCarousel() {
  return (
    <section id="offers" className="relative bg-sand py-20 sm:py-28">
      {/* soft background accents */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-accent/10 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-72 w-72 rounded-full bg-secondary/10 blur-[110px]" />

      <div className="container-px mx-auto max-w-[1400px]">
        <SectionTitle
          eyebrow="Special Travel Offers"
          title="Explore Our Latest Tour Packages"
          subtitle="Handpicked seasonal deals across India\u2019s most loved destinations \u2014 limited-time prices, premium stays."
        />

        <div className="relative mt-12">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Keyboard]}
            className="poster-swiper !pb-16"
            spaceBetween={20}
            loop
            grabCursor
            keyboard={{ enabled: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
          >
            {posters.map((poster) => (
              <SwiperSlide key={poster.title} className="h-auto">
                <PosterCard poster={poster} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
