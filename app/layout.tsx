import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nick's Fix It | Reliable Mechanic & Auto Repairs in St George, Queensland",
  description: "Nick's Fix It provides quality automotive servicing and mechanical repairs in St George, Queensland. Logbook servicing, diagnostics, tyres, air con, and 4WD repairs. Call (07) 4625 5654.",
  keywords: "mechanic St George QLD, car servicing St George, auto repairs St George, 4WD servicing St George, logbook servicing St George, air con regas St George, mechanic St George Queensland",
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
      </body>
    </html>
  );
}

