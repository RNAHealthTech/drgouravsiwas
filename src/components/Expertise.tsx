'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './Expertise.module.css';

interface Specialty {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  treatments: string[];
  link?: string;
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
          <rect x="7" y="10" width="10" height="9" rx="2" />
          <path d="M9 10V5a3 3 0 0 1 6 0v5" />
          <line x1="12" y1="13" x2="12" y2="16" />
          <line x1="7" y1="14" x2="17" y2="14" />
          <path d="M9 19v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2" />
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
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <path d="M8.5 7.5L12 15" />
          <path d="M15.5 7.5L12 15" />
          <path d="M12 2v3" />
          <path d="M12 21v1" />
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
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      treatments: ["Free Flap Reconstruction", "Limb Salvage", "Head & Neck Reconstruction", "Complex Soft Tissue Coverage"]
    },
    {
      id: 'plastic-reconstructive-care',
      title: "Plastic Surgery & Pre-Post Care",
      description: "Aesthetic facial refinement, scar revision, structured perioperative preparation, custom thermoplastic splinting, and supervised rehabilitation.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
          <path d="M19 3l.8 2.4L22 6l-2.2.6L19 9l-.8-2.4L16 6l2.2-.6L19 3z" />
        </svg>
      ),
      treatments: [
        "Aesthetic Rhinoplasty & Facial Contouring",
        "Scar Revision & Keloid Management",
        "Pre-Surgical Clearance & Diagnostic Workup",
        "Wound Dressing & Suture Protocols",
        "Custom Splinting & Hand Rehabilitation"
      ],
      link: "/patient-care"
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

              {spec.link && (
                <div style={{ marginTop: '20px' }}>
                  <Link 
                    href={spec.link} 
                    className="btn btn-secondary btn-sm" 
                    style={{ padding: '7px 16px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>View Pre &amp; Post Care Protocols</span>
                    <span>→</span>
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
