import { Metadata } from 'next';
import FAQPage from '@/app/faq/page';

export const metadata: Metadata = {
  title: 'Patient FAQs | Dr. Gourav Siwas - Hand & Reconstructive Plastic Surgeon',
  description:
    'Frequently asked questions regarding hand surgery, wrist injuries, microsurgery, peripheral nerve repair, and reconstructive plastic surgery by Dr. Gourav Siwas at Sir Ganga Ram Hospital, New Delhi.',
  keywords: [
    'Hand Surgery FAQs',
    'Carpal Tunnel FAQs',
    'Tendon Repair FAQs',
    'Replantation FAQs',
    'Dr Gourav Siwas',
    'Sir Ganga Ram Hospital New Delhi'
  ],
  openGraph: {
    title: 'Patient FAQs | Dr. Gourav Siwas',
    description:
      'Answers to common patient questions on hand and wrist surgeries, microsurgery replantation, and reconstructive procedures.',
    url: 'https://drgouravsiwas.com/faqs',
    siteName: 'Dr. Gourav Siwas',
    type: 'article',
  },
};

export default function FaqsPage() {
  return <FAQPage />;
}
