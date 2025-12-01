"use client";

import { useState } from "react";
import { PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center min-w-0 flex-shrink-0" aria-label="Home">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-primary hover:text-primary-dark transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-primary hover:text-primary-dark transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-primary hover:text-primary-dark transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Phone CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:0746255654`}
              className="hidden sm:flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-primary hover:bg-primary-dark active:bg-primary-dark text-white rounded-lg font-semibold text-xs sm:text-sm transition-colors touch-manipulation"
            >
              <PhoneIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden md:inline">{"(07) 4625 5654"}</span>
            </a>
            <a
              href={`tel:0746255654`}
              className="sm:hidden flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] bg-primary hover:bg-primary-dark active:bg-primary-dark text-white rounded-lg transition-colors touch-manipulation"
              aria-label="Call (07) 4625 5654"
            >
              <PhoneIcon className="w-4 h-4" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-gray-700 hover:text-primary active:text-primary touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

          {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-4 py-3 text-base text-primary hover:text-primary-dark hover:bg-gray-50 rounded-lg transition-colors font-medium touch-manipulation min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="px-4 py-3 text-base text-primary hover:text-primary-dark hover:bg-gray-50 rounded-lg transition-colors font-medium touch-manipulation min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-base text-primary hover:text-primary-dark hover:bg-gray-50 rounded-lg transition-colors font-medium touch-manipulation min-h-[44px] flex items-center"
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

