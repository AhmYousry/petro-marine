import {
  Award,
  Globe,
  Ship,
  TrendingUp,
  Anchor,
  Building2,
  ShieldCheck,
  Network,
} from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// MISSION VALUES
// ─────────────────────────────────────────────────────────────────────────────

export interface MissionValue {
  id:    string
  icon:  React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
  title: string
  body:  string
}

export const MISSION_VALUES: MissionValue[] = [
  {
    id:    'mission',
    icon:  Anchor,
    title: 'Our Mission',
    body:  'To deliver world-class maritime services with unmatched reliability — ensuring every vessel that calls at an Egyptian port departs faster, safer, and better equipped than it arrived.',
  },
  {
    id:    'vision',
    icon:  Globe,
    title: 'Our Vision',
    body:  'To be the undisputed marine services partner of choice across the Eastern Mediterranean and Red Sea — recognized for engineering excellence, operational integrity, and end-to-end accountability.',
  },
  {
    id:    'values',
    icon:  ShieldCheck,
    title: 'Our Values',
    body:  'Safety without compromise. Transparency in every transaction. Respect for the sea, for our people, and for the trust our customers place in us with their vessels and their cargo.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// STATISTICS
// ─────────────────────────────────────────────────────────────────────────────

export interface StatNumber {
  id:     string
  icon:   React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
  value:  number | null
  display?: string
  suffix: string
  label:  string
  detail: string
}

export const STATS: StatNumber[] = [
  {
    id:     'years',
    icon:   Award,
    value:  50,
    suffix: '+',
    label:  'Years of Operation',
    detail: 'Five decades of unbroken service since 1973.',
  },
  {
    id:     'vessels',
    icon:   Ship,
    value:  2400,
    suffix: '+',
    label:  'Vessels Served',
    detail: 'Tankers, bulkers, container ships, offshore.',
  },
  {
    id:     'ports',
    icon:   Anchor,
    value:  12,
    suffix: '',
    label:  'Egyptian Ports',
    detail: 'Coverage across both seas, both coasts.',
  },
  {
    id:     'engineers',
    icon:   Building2,
    value:  180,
    suffix: '+',
    label:  'Specialists On-Staff',
    detail: 'Engineers, logistics, customs, compliance.',
  },
  {
    id:     'compliance',
    icon:   ShieldCheck,
    value:  null,
    display: '100',
    suffix: '%',
    label:  'Compliance Record',
    detail: 'Zero MARPOL violations across all operations.',
  },
  {
    id:     'response',
    icon:   TrendingUp,
    value:  null,
    display: '24/7',
    suffix: '',
    label:  'Operations Centre',
    detail: 'Senior engineers on call, every hour.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// EGYPTIAN PORTS
// ─────────────────────────────────────────────────────────────────────────────

export interface Port {
  id:        string
  name:      string
  region:    'mediterranean' | 'red-sea' | 'canal'
  type:      string
  services:  number
  yearJoined: string
  featured?: boolean
}

export const PORTS: Port[] = [
  // Mediterranean
  { id: 'alexandria',  name: 'Alexandria',     region: 'mediterranean', type: 'Container · Bulk · Tanker',  services: 10, yearJoined: '1973', featured: true },
  { id: 'damietta',    name: 'Damietta',        region: 'mediterranean', type: 'Container · LNG',            services: 8,  yearJoined: '1989' },
  { id: 'el-dekheila', name: 'El Dekheila',     region: 'mediterranean', type: 'Steel · Bulk',                services: 7,  yearJoined: '1996' },
  { id: 'abu-qir',     name: 'Abu Qir',         region: 'mediterranean', type: 'Fishing · Cabotage',          services: 5,  yearJoined: '2008' },
  // Suez Canal corridor
  { id: 'port-said',   name: 'Port Said',       region: 'canal',         type: 'Container · Transit',         services: 10, yearJoined: '1981', featured: true },
  { id: 'east-port-said', name: 'East Port Said', region: 'canal',      type: 'SCZone · Container',           services: 9,  yearJoined: '2005' },
  { id: 'suez',        name: 'Suez',            region: 'canal',         type: 'Tanker · Transit · Bunker',   services: 10, yearJoined: '1981', featured: true },
  { id: 'el-adabiya',  name: 'El Adabiya',      region: 'canal',         type: 'Bulk · General',              services: 7,  yearJoined: '2003' },
  // Red Sea
  { id: 'ain-sokhna',  name: 'Ain Sokhna',      region: 'red-sea',       type: 'Container · Oil · LNG',       services: 10, yearJoined: '2002', featured: true },
  { id: 'safaga',      name: 'Safaga',          region: 'red-sea',       type: 'Bulk · Phosphate · Pax',      services: 8,  yearJoined: '2002' },
  { id: 'hurghada',    name: 'Hurghada',        region: 'red-sea',       type: 'Cruise · Yacht · Pax',        services: 6,  yearJoined: '2002' },
  { id: 'nuweiba',     name: 'Nuweiba',         region: 'red-sea',       type: 'Ferry · Pax · General',       services: 5,  yearJoined: '2011' },
]

export const REGION_META = {
  mediterranean: { label: 'Mediterranean Coast', color: '#2A5FA5', short: 'MED' },
  canal:         { label: 'Suez Canal Corridor',  color: '#E8520A', short: 'CNL' },
  'red-sea':     { label: 'Red Sea Coast',        color: '#F7A81A', short: 'RED' },
} as const

// ─────────────────────────────────────────────────────────────────────────────
// TRUST INDICATORS
// ─────────────────────────────────────────────────────────────────────────────

export interface Certification {
  id:    string
  code:  string
  body:  string
  scope: string
}

export const CERTIFICATIONS: Certification[] = [
  { id: 'iso-9001',  code: 'ISO 9001:2015', body: 'International Organization for Standardization', scope: 'Quality Management Systems' },
  { id: 'iso-14001', code: 'ISO 14001',      body: 'International Organization for Standardization', scope: 'Environmental Management' },
  { id: 'ism-code',  code: 'ISM Code',        body: 'International Maritime Organization',           scope: 'Safety Management at Sea' },
  { id: 'ohsas',     code: 'OHSAS 18001',     body: 'Occupational Safety & Health Standard',         scope: 'Workplace Health & Safety' },
  { id: 'marpol-i',  code: 'MARPOL Annex I',  body: 'IMO Convention for Prevention of Pollution',    scope: 'Oily Water & Sludge Reception' },
  { id: 'marpol-v',  code: 'MARPOL Annex V',  body: 'IMO Convention for Prevention of Pollution',    scope: 'Garbage Management Compliance' },
]

export interface Partnership {
  id:   string
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
  title: string
  body:  string
}

export const PARTNERSHIPS: Partnership[] = [
  {
    id:    'class',
    icon:  ShieldCheck,
    title: 'Class Society Approved',
    body:  'Recognized service provider to ABS, DNV, Lloyd\'s Register, Bureau Veritas, and ClassNK.',
  },
  {
    id:    'authority',
    icon:  Building2,
    title: 'Port Authority Licensed',
    body:  'Licensed operator at all 12 Egyptian ports, holding active permits with the Suez Canal Authority and Maritime Transport Sector.',
  },
  {
    id:    'network',
    icon:  Network,
    title: 'Global Network Member',
    body:  'Member of the International Ship Suppliers Association (ISSA) and the Egyptian Marine Services Association.',
  },
]
