import logoImage from '../../assets/images/logo.png'

export default function Logo({ light = false, compact = false, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoImage}
        alt="R.V.D Best Quality Trip"
        className={`${compact ? 'h-10' : 'h-12'} w-auto object-contain ${
          light ? 'drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]' : ''
        }`}
      />
    </div>
  )
}
