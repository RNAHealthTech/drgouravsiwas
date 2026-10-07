import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getServiceBySlug, servicesData } from '@/data/servicesData';
import ServiceDetailClient from './ServiceDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Dr. Gourav Siwas',
      description: 'The requested medical procedure could not be found.',
    };
  }

  return {
    title: `${service.title} | Dr. Gourav Siwas | Sir Ganga Ram Hospital, Delhi`,
    description: service.heroSubtitle || service.tagline,
    keywords: [
      service.title,
      service.categoryLabel,
      'Dr. Gourav Siwas',
      'Hand Surgeon Delhi',
      'Plastic Surgeon Delhi',
      'Sir Ganga Ram Hospital',
      'Max Smart Hospital',
      'Microsurgery Delhi'
    ],
    openGraph: {
      title: `${service.title} | Dr. Gourav Siwas`,
      description: service.tagline,
      images: [
        {
          url: service.image || '/images/procedure-1.jpg',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const procedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.title,
    description: Array.isArray(service.overview) ? service.overview.join(' ') : service.tagline,
    procedureType: 'https://schema.org/SurgicalProcedure',
    bodyLocation: service.categoryLabel,
    relevantSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Plastic and Reconstructive Surgery',
    },
    howPerformed: service.tagline,
    performer: {
      '@type': 'Physician',
      name: 'Dr. Gourav Siwas',
      jobTitle: 'Dual Board Certified Hand, Wrist & Reconstructive Plastic Surgeon',
      hospitalAffiliation: 'Sir Ganga Ram Hospital, New Delhi',
    },
    followup: service.quickFacts?.downtime || 'Personalized post-operative rehabilitation protocol',
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
        name: 'Services',
        item: 'https://drgouravsiwas.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://drgouravsiwas.com/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}
