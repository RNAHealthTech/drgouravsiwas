'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Newspaper, ExternalLink, Mail } from 'lucide-react';
import { mediaData, MediaItem } from '@/data/mediaData';
import { doctorData } from '@/data/doctorData';
import BookingCTA from '@/components/BookingCTA';
import styles from './media.module.css';

export default function MediaPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'National Press', 'TV Broadcast', 'Hospital News', 'Feature'];

  const filteredItems = activeCategory === 'All'
    ? mediaData
    : mediaData.filter(item => item.category === activeCategory);

  const featuredItem = mediaData.find(item => item.highlight);

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <span className={styles.heroBadge}>
            <Newspaper size={14} /> Newsroom &amp; Media Presence
          </span>
          <h1 className={styles.heroTitle}>
            Press Coverage &amp; <span>Clinical Milestones</span>
          </h1>
          <p className={styles.heroSubtitle}>
            National press features, television broadcasts, hospital bulletins, and surgical breakthroughs showcasing {doctorData.name}&apos;s microvascular reconstructive expertise at Sir Ganga Ram Hospital, New Delhi.
          </p>

          {/* Filter Bar */}
          <div className={styles.filterBar}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
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
                  <span className={styles.landmarkBadge}>Featured Landmark</span>
                  <span className={styles.sourceBadge}>{featuredItem.source}</span>
                </div>
                <h2 className={styles.featuredTitle}>{featuredItem.title}</h2>
                <p className={styles.featuredSummary}>{featuredItem.summary}</p>
                <div className={styles.featuredFooter}>
                  <span className={styles.featuredDate}>🗓️ {featuredItem.date}</span>
                  {featuredItem.link ? (
                    <a
                      href={featuredItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ fontSize: '0.84rem', padding: '8px 18px' }}
                    >
                      Read Feature <ExternalLink size={14} style={{ marginLeft: '4px' }} />
                    </a>
                  ) : (
                    <span className="badge badge-gold">Verified Clinical Record</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Media Grid */}
          <div className={styles.grid}>
            {filteredItems.map((item: MediaItem) => (
              <article key={item.id} className={styles.mediaCard}>
                <div className={styles.cardImgWrap}>
                  <Image
                    src={item.image || '/images/dr_gourav_portrait_hd.jpg'}
                    alt={item.title}
                    fill
                    className={styles.cardImg}
                  />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardSource}>{item.source}</span>
                    <span className={styles.cardDate}>{item.date}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardSummary}>{item.summary}</p>
                  <div className={styles.cardFooter}>
                    {item.badge && <span className={styles.cardBadge}>{item.badge}</span>}
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{ fontSize: '0.78rem', padding: '6px 14px' }}
                      >
                        Details <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.76rem', color: 'var(--text-light)' }}>Sir Ganga Ram Hospital</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Incoming Media Submission / Notice */}
          <div className={styles.noticeBox}>
            <h3 className={styles.noticeTitle}>Press Inquiries &amp; Article Updates</h3>
            <p className={styles.noticeDesc}>
              Media releases, press clippings, and video broadcast features are actively being added. For press interviews, medical feature contributions, or verified clinical insights:
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
