'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { doctorData } from '@/data/doctorData';
import styles from '../shared-page.module.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import LiveOpdStatus from '@/components/LiveOpdStatus';
import OpdSchedule from '@/components/OpdSchedule';
import FAQ from '@/components/FAQ';

export default function ContactPage() {
  return (
    <main>
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderBg}></div>
        <div className={`container ${styles.pageHeaderContent}`}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.pageTitle}
          >
            Contact & Location
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.pageSubtitle}
          >
            Reach out to schedule a consultation or for emergency trauma care.
          </motion.p>
        </div>
      </header>

      <section className={styles.pageSection}>
        <div className="container">
          <div className={styles.grid2Col} style={{ alignItems: 'flex-start' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '40px' }}>Get in Touch</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ color: 'var(--secondary)' }}><MapPin size={28} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>LOCATION</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      Sir Ganga Ram Hospital (SGRH), Rajinder Nagar, New Delhi - 110060
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ color: 'var(--secondary)' }}><Phone size={28} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PHONE NUMBERS</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      Appointments: {doctorData.phone}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ color: 'var(--secondary)' }}><Mail size={28} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>EMAIL</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{doctorData.email}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ color: 'var(--secondary)' }}><Clock size={28} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>WORKING HOURS</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      OPD: 8:00 AM - 10:00 AM (Mon - Sat)<br />
                      F-52, SGRH<br />
                      Sunday: Emergencies Only
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.card}
            >
              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '24px' }}>Send a Message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--text-muted)' }}>Your Name</label>
                  <input type="text" style={{ width: '100%', padding: '16px', border: '1px solid var(--border)', borderRadius: '4px', background: 'var(--bg-secondary)', color: 'var(--text-main)', fontFamily: 'inherit' }} placeholder="John Doe" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--text-muted)' }}>Email Address</label>
                  <input type="email" style={{ width: '100%', padding: '16px', border: '1px solid var(--border)', borderRadius: '4px', background: 'var(--bg-secondary)', color: 'var(--text-main)', fontFamily: 'inherit' }} placeholder="john@example.com" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--text-muted)' }}>Message</label>
                  <textarea rows={4} style={{ width: '100%', padding: '16px', border: '1px solid var(--border)', borderRadius: '4px', background: 'var(--bg-secondary)', color: 'var(--text-main)', fontFamily: 'inherit', resize: 'vertical' }} placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>Send Message</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.pageSectionAlt} style={{ padding: '60px 0' }}>
        <LiveOpdStatus />
      </section>

      <FAQ />

      <section className={styles.pageSection}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '16px' }}>OPD Schedule</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Plan your visit according to Dr. Gourav&apos;s availability.</p>
          </motion.div>
          <OpdSchedule />
        </div>
      </section>
    </main>
  );
}
