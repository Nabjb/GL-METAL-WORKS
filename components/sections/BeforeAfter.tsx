"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseMove, handleTouchMove]);

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

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-md sm:max-w-lg mx-auto"
        >
          {/* Labels outside the image */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-gray-500 font-medium">Before</span>
            <span className="text-[10px] text-gray-400">← Drag →</span>
            <span className="text-xs text-gray-500 font-medium">After</span>
          </div>

          {/* Image Container */}
          <div
            ref={containerRef}
            className="relative overflow-hidden cursor-ew-resize select-none border border-gray-200"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {/* After Image (Background - Full) */}
            <div className="relative">
              <Image
                src="/images and videos/after slider.png"
                alt="After - Completed project"
                width={800}
                height={600}
                className="w-full h-auto block"
                draggable={false}
                priority
              />
            </div>

            {/* Before Image (Clipped - Overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="/images and videos/before slider.png"
                alt="Before - Initial state"
                width={800}
                height={600}
                className="w-full h-auto block"
                draggable={false}
                priority
              />
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
              style={{ 
                left: `${sliderPosition}%`,
                boxShadow: '0 0 6px rgba(0,0,0,0.3)'
              }}
            >
              {/* Slider Handle */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white flex items-center justify-center transition-transform shadow-md border border-gray-100 ${
                  isDragging ? "scale-110" : "hover:scale-105"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-400"
                >
                  <path
                    d="M8 12L4 8M4 8L8 4M4 8H11M16 12L20 16M20 16L16 20M20 16H13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

