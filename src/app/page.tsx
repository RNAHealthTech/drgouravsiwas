'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { doctorData } from '@/data/doctorData';
import { useBooking } from '@/context/BookingContext';
import styles from './home.module.css';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowRight, Star, ChevronDown, Users, Award } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Counter from '@/components/Counter';
import EuropeanBoardShowcase from '@/components/EuropeanBoardShowcase';
import OpdSchedule from '@/components/OpdSchedule';
import EmergencyTraumaGuide from '@/components/EmergencyTraumaGuide';
import HeroCanvasAnimation from '@/components/HeroCanvasAnimation';
import Expertise from '@/components/Expertise';
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
    { title: 'Finger Reconstruction', desc: 'Specialized management of fingertip & amputated-part injuries, tendon repair, flap reconstruction and toe-to-finger transfer.', img: '/images/finger-reconstruction-real.jpg' },
    { title: 'Replantation', desc: 'Emergency 24/7 microvascular replantation and revascularization of severed fingers, digits, hand, and amputated upper extremity parts.', img: '/images/replantation-real.jpg' },
    { title: 'Scaphoid Fracture', desc: 'Minimally invasive percutaneous screw fixation, vascularized bone grafting for complex non-unions, and wrist arthroscopy.', img: '/images/scaphoid-fracture-real.jpg' },
    { title: 'Nerve Injuries', desc: 'Adult & pediatric brachial plexus exploration, neurotization, microsurgical nerve transfers, and peripheral nerve decompression.', img: '/images/nerve-injuries-real.jpg' },
    { title: 'Reconstructive Surgeries', desc: 'Complex free tissue transfer, defect coverage following trauma, burns reconstruction, and limb function salvage.', img: '/images/reconstructive-surgeries-real.jpg' },
  ];

  const stats = [
    { value: 2000, suffix: '+', label: 'Happy Patients', icon: Users },
    { value: 10, suffix: '+', label: 'Years Experience', icon: Award },
    { value: 5, suffix: '★', label: 'Patient Satisfaction', icon: Star },
  ];

  const galleryImages = [
    { title: 'Member of National Academy of Medical Sciences (MNAMS) — Plastic & Reconstructive Surgery (2024)', src: '/images/cert-mnams.jpg' },
    { title: 'European Diploma in Hand Surgery (Basel, Switzerland)', src: '/images/dr_gourav_ebhs_award.jpg' },
    { title: 'International Academic Exchange & Clinical Mentorship', src: '/images/dr_gourav_mentorship.jpg' },
    { title: 'European Board of Hand Surgery Official Certification (EDHS)', src: '/images/cert-edhs.jpg' },
    { title: 'Advanced Microsurgery Fellowship — Ganga Hospital', src: '/images/cert-ganga-microsurgery.png' },
    { title: 'Dr. Gourav Siwas — Plastic, Reconstructive & Hand Surgeon', src: '/images/dr_gourav_portrait_hd.jpg' },
  ];

  return (
    <main className={styles.main}>

      <section ref={heroRef} className={styles.hero}>
        <motion.div className={styles.heroBg} style={{ scale: heroScale }}>
          <HeroCanvasAnimation />
          <div className={styles.heroRings}>
            <div className={styles.ring1} />
            <div className={styles.ring2} />
            <div className={styles.ring3} />
          </div>
          <div className={styles.heroOverlay} />
        </motion.div>

        <motion.div className={styles.heroInner} style={{ opacity: heroOpacity }}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className={styles.heroDoctorAvatar}>
              <Image
                src="/images/dr_gourav_portrait_hd.jpg"
                alt="Dr. Gourav Siwas"
                width={160}
                height={200}
                className={styles.heroAvatarImg}
                priority
              />
            </motion.div>
            <motion.span variants={fadeUp} className={styles.heroBadge}>
              Consultant Hand &amp; Microsurgery, Sir Ganga Ram Hospital, New Delhi
            </motion.span>
            <motion.h1 variants={fadeUp} className={styles.heroHeading}>
              Dr. Gourav Siwas
            </motion.h1>
            <motion.div variants={fadeUp} className={styles.heroDivider} />
            <motion.p variants={fadeUp} className={styles.heroTagline}>
              Hand · Wrist · Microsurgery · Brachial Plexus · Plastic &amp; Reconstructive Surgery
            </motion.p>
            <motion.div variants={fadeUp} className={styles.heroCtas}>
              <button onClick={() => openBooking()} className={styles.btnPill}>
                Book Consultation <ArrowRight size={16} />
              </button>
              <Link href="/services" className={styles.btnPillOutline}>
                View Services
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

      <div className={styles.marqueeBar}>
        <Marquee speed={60} gradient={false} pauseOnHover={true} autoFill>
          {['Hand Surgery', 'Wrist Arthroscopy', 'Microsurgery & Replantation', 'Brachial Plexus', 'Reconstructive Surgery', 'Plastic Surgery'].map((t, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeDot}>✦</span> {t}
            </span>
          ))}
        </Marquee>
      </div>

      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImgCol}>
              <motion.div 
                className={styles.aboutImgInner}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.aboutImgWrap}>
                  <Image src={doctorData.imageUrl} alt={doctorData.name} width={560} height={700} className={styles.aboutImg} />
                </div>
                <div className={styles.aboutFloat}>
                  <span className={styles.aboutFloatNum}>10+</span>
                  <span className={styles.aboutFloatLabel}>Years of<br/>Excellence</span>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className={styles.aboutTextCol}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <span className={styles.sectionLabel}>About the Surgeon</span>
              <h2 className={styles.sectionHeading}>Where Artistry<br/>Meets Precision</h2>
              <div className={styles.aboutBio}>
                <p>
                  Dr. Gourav Siwas is a board certified Plastic &amp; Reconstructive Surgeon &amp; India’s youngest European board certified Hand surgeon with fellowship in Hand &amp; Upper Extremity Surgery.
                </p>
                <p>
                  He is sincere and passionately dedicated towards ethical patient care, He is a team player with an eye for detail. He has strong creative and analytical skills which he incorporates in surgical decision making.
                </p>
                <p>
                  He is a firm believer of learning and sharing his knowledge and expertise with his juniors, colleagues and seniors. He believes in both ability and availability as a surgeon.
                </p>
              </div>

              <div className={styles.aboutPhilosophyBox}>
                <p className={styles.aboutPhilosophyQuote}>
                  His philosophy is &lsquo;Adding life to years!&rsquo;
                </p>
              </div>

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

      <EuropeanBoardShowcase />

      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s, i) => {
              const IconComp = s.icon;
              return (
                <motion.div 
                  key={i} 
                  className={styles.statCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                >
                  <div className={styles.statIconWrap}>
                    <IconComp size={22} className={styles.statIcon} />
                  </div>
                  <span className={styles.statNum}>
                    <Counter endValue={s.value} suffix={s.suffix} duration={2200} />
                  </span>
                  <span className={styles.statLabel}>{s.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Expertise />

      <section id="procedures" className={styles.procedures}>
        <div className="container">
          <motion.div 
            className={styles.sectionCenter}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className={styles.proceduresHeading}>Procedures</h2>
          </motion.div>

          <div className={styles.proceduresSwiperWrap}>
            <button className={`${styles.swiperArrow} ${styles.swiperArrowPrev}`} id="proc-prev" aria-label="Previous procedure">
              &#8592;
            </button>
            <button className={`${styles.swiperArrow} ${styles.swiperArrowNext}`} id="proc-next" aria-label="Next procedure">
              &#8594;
            </button>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={28}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 3800, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={{ prevEl: '#proc-prev', nextEl: '#proc-next' }}
              className={styles.proceduresSwiper}
            >
              {procedures.map((p, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.procCard}>
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <EmergencyTraumaGuide />

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
              <span className={styles.parallaxMainQuote}>&ldquo;Adding Life to Years,</span>
              <span className={styles.parallaxSubQuote}>not just Years to Life.&rdquo;</span>
            </h2>
            <p className={styles.parallaxSub}>
              Following international protocols with a compassionate,
              patient-centered focus for unparalleled surgical outcomes.
            </p>
            <button onClick={() => openBooking()} className={styles.btnPill} style={{ marginTop: '24px' }}>
              Schedule a Consultation <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

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

      <OpdSchedule />

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
