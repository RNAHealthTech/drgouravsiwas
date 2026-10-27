'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  useEffect(() => {
    // Unconditionally scroll to top when navigating across pages (especially from footer)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

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
