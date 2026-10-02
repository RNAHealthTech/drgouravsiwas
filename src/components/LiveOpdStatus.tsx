'use client';

import React, { useState, useEffect } from 'react';
import styles from './LiveOpdStatus.module.css';

export default function LiveOpdStatus() {
  const [status, setStatus] = useState<{ isOpen: boolean; text: string; nextSlot: string }>({
    isOpen: false,
    text: 'Checking OPD Status...',
    nextSlot: 'Morning OPD: 09:00 AM - 11:00 AM'
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
          text: 'Sunday: Regular OPD Closed (Emergency Casualty Open 24/7)',
          nextSlot: 'Next OPD: Monday 09:00 AM (Room F-52)'
        });
        return;
      }

      if (timeInMins >= 540 && timeInMins < 660) {
        setStatus({
          isOpen: true,
          text: 'Morning OPD Active Now (Room F-52, SGRH)',
          nextSlot: 'Open till 11:00 AM'
        });
      } else if (timeInMins >= 960 && timeInMins < 1080) {
        setStatus({
          isOpen: true,
          text: 'Evening OPD Active Now (Room F-52, SGRH)',
          nextSlot: 'Open till 06:00 PM'
        });
      } else if (timeInMins < 540) {
        setStatus({
          isOpen: false,
          text: 'Next OPD Starts Today at 09:00 AM',
          nextSlot: 'Morning OPD: 09:00 AM - 11:00 AM (Room F-52)'
        });
      } else if (timeInMins >= 660 && timeInMins < 960) {
        setStatus({
          isOpen: false,
          text: 'Next OPD Starts Today at 04:00 PM',
          nextSlot: 'Evening Private OPD: 04:00 PM - 06:00 PM'
        });
      } else {
        setStatus({
          isOpen: false,
          text: 'Today\'s OPD Concluded (Casualty Available 24/7)',
          nextSlot: 'Next OPD: Tomorrow 09:00 AM (Room F-52)'
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
