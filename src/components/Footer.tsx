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
          {/* Column 1: Bio & Branding */}
          <div className={styles.column}>
            <div className={styles.brand}>
              <div className={styles.footerLogoContainer}>
                <Image 
                  src="/images/dr_gourav_logo.png" 
                  alt="Dr. Gourav Siwas — Hand, Wrist & Reconstructive Plastic Surgeon" 
                  width={260} 
                  height={130} 
                  className={styles.footerLogoImg}
                />
              </div>
            </div>
            <p className={styles.description}>
              {doctorData.department} at {doctorData.hospital}. Specialized in complex hand trauma & replantation, aesthetic facial surgery, microvascular reconstruction, and burns rehabilitation.
            </p>
            <div className={styles.accreditation}>
              <span className={styles.accBadge}>NABH Accredited Hospital</span>
              <span className={styles.accBadge}>ATLS Certified</span>
              <span className={styles.accBadge}>EBOPRAS Certified</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
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

          {/* Column 3: Hospital & Contact */}
          <div className={styles.column}>
            <h4 className={styles.title}>Sir Ganga Ram Hospital</h4>
            <address className={styles.address}>
              <strong>Department of Plastic Surgery (Room F-52)</strong><br />
              Sir Ganga Ram Hospital Marg,<br />
              Rajinder Nagar, New Delhi,<br />
              Delhi - 110060, India
            </address>
            <div className={styles.contact}>
              <p>
                <a href={`mailto:${doctorData.email}`}>{doctorData.email}</a>
              </p>
              <p>Hospital: {doctorData.phone}</p>
              <p>Casualty 24/7: {doctorData.casualtyPhone}</p>
              <p>Ambulance: {doctorData.ambulancePhone}</p>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className={styles.disclaimerPanel}>
          <p>
            <strong>Medical Disclaimer:</strong> The clinical information on this portal is intended for informational and educational guidance only. It should not be used as a substitute for in-person consultation with a qualified plastic, cosmetic, and reconstructive surgeon. Please visit the OPD at Sir Ganga Ram Hospital or call the casualty desk for medical emergencies.
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
