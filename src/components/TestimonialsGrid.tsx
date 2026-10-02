'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { doctorData } from '@/data/doctorData';
import { Star } from 'lucide-react';

export default function TestimonialsGrid() {
  return (
    <section style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--secondary)' }}>Patient Stories</span>
          <h2 className="serif" style={{ fontSize: '3rem', color: 'var(--primary)', marginTop: '8px' }}>Real Transformations</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {doctorData.testimonials.map((t, idx) => (
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
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ color: 'var(--secondary)', display: 'flex', gap: '4px', marginBottom: '24px' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '32px', flexGrow: 1, color: 'var(--text-muted)' }}>"{t.feedback}"</p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                <strong style={{ display: 'block', fontFamily: 'var(--font-serif)', color: 'var(--primary)', fontSize: '1.2rem' }}>{t.patientName}</strong>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>{t.condition}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
