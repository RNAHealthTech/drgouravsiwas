'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { doctorData } from '@/data/doctorData';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.brand}>
              <Link href="/" className={styles.logoLink}>
                <div className={styles.logoEmblemWrap}>
                  <Image
                    src="/images/dr_gourav_emblem.jpg"
                    alt="Dr. Gourav Siwas Logo"
                    width={46}
                    height={46}
                    className={styles.logoEmblem}
                  />
                </div>
                <div className={styles.logoTextGroup}>
                  <span className={styles.logoName}>Dr. Gourav Siwas</span>
                  <span className={styles.logoTitle}>Hand, Wrist &amp; Reconstructive Plastic Surgeon</span>
                </div>
              </Link>
            </div>
            <p className={styles.description}>
              {doctorData.department} at {doctorData.hospital}. Specialized in complex hand trauma &amp; replantation, Plastic Surgery, microvascular reconstruction, and burns rehabilitation.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.title}>Navigation</h4>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About & Qualifications</Link></li>
              <li><Link href="/expertise">Specialties & Procedures</Link></li>
              <li><Link href="/journey">Academic Journey</Link></li>
              <li><Link href="/opd">OPD Schedule & Tariffs</Link></li>
              <li><Link href="/faqs">Patient FAQs</Link></li>
              <li><Link href="/patient-care">Pre & Post Care Guides</Link></li>
              <li>
                <a href={doctorData.bookingUrl} target="_blank" rel="noopener noreferrer">
                  SGRH Official Booking ↗
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.title}>Sir Ganga Ram Hospital</h4>
            <address className={styles.address}>
              <strong>Room No. 2325, Department of Plastic Surgery</strong><br />
              Sir Ganga Ram Hospital Marg,<br />
              Rajinder Nagar, New Delhi,<br />
              Delhi - 110060, India
            </address>
            <div className={styles.contact}>
              <p>
                <a href={`mailto:${doctorData.email}`}>{doctorData.email}</a>
              </p>
              <p className={styles.phoneDirect}>
                <a href="tel:+918950406670">📞 8950406670</a>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.disclaimerPanel}>
          <p>
            <strong>Medical Disclaimer:</strong> The clinical information on this portal is intended for informational and educational guidance only. It should not be used as a substitute for in-person consultation with a qualified hand, wrist and reconstructive plastic surgeon. Please visit the OPD at Sir Ganga Ram Hospital or call the casualty desk for medical emergencies.
          </p>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {doctorData.name}. All rights reserved.
          </p>
          <span className={styles.hospitalDisclaimer}>Sir Ganga Ram Hospital, New Delhi</span>
        </div>
      </div>
    </footer>
  );
}
