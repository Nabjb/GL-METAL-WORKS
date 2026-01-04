"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: "structural-steel",
    title: "Structural Steel Framing",
    description:
      "Residential and commercial building frames engineered for strength, durability, and precision. We handle everything from design to installation.",
    features: ["House skeletons", "Commercial frames", "Industrial structures"],
    image: "/images and videos/steel building frame construction.png",
  },
  {
    id: "metal-staircases",
    title: "Metal Staircases",
    description:
      "Custom-designed stairs that combine form and function. From elegant residential spirals to robust industrial access solutions.",
    features: ["Spiral staircases", "Straight runs", "Industrial access"],
    image: "/images and videos/metal staircase industrial.png",
  },
  {
    id: "warehouse-construction",
    title: "Warehouse Construction",
    description:
      "Complete steel frame solutions for warehouses and industrial facilities. Built to maximize space and withstand the test of time.",
    features: ["Steel frames", "Storage facilities", "Industrial buildings"],
    image: "/images and videos/warehouse steel structure.png",
  },
  {
    id: "architectural-metalwork",
    title: "Architectural Metalwork",
    description:
      "Decorative and functional metal features that elevate any space. Railings, gates, canopies, and bespoke architectural elements.",
    features: ["Railings & balustrades", "Gates & fencing", "Canopies"],
    image: "/images and videos/metal railing modern.png",
  },
  {
    id: "custom-fabrication",
    title: "Custom Fabrication",
    description:
      "Bespoke metal components built to your exact specifications. From prototypes to production runs, we bring your vision to life.",
    features: ["Prototypes", "One-off projects", "Production runs"],
    image: "/images and videos/metal fabrication workshop.png",
  },
  {
    id: "steel-roofing",
    title: "Steel Roofing & Cladding",
    description:
      "Durable roof structures and wall cladding systems designed for longevity and weather resistance. Protection that lasts decades.",
    features: ["Roof structures", "Wall cladding", "Insulated panels"],
    image: "/images and videos/metal roof installation.png",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    // Pause auto-advance briefly after manual interaction
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  }, []);

  const handlePrev = useCallback(() => {
    goPrev();
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  }, [goPrev]);

  const handleNext = useCallback(() => {
    goNext();
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  }, [goNext]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  const current = services[activeIndex];

  return (
    <section id="services" className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 sm:px-8 lg:px-12 flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left content */}
            <div className="lg:col-span-7">
              {/* Section label - static */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-steel" />
                <span className="text-xs text-white/60 tracking-widest uppercase">
                  Our Services
                </span>
              </div>

              {/* Animated content block */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                    },
                    exit: {
                      opacity: 0,
                      transition: { duration: 0.2 },
                    },
                  }}
                >
                  {/* Large number */}
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                    className="block text-7xl sm:text-8xl lg:text-9xl font-bold text-white/10 leading-none"
                  >
                    {String(activeIndex + 1).padStart(2, "0")}
                  </motion.span>

                  {/* Title */}
                  <motion.h2
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] -mt-6 sm:-mt-10 mb-5"
                  >
                    {current.title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                    className="text-base sm:text-lg text-white/70 leading-relaxed max-w-lg mb-6"
                  >
                    {current.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.3 } },
                    }}
                    className="flex flex-wrap gap-2 mb-8"
                  >
                    {current.features.map((feature, i) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        className="text-xs text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1.5 border border-white/10"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                  >
                    <Link
                      href={`/services#${current.id}`}
                      className="inline-flex items-center gap-2 text-sm text-white font-medium border-b border-white/30 pb-1 hover:border-white transition-colors duration-200"
                    >
                      <span>View service details</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side - Navigation */}
            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="flex lg:flex-col items-center gap-4">
                {/* Service indicators */}
                <div className="flex lg:flex-col items-center gap-3">
                  {services.map((service, i) => (
                    <button
                      key={service.id}
                      onClick={() => goTo(i)}
                      className="group flex items-center gap-3 py-1"
                    >
                      {/* Label - always visible on active, hover on others */}
                      <span
                        className={`hidden lg:block text-xs text-right transition-all duration-300 overflow-hidden whitespace-nowrap ${
                          i === activeIndex
                            ? "text-white opacity-100 max-w-[100px]"
                            : "text-white/50 opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[100px]"
                        }`}
                      >
                        {service.title.split(" ").slice(0, 2).join(" ")}
                      </span>
                      {/* Dot/Bar indicator */}
                      <span
                        className={`block transition-all duration-300 ${
                          i === activeIndex
                            ? "w-6 h-1.5 bg-steel"
                            : "w-2 h-2 bg-white/30 group-hover:bg-white/60"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Prev/Next arrows */}
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous service"
                    className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-white/70"
                    >
                      <path
                        d="M10 12L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next service"
                    className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-white/70"
                    >
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom counter */}
      <div className="absolute bottom-8 left-6 sm:left-8 lg:left-12 flex items-center gap-4">
        <span className="text-sm text-white/40 font-medium">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <div className="w-12 h-px bg-white/20">
          <motion.div
            className="h-full bg-steel origin-left"
            animate={{ scaleX: (activeIndex + 1) / services.length }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="text-sm text-white/40 font-medium">
          {String(services.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}

