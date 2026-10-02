'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <section className={styles.achievementsSection}>
      <div className="container">
        <ScrollReveal direction="up">
          <div className="section-title">
            <h2>Achievements & Recognition</h2>
            <p>Key academic awards, certifications, and professional memberships of Dr. Gourav Siwas</p>
          </div>
        </ScrollReveal>

        <div className={styles.achievementsGrid}>
          {/* Left side: Complex Microsurgery Highlight */}
          <ScrollReveal direction="right" delay={150} duration={850}>
            <div className={styles.goldMedalCard}>
              <div className={styles.medalIcon}>🏆</div>
              <div className={styles.medalContent}>
                <h3>European Diploma in Hand Surgery</h3>
                <h4>Youngest Indian & First Plastic Surgeon from New Delhi</h4>
                <p>
                  Successfully completed the prestigious European Diploma in Hand Surgery (EDHS) in Basel, Switzerland (2026). Recognized for advanced knowledge and clinical judgement in the specialized field of hand surgery.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right side: ATLS & Memberships */}
          <div className={styles.credentialsColumn}>
            <ScrollReveal direction="left" delay={200} duration={850}>
              <div className={`${styles.credentialCard} glass-card`}>
                <div className={styles.credIcon}>🏥</div>
                <div className={styles.credContent}>
                  <h4>Delhi's 1st Bilateral Hand Transplant</h4>
                  <p>Part of the esteemed surgical team that performed Delhi's first successful bilateral hand transplant in January 2024 at Sir Ganga Ram Hospital.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={250} duration={850}>
              <div className={`${styles.credentialCard} glass-card`}>
                <div className={styles.credIcon}>🤝</div>
                <div className={styles.credContent}>
                  <h4>Professional Memberships</h4>
                  <p>Full member of prestigious national and international surgical associations:</p>
                  <div className={styles.membershipsList}>
                    <span className={styles.membershipBadge} style={{ background: '#fef3c7', color: '#92400e', borderColor: '#fde68a' }}>⭐ EDHS (European Board)</span>
                    <span className={styles.membershipBadge}>APSI (Plastic Surgery)</span>
                    <span className={styles.membershipBadge}>ISSH (Hand Surgery)</span>
                    <span className={styles.membershipBadge}>MNAMS (Med Sciences)</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
