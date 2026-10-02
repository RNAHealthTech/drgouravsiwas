'use client';

import React from 'react';
import Link from 'next/link';
import BookingCTA from '@/components/BookingCTA';
import { doctorData } from '@/data/doctorData';
import styles from './patient-care.module.css';

export default function PatientCarePage() {
  const preOpGuidelines = [
    {
      title: "Medications to Avoid",
      description: "Stop taking blood thinners, aspirin, ibuprofen, Vitamin E, and herbal supplements (ginkgo, fish oil) at least 10 days before surgery. These can increase bleeding risk. Paracetamol is generally safe."
    },
    {
      title: "Smoking & Nicotine Cessation",
      description: "Avoid smoking, vaping, or using nicotine patches for at least 4 weeks before and after surgery. Nicotine constricts blood vessels, significantly impairing wound healing and tissue survival."
    },
    {
      title: "Anesthesia Fasting Rules",
      description: "For procedures under general anesthesia or deep sedation, do not eat or drink anything (including water, gum, or mints) for 6 hours prior to your scheduled surgery time."
    },
    {
      title: "Arrangements for Discharge",
      description: "Ensure you arrange for a responsible adult companion to drive you home after surgery and stay with you for the first 24 hours of recovery. You cannot drive or travel alone."
    }
  ];

  const postOpGuidelines = [
    {
      title: "Wound Care & Dressings",
      description: "Keep surgical dressings dry and intact as instructed. Avoid showering or wetting the area for the first 48 hours. When allowed, gently clean the wound with mild soap and pat dry."
    },
    {
      title: "Positioning & Elevation",
      description: "To minimize swelling and bruising, keep the operated site elevated above the level of your heart. For facial or breast procedures, sleep with head elevated on 2-3 pillows."
    },
    {
      title: "Rest & Activity Restrictions",
      description: "Avoid heavy lifting (over 5kg), bending over, or strenuous exercise for 4 to 6 weeks. Light walking is encouraged from day one to maintain circulation and prevent blood clots."
    },
    {
      title: "Garments & Splints",
      description: "Wear compression garments, splints, or supportive bands exactly as prescribed (usually 24/7 for the first 4-6 weeks) to support new contours and minimize fluid buildup."
    }
  ];

  return (
    <section className={styles.patientCare}>
      <div className="container">
        <div className="section-title">
          <h2>Patient Care & Guidelines</h2>
          <p>Pre-operative checklists and post-operative recovery instructions for optimal healing</p>
        </div>

        <div className={`${styles.actionWrapper} no-print`}>
          <button onClick={() => window.print()} className="btn btn-secondary btn-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect width="12" height="8" x="6" y="14" rx="1.5" />
            </svg>
            Print Clinical Leaflet
          </button>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.careCard} glass-card`}>
            <div className={styles.cardHeader}>
              <span className={styles.headerIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" fill="none" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
              </span>
              <h3>Pre-Operative Preparation</h3>
            </div>
            <p className={styles.introText}>
              Following these guidelines strictly in the weeks leading up to your surgery ensures maximum safety and the best possible cosmetic and functional outcome.
            </p>

            <div className={styles.guideList}>
              {preOpGuidelines.map((guide, idx) => (
                <div key={idx} className={styles.guideItem}>
                  <h4 className={styles.guideTitle}>
                    <span className={styles.number}>0{idx + 1}</span> {guide.title}
                  </h4>
                  <p className={styles.guideDesc}>{guide.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.careCard} glass-card`}>
            <div className={styles.cardHeader}>
              <span className={styles.headerIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z" />
                </svg>
              </span>
              <h3>Post-Operative Recovery</h3>
            </div>
            <p className={styles.introText}>
              Your recovery plays a critical role in the final surgical outcome. Adhering to recovery instructions ensures incisions heal cleanly with minimal scarring.
            </p>

            <div className={styles.guideList}>
              {postOpGuidelines.map((guide, idx) => (
                <div key={idx} className={styles.guideItem}>
                  <h4 className={styles.guideTitle}>
                    <span className={styles.number}>0{idx + 1}</span> {guide.title}
                  </h4>
                  <p className={styles.guideDesc}>{guide.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.alertCard}>
          <div className={styles.alertIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c53030" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" />
            </svg>
          </div>
          <div className={styles.alertContent}>
            <h4>Warning Signs & Emergency Contact</h4>
            <p>
              Please contact Sir Ganga Ram Hospital casualty desk or call <strong>+91 11-42251097</strong> immediately if you experience:
            </p>
            <ul className={styles.alertList}>
              <li>Fever above 101°F (38.3°C) or chills</li>
              <li>Sudden, severe increase in swelling or bruising on one side</li>
              <li>Active, continuous bleeding from incisions that does not stop with light pressure</li>
              <li>Severe pain that is not relieved by your prescribed pain medications</li>
              <li>Shortness of breath or chest pain</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.opdSection} no-print`}>
          <div className={`${styles.opdCard} glass-card`}>
            <div className={styles.opdInfo}>
              <h3>Consultation Timings (OPD Hours)</h3>
              <p>For check-ups, follow-ups, and suture removals, visit {doctorData.name} during his OPD hours at Sir Ganga Ram Hospital:</p>
              <div className={styles.opdGrid}>
                <span className={styles.opdBadge}>📍 Room No. F-52, Plastic Surgery OPD</span>
                <span className={styles.opdBadge}>🗓️ Mon - Sat (09:00 AM - 11:00 AM & 04:00 PM - 06:00 PM)</span>
                <span className={styles.opdBadge}>📞 +91 11-4225 4000 / Emergency Casualty</span>
              </div>
            </div>
            <Link href="/opd" className="btn btn-secondary" style={{ whiteSpace: 'nowrap' }}>
              Full OPD Details
            </Link>
          </div>
        </div>
      </div>
      
      <div className="no-print" style={{ width: '100%' }}>
        <BookingCTA />
      </div>
    </section>
  );
}
