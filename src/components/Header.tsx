'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useBooking } from '@/context/BookingContext';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <a href="/" className={styles.logoLink}>
            <div className={styles.logoEmblemWrap}>
              <Image 
                src="/images/dr_gourav_emblem.jpg" 
                alt="Dr. Gourav Siwas Logo" 
                width={44} 
                height={44} 
                className={styles.logoEmblem}
                priority
              />
            </div>
            <div className={styles.logoTextGroup}>
              <span className={styles.logoName}>Dr. Gourav Siwas</span>
              <span className={styles.logoTitle}>Plastic & Hand Surgeon</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className={styles.ctaGroup}>
          <button onClick={() => openBooking()} className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '0.8rem' }}>
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <div className={`${styles.mobilePanel} ${isMenuOpen ? styles.mobilePanelOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)} 
              className={styles.mobileNavLink}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              openBooking();
            }} 
            className="btn btn-primary"
            style={{ marginTop: '24px', width: '100%' }}
          >
            Book Appointment
          </button>
        </nav>
      </div>
    </header>
  );
}
