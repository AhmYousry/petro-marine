import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Anchor,
} from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// PRIMARY CONTACT METHODS  (top cards)
// ─────────────────────────────────────────────────────────────────────────────

export interface ContactMethod {
  id:        string
  icon:      React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
  label:     string
  primary:   string
  secondary: string
  href:      string
  accent:    string   // tailwind text color for the icon
  iconBg:    string
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id:        'phone',
    icon:      Phone,
    label:     '24/7 Operations Line',
    primary:   '+20 3 555 0192',
    secondary: 'Immediate vessel support, any hour',
    href:      'tel:+2035550192',
    accent:    'text-flame-500',
    iconBg:    'bg-flame-50 ring-flame-100',
  },
  {
    id:        'email',
    icon:      Mail,
    label:     'Email Our Team',
    primary:   'info@petromarine-alex.com',
    secondary: 'Quotes answered within 24 hours',
    href:      'mailto:info@petromarine-alex.com',
    accent:    'text-ocean-600',
    iconBg:    'bg-ocean-50 ring-ocean-100',
  },
  {
    id:        'whatsapp',
    icon:      MessageSquare,
    label:     'WhatsApp Business',
    primary:   '+20 10 18851877',
    secondary: 'Fast coordination on the move',
    href:      'https://wa.me/201018851877',
    accent:    'text-emerald-600',
    iconBg:    'bg-emerald-50 ring-emerald-100',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// OPERATING HOURS
// ─────────────────────────────────────────────────────────────────────────────

export const HOURS = {
  icon:  Clock,
  lines: [
    { label: 'Operations Center', value: '24 / 7 / 365' },
    { label: 'Office Hours',      value: 'Sun–Thu · 08:00–18:00 EET' },
    { label: 'Emergency Support',  value: 'Always available' },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// FORM SUBJECT OPTIONS  (guided routing → better conversion)
// ─────────────────────────────────────────────────────────────────────────────

export const SUBJECT_OPTIONS = [
  'Request a Quote',
  'Marine Supply',
  'Provisions & Bonded Stores',
  'Fresh Water Supply',
  'Waste & Sludge Removal',
  'Ship Repair & Spare Parts',
  'Inspection & Calibration',
  'General Inquiry',
] as const

// ─────────────────────────────────────────────────────────────────────────────
// TRUST / RESPONSE PROMISES  (reduce friction near the form)
// ─────────────────────────────────────────────────────────────────────────────

export const RESPONSE_PROMISES = [
  { icon: Clock,  text: 'Response within 24 hours' },
  { icon: Anchor, text: 'Coverage at all 12 Egyptian ports' },
  { icon: MapPin, text: 'No third-party hops — direct team' },
]
