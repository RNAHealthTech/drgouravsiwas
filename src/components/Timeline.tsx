'use client';

import React from 'react';
import { doctorData } from '@/data/doctorData';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './Timeline.module.css';

export default function Timeline() {
  return (
    <section id="journey" className={styles.journey}>
      <div className="container">
        <ScrollReveal direction="up">
          <div className="section-title">
            <h2>Professional Journey</h2>
            <p>Clinical experience, leadership positions, and medical qualifications</p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          <div className={styles.column}>
            <ScrollReveal direction="left">
              <h3 className={styles.columnTitle}>Clinical Experience & Positions</h3>
            </ScrollReveal>
            
            <div className={styles.timeline}>
              {doctorData.positions.map((pos, idx) => (
                <ScrollReveal key={`pos-${idx}`} direction="left" delay={idx * 100} duration={600} className={styles.timelineItem}>
                  <div>
                    <div className={styles.timelineDot}></div>
                    <div className={`${styles.timelineCard} glass-card`}>
                      <span className={styles.period}>{pos.period}</span>
                      <h4 className={styles.role}>{pos.role}</h4>
                      <h5 className={styles.inst}>{pos.institution}</h5>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

          <div className={styles.column}>
            <ScrollReveal direction="right">
              <h3 className={styles.columnTitle}>Education &amp; Qualifications</h3>
            </ScrollReveal>

            <div className={styles.timeline}>
              {doctorData.education.map((edu, idx) => (
                <ScrollReveal key={`edu-${idx}`} direction="right" delay={idx * 100} duration={600} className={styles.timelineItem}>
                  <div>
                    <div className={`${styles.timelineDot} ${styles.timelineDotAlt}`}></div>
                    <div className={`${styles.timelineCard} glass-card`}>
                      <span className={styles.period}>{edu.year}</span>
                      <h4 className={styles.role}>{edu.degree}</h4>
                      <h5 className={styles.inst}>{edu.institution}</h5>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

