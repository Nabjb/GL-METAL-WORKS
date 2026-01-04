"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image
                src="/images and videos/logo.png"
                alt="GL Metal Works Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:block text-sm font-medium text-white">
              GL Metal Works
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/#contact"
            className="hidden md:block text-sm font-medium text-white bg-steel hover:bg-steel-light px-4 py-2 transition-colors duration-200"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-white"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-px bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-5 h-px bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-px bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-white/70 hover:text-white px-2 py-2.5 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-white bg-steel hover:bg-steel-light px-4 py-2.5 mt-2 text-center transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

