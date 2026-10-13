import { Metadata } from 'next';
import GalleryClient from './GalleryClient';
import { doctorData } from '@/data/doctorData';

export const metadata: Metadata = {
  title: `Clinical & Academic Gallery | ${doctorData.name} - Hand & Plastic Reconstructive Surgeon`,
  description: `Explore the clinical case photos, European Board of Hand Surgery certifications, microsurgical replantation milestones, and OT infrastructure of ${doctorData.name} at Sir Ganga Ram Hospital, New Delhi.`,
  keywords: [
    'Dr Gourav Siwas Gallery',
    'Hand Surgery Cases Delhi',
    'Plastic Surgery Before After New Delhi',
    'Microvascular Replantation Ganga Ram Hospital',
    'European Board of Hand Surgery Switzerland',
    'MNAMS Plastic Surgery Certificates'
  ],
  openGraph: {
    title: `Clinical & Academic Gallery | ${doctorData.name}`,
    description: `Clinical milestones, verified European certifications, and reconstructive microsurgery portfolio at Sir Ganga Ram Hospital, New Delhi.`,
    images: ['/images/dr_gourav_ebhs_award.jpg'],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
