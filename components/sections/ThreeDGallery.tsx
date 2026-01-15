"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "/pics-whatsapp/imggrid1.jpg", alt: "Metal fabrication project 1" },
  { src: "/pics-whatsapp/imggrid2.jpg", alt: "Metal fabrication project 2" },
  { src: "/pics-whatsapp/imggrid3.jpg", alt: "Metal fabrication project 3" },
  { src: "/pics-whatsapp/imggrid4.jpg", alt: "Metal fabrication project 4" },
  { src: "/pics-whatsapp/imggrid5.jpg", alt: "Metal fabrication project 5" },
  { src: "/pics-whatsapp/imggrid6.jpg", alt: "Metal fabrication project 6" },
  { src: "/pics-whatsapp/imggrid7.jpg", alt: "Metal fabrication project 7" },
  { src: "/pics-whatsapp/imggrid8.jpg", alt: "Metal fabrication project 8" },
  { src: "/pics-whatsapp/imggrid9.jpg", alt: "Metal fabrication project 9" },
];

const GRID_POSITIONS = [
  { top: "10%", left: "10%", width: "24%", height: "26%" },
  { top: "8%", left: "42%", width: "20%", height: "22%" },
  { top: "14%", left: "68%", width: "18%", height: "30%" },
  { top: "38%", left: "6%", width: "22%", height: "28%" },
  { top: "36%", left: "34%", width: "24%", height: "30%" },
  { top: "44%", left: "66%", width: "20%", height: "24%" },
  { top: "70%", left: "18%", width: "28%", height: "20%" },
  { top: "62%", left: "52%", width: "22%", height: "22%" },
  { top: "58%", left: "78%", width: "14%", height: "24%" },
];

const FROM_OFFSETS = [
  { xPercent: -140, yPercent: -80 },
  { xPercent: 130, yPercent: -90 },
  { xPercent: -150, yPercent: 70 },
  { xPercent: 140, yPercent: 120 },
  { xPercent: 90, yPercent: -130 },
  { xPercent: -110, yPercent: 140 },
  { xPercent: 120, yPercent: 40 },
  { xPercent: -160, yPercent: 20 },
  { xPercent: 160, yPercent: -40 },
];

export default function ThreeDGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1200",
          scrub: 0.6,
          pin: true,
        },
      });

      imageRefs.current.forEach((el, index) => {
        if (!el) return;
        const from = FROM_OFFSETS[index % FROM_OFFSETS.length];
        gsap.set(el, { willChange: "transform, opacity" });
        timeline.fromTo(
          el,
          {
            opacity: 0,
            xPercent: from.xPercent,
            yPercent: from.yPercent,
            scale: 0.9,
            force3D: true,
          },
          {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            scale: 1,
            duration: 1,
            ease: "none",
            force3D: true,
          },
          index * 0.12
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.25) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/70" />
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <Image
              src="/images and videos/logo.png"
              alt="GL Metal Works"
              width={520}
              height={520}
              className="opacity-15"
            />
          </div>
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.src}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className="absolute overflow-hidden rounded-2xl border border-black/10 bg-white transform-gpu"
              style={GRID_POSITIONS[index]}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vw, 20vw"
                quality={70}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
