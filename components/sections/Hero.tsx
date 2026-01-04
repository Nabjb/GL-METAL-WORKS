"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Video Background */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute inset-0 w-full h-full"
      >
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="max-w-xl">
          {/* Label */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-steel" />
            <span className="text-xs text-steel/90 tracking-wide uppercase">
              Metal Fabrication
            </span>
          </motion.div>

          {/* Company Name */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.3}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-5 leading-[1.1]"
          >
            Precision steel work,{" "}
            <span className="text-steel">built to last.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.4}
            className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed"
          >
            Structural frameworks, custom metalwork, and architectural
            fabrication for residential and commercial projects.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.5}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-steel hover:bg-steel-light text-white text-sm font-medium transition-colors duration-200"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="px-6 py-3 border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200"
            >
              View Services
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.6}
            className="flex gap-10 mt-12 pt-8 border-t border-white/10"
          >
            {[
              { value: "20+", label: "Years" },
              { value: "500+", label: "Projects" },
              { value: "100%", label: "Quality" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

