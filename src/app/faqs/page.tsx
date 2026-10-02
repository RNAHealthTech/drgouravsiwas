'use client';

import React, { useState } from 'react';
import styles from './faqs.module.css';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'cosmetic' | 'hand' | 'cleft';
}

export default function FaqsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      question: "What is the difference between Plastic Surgery and Cosmetic Surgery?",
      answer: "Plastic Surgery is a broad medical field focused on reconstructing facial and body defects due to birth disorders, trauma, burns, and disease. Cosmetic Surgery is a subspecialty of plastic surgery focused specifically on enhancing the aesthetic appearance, symmetry, and proportions of facial and body features.",
      category: "general"
    },
    {
      question: "Are reconstructive surgeries performed at Sir Ganga Ram Hospital covered by insurance?",
      answer: "Yes, most reconstructive procedures—such as cleft lip/palate repairs, hand trauma repairs, burn contracture release, and free tissue transfer reconstructions—are medically necessary and generally covered by corporate health insurance and TPAs. Purely cosmetic/aesthetic procedures (like rhinoplasty for cosmetic reasons or liposuction) are typically not covered by insurance. SGRH insurance helpdesk can verify specific plans.",
      category: "general"
    },
    {
      question: "What is the typical recovery time after a Rhinoplasty (Nose Job) or Liposuction?",
      answer: "For Rhinoplasty, initial swelling and bruising resolve within 10 to 14 days, though the final nose shape refines over 6 to 12 months. For Liposuction, patients can usually return to light office activities within 3 to 5 days, while heavy physical exercise should be avoided for 3 to 4 weeks. A compression garment is worn for 4 to 6 weeks to support contouring.",
      category: "cosmetic"
    },
    {
      question: "Will I have visible scars after a cosmetic surgery procedure?",
      answer: "As a specialist plastic surgeon, Dr. Gourav Siwas uses refined techniques to place incisions along natural skin folds, hair lines, or inconspicuous aesthetic units. Once fully healed, these incisions fade and blend seamlessly. Detailed pre- and post-operative scar management protocols (including silicone gel/sheets and sun protection) are provided for optimal aesthetic healing.",
      category: "cosmetic"
    },
    {
      question: "What is Hand Microsurgery and when is it required?",
      answer: "Hand Microsurgery uses specialized operating microscopes and precision instruments to repair tiny blood vessels and nerves (often less than 1mm in diameter) in the hand and wrist. It is critical for reattaching severed fingers (replantation), restoring sensation after nerve injuries, repairing cut tendons, and restoring hand function after severe trauma.",
      category: "hand"
    },
    {
      question: "What is the window of time for emergency hand re-attachment (replantation)?",
      answer: "Replantation is time-sensitive. Severed digits/limbs must be cooled (wrapped in sterile saline-damp gauze, placed in a sealed bag, and that bag placed in ice water—NEVER directly on ice). The warm ischemia time window is generally under 6 hours for muscle-heavy limbs and up to 12-24 hours for fingers. Emergency contact through SGRH Casualty should be made immediately.",
      category: "hand"
    },
    {
      question: "At what age should a child undergo Cleft Lip and Cleft Palate surgeries?",
      answer: "According to standard pediatric protocols: Cleft Lip repair is usually performed at around 3 to 6 months of age (rule of 10s: 10 weeks old, 10 pounds weight, 10g hemoglobin). Cleft Palate repair is typically performed between 9 and 18 months of age, before the child begins speaking, to ensure optimal speech and palate development.",
      category: "cleft"
    },
    {
      question: "How do I prepare for my first consultation with Dr. Gourav Siwas?",
      answer: "Please bring all prior medical reports, current prescription list, and details of any allergies. If seeking reconstructive options, any surgical histories or imaging reports (CT scans, X-rays) are helpful. If seeking cosmetic procedures, prepare a clear list of your goals and questions so Dr. Gourav Siwas can design a personalized surgical plan.",
      category: "general"
    }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const categories = [
    { id: 'all', name: 'All FAQs' },
    { id: 'general', name: 'General Questions' },
    { id: 'cosmetic', name: 'Aesthetic & Cosmetic' },
    { id: 'hand', name: 'Hand & Microsurgery' },
    { id: 'cleft', name: 'Cleft & Craniofacial' }
  ];

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className="section-title">
          <h2>Patient FAQs</h2>
          <p>Common questions regarding plastic, cosmetic, and hand reconstructive surgeries</p>
        </div>

        <div className={styles.tabsWrapper}>
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`${styles.tabBtn} ${activeCategory === cat.id ? styles.tabBtnActive : ''}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveIndex(null);
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className={styles.accordion}>
          {filteredFaqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div key={idx} className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''} glass-card`}>
                <button 
                  className={styles.accordionHeader} 
                  onClick={() => toggleAccordion(idx)}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                </button>
                
                <div className={`${styles.accordionContent} ${isOpen ? styles.accordionContentOpen : ''}`}>
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
