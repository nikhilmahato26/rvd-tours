import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, MessageCircle, Compass } from 'lucide-react'
import { travelVideos } from '../../data/siteContent'
import { fadeUp, scaleIn, stagger, viewport } from '../../utils/motion'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { waLink, scrollToId } from '../../utils/links'

function VideoCard({ video }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [showCenterIcon, setShowCenterIcon] = useState(false)
  const [iconType, setIconType] = useState('play') // 'play' or 'pause'

  const togglePlay = (e) => {
    // Prevent toggling when clicking the mute button specifically
    if (e.target.closest('.mute-btn')) return

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
        triggerCenterIcon('pause')
      } else {
        videoRef.current.play().catch((err) => console.log('Autoplay blocked: ', err))
        setIsPlaying(true)
        triggerCenterIcon('play')
      }
    }
  }

  const triggerCenterIcon = (type) => {
    setIconType(type)
    setShowCenterIcon(true)
    setTimeout(() => {
      setShowCenterIcon(false)
    }, 800)
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <motion.div
      variants={scaleIn}
      className="group relative mx-auto w-full max-w-[340px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-primary/20 shadow-card aspect-[9/16] cursor-pointer"
      onClick={togglePlay}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src={video.url}
        loop
        muted={isMuted}
        playsInline
        autoPlay
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/45 via-transparent to-transparent opacity-50" />

      {/* Play/Pause state alert overlay in center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={showCenterIcon ? { opacity: 0.9, scale: 1.1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20"
        >
          {iconType === 'play' ? <Play size={28} fill="white" /> : <Pause size={28} fill="white" />}
        </motion.div>
      </div>

      {/* Hover action guide overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-primary/20 pointer-events-none">
        <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white border border-white/10 backdrop-blur-sm shadow-soft">
          {isPlaying ? 'Click to Pause' : 'Click to Play'}
        </div>
      </div>

      {/* Top right control: Mute/Unmute */}
      <div className="absolute right-4 top-4 z-10">
        <button
          onClick={toggleMute}
          className="mute-btn flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={18} strokeWidth={2.4} /> : <Volume2 size={18} strokeWidth={2.4} />}
        </button>
      </div>

      {/* Bottom text info (Title/Description) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white select-none">
        <h3 className="font-display text-xl font-semibold leading-tight text-white group-hover:text-accent transition-colors duration-300">
          {video.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-white/70">
          {video.desc}
        </p>

        {/* Small live trip indicator */}
        <div className="mt-4 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
            RVD Travel Diaries
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function VideoShowcase() {
  return (
    <section id="travel-diaries" className="relative bg-white py-20 sm:py-28 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 bottom-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-[120px]" />

      <div className="container-px mx-auto max-w-[1400px]">
        <SectionTitle
          eyebrow="RVD Diaries"
          title="Memories in Motion"
          subtitle="Catch a glimpse of the joy, adventure, and snow-capped wonders experienced by our happy travelers on their journeys."
        />

        {/* Video Cards Grid */}
        <motion.div
          variants={stagger(0.18)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-3xl mx-auto"
        >
          {travelVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </motion.div>

        {/* Extra CTA underneath */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 flex flex-col items-center justify-center gap-4 text-center"
        >
          <p className="text-sm font-medium text-primary/65 max-w-md">
            Love what you see? Let us plan a similar scenic and adventure-filled holiday for you and your family!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="md" icon={Compass} onClick={() => scrollToId('#packages')}>
              Explore Packages
            </Button>
            <Button as="a" href={waLink(undefined, 'Hi RVD Trip! I saw your travel diaries and would love to customize a tour package.')} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="md" icon={MessageCircle}>
              Plan My Trip
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
