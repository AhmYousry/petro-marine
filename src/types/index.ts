// ─── Global Type Definitions ─────────────────────────────────────────────────

// ── Navigation ───────────────────────────────────────────────────────────────
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
  external?: boolean
}

// ── Services ─────────────────────────────────────────────────────────────────
export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  category: ServiceCategory
  features: string[]
  specifications?: Record<string, string>
  imageUrl?: string
}

export type ServiceCategory =
  | 'vessel-operations'
  | 'offshore-support'
  | 'marine-logistics'
  | 'fuel-supply'
  | 'maintenance'
  | 'consultancy'

// ── Team ─────────────────────────────────────────────────────────────────────
export interface TeamMember {
  id: string
  name: string
  role: string
  department: string
  bio: string
  imageUrl?: string
  credentials?: string[]
}

// ── Statistics ───────────────────────────────────────────────────────────────
export interface Statistic {
  id: string
  value: string
  unit?: string
  label: string
  description?: string
}

// ── Contact ──────────────────────────────────────────────────────────────────
export interface ContactForm {
  fullName: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  serviceInterest?: ServiceCategory
}

export interface ContactInfo {
  address: string
  city: string
  country: string
  phone: string
  email: string
  coordinates?: {
    lat: number
    lng: number
  }
}

// ── Testimonials ─────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  logoUrl?: string
  rating?: number
}

// ── Certification ─────────────────────────────────────────────────────────────
export interface Certification {
  id: string
  name: string
  issuer: string
  year: number
  logoUrl?: string
  validUntil?: string
}

// ── Vessel ───────────────────────────────────────────────────────────────────
export interface Vessel {
  id: string
  name: string
  type: string
  flag: string
  capacity?: string
  built?: number
  status: 'active' | 'maintenance' | 'standby'
  specifications?: Record<string, string>
  imageUrl?: string
}

// ── Generic ──────────────────────────────────────────────────────────────────
export interface SeoMeta {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}

export type WithClassName<T = object> = T & {
  className?: string
}

export type WithChildren<T = object> = T & {
  children: React.ReactNode
}
