import { motion } from 'framer-motion'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:opacity-60 disabled:cursor-not-allowed'

const variants = {
  primary: 'bg-accent text-primary shadow-glow hover:shadow-[0_0_0_1px_rgba(255,159,28,0.5),0_24px_60px_-12px_rgba(255,159,28,0.6)]',
  dark: 'bg-primary text-white shadow-soft hover:bg-primary-950',
  secondary: 'bg-secondary text-white shadow-soft hover:bg-secondary-600',
  outline: 'border border-primary/20 text-primary bg-white/70 backdrop-blur hover:border-accent hover:text-accent',
  ghost: 'text-primary hover:bg-primary/5',
  whatsapp: 'bg-[#25D366] text-white shadow-soft hover:bg-[#1fb457]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  as = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconRight = false,
  ...props
}) {
  const Comp = motion[as] || motion.button
  return (
    <Comp
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && !iconRight && <Icon size={18} strokeWidth={2.4} />}
      {children}
      {Icon && iconRight && <Icon size={18} strokeWidth={2.4} />}
    </Comp>
  )
}
