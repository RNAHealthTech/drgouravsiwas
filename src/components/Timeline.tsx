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
            <p>Clinical experience, leadership positions, and academic recognition</p>
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

            <ScrollReveal direction="left">
              <h3 className={styles.columnTitle} style={{ marginTop: '20px' }}>Workshops &amp; Courses</h3>
            </ScrollReveal>

            <div className={styles.timeline}>
              {doctorData.trainings.map((train, idx) => (
                <ScrollReveal key={`train-${idx}`} direction="left" delay={idx * 100} duration={600} className={styles.timelineItem}>
                  <div>
                    <div className={`${styles.timelineDot} ${styles.timelineDotAlt}`}></div>
                    <div className={`${styles.timelineCard} glass-card`}>
                      <span className={styles.period}>{train.period}</span>
                      <h4 className={styles.role}>{train.title}</h4>
                      <h5 className={styles.inst}>{train.institution}</h5>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <ScrollReveal direction="right">
              <h3 className={styles.columnTitle}>Awards &amp; Accomplishments</h3>
            </ScrollReveal>

            <div className={styles.awardSection}>
              {doctorData.awards.map((award, idx) => (
                <ScrollReveal key={`award-${idx}`} direction="right" delay={idx * 120} duration={600} style={{ marginBottom: '16px' }}>
                  <div className={`${styles.awardCard} glass-card`}>
                    <div className={styles.medalIcon}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" fill="url(#timelineMedalGrad)" />
                        <path d="M12 15.5L9.5 21L12 19.5L14.5 21L12 15.5Z" fill="var(--secondary)" />
                        <circle cx="12" cy="9" r="4" stroke="white" strokeWidth="1" fill="none" />
                        <defs>
                          <linearGradient id="timelineMedalGrad" x1="6" y1="3" x2="18" y2="15" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F59E0B" />
                            <stop offset="1" stopColor="#D97706" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className={styles.awardInfo}>
                      <span className={styles.awardYear}>{award.year}</span>
                      <h4 className={styles.awardName}>{award.name}</h4>
                      <p className={styles.awardOrg}>{award.organization}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className={styles.membershipSection}>
              <ScrollReveal direction="right" delay={150}>
                <h3 className={styles.columnTitle} style={{ marginTop: '20px', marginBottom: '20px' }}>Memberships of Professional Societies</h3>
              </ScrollReveal>
              <div className={styles.membershipList}>
                {doctorData.memberships.map((member, idx) => (
                  <ScrollReveal key={`member-${idx}`} direction="right" delay={(doctorData.awards.length + idx) * 80} duration={600}>
                    <div className={`${styles.membershipCard} glass-card`}>
                      <div className={styles.memberCheck}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                      </div>
                      <div className={styles.memberInfo}>
                        <h5 className={styles.memberName}>{member.name}</h5>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

