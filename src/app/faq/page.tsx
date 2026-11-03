'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../shared-page.module.css';
import faqStyles from './faq.module.css';
import { Plus, Minus, Search, Calendar, MessageSquare, HelpCircle, Activity } from 'lucide-react';
import { acJointArthritisFaqs, acJointArthritisOverview } from '@/data/acJointFaqsData';
import { doctorData } from '@/data/doctorData';
import { useBooking } from '@/context/BookingContext';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'procedures' | 'ac-joint' | 'general';
}

export default function FAQPage() {
  const { openBooking } = useBooking();
  const [activeTab, setActiveTab] = useState<'procedures' | 'ac-joint' | 'general' | 'all'>('procedures');
  const [openFaq, setOpenFaq] = useState<number | null>(201);
  const [searchQuery, setSearchQuery] = useState('');

  const procedureFaqs: FAQItem[] = [
    {
      id: 201,
      question: "How quickly does the tingling disappear after carpal tunnel surgery?",
      answer: "Most patients experience immediate relief from the deep aching and nighttime tingling within 24–48 hours. Sensation in the fingertips gradually normalizes over several weeks to months as the decompressed median nerve regenerates.",
      category: 'procedures'
    },
    {
      id: 202,
      question: "Can both hands be operated on at the same time for carpal tunnel?",
      answer: "While bilateral simultaneous release is possible, staged surgery (2–4 weeks apart) is typically recommended so you retain one fully functional hand for personal hygiene and daily tasks during early wound healing.",
      category: 'procedures'
    },
    {
      id: 203,
      question: "Is general anesthesia required for carpal tunnel release?",
      answer: "No. The procedure is routinely performed under WALANT (Wide Awake Local Anesthesia No Tourniquet) or local block with light sedation. You remain comfortable throughout, avoid general anesthesia side effects, and can go home the same day.",
      category: 'procedures'
    },
    {
      id: 204,
      question: "Why do scaphoid fractures take so long to heal?",
      answer: "The scaphoid bone has a retrograde, vulnerable blood supply that enters from its distal pole. Fractures across the waist or proximal pole disrupt this blood flow, creating high risk for delayed union, avascular necrosis, and nonunion if not stabilized rigidly.",
      category: 'procedures'
    },
    {
      id: 205,
      question: "Can I avoid surgery and just stay in a plaster cast for a scaphoid fracture?",
      answer: "Undisplaced acute fractures can be managed with 6–10 weeks of cast immobilization. However, minimally invasive percutaneous headless screw fixation allows rigid internal compression, eliminates prolonged casting, and permits earlier return to work.",
      category: 'procedures'
    },
    {
      id: 206,
      question: "When should a cut tendon in the hand be operated on?",
      answer: "Flexor and extensor tendon lacerations require urgent surgical repair ideally within 24 to 72 hours. Delayed repairs lead to retracted tendon ends, scarring within the sheath, and permanent loss of finger flexion or extension.",
      category: 'procedures'
    },
    {
      id: 207,
      question: "Why is specialized hand therapy so crucial after tendon repair?",
      answer: "A repaired tendon must glide to prevent adhesions, yet premature force can rupture the suture line. Controlled early active motion protocols guided by certified hand therapists ensure optimal tendon excursion while protecting repair strength.",
      category: 'procedures'
    },
    {
      id: 208,
      question: "Will trigger finger return after surgical release?",
      answer: "Complete surgical release of the A1 pulley provides definitive cure with near-zero recurrence rate. The tendon glides freely without clicking, snapping, or locking.",
      category: 'procedures'
    },
    {
      id: 209,
      question: "How fast do nerves grow back after repair or micro-grafting?",
      answer: "Peripheral nerves regenerate at approximately 1 mm per day (about 1 inch per month) after precise microsurgical epineurial repair. Reinnervation time depends on the distance between the injury site and the target muscle or fingertip.",
      category: 'procedures'
    },
    {
      id: 210,
      question: "What is the optimal timing for brachial plexus reconstruction?",
      answer: "Microsurgical exploration and nerve transfers yield the best outcomes when performed between 3 to 6 months post-injury before irreversible motor endplate degeneration occurs in denervated muscles.",
      category: 'procedures'
    },
    {
      id: 211,
      question: "How is cubital tunnel syndrome different from carpal tunnel syndrome?",
      answer: "Carpal tunnel involves the median nerve at the wrist causing numbness in the thumb, index, and middle fingers. Cubital tunnel involves the ulnar nerve at the inner elbow, causing numbness in the ring and little fingers and hand muscle wasting.",
      category: 'procedures'
    },
    {
      id: 212,
      question: "How should an amputated finger or hand be preserved for replantation?",
      answer: "Wrap the severed part in sterile saline-dampened gauze, place it into a clean watertight sealed plastic bag, and place that bag ON TOP OF ice water (slurry). NEVER place tissue directly in water or directly on dry ice.",
      category: 'procedures'
    },
    {
      id: 213,
      question: "Can all amputated fingers be saved?",
      answer: "Replantation feasibility depends on the level and mechanism of injury (sharp cut vs severe crush/avulsion), warm ischemia time, and the patient's general vascular health. Sharp amputations have success rates exceeding 85–90%.",
      category: 'procedures'
    },
    {
      id: 214,
      question: "Will there be a large scar at the donor site after free tissue transfer?",
      answer: "Donor sites (such as the anterolateral thigh or lateral arm) are closed primarily or with split-thickness skin grafts in concealed areas, with meticulous plastic surgical techniques to minimize cosmetic footprint.",
      category: 'procedures'
    },
    {
      id: 215,
      question: "Can amputation truly be avoided in severe diabetic foot infections?",
      answer: "Yes. By combining aggressive wound debridement, revascularization, infection control, and microvascular free flap coverage, even extensive deep ulcers exposing bone and tendon can be reconstructed to preserve weight-bearing ambulation.",
      category: 'procedures'
    },
    {
      id: 216,
      question: "When is the best time to operate on a burn scar contracture?",
      answer: "Contractures causing severe joint deformity or functional impairment should be released promptly. Maturing hypertrophic scars are typically optimized with pressure therapy and silicone sheets before elective reconstruction at 6–12 months.",
      category: 'procedures'
    },
    {
      id: 217,
      question: "What is the best age to operate on webbed fingers (syndactyly) in children?",
      answer: "Congenital syndactyly release is typically performed between 12 and 18 months of age, prior to fine motor skill development. Border digits (thumb-index or ring-little) are often separated earlier (around 6–9 months) to prevent growth discrepancy.",
      category: 'procedures'
    }
  ];

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
    return [...procedureFaqs, ...generalFaqs, ...acFaqItems];
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
            Comprehensive clinical answers regarding hand, wrist, peripheral nerve, reconstructive surgeries, and patient care.
          </motion.p>
        </div>
      </header>

      <section className={styles.pageSection} style={{ padding: '60px 0 100px' }}>
        <div className={`container ${faqStyles.faqContainer}`}>
          
          {/* Category Tabs */}
          <div className={faqStyles.tabsRow}>
            <button
              onClick={() => { setActiveTab('procedures'); setOpenFaq(201); }}
              className={`${faqStyles.tabBtn} ${activeTab === 'procedures' ? faqStyles.tabBtnActive : ''}`}
            >
              Hand &amp; Reconstructive Surgeries ({procedureFaqs.length} FAQs)
            </button>
            <button
              onClick={() => { setActiveTab('general'); setOpenFaq(101); }}
              className={`${faqStyles.tabBtn} ${activeTab === 'general' ? faqStyles.tabBtnActive : ''}`}
            >
              General Clinic &amp; OPD ({generalFaqs.length} FAQs)
            </button>
            <button
              onClick={() => { setActiveTab('ac-joint'); setOpenFaq(1); }}
              className={`${faqStyles.tabBtn} ${activeTab === 'ac-joint' ? faqStyles.tabBtnActive : ''}`}
            >
              AC Joint Arthritis ({acFaqItems.length} FAQs)
            </button>
            <button
              onClick={() => { setActiveTab('all'); setOpenFaq(null); }}
              className={`${faqStyles.tabBtn} ${activeTab === 'all' ? faqStyles.tabBtnActive : ''}`}
            >
              All FAQs ({allFaqs.length})
            </button>
          </div>

          {/* Procedure Intro Banner */}
          {activeTab === 'procedures' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className={faqStyles.overviewBanner}
            >
              <div className={faqStyles.overviewBadge}>
                <Activity size={15} /> Clinical Surgical Services &amp; Recovery
              </div>
              <h2 className={faqStyles.overviewTitle}>
                Hand, Wrist, Microsurgery &amp; Reconstructive Care
              </h2>
              <p className={faqStyles.overviewText}>
                Authoritative clinical guidance from Dr. Gourav Siwas on recovery timelines, anesthesia options, surgical techniques, and postoperative care for procedures performed at Sir Ganga Ram Hospital.
              </p>
            </motion.div>
          )}

          {/* AC Arthritis Intro Banner */}
          {activeTab === 'ac-joint' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className={faqStyles.overviewBanner}
            >
              <div className={faqStyles.overviewBadge}>
                <HelpCircle size={15} /> Clinical Questions &amp; Distal Clavicle Surgery
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
              placeholder="Search across questions (e.g. carpal tunnel, tendon, replantation, recovery, surgery, pain...)"
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
                      {faq.id > 200 ? faq.id - 200 : (faq.id > 100 ? faq.id - 100 : faq.id)}
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
