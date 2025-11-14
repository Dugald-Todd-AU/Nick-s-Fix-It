import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Example Business | 24/7 Trade Services in Example Region",
  description: "Example Business provides professional trade services in Example Region. Licensed, insured, and available 24/7. Contact us at {{PHONE_NUMBER}} for a free quote.",
  keywords: "{{SERVICE_1}}, {{SERVICE_2}}, {{SERVICE_3}}, Example Region, trade services, licensed tradesperson",
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

