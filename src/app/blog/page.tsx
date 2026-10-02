'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../shared-page.module.css';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Evolution of Hand Microsurgery in Trauma Care",
      excerpt: "Exploring sub-millimeter precision techniques that are revolutionizing how we treat severe extremity injuries and nerve damage.",
      category: "Microsurgery",
      date: "Oct 12, 2026",
      image: "/images/procedure-3.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Understanding Facial Aesthetics & Reconstruction",
      excerpt: "A deep dive into the delicate balance between restoring function and redefining natural aesthetics in facial surgery.",
      category: "Aesthetics",
      date: "Sep 28, 2026",
      image: "/images/procedure-1.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Recovery Protocols After Complex Skin Grafts",
      excerpt: "What patients need to know about post-operative care, wound healing, and scarring management.",
      category: "Patient Care",
      date: "Sep 15, 2026",
      image: "/images/procedure-2.jpg",
      featured: false
    },
    {
      id: 4,
      title: "The Critical Golden Hour in Limb Replantation",
      excerpt: "Why immediate transport and emergency trauma intervention is crucial for successful limb and digit salvage.",
      category: "Emergency Trauma",
      date: "Aug 30, 2026",
      image: "/images/clinic-hero.jpg",
      featured: false
    }
  ];

  return (
    <main>
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderBg} style={{ backgroundImage: 'linear-gradient(135deg, rgba(62,39,35,0.95) 0%, rgba(62,39,35,0.7) 100%), url(/images/procedure-3.jpg)' }}></div>
        <div className={`container ${styles.pageHeaderContent}`}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.pageTitle}
          >
            Insights & Journals
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.pageSubtitle}
          >
            Explore the latest advancements in plastic, cosmetic, and reconstructive microsurgery.
          </motion.p>
        </div>
      </header>

      <section className={styles.pageSection}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0', background: 'var(--bg-primary)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginBottom: '80px', border: '1px solid var(--border)' }}
            className="featuredBlog"
          >
            <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
              <Image src={posts[0].image} alt={posts[0].title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '60px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--secondary)', marginBottom: '16px', fontWeight: 600 }}>
                {posts[0].category} • {posts[0].date}
              </span>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '24px', lineHeight: 1.2 }}>{posts[0].title}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.8 }}>{posts[0].excerpt}</p>
              <Link href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Read Article <span style={{ color: 'var(--secondary)' }}>→</span>
              </Link>
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px' }}>
            {posts.slice(1).map((post, idx) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ display: 'flex', flexDirection: 'column' }}
                className={`${styles.card} group`}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: '8px', overflow: 'hidden', marginBottom: '24px' }}>
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} className="blogImg" />
                </div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--secondary)', marginBottom: '12px', fontWeight: 600 }}>
                  {post.category}
                </span>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '16px', lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px', flexGrow: 1 }}>{post.excerpt}</p>
                <Link href="#" style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        .featuredBlog { transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .featuredBlog:hover { transform: translateY(-5px); box-shadow: 0 20px 60px rgba(0,0,0,0.1); }
        .${styles.card}:hover .blogImg { transform: scale(1.05); }
        @media (max-width: 992px) {
          .featuredBlog { grid-template-columns: 1fr !important; }
          .featuredBlog > div:first-child { min-height: 250px; }
        }
      `}} />
    </main>
  );
}
