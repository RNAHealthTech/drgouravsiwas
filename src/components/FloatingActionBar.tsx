'use client';

import React, { useState } from 'react';
import { useBooking } from '@/context/BookingContext';
import { doctorData } from '@/data/doctorData';
import styles from './FloatingActionBar.module.css';

export default function FloatingActionBar() {
  const { openBooking } = useBooking();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`${styles.floatingBarContainer} no-print`}>
      <div className={`${styles.floatingBar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
        <button
          className={styles.toggleBtn}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Toggle quick actions"
          title={isExpanded ? 'Minimize bar' : 'Open quick actions'}
        >
          {isExpanded ? '✕' : '⚡ Quick Actions'}
        </button>

        {isExpanded && (
          <div className={styles.actionItems}>
            <a
              href={`tel:${doctorData.phone}`}
              className={`${styles.actionBtn} ${styles.callBtn}`}
              title="Call 8950406670"
            >
              <span className={styles.btnIcon}>📞</span>
              <span className={styles.btnText}>8950406670</span>
            </a>

            <a
              href={`https://wa.me/${doctorData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Dr.%20Gourav%20Siwas,%20I%20would%20like%20to%20inquire%20about%20a%20consultation%20at%20Sir%20Ganga%20Ram%20Hospital.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionBtn} ${styles.whatsappBtn}`}
              title="WhatsApp Consultation Inquiry"
            >
              <span className={styles.btnIcon}>💬</span>
              <span className={styles.btnText}>WhatsApp</span>
            </a>

            <button
              onClick={() => openBooking('Direct (Hospital OPD)')}
              className={`${styles.actionBtn} ${styles.bookBtn} btn-shine-wrapper`}
              title="Book OPD Consultation"
            >
              <span className={styles.btnIcon}>🗓️</span>
              <span className={styles.btnText}>Book OPD (₹1000)</span>
            </button>

            <a
              href={doctorData.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionBtn} ${styles.portalBtn}`}
              title="SGRH Official Booking Portal"
            >
              <span className={styles.btnIcon}>🏥</span>
              <span className={styles.btnText}>SGRH Portal ↗</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
