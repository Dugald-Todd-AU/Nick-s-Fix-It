import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Brendan Coonan Plumbing & Gasfitting | 24/7 Trade Services in Toowoomba & Darling Downs",
  description: "Brendan Coonan Plumbing & Gasfitting provides professional trade services in Toowoomba & Darling Downs. Licensed, insured, and available 24/7. Contact us at 0418 793 898 for a free quote.",
  keywords: "Plumbing & Gas Fitting, Hot Water System Installations, Emergency Leak Repairs, Toowoomba & Darling Downs, trade services, licensed tradesperson",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}

