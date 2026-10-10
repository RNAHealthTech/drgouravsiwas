export interface MediaItem {
  id: string;
  title: string;
  source: string;
  category: 'National Press' | 'TV Broadcast' | 'Hospital News' | 'Feature';
  date: string;
  summary: string;
  link?: string;
  badge?: string;
  image?: string;
  highlight?: boolean;
}

export const mediaData: MediaItem[] = [
  {
    id: 'hand-transplant-sgrh',
    title: 'Delhi’s 1st Successful Bilateral Hand Transplant at Sir Ganga Ram Hospital',
    source: 'National Media & Hospital Press',
    category: 'National Press',
    date: 'January 2024',
    summary: 'Dr. Gourav Siwas was an integral surgical team member in the historic 12-hour landmark bilateral hand transplantation at Sir Ganga Ram Hospital, restoring upper limbs to an artist who had lost both hands in a train accident.',
    badge: 'Landmark Feat',
    highlight: true,
    image: '/images/cert-edhs.jpg',
    link: 'https://timesofindia.indiatimes.com'
  },
  {
    id: 'edhs-basel-switzerland',
    title: 'India’s Youngest Plastic Surgeon to Receive European Board of Hand Surgery (EDHS) Certification',
    source: 'European Board of Hand Surgery — Basel, Switzerland',
    category: 'Feature',
    date: '2024',
    summary: 'Honored by the European Board of Hand Surgery in Basel, Switzerland, setting an elite standard in sub-millimeter microvascular repair, wrist arthroscopy, and complex hand reconstructive surgery.',
    badge: 'International Honor',
    highlight: true,
    image: '/images/dr_gourav_ebhs_award.jpg'
  },
  {
    id: 'microvascular-replantation-trauma',
    title: '24x7 Emergency Microvascular Digit Replantation & Limb Salvage Protocol',
    source: 'Sir Ganga Ram Hospital Clinical Bulletin',
    category: 'Hospital News',
    date: '2024 - 2025',
    summary: 'Detailed surgical reports on acute industrial and accident hand amputations successfully replanted with patent micro-anastomosis under high-magnification surgical operating microscopes.',
    badge: 'Emergency Surgery',
    image: '/images/replantation-real.jpg'
  },
  {
    id: 'brachial-plexus-nerve-transfer',
    title: 'Restoring Hand Function: Advanced Nerve Transfers in Severe Brachial Plexus Injuries',
    source: 'Medical News & Reconstructive Surgery Forum',
    category: 'Feature',
    date: '2024',
    summary: 'Highlighting state-of-the-art neurotization and distal nerve transfer protocols helping patients recover shoulder, elbow, and hand motor function following high-speed vehicular trauma.',
    badge: 'Nerve Reconstruction',
    image: '/images/nerve-injuries-real.jpg'
  },
  {
    id: 'finger-reconstruction-aesthetics',
    title: 'Pioneering Functional & Aesthetic Reconstruction for Crushed and Amputated Fingers',
    source: 'Healthcare Today & Clinical Review',
    category: 'National Press',
    date: '2023 - 2024',
    summary: 'Clinical feature on flap reconstruction, toe-to-finger transfers, and secondary functional refinements after catastrophic occupational injuries.',
    badge: 'Case Study',
    image: '/images/finger-reconstruction-real.jpg'
  },
  {
    id: 'academic-exchange-mentorship',
    title: 'Global Academic Exchange & Clinical Mentorship in Hand and Microsurgery',
    source: 'International Society of Plastic & Hand Surgeons',
    category: 'Feature',
    date: '2023',
    summary: 'International mentorship and fellowship interactions bridging modern European operative techniques with Indian high-volume trauma centers.',
    badge: 'Academic Forum',
    image: '/images/dr_gourav_mentorship.jpg'
  }
];
