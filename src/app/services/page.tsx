'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smile, Scissors, Activity, Droplet, Heart, User, Sun, Wind, Scan, Biohazard, Bone, Shield
} from 'lucide-react';
import Marquee from 'react-fast-marquee';
import ProcedureEstimator from '@/components/ProcedureEstimator';
import TestimonialsGrid from '@/components/TestimonialsGrid';
import BookingCTA from '@/components/BookingCTA';
import styles from './services.module.css';

// Using user's themes and creating categories based on procedures
const serviceCategories = [
  { id: 'aesthetic', label: 'Cosmetic & Aesthetic' },
  { id: 'reconstructive', label: 'Reconstructive Microsurgery' },
  { id: 'hand', label: 'Hand & Extremity' },
  { id: 'office', label: 'Office Procedures' }
];

const servicesData = [
  // Aesthetic
  { id: 1, category: 'aesthetic', title: 'Rhinoplasty', desc: 'Reshaping and refining nasal structure for harmony.', icon: Smile },
  { id: 2, category: 'aesthetic', title: 'Liposuction', desc: 'Targeted fat removal and body contouring.', icon: Activity },
  { id: 3, category: 'aesthetic', title: 'Facelift', desc: 'Comprehensive facial rejuvenation to restore a youthful look.', icon: User },
  { id: 4, category: 'aesthetic', title: 'Breast Augmentation', desc: 'Enhancing volume and shape using premium implants.', icon: Heart },
  { id: 5, category: 'aesthetic', title: 'Tummy Tuck', desc: 'Abdominoplasty for a firmer, flatter abdomen.', icon: Wind },
  { id: 6, category: 'aesthetic', title: 'Blepharoplasty', desc: 'Eyelid surgery to remove excess skin and reduce puffiness.', icon: Scan },
  
  // Reconstructive
  { id: 7, category: 'reconstructive', title: 'Burn Reconstruction', desc: 'Advanced techniques to restore function and appearance.', icon: Sun },
  { id: 8, category: 'reconstructive', title: 'Trauma Surgery', desc: 'Complex repairs for maxillofacial and soft tissue injuries.', icon: Shield },
  { id: 9, category: 'reconstructive', title: 'Cancer Reconstruction', desc: 'Restoring defects following tumor or lesion removal.', icon: Biohazard },
  { id: 10, category: 'reconstructive', title: 'Scar Revision', desc: 'Minimizing the appearance of scars for a smoother finish.', icon: Scissors },

  // Hand & Extremity
  { id: 11, category: 'hand', title: 'Nerve Repair', desc: 'Microsurgical repair of peripheral nerves.', icon: Activity },
  { id: 12, category: 'hand', title: 'Tendon Repair', desc: 'Restoring movement and function to injured hands.', icon: Bone },
  { id: 13, category: 'hand', title: 'Finger Replantation', desc: 'Emergency microsurgery to reattach severed digits.', icon: Droplet },
  
  // Office Procedures
  { id: 14, category: 'office', title: 'Lobuloplasty', desc: 'Ear lobe repair and reshaping.', icon: Scissors },
  { id: 15, category: 'office', title: 'Laceration Repair', desc: 'Precision suturing for minor cuts and injuries.', icon: Activity },
  { id: 16, category: 'office', title: 'Mole Removal', desc: 'Safe and aesthetic excision of skin lesions.', icon: Sun },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('aesthetic');

  const filteredServices = servicesData.filter(s => s.category === activeTab);

  return (
    <main className={styles.servicesPage}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.headerBg}></div>
        <div className={styles.headerContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`serif ${styles.headerTitle}`}
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.headerSubtitle}
          >
            Comprehensive solutions in aesthetic refinement and advanced microsurgical reconstruction.
          </motion.p>
        </div>
      </header>

      {/* INFINITE MARQUEE */}
      <div className={styles.marqueeContainer}>
        <Marquee speed={40} gradient={false}>
          <span className={styles.marqueeText}>✦ BOARD CERTIFIED PLASTIC SURGEON</span>
          <span className={styles.marqueeText}>✦ ADVANCED MICROSURGERY</span>
          <span className={styles.marqueeText}>✦ AESTHETIC EXCELLENCE</span>
          <span className={styles.marqueeText}>✦ COMPREHENSIVE PATIENT CARE</span>
          <span className={styles.marqueeText}>✦ STATE-OF-THE-ART FACILITY</span>
        </Marquee>
      </div>

      {/* Tabs Section - Mega Menu Style */}
      <section className={styles.tabsSection}>
        <div className={styles.tabsContainer}>
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`${styles.tabBtn} ${activeTab === category.id ? styles.tabBtnActive : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.gridSection}>
        <motion.div layout className={styles.gridContainer}>
          <AnimatePresence mode='popLayout'>
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <a href={`/services/${service.id}`} className={styles.serviceCard}>
                    <div className={styles.iconWrapper}>
                      <Icon className={styles.icon} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                      <p className={styles.serviceDesc}>{service.desc}</p>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Interactive Process / Approach Section */}
      <section className={styles.processSection}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={`serif ${styles.sectionTitle}`}>The GS Approach</h2>
            <p className={styles.sectionSubtitle}>A meticulous journey designed around your comfort, safety, and desired outcomes.</p>
          </motion.div>
          
          <div className={styles.processGrid}>
            {[
              { title: 'Initial Consultation', desc: 'Detailed assessment of your goals and anatomy by Dr. Gourav.', step: '01' },
              { title: 'Personalized Planning', desc: 'Customized surgical or non-surgical roadmap to achieve results.', step: '02' },
              { title: 'The Procedure', desc: 'State-of-the-art techniques performed with maximum safety.', step: '03' },
              { title: 'Recovery & Aftercare', desc: 'Comprehensive support until full healing is achieved.', step: '04' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={styles.processCard}
              >
                <div className={styles.processStep}>{item.step}</div>
                <h3 className={styles.processTitle}>{item.title}</h3>
                <p className={styles.processDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Estimator from existing components */}
      <section className={styles.estimatorSection}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={`serif ${styles.sectionTitle}`}>Procedure Insights</h2>
            <p className={styles.sectionSubtitle}>Explore details and get estimated timelines for various treatments.</p>
          </motion.div>
          <ProcedureEstimator />
        </div>
      </section>

      <TestimonialsGrid />

      {/* Booking CTA replacing static CTA to reuse existing components */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '40px 0' }}>
        <BookingCTA />
      </section>
    </main>
  );
}
