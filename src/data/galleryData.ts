export type GalleryCategory =
  | 'All'
  | 'Clinical Cases'
  | 'Certifications'
  | 'Academic & Events'
  | 'Hospital & OT';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinical Cases' | 'Certifications' | 'Academic & Events' | 'Hospital & OT';
  image: string;
  badge: string;
  date: string;
  location: string;
  description: string;
  stats?: string;
}

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'All', label: 'All Media' },
  { id: 'Clinical Cases', label: 'Clinical & Surgical Cases' },
  { id: 'Certifications', label: 'Diplomas & Board Honors' },
  { id: 'Academic & Events', label: 'Conferences & Mentorship' },
  { id: 'Hospital & OT', label: 'OT & Clinical Infrastructure' },
];

export const galleryData: GalleryItem[] = [
  {
    id: 'case-micro-ot-1',
    title: 'High-Magnification Microvascular Reconstructive Surgery',
    category: 'Clinical Cases',
    image: '/images/gallery-1.jpeg',
    badge: 'Microsurgery OT',
    date: '2024 - 2025',
    location: 'Sir Ganga Ram Hospital, New Delhi',
    description: 'Precision operative view of microvascular anastomosis under high-power surgical operating microscope, restoring micro-vessels smaller than 1mm in diameter.',
    stats: 'Sub-millimeter Micro-anastomosis'
  },
  {
    id: 'cert-edhs-basel',
    title: 'European Diploma in Hand Surgery (EDHS)',
    category: 'Certifications',
    image: '/images/cert-edhs.jpg',
    badge: '🏆 Prestigious European Board',
    date: 'June 2024',
    location: 'Basel, Switzerland',
    description: 'Official certification awarded by the European Board of Hand Surgery (EBHS) under FESSH, recognizing top-tier European standards in hand and reconstructive microsurgery.',
    stats: 'Highest European Credential'
  },
  {
    id: 'case-replantation-protocol',
    title: 'Emergency Total Digit Replantation & Limb Salvage',
    category: 'Clinical Cases',
    image: '/images/replantation-real.jpg',
    badge: 'Emergency 24x7',
    date: '2024',
    location: 'Sir Ganga Ram Hospital Marg',
    description: 'Complete biological replantation of severed digit involving rigid axial bone fixation, microscopic arterial and venous microvascular repairs, and epineural nerve reconstruction.',
    stats: 'Successful Vascular Patency'
  },
  {
    id: 'event-ebhs-convocation',
    title: 'EBHS 30th Anniversary Convocation Ceremony',
    category: 'Academic & Events',
    image: '/images/dr_gourav_ebhs_award.jpg',
    badge: '🎖️ Convocation Milestone',
    date: 'June 2024',
    location: 'Basel, Switzerland',
    description: 'Dr. Gourav Siwas receiving the European Hand Surgery honors during the landmark 30th Anniversary convocation of the European Board of Hand Surgery.',
    stats: 'Basel International Stage'
  },
  {
    id: 'case-hand-trauma-2',
    title: 'Complex Hand Trauma & Multitendon Reconstruction',
    category: 'Clinical Cases',
    image: '/images/gallery-2.jpeg',
    badge: 'Trauma Reconstruction',
    date: '2024',
    location: 'Sir Ganga Ram Hospital',
    description: 'Intraoperative realignment and multi-strand zone II flexor and extensor tendon reconstruction, preserving active glide and reducing postoperative adhesions.',
    stats: 'Early Active Motion Protocol'
  },
  {
    id: 'cert-mnams-official',
    title: 'Member of National Academy of Medical Sciences (MNAMS)',
    category: 'Certifications',
    image: '/images/cert-mnams.jpg',
    badge: '📜 Member MNAMS',
    date: '2024',
    location: 'New Delhi, India',
    description: 'Elected Member of the National Academy of Medical Sciences (India) in the specialty of Plastic & Reconstructive Surgery, honoring rigorous peer-reviewed clinical excellence.',
    stats: 'National Apex Medical Academy'
  },
  {
    id: 'case-nerve-injuries',
    title: 'Targeted Distal Nerve Transfers for High Radial & Median Palsy',
    category: 'Clinical Cases',
    image: '/images/nerve-injuries-real.jpg',
    badge: 'Nerve Transfer',
    date: '2024 - 2025',
    location: 'Sir Ganga Ram Hospital',
    description: 'Motor and sensory re-innervation utilizing distal nerve transfers and microsurgical coaptations under loupe magnification to restore active thumb opposition and wrist extension.',
    stats: 'Functional Motor Recovery'
  },
  {
    id: 'academic-mentorship-faculty',
    title: 'International Academic Mentorship & Clinical Fellowships',
    category: 'Academic & Events',
    image: '/images/dr_gourav_mentorship.jpg',
    badge: '🤝 Faculty Mentorship',
    date: '2023 - 2024',
    location: 'International Congress & Exchange',
    description: 'Advanced masterclass sessions and collaborative surgical reviews with international masters of hand and reconstructive microsurgery.',
    stats: 'Global Surgical Exchange'
  },
  {
    id: 'case-finger-reconstruction',
    title: 'Sensate Flap Reconstruction for Severe Fingertip & Palmar Avulsions',
    category: 'Clinical Cases',
    image: '/images/finger-reconstruction-real.jpg',
    badge: 'Tissue Flap Cover',
    date: '2024',
    location: 'Sir Ganga Ram Hospital',
    description: 'Local and regional neurovascular island flap reconstruction providing durable, padded, and sensate coverage for critical pulp defect salvage.',
    stats: 'Sensate Reconstruction'
  },
  {
    id: 'case-scaphoid-restoration',
    title: 'Percutaneous Cannulated Screw Fixation of Scaphoid Nonunion',
    category: 'Clinical Cases',
    image: '/images/scaphoid-fracture-real.jpg',
    badge: 'Wrist Preservation',
    date: '2024',
    location: 'Sir Ganga Ram Hospital',
    description: 'Minimally invasive dorsal/volar percutaneous headless compression screw placement for scaphoid waist fracture, achieving rigid axial compression without cartilage disruption.',
    stats: 'Rapid Union Without Cast'
  },
  {
    id: 'cert-ganga-microsurgery',
    title: 'Advanced Microsurgery Fellowship & Hands-On Training',
    category: 'Certifications',
    image: '/images/cert-ganga-microsurgery.png',
    badge: '🔬 Microsurgery Mastery',
    date: '2022',
    location: 'Ganga Hospital, Coimbatore',
    description: 'Certified intensive training in free flap micro-vascular anastomoses, live animal models, and clinical extremity salvage at India’s premier microsurgery institute.',
    stats: 'Ganga Microsurgery Institute'
  },
  {
    id: 'case-limb-salvage-3',
    title: 'Complex Reconstructive Microsurgical Flap Planning',
    category: 'Clinical Cases',
    image: '/images/gallery-3.jpeg',
    badge: 'Limb Salvage',
    date: '2024 - 2025',
    location: 'Sir Ganga Ram Hospital',
    description: 'Preoperative Doppler mapping and free flap tissue transfer planning for high-energy traumatic industrial injury salvaging weight-bearing and functional anatomy.',
    stats: 'Vascularized Composite Cover'
  },
  {
    id: 'cert-max-fellowship',
    title: 'Fellowship in Hand & Upper Extremity Surgery',
    category: 'Certifications',
    image: '/images/cert-max-fellowship.png',
    badge: '⭐ Fellowship Credential',
    date: '2025',
    location: 'Max Smart Super Speciality Hospital, New Delhi',
    description: 'Specialized clinical fellowship in complex wrist arthroscopy, congenital hand deformities, brachial plexus neurolysis, and upper limb reconstruction.',
    stats: 'Max Institute of Medical Education'
  },
  {
    id: 'case-deformity-realignment-4',
    title: 'Post-Traumatic Contracture Release & Skeletal Realignment',
    category: 'Clinical Cases',
    image: '/images/gallery-4.jpeg',
    badge: 'Functional Restoration',
    date: '2024',
    location: 'Sir Ganga Ram Hospital',
    description: 'Comprehensive release of post-burn flexion contractures of the fingers combined with Z-plasty rearrangement and dynamic splinting guidance.',
    stats: 'Restored Range of Motion'
  },
  {
    id: 'cert-wsrm-singapore',
    title: 'World Society for Reconstructive Microsurgery (WSRM)',
    category: 'Certifications',
    image: '/images/cert-wsrm.png',
    badge: '🌏 International Congress',
    date: '2023',
    location: 'Singapore',
    description: 'Presentation and delegate representation at the 12th Congress of the World Society for Reconstructive Microsurgery with global specialists in supermicrosurgery.',
    stats: 'Global Reconstructive Forum'
  },
  {
    id: 'hospital-ot-infrastructure',
    title: 'Sir Ganga Ram Hospital — Reconstructive & Microsurgery Unit',
    category: 'Hospital & OT',
    image: '/images/clinic-hero.jpg',
    badge: 'Hospital Suite',
    date: '2024 - 2026',
    location: 'Old Rajinder Nagar, New Delhi',
    description: 'Dedicated quaternary care microsurgical suites featuring Carl Zeiss surgical operating microscopes, fine micro-instrumentation, and 24x7 trauma replantation anesthesia support.',
    stats: 'Quaternary Trauma Infrastructure'
  },
  {
    id: 'cert-apsi-fellowship',
    title: 'Association of Plastic Surgeons of India (APSI)',
    category: 'Certifications',
    image: '/images/cert-apsi.png',
    badge: '📜 Life Member',
    date: '2024',
    location: 'National Association',
    description: 'Life Membership credential of the Association of Plastic Surgeons of India, ensuring continual academic compliance with national plastic surgery protocols.',
    stats: 'Official APSI Member'
  },
  {
    id: 'case-team-synergy-5',
    title: 'Collaborative Multidisciplinary Microvascular Surgical Team',
    category: 'Clinical Cases',
    image: '/images/gallery-5.jpeg',
    badge: 'Surgical Teamwork',
    date: '2024',
    location: 'Sir Ganga Ram Hospital',
    description: 'Senior surgical team led by Dr. Gourav Siwas performing multi-hour complex microvascular reconstructive cases, delivering compassionate and verified clinical outcomes.',
    stats: 'Over 2,000+ Surgeries Performed'
  },
  {
    id: 'cert-issh-membership',
    title: 'Indian Society for Surgery of the Hand (ISSH)',
    category: 'Certifications',
    image: '/images/cert-issh.jpg',
    badge: '📜 ISSH Membership',
    date: '2025',
    location: 'India',
    description: 'Official certificate of membership with the Indian Society for Surgery of the Hand, participating in nationwide academic registries and clinical trials.',
    stats: 'Indian Hand Society Member'
  }
];
