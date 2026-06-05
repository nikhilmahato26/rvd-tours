import logoImage from '../../assets/images/logo.png'

const logoSizes = {
  compact: 'h-10',
  default: 'h-12',
  nav: 'h-16 sm:h-20',
}

export default function Logo({ light = false, compact = false, size = 'default', className = '' }) {
  const imageSize = compact ? logoSizes.compact : logoSizes[size] || logoSizes.default

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoImage}
        alt="R.V.D Best Quality Trip"
        className={`${imageSize} w-auto object-contain ${
          light ? 'drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)] bg-white rounded-full' : ''
        }`}
      />
    </div>
  )
}
