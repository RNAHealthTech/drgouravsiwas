export interface MediaItem {
  id: string;
  title: string;
  source: string;
  category: 'National Press' | 'Video & Broadcast' | 'Social Media';
  date: string;
  summary: string;
  link: string;
  badge?: string;
  image?: string;
  highlight?: boolean;
  mediaType: 'article' | 'video' | 'social';
}

export const mediaData: MediaItem[] = [
  {
    id: 'times-now-severed-hand-reattached',
    title: 'In a Complex 10-Hour Surgery, Doctors At Delhi Hospital Reattach Severed Hand Of Factory Worker',
    source: 'Times Now News / ANI',
    category: 'National Press',
    date: 'April 18, 2024',
    summary: 'A marathon 10-hour emergency microsurgery at Sir Ganga Ram Hospital led by Dr. Nikhil Jhunjhunwala and Dr. Gourav Siwas (under Dr. Mahesh Mangal) successfully reattached the completely severed hand of factory worker Ashok, meticulously reuniting cut bones, tendons, nerves, arteries, and blood vessels.',
    badge: '10-Hr Emergency Replantation',
    highlight: true,
    image: '/images/replantation-real.jpg',
    link: 'https://www.timesnownews.com/delhi/in-a-complex-10-hour-surgery-doctors-at-delhi-hospital-reattach-severed-hand-of-factory-worker-article-109408057',
    mediaType: 'article'
  },
  {
    id: 'deccan-chronicle-gender-affirmation',
    title: 'A Journey to Self-Discovery: Clinical Insights on Complex Plastic & Reconstructive Surgeries',
    source: 'Deccan Chronicle (Hyderabad Chronicle)',
    category: 'National Press',
    date: 'November 13, 2024',
    summary: 'Featured in national daily Deccan Chronicle: Plastic surgeon Dr. Gourav Siwas (Sir Ganga Ram Hospital, Delhi) shares clinical perspectives on the intricate multistage facial, genital, and reconstructive procedures, surgical precision, and psychological clearances required in gender affirmation surgeries.',
    badge: 'National Daily Feature',
    image: '/images/media-deccan-chronicle.jpg',
    link: 'https://www.deccanchronicle.com/tabloid/hyderabad-chronicle/a-journey-to-self-discovery-1837602',
    mediaType: 'article'
  },
  {
    id: 'youtube-kyc-plastic-surgery-masterclass',
    title: 'Plastic Surgery 6-Year Super-Specialty Residency Masterclass with Dr. Gourav Siwas',
    source: 'KYC : Know Your Calling (YouTube)',
    category: 'Video & Broadcast',
    date: '2024',
    summary: 'Comprehensive video masterclass and career dialogue featuring Dr. Gourav Siwas, Plastic & Reconstructive Surgeon at Sir Ganga Ram Hospital, diving into the intensive 6-year super-specialty training, microvascular replantation challenges, emergency trauma calls, and future horizons of plastic surgery in India.',
    badge: 'Video Masterclass',
    image: '/images/media-kyc-youtube.jpg',
    link: 'https://m.youtube.com/watch?v=rqD_yzIJOSw',
    mediaType: 'video'
  },
  {
    id: 'youtube-hastam-scaphocapitate-kienbock',
    title: 'HASTAM: Scaphocapitate Fusion for Advanced Kienböck Disease — Surgical Technique & Expert Tips',
    source: 'GK Hand Surgery (YouTube / HASTAM Series)',
    category: 'Video & Broadcast',
    date: '2025',
    summary: 'Operative surgical demonstration and technical pearls on Scaphocapitate Arthrodesis with Lunate excision for advanced Kienböck disease, highlighting sub-millimeter surgical precision, bone fixation, and long-term functional recovery.',
    badge: 'Surgical Masterclass',
    image: '/images/media-kienbock-hastam.jpg',
    link: 'https://youtu.be/goJoZFNSwxA',
    mediaType: 'video'
  },
  {
    id: 'instagram-bilateral-hand-transplant-sgrh',
    title: 'Delhi’s 1st Successful Bilateral Hand Transplant: Official SGRH Landmark Broadcast',
    source: 'Sir Ganga Ram Hospital Official Instagram (@sgrhindia)',
    category: 'Social Media',
    date: 'March 6, 2024',
    summary: 'Official video release celebrating Delhi’s historic first successful 12-hour bilateral hand transplantation at Sir Ganga Ram Hospital. Dr. Gourav Siwas was a key surgeon in the historic 12-hour landmark procedure that successfully restored both hands to an artist following a traumatic train accident.',
    badge: 'Official Hospital Video',
    image: '/images/clinic-hero.jpg',
    link: 'https://www.instagram.com/p/C4LEJe-PsT3/',
    mediaType: 'social'
  }
];
