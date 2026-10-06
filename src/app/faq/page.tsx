'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../shared-page.module.css';
import { Plus, Minus } from 'lucide-react';

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      question: "How do I book an appointment with Dr. Gourav Siwas?",
      answer: "You can schedule a consultation directly through our website by clicking the 'Book Appointment' button, or by calling the Sir Ganga Ram Hospital helpline at +91 8950406670."
    },
    {
      question: "What types of surgeries does Dr. Gourav specialize in?",
      answer: "Dr. Siwas specializes in Hand, Wrist, and Reconstructive Plastic Surgery. This includes emergency hand replantation, peripheral nerve repair, brachial plexus reconstruction, and microvascular reconstruction."
    },
    {
      question: "Are reconstructive surgeries covered by insurance?",
      answer: "Reconstructive procedures (such as emergency hand microsurgery, trauma, and burn reconstruction) are typically medically necessary and covered by most Health Insurance providers. Please check with your TPA for specific coverage details."
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Please bring all previous medical reports, X-rays/CT scans, and a list of your current medications so Dr. Siwas can design an accurate and safe treatment plan for you."
    },

    {
      question: "Do you offer emergency trauma care?",
      answer: "Yes, being affiliated with Sir Ganga Ram Hospital, we provide 24/7 emergency trauma care, particularly for hand and extremity microsurgical emergencies."
    }
  ];

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
            Clear, honest answers about your consultation, procedures, and care.
          </motion.p>
        </div>
      </header>

      <section className={styles.pageSection}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border)' }}>
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)', fontWeight: 500, color: 'var(--text-main)', paddingRight: '24px' }}>
                    {faq.question}
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>
                    {openFaq === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ paddingBottom: '32px', paddingRight: '40px', fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
