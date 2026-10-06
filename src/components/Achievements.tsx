'use client';

import React from 'react';
import Image from 'next/image';
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
                <div className={styles.credContent} style={{ width: '100%' }}>
                  <h4>Professional Memberships</h4>
                  <p>Full member of prestigious national and international surgical associations:</p>
                  
                  <div className={styles.membershipsGrid}>
                    <div className={styles.membershipItem}>
                      <div className={styles.logoCircle}>
                        <Image
                          src="/images/logos/logo-fessh.svg"
                          alt="FESSH Logo"
                          width={48}
                          height={48}
                          className={styles.logoImg}
                        />
                      </div>
                      <span className={styles.membershipLabel}>
                        FESSH
                        <span className={styles.membershipSubLabel}>(European Board)</span>
                      </span>
                    </div>

                    <div className={styles.membershipItem}>
                      <div className={styles.logoCircle}>
                        <Image
                          src="/images/logos/logo-apsi.svg"
                          alt="APSI Logo"
                          width={48}
                          height={48}
                          className={styles.logoImg}
                        />
                      </div>
                      <span className={styles.membershipLabel}>
                        APSI
                        <span className={styles.membershipSubLabel}>(Plastic Surgery)</span>
                      </span>
                    </div>

                    <div className={styles.membershipItem}>
                      <div className={styles.logoCircle}>
                        <Image
                          src="/images/logos/logo-issh.svg"
                          alt="ISSH Logo"
                          width={48}
                          height={48}
                          className={styles.logoImg}
                        />
                      </div>
                      <span className={styles.membershipLabel}>
                        ISSH
                        <span className={styles.membershipSubLabel}>(Hand Surgery)</span>
                      </span>
                    </div>

                    <div className={styles.membershipItem}>
                      <div className={styles.logoCircle}>
                        <Image
                          src="/images/logos/logo-mnams.svg"
                          alt="MNAMS Logo"
                          width={48}
                          height={48}
                          className={styles.logoImg}
                        />
                      </div>
                      <span className={styles.membershipLabel}>
                        MNAMS
                      </span>
                    </div>
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
