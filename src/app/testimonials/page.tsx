'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { doctorData } from '@/data/doctorData';
import styles from '../shared-page.module.css';
import { Star } from 'lucide-react';

export default function TestimonialsPage() {
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
            Patient Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.pageSubtitle}
          >
            Real experiences from individuals whose lives have been transformed.
          </motion.p>
        </div>
      </header>

      <section className={styles.pageSection}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            {doctorData.testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={styles.card}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ color: 'var(--secondary)', display: 'flex', gap: '4px', marginBottom: '24px' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '32px', flexGrow: 1 }}>"{t.feedback}"</p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                  <strong style={{ display: 'block', fontFamily: 'var(--font-serif)', color: 'var(--primary)', fontSize: '1.2rem' }}>{t.patientName}</strong>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>{t.condition}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
