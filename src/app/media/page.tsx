'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Newspaper,
  ExternalLink,
  Mail,
  Play,
  FileText,
  Calendar,
  Sparkles
} from 'lucide-react';
import { mediaData, MediaItem } from '@/data/mediaData';
import { doctorData } from '@/data/doctorData';
import BookingCTA from '@/components/BookingCTA';
import styles from './media.module.css';

const InstagramIcon = ({ size = 13 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function MediaPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'National Press', 'Academic Summits', 'Video & Broadcast', 'Social Media'];

  const filteredItems = activeCategory === 'All'
    ? mediaData
    : mediaData.filter(item => item.category === activeCategory);

  const featuredItem = mediaData.find(item => item.highlight);

  // When 'All' is active, show the featured item in the hero banner and the other items in the grid to avoid duplication
  const displayGridItems = activeCategory === 'All'
    ? filteredItems.filter(item => item.id !== featuredItem?.id)
    : filteredItems;

  const getMediaAction = (item: MediaItem) => {
    if (!item.link) return null;
    const isYoutube = item.link.includes('youtube') || item.link.includes('youtu.be');
    const isInstagram = item.link.includes('instagram.com');
    const isSummit = item.category === 'Academic Summits';

    let label = 'Read Full Article';
    let iconElement = <ExternalLink size={13} />;

    if (isYoutube) {
      label = 'Watch Video Interview';
      iconElement = <Play size={13} fill="currentColor" />;
    } else if (isInstagram) {
      label = 'View on Instagram';
      iconElement = <InstagramIcon size={13} />;
    } else if (isSummit) {
      label = 'Visit Summit Portal';
      iconElement = <ExternalLink size={13} />;
    }

    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
        style={{
          fontSize: '0.82rem',
          padding: '8px 16px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '7px',
          borderRadius: '6px',
          fontWeight: 600
        }}
      >
        <span>{label}</span>
        {iconElement}
      </a>
    );
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <span className={styles.heroBadge}>
            <Newspaper size={14} /> Verified News &amp; Media Presence
          </span>
          <h1 className={styles.heroTitle}>
            Press Coverage &amp; <span>Clinical Milestones</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Verified national daily press features, prestigious surgical summits, television broadcasts, and landmark reconstructive breakthroughs documenting {doctorData.name}&apos;s microvascular expertise at Sir Ganga Ram Hospital, New Delhi.
          </p>

          {/* Filter Bar */}
          <div className={styles.filterBar}>
            {categories.map((cat) => {
              const count = cat === 'All'
                ? mediaData.length
                : mediaData.filter(i => i.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span>{cat}</span>
                  <span style={{
                    fontSize: '0.72rem',
                    opacity: 0.85,
                    marginLeft: '4px',
                    fontWeight: 700
                  }}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.mainSection}>
        <div className="container">
          {/* Featured Landmark Card */}
          {featuredItem && activeCategory === 'All' && (
            <div className={styles.featuredCard}>
              <div className={styles.featuredImgCol}>
                <Image
                  src={featuredItem.image || '/images/dr_gourav_portrait_hd.jpg'}
                  alt={featuredItem.title}
                  fill
                  className={styles.featuredImg}
                  priority
                />
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.featuredBadgeGroup}>
                  <span className={styles.landmarkBadge}>
                    <Sparkles size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    Featured Landmark
                  </span>
                  <span className={styles.sourceBadge}>{featuredItem.source}</span>
                </div>
                <h2 className={styles.featuredTitle}>
                  <a
                    href={featuredItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {featuredItem.title}
                  </a>
                </h2>
                <p className={styles.featuredSummary}>{featuredItem.summary}</p>
                <div className={styles.featuredFooter}>
                  <span className={styles.featuredDate}>🗓️ {featuredItem.date}</span>
                  {getMediaAction(featuredItem)}
                </div>
              </div>
            </div>
          )}

          {/* Media Grid */}
          <div className={styles.grid}>
            {displayGridItems.map((item: MediaItem) => {
              const isYoutube = item.link?.includes('youtube') || item.link?.includes('youtu.be');
              const isInstagram = item.link?.includes('instagram.com');
              const isArticle = item.category === 'National Press';
              const isSummit = item.category === 'Academic Summits';

              return (
                <article key={item.id} className={styles.mediaCard}>
                  <div className={styles.cardImgWrap}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'block', width: '100%', height: '100%' }}
                    >
                      <Image
                        src={item.image || '/images/dr_gourav_portrait_hd.jpg'}
                        alt={item.title}
                        fill
                        className={styles.cardImg}
                      />
                    </a>
                    {isYoutube && (
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(220, 38, 38, 0.94)',
                        color: '#fff',
                        padding: '4px 9px',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                      }}>
                        <Play size={10} fill="#fff" /> YouTube Video
                      </div>
                    )}
                    {isInstagram && (
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                        color: '#fff',
                        padding: '4px 9px',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                      }}>
                        <InstagramIcon size={11} /> Instagram Post
                      </div>
                    )}
                    {isArticle && (
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(35, 24, 18, 0.88)',
                        backdropFilter: 'blur(4px)',
                        color: '#FEF7E7',
                        padding: '4px 9px',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        border: '1px solid rgba(172, 178, 150, 0.35)'
                      }}>
                        <FileText size={10} /> Press Article
                      </div>
                    )}
                    {isSummit && (
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(35, 24, 18, 0.92)',
                        backdropFilter: 'blur(4px)',
                        color: '#ACB296',
                        padding: '4px 9px',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        border: '1px solid rgba(172, 178, 150, 0.45)'
                      }}>
                        <Calendar size={10} /> Academic Summit
                      </div>
                    )}
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardSource}>{item.source}</span>
                      <span className={styles.cardDate}>{item.date}</span>
                    </div>
                    <h3 className={styles.cardTitle}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        {item.title}
                      </a>
                    </h3>
                    <p className={styles.cardSummary}>{item.summary}</p>
                    <div className={styles.cardFooter}>
                      {item.badge && <span className={styles.cardBadge}>{item.badge}</span>}
                      {getMediaAction(item)}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Incoming Media Submission / Notice */}
          <div className={styles.noticeBox}>
            <h3 className={styles.noticeTitle}>Press Inquiries &amp; Academic Invitations</h3>
            <p className={styles.noticeDesc}>
              For scientific invitations, clinical keynote addresses on reconstructive &amp; hand surgery, or verified press commentary:
            </p>
            <a href={`mailto:${doctorData.email}`} className={styles.noticeCta}>
              <Mail size={15} /> Contact Media Desk ({doctorData.email})
            </a>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCTA />
    </div>
  );
}
