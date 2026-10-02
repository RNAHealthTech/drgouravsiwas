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

  return <ServiceDetailClient service={service} />;
}
