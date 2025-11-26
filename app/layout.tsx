import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Amber's Hair Parlour | Modern Hairdressing in St George, Queensland",
  description: "Amber's Hair Parlour offers modern hairdressing services in St George, Queensland. Cuts, colours, foils & styling in a warm, boutique hair parlour. Book your appointment at (07) 4625 1693.",
  keywords: "hairdressing, hair salon, haircuts, hair colour, foils, styling, St George Queensland, ladies hair, men's cuts, special occasion hair",
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

