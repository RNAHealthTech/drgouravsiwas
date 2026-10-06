'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { doctorData } from '@/data/doctorData';
import { BookOpen, Presentation, Award, Activity, GraduationCap, Users, Bookmark } from 'lucide-react';
import styles from './DetailedProfile.module.css';

export default function DetailedProfile() {
  const [activeTab, setActiveTab] = useState('publications');

  const tabs = [
    { id: 'publications', label: 'Publications & Research', icon: BookOpen },
    { id: 'conferences', label: 'Workshops & Courses', icon: GraduationCap },
    { id: 'achievements', label: 'Achievements & Accomplishments', icon: Award }
  ];

  return (
    <section className={styles.profileSection}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.sectionHeader}
        >
          <span className={styles.sectionLabel}>Academic Excellence</span>
          <h2 className={`serif ${styles.sectionTitle}`}>Comprehensive Profile</h2>
        </motion.div>

        <div className={styles.profileContainer}>
          <div className={styles.tabsSidebar}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabActive : ''}`}
                >
                  <Icon size={20} className={styles.tabIcon} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className={styles.contentArea}>
            <AnimatePresence mode="wait">
              {activeTab === 'publications' && (
                <motion.div
                  key="publications"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className={styles.contentTitle}>Publications</h3>
                  <div className={styles.listContainer}>
                    {doctorData.publications.map((pub, idx) => (
                      <div key={idx} className={styles.listItem}>
                        <div className={styles.itemBullet}><Bookmark size={16} /></div>
                        <div>
                          <strong className={styles.itemMain}>{pub.title}</strong>
                          <p className={styles.itemSub}>{pub.authors}</p>
                          <span className={styles.itemMeta}>{pub.journal} - {pub.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className={styles.contentTitle} style={{ marginTop: '40px' }}>Dissertation</h3>
                  <div className={styles.dissertationCard}>
                    <p>{doctorData.dissertation}</p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'presentations' && (
                <motion.div
                  key="presentations"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className={styles.contentTitle}>Paper & Poster Presentations</h3>
                  <div className={styles.listContainer}>
                    {doctorData.presentations.map((pres, idx) => (
                      <div key={idx} className={styles.listItem}>
                        <div className={styles.itemBullet}><Presentation size={16} /></div>
                        <div>
                          <strong className={styles.itemMain}>{pres.title}</strong>
                          <p className={styles.itemSub}>{pres.event}</p>
                          <span className={styles.itemMeta}>{pres.type} | {pres.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'conferences' && (
                <motion.div
                  key="conferences"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className={styles.contentTitle}>Workshops &amp; Courses</h3>
                  <div className={styles.gridContainer}>
                    {doctorData.trainings.map((train, idx) => (
                      <div key={idx} className={styles.gridCard}>
                        <strong className={styles.cardMain}>{train.title}</strong>
                        <span className={styles.cardSub}>{train.institution}</span>
                        <span className={styles.cardMeta}>{train.period}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'achievements' && (
                <motion.div
                  key="achievements"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className={styles.contentTitle}>Key Achievements</h3>
                  <div className={styles.listContainer}>
                    {doctorData.awards.map((award, idx) => (
                      <div key={idx} className={styles.listItem}>
                        <div className={styles.itemBullet}><Award size={16} /></div>
                        <div>
                          <strong className={styles.itemMain}>{award.name}</strong>
                          <span className={styles.itemMeta}>{award.organization} - {award.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className={styles.contentTitle} style={{ marginTop: '40px' }}>Extra-Curricular Activities</h3>
                  <ul className={styles.bulletList}>
                    {doctorData.extraCurricular.map((activity, idx) => (
                      <li key={idx}>
                        <Activity size={16} className={styles.listIcon} />
                        {activity}
                      </li>
                    ))}
                  </ul>

                  <h3 className={styles.contentTitle} style={{ marginTop: '40px' }}>Memberships</h3>
                  <div className={styles.tagsContainer}>
                    {doctorData.memberships.map((mem, idx) => (
                      <span key={idx} className={styles.tagItem}>
                        <Users size={14} />
                        {mem.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
