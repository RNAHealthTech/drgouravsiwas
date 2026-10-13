export interface MediaItem {
  id: string;
  title: string;
  source: string;
  category: 'National Press' | 'TV Broadcast' | 'Hospital News' | 'Feature' | 'Gallery';
  date: string;
  summary: string;
  link?: string;
  badge?: string;
  image?: string;
  highlight?: boolean;
  mediaType?: 'article' | 'video' | 'social' | 'gallery';
}

export const mediaData: MediaItem[] = [
  {
    id: 'times-now-severed-hand-reattached',
    title: 'In a Complex 10-Hour Surgery, Doctors At Delhi Hospital Reattach Severed Hand Of Factory Worker',
    source: 'Times Now News / ANI',
    category: 'National Press',
    date: 'April 18, 2024',
    summary: 'Dr. Nikhil Jhunjhunwala with fellow resident surgeon Dr. Gourav Siwas skillfully managed a marathon 10-hour emergency plastic surgery at Sir Ganga Ram Hospital under the guidance of Dr. Mahesh Mangal, successfully reuniting severed bones, tendons, nerves, and blood vessels to save the severed hand of factory worker Ashok.',
    badge: '10-Hr Emergency Miracle',
    highlight: true,
    image: '/images/replantation-real.jpg',
    link: 'https://www.timesnownews.com/delhi/in-a-complex-10-hour-surgery-doctors-at-delhi-hospital-reattach-severed-hand-of-factory-worker-article-109408057',
    mediaType: 'article'
  },
  {
    id: 'youtube-kyc-plastic-surgery-masterclass',
    title: 'Plastic Surgery 6-Year Super-Specialty Residency Masterclass with Dr. Gourav Siwas',
    source: 'KYC : Know Your Calling (YouTube Broadcast)',
    category: 'TV Broadcast',
    date: '2024',
    summary: 'Comprehensive video masterclass and interview featuring Dr. Gourav Siwas, plastic and reconstructive surgeon at Sir Ganga Ram Hospital, breaking down the surgical training, operative rigors, microvascular replantation challenges, and future scope of plastic surgery in India.',
    badge: 'Video Masterclass',
    image: '/images/media-kyc-youtube.jpg',
    link: 'https://m.youtube.com/watch?v=rqD_yzIJOSw',
    mediaType: 'video'
  },
  {
    id: 'deccan-chronicle-gender-affirmation',
    title: 'A Journey to Self-Discovery: Clinical Insights on Complex Plastic & Reconstructive Surgeries',
    source: 'Deccan Chronicle (Hyderabad Chronicle)',
    category: 'National Press',
    date: 'November 13, 2024',
    summary: 'Quoting plastic surgeon Dr. Gourav Siwas on the surgical complexities, multistage facial, genital, and breast reconstructive procedures, and psychiatric clearances involved in gender affirmation surgeries at Sir Ganga Ram Hospital.',
    badge: 'National Daily Feature',
    image: '/images/media-deccan-chronicle.jpg',
    link: 'https://www.deccanchronicle.com/tabloid/hyderabad-chronicle/a-journey-to-self-discovery-1837602',
    mediaType: 'article'
  },
  {
    id: 'instagram-bilateral-hand-transplant-sgrh',
    title: 'Delhi’s 1st Successful Bilateral Hand Transplant: Official SGRH Landmark Broadcast',
    source: 'Sir Ganga Ram Hospital Official Instagram (@sgrhindia)',
    category: 'TV Broadcast',
    date: 'March 6, 2024',
    summary: 'Official video release celebrating the miraculous 12-hour bilateral hand transplantation at Sir Ganga Ram Hospital, with multi-specialty participation including Dr. Gourav Siwas, successfully restoring two functioning hands to a painter who lost both limbs in a train accident.',
    badge: 'Instagram Feature',
    image: '/images/clinic-hero.jpg',
    link: 'https://www.instagram.com/p/C4LEJe-PsT3/',
    mediaType: 'social'
  },
  {
    id: 'hand-transplant-sgrh',
    title: 'Delhi’s 1st Successful Bilateral Hand Transplant at Sir Ganga Ram Hospital',
    source: 'National Media & Hospital Press',
    category: 'National Press',
    date: 'January 2024',
    summary: 'Dr. Gourav Siwas was an integral surgical team member in the historic 12-hour landmark bilateral hand transplantation at Sir Ganga Ram Hospital, restoring upper limbs to an artist who had lost both hands in a train accident.',
    badge: 'Landmark Feat',
    image: '/images/cert-edhs.jpg',
    link: 'https://timesofindia.indiatimes.com',
    mediaType: 'article'
  },
  {
    id: 'edhs-basel-switzerland',
    title: 'India’s Youngest Plastic Surgeon to Receive European Board of Hand Surgery (EDHS) Certification',
    source: 'European Board of Hand Surgery — Basel, Switzerland',
    category: 'Feature',
    date: '2024',
    summary: 'Honored by the European Board of Hand Surgery in Basel, Switzerland, setting an elite standard in sub-millimeter microvascular repair, wrist arthroscopy, and complex hand reconstructive surgery.',
    badge: 'International Honor',
    image: '/images/dr_gourav_ebhs_award.jpg',
    link: '/gallery',
    mediaType: 'gallery'
  },
  {
    id: 'microvascular-replantation-trauma',
    title: '24x7 Emergency Microvascular Digit Replantation & Limb Salvage Protocol',
    source: 'Sir Ganga Ram Hospital Clinical Bulletin',
    category: 'Hospital News',
    date: '2024 - 2025',
    summary: 'Detailed surgical reports on acute industrial and accident hand amputations successfully replanted with patent micro-anastomosis under high-magnification surgical operating microscopes.',
    badge: 'Emergency Surgery',
    image: '/images/replantation-real.jpg',
    link: '/services/finger-replantation',
    mediaType: 'article'
  },
  {
    id: 'brachial-plexus-nerve-transfer',
    title: 'Restoring Hand Function: Advanced Nerve Transfers in Severe Brachial Plexus Injuries',
    source: 'Medical News & Reconstructive Surgery Forum',
    category: 'Feature',
    date: '2024',
    summary: 'Highlighting state-of-the-art neurotization and distal nerve transfer protocols helping patients recover shoulder, elbow, and hand motor function following high-speed vehicular trauma.',
    badge: 'Nerve Reconstruction',
    image: '/images/nerve-injuries-real.jpg',
    link: '/services/nerve-repair-transfers',
    mediaType: 'article'
  },
  {
    id: 'finger-reconstruction-aesthetics',
    title: 'Pioneering Functional & Aesthetic Reconstruction for Crushed and Amputated Fingers',
    source: 'Healthcare Today & Clinical Review',
    category: 'National Press',
    date: '2023 - 2024',
    summary: 'Clinical feature on flap reconstruction, toe-to-finger transfers, and secondary functional refinements after catastrophic occupational injuries.',
    badge: 'Case Study',
    image: '/images/finger-reconstruction-real.jpg',
    link: '/services/finger-reconstruction',
    mediaType: 'article'
  },
  {
    id: 'academic-exchange-mentorship',
    title: 'Global Academic Exchange & Clinical Mentorship in Hand and Microsurgery',
    source: 'International Society of Plastic & Hand Surgeons',
    category: 'Feature',
    date: '2023',
    summary: 'International mentorship and fellowship interactions bridging modern European operative techniques with Indian high-volume trauma centers.',
    badge: 'Academic Forum',
    image: '/images/dr_gourav_mentorship.jpg',
    link: '/about',
    mediaType: 'article'
  },
  {
    id: 'gallery-clinical-archive',
    title: 'High-Magnification Microvascular Reconstructive Gallery',
    source: 'Clinical & OT Photographic Archive',
    category: 'Gallery',
    date: '2024 - 2026',
    summary: 'Curated surgical operative records, microsurgical anastomosis under Zeiss operating microscope, and multi-tendon reconstructive restorations at Sir Ganga Ram Hospital.',
    badge: 'Clinical Archive',
    image: '/images/gallery-1.jpeg',
    link: '/gallery',
    mediaType: 'gallery'
  },
  {
    id: 'gallery-ebhs-milestone',
    title: 'EBHS 30th Anniversary Convocation Ceremony & European Diplomas',
    source: 'European Board of Hand Surgery — Basel, Switzerland',
    category: 'Gallery',
    date: '2024',
    summary: 'Official photographic convocation record and diploma awards from the European Board of Hand Surgery (FESSH) in Basel, Switzerland.',
    badge: 'Convocation Gallery',
    image: '/images/dr_gourav_ebhs_award.jpg',
    link: '/gallery',
    mediaType: 'gallery'
  }
];
