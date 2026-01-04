"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    title: "Limassol Industrial Complex",
    category: "Warehouse",
    image: "/images and videos/project1.png",
  },
  {
    title: "Nicosia Office Tower",
    category: "Structural",
    image: "/images and videos/project2.png",
  },
  {
    title: "Luxury Villa Staircase",
    category: "Staircase",
    image: "/images and videos/project3.png",
  },
];

export default function ProjectsCTA() {
  return (
    <section className="bg-silver-light py-24 sm:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
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
              className="group inline-flex items-center gap-2 px-6 py-3 bg-steel text-white font-medium rounded-full hover:bg-steel-dark transition-colors"
            >
              View All Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href="/projects" className="group block">
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

