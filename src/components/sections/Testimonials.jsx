import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/siteContent'
import SectionTitle from '../ui/SectionTitle'

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? 'fill-accent text-accent' : 'text-primary/20'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-sand py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/3 top-10 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="container-px mx-auto max-w-[1400px]">
        <SectionTitle
          eyebrow="Testimonials"
          title="Loved by Travellers Across India"
          subtitle="Real stories from real journeys. Here\u2019s what our travellers have to say about their experience with us."
        />

        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            className="!pb-14"
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <div className="flex h-full min-h-[230px] flex-col rounded-3xl glass p-7 shadow-soft">
                  <div className="flex items-center justify-between">
                    <Quote size={34} className="text-accent/40" />
                    <Stars count={t.rating} />
                  </div>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-primary/75">“{t.text}”</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-primary/10 pt-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-display text-base font-bold text-accent">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{t.name}</p>
                      <p className="text-xs text-primary/55">{t.city}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
