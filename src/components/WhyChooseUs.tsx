'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Counter from '@/components/Counter';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Microsurgical Precision",
      description: "Specialized training at Sir Ganga Ram Hospital in sub-millimeter microvascular repairs, emergency limb replantations, and complex tissue reconstruction."
    },
    {
      title: "Sir Ganga Ram Hospital Affiliation",
      description: "Operates in one of India's pre-eminent tertiary multi-specialty medical institutions with round-the-clock emergency casualty and advanced ICU backup."
    },
    {
      title: "ATLS Safety Standards",
      description: "Certified in Advanced Trauma Life Support protocols, ensuring international safety standards in trauma care and peri-operative patient management."
    },
    {
      title: "Patient-Centric Philosophy",
      description: "We prioritize honest consultations, clear communication, and personalized surgical planning for every individual."
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '100px 0' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--secondary)' }}>Why Choose Us</span>
          <h2 className="serif" style={{ fontSize: '3rem', color: 'var(--primary)', marginTop: '8px' }}>Uncompromising Safety & Mastery</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                backgroundColor: 'var(--text-white)',
                padding: '40px 32px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border)'
              }}
            >
              <div style={{ color: 'var(--secondary)', marginBottom: '24px', backgroundColor: 'var(--bg-secondary)', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                <Check size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '16px' }}>{reason.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', textAlign: 'center', gap: '32px', paddingTop: '40px', borderTop: '1px solid var(--border)' }}>
          <div>
            <h3 style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '8px' }}><Counter endValue={2000} suffix="+" /></h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Successful Surgeries</p>
          </div>
          <div>
            <h3 style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '8px' }}><Counter endValue={12} suffix="+" /></h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Years of Excellence</p>
          </div>
          <div>
            <h3 style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '8px' }}><Counter endValue={100} suffix="%" /></h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Patient Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
