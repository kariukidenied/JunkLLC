"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#222426] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side - Phone and Hours */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col text-sm">
            <a href="tel:203-548-9279" className="flex items-center gap-2 font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              203-548-9279
            </a>
            <span className="text-xs text-gray-400">MON - SUN: 7AM - 7PM</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 ml-6">
            <Link href="#contact" className="text-sm hover:text-[#93d9ef] transition-colors">
              CONTACT US
            </Link>
            <Link href="#book" className="text-sm hover:text-[#93d9ef] transition-colors">
              BOOK NOW
            </Link>
          </nav>
        </div>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://ext.same-assets.com/2211206036/2555257938.png"
            alt="Two Men and a Junk Truck"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a1c1e] border-t border-gray-700">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="#contact" className="text-sm hover:text-[#93d9ef]">
              CONTACT US
            </Link>
            <Link href="#book" className="text-sm hover:text-[#93d9ef]">
              BOOK NOW
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
