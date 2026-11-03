import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQs) | Dr. Gourav Siwas - Hand & Microsurgeon',
  description:
    'Authoritative clinical FAQs on hand surgery, carpal tunnel, scaphoid fractures, tendon and nerve repairs, digit replantation, and reconstructive plastic surgery by Dr. Gourav Siwas at Sir Ganga Ram Hospital.',
  keywords: [
    'Hand surgery FAQs',
    'Microsurgery FAQs',
    'Carpal tunnel release questions',
    'Scaphoid fracture FAQs',
    'Tendon repair questions',
    'Digit replantation timeline',
    'Dr Gourav Siwas',
    'Sir Ganga Ram Hospital'
  ],
  openGraph: {
    title: 'Frequently Asked Questions (FAQs) | Dr. Gourav Siwas',
    description:
      'Authoritative clinical FAQs on hand surgery, scaphoid fractures, nerve repairs, digit replantation, and reconstructive plastic surgery.',
    url: 'https://drgouravsiwas.com/faq',
    siteName: 'Dr. Gourav Siwas',
    type: 'article',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

