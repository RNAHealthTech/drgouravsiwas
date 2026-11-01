'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../shared-page.module.css';
import faqStyles from './faq.module.css';
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
        <div className={`container ${faqStyles.faqContainer}`}>
          
          {/* Category Tabs */}
          <div className={faqStyles.tabsRow}>
            <button
              onClick={() => { setActiveTab('ac-joint'); setOpenFaq(1); }}
              className={`${faqStyles.tabBtn} ${activeTab === 'ac-joint' ? faqStyles.tabBtnActive : ''}`}
            >
              Acromioclavicular (AC) Arthritis (50 FAQs)
            </button>
            <button
              onClick={() => { setActiveTab('general'); setOpenFaq(101); }}
              className={`${faqStyles.tabBtn} ${activeTab === 'general' ? faqStyles.tabBtnActive : ''}`}
            >
              General Clinic &amp; OPD FAQs
            </button>
            <button
              onClick={() => { setActiveTab('all'); setOpenFaq(null); }}
              className={`${faqStyles.tabBtn} ${activeTab === 'all' ? faqStyles.tabBtnActive : ''}`}
            >
              All FAQs ({allFaqs.length})
            </button>
          </div>

          {/* AC Arthritis Intro Banner */}
          {activeTab === 'ac-joint' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className={faqStyles.overviewBanner}
            >
              <div className={faqStyles.overviewBadge}>
                <HelpCircle size={15} /> 50 Common Questions with Clinical Answers
              </div>
              <h2 className={faqStyles.overviewTitle}>
                Acromioclavicular (AC) Joint Arthritis
              </h2>
              <p className={faqStyles.overviewText}>
                {acJointArthritisOverview.intro}
              </p>
            </motion.div>
          )}

          {/* Search Box */}
          <div className={faqStyles.searchWrapper}>
            <Search 
              size={18} 
              className={faqStyles.searchIcon}
            />
            <input 
              type="text"
              placeholder="Search across questions (e.g. causes, surgery, injections, exercises, pain...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={faqStyles.searchInput}
            />
          </div>

          <div className={faqStyles.metaRow}>
            <span>Showing {filteredFaqs.length} questions</span>
            <button
              onClick={() => setOpenFaq(openFaq ? null : filteredFaqs[0]?.id)}
              className={faqStyles.collapseBtn}
            >
              {openFaq ? 'Collapse Active' : 'Expand Top Question'}
            </button>
          </div>

          {/* FAQ Accordion List */}
          <div className={faqStyles.faqList}>
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`${faqStyles.faqCard} ${isOpen ? faqStyles.faqCardOpen : ''}`}
                >
                  <button 
                    onClick={() => toggleFaq(faq.id)}
                    className={faqStyles.faqHeaderBtn}
                  >
                    <span 
                      className={`${faqStyles.faqBadge} ${isOpen ? faqStyles.faqBadgeActive : ''}`}
                    >
                      {faq.id > 100 ? faq.id - 100 : faq.id}
                    </span>

                    <span 
                      className={`${faqStyles.faqQuestion} ${isOpen ? faqStyles.faqQuestionActive : ''}`}
                    >
                      {faq.question}
                    </span>

                    <span className={`${faqStyles.faqIcon} ${isOpen ? faqStyles.faqIconActive : ''}`}>
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
                        className={faqStyles.faqAnswerWrapper}
                      >
                        <div className={faqStyles.faqAnswer}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className={faqStyles.noResults}>
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
          <div className={faqStyles.ctaCard}>
            <h3 className={faqStyles.ctaTitle}>
              Have Questions About Your Symptoms or Treatment?
            </h3>
            <p className={faqStyles.ctaText}>
              Get personal clinical guidance directly from {doctorData.name} at Sir Ganga Ram Hospital, New Delhi.
            </p>
            <div className={faqStyles.ctaActions}>
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
                className={faqStyles.whatsappActionBtn}
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
