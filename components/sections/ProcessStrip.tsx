"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Design & Engineering",
    detail: "Concept development, structural calculations, and shop drawings.",
    stat: "30+ years",
  },
  {
    title: "Fabrication",
    detail: "Precision cutting, welding, and finishing in our workshop.",
    stat: "200+ builds",
  },
  {
    title: "Installation",
    detail: "On-site assembly with safety-first planning and execution.",
    stat: "Full-service",
  },
  {
    title: "Final Inspection",
    detail: "Quality checks, load verification, and client handover.",
    stat: "Zero guesswork",
  },
];

export default function ProcessStrip() {
  return (
    <section className="relative bg-gray-900 py-16 sm:py-20">
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
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            Our Process
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            From Concept to Completion
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
            A clear, disciplined workflow keeps every project on schedule and
            on spec.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="rounded-2xl border border-white/20 bg-white/5 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">{step.detail}</p>
              <div className="mt-6 text-sm font-medium text-white/80">
                {step.stat}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
