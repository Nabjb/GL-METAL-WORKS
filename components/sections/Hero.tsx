"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

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
    <section id="home" className="relative min-h-screen bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.25) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/70" />
      {/* Mobile Menu Button - Fixed in white space top-right */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-gray-900 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white transition-all duration-200"
        aria-label="Toggle menu"
      >
        <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
        <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu Dropdown - Fixed overlay with glassmorphism */}
      <div 
        className={`lg:hidden fixed top-16 right-4 z-40 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
        style={{
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="flex flex-col min-w-[200px] py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm text-gray-900 hover:bg-white/30 px-4 py-3 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Outer container */}
      <div className="h-screen">
        {/* SVG Clip Path Definitions */}
        <svg width="0" height="0" className="absolute">
          <defs>
            {/* Full-bleed clip-path */}
            <clipPath id="heroClipMobile" clipPathUnits="objectBoundingBox">
              <path d="
                M 0.005 0
                Q 0 0, 0 0.005
                L 0 0.995
                Q 0 1, 0.005 1
                L 0.995 1
                Q 1 1, 1 0.995
                L 1 0.005
                Q 1 0, 0.995 0
                L 0.005 0
                Z
              " />
            </clipPath>
            <clipPath id="heroClipDesktop" clipPathUnits="objectBoundingBox">
              <path d="
                M 0.005 0
                Q 0 0, 0 0.005
                L 0 0.995
                Q 0 1, 0.005 1
                L 0.995 1
                Q 1 1, 1 0.995
                L 1 0.005
                Q 1 0, 0.995 0
                L 0.005 0
                Z
              " />
            </clipPath>
          </defs>
        </svg>

        {/* Responsive clip-path styles */}
        <style dangerouslySetInnerHTML={{__html: `
          .hero-frame {
            clip-path: url(#heroClipMobile);
          }
          @media (min-width: 1024px) {
            .hero-frame {
              clip-path: url(#heroClipDesktop);
            }
          }
        `}} />

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative w-full h-full hero-frame"
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

          </nav>

          {/* Main Content */}
          <div className="relative z-10 h-[calc(100%-80px)] flex items-center px-6 sm:px-8 lg:px-12">
            <div className="max-w-[40rem]">
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
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4 leading-[1.06]"
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
                className="text-base text-white/65 mb-7 leading-relaxed max-w-lg"
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
                className="mt-2 flex flex-wrap items-center gap-4"
              >
                <MovingBorderButton
                  as="a"
                  href="#services"
                  borderRadius="9999px"
                  duration={5000}
                  containerClassName="!h-auto !w-auto"
                  className="!bg-steel hover:!bg-steel-light !border-transparent !text-white !text-sm !font-medium !px-6 !py-3.5 transition-all duration-300"
                  borderClassName="bg-[radial-gradient(rgba(255,255,255,0.8)_50%,transparent_80%)]"
                >
                  <span className="inline-flex items-center gap-2">
                    Explore Our Services
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </MovingBorderButton>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0.6}
                className="flex items-center gap-6 mt-10"
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

        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-[10px] tracking-[0.35em] uppercase">Scroll</span>
            <span className="h-8 w-px bg-white/40" />
          </div>
        </div>

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
