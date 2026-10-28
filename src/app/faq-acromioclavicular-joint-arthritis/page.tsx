import { Metadata } from 'next';
import { acJointArthritisFaqs, acJointArthritisOverview } from '@/data/acJointFaqsData';
import FAQPage from '@/app/faq/page';

export const metadata: Metadata = {
  title: 'Acromioclavicular (AC) Joint Arthritis FAQs | Dr. Gourav Siwas',
  description:
    'Comprehensive guide with 50 common questions and answers about Acromioclavicular (AC) Joint Arthritis, symptoms, diagnosis, injections, exercises, and surgical treatment.',
  keywords: [
    'acromioclavicular joint arthritis',
    'AC arthritis FAQs',
    'AC joint arthritis questions',
    'distal clavicle excision',
    'shoulder arthritis symptoms',
    'Dr Gourav Siwas'
  ],
  openGraph: {
    title: 'Acromioclavicular (AC) Joint Arthritis FAQs | Dr. Gourav Siwas',
    description:
      '50 comprehensive questions & answers on AC joint arthritis causes, diagnosis, non-surgical relief, and distal clavicle excision.',
    url: 'https://drgouravsiwas.com/faq-acromioclavicular-joint-arthritis',
    siteName: 'Dr. Gourav Siwas',
    type: 'article',
  },
};

export default function AcJointFaqDirectPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: acJointArthritisFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPage />
    </>
  );
}
