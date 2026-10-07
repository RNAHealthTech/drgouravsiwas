'use client';

import React from 'react';
import Expertise from '@/components/Expertise';
import BookingCTA from '@/components/BookingCTA';
import ScrollReveal from '@/components/ScrollReveal';
import { doctorData } from '@/data/doctorData';
import styles from './expertisePage.module.css';

export default function ExpertisePage() {
  return (
    <div className={styles.pageWrapper}>
      <Expertise />

      <section className={styles.testimonialsSection}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title">
              <h2>Clinical Outcomes & Patient Stories</h2>
              <p>Real experiences from patients who underwent specialized treatments with {doctorData.name}</p>
            </div>
          </ScrollReveal>

          <div className={styles.testimonialsGrid}>
            {doctorData.testimonials.map((t, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 120} className={styles.revealCardWrapper}>
                <div className={`${styles.testimonialCard} glass-card`}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.patientMeta}>
                      <h4>{t.patientName}</h4>
                      <span className="badge badge-gold">{t.condition}</span>
                    </div>
                    <span className={styles.patientTypeBadge}>{t.type}</span>
                  </div>
                  <div className={styles.stars}>
                    {"★".repeat(t.rating)}
                  </div>
                  <p className={styles.testimonialFeedback}>&ldquo;{t.feedback}&rdquo;</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
