import { Metadata } from 'next';
import GalleryClient from './GalleryClient';
import { doctorData } from '@/data/doctorData';

export const metadata: Metadata = {
  title: `Academic & Certifications Gallery | ${doctorData.name} - Hand & Plastic Reconstructive Surgeon`,
  description: `Explore the European Board of Hand Surgery certifications, academic milestones, and OT infrastructure of ${doctorData.name} at Sir Ganga Ram Hospital, New Delhi.`,
  keywords: [
    'Dr Gourav Siwas Gallery',
    'European Board of Hand Surgery Switzerland',
    'MNAMS Plastic Surgery Certificates',
    'Sir Ganga Ram Hospital Hand Surgery'
  ],
  openGraph: {
    title: `Academic & Certifications Gallery | ${doctorData.name}`,
    description: `Academic milestones, verified European certifications, and surgical infrastructure portfolio at Sir Ganga Ram Hospital, New Delhi.`,
    images: ['/images/dr_gourav_ebhs_award.jpg'],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
