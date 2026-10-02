'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { doctorData } from '@/data/doctorData';
import { useBooking } from '@/context/BookingContext';
import styles from './home.module.css';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowRight, Star, ChevronDown } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import EuropeanBoardShowcase from '@/components/EuropeanBoardShowcase';
import OpdSchedule from '@/components/OpdSchedule';
import EmergencyTraumaGuide from '@/components/EmergencyTraumaGuide';
import HeroCanvasAnimation from '@/components/HeroCanvasAnimation';
export default function Home() {
  const { openBooking } = useBooking();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const procedures = [
    { title: 'Rhinoplasty', desc: 'Sculpting natural nasal harmony with microsurgical precision.', img: '/images/procedure-1.jpg' },
    { title: 'Facelift & Necklift', desc: 'Rejuvenating facial contours for timeless, natural results.', img: '/images/procedure-2.jpg' },
    { title: 'Hand Microsurgery', desc: 'Emergency replantation and intricate nerve & vessel repair.', img: '/images/procedure-3.jpg' },
    { title: 'Reconstructive Surgery', desc: 'Restoring form and function after trauma, burns, or cancer.', img: '/images/clinic-hero.jpg' },
  ];

  const stats = [
    { num: '5000+', label: 'Surgeries Performed' },
    { num: '10+', label: 'Years Experience' },
    { num: '98%', label: 'Patient Satisfaction' },
    { num: '24/7', label: 'Emergency Trauma' },
  ];

  const galleryImages = [
    { title: 'European Diploma in Hand Surgery (Basel, Switzerland)', src: '/images/dr_gourav_ebhs_award.jpg' },
    { title: 'Dr. Gourav Siwas — Plastic & Reconstructive Surgeon', src: '/images/dr_gourav_portrait.jpg' },
    { title: 'International Academic Exchange & Clinical Mentorship', src: '/images/dr_gourav_mentorship.jpg' },
    { title: 'Bilateral Hand Transplant Team — Sir Ganga Ram Hospital', src: '/images/gallery-4.jpeg' },
    { title: 'World Hand Surgery Congress & Advanced Workshops', src: '/images/gallery-3.jpeg' },
  ];

  return (
    <main className={styles.main}>

      {/* ═══════════════════════════════════════════════════════════════
          1. FULL-SCREEN VIDEO HERO — Garth Fisher style
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className={styles.hero}>
        <motion.div className={styles.heroBg} style={{ scale: heroScale }}>
          <HeroCanvasAnimation />
          {/* Animated CSS rings overlay */}
          <div className={styles.heroRings}>
            <div className={styles.ring1} />
            <div className={styles.ring2} />
            <div className={styles.ring3} />
          </div>
          <div className={styles.heroOverlay} />
        </motion.div>

        <motion.div className={styles.heroInner} style={{ opacity: heroOpacity }}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className={styles.heroBadge}>
              Sir Ganga Ram Hospital, New Delhi
            </motion.span>
            <motion.h1 variants={fadeUp} className={styles.heroHeading}>
              Dr. Gourav Siwas
            </motion.h1>
            <motion.div variants={fadeUp} className={styles.heroDivider} />
            <motion.p variants={fadeUp} className={styles.heroTagline}>
              Plastic · Cosmetic · Hand Microsurgery
            </motion.p>
            <motion.div variants={fadeUp} className={styles.heroCtas}>
              <button onClick={() => openBooking()} className={styles.btnPill}>
                Book Consultation <ArrowRight size={16} />
              </button>
              <Link href="/procedures" className={styles.btnPillOutline}>
                View Procedures
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.heroScroll}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2 }}
        >
          <span>Scroll</span>
          <ChevronDown size={16} className={styles.bounceIcon} />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. RUNNING MARQUEE
      ═══════════════════════════════════════════════════════════════ */}
      <div className={styles.marqueeBar}>
        <Marquee speed={60} gradient={false} pauseOnHover={true} autoFill>
          {['Plastic Surgery', 'Cosmetic Refinement', 'Hand Microsurgery', 'Reconstructive Surgery', 'Trauma & Burns', 'Scar Revision'].map((t, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeDot}>✦</span> {t}
            </span>
          ))}
        </Marquee>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          3. ABOUT — Split layout with floating accent card
      ═══════════════════════════════════════════════════════════════ */}
      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <motion.div 
              className={styles.aboutImgCol}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.aboutImgWrap}>
                <Image src={doctorData.imageUrl} alt={doctorData.name} width={560} height={700} className={styles.aboutImg} />
              </div>
              <motion.div 
                className={styles.aboutFloat}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <span className={styles.aboutFloatNum}>10+</span>
                <span className={styles.aboutFloatLabel}>Years of<br/>Excellence</span>
              </motion.div>
            </motion.div>

            <motion.div 
              className={styles.aboutTextCol}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <span className={styles.sectionLabel}>About the Surgeon</span>
              <h2 className={styles.sectionHeading}>Where Artistry<br/>Meets Precision</h2>
              <p className={styles.aboutBio}>{doctorData.bio}</p>
              <div className={styles.aboutCreds}>
                {doctorData.education.slice(0, 4).map((edu, i) => (
                  <div key={i} className={styles.aboutCredItem}>
                    <strong>{edu.degree}</strong>
                    <span>{edu.institution}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className={styles.btnText}>
                Read Full Bio <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3.5. EUROPEAN BOARD SHOWCASE
      ═══════════════════════════════════════════════════════════════ */}
      <EuropeanBoardShowcase />

      {/* ═══════════════════════════════════════════════════════════════
          4. STATS COUNTER BAR
      ═══════════════════════════════════════════════════════════════ */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <motion.div 
                key={i} 
                className={styles.statItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. PROCEDURES — Garth Fisher editorial image grid
      ═══════════════════════════════════════════════════════════════ */}
      <section id="procedures" className={styles.procedures}>
        <div className="container">
          <motion.div 
            className={styles.sectionCenter}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <span className={styles.sectionLabel}>Areas of Expertise</span>
            <h2 className={styles.sectionHeading}>Signature Procedures</h2>
          </motion.div>

          <div className={styles.procGrid}>
            {procedures.map((p, i) => (
              <motion.div 
                key={i} 
                className={styles.procCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <div className={styles.procImgWrap}>
                  <Image src={p.img} alt={p.title} fill className={styles.procImg} />
                  <div className={styles.procImgOverlay} />
                </div>
                <div className={styles.procInfo}>
                  <h3>{p.title}</h3>
                  <div className={styles.procInfoHidden}>
                    <p>{p.desc}</p>
                    <button onClick={() => openBooking()} className={styles.procBtnText}>
                      Learn More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5.5. EMERGENCY TRAUMA GUIDE
      ═══════════════════════════════════════════════════════════════ */}
      <EmergencyTraumaGuide />

      {/* ═══════════════════════════════════════════════════════════════
          6. CINEMATIC PARALLAX QUOTE
      ═══════════════════════════════════════════════════════════════ */}
      <section className={styles.parallax}>
        <div className={styles.parallaxBg} />
        <div className={styles.parallaxInner}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className={styles.parallaxContent}
          >
            <span className={styles.sectionLabelLight}>Philosophy</span>
            <h2 className={styles.parallaxHeading}>
              &ldquo;Adding life to years,<br/>not just years to life.&rdquo;
            </h2>
            <p className={styles.parallaxSub}>
              Following international ATLS safety protocols with a compassionate,
              patient-centered focus for unparalleled surgical outcomes.
            </p>
            <button onClick={() => openBooking()} className={styles.btnPill} style={{ marginTop: '24px' }}>
              Schedule a Consultation <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. TESTIMONIALS SLIDER
      ═══════════════════════════════════════════════════════════════ */}
      <section className={styles.testimonials}>
        <div className="container">
          <motion.div 
            className={styles.sectionCenter}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <span className={styles.sectionLabel}>Patient Stories</span>
            <h2 className={styles.sectionHeading}>Words of Trust</h2>
          </motion.div>

          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            className={styles.testimonialSwiper}
          >
            {doctorData.testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className={styles.testCard}>
                  <div className={styles.testStars}>
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                  </div>
                  <p className={styles.testQuote}>&ldquo;{t.feedback}&rdquo;</p>
                  <div className={styles.testAuthor}>
                    <strong>{t.patientName}</strong>
                    <span>{t.condition}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. GALLERY SLIDER
      ═══════════════════════════════════════════════════════════════ */}
      <section className={styles.gallery}>
        <div className="container">
          <motion.div 
            className={styles.sectionCenter}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <span className={styles.sectionLabelLight}>Moments & Milestones</span>
            <h2 className={styles.sectionHeading} style={{ color: '#fff' }}>Updates & Events</h2>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className={styles.gallerySwiper}
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div className={styles.gallerySlide}>
                  <Image src={img.src} alt={img.title} fill className={styles.galleryImg} />
                  <div className={styles.galleryCaption}>{img.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8.5. OPD SCHEDULE
      ═══════════════════════════════════════════════════════════════ */}
      <OpdSchedule />

      {/* ═══════════════════════════════════════════════════════════════
          9. FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div 
            className={styles.ctaInner}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Begin Your Transformation</h2>
            <p>Schedule a private consultation to discuss your goals with Dr. Gourav Siwas.</p>
            <button onClick={() => openBooking()} className={styles.btnPill} style={{ background: 'var(--secondary)', color: 'var(--primary)' }}>
              Book Appointment <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
