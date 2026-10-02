'use client';

import React from 'react';
import Timeline from '@/components/Timeline';
import BookingCTA from '@/components/BookingCTA';
import ScrollReveal from '@/components/ScrollReveal';
import { doctorData } from '@/data/doctorData';
import styles from './journeyPage.module.css';

export default function JourneyPage() {
  const currentPos = doctorData.positions.find(p => p.institution.includes('Sir Ganga Ram'));

  return (
    <div className={styles.pageWrapper}>
      <Timeline />

      {currentPos && (
        <section className={styles.affiliationSection}>
          <div className="container">
            <ScrollReveal direction="up">
              <div className="section-title">
                <h2>Current Clinical Posting</h2>
                <p>Present active roles and facilities where {doctorData.name} conducts clinical consultations and surgical procedures</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="scale" duration={900}>
              <div className={`${styles.card} glass-card`}>
                <div className={styles.logoIcon}>🏥</div>
                <div className={styles.content}>
                  <h3>{currentPos.institution}</h3>
                  <h4>{currentPos.role} ({currentPos.period})</h4>
                  <p>
                    {doctorData.name} is currently serving as an {doctorData.designation} at the Department of Plastic, Cosmetic, Hand & Microsurgery at Sir Ganga Ram Hospital, New Delhi. SGRH is one of India's pre-eminent multi-specialty healthcare institutions offering 24/7 emergency microsurgical hand trauma repairs, reconstructive procedures, and aesthetic surgeries.
                  </p>
                  <div className={styles.details}>
                    <span className={styles.detailItem}>📍 Room No. F-52, Plastic Surgery OPD</span>
                    <span className={styles.detailItem}>🗓️ Monday - Saturday (09:00 AM - 11:00 AM & 04:00 PM - 06:00 PM)</span>
                    <span className={styles.detailItem}>✉️ {doctorData.email}</span>
                  </div>
                </div>
                <div className={styles.actions}>
                  <a 
                    href={doctorData.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    View Hospital Map
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <BookingCTA />
    </div>
  );
}
