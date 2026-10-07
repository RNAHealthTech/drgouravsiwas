'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './Expertise.module.css';

interface Specialty {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  treatments: string[];
}

export default function Expertise() {
  const specialties: Specialty[] = [
    {
      id: 'hand-surgery',
      title: "Hand Surgery",
      description: "Intricate reconstructive surgeries focusing on hand trauma, finger replantation, tendon and nerve repairs, and congenital hand differences.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8.5" />
          <path d="M10 18H5.5a2.5 2.5 0 0 1-2.5-2.5v0a2.5 2.5 0 0 1 2.5-2.5H10" />
          <path d="M6 14v4a4 4 0 0 0 8 0v-7h4a2 2 0 0 1 2 2v3a6 6 0 0 1-6 6h-4" />
        </svg>
      ),
      treatments: ["Hand Trauma & Replantation", "Tendon & Nerve Repair", "Carpal Tunnel Release", "Fingertip Injuries", "Congenital Hand Correction"]
    },
    {
      id: 'wrist-surgery',
      title: "Wrist Surgery",
      description: "Specialized arthroscopic and open techniques for complex wrist trauma, scaphoid fractures, ligament tears, and degenerative wrist conditions.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" />
          <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
          <line x1="8" y1="17" x2="16" y2="17" />
          <line x1="9" y1="21" x2="15" y2="21" />
        </svg>
      ),
      treatments: ["Scaphoid Non-Union & Fractures", "Wrist Arthroscopy", "TFCC Ligament Repair", "Kienböck's Disease", "Partial/Total Wrist Arthrodesis"]
    },
    {
      id: 'brachial-plexus',
      title: "Brachial Plexus & Microsurgery",
      description: "Advanced micro-neurosurgical reconstruction for adult and pediatric brachial plexus injuries, targeted nerve transfers, and limb salvage.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
        </svg>
      ),
      treatments: ["Adult Brachial Plexus Injury", "Obstetric Brachial Plexus Palsy", "Targeted Nerve Transfers", "Free Functioning Muscle Transfer", "Microvascular Anastomosis"]
    },
    {
      id: 'reconstructive',
      title: "Reconstructive Surgery",
      description: "Precision microvascular tissue transfers to rebuild complex defects from severe trauma, cancer resection, and limb-threatening infections.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 22a7 7 0 1 0-14 0" />
          <path d="M9 14h2" />
          <path d="M9 12a3 3 0 0 1-3-3V5a3 3 0 0 1 6 0v4a3 3 0 0 1-3 3Z" />
          <path d="M12 5h4" />
          <path d="M14 9h4" />
        </svg>
      ),
      treatments: ["Free Flap Reconstruction", "Limb Salvage", "Head & Neck Reconstruction", "Complex Soft Tissue Coverage"]
    }
  ];

  const [activeTab, setActiveTab] = useState<string>('all');

  const visibleSpecialties = activeTab === 'all' 
    ? specialties 
    : specialties.filter(s => s.id === activeTab);

  return (
    <section id="expertise" className={styles.expertise}>
      <div className="container">
        <ScrollReveal direction="up">
          <div className="section-title">
            <h2>Areas of Expertise</h2>
            <p>Comprehensive hand, wrist, plastic and reconstructive services tailored to patient needs</p>
          </div>
        </ScrollReveal>

        <div className={styles.tabsWrapper}>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'all' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <span>All Specialties</span>
          </button>
          {specialties.map((spec) => (
            <button
              key={spec.id}
              type="button"
              className={`${styles.tabBtn} ${activeTab === spec.id ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab(spec.id)}
            >
              <span className={styles.tabIcon}>{spec.icon}</span>
              <span>{spec.title}</span>
            </button>
          ))}
        </div>

        <div className={activeTab === 'all' ? styles.grid : styles.singleCardWrap}>
          {visibleSpecialties.map((spec) => (
            <motion.div
              key={spec.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`${styles.card} glass-card`}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{spec.icon}</span>
              </div>
              <h3 className={styles.title}>{spec.title}</h3>
              <p className={styles.description}>{spec.description}</p>
              
              <div className={styles.treatmentWrapper}>
                <h4 className={styles.treatmentTitle}>Common Procedures:</h4>
                <div className={styles.tagWrapper}>
                  {spec.treatments.map((tag, tagIdx) => (
                    <span key={tagIdx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
