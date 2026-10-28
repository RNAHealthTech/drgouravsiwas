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
      const response = await fetch('https://formspree.io/f/mljjbqvj', {
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
          _subject: `New Appointment Request from ${name} (${phone})`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Automatically open WhatsApp to doctor's mobile number with prefilled appointment details
        const cleanDoctorPhone = doctorData.whatsapp.replace(/[^0-9]/g, '');
        const text = encodeURIComponent(
          `*New Appointment Booking Request*\n\n` +
          `*Doctor:* ${doctorData.name}\n` +
          `*Patient Name:* ${name}\n` +
          `*Phone:* ${phone}\n` +
          `*Email:* ${email}\n` +
          `*Consultation Type:* ${consultationType}\n` +
          `*Preferred Date:* ${date}\n` +
          `*Preferred Time:* ${timeSlot}\n` +
          `*Reason:* ${message || 'Consultation'}\n\n` +
          `_Sent from Website Booking Portal_`
        );
        const waUrl = `https://wa.me/${cleanDoctorPhone}?text=${text}`;
        try {
          window.open(waUrl, '_blank');
        } catch {
          // Handled by UI button if popup is blocked
        }
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

            <form onSubmit={handleSubmit} action="https://formspree.io/f/mljjbqvj" method="POST" className={styles.form}>
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
              <div><strong>Status:</strong> Emailed &amp; Forwarded to Doctor&apos;s Mobile</div>
            </div>

            <div className={styles.successActions}>
              <a
                href={`https://wa.me/${doctorData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `*New Appointment Booking Request*\n\n` +
                  `*Doctor:* ${doctorData.name}\n` +
                  `*Patient Name:* ${name}\n` +
                  `*Phone:* ${phone}\n` +
                  `*Email:* ${email}\n` +
                  `*Consultation Type:* ${consultationType}\n` +
                  `*Preferred Date:* ${date}\n` +
                  `*Preferred Time:* ${timeSlot}\n` +
                  `*Reason:* ${message || 'Consultation'}\n\n` +
                  `_Sent from Website Booking Portal_`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappActionBtn}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Send via WhatsApp to Doctor ({doctorData.phone})
              </a>
              <button className="btn btn-primary" onClick={resetForm} style={{ marginTop: '5px' }}>
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
