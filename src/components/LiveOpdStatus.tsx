'use client';

import React, { useState, useEffect } from 'react';
import styles from './LiveOpdStatus.module.css';

export default function LiveOpdStatus() {
  const [status, setStatus] = useState<{ isOpen: boolean; text: string; nextSlot: string }>({
    isOpen: false,
    text: 'Checking OPD Status...',
    nextSlot: 'OPD Timings: 08:00 AM - 08:00 PM'
  });

  useEffect(() => {
    const checkOpdStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const min = now.getMinutes();
      const timeInMins = hour * 60 + min;

      if (day === 0) {
        setStatus({
          isOpen: false,
          text: 'Sunday: Emergency Services Open 24/7',
          nextSlot: 'Next OPD: Monday 08:00 AM'
        });
        return;
      }

      if (timeInMins >= 480 && timeInMins < 1200) {
        setStatus({
          isOpen: true,
          text: 'OPD Active Now (Department of Plastic Surgery, SGRH)',
          nextSlot: 'Open till 08:00 PM'
        });
      } else if (timeInMins < 480) {
        setStatus({
          isOpen: false,
          text: 'Next OPD Starts Today at 08:00 AM',
          nextSlot: 'OPD Timings: 08:00 AM - 08:00 PM'
        });
      } else {
        setStatus({
          isOpen: false,
          text: 'Today\'s OPD Concluded (24/7 Emergency Available)',
          nextSlot: 'Next OPD: Tomorrow 08:00 AM'
        });
      }
    };

    checkOpdStatus();
    const interval = setInterval(checkOpdStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.statusBadge}>
      <div className={styles.indicatorWrapper}>
        <span className={`${styles.statusDot} ${status.isOpen ? styles.dotActive : styles.dotInactive}`}></span>
        <span className={styles.pulseRing}></span>
      </div>
      <div className={styles.statusContent}>
        <span className={styles.statusMain}>{status.text}</span>
        <span className={styles.statusSub}>{status.nextSlot}</span>
      </div>
    </div>
  );
}
