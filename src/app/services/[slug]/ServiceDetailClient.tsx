'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  AlertCircle,
  Award,
  Star
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
            <div className={styles.serviceBanner}>
              <div className={styles.serviceBannerBg} />
              <div className={styles.serviceBannerContent}>
                <div className={styles.serviceBannerIcon}>
                  <Stethoscope size={38} color="var(--secondary)" />
                </div>
                <div className={styles.serviceBannerText}>
                  <div className={styles.serviceBannerCategory}>
                    <Sparkles size={12} />
                    <span>{service.categoryLabel}</span>
                  </div>
                  <h2 className={styles.serviceBannerTitle}>{service.title}</h2>
                  <div className={styles.serviceBannerTagline}>{service.tagline}</div>
                </div>
              </div>
              <div className={styles.serviceBannerFooter}>
                <div className={styles.serviceBannerBadge}>
                  <Award size={14} color="var(--secondary)" />
                  <span>Sir Ganga Ram Hospital</span>
                </div>
                <div className={styles.serviceBannerBadge}>
                  <Star size={14} color="var(--secondary)" />
                  <span>European Board Certified Hand Surgeon</span>
                </div>
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
            <div className={styles.consultCard}>
              <div className={styles.consultHeader}>
                <div className={styles.consultCardBadge}>
                  <Sparkles size={13} />
                  <span>Specialist Consultation</span>
                </div>
                <h3 className={styles.consultCardTitle}>Consult Dr. Gourav Siwas</h3>
                <p className={styles.consultCardDoctorRole}>
                  European Board Certified Hand, Wrist &amp; Reconstructive Surgeon
                </p>
              </div>

              <div className={styles.consultLocationPill}>
                <Building size={16} className={styles.locationIcon} />
                <div>
                  <strong>Sir Ganga Ram Hospital</strong>
                  <span>Room No. 2325, OPD Block, New Delhi</span>
                </div>
              </div>

              <div className={styles.sidebarActionGroup}>
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className={styles.sidebarBtnPrimary}
                >
                  <Calendar size={18} />
                  <span>Book OPD Appointment</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sidebarBtnSecondary}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              <div className={styles.consultMetaHighlights}>
                <div className={styles.metaHighlightItem}>
                  <ShieldCheck size={16} className={styles.metaIcon} />
                  <span>EDHS Certified Expert</span>
                </div>
                <div className={styles.metaHighlightItem}>
                  <Clock size={16} className={styles.metaIcon} />
                  <span>OPD Mon &ndash; Sat</span>
                </div>
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
