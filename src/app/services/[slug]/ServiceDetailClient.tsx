'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  ShieldCheck,
  Building,
  Calendar,
  CheckCircle2,
  ChevronDown,
  PhoneCall,
  ArrowRight,
  MessageCircle,
  Stethoscope,
  Sparkles,
  HelpCircle,
  FileText,
  AlertCircle
} from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { ServiceItem, servicesData } from '@/data/servicesData';
import styles from './service-detail.module.css';

interface ServiceDetailClientProps {
  service: ServiceItem;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openBooking } = useBooking();

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Dr. Gourav Siwas, I would like to consult regarding ${service.title}.`
  );
  const whatsappUrl = `https://wa.me/918950406670?text=${whatsappMessage}`;

  const relatedServices = servicesData
    .filter((s) => s.id !== service.id && service.relatedSlugs?.includes(s.slug))
    .slice(0, 4);

  return (
    <div className={styles.detailPage}>
      <header className={styles.heroHeader}>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <Link href="/services">Services</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>{service.categoryLabel}</span>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>{service.shortTitle || service.title}</span>
          </nav>

          <div className={styles.categoryBadge}>
            <Sparkles size={14} />
            <span>{service.categoryLabel}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={styles.heroTitle}
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={styles.heroTagline}
          >
            &ldquo;{service.tagline}&rdquo;
          </motion.p>

          <div className={styles.heroAccentLine}></div>
        </div>
      </header>

      <section className={styles.layoutSection}>
        <div className={styles.layoutGrid}>
          <main className={styles.mainContent}>
            <div className={styles.featuredImageCard}>
              <Image
                src={service.image || '/images/procedure-1.jpg'}
                alt={service.title}
                fill
                priority
                className={styles.featuredImage}
              />
              <div className={styles.imageOverlayBadge}>
                <Stethoscope size={16} color="var(--secondary)" />
                <span>Sir Ganga Ram Hospital • Board Certified Hand & Plastic Surgery</span>
              </div>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>
                <FileText size={22} color="var(--secondary)" />
                <span>Procedural Overview & Clinical Rationale</span>
              </h2>
              <div className={styles.overviewText}>
                {service.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
              <div className={styles.highlightQuote}>
                {service.heroSubtitle}
              </div>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>
                <AlertCircle size={22} color="var(--secondary)" />
                <span>Conditions Treated & Key Indications</span>
              </h2>
              <p className={styles.blockSubtitle}>
                Common presentations and clinical criteria that indicate this procedure:
              </p>
              <div className={styles.conditionsList}>
                {service.conditionsTreated.map((cond, idx) => (
                  <div key={idx} className={styles.conditionItem}>
                    <CheckCircle2 size={18} className={styles.conditionIcon} />
                    <span>{cond}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>
                <Stethoscope size={22} color="var(--secondary)" />
                <span>The GS Surgical Approach & Protocol</span>
              </h2>
              <p className={styles.blockSubtitle}>
                Meticulous four-phase methodology ensuring safety, tissue preservation, and superior functional outcomes:
              </p>
              <div className={styles.stepsGrid}>
                {service.gsApproachSteps.map((step) => (
                  <div key={step.step} className={styles.stepCard}>
                    <span className={styles.stepNumber}>{step.step}</span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>
                <CheckCircle2 size={22} color="var(--secondary)" />
                <span>Who Is an Ideal Candidate?</span>
              </h2>
              <p className={styles.blockSubtitle}>
                During your personalized evaluation with Dr. Gourav Siwas, eligibility is assessed against:
              </p>
              <div className={styles.checklistGrid}>
                {service.candidateChecklist.map((item, idx) => (
                  <div key={idx} className={styles.checklistItem}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>
                <Calendar size={22} color="var(--secondary)" />
                <span>Recovery & Post-Operative Journey</span>
              </h2>
              <p className={styles.blockSubtitle}>
                What to expect during each stage of healing and rehabilitation:
              </p>
              <div className={styles.timelineContainer}>
                {service.recoveryPhases.map((phase, idx) => (
                  <div key={idx} className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelinePhase}>{phase.phase} ({phase.duration})</div>
                    <div className={styles.timelineHeading}>Clinical Progress</div>
                    <div className={styles.timelineDetails}>{phase.details}</div>
                  </div>
                ))}
              </div>
            </div>

            {service.faqs && service.faqs.length > 0 && (
              <div className={styles.contentBlock}>
                <h2 className={styles.blockTitle}>
                  <HelpCircle size={22} color="var(--secondary)" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className={styles.faqList}>
                  {service.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                      >
                        <button
                          type="button"
                          className={styles.faqQuestionBtn}
                          onClick={() => toggleFaq(idx)}
                          aria-expanded={isOpen}
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            size={18}
                            className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotated : ''}`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <div className={styles.faqAnswer}>{faq.answer}</div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </main>

          <aside className={styles.sidebar}>
            <div className={styles.factsCard}>
              <div className={styles.factsCardTitle}>
                <span>Quick Facts</span>
                <span className={styles.factsBadge}>Clinical Guide</span>
              </div>

              <div className={styles.factsList}>
                <div className={factRowStyle}>
                  <div className={styles.factLabelGroup}>
                    <Clock size={16} className={styles.factIcon} />
                    <span>Duration</span>
                  </div>
                  <span className={styles.factValue}>{service.quickFacts.procedureTime}</span>
                </div>

                <div className={styles.factRow}>
                  <div className={styles.factLabelGroup}>
                    <ShieldCheck size={16} className={styles.factIcon} />
                    <span>Anesthesia</span>
                  </div>
                  <span className={styles.factValue}>{service.quickFacts.anesthesia}</span>
                </div>

                <div className={styles.factRow}>
                  <div className={styles.factLabelGroup}>
                    <Building size={16} className={styles.factIcon} />
                    <span>Hospital Stay</span>
                  </div>
                  <span className={styles.factValue}>{service.quickFacts.hospitalStay}</span>
                </div>

                <div className={styles.factRow}>
                  <div className={styles.factLabelGroup}>
                    <Calendar size={16} className={styles.factIcon} />
                    <span>Downtime</span>
                  </div>
                  <span className={styles.factValue}>{service.quickFacts.downtime}</span>
                </div>

                <div className={styles.factRow}>
                  <div className={styles.factLabelGroup}>
                    <CheckCircle2 size={16} className={styles.factIcon} />
                    <span>Success Rate</span>
                  </div>
                  <span className={styles.factValue}>{service.quickFacts.successRate}</span>
                </div>

                <div className={styles.factRow} style={{ borderBottom: 'none' }}>
                  <div className={styles.factLabelGroup}>
                    <Building size={16} className={styles.factIcon} />
                    <span>Hospital</span>
                  </div>
                  <span className={styles.factValue} style={{ fontSize: '0.8rem' }}>
                    Sir Ganga Ram Hospital
                  </span>
                </div>
              </div>

              <div className={styles.sidebarActionGroup}>
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className={styles.sidebarBtnPrimary}
                >
                  <Calendar size={16} />
                  <span>Book Consultation</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sidebarBtnSecondary}
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {relatedServices.length > 0 && (
              <div className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>Related Procedures</h3>
                <div className={styles.relatedList}>
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/services/${rel.slug}`}
                      className={styles.relatedItem}
                    >
                      <span>{rel.shortTitle || rel.title}</span>
                      <ArrowRight size={14} className={styles.relatedArrow} />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.emergencyCard}>
              <div className={styles.emergencyCardHeader}>
                <PhoneCall size={14} />
                <span>24x7 Emergency Microsurgery</span>
              </div>
              <h4 className={styles.emergencyCardTitle}>
                Acute Hand Trauma, Cut Tendons or Amputations?
              </h4>
              <p className={styles.emergencyCardText}>
                Prompt microsurgical treatment within hours is critical for limb and digit viability. Contact Dr. Siwas directly for immediate emergency coordination.
              </p>
              <a href="tel:+918950406670" className={styles.emergencyPhoneBtn}>
                <PhoneCall size={16} />
                <span>Call +91-8950406670</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.bottomCtaSection}>
        <div className={styles.bottomCtaContainer}>
          <div className={styles.bottomCtaLeft}>
            <h2 className={styles.bottomCtaHeading}>
              Experience International Standard Hand & Aesthetic Care
            </h2>
            <p className={styles.bottomCtaSubtitle}>
              Consult India&apos;s youngest European Board Certified Hand Surgeon — Dr. Gourav Siwas — at Sir Ganga Ram Hospital, New Delhi.
            </p>
          </div>
          <div className={styles.bottomCtaRight}>
            <button
              onClick={() => openBooking()}
              className="btn btn-primary"
              style={{ padding: '16px 36px' }}
            >
              Book In-Clinic OPD
            </button>
            <a
              href="tel:+918950406670"
              className="btn"
              style={{
                border: '1px solid var(--primary)',
                color: 'var(--primary)',
                padding: '16px 28px'
              }}
            >
              Call Clinic
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const factRowStyle = styles.factRow;
