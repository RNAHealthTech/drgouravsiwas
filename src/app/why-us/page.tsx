'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../shared-page.module.css';
import { Check } from 'lucide-react';
import Counter from '@/components/Counter';
import EmergencyTraumaGuide from '@/components/EmergencyTraumaGuide';
import BookingCTA from '@/components/BookingCTA';

export default function WhyUsPage() {
  const reasons = [
    {
      title: "Microsurgical Precision",
      description: "Specialized training at Sir Ganga Ram Hospital in sub-millimeter microvascular repairs, emergency limb replantations, and complex tissue reconstruction."
    },
    {
      title: "Sir Ganga Ram Hospital Affiliation",
      description: "Operates in one of India's pre-eminent tertiary multi-specialty medical institutions with round-the-clock emergency casualty and advanced ICU backup."
    },
    {
      title: "ATLS Safety Standards",
      description: "Certified in Advanced Trauma Life Support protocols, ensuring international safety standards in trauma care and peri-operative patient management."
    },
    {
      title: "Patient-Centric Philosophy",
      description: "We prioritize honest consultations, clear communication, and personalized surgical planning for every individual."
    }
  ];

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
            Why Choose Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.pageSubtitle}
          >
            Uncompromising safety, surgical mastery, and an artistic approach to care.
          </motion.p>
        </div>
      </header>

      <section className={styles.pageSectionAlt}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={styles.card}
              >
                <div style={{ color: 'var(--secondary)', marginBottom: '24px' }}>
                  <Check size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '16px' }}>{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pageSection}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', textAlign: 'center', gap: '32px' }}>
            <div>
              <h3 style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '8px' }}><Counter endValue={2000} suffix="+" /></h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Successful Surgeries</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '8px' }}><Counter endValue={12} suffix="+" /></h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Years of Excellence</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '8px' }}><Counter endValue={100} suffix="%" /></h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <EmergencyTraumaGuide />

      <section className={styles.pageSectionAlt}>
        <BookingCTA />
      </section>
    </main>
  );
}
