'use client';

import React from 'react';
import Link from 'next/link';
import { useBooking } from '@/context/BookingContext';
import { doctorData } from '@/data/doctorData';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './BookingCTA.module.css';

export default function BookingCTA() {
  const { openBooking } = useBooking();

  return (
    <section className={styles.ctaBanner}>
      <div className={styles.ctaBlob}></div>
      <div className={`${styles.ctaContent} container`}>
        <ScrollReveal direction="up" delay={100}>
          <h2 className={styles.ctaTitle}>Start Your Transformation Today</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <p className={styles.ctaDesc}>
            Whether you are considering a reconstructive consultation or specialized hand surgery, schedule an appointment to discuss your clinical pathways with {doctorData.name}.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={300}>
          <div className={styles.ctaActions}>
            <button 
              id="cta-subpage-book-btn" 
              onClick={() => openBooking()} 
              className="btn btn-primary btn-shine-wrapper"
            >
              Schedule Consultation
            </button>
            <Link href="/opd" className="btn btn-secondary" style={{ color: '#ffffff', borderColor: '#ffffff' }}>
              View OPD Hours
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
