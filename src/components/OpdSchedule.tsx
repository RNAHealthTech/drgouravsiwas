'use client';

import React, { useState } from 'react';
import { doctorData } from '@/data/doctorData';
import { useBooking } from '@/context/BookingContext';
import styles from './OpdSchedule.module.css';

export default function OpdSchedule() {
  const [activeTab, setActiveTab] = useState<'general' | 'private' | 'emergency'>('general');
  const { openBooking } = useBooking();

  const generalOpd = doctorData.opdTimings.find(t => t.type.includes('General'));
  const privateOpd = doctorData.opdTimings.find(t => t.type.includes('Private'));
  const emergencyOpd = doctorData.opdTimings.find(t => t.type.includes('Other') || t.type.includes('Emergency'));

  return (
    <section id="opd" className={styles.opd}>
      <div className="container">
        <div className="section-title">
          <h2>OPD Schedule & Consultation Tariffs</h2>
          <p>Official consultation schedule & department room timings at {doctorData.hospital}</p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.scheduleCard} glass-card`}>
            <div className={styles.tabs}>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'general' ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab('general')}
              >
                General OPD
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'private' ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab('private')}
              >
                Private OPD
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'emergency' ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab('emergency')}
              >
                Other Clinic / Emergency
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === 'general' && generalOpd && (
                <div className={styles.opdDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                    </span>
                    <div className={styles.detailText}>
                      <strong>OPD Days</strong>
                      <span>{generalOpd.days}</span>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <div className={styles.detailText}>
                      <strong>Timings</strong>
                      <span>{generalOpd.time}</span>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div className={styles.detailText} style={{ flexGrow: 1 }}>
                      <strong>Department / Room</strong>
                      <span>{generalOpd.location}</span>
                    </div>
                    <a 
                      href={doctorData.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '6px 12px', fontSize: '0.75rem', height: 'fit-content' }}
                    >
                      Directions
                    </a>
                  </div>

                  <div className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <div className={styles.detailText}>
                      <strong>Official Email</strong>
                      <span>{doctorData.email}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'private' && privateOpd && (
                <div className={styles.opdDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                    </span>
                    <div className={styles.detailText}>
                      <strong>Private OPD Days</strong>
                      <span>{privateOpd.days}</span>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <div className={styles.detailText}>
                      <strong>Evening Timings</strong>
                      <span>{privateOpd.time}</span>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div className={styles.detailText} style={{ flexGrow: 1 }}>
                      <strong>Consultation Location</strong>
                      <span>{privateOpd.location}</span>
                    </div>
                    <a 
                      href={doctorData.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '6px 12px', fontSize: '0.75rem', height: 'fit-content' }}
                    >
                      Directions
                    </a>
                  </div>

                  <div className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <div className={styles.detailText}>
                      <strong>Official Email</strong>
                      <span>{doctorData.email}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'emergency' && emergencyOpd && (
                <div className={styles.opdDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div className={styles.detailText} style={{ flexGrow: 1 }}>
                      <strong>Emergency Location</strong>
                      <span>{emergencyOpd.location}</span>
                    </div>
                    <a 
                      href={doctorData.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '6px 12px', fontSize: '0.75rem', height: 'fit-content' }}
                    >
                      Directions
                    </a>
                  </div>

                  <div className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <div className={styles.detailText}>
                      <strong>Emergency Availability</strong>
                      <span>{emergencyOpd.time} ({emergencyOpd.days})</span>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <div className={styles.detailText}>
                      <strong>Casualty / Emergency Numbers</strong>
                      <span>{doctorData.casualtyPhone}</span>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <span className={styles.detailIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <div className={styles.detailText}>
                      <strong>Official Email</strong>
                      <span>{doctorData.email}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.bookingActions}>
              <button 
                id="opd-direct-btn"
                onClick={() => openBooking('Direct (Hospital OPD)')} 
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                Book OPD Consultation
              </button>
              <a 
                href={doctorData.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1 }}
              >
                SGRH Online Portal ↗
              </a>
            </div>
          </div>

          <div className={`${styles.feeCard} glass-card`}>
            <h3 className={styles.feeTitle}>Consultation Tariffs</h3>
            <p className={styles.feeSubtitle}>Official fee structure at Sir Ganga Ram Hospital</p>
            
            <div className={styles.feeList}>
              {doctorData.fees.map((fee, idx) => (
                <div key={idx} className={styles.feeItem}>
                  <div className={styles.feeType}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" style={{ marginRight: '8px' }}>
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    <strong>{fee.type}</strong>
                  </div>
                  <span className={styles.feePrice}>₹{fee.amount}</span>
                </div>
              ))}
            </div>

            <div className={styles.notice}>
              <p><strong>Note:</strong> Consultation fees are payable directly at Sir Ganga Ram Hospital counters or via official portal. We do not solicit unofficial outside payment links.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
