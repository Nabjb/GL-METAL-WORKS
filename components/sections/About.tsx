"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
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
              <span className="text-xs text-gray-400 tracking-widest uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-[1.1] mb-6">
              Built on Experience.{" "}
              <span className="text-steel">Driven by Precision.</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              With over 30 years of experience in metal construction and
              fabrication, we have delivered 200+ completed projects across
              industrial, commercial, and custom steel applications.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-3 gap-8 mb-20 pb-20 border-b border-gray-100"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Story + Differentiators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-600 leading-relaxed mb-10">
                Founded in 1990, our company combines engineering expertise with
                hands-on production excellence, ensuring every project meets the
                highest standards of safety, durability, and craftsmanship.
              </p>

              {/* What Sets Us Apart */}
              <div>
                <h3 className="text-sm text-gray-400 tracking-widest uppercase mb-6">
                  What Sets Us Apart
                </h3>
                <ul className="space-y-4">
                  {differentiators.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-steel rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right - Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-sm text-gray-400 tracking-widest uppercase mb-8">
                Leadership
              </h3>

              <div className="space-y-8">
                {leadership.map((person, i) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="border-l-2 border-steel/20 pl-6 hover:border-steel transition-colors duration-300"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {person.name}
                    </h4>
                    <p className="text-sm text-steel font-medium mb-3">
                      {person.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {person.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 pt-16 border-t border-gray-100 text-center"
          >
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              From concept to completion, we don't just build metal structures.
              <br />
              <span className="text-gray-900 font-medium">
                We build solutions that last.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

