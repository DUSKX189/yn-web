"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type FajaGalleryProps = {
  images: string[];
  alt: string;
};

export default function FajaGallery({ images, alt }: FajaGalleryProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-cream-dark">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} - foto ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={i === 0}
          loading={i === 0 ? undefined : "eager"}
        />
      ))}

      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver foto ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
