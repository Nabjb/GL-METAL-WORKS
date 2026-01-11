"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <section id="home" className="relative min-h-screen bg-[#f5f5f5]">
      {/* Outer padding container */}
      <div className="p-3 sm:p-4 lg:p-5 h-screen">
        {/* SVG Clip Path Definition */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
              {/* 
                Rectangular frame with top-right z-shaped notch:
                - Top edge: from left, go right to x=0.82, then down (vertical), then right (horizontal), then down (vertical) - z shape
                - Right edge: continue down
                - Minimal rounding on other corners
              */}
              <path d="
                M 0.005 0
                Q 0 0, 0 0.005
                L 0 0.995
                Q 0 1, 0.005 1
                L 0.995 1
                Q 1 1, 1 0.995
                L 1 0.08
                L 0.82 0.08
                L 0.82 0
                Q 0.82 0, 0.815 0
                L 0.005 0
                Z
              " />
            </clipPath>
          </defs>
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative w-full h-full"
          style={{ clipPath: 'url(#heroClip)' }}
        >
          {/* Video Background */}
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <div className="absolute inset-0 w-[120%] h-[110%] -left-[10%] -top-[5%]">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/images and videos/hero_background_video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
          </motion.div>

          {/* Integrated Navbar */}
          <nav className="relative z-20 px-6 sm:px-8 lg:px-12 py-5">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
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
                  GL METAL WORKS
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
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

              {/* CTA Button - positioned in the notch area */}
              <div className="hidden lg:block" />
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-80 mt-4" : "max-h-0"}`}>
              <div className="flex flex-col gap-1 pt-4 border-t border-white/10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm text-white/70 hover:text-white py-2.5 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button - Fixed position */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden absolute top-5 right-6 z-30 w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          {/* Main Content */}
          <div className="relative z-10 h-[calc(100%-80px)] flex items-center px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              {/* Label */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0.2}
                className="flex items-center gap-3 mb-5"
              >
                <span className="inline-flex items-center gap-2 text-xs text-white/70 tracking-wide uppercase">
                  <span className="w-8 h-px bg-steel" />
                  Metal Fabrication
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0.3}
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-5 leading-[1.1]"
              >
                LET&apos;S BUILD{" "}
                <span className="text-steel">SMART</span>
                <br />
                <span className="text-steel">STRUCTURES!</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0.4}
                className="text-base text-white/60 mb-8 leading-relaxed max-w-md"
              >
                From structural frameworks to custom metalwork, we deliver 
                architectural fabrication for commercial and residential projects.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0.5}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-steel hover:bg-steel-light text-white text-sm font-medium rounded-full transition-colors duration-200"
                >
                  Explore Our Services
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0.6}
                className="flex items-center gap-6 mt-12"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full bg-steel/80 border-2 border-white/20 flex items-center justify-center text-[10px] text-white font-medium"
                      >
                        {i === 1 ? 'CL' : i === 2 ? 'PL' : 'GL'}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">+8k</p>
                    <p className="text-[10px] text-white/50 uppercase tracking-wide">Satisfied Clients</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating Card - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 hidden md:block"
          >
            <a 
              href="/projects"
              className="group block bg-white/10 backdrop-blur-md border border-white/10 px-5 py-4 rounded-xl hover:bg-white/15 transition-all duration-300 max-w-[200px]"
            >
              <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Explore</p>
              <p className="text-sm text-white font-medium mb-2">Steel Construction Projects</p>
              <span className="inline-flex items-center gap-1.5 text-xs text-steel group-hover:gap-2 transition-all duration-200">
                Let&apos;s Talk
                <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          </motion.div>

          {/* Social Links - Left Side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3"
          >
            <span className="text-[9px] text-white/30 uppercase tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>
              Follow Us
            </span>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex flex-col gap-2">
              {['F', 'X', 'In'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-7 h-7 flex items-center justify-center text-[9px] text-white/40 hover:text-white border border-white/10 hover:border-white/30 rounded-full transition-all duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button - Positioned in the notch cutout area */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-7 sm:top-8 lg:top-9 right-7 sm:right-8 lg:right-9 hidden lg:block z-30"
        >
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 px-5 py-2.5 rounded-full transition-colors duration-200 shadow-lg"
          >
            Get Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

