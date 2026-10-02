'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Bone,
  Shield,
  Scissors,
  Zap,
  Droplet,
  Layers,
  ShieldAlert,
  Smile,
  Scan,
  User,
  Wind,
  Sun,
  HeartHandshake,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Marquee from 'react-fast-marquee';
import ProcedureEstimator from '@/components/ProcedureEstimator';
import TestimonialsGrid from '@/components/TestimonialsGrid';
import BookingCTA from '@/components/BookingCTA';
import { serviceCategories, servicesData } from '@/data/servicesData';
import styles from './services.module.css';

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Bone,
  Shield,
  Scissors,
  Zap,
  Droplet,
  Layers,
  ShieldAlert,
  Smile,
  Scan,
  User,
  Wind,
  Sun,
  HeartHandshake
};

function ServicesContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [activeTab, setActiveTab] = useState<string>('hand-wrist');

  useEffect(() => {
    if (categoryParam && serviceCategories.some((c) => c.id === categoryParam)) {
      setActiveTab(categoryParam);
    }
  }, [categoryParam]);

  const filteredServices = servicesData.filter((s) => s.category === activeTab);

  return (
    <main className={styles.servicesPage}>
      <header className={styles.header}>
        <div className={styles.headerBg}></div>
        <div className={styles.headerContent}>
          <div className={styles.headerBadge}>
            <Sparkles size={14} />
            <span>Comprehensive Clinical Portfolio</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className={`serif ${styles.headerTitle}`}
          >
            Surgical &amp; Clinical Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className={styles.headerSubtitle}
          >
            Pioneering hand microsurgery, brachial plexus reconstruction, and natural aesthetic refinement by India&apos;s youngest European Board Certified Hand Surgeon.
          </motion.p>
        </div>
      </header>

      <div className={styles.marqueeContainer}>
        <Marquee speed={40} gradient={false}>
          <span className={styles.marqueeText}>✦ EUROPEAN BOARD CERTIFIED HAND SURGEON (EDHS)</span>
          <span className={styles.marqueeText}>✦ ADVANCED RECONSTRUCTIVE MICROSURGERY</span>
          <span className={styles.marqueeText}>✦ NATURAL AESTHETIC RHINOPLASTY</span>
          <span className={styles.marqueeText}>✦ 24x7 EMERGENCY HAND TRAUMA &amp; REPLANTATION</span>
          <span className={styles.marqueeText}>✦ SIR GANGA RAM HOSPITAL &amp; MAX SMART HEALTHCARE</span>
        </Marquee>
      </div>

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

      <section className={styles.gridSection}>
        <motion.div layout className={styles.gridContainer}>
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = iconMap[service.iconName] || Activity;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={`/services/${service.slug}`} className={styles.serviceCard}>
                    <div>
                      <div className={styles.cardTopRow}>
                        <div className={styles.iconWrapper}>
                          <Icon size={26} strokeWidth={1.75} />
                        </div>
                        <span className={styles.cardBadge}>
                          {service.quickFacts.anesthesia.split('/')[0]}
                        </span>
                      </div>
                      <h3 className={styles.serviceTitle}>{service.shortTitle || service.title}</h3>
                      <p className={styles.serviceDesc}>{service.tagline}</p>
                    </div>

                    <div className={styles.cardFooter}>
                      <span className={styles.viewDetailsLink}>
                        <span>View Procedure Guide</span>
                        <ArrowRight size={14} />
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {service.quickFacts.procedureTime}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className={styles.processSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={`serif ${styles.sectionTitle}`}>The GS Clinical Approach</h2>
            <p className={styles.sectionSubtitle}>
              A rigorous four-tier surgical protocol calibrated for anatomical safety, minimal trauma, and superior functional recovery.
            </p>
          </motion.div>

          <div className={styles.processGrid}>
            {[
              {
                title: 'High-Precision Diagnostics',
                desc: 'Detailed clinical mapping, electrophysiology (EMG/NCV), and high-resolution imaging to pinpoint the exact pathology.',
                step: '01'
              },
              {
                title: 'Tailored Surgical Planning',
                desc: 'Customized micro-technique selection—choosing between endoscopic, WALANT, or microvascular reconstructive options.',
                step: '02'
              },
              {
                title: 'Microsurgical Precision',
                desc: 'Operating under high-power Zeiss surgical microscopes with ultra-fine sutures to ensure pristine tissue handling.',
                step: '03'
              },
              {
                title: 'Supervised Rehabilitation',
                desc: 'Immediate mobilization protocols and dedicated hand therapy ensuring maximum joint excursion and strength return.',
                step: '04'
              }
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

      <section className={styles.estimatorSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={`serif ${styles.sectionTitle}`}>Procedure Insights &amp; Cost Guidance</h2>
            <p className={styles.sectionSubtitle}>
              Interactive timeline estimation and clinical guidelines for surgical recovery.
            </p>
          </motion.div>
          <ProcedureEstimator />
        </div>
      </section>

      <TestimonialsGrid />

      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '40px 0' }}>
        <BookingCTA />
      </section>
    </main>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', paddingTop: '120px', textAlign: 'center' }}>Loading services...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
