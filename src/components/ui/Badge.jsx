export default function Badge({ children, className = '', tone = 'accent' }) {
  const tones = {
    accent: 'bg-accent/15 text-accent-600 border-accent/30',
    primary: 'bg-primary/10 text-primary border-primary/15',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20',
    light: 'bg-white/80 text-primary border-white/60',
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
