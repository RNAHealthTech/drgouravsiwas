'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './IntroAnimation.module.css';

export default function IntroAnimation() {
  const [phase, setPhase] = useState<'intro' | 'exit' | 'done'>('intro');
  const [lineVisible, setLineVisible] = useState(false);
  const [subVisible, setSubVisible] = useState(false);

  useEffect(() => {
    // Check if already seen this session
    if (sessionStorage.getItem('intro_shown')) {
      setPhase('done');
      return;
    }

    const t1 = setTimeout(() => setLineVisible(true), 600);
    const t2 = setTimeout(() => setSubVisible(true), 1200);
    const t3 = setTimeout(() => setPhase('exit'), 3200);
    const t4 = setTimeout(() => {
      setPhase('done');
      sessionStorage.setItem('intro_shown', '1');
    }, 4400);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Background split curtain exit */}
        {phase === 'exit' && (
          <>
            <motion.div
              className={`${styles.curtain} ${styles.curtainTop}`}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.div
              className={`${styles.curtain} ${styles.curtainBottom}`}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.06 }}
            />
          </>
        )}

        <div className={styles.content}>
          {/* Dr. text */}
          <div className={styles.drWrapper}>
            <motion.span
              className={styles.drText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Dr.
            </motion.span>
          </div>

          {/* Name — letter by letter */}
          <div className={styles.nameWrapper}>
            {'Gourav Siwas'.split('').map((char, i) => (
              <motion.span
                key={i}
                className={char === ' ' ? styles.space : styles.nameLetter}
                initial={{ opacity: 0, y: 60, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.055,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Divider line */}
          <motion.div
            className={styles.divider}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: lineVisible ? 1 : 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Subtitle */}
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: subVisible ? 1 : 0, y: subVisible ? 0 : 16 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Plastic · Cosmetic · Hand Microsurgery
          </motion.p>

          {/* Tagline */}
          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: subVisible ? 0.5 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Sir Ganga Ram Hospital · Max Smart Super Speciality, New Delhi
          </motion.p>
        </div>

        {/* Corner logo mark */}
        <motion.div
          className={styles.cornerMark}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          GS
        </motion.div>

        {/* Progress line */}
        <motion.div
          className={styles.progressBar}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 3.0, ease: 'linear' }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
