"use client";

import { motion } from "framer-motion";
import {
  ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
} from "@/components/ui/cta-section-with-gallery";
import { Button } from "@/components/ui/button";

const IMAGES = [
  "/pics-whatsapp/imggrid3.jpg",
  "/pics-whatsapp/imggrid4.jpg",
  "/pics-whatsapp/imggrid8.jpg",
  "/pics-whatsapp/imggrid14.jpg",
];

export default function BeforeAfter() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md mx-auto mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            From Blueprint to Reality
          </h2>
          <p className="text-gray-500 text-sm">
            See how we transform spaces into steel structures.
          </p>
        </motion.div>

        {/* CTA + Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full"
        >
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-8 py-12 md:grid-cols-2">
            <ContainerStagger>
              <ContainerAnimated className="mb-4 block text-xs font-medium text-rose-500 md:text-sm">
                Built to Last
              </ContainerAnimated>
              <ContainerAnimated className="text-4xl font-semibold tracking-tight md:text-[2.4rem]">
                Metalwork That Elevates Your Space
              </ContainerAnimated>
              <ContainerAnimated className="my-4 text-base text-slate-700 md:my-6 md:text-lg">
                From custom staircases and railings to structural steel and
                architectural features, we design, fabricate, and install with
                precision and care.
              </ContainerAnimated>
              <ContainerAnimated>
                <Button className="bg-rose-500">Request a Quote</Button>
              </ContainerAnimated>
            </ContainerStagger>

            <GalleryGrid>
              {IMAGES.map((imageUrl, index) => (
                <GalleryGridCell index={index} key={imageUrl}>
                  <img
                    className="size-full object-cover object-center"
                    width="100%"
                    height="100%"
                    src={imageUrl}
                    alt="GL Metal Works project detail"
                  />
                </GalleryGridCell>
              ))}
            </GalleryGrid>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
