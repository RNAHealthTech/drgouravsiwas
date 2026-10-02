'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useBooking } from '@/context/BookingContext';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './EuropeanBoardShowcase.module.css';

export default function EuropeanBoardShowcase() {
  const { openBooking } = useBooking();

  const starCount = 12;
  const radius = 46;
  const center = 60;

  const stars = Array.from({ length: starCount }).map((_, i) => {
    const angle = (i * (360 / starCount) - 90) * (Math.PI / 180);
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { x, y, id: i };
  });

  return (
    <section className={styles.showcaseSection}>
      <div className="container">
        <ScrollReveal direction="scale" duration={900}>
          <div className={styles.cardContainer}>
            <div className={styles.ambientGlow} />

            <div className={styles.grid}>
              <div className={styles.contentCol}>
                <div className={styles.badgeRow}>
                  <span className={styles.euPill}>
                    <span>🇪🇺</span> EBOPRAS Certified Fellow
                  </span>
                  <span className={styles.recordPill}>
                    🇮🇳 Historic Indian Benchmark
                  </span>
                </div>

                <h2 className={styles.headline}>
                  India’s Youngest Plastic Surgeon to Receive <span className={styles.goldText}>European Board Certification</span>
                </h2>

                <p className={styles.leadText}>
                  Dr. Gourav Siwas has achieved the prestigious landmark of becoming <strong>India’s Youngest Plastic Surgeon to receive European Board Certification (EBOPRAS)</strong>. This rare international fellowship validates top-tier surgical mastery, international ethical standards, and advanced operative safety.
                </p>

                <div className={styles.featuresList}>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>🔬</div>
                    <div className={styles.featureContent}>
                      <h4>International Sub-Millimeter Precision</h4>
                      <p>Adherence to the highest European Union standards for intricate hand microsurgery and complex flap reconstructions.</p>
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>✨</div>
                    <div className={styles.featureContent}>
                      <h4>Global Aesthetic Standards</h4>
                      <p>Modern, evidence-based cosmetic facial and body contouring techniques designed for natural, harmonious balance.</p>
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>🛡️</div>
                    <div className={styles.featureContent}>
                      <h4>Peer-Assessed Surgical Safety</h4>
                      <p>Stringently vetted by European surgical boards with zero compromise on tissue viability and patient outcomes.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.ctaRow}>
                  <button 
                    onClick={() => openBooking('Direct (Hospital OPD)')}
                    className={styles.primaryGoldBtn}
                  >
                    Consult European Board Certified Surgeon
                  </button>
                  <Link href="/about" className={styles.ghostBtn}>
                    View Verified Credentials &rarr;
                  </Link>
                </div>
              </div>

              <div className={styles.sealWrapper}>
                <div className={styles.photoShowcaseCard}>
                  <div className={styles.photoFrame}>
                    <Image
                      src="/images/dr_gourav_ebhs_award.jpg"
                      alt="Dr. Gourav Siwas receiving European Diploma in Hand Surgery, Basel Switzerland"
                      width={380}
                      height={440}
                      className={styles.certPhoto}
                      priority
                    />
                    <div className={styles.photoBadgeOverlay}>
                      <span className={styles.photoBadgeVerified}>
                        <span className={styles.checkIcon}>✓</span> Basel, Switzerland · 2026
                      </span>
                    </div>
                  </div>

                  <div className={styles.photoCardFooter}>
                    <div className={styles.floatingStarsBadge}>
                      <div className={styles.rotatingMiniRing}>
                        {stars.map((s) => (
                          <span
                            key={s.id}
                            className={styles.miniStar}
                            style={{
                              left: `${s.x * 0.42}px`,
                              top: `${s.y * 0.42}px`,
                            }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <div className={styles.miniInsignia}>🇪🇺</div>
                    </div>
                    <div>
                      <h4 className={styles.photoCardTitle}>European Diploma in Hand Surgery</h4>
                      <p className={styles.photoCardSub}>30th Anniversary Convocation · Basel, Switzerland</p>
                    </div>
                  </div>

                  <div className={styles.emblemStats}>
                    <div className={styles.emblemStat}>
                      <span className={styles.statVal}>India's Youngest</span>
                      <span className={styles.statDesc}>Board Certified</span>
                    </div>
                    <div className={styles.emblemStat}>
                      <span className={styles.statVal}>EBHS / FESSH</span>
                      <span className={styles.statDesc}>European Board</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
