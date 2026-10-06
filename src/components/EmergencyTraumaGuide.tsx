'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { doctorData } from '@/data/doctorData';
import styles from './EmergencyTraumaGuide.module.css';

export default function EmergencyTraumaGuide() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: 'Control Bleeding & Elevate',
      icon: '🩹',
      instruction: 'Apply direct firm pressure to the injured limb using clean sterile gauze or a clean cloth. Elevate the hand above the level of the heart to slow arterial bleeding. Do NOT use tight tourniquets or string wires that can crush healthy proximal vessels.'
    },
    {
      step: 2,
      title: 'Wrap Severed Part in Saline Gauze',
      icon: '🧤',
      instruction: 'Carefully locate all severed digits or amputated tissue parts. Gently wrap the part in sterile saline-soaked gauze (or clean moist cloth). Do NOT scrub, wash with harsh soap, or immerse in liquids.'
    },
    {
      step: 3,
      title: 'Double-Bag on Ice (Never Directly on Ice!)',
      icon: '🧊',
      instruction: 'CRITICAL: Place the wrapped part inside a waterproof sealed plastic bag. Then place this sealed bag inside a second container filled with cold water and ice. NEVER place amputated tissue directly in contact with ice or water, as freezing causes irreparable frostbite necrosis.'
    },
    {
      step: 4,
      title: 'Rush to SGRH Casualty Immediately',
      icon: '🚑',
      instruction: 'Time is tissue. Ideal warm ischemia time for digits is under 12 hours (and muscle-rich limbs under 6 hours). Inform Sir Ganga Ram Hospital casualty desk in advance so the microsurgical theater and Dr. Gourav Siwas\'s team can be prepped.'
    }
  ];

  return (
    <section className={styles.traumaSection}>
      <div className="container">
        <ScrollReveal direction="up">
          <div className={styles.headerBox}>
            <div className={styles.emergencyTag}>
              <span className={styles.blinkingIcon}>🚨</span>
              <span>24/7 Emergency Microsurgery Protocol</span>
            </div>
            <h2>Hand Injury & Replantation First-Aid Protocol</h2>
            <p>Crucial emergency first-aid steps for severed fingers, cut tendons, and severe hand trauma before reaching Sir Ganga Ram Hospital</p>
          </div>
        </ScrollReveal>

        <div className={styles.contentGrid}>
          <div className={styles.stepsColumn}>
            {steps.map((s) => {
              const isActive = activeStep === s.step;
              return (
                <div
                  key={s.step}
                  className={`${styles.stepCard} ${isActive ? styles.stepCardActive : ''} glass-card`}
                  onClick={() => setActiveStep(s.step)}
                >
                  <div className={styles.stepHeader}>
                    <span className={styles.stepBadge}>Step 0{s.step}</span>
                    <span className={styles.stepIcon}>{s.icon}</span>
                  </div>
                  <h4 className={styles.stepTitle}>{s.title}</h4>
                  <p className={styles.stepText}>{s.instruction}</p>
                </div>
              );
            })}
          </div>

          <div className={`${styles.hotlineCard} glass-card`}>
            <div className={styles.hotlineTop}>
              <div className={styles.hotlineBadge}>Emergency</div>
              <h3>Sir Ganga Ram Hospital 24/7 Casualty</h3>
              <p>For acute hand injuries, industrial accidents, and emergency reconstructive triage, reach out directly:</p>
            </div>

            <div className={styles.phoneList}>
              <a href="tel:+918950406670" className={styles.phoneItem}>
                <span className={styles.phoneIcon}>📞</span>
                <div className={styles.phoneText}>
                  <strong>Dr. Gourav Siwas</strong>
                  <span className={styles.phoneRole}>Consultant Hand Surgeon</span>
                  <span className={styles.phoneNum}>8950406670</span>
                </div>
              </a>
            </div>

            <div className={styles.addressBox}>
              <strong>📍 Destination:</strong>
              <span>Sir Ganga Ram Hospital, Rajinder Nagar, New Delhi - 110060</span>
            </div>

            <a
              href={doctorData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-shine-wrapper"
              style={{ width: '100%', marginTop: '8px' }}
            >
              Get Emergency GPS Directions ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
