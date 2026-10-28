'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../shared-page.module.css';
import { Plus, Minus, Search, Calendar, MessageSquare, HelpCircle } from 'lucide-react';
import { acJointArthritisFaqs, acJointArthritisOverview } from '@/data/acJointFaqsData';
import { doctorData } from '@/data/doctorData';
import { useBooking } from '@/context/BookingContext';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'ac-joint' | 'general';
}

export default function FAQPage() {
  const { openBooking } = useBooking();
  const [activeTab, setActiveTab] = useState<'ac-joint' | 'general' | 'all'>('ac-joint');
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState('');

  const generalFaqs: FAQItem[] = [
    {
      id: 101,
      question: "How do I book an appointment with Dr. Gourav Siwas?",
      answer: "You can schedule a consultation directly through our website by clicking the 'Book Appointment' button, or by calling the Sir Ganga Ram Hospital helpline at +91 8950406670.",
      category: 'general'
    },
    {
      id: 102,
      question: "What types of surgeries does Dr. Gourav specialize in?",
      answer: "Dr. Siwas specializes in Hand, Wrist, and Reconstructive Plastic Surgery. This includes emergency hand replantation, peripheral nerve repair, brachial plexus reconstruction, and microvascular reconstruction.",
      category: 'general'
    },
    {
      id: 103,
      question: "Are reconstructive surgeries covered by insurance?",
      answer: "Reconstructive procedures (such as emergency hand microsurgery, trauma, and burn reconstruction) are typically medically necessary and covered by most Health Insurance providers. Please check with your TPA for specific coverage details.",
      category: 'general'
    },
    {
      id: 104,
      question: "What should I bring to my first consultation?",
      answer: "Please bring all previous medical reports, X-rays/CT scans, and a list of your current medications so Dr. Siwas can design an accurate and safe treatment plan for you.",
      category: 'general'
    },
    {
      id: 105,
      question: "Do you offer emergency trauma care?",
      answer: "Yes, being affiliated with Sir Ganga Ram Hospital, we provide 24/7 emergency trauma care, particularly for hand and extremity microsurgical emergencies.",
      category: 'general'
    }
  ];

  const acFaqItems: FAQItem[] = useMemo(() => {
    return acJointArthritisFaqs.map(f => ({
      id: f.id,
      question: f.question,
      answer: f.answer,
      category: 'ac-joint' as const
    }));
  }, []);

  const allFaqs = useMemo(() => {
    return [...acFaqItems, ...generalFaqs];
  }, [acFaqItems]);

  const filteredFaqs = useMemo(() => {
    let list = activeTab === 'all' 
      ? allFaqs 
      : allFaqs.filter(f => f.category === activeTab);

    const q = searchQuery.toLowerCase().trim();
    if (q) {
      list = list.filter(f => 
        f.question.toLowerCase().includes(q) || 
        f.answer.toLowerCase().includes(q) ||
        String(f.id) === q
      );
    }
    return list;
  }, [activeTab, allFaqs, searchQuery]);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const cleanPhone = doctorData.whatsapp.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=Hello%20Dr.%20Gourav%20Siwas,%20I%20have%20an%20inquiry%20regarding%20consultation.`;

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.pageSubtitle}
          >
            Comprehensive clinical answers regarding Acromioclavicular (AC) Joint Arthritis, hand surgery, and patient care.
          </motion.p>
        </div>
      </header>

      <section className={styles.pageSection} style={{ padding: '60px 0 100px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Category Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
            <button
              onClick={() => { setActiveTab('ac-joint'); setOpenFaq(1); }}
              style={{
                padding: '12px 22px',
                borderRadius: '50px',
                border: activeTab === 'ac-joint' ? '1px solid var(--primary)' : '1px solid var(--border)',
                background: activeTab === 'ac-joint' ? 'var(--primary)' : 'var(--bg-secondary)',
                color: activeTab === 'ac-joint' ? '#ffffff' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === 'ac-joint' ? '0 4px 12px rgba(13, 148, 136, 0.25)' : 'none'
              }}
            >
              Acromioclavicular (AC) Arthritis (50 FAQs)
            </button>
            <button
              onClick={() => { setActiveTab('general'); setOpenFaq(101); }}
              style={{
                padding: '12px 22px',
                borderRadius: '50px',
                border: activeTab === 'general' ? '1px solid var(--primary)' : '1px solid var(--border)',
                background: activeTab === 'general' ? 'var(--primary)' : 'var(--bg-secondary)',
                color: activeTab === 'general' ? '#ffffff' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === 'general' ? '0 4px 12px rgba(13, 148, 136, 0.25)' : 'none'
              }}
            >
              General Clinic &amp; OPD FAQs
            </button>
            <button
              onClick={() => { setActiveTab('all'); setOpenFaq(null); }}
              style={{
                padding: '12px 22px',
                borderRadius: '50px',
                border: activeTab === 'all' ? '1px solid var(--primary)' : '1px solid var(--border)',
                background: activeTab === 'all' ? 'var(--primary)' : 'var(--bg-secondary)',
                color: activeTab === 'all' ? '#ffffff' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === 'all' ? '0 4px 12px rgba(13, 148, 136, 0.25)' : 'none'
              }}
            >
              All FAQs ({allFaqs.length})
            </button>
          </div>

          {/* AC Arthritis Intro Banner */}
          {activeTab === 'ac-joint' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(13, 148, 136, 0.02) 100%)',
                border: '1px solid rgba(13, 148, 136, 0.25)',
                borderRadius: 'var(--radius-md)',
                padding: '24px 28px',
                marginBottom: '30px'
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                <HelpCircle size={15} /> 50 Common Questions with Clinical Answers
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-main)', margin: '4px 0 10px' }}>
                Acromioclavicular (AC) Joint Arthritis
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                {acJointArthritisOverview.intro}
              </p>
            </motion.div>
          )}

          {/* Search Box */}
          <div style={{ position: 'relative', marginBottom: '30px' }}>
            <Search 
              size={18} 
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
            />
            <input 
              type="text"
              placeholder="Search across questions (e.g. causes, surgery, injections, exercises, pain...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 18px 14px 46px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.95rem',
                color: 'var(--text-main)',
                outline: 'none',
                fontFamily: 'var(--font-sans)'
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span>Showing {filteredFaqs.length} questions</span>
            <button
              onClick={() => setOpenFaq(openFaq ? null : filteredFaqs[0]?.id)}
              style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}
            >
              {openFaq ? 'Collapse Active' : 'Expand Top Question'}
            </button>
          </div>

          {/* FAQ Accordion List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  style={{
                    background: 'var(--bg-secondary)',
                    border: isOpen ? '1px solid rgba(13, 148, 136, 0.4)' : '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button 
                    onClick={() => toggleFaq(faq.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      padding: '18px 22px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: '28px',
                        height: '28px',
                        borderRadius: '4px',
                        background: isOpen ? 'var(--primary)' : 'rgba(13, 148, 136, 0.1)',
                        color: isOpen ? '#ffffff' : 'var(--primary)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        marginTop: '2px',
                        flexShrink: 0
                      }}
                    >
                      {faq.id > 100 ? faq.id - 100 : faq.id}
                    </span>

                    <span 
                      style={{
                        flex: 1,
                        fontSize: '1.02rem',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 600,
                        color: isOpen ? 'var(--primary)' : 'var(--text-main)',
                        lineHeight: 1.45,
                        transition: 'color 0.2s'
                      }}
                    >
                      {faq.question}
                    </span>

                    <span style={{ color: isOpen ? 'var(--primary)' : 'var(--text-muted)', flexShrink: 0, marginTop: '4px' }}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 22px 20px 64px', fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div style={{ textAlign: 'center', padding: '50px 20px', color: 'var(--text-muted)' }}>
                <p>No questions found matching &ldquo;{searchQuery}&rdquo;</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="btn btn-secondary"
                  style={{ marginTop: '10px' }}
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>

          {/* Consultation CTA Banner */}
          <div 
            style={{
              marginTop: '60px',
              padding: '36px',
              background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(13, 148, 136, 0.02) 100%), var(--bg-secondary)',
              border: '1px solid rgba(13, 148, 136, 0.25)',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '12px' }}>
              Have Questions About Your Symptoms or Treatment?
            </h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 24px', fontSize: '0.98rem', lineHeight: 1.6 }}>
              Get personal clinical guidance directly from {doctorData.name} at Sir Ganga Ram Hospital, New Delhi.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
              <button
                className="btn btn-primary"
                onClick={() => openBooking('OPD Consultation')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Calendar size={18} /> Book Appointment
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  fontWeight: 500,
                  padding: '12px 22px',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none'
                }}
              >
                <MessageSquare size={18} /> WhatsApp Consultation
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
