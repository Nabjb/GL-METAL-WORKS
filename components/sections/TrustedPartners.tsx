"use client";

import { motion } from "framer-motion";

const partners = [
  "Atlas Developments",
  "Cyprus Steel Group",
  "Harbor Logistics",
  "Kestrel Architects",
  "Aegis Constructions",
  "Lumen Retail",
];

export default function TrustedPartners() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Trusted Partners
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-gray-900 sm:text-3xl">
            Built With Teams Who Value Precision
          </h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Long-term collaborations with developers, architects, and builders
            across Cyprus.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="rounded-xl border border-black/5 bg-[#f6f4ef] px-4 py-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-600"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
