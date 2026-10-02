'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import ProcedureEstimator from '@/components/ProcedureEstimator';
import BookingCTA from '@/components/BookingCTA';
import styles from '../shared-page.module.css';

export default function ProceduresPage() {
  const procedures = [
    {
      title: "Cosmetic & Aesthetic Surgery",
      description: "Enhancing facial features, body contours, and skin aesthetics using advanced surgical and non-surgical procedures for natural, refined results.",
      image: "/images/procedure-1.jpg"
    },
    {
      title: "Reconstructive Microsurgery",
      description: "Precision microvascular tissue transfers to rebuild complex defects from cancer removal, severe trauma, or infections.",
      image: "/images/procedure-2.jpg"
    },
    {
      title: "Hand & Extremity Microsurgery",
      description: "Intricate repairs of severed nerves, tendons, and blood vessels in the hand, including emergency finger replantations.",
      image: "/images/procedure-3.jpg"
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
            Clinical Procedures
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.pageSubtitle}
          >
            Comprehensive solutions in aesthetic refinement and microvascular reconstruction.
          </motion.p>
        </div>
      </header>

      <div style={{ background: 'var(--primary)', color: 'var(--secondary)', padding: '16px 0', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
        <Marquee speed={40} gradient={false}>
          <span style={{ margin: '0 40px', fontSize: '1rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', letterSpacing: '0.05em' }}>✦ AESTHETIC REFINEMENT</span>
          <span style={{ margin: '0 40px', fontSize: '1rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', letterSpacing: '0.05em' }}>✦ RECONSTRUCTIVE SURGERY</span>
          <span style={{ margin: '0 40px', fontSize: '1rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', letterSpacing: '0.05em' }}>✦ HAND & NERVE REPAIR</span>
          <span style={{ margin: '0 40px', fontSize: '1rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', letterSpacing: '0.05em' }}>✦ MAXILLOFACIAL TRAUMA</span>
          <span style={{ margin: '0 40px', fontSize: '1rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', letterSpacing: '0.05em' }}>✦ BURN RECONSTRUCTION</span>
        </Marquee>
      </div>

      <section className={styles.pageSection}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {procedures.map((proc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.grid2Col}
                style={{ direction: idx % 2 === 1 ? 'rtl' : 'ltr' }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '4px' }}>
                  <Image src={proc.image} alt={proc.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ direction: 'ltr' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--secondary)', display: 'block', marginBottom: '16px' }}>
                    0{idx + 1}
                  </span>
                  <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '24px' }}>{proc.title}</h2>
                  <p style={{ fontSize: '1.1rem', marginBottom: '32px' }}>{proc.description}</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pageSectionAlt} style={{ padding: '80px 0' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '16px' }}>Interactive Procedure Guide</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Explore details and get estimated timelines for various treatments.</p>
          </motion.div>
          <ProcedureEstimator />
        </div>
      </section>

      <section className={styles.pageSection}>
        <BookingCTA />
      </section>
    </main>
  );
}
