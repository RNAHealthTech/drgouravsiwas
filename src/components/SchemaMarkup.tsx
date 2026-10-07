import React from 'react';
import { doctorData } from '@/data/doctorData';

export default function SchemaMarkup() {
  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': ['Physician', 'MedicalBusiness'],
    '@id': 'https://drgouravsiwas.com/#physician',
    name: doctorData.name,
    legalName: doctorData.name,
    jobTitle: doctorData.designation,
    description:
      'Dr. Gourav Siwas is a Dual Board Certified Hand, Wrist & Reconstructive Plastic Surgeon and India\'s Youngest European Board Certified Hand Surgeon (EDHS) practicing at the Department of Plastic Surgery, Sir Ganga Ram Hospital, New Delhi.',
    url: 'https://drgouravsiwas.com',
    image: 'https://drgouravsiwas.com/images/dr_gourav_portrait_hd.jpg',
    telephone: doctorData.phone,
    email: doctorData.email,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Net Banking, Insurance / Mediclaim TPA',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sir Ganga Ram Hospital (SGRH), Rajinder Nagar',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110060',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6387',
      longitude: '77.1894',
    },
    medicalSpecialty: [
      'https://schema.org/PlasticSurgery',
      'https://schema.org/Emergency',
      'Hand Surgery',
      'Wrist Surgery & Arthroscopy',
      'Brachial Plexus Reconstruction',
      'Microvascular Surgery & Replantation',
      'Peripheral Nerve Surgery',
      'Reconstructive Plastic Surgery',
    ],
    hospitalAffiliation: {
      '@type': 'Hospital',
      name: 'Sir Ganga Ram Hospital',
      url: 'https://appointment.sgrh.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sir Ganga Ram Hospital Marg, Old Rajinder Nagar',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110060',
        addressCountry: 'IN',
      },
      telephone: '+91-11-42254000',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'European Board of Hand Surgery (EBHS — FESSH)',
        location: 'Basel, Switzerland',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'National Board of Examinations — Sir Ganga Ram Hospital',
        location: 'New Delhi, India',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Pt. B. D. Sharma Postgraduate Institute of Medical Sciences (PGIMS)',
        location: 'Rohtak, Haryana, India',
      },
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'National Academy of Medical Sciences (MNAMS)',
      },
      {
        '@type': 'Organization',
        name: 'European Board of Hand Surgery (EDHS / FESSH)',
      },
      {
        '@type': 'Organization',
        name: 'Association of Plastic Surgeons of India (APSI)',
      },
      {
        '@type': 'Organization',
        name: 'Indian Society for Surgery of the Hand (ISSH)',
      },
      {
        '@type': 'Organization',
        name: 'Delhi Medical Council (DMC-84828)',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'European Diploma in Hand Surgery (EDHS, Basel Switzerland)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'Member of National Academy of Medical Sciences (MNAMS India)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'DrNB Plastic & Reconstructive Surgery (Sir Ganga Ram Hospital)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'Fellowship in Hand & Upper Extremity Surgery (Max Healthcare)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'MBBS (Pt. B.D. Sharma PGIMS Rohtak)',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Wednesday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Thursday', 'Saturday'],
        opens: '09:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://maps.google.com/?q=Sir+Ganga+Ram+Hospital+New+Delhi',
      'https://appointment.sgrh.com',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://drgouravsiwas.com/#website',
    url: 'https://drgouravsiwas.com',
    name: 'Dr. Gourav Siwas — Hand, Wrist & Reconstructive Plastic Surgeon',
    description: 'Official clinical portal and appointment booking for Dr. Gourav Siwas at Sir Ganga Ram Hospital, New Delhi.',
    publisher: {
      '@id': 'https://drgouravsiwas.com/#physician',
    },
    inLanguage: ['en-IN', 'hi-IN'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where does Dr. Gourav Siwas practice?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dr. Gourav Siwas is a Consultant Hand, Wrist & Reconstructive Plastic Surgeon at the Department of Plastic Surgery, Sir Ganga Ram Hospital, Rajinder Nagar, New Delhi - 110060.',
        },
      },
      {
        '@type': 'Question',
        name: 'What conditions does Dr. Gourav Siwas specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dr. Gourav Siwas specializes in Emergency Hand Trauma & Digit Replantation, Wrist Fractures & Scaphoid Nonunion, Brachial Plexus and Peripheral Nerve Reconstruction, Tendon & Ligament Repair, Congenital Hand Anomalies, and Complex Reconstructive Plastic Surgery.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I book an appointment with Dr. Gourav Siwas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Appointments can be booked online via the official portal, through Sir Ganga Ram Hospital\'s online appointment system (appointment.sgrh.com), or by calling the helpline at +91-8950406670 / WhatsApp +918950406670.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is 24/7 emergency care available for hand injuries and amputations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, emergency microvascular replantation and acute hand trauma care are available 24/7 at Sir Ganga Ram Hospital emergency department with immediate surgical response protocols.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
