'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  Activity,
  Bone,
  Shield,
  Scissors,
  Zap,
  Droplet,
  Layers,
  ShieldAlert,
  Smile,
  Scan,
  User,
  Wind,
  Sun,
  HeartHandshake
} from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { serviceCategories, servicesData } from '@/data/servicesData';
import styles from './Header.module.css';

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Bone,
  Shield,
  Scissors,
  Zap,
  Droplet,
  Layers,
  ShieldAlert,
  Smile,
  Scan,
  User,
  Wind,
  Sun,
  HeartHandshake
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMegaTab, setActiveMegaTab] = useState('hand-wrist');
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const { openBooking } = useBooking();

  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  const closeAllMenus = () => {
    setIsMegaMenuOpen(false);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Specialties', href: '/expertise' },
    { name: 'Services', href: '/services', isDropdown: true },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const currentCategory = serviceCategories.find((c) => c.id === activeMegaTab) || serviceCategories[0];
  const currentTabServices = servicesData.filter((s) => s.category === activeMegaTab);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMegaMenuOpen ? styles.megaOpen : ''}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink} onClick={closeAllMenus}>
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
              <span className={styles.logoTitle}>Hand, Wrist &amp; Reconstructive Plastic Surgeon</span>
            </div>
          </Link>
        </div>

        <nav className={styles.nav}>
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div
                  key={link.name}
                  className={styles.servicesDropdownWrap}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={styles.navLink}
                    onClick={() => setIsMegaMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`${styles.chevronIcon} ${isMegaMenuOpen ? styles.chevronOpen : ''}`}
                    />
                  </Link>

                  {isMegaMenuOpen && (
                    <div
                      className={styles.megaMenu}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className={styles.megaContainer}>
                        <div className={styles.megaBody}>
                          <div className={styles.verticalSidebar}>
                            <div className={styles.sidebarHeading}>Clinical Specialties</div>
                            <div className={styles.categoryList}>
                              {serviceCategories.map((cat) => {
                                const CatIcon = iconMap[cat.iconName] || Activity;
                                const isActive = activeMegaTab === cat.id;
                                return (
                                  <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => setActiveMegaTab(cat.id)}
                                    onMouseEnter={() => setActiveMegaTab(cat.id)}
                                    className={`${styles.categoryBtn} ${isActive ? styles.categoryBtnActive : ''}`}
                                  >
                                    <div className={styles.categoryBtnLeft}>
                                      <CatIcon size={16} className={styles.categoryIcon} />
                                      <span className={styles.categoryLabel}>{cat.shortLabel || cat.label}</span>
                                    </div>
                                    <ChevronRight size={14} className={styles.categoryArrow} />
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <div className={styles.proceduresPanel}>
                            <div>
                              <div className={styles.panelHeader}>
                                <div>
                                  <h3 className={styles.panelTitle}>
                                    <span>{currentCategory?.label}</span>
                                  </h3>
                                  <p className={styles.panelDescription}>
                                    {currentCategory?.description}
                                  </p>
                                </div>
                                <span className={styles.panelBadge}>
                                  {currentTabServices.length} Procedures
                                </span>
                              </div>

                              <div className={styles.proceduresGrid}>
                                {currentTabServices.map((service) => {
                                  const IconComponent = iconMap[service.iconName] || Activity;
                                  return (
                                    <Link
                                      key={service.id}
                                      href={`/services/${service.slug}`}
                                      className={styles.procedureCard}
                                      onClick={closeAllMenus}
                                    >
                                      <div className={styles.procIconWrap}>
                                        <IconComponent size={18} strokeWidth={1.8} />
                                      </div>
                                      <div className={styles.procInfo}>
                                        <span className={styles.procTitle}>{service.shortTitle || service.title}</span>
                                        <span className={styles.procDesc}>{service.tagline}</span>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className={styles.megaFooter}>
                          <div className={styles.megaEmergencyGroup}>
                            <span className={styles.emergencyPill}>24x7 Emergency Care</span>
                            <span>Acute Hand Trauma &amp; Replantation Hotline: <strong>+91-8950406670</strong></span>
                          </div>
                          <Link
                            href="/services"
                            className={styles.megaViewAllLink}
                            onClick={closeAllMenus}
                          >
                            <span>Explore All Services &amp; Estimator</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={link.name} href={link.href} className={styles.navLink} onClick={closeAllMenus}>
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className={styles.ctaGroup}>
          <a
            href="tel:+918950406670"
            className={styles.headerContactLink}
            title="Call Dr. Gourav Siwas (8950406670)"
          >
            <Phone size={14} />
            <span className={styles.headerContactText}>8950406670</span>
          </a>
          <a
            href="mailto:siwasgourav@gmail.com"
            className={styles.headerContactLink}
            title="Email Dr. Gourav Siwas (siwasgourav@gmail.com)"
          >
            <Mail size={14} />
            <span className={styles.headerContactText}>siwasgourav@gmail.com</span>
          </a>
          <button
            onClick={() => {
              closeAllMenus();
              openBooking();
            }}
            className="btn btn-primary"
            style={{ padding: '10px 22px', fontSize: '0.8rem' }}
          >
            Book Appointment
          </button>
        </div>

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

      <div className={styles.mobileSubBar}>
        <a
          href="tel:+918950406670"
          className={styles.mobileSubBtn}
          title="Call Dr. Gourav Siwas (8950406670)"
        >
          <Phone size={12} />
          <span>8950406670</span>
        </a>
        <a
          href="mailto:siwasgourav@gmail.com"
          className={styles.mobileSubBtn}
          title="Email Dr. Gourav Siwas (siwasgourav@gmail.com)"
        >
          <Mail size={12} />
          <span>siwasgourav@gmail.com</span>
        </a>
      </div>

      <div className={`${styles.mobilePanel} ${isMenuOpen ? styles.mobilePanelOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.name}>
                  <button
                    type="button"
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={styles.mobileNavLink}
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: isMobileServicesOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </button>

                  {isMobileServicesOpen && (
                    <div className={styles.mobileServicesSubmenu}>
                      <Link
                        href="/services"
                        onClick={closeAllMenus}
                        className={styles.mobileOverviewLink}
                      >
                        <span>All Services Overview</span>
                        <span>→</span>
                      </Link>

                      {serviceCategories.map((cat) => {
                        const catServices = servicesData.filter((s) => s.category === cat.id);
                        return (
                          <div key={cat.id} className={styles.mobileCategoryGroup}>
                            <div className={styles.mobileServiceCategory}>{cat.label}</div>
                            <div className={styles.mobileServicesList}>
                              {catServices.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.slug}`}
                                  onClick={closeAllMenus}
                                  className={styles.mobileServiceItem}
                                >
                                  <span className={styles.serviceDot}>•</span>
                                  <span>{service.shortTitle || service.title}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeAllMenus}
                className={styles.mobileNavLink}
              >
                {link.name}
              </Link>
            );
          })}
          <div className={styles.mobileContactRow}>
            <a href="tel:+918950406670" className={styles.mobileContactBtn}>
              <Phone size={15} /> 8950406670
            </a>
            <a href="mailto:siwasgourav@gmail.com" className={styles.mobileContactBtn}>
              <Mail size={15} /> siwasgourav@gmail.com
            </a>
          </div>
          <button
            onClick={() => {
              closeAllMenus();
              openBooking();
            }}
            className="btn btn-primary"
            style={{ marginTop: '20px', width: '100%' }}
          >
            Book Appointment
          </button>
        </nav>
      </div>
    </header>
  );
}
