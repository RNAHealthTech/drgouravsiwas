'use client';

import React, { useState } from 'react';
import { useBooking } from '@/context/BookingContext';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './ProcedureEstimator.module.css';

interface ProcedureData {
  id: string;
  category: 'Aesthetic' | 'Microsurgery' | 'Reconstructive';
  name: string;
  tagline: string;
  duration: string;
  anesthesia: string;
  hospitalStay: string;
  recoveryTime: string;
  technique: string;
  overview: string;
  keyBenefits: string[];
}

export default function ProcedureEstimator() {
  const { openBooking } = useBooking();
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Aesthetic' | 'Microsurgery' | 'Reconstructive'>('All');
  const [activeProcedureId, setActiveProcedureId] = useState<string>('rhinoplasty');

  const procedures: ProcedureData[] = [
    {
      id: 'rhinoplasty',
      category: 'Aesthetic',
      name: 'Aesthetic & Functional Rhinoplasty',
      tagline: 'Precision nose reshaping for facial harmony and improved airway breathing',
      duration: '2.5 - 3.5 Hours',
      anesthesia: 'General Anesthesia',
      hospitalStay: 'Daycare or 1 Day Stay',
      recoveryTime: '7 - 10 Days (Back to Desk Work)',
      technique: 'Open/Closed Preservation Rhinoplasty with cartilage grafting',
      overview: 'Refines the nasal tip, straightens nasal bridge irregularities, reduces hump, and corrects deviated nasal septums (DNS) simultaneously for both beauty and breathing.',
      keyBenefits: [
        'Natural harmony tailored to Indian facial features',
        'Minimal swelling with micro-osteotomy techniques',
        'Long-term structural stability with autologous grafts'
      ]
    },
    {
      id: 'hand-replantation',
      category: 'Microsurgery',
      name: 'Emergency Hand & Finger Replantation',
      tagline: 'Emergency microvascular reattachment of severed fingers, hands, and upper extremities',
      duration: '4 - 8 Hours (Micro-dissection)',
      anesthesia: 'General / Regional Block',
      hospitalStay: '3 - 5 Days Monitoring',
      recoveryTime: '6 - 12 Weeks (Gradual Physical Therapy)',
      technique: 'Sub-millimeter microvascular vessel anastomosis & epineural nerve repair',
      overview: 'Time-critical emergency procedure re-establishing blood circulation (arteries & veins), bone fixation, and primary nerve and tendon repairs to restore life and function to severed digits.',
      keyBenefits: [
        'Limb salvage preventing permanent disability',
        '24/7 emergency microsurgical capability at SGRH',
        'Comprehensive postoperative hand physiotherapy protocols'
      ]
    },
    {
      id: 'liposuction',
      category: 'Aesthetic',
      name: 'High-Definition Body Contouring & Liposuction',
      tagline: 'Sculpting abdomen, flanks, chin, and waistline with advanced fat removal',
      duration: '2 - 4 Hours',
      anesthesia: 'Tumescent Local / Sedation / GA',
      hospitalStay: 'Daycare Procedure',
      recoveryTime: '3 - 5 Days for light routines',
      technique: 'Power-Assisted & Micro-Cannula Tumescent Liposuction',
      overview: 'Targeted removal of diet-resistant stubborn fat pockets to accentuate natural athletic contours with micro-incisions that heal inconspicuously.',
      keyBenefits: [
        'Precision muscle shadowing and natural curves',
        'Minimal bruising with tumescent fluid infiltration',
        'Customized medical compression garment guidance'
      ]
    },
    {
      id: 'burn-contracture',
      category: 'Reconstructive',
      name: 'Post-Burn Contracture Release & Scar Revision',
      tagline: 'Restoring joint mobility, neck movements, and skin elasticity after burn injuries',
      duration: '2 - 4 Hours',
      anesthesia: 'General Anesthesia',
      hospitalStay: '1 - 2 Days',
      recoveryTime: '2 - 4 Weeks with splinting',
      technique: 'Z-plasty, Full-thickness Skin Grafting & Tissue Expansion',
      overview: 'Releases tight fibrous burn contractures across neck, axilla, elbows, and fingers. Combined with advanced silicone and compression therapy to optimize skin softness.',
      keyBenefits: [
        'Dramatic improvement in joint mobility and function',
        'Alleviation of chronic tightness and skin pull',
        'Long-term aesthetic scar refinement'
      ]
    },
    {
      id: 'breast-surgery',
      category: 'Aesthetic',
      name: 'Aesthetic Breast Surgery & Onco-Reconstruction',
      tagline: 'Augmentation, reduction, mastopexy (lift), and post-cancer microvascular restoration',
      duration: '2 - 4 Hours',
      anesthesia: 'General Anesthesia',
      hospitalStay: '1 Day Stay',
      recoveryTime: '7 - 14 Days',
      technique: 'Dual-plane implants, vertical scar reduction, DIEP/LD flap transfers',
      overview: 'Comprehensive breast surgery encompassing aesthetic proportioning (implants or lift) as well as whole-breast autologous tissue reconstruction following mastectomy.',
      keyBenefits: [
        'Natural feel and harmonious anatomical projection',
        'Hidden periareolar or inframammary incisions',
        'Restoration of physical balance and self-confidence'
      ]
    },
    {
      id: 'facial-aesthetics',
      category: 'Aesthetic',
      name: 'Blepharoplasty & Facial Rejuvenation',
      tagline: 'Correcting droopy eyelids, under-eye bags, and deep facial wrinkles',
      duration: '1 - 2 Hours',
      anesthesia: 'Local Anesthesia with Sedation',
      hospitalStay: 'Daycare (Walk-in & Walk-out)',
      recoveryTime: '5 - 7 Days',
      technique: 'Transconjunctival & Subciliary micro-incision Blepharoplasty',
      overview: 'Removes excess eyelid skin and herniated fat pads to restore a vibrant, alert, and youthful appearance without changing natural eye expression.',
      keyBenefits: [
        'Elimination of tired eye look and upper field blockage',
        'Virtually invisible incisions in natural crease lines',
        'Quick turnaround with minimal downtime'
      ]
    }
  ];

  const filteredProcedures = selectedCategory === 'All' 
    ? procedures 
    : procedures.filter(p => p.category === selectedCategory);

  const activeProcedure = procedures.find(p => p.id === activeProcedureId) || procedures[0];

  return (
    <section className={styles.estimatorSection}>
      <div className="container">
        <ScrollReveal direction="up">
          <div className="section-title">
            <h2>Clinical Procedure & Recovery Explorer</h2>
            <p>Interactive guide to surgical duration, anesthesia protocols, and recovery timelines with {procedures[0] ? 'Dr. Gourav Siwas' : ''}</p>
          </div>
        </ScrollReveal>

        <div className={styles.filterTabs}>
          {(['All', 'Aesthetic', 'Microsurgery', 'Reconstructive'] as const).map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${selectedCategory === cat ? styles.filterBtnActive : ''}`}
              onClick={() => {
                setSelectedCategory(cat);
                const firstInCat = cat === 'All' ? procedures[0].id : procedures.find(p => p.category === cat)?.id;
                if (firstInCat) setActiveProcedureId(firstInCat);
              }}
            >
              {cat === 'All' ? 'All Procedures' : `${cat} Surgery`}
            </button>
          ))}
        </div>

        <div className={styles.explorerGrid}>
          <div className={styles.procedureList}>
            {filteredProcedures.map((proc) => {
              const isActive = proc.id === activeProcedure.id;
              return (
                <div
                  key={proc.id}
                  className={`${styles.listCard} ${isActive ? styles.listCardActive : ''} glass-card`}
                  onClick={() => setActiveProcedureId(proc.id)}
                >
                  <div className={styles.listCardHeader}>
                    <span className={`${styles.categoryTag} ${styles[`tag${proc.category}`]}`}>
                      {proc.category}
                    </span>
                    <span className={styles.durationPill}>⏱️ {proc.duration}</span>
                  </div>
                  <h4 className={styles.listCardTitle}>{proc.name}</h4>
                  <p className={styles.listCardTagline}>{proc.tagline}</p>
                </div>
              );
            })}
          </div>

          <div className={`${styles.detailCard} glass-card`}>
            <div className={styles.detailHeader}>
              <div className={styles.badgeRow}>
                <span className="badge badge-secondary">{activeProcedure.category} Specialty</span>
                <span className="badge">Sir Ganga Ram Hospital</span>
              </div>
              <h3 className={styles.detailTitle}>{activeProcedure.name}</h3>
              <p className={styles.detailOverview}>{activeProcedure.overview}</p>
            </div>

            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <div className={styles.metricIcon}>⏱️</div>
                <div className={styles.metricContent}>
                  <span className={styles.metricLabel}>Procedure Duration</span>
                  <strong className={styles.metricVal}>{activeProcedure.duration}</strong>
                </div>
              </div>

              <div className={styles.metricItem}>
                <div className={styles.metricIcon}>💉</div>
                <div className={styles.metricContent}>
                  <span className={styles.metricLabel}>Anesthesia Protocol</span>
                  <strong className={styles.metricVal}>{activeProcedure.anesthesia}</strong>
                </div>
              </div>

              <div className={styles.metricItem}>
                <div className={styles.metricIcon}>🏥</div>
                <div className={styles.metricContent}>
                  <span className={styles.metricLabel}>Hospital Admission</span>
                  <strong className={styles.metricVal}>{activeProcedure.hospitalStay}</strong>
                </div>
              </div>

              <div className={styles.metricItem}>
                <div className={styles.metricIcon}>🩹</div>
                <div className={styles.metricContent}>
                  <span className={styles.metricLabel}>Expected Recovery</span>
                  <strong className={styles.metricVal}>{activeProcedure.recoveryTime}</strong>
                </div>
              </div>
            </div>

            <div className={styles.techniqueBlock}>
              <h4 className={styles.techniqueTitle}>🔬 Surgical Technique & Approach:</h4>
              <p className={styles.techniqueDesc}>{activeProcedure.technique}</p>
            </div>

            <div className={styles.benefitsBlock}>
              <h4 className={styles.benefitsTitle}>✓ Key Patient Advantages:</h4>
              <ul className={styles.benefitsList}>
                {activeProcedure.keyBenefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div className={styles.actionRow}>
              <button
                id={`estimator-book-${activeProcedure.id}`}
                onClick={() => openBooking(`Consultation: ${activeProcedure.name}`)}
                className="btn btn-primary btn-shine-wrapper"
                style={{ flex: 1 }}
              >
                Book Consultation for {activeProcedure.name.split(' ')[0]}
              </button>
              <a
                href="https://appointment.sgrh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                SGRH Portal ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
