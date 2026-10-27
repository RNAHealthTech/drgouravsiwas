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
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/myeezzel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          formType: 'Doctor Appointment Booking',
          doctor: doctorData.name,
          consultationType,
          preferredDate: date,
          preferredTimeSlot: timeSlot,
          patientName: name,
          phone,
          email,
          reason: message || 'Not provided',
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const data = await response.json().catch(() => ({}));
        const errText = 
          data?.errors?.map((err: { message: string }) => err.message).join(', ') ||
          data?.error ||
          'Failed to submit appointment request. Please try again.';
        setErrorMessage(errText);
      }
    } catch {
      setErrorMessage('Network error. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setDate('');
    setTimeSlot('');
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
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

            <form onSubmit={handleSubmit} action="https://formspree.io/f/myeezzel" method="POST" className={styles.form}>
              <input type="hidden" name="formType" value="Doctor Appointment Booking" />
              <input type="hidden" name="doctor" value={doctorData.name} />
              <input type="hidden" name="consultationType" value={consultationType} />

              <div className={styles.feeSelector}>
                <span className={styles.label}>Select Consultation Type:</span>
                <div className={styles.feeCards}>
                  {['OPD Consultation', 'Second Opinion', 'Post-Op Follow-up'].map((type) => (
                    <div
                      key={type}
                      className={`${styles.feeCard} ${consultationType === type ? styles.feeCardActive : ''}`}
                      onClick={() => setConsultationType(type)}
                    >
                      <span className={styles.feeTypeName}>{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.row}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
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
                    name="preferredTimeSlot"
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
                  name="patientName"
                  className="form-input"
                  placeholder="Enter patient full name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className={styles.row}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="e.g. +91 98765 43210"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>

                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter email address"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Reason for Consultation (Optional)</label>
                <textarea
                  name="reason"
                  className="form-input"
                  placeholder="Briefly describe the concern (e.g. Hand injury, Wrist pain, Nerve reconstruction, Flap surgery)"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>

              {errorMessage && (
                <div className={styles.errorMessage}>
                  {errorMessage}
                </div>
              )}

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
              {phone && <div><strong>Contact:</strong> {phone}</div>}
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
