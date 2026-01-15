"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const trustedPartners = [
  "Atlas Developments",
  "Cyprus Steel Group",
  "Harbor Logistics",
  "Kestrel Architects",
  "Aegis Constructions",
  "Lumen Retail",
];

const featuredProjects = [
  {
    title: "Limassol Industrial Complex",
    category: "Warehouse",
    image: "/images and videos/project1.png",
    detail: "38,000 m² steel framework",
  },
  {
    title: "Nicosia Office Tower",
    category: "Structural",
    image: "/images and videos/project2.png",
    detail: "High-rise core and façade steel",
  },
  {
    title: "Luxury Villa Staircase",
    category: "Staircase",
    image: "/images and videos/project3.png",
    detail: "Custom floating steel treads",
  },
];

export default function ProjectsCTA() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.25) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/70" />
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-steel" />
              <span className="text-xs text-gray-400 tracking-widest uppercase">
                Our Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-[1.1] mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600">
              From industrial warehouses to custom staircases, see how we bring
              precision engineering to every project.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-steel text-white font-medium hover:bg-steel-dark transition-colors"
            >
              View All Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        {/* Featured Projects Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group rounded-3xl border border-black/10 bg-white/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
          >
            <Link href="/projects" className="block">
              <div className="relative h-[320px] overflow-hidden rounded-2xl md:h-[420px]">
                <Image
                  src={featuredProjects[0].image}
                  alt={featuredProjects[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {featuredProjects[0].category}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    {featuredProjects[0].detail}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="grid gap-6">
            {featuredProjects.slice(1).map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-3xl border border-black/10 bg-white/90 p-5 shadow-[0_16px_36px_rgba(0,0,0,0.1)]"
              >
                <Link href="/projects" className="block">
                  <div className="relative h-48 overflow-hidden rounded-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                        {project.category}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs text-white/80">
                        {project.detail}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { value: "200+", label: "Projects Completed" },
            { value: "30+", label: "Years of Fabrication" },
            { value: "Full-Service", label: "Design to Install" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-black/10 bg-white/90 px-6 py-5 text-center shadow-sm"
            >
              <p className="text-lg font-semibold text-gray-900">{item.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-black/10 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              Trusted Partners
            </p>
            <h3 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">
              Building With Teams Who Value Precision
            </h3>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Long-term collaborations with developers, architects, and builders
              across Cyprus.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {trustedPartners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="rounded-xl border border-black/10 bg-white/90 px-4 py-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 shadow-sm"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
