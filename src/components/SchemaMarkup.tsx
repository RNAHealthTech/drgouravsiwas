import React from 'react';
import { doctorData } from '@/data/doctorData';

export default function SchemaMarkup() {
  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': ['Physician', 'MedicalBusiness', 'Person'],
    '@id': 'https://drgouravsiwas.com/#physician',
    name: doctorData.name,
    givenName: 'Gourav',
    familyName: 'Siwas',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'MBBS, DrNB Plastic Surgery, EDHS (Switzerland), MNAMS',
    legalName: doctorData.name,
    jobTitle: doctorData.designation,
    description:
      'Dr. Gourav Siwas is a Dual Board Certified Hand, Wrist & Reconstructive Plastic Surgeon and India\'s Youngest European Board Certified Hand Surgeon (EDHS, Switzerland) practicing at the Department of Plastic Surgery, Sir Ganga Ram Hospital, New Delhi. Specialist in microvascular replantation, brachial plexus reconstruction, wrist arthroscopy, peripheral nerve repairs, and complex reconstructive surgery.',
    url: 'https://drgouravsiwas.com',
    image: 'https://drgouravsiwas.com/images/dr_gourav_portrait_hd.jpg',
    telephone: doctorData.phone,
    email: doctorData.email,
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Net Banking, Insurance / Mediclaim TPA',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Department of Plastic Surgery, Sir Ganga Ram Hospital, Rajinder Nagar',
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
      'Trauma & Flap Reconstruction',
      'Congenital Hand Differences',
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
        name: 'Sir Ganga Ram Hospital & National Board of Examinations (NBEMS)',
        location: 'New Delhi, India',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Pt. B. D. Sharma Postgraduate Institute of Medical Sciences (PGIMS)',
        location: 'Rohtak, Haryana, India',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Max Healthcare Institute (Fellowship in Hand & Upper Extremity)',
        location: 'New Delhi, India',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Ganga Hospital (Clinical Observer - Hand & Microsurgery)',
        location: 'Coimbatore, Tamil Nadu, India',
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
        name: 'Delhi Medical Council (DMC Reg No. 84828)',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'European Diploma in Hand Surgery (EDHS, Switzerland)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'Member of National Academy of Medical Sciences (MNAMS India)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'DrNB Plastic & Reconstructive Surgery (Sir Ganga Ram Hospital, New Delhi)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'Fellowship in Hand & Upper Extremity Surgery (Max Healthcare, New Delhi)',
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
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: '24/7 Emergency & Acute Trauma Response at Sir Ganga Ram Hospital',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: doctorData.phone,
        contactType: 'appointments',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: doctorData.emergencyPhone,
        contactType: 'emergency',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '142',
      bestRating: '5',
      worstRating: '1',
    },
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Emergency Digit & Hand Replantation',
        procedureType: 'https://schema.org/SurgicalProcedure',
        bodyLocation: 'Hand, Fingers, Wrist',
        description: 'Microvascular re-attachment of severed fingers, thumbs, hands, and upper extremity parts with microscopic vessel and nerve anastomosis under 24/7 trauma emergency protocols.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Brachial Plexus Reconstruction & Nerve Transfers',
        procedureType: 'https://schema.org/SurgicalProcedure',
        bodyLocation: 'Brachial Plexus, Shoulder, Arm',
        description: 'Microsurgical neurotization, nerve grafting, and functional muscle transfers for traumatic brachial plexus and upper limb nerve injuries.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Wrist Arthroscopy & Scaphoid Nonunion Reconstruction',
        procedureType: 'https://schema.org/SurgicalProcedure',
        bodyLocation: 'Wrist',
        description: 'Minimally invasive wrist keyhole arthroscopy for TFCC tears, scapholunate ligament instability, and vascularized bone grafting for scaphoid fractures and Kienböck disease.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Carpal Tunnel & Cubital Tunnel Decompression',
        procedureType: 'https://schema.org/SurgicalProcedure',
        bodyLocation: 'Wrist, Elbow, Forearm',
        description: 'Endoscopic and open release of median nerve at carpal tunnel and ulnar nerve transposition at cubital tunnel.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Tendon & Ligament Repair and Reconstruction',
        procedureType: 'https://schema.org/SurgicalProcedure',
        bodyLocation: 'Hand, Wrist, Fingers',
        description: 'Acute flexor and extensor tendon repair, two-stage tendon grafting, and chronic ligamentous reconstruction.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Free Tissue Transfer & Flap Reconstruction',
        procedureType: 'https://schema.org/SurgicalProcedure',
        bodyLocation: 'Hand, Upper Extremity, Lower Limb',
        description: 'Complex microvascular free tissue transfer (free fibula, anterolateral thigh flap, groin flap) for limb salvage, soft-tissue loss, and oncology reconstruction.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Congenital Hand Differences Surgery',
        procedureType: 'https://schema.org/SurgicalProcedure',
        bodyLocation: 'Pediatric Hand, Fingers',
        description: 'Correction of syndactyly (webbed fingers), polydactyly (extra digits), radial club hand, and pediatric hand deformities.',
      },
    ],
    sameAs: [
      doctorData.mapsUrl,
      doctorData.bookingUrl,
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://drgouravsiwas.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Dr. Gourav Siwas',
        item: 'https://drgouravsiwas.com/about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Clinical Services',
        item: 'https://drgouravsiwas.com/services',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Procedures & Surgery',
        item: 'https://drgouravsiwas.com/procedures',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'OPD Schedule & Appointments',
        item: 'https://drgouravsiwas.com/opd',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Contact & Emergency',
        item: 'https://drgouravsiwas.com/contact',
      },
    ],
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
        name: 'What clinical conditions does Dr. Gourav Siwas specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dr. Gourav Siwas specializes in Emergency Hand Trauma & Digit Replantation, Wrist Fractures & Scaphoid Nonunion, Brachial Plexus and Peripheral Nerve Reconstruction, Tendon & Ligament Repair, Congenital Hand Differences (Syndactyly/Polydactyly), Carpal Tunnel Syndrome, and Complex Microvascular Reconstructive Plastic Surgery.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the golden time window for an amputated finger or hand replantation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For optimal surgical replantation, the severed part should ideally be revascularized within 6 to 12 hours (longer with cold ischemia). Wrap the amputated part in clean gauze slightly dampened with saline, seal it in a dry watertight plastic bag, and place that bag over ice water (never place the amputated part directly in contact with ice or water). Seek emergency microvascular care immediately.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I book an appointment with Dr. Gourav Siwas at Sir Ganga Ram Hospital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Appointments can be booked online via this portal, through the Sir Ganga Ram Hospital official booking system (appointment.sgrh.com), or by calling / sending WhatsApp to +91-8950406670.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is 24/7 emergency care available for hand injuries and trauma?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 24/7 round-the-clock emergency care and acute surgical response for amputations, industrial crush injuries, lacerated nerves and tendons, and severe trauma are available through the Emergency Department at Sir Ganga Ram Hospital, New Delhi.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the European Diploma in Hand Surgery (EDHS)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The European Diploma in Hand Surgery (EDHS), awarded by FESSH/EBHS in Switzerland, is one of the highest international qualifications in hand surgery. Dr. Gourav Siwas is India’s youngest plastic surgeon to achieve this European board credential.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
