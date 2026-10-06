'use client';

import React from 'react';
import OpdSchedule from '@/components/OpdSchedule';
import BookingCTA from '@/components/BookingCTA';
import ScrollReveal from '@/components/ScrollReveal';
import { doctorData } from '@/data/doctorData';
import styles from './opdPage.module.css';

export default function OpdPage() {
  return (
    <div className={styles.pageWrapper}>
      <OpdSchedule />

      <section className={styles.guidelinesSection}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title">
              <h2>Pre-Consultation Instructions</h2>
              <p>Essential checklists to prepare for your physical or online appointment with {doctorData.name}</p>
            </div>
          </ScrollReveal>

          <div className={styles.guidelinesGrid}>
            <ScrollReveal direction="right" delay={100} duration={800}>
              <div className={`${styles.guideCard} glass-card`}>
                <h3>📋 What to Bring for Consultation</h3>
                <ul>
                  <li>
                    <span className={styles.checkIcon}>✓</span>
                    <span>All past medical reports, surgery histories, and discharge summaries.</span>
                  </li>
                  <li>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Recent radiological scans or reports (CT scans, X-rays, MRIs, Ultrasounds) if applicable.</span>
                  </li>
                  <li>
                    <span className={styles.checkIcon}>✓</span>
                    <span>A complete list of your current medications and active prescriptions.</span>
                  </li>
                  <li>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Government ID card and health insurance card/TPA documents for SGRH registration.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200} duration={800}>
              <div className={`${styles.guideCard} glass-card`}>
                <h3>✨ Reconstructive Surgery Consultation Prep</h3>
                <ul>
                  <li>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Prepare a list of specific aesthetic concerns and clear, realistic expectations.</span>
                  </li>
                  <li>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Avoid makeup on facial treatment areas during the check-up for accurate assessment.</span>
                  </li>
                  <li>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Disclose all medical conditions, history of scarring (keloids), and bleeding disorders.</span>
                  </li>
                  <li>
                    <span className={styles.checkIcon}>✓</span>
                    <span>For video consultations, ensure high-quality lighting and a stable internet connection.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
