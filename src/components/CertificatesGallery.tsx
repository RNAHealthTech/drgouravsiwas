'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './CertificatesGallery.module.css';

const certificates = [
  {
    id: 1,
    title: 'European Diploma in Hand Surgery (EDHS)',
    issuer: 'European Board of Hand Surgery (EBHS) — FESSH',
    year: '2026',
    location: 'Basel, Switzerland',
    image: '/images/cert-edhs.jpg',
    badge: '🏆 Prestigious',
  },
  {
    id: 2,
    title: 'Member of National Academy of Medical Sciences (MNAMS)',
    issuer: 'National Academy of Medical Sciences (India), New Delhi',
    year: '2024',
    location: 'New Delhi, India',
    image: '/images/cert-mnams.jpg',
    badge: '📜 Member MNAMS',
  },
  {
    id: 3,
    title: 'EBHS 30th Anniversary Convocation Ceremony',
    issuer: 'European Board of Hand Surgery Examination — Basel Stage',
    year: '2026',
    location: 'Basel, Switzerland',
    image: '/images/dr_gourav_ebhs_award.jpg',
    badge: '🎖️ Convocation Milestone',
  },
  {
    id: 4,
    title: 'Fellowship — Hand & Upper Extremity Surgery',
    issuer: 'Max Institute of Medical Education, Max Healthcare',
    year: '2025',
    location: 'Max Smart Super Speciality Hospital, Saket, New Delhi',
    image: '/images/cert-max-fellowship.png',
    badge: '⭐ Fellowship',
  },
  {
    id: 5,
    title: 'International Academic Mentorship & Faculty Fellowship',
    issuer: 'Global Hand & Reconstructive Microsurgery Exchange',
    year: '2025',
    location: 'International Congress',
    image: '/images/dr_gourav_mentorship.jpg',
    badge: '🤝 Faculty Mentorship',
  },
  {
    id: 6,
    title: 'Hands-on Course in Microsurgery',
    issuer: 'Ganga Microsurgery Training Institute',
    year: '2022',
    location: 'Ganga Hospital, Coimbatore',
    image: '/images/cert-ganga-microsurgery.png',
    badge: '🔬 Microsurgery',
  },
  {
    id: 7,
    title: 'Membership Certificate — APSI',
    issuer: 'Association of Plastic Surgeons of India',
    year: '2024',
    location: 'India',
    image: '/images/cert-apsi.png',
    badge: '📜 Membership',
  },
  {
    id: 8,
    title: 'Membership Certificate — ISSH',
    issuer: 'Indian Society for Surgery of the Hand',
    year: '2025',
    location: 'India',
    image: '/images/cert-issh.jpg',
    badge: '📜 Membership',
  },
  {
    id: 9,
    title: 'Certificate of Participation — WSRM 2023',
    issuer: '12th Congress of World Society for Reconstructive Microsurgery',
    year: '2023',
    location: 'Singapore',
    image: '/images/cert-wsrm.png',
    badge: '🌏 International',
  },
];

export default function CertificatesGallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i !== null ? (i === 0 ? certificates.length - 1 : i - 1) : null));
  const next = () => setLightboxIdx((i) => (i !== null ? (i === certificates.length - 1 ? 0 : i + 1) : null));

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <span className={styles.label}>Credentials & Certifications</span>
          <h2 className={`serif ${styles.title}`}>Official Certificates</h2>
          <p className={styles.subtitle}>
            Board-certified qualifications and internationally recognised fellowships earned through rigorous examination and dedicated practice.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className={styles.card}
              onClick={() => openLightbox(idx)}
            >
              <div className={styles.imgWrapper}>
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className={styles.certImg}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={styles.overlay}>
                  <span className={styles.viewBtn}>View Certificate</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.badge}>{cert.badge}</span>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <div className={styles.certMeta}>
                  <span>{cert.year}</span>
                  <span className={styles.dot}>·</span>
                  <span>{cert.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={closeLightbox}><X size={24} /></button>
              <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prev}><ChevronLeft size={28} /></button>
              <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={next}><ChevronRight size={28} /></button>

              <div className={styles.lightboxImgWrap}>
                <Image
                  src={certificates[lightboxIdx].image}
                  alt={certificates[lightboxIdx].title}
                  fill
                  className={styles.lightboxImg}
                  sizes="90vw"
                />
              </div>
              <div className={styles.lightboxInfo}>
                <span className={styles.badge}>{certificates[lightboxIdx].badge}</span>
                <h3 className={styles.lightboxTitle}>{certificates[lightboxIdx].title}</h3>
                <p className={styles.lightboxIssuer}>{certificates[lightboxIdx].issuer}</p>
                <div className={styles.certMeta}>
                  <span>{certificates[lightboxIdx].year}</span>
                  <span className={styles.dot}>·</span>
                  <span>{certificates[lightboxIdx].location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
