"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 1990, suffix: "", label: "Founded" },
];

function CountUp({
  target,
  suffix,
  duration = 2,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(target); // Start at target to prevent flash of 0
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || hasAnimated) return;
    
    setHasAnimated(true);
    setCount(0); // Reset to 0 to start animation
    
    const startTime = performance.now();
    const startValue = target > 1000 ? target - 50 : 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (target - startValue) * eased);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target); // Ensure we end at exact target
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const differentiators = [
  "Decades of real-world experience, not theory",
  "End-to-end control from design to fabrication to installation",
  "Industrial-grade quality with attention to detail",
  "Long-term partnerships built on trust and results",
];

const leadership = [
  {
    name: "Christos Leonida",
    role: "Mechanical Engineer",
    description:
      "Responsible for engineering design, structural solutions, and technical supervision.",
  },
  {
    name: "Panikos Leonida",
    role: "Head of Production",
    description:
      "Oversees fabrication, quality control, and on-site execution, ensuring precision at every stage.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-gray-900 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900/80" />
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-steel" />
              <span className="text-xs text-white/70 tracking-[0.3em] uppercase">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] mb-6">
              Built on Experience.{" "}
              <span className="text-steel">Driven by Precision.</span>
            </h2>

            <p className="text-lg text-white/75 leading-relaxed max-w-3xl">
              With over 30 years of experience in metal construction and
              fabrication, we have delivered 200+ completed projects across
              industrial, commercial, and custom steel applications.
            </p>
          </motion.div>

          {/* Intro grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <p className="text-white/75 leading-relaxed mb-10">
                Founded in 1990, our company combines engineering expertise with
                hands-on production excellence, ensuring every project meets the
                highest standards of safety, durability, and craftsmanship.
              </p>

              {/* What Sets Us Apart */}
              <div>
                <h3 className="text-xs text-white/70 tracking-[0.3em] uppercase mb-6">
                  What Sets Us Apart
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {differentiators.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.2 + i * 0.05 }}
                      className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 shadow-sm"
                    >
                      <span className="block text-sm text-white/80">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl">
                <Image
                  src="/images and videos/metal fabrication workshop.png"
                  alt="Metal fabrication workshop"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-black/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white">
                  Established 1990
                </div>
              </div>
              <div className="absolute -top-6 -right-6 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">
                  Signature
                </p>
                <p className="text-lg font-semibold text-gray-900">GL Metal Works</p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 gap-6 mb-20 pb-20 border-b border-white/10 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-6 text-center shadow-sm sm:text-left"
              >
                <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Leadership */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xs text-white/70 tracking-[0.3em] uppercase mb-8">
                Leadership
              </h3>

              <div className="space-y-6">
                {leadership.map((person, i) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="rounded-2xl border border-white/15 bg-white/5 px-6 py-6 shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
                      {person.role}
                    </p>
                    <h4 className="text-2xl font-semibold text-white mb-3">
                      {person.name}
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {person.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center"
            >
              <div className="rounded-3xl border border-white/15 bg-white/5 p-8 shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Our Promise
                </h3>
                <p className="text-white/75 leading-relaxed mb-6">
                  We approach every project with a craftsman&apos;s mindset,
                  balancing structural performance with a refined finish that
                  elevates the space around it.
                </p>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <span className="inline-flex h-2 w-2 rounded-full bg-steel" />
                  Safety-first planning
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70 mt-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-steel" />
                  Precision fabrication
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70 mt-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-steel" />
                  On-time delivery
                </div>
              </div>
            </motion.div>
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 pt-16 border-t border-white/10 text-center"
          >
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              From concept to completion, we don't just build metal structures.
              <br />
              <span className="text-white font-medium">
                We build solutions that last.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
