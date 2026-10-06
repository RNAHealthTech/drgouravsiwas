'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award } from 'lucide-react';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import EuropeanBoardShowcase from '@/components/EuropeanBoardShowcase';
import CertificatesGallery from '@/components/CertificatesGallery';
import Timeline from '@/components/Timeline';
import Expertise from '@/components/Expertise';
import WhyChooseUs from '@/components/WhyChooseUs';
import DetailedProfile from '@/components/DetailedProfile';
import BookingCTA from '@/components/BookingCTA';
import styles from '../shared-page.module.css';

export default function AboutPage() {
  return (
    <main>
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderBg}></div>
        <div className={`container ${styles.pageHeaderContent}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}
          >
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', border: '3px solid var(--secondary)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 0 20px rgba(172,178,150,0.3)' }}>
              <Image src="/images/dr_gourav_portrait.jpg" alt="Dr. Gourav Siwas" width={100} height={100} style={{ objectFit: 'cover' }} priority />
            </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '9999px', background: 'rgba(172, 178, 150, 0.2)', border: '1px solid rgba(172, 178, 150, 0.4)', color: 'var(--secondary)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, marginBottom: '20px' }}
          >
            <Award size={15} /> European Board Certified Hand Surgeon (EDHS)
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.pageTitle}
          >
            About Dr. Gourav Siwas
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.pageSubtitle}
          >
            Dual Board Certified Hand, Wrist &amp; Reconstructive Plastic Surgeon at Sir Ganga Ram Hospital, New Delhi. Dedicated to restoring form, mobility, and independence.
          </motion.p>
        </div>
      </header>

      <section className={styles.pageSection}>
        <About />
      </section>

      <section className={styles.pageSectionAlt}>
        <Expertise />
      </section>

      <EuropeanBoardShowcase />

      <CertificatesGallery />

      <WhyChooseUs />

      <Timeline />

      <section className={styles.pageSection}>
        <Achievements />
      </section>

      <DetailedProfile />

      <section className={styles.pageSectionAlt}>
        <BookingCTA />
      </section>
    </main>
  );
}
