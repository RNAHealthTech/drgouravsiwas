'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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
            Dedicated to restoring form and redefining aesthetics with unparalleled microsurgical precision.
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
