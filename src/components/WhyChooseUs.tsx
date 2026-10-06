'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Building2, ShieldCheck, Heart } from 'lucide-react';
import Counter from '@/components/Counter';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Microsurgical Precision",
      description: "Specialized training at Sir Ganga Ram Hospital in sub-millimeter microvascular repairs, emergency limb replantations, and complex tissue reconstruction.",
      icon: Zap
    },
    {
      title: "Sir Ganga Ram Hospital Affiliation",
      description: "Operates in one of India's pre-eminent tertiary multi-specialty medical institutions with round-the-clock emergency casualty and advanced ICU backup.",
      icon: Building2
    },
    {
      title: "ATLS Safety Standards",
      description: "Certified in Advanced Trauma Life Support protocols, ensuring international safety standards in trauma care and peri-operative patient management.",
      icon: ShieldCheck
    },
    {
      title: "Patient-Centric Philosophy",
      description: "We prioritize honest consultations, clear communication, and personalized surgical planning for every individual.",
      icon: Heart
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-title">
          <h2>Uncompromising Safety &amp; Mastery</h2>
          <p>The pillars of clinical excellence and patient care in hand &amp; plastic surgery</p>
        </div>

        <div className={styles.reasonsGrid}>
          {reasons.map((reason, idx) => {
            const IconComp = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.6 }}
                className={styles.card}
              >
                <div className={styles.iconWrap}>
                  <IconComp size={28} />
                </div>
                <h3 className={styles.cardTitle}>{reason.title}</h3>
                <p className={styles.cardDesc}>{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statVal}>
              <Counter endValue={2000} suffix="+" duration={2200} />
            </div>
            <div className={styles.statLabel}>Happy Patients</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statVal}>
              <Counter endValue={10} suffix="+" duration={2200} />
            </div>
            <div className={styles.statLabel}>Years of Excellence</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statVal}>
              <Counter endValue={5} suffix="★" duration={2200} />
            </div>
            <div className={styles.statLabel}>Patient Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
