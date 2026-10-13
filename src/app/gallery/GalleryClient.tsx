'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  Image as ImageIcon,
  Award,
  Calendar,
  MapPin,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  ShieldCheck,
  Stethoscope,
  ExternalLink
} from 'lucide-react';
import {
  GalleryCategory,
  GalleryItem,
  galleryCategories,
  galleryData
} from '@/data/galleryData';
import { doctorData } from '@/data/doctorData';
import BookingCTA from '@/components/BookingCTA';
import styles from './gallery.module.css';

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  }, [lightboxIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleClose, handleNext, handlePrev]);

  // Lock scroll when lightbox open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  // Calculate count for each category
  const getCategoryCount = (catId: GalleryCategory) => {
    if (catId === 'All') return galleryData.length;
    return galleryData.filter((item) => item.category === catId).length;
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>
            <ImageIcon size={15} /> Clinical &amp; Academic Portfolio
          </span>
          <h1 className={styles.heroTitle}>
            Surgical Milestones &amp; <span>Clinical Gallery</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A curated photographic and certification archive documenting high-magnification microvascular reconstructions, European Board of Hand Surgery recognitions, trauma digit replantations, and academic mentorships led by {doctorData.name} at Sir Ganga Ram Hospital, New Delhi.
          </p>

          {/* Filter Bar / Tabs */}
          <div className={styles.filterBarWrap}>
            <div className={styles.filterBar} role="tablist" aria-label="Gallery Categories">
              {galleryCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count = getCategoryCount(cat.id);
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setLightboxIndex(null);
                    }}
                  >
                    <span>{cat.label}</span>
                    <span className={styles.categoryCount}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.mainSection}>
        <div className="container">
          {/* Header row */}
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>
              <Stethoscope size={20} color="#D4AF37" />
              <span>
                {activeCategory === 'All' ? 'All Verified Gallery Records' : activeCategory}
              </span>
            </div>
            <div className={styles.sectionSubtext}>
              Showing {filteredItems.length} curated clinical &amp; academic records
            </div>
          </div>

          {/* Gallery Grid */}
          <div className={styles.galleryGrid}>
            {filteredItems.map((item, index) => (
              <article
                key={item.id}
                className={styles.galleryCard}
                onClick={() => setLightboxIndex(index)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxIndex(index);
                  }
                }}
                aria-label={`View ${item.title}`}
              >
                <div className={styles.cardImgWrap}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImg}
                    priority={index < 4}
                  />
                  <span className={styles.cardBadgeTop}>{item.badge}</span>
                  <div className={styles.cardOverlay}>
                    <span className={styles.zoomHint}>
                      <Maximize2 size={14} /> Tap to Expand
                    </span>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardDate}>
                      <Calendar size={13} /> {item.date}
                    </span>
                    <span className={styles.cardLocation}>{item.location}</span>
                  </div>

                  <h2 className={styles.cardTitle}>{item.title}</h2>
                  <p className={styles.cardDesc}>{item.description}</p>

                  <div className={styles.cardFooter}>
                    {item.stats ? (
                      <span className={styles.cardStat}>✦ {item.stats}</span>
                    ) : (
                      <span className={styles.cardStat}>✦ Verified Record</span>
                    )}
                    <span className={styles.viewAction}>
                      Preview <ExternalLink size={13} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Trust Strip */}
          <div className={styles.trustStrip}>
            <div className={styles.trustText}>
              <ShieldCheck size={28} className={styles.trustIcon} />
              <div>
                <h3 className={styles.trustTitle}>
                  Clinical Verification &amp; Patient Privacy Standards
                </h3>
                <p className={styles.trustDesc}>
                  All clinical photographs, surgical milestones, and diplomas adhere strictly to medical confidentiality guidelines and ethical standards at Sir Ganga Ram Hospital, New Delhi. Certificates are cross-verifiable with the respective awarding medical boards (EBHS, NAMS, FESSH).
                </p>
              </div>
            </div>
            <a
              href={doctorData.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ fontSize: '0.86rem', padding: '10px 22px' }}
            >
              Consult Dr. Gourav Siwas
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div
          className={styles.lightboxOverlay}
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
        >
          <div
            className={styles.lightboxModal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.lightboxCloseBtn}
              onClick={handleClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Image Column */}
            <div className={styles.lightboxImgCol}>
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className={styles.lightboxImg}
                priority
              />
            </div>

            {/* Information Column */}
            <div className={styles.lightboxInfoCol}>
              <span className={styles.lightboxTopBadge}>
                <Award size={13} /> {currentItem.badge}
              </span>

              <div className={styles.lightboxCounter}>
                Record {lightboxIndex + 1} of {filteredItems.length} • {currentItem.category}
              </div>

              <h2 className={styles.lightboxTitle}>{currentItem.title}</h2>

              <div className={styles.lightboxMetaGrid}>
                <div>
                  <div className={metaStylesLabel(styles)}>Date / Period</div>
                  <div className={styles.metaValue}>{currentItem.date}</div>
                </div>
                <div>
                  <div className={metaStylesLabel(styles)}>Center / Location</div>
                  <div className={styles.metaValue}>{currentItem.location}</div>
                </div>
                {currentItem.stats && (
                  <div style={{ gridColumn: 'span 2' }}>
                    <div className={metaStylesLabel(styles)}>Key Milestone / Specialization</div>
                    <div className={styles.metaValue} style={{ color: '#0E6251' }}>
                      {currentItem.stats}
                    </div>
                  </div>
                )}
              </div>

              <p className={styles.lightboxDesc}>{currentItem.description}</p>

              <div className={styles.lightboxNavGroup}>
                <button
                  type="button"
                  className={styles.lightboxNavBtn}
                  onClick={handlePrev}
                  aria-label="Previous item"
                >
                  <ChevronLeft size={16} /> Prev
                </button>
                <button
                  type="button"
                  className={styles.lightboxNavBtn}
                  onClick={handleNext}
                  aria-label="Next item"
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking CTA */}
      <BookingCTA />
    </div>
  );
}

function metaStylesLabel(styles: Record<string, string>) {
  return styles.metaLabel;
}
