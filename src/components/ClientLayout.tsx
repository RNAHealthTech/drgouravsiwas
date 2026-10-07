'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';
import FloatingActionBar from '@/components/FloatingActionBar';
import { BookingProvider, useBooking } from '@/context/BookingContext';
import IntroAnimation from '@/components/IntroAnimation';

interface ClientLayoutProps {
  children: React.ReactNode;
}

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const { isBookingOpen, bookingType, closeBooking } = useBooking();

  return (
    <>
      <IntroAnimation />
      <Header />
      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
      <FloatingActionBar />
      <AppointmentModal 
        isOpen={isBookingOpen} 
        onClose={closeBooking} 
        selectedType={bookingType}
      />
    </>
  );
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <BookingProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </BookingProvider>
  );
}
