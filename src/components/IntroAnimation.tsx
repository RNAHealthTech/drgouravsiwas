'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './IntroAnimation.module.css';

export default function IntroAnimation() {
  const [phase, setPhase] = useState<'intro' | 'exit' | 'done'>('intro');

  useEffect(() => {
    const tExit = setTimeout(() => setPhase('exit'), 1400);
    const tDone = setTimeout(() => setPhase('done'), 1900);

    return () => {
      clearTimeout(tExit);
      clearTimeout(tDone);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Background split curtain exit */}
        {phase === 'exit' && (
          <>
            <motion.div
              className={`${styles.curtain} ${styles.curtainTop}`}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.div
              className={`${styles.curtain} ${styles.curtainBottom}`}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.03 }}
            />
          </>
        )}

        <div className={styles.content}>
          {/* Big Featured Logo */}
          <motion.div
            className={styles.introLogoBox}
            initial={{ opacity: 0, scale: 0.65, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/dr_gourav_emblem.jpg"
              alt="Dr. Gourav Siwas Emblem"
              width={140}
              height={140}
              priority
              className={styles.introLogoImg}
            />
          </motion.div>

          {/* Doctor's Name - Small, refined and elegant directly below logo */}
          <motion.div
            className={styles.nameWrapper}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.doctorName}>Dr. Gourav Siwas</h2>
          </motion.div>

          {/* Elegant Divider */}
          <motion.div
            className={styles.divider}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Subtitle / Specialty — Hand, Wrist & Reconstructive Plastic Surgeon */}
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            Hand, Wrist &amp; Reconstructive Plastic Surgeon
          </motion.p>

          {/* Hospital Affiliation — Sir Ganga Ram Hospital New Delhi */}
          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ duration: 0.4, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            Sir Ganga Ram Hospital, New Delhi
          </motion.p>
        </div>

        {/* Corner logo mark */}
        <motion.div
          className={styles.cornerMark}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.35 }}
        >
          GS
        </motion.div>

        {/* Progress line */}
        <motion.div
          className={styles.progressBar}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: 'linear' }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
