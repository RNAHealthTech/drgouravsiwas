'use client';

import React, { useState, useEffect } from 'react';
import { doctorData } from '@/data/doctorData';
import styles from './AppointmentModal.module.css';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedType?: string;
}

export default function AppointmentModal({ isOpen, onClose, selectedType = 'Direct (Hospital OPD)' }: AppointmentModalProps) {
  const [consultationType, setConsultationType] = useState(selectedType);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;
    if (isOpen) {
      timer1 = setTimeout(() => {
        setShouldRender(true);
        setIsAnimating(true);
      }, 10);
    } else {
      timer1 = setTimeout(() => setIsAnimating(false), 0);
      timer2 = setTimeout(() => setShouldRender(false), 300);
    }
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setDate('');
    setTimeSlot('');
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  const timeSlots = [
    "08:00 AM - 09:00 AM",
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
    "07:00 PM - 08:00 PM"
  ];

  return (
    <div className={`${styles.overlay} ${isAnimating ? styles.overlayActive : ''}`} onClick={resetForm}>
      <div className={`${styles.modal} ${isAnimating ? styles.modalActive : ''}`} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={resetForm}>&times;</button>

        {!isSuccess ? (
          <>
            <h3 className={styles.title}>Book a Consultation</h3>
            <p className={styles.subtitle}>With {doctorData.name}</p>

            <div className={styles.doctorBrief}>
              <div className={styles.doctorInfo}>
                <strong>{doctorData.name}</strong>
                <span>Consultant Hand &amp; Microsurgery</span>
                <span>Department of Plastic Surgery, Sir Ganga Ram Hospital</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.feeSelector}>
                <span className={styles.label}>Select Consultation Type:</span>
                <div className={styles.feeCards}>
                  {doctorData.fees.map((fee) => (
                    <div
                      key={fee.type}
                      className={`${styles.feeCard} ${consultationType === fee.type ? styles.feeCardActive : ''}`}
                      onClick={() => setConsultationType(fee.type)}
                    >
                      <span className={styles.feeTypeName}>{fee.type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.row}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Preferred Date</label>
                  <input
                    type="date"
                    className="form-input"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={e => setDate(e.target.value)}
                  />
                </div>

                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Preferred Time Slot</label>
                  <select
                    className="form-input"
                    required
                    value={timeSlot}
                    onChange={e => setTimeSlot(e.target.value)}
                  >
                    <option value="">Select a Slot</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Patient Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter patient full name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter email address"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Reason for Consultation (Optional)</label>
                <textarea
                  className="form-input"
                  placeholder="Briefly describe the concern (e.g. Hand injury, Wrist pain, Nerve reconstruction, Flap surgery)"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>

              <button
                id="modal-submit-btn"
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '10px' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className={styles.spinner}></div>
                ) : 'Submit Appointment Request'}
              </button>
            </form>
          </>
        ) : (
          <div className={styles.successScreen}>
            <div className={styles.successIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3>Appointment Request Submitted!</h3>
            <p className={styles.successText}>
              Thank you, <strong>{name}</strong>. Your appointment request with <strong>{doctorData.name}</strong> on <strong>{date}</strong> at <strong>{timeSlot}</strong> has been received.
            </p>
            <div className={styles.receipt}>
              <div><strong>Type:</strong> {consultationType}</div>
              <div><strong>Location:</strong> Department of Plastic Surgery, Sir Ganga Ram Hospital</div>
            </div>
            <button className="btn btn-primary" onClick={resetForm} style={{ marginTop: '20px' }}>
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
