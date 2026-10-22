'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './IntroAnimation.module.css';

export default function IntroAnimation() {
  const [phase, setPhase] = useState<'intro' | 'exit' | 'done'>('intro');

  useEffect(() => {
    const tExit = setTimeout(() => setPhase('exit'), 1100);
    const tDone = setTimeout(() => setPhase('done'), 1600);

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
          {/* Dr. text */}
          <div className={styles.drWrapper}>
            <motion.span
              className={styles.drText}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Dr.
            </motion.span>
          </div>

          {/* Name — fast, elegant letter wave */}
          <div className={styles.nameWrapper}>
            {'Gourav Siwas'.split('').map((char, i) => (
              <motion.span
                key={i}
                className={char === ' ' ? styles.space : styles.nameLetter}
                initial={{ opacity: 0, y: 30, rotateX: 60 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.35,
                  delay: 0.04 + i * 0.02,
                  ease: [0.16, 1, 0.3, 1],
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
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Subtitle — comes right with Gourav Siwas */}
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            Consultant Hand &amp; Microsurgery
          </motion.p>

          {/* Tagline — comes right with the subtitle */}
          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            Sir Ganga Ram Hospital New Delhi
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
