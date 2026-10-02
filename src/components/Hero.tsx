'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { doctorData } from '@/data/doctorData';
import { useBooking } from '@/context/BookingContext';
import ScrollReveal from '@/components/ScrollReveal';
import Counter from '@/components/Counter';
import LiveOpdStatus from '@/components/LiveOpdStatus';
import styles from './Hero.module.css';

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.motionBg}>
        <div className={`${styles.particle} ${styles.particle1}`}></div>
        <div className={`${styles.particle} ${styles.particle2}`}></div>
        <div className={`${styles.particle} ${styles.particle3}`}></div>
        <div className={`${styles.particle} ${styles.particle4}`}></div>
      </div>

      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <ScrollReveal direction="up" delay={50}>
            <LiveOpdStatus />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className={styles.badgeWrapper}>
              <span className="badge badge-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
                <span>🇪🇺</span> India’s Youngest Plastic Surgeon to Receive European Board Certification
              </span>
              <span className="badge">
                🏥 Sir Ganga Ram Hospital
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h1 className={styles.title}>
              Restoring Form, <br />
              <span className={styles.highlight}>Redefining Aesthetics</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <p className={styles.description}>
              Welcome to the official clinical portal of <strong>{doctorData.name}</strong>, {doctorData.designation} in the <strong>{doctorData.department}</strong> at <strong>{doctorData.hospital}</strong>. Combining sub-millimeter microvascular precision and aesthetic mastery to deliver world-class reconstructive, cosmetic, and hand replantation outcomes.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className={styles.actions}>
              <button 
                id="hero-book-btn" 
                onClick={() => openBooking('Direct (Hospital OPD)')} 
                className="btn btn-primary btn-shine-wrapper"
              >
                Schedule Consultation
              </button>
              <Link href="/about" className="btn btn-secondary">
                View Credentials & Bio
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={500}>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  <Counter endValue={12} suffix="+" />
                </span>
                <span className={styles.statLabel}>Years in Medicine</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>SGRH & NBEMS</span>
                <span className={styles.statLabel}>DrNB Plastic Surgery</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  <Counter endValue={100} suffix="%" />
                </span>
                <span className={styles.statLabel}>Patient Dedication</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className={styles.visual}>
          <ScrollReveal direction="scale" delay={300} duration={1000} className={styles.imageRevealWrapper}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBacking}></div>
              <div className={`${styles.glassFrame} glass-card`}>
                <Image 
                  src={doctorData.imageUrl} 
                  alt={doctorData.name} 
                  width={360} 
                  height={400} 
                  priority
                  className={styles.image}
                />
              </div>

              <div className={`${styles.floatingCard} ${styles.floatCard1} glass-card animate-float`}>
                <div className={styles.floatIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 5V11C4 16.52 7.41 21.74 12 23C16.59 21.74 20 16.52 20 11V5L12 2Z" fill="var(--primary)" />
                    <path d="M12 7V13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 10H15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className={styles.floatText}>
                  <strong>Sir Ganga Ram Hospital</strong>
                  <span>Plastic & Hand Surgery</span>
                </div>
              </div>

              <div className={`${styles.floatingCard} ${styles.floatCard2} glass-card animate-float-delayed`}>
                <div className={styles.floatIcon} style={{ background: 'linear-gradient(135deg, #0f172a, #032b30)', color: '#fbbf24', fontSize: '1.1rem' }}>
                  ★
                </div>
                <div className={styles.floatText}>
                  <strong>EBOPRAS Certified</strong>
                  <span>Youngest Indian Fellow</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
