"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const galleryImages = [
  { src: "/pics-whatsapp/imggrid1.jpg" },
  { src: "/pics-whatsapp/imggrid2.jpg" },
  { src: "/pics-whatsapp/imggrid3.jpg" },
  { src: "/pics-whatsapp/imggrid4.jpg" },
  { src: "/pics-whatsapp/imggrid5.jpg" },
  { src: "/pics-whatsapp/imggrid6.jpg" },
  { src: "/pics-whatsapp/imggrid7.jpg" },
  { src: "/pics-whatsapp/imggrid8.jpg" },
  { src: "/pics-whatsapp/imggrid9.jpg" },
  { src: "/pics-whatsapp/imggrid10.jpg" },
  { src: "/pics-whatsapp/imggrid11.jpg" },
  { src: "/pics-whatsapp/imggrid12.jpg" },
  { src: "/pics-whatsapp/imggrid13.jpg" },
  { src: "/pics-whatsapp/imggrid14.jpg" },
  { src: "/pics-whatsapp/imggrid15.jpg" },
  { src: "/pics-whatsapp/imggrid16.jpg" }
].map((image, index) => {
  const isPortrait = index % 3 === 0;

  return {
    alt: `Gallery image ${index + 1}`,
    src: image.src,
    ratio: isPortrait ? 3 / 4 : 16 / 9,
  };
});

export function ImageGallery() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-10 px-4">
      <div className="mx-auto grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, col) => (
          <div key={col} className="grid gap-6">
            {galleryImages
              .filter((_, index) => index % 3 === col)
              .map((image) => (
                <AnimatedImage
                  key={image.src}
                  alt={image.alt}
                  src={image.src}
                  ratio={image.ratio}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface AnimatedImageProps {
  alt: string;
  src: string;
  className?: string;
  placeholder?: string;
  ratio: number;
}

function AnimatedImage({ alt, src, ratio, placeholder }: AnimatedImageProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isLoading, setIsLoading] = React.useState(true);

  const [imgSrc, setImgSrc] = React.useState(src);

  const handleError = () => {
    if (placeholder) {
      setImgSrc(placeholder);
    }
  };

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      className="bg-accent relative size-full rounded-lg border"
    >
      <img
        alt={alt}
        src={imgSrc}
        className={cn(
          "size-full rounded-lg object-cover opacity-0 transition-all duration-1000 ease-in-out",
          {
            "opacity-100": isInView && !isLoading,
          }
        )}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        onError={handleError}
      />
    </AspectRatio>
  );
}
