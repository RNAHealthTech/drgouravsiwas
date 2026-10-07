import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drgouravsiwas.com'),
  title: "Dr. Gourav Siwas | Hand, Wrist & Reconstructive Plastic Surgeon | Sir Ganga Ram Hospital",
  description: "Official profile and appointment booking portal for Dr. Gourav Siwas, Dual Board Certified Hand, Wrist & Reconstructive Plastic Surgeon at the Department of Plastic Surgery, Sir Ganga Ram Hospital, New Delhi. Specialising in hand trauma, replantation, brachial plexus reconstruction, peripheral nerve surgery, tendon & ligament repair, and congenital hand conditions.",
  keywords: "Dr. Gourav Siwas, Hand Surgeon Delhi, Wrist Surgeon Delhi, Reconstructive Plastic Surgeon, Hand Microsurgery, Sir Ganga Ram Hospital, Replantation Delhi, Brachial Plexus Surgery Delhi, European Board Certified Hand Surgeon, EDHS",
  authors: [{ name: "Dr. Gourav Siwas" }],
  openGraph: {
    title: "Dr. Gourav Siwas | Hand, Wrist & Reconstructive Plastic Surgeon",
    description: "Official profile and appointment booking portal for Dr. Gourav Siwas at the Department of Plastic Surgery, Sir Ganga Ram Hospital, New Delhi.",
    type: "website",
    locale: "en_IN",
    siteName: "Sir Ganga Ram Hospital",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <SchemaMarkup />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
