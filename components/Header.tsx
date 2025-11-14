"use client";

import { useState } from "react";
import { PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 min-w-0 flex-1 sm:flex-initial">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm sm:text-base">{"Example Business"}</span>
            </div>
            <span className="text-base sm:text-lg md:text-xl font-bold text-white truncate hidden xs:block">
              {"Example Business"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-300 hover:text-primary transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Phone CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={`tel:{{PHONE_NUMBER}}`}
              className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary hover:bg-primary-dark active:bg-primary-dark text-white rounded-lg font-semibold text-sm sm:text-base transition-colors touch-manipulation"
            >
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden md:inline">{"{{PHONE_NUMBER}}"}</span>
            </a>
            <a
              href={`tel:{{PHONE_NUMBER}}`}
              className="sm:hidden flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] bg-primary hover:bg-primary-dark active:bg-primary-dark text-white rounded-lg transition-colors touch-manipulation"
              aria-label="Call {{PHONE_NUMBER}}"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-300 hover:text-white active:text-white touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 animate-in slide-in-from-top">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-4 py-3 text-base text-gray-300 hover:text-primary hover:bg-gray-800 rounded-lg transition-colors font-medium touch-manipulation min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="px-4 py-3 text-base text-gray-300 hover:text-primary hover:bg-gray-800 rounded-lg transition-colors font-medium touch-manipulation min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-base text-gray-300 hover:text-primary hover:bg-gray-800 rounded-lg transition-colors font-medium touch-manipulation min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

