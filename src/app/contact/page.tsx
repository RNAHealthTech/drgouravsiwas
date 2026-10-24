'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { doctorData } from '@/data/doctorData';
import styles from '../shared-page.module.css';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import LiveOpdStatus from '@/components/LiveOpdStatus';
import OpdSchedule from '@/components/OpdSchedule';
import FAQ from '@/components/FAQ';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/myeezzel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          formType: 'Website Contact Inquiry',
          name,
          email,
          phone,
          message,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        const data = await response.json().catch(() => ({}));
        const errText = 
          data?.errors?.map((err: { message: string }) => err.message).join(', ') ||
          data?.error ||
          'Failed to send message. Please try again.';
        setErrorMessage(errText);
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                      Department of Plastic Surgery, Sir Ganga Ram Hospital, Rajinder Nagar, New Delhi - 110060
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
                      OPD: 8:00 AM - 8:00 PM (Mon - Sat)<br />
                      Department of Plastic Surgery, Sir Ganga Ram Hospital<br />
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
              
              {isSuccess ? (
                <div style={{ padding: '32px 20px', textAlign: 'center' }}>
                  <CheckCircle2 size={48} color="var(--primary)" style={{ margin: '0 auto 16px' }} />
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--text-main)' }}>Message Sent Successfully!</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                    Thank you for reaching out. We have received your inquiry and our team will get back to you shortly.
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-outline" 
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/myeezzel"
                  method="POST"
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <input type="hidden" name="formType" value="Website Contact Inquiry" />
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--text-muted)' }}>Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      style={{ width: '100%', padding: '16px', border: '1px solid var(--border)', borderRadius: '4px', background: 'var(--bg-secondary)', color: 'var(--text-main)', fontFamily: 'inherit' }} 
                      placeholder="John Doe" 
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--text-muted)' }}>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      style={{ width: '100%', padding: '16px', border: '1px solid var(--border)', borderRadius: '4px', background: 'var(--bg-secondary)', color: 'var(--text-main)', fontFamily: 'inherit' }} 
                      placeholder="+91 98765 43210" 
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--text-muted)' }}>Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      style={{ width: '100%', padding: '16px', border: '1px solid var(--border)', borderRadius: '4px', background: 'var(--bg-secondary)', color: 'var(--text-main)', fontFamily: 'inherit' }} 
                      placeholder="john@example.com" 
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--text-muted)' }}>Message</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      required
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      style={{ width: '100%', padding: '16px', border: '1px solid var(--border)', borderRadius: '4px', background: 'var(--bg-secondary)', color: 'var(--text-main)', fontFamily: 'inherit', resize: 'vertical' }} 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <div style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      color: '#dc2626',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      fontSize: '0.85rem'
                    }}>
                      {errorMessage}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="btn btn-primary" 
                    style={{ width: '100%', marginTop: '8px' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
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
