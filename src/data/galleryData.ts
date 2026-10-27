export type GalleryCategory =
  | 'All'
  | 'Certifications'
  | 'Academic & Events'
  | 'Others';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Certifications' | 'Academic & Events' | 'Others';
  image: string;
  badge: string;
  date: string;
  location: string;
  description: string;
  stats?: string;
}

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'All', label: 'All Media' },
  { id: 'Certifications', label: 'Diplomas & Board Honors' },
  { id: 'Academic & Events', label: 'Conferences & Mentorship' },
  { id: 'Others', label: 'Others' },
];

export const galleryData: GalleryItem[] = [
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
    category: 'Others',
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
