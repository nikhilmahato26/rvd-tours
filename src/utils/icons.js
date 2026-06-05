// Centralized icon registry.
// Import ONLY the icons used in data files so Vite can tree-shake
// the rest of lucide-react out of the bundle (avoids shipping the
// entire icon set via `import * as Icons`).

import {
  // package category icons
  Users,
  Heart,
  Mountain,
  Users2,
  Briefcase,
  Landmark,
  Sparkles,
  // why-choose-us icons
  ShieldCheck,
  SlidersHorizontal,
  Headset,
  BedDouble,
  BadgeIndianRupee,
  Compass,
  // fallback
  Check,
} from 'lucide-react'

export const iconMap = {
  Users,
  Heart,
  Mountain,
  Users2,
  Briefcase,
  Landmark,
  Sparkles,
  ShieldCheck,
  SlidersHorizontal,
  Headset,
  BedDouble,
  BadgeIndianRupee,
  Compass,
  Check,
}

// Resolve an icon by string key with a safe fallback.
export const getIcon = (name) => iconMap[name] || Sparkles
