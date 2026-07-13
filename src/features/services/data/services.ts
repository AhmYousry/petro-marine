import {
  Anchor,
  Package,
  Droplets,
  Recycle,
  Filter,
  Wrench,
  Gauge,
} from 'lucide-react'

export interface ServiceDetail {
  id:           string
  slug:         string
  icon:         React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
  title:        string
  tagline:      string
  intro:        string
  highlights:   string[]            // bullet list, 4–5 items
  capabilities: { label: string; value: string }[]  // 3 stat-style chips
  imageAccent:  string              // CSS gradient string for the image area
  image?:       string              // photo path; falls back to gradient placeholder
  bg:           'white' | 'smoke'   // alternating background per section
}

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    id:          'marine-supply',
    slug:        'marine-supply',
    icon:        Anchor,
    title:       'Marine Supply',
    tagline:     'Deck. Engine room. Safety. Sourced and delivered shipside.',
    intro:       'Petromarine supplies a comprehensive range of marine equipment and consumables to vessels calling at all 12 Egyptian ports. From deck stores to engine-room spares, our procurement specialists source class-approved items from manufacturer-direct channels — ensuring authenticity, traceability, and on-time delivery to your berth.',
    highlights: [
      'Deck stores, rigging, mooring lines, paints & coatings',
      'Engine-room spares: bearings, gaskets, filters, lubricants',
      'Safety equipment: SOLAS, LSA, fire-fighting consumables',
      'Stainless steel hardware, valves, fittings, instrumentation',
      'Class-approved sourcing with full certification trail',
    ],
    capabilities: [
      { label: 'Catalog Items',  value: '15,000+' },
      { label: 'Delivery Window', value: '6–24 hrs' },
      { label: 'Class Approval',  value: '100%' },
    ],
    imageAccent: 'linear-gradient(135deg, #2A5FA5 0%, #1B2B4B 55%, #0D162C 100%)',
    image:       '/services/marine-supply.jpg',
    bg:          'white',
  },
  {
    id:          'provisions',
    slug:        'provisions',
    icon:        Package,
    title:       'Provisions & Bonded Stores',
    tagline:     'Fresh, frozen, dry, and bonded — vessel-side, on schedule.',
    intro:       'A well-fed crew is a productive crew. Our provisions division operates dedicated cold chain logistics across Egyptian ports, sourcing high-quality fresh produce, premium proteins, dairy, dry goods, and bonded items (alcohol, tobacco, duty-free) to international maritime standards. Every delivery is temperature-monitored and documented end-to-end.',
    highlights: [
      'Fresh produce, dairy, halal-certified meat & poultry',
      'Frozen seafood, IQF vegetables, ice cream, ready meals',
      'Dry stores: rice, flour, oils, canned & packaged goods',
      'Bonded warehouse: spirits, beer, wine, cigarettes',
      'HACCP-certified cold chain, temperature-logged transport',
    ],
    capabilities: [
      { label: 'Cold Chain',       value: '−25°C to +4°C' },
      { label: 'Bonded Warehouse', value: 'Tax-Free' },
      { label: 'Order Lead Time',  value: '24 hrs' },
    ],
    imageAccent: 'linear-gradient(135deg, #E8520A 0%, #9C3608 55%, #1B2B4B 100%)',
    image:       '/services/provisions.jpg',
    bg:          'smoke',
  },
  {
    id:          'fresh-water',
    slug:        'fresh-water',
    icon:        Droplets,
    title:       'Fresh Water Supply',
    tagline:     'Potable water to WHO and MARPOL standards, every port.',
    intro:       'Petromarine\'s fresh water bunkering service delivers potable, microbiologically tested water that meets WHO drinking water guidelines and MARPOL standards. Our shore-side filling stations and dedicated water barges service every vessel class — from coastal feeders to VLCC tankers — with documented quality certification for each delivery.',
    highlights: [
      'WHO-grade potable water, microbiologically tested per batch',
      'High-volume delivery via shore connection or water barge',
      'Quality certification (microbiology + chemistry) per delivery',
      'Hose disinfection between vessels — zero cross-contamination',
      'Available at all 12 Egyptian ports, 24/7 dispatch',
    ],
    capabilities: [
      { label: 'Delivery Rate',  value: '50 m³/h' },
      { label: 'Quality Tested', value: 'Per Batch' },
      { label: 'Port Coverage',  value: '12 Ports' },
    ],
    imageAccent: 'linear-gradient(135deg, #0EA5E9 0%, #1F4880 55%, #0D162C 100%)',
    bg:          'white',
  },
  {
    id:          'garbage',
    slug:        'garbage',
    icon:        Recycle,
    title:       'Garbage Disposal',
    tagline:     'MARPOL Annex V compliance, end-to-end disposal certification.',
    intro:       'Maritime waste management is a regulatory minefield — Petromarine takes the burden off your master and chief engineer. Our MARPOL Annex V-compliant service handles segregated collection, certified onshore transport, and final disposal at licensed facilities. Every consignment generates a Waste Delivery Receipt and full chain-of-custody documentation.',
    highlights: [
      'MARPOL Annex V categories A through K, fully segregated',
      'Food waste, plastics, paper, oils, e-waste, sewage handling',
      'Licensed shoreside disposal partners (incineration / landfill)',
      'Waste Delivery Receipts issued per MARPOL Garbage Record Book',
      'Quarantine handling for animal-product waste (Egyptian Customs)',
    ],
    capabilities: [
      { label: 'MARPOL Categories', value: 'A–K' },
      { label: 'Response Time',     value: '< 4 hrs' },
      { label: 'Documentation',     value: 'Full Chain' },
    ],
    imageAccent: 'linear-gradient(135deg, #059669 0%, #115E59 55%, #0D162C 100%)',
    bg:          'smoke',
  },
  {
    id:          'sludge',
    slug:        'sludge',
    icon:        Filter,
    title:       'Sludge & Bilge Water Removal',
    tagline:     'Oily water separation, bilge cleaning, MARPOL Annex I assured.',
    intro:       'Our sludge and bilge service handles the safe removal, transport, and onshore treatment of oily water mixtures, engine sludge, and contaminated bilge water — fully compliant with MARPOL Annex I requirements. Petromarine operates dedicated slop reception barges and tank trucks, with onshore separators rated for high-throughput treatment and full regulatory reporting.',
    highlights: [
      'Sludge tank pumping, bilge water reception, slop oil removal',
      'Reception barges (200–800 m³ capacity) berthside service',
      'Onshore oily water separators meeting IMO 15 ppm standard',
      'IOPP/ORB updates and reception receipts per port-state regulation',
      'Emergency response within 6 hours, any Egyptian port',
    ],
    capabilities: [
      { label: 'Barge Capacity',  value: '800 m³' },
      { label: 'MARPOL Annex',    value: 'I' },
      { label: 'Treatment Spec',  value: '< 15 ppm' },
    ],
    imageAccent: 'linear-gradient(135deg, #8A9BB5 0%, #2A3A5A 55%, #0D162C 100%)',
    bg:          'white',
  },
  {
    id:          'repair',
    slug:        'repair',
    icon:        Wrench,
    title:       'Ship Repair & Spare Part Clearance',
    tagline:     'On-board repairs, dry-dock coordination, customs-cleared spares.',
    intro:       'Whether it\'s a steering gear emergency or a scheduled mid-life refurbishment, Petromarine deploys qualified marine engineers with average 15+ years shipboard experience. We also operate a dedicated spare-part clearance desk at Egyptian Customs — ensuring critical replacements reach your vessel without bureaucratic delay. Dry-dock liaison, in-water repair, and afloat support all under one team.',
    highlights: [
      'Mechanical, electrical, hydraulic, and structural repairs',
      'Underwater inspection & hull cleaning (IMO compliant)',
      'Dry-dock coordination at major Egyptian shipyards',
      'Spare part import clearance — Customs desk on standby',
      '24/7 emergency response, qualified engineers dispatched',
    ],
    capabilities: [
      { label: 'Engineer Avg Exp', value: '15+ yrs' },
      { label: 'Customs Clearance', value: '24 hrs' },
      { label: 'Response',          value: '24/7' },
    ],
    imageAccent: 'linear-gradient(135deg, #C13D06 0%, #2A3A5A 55%, #0D162C 100%)',
    bg:          'smoke',
  },
  {
    id:          'inspection',
    slug:        'inspection',
    icon:        Gauge,
    title:       'Inspection & Calibration',
    tagline:     'Class-approved surveys, certified calibration, audit-ready records.',
    intro:       'Maintaining class is non-negotiable. Petromarine provides class-approved inspection, testing, and calibration services for fire safety equipment, life-saving appliances, navigation instruments, and pressure systems. Our technicians are accredited by ABS, DNV, Lloyd\'s Register, and Bureau Veritas — ensuring certificates are accepted globally without contention.',
    highlights: [
      'Fire detection & suppression — annual & 5-year surveys',
      'Liferaft & lifeboat servicing per LSA Code',
      'Gas detection & oxygen analyzer calibration',
      'Pressure gauge & thermometer calibration (NIST-traceable)',
      'Navigation equipment, EPIRB, SART, GMDSS testing',
    ],
    capabilities: [
      { label: 'Class Approvals',   value: 'ABS, DNV, LR, BV' },
      { label: 'Calibration Trace', value: 'NIST' },
      { label: 'Certificate Issue', value: 'Same-Day' },
    ],
    imageAccent: 'linear-gradient(135deg, #F7A81A 0%, #C13D06 55%, #1B2B4B 100%)',
    bg:          'white',
  },
]
