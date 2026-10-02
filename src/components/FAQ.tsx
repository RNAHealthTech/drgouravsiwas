'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
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
      answer: "Dr. Siwas specializes in Plastic, Cosmetic, and Hand Microsurgery. This includes emergency hand replantation, rhinoplasty, facial aesthetics, scar revision, and microvascular reconstruction."
    },
    {
      question: "Are reconstructive surgeries covered by insurance?",
      answer: "Reconstructive procedures (such as emergency hand microsurgery, trauma, and burn reconstruction) are typically medically necessary and covered by most Health Insurance providers. Purely cosmetic surgeries are generally not covered."
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Please bring all previous medical reports, X-rays/CT scans, and a list of your current medications so Dr. Siwas can design an accurate and safe treatment plan for you."
    },
    {
      question: "What is the recovery time for cosmetic surgeries?",
      answer: "Recovery time varies by procedure. Non-invasive procedures may require no downtime, while surgical procedures can require anywhere from a few days to several weeks. A specific timeline will be discussed during your consultation."
    },
    {
      question: "Do you offer emergency trauma care?",
      answer: "Yes, being affiliated with Sir Ganga Ram Hospital, we provide 24/7 emergency trauma care, particularly for hand and extremity microsurgical emergencies."
    }
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--secondary)' }}>Got Questions?</span>
          <h2 className="serif" style={{ fontSize: '3rem', color: 'var(--primary)', marginTop: '8px' }}>Frequently Asked Questions</h2>
        </motion.div>
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border)' }}>
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <button 
                onClick={() => toggleFaq(idx)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)', fontWeight: 500, color: openFaq === idx ? 'var(--secondary)' : 'var(--text-main)', paddingRight: '24px', transition: 'color 0.3s' }}>
                  {faq.question}
                </span>
                <span style={{ color: openFaq === idx ? 'var(--secondary)' : 'var(--text-muted)', transition: 'color 0.3s' }}>
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
  );
}
