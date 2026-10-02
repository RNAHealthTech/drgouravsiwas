'use client';

import React, { useState } from 'react';
import { doctorData } from '@/data/doctorData';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './About.module.css';

export default function About() {
  const [activeTab, setActiveTab] = useState<'education' | 'skills' | 'research'>('education');

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <ScrollReveal direction="up">
          <div className="section-title">
            <h2>About & Qualifications</h2>
            <p>The academic and clinical credentials of {doctorData.name}</p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {/* Left Column: Bio Card */}
          <ScrollReveal direction="right" delay={150} duration={850}>
            <div className={`${styles.bioCard} glass-card`}>
              <div className={styles.cardHeader}>
                <span className={styles.quoteIcon}>“</span>
                <h3>Clinical Philosophy</h3>
              </div>
              <p className={styles.bioText}>{doctorData.bio}</p>
              
              <div className={styles.languages}>
                <h4 className={styles.smallTitle}>Languages Spoken</h4>
                <div className={styles.langList}>
                  {doctorData.languages.map((lang) => (
                    <span key={lang} className={styles.langBadge}>
                      🗣️ {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Tabbed Qualifications & Skills */}
          <ScrollReveal direction="left" delay={250} duration={850}>
            <div className={styles.detailsCard}>
              <div className={styles.tabs}>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'education' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab('education')}
                >
                  Education & Credentials
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'skills' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab('skills')}
                >
                  Core Competencies
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'research' ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab('research')}
                >
                  Research & Pubs
                </button>
              </div>

              <div className={styles.tabContent}>
                {activeTab === 'education' && (
                  <div className={`${styles.educationList} ${styles.tabPane}`}>
                    {doctorData.education.map((edu, idx) => (
                      <div key={idx} className={styles.educationItem}>
                        <div className={styles.eduDot}></div>
                        <div className={styles.eduInfo}>
                          <span className={styles.eduYear}>{edu.year}</span>
                          <h4 className={styles.eduDegree}>{edu.degree}</h4>
                          <p className={styles.eduInst}>{edu.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className={`${styles.skillsGrid} ${styles.tabPane}`}>
                    {doctorData.skills.map((skill, idx) => (
                      <div key={idx} className={`${styles.skillCard} glass-card`}>
                        <div className={styles.skillCheck}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className={styles.skillName}>{skill}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'research' && (
                  <div className={`${styles.educationList} ${styles.tabPane}`}>
                    <div className={styles.educationItem}>
                      <div className={styles.eduDot}></div>
                      <div className={styles.eduInfo}>
                        <h4 className={styles.eduDegree}>Dissertation</h4>
                        <p className={styles.eduInst}>{doctorData.dissertation}</p>
                      </div>
                    </div>
                    {doctorData.publications.map((pub, idx) => (
                      <div key={`pub-${idx}`} className={styles.educationItem}>
                        <div className={styles.eduDot}></div>
                        <div className={styles.eduInfo}>
                          <span className={styles.eduYear}>{pub.year}</span>
                          <h4 className={styles.eduDegree}>{pub.title}</h4>
                          <p className={styles.eduInst}>{pub.authors} - {pub.journal}</p>
                        </div>
                      </div>
                    ))}
                    {doctorData.presentations.map((pres, idx) => (
                      <div key={`pres-${idx}`} className={styles.educationItem}>
                        <div className={styles.eduDot}></div>
                        <div className={styles.eduInfo}>
                          <span className={styles.eduYear}>{pres.date}</span>
                          <h4 className={styles.eduDegree}>{pres.title} ({pres.type})</h4>
                          <p className={styles.eduInst}>{pres.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
