"use client";

import { useState } from "react";
import ImageWithFallback from "./ImageWithFallback";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function PropertyGallerySwiper({ fotos, titulo }: { fotos?: string[]; titulo?: string }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (!fotos || fotos.length === 0) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-gray-50 flex items-center justify-center">
        <span className="text-gray-400">Sin imágenes disponibles</span>
      </div>
    );
  }

  // If only 1 photo, no need for the Swiper slider
  if (fotos.length === 1) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-gray-50">
        <ImageWithFallback
          src={fotos[0]}
          alt={titulo || "Inmueble"}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
          priority
        />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Main Slider */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        } as React.CSSProperties}
        modules={[Navigation, Thumbs, A11y]}
        navigation
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="w-full aspect-video bg-gray-100 rounded-sm overflow-hidden"
      >
        {fotos.map((src, idx) => (
          <SwiperSlide key={`main-${idx}`}>
            <div className="relative w-full h-full">
              <ImageWithFallback
                src={src}
                alt={`${titulo || "Inmueble"} - Foto ${idx + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbs Slider */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        slidesPerView={4}
        spaceBetween={8}
        breakpoints={{
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="w-full h-20 md:h-24 no-print cursor-pointer"
      >
        {fotos.map((src, idx) => (
          <SwiperSlide key={`thumb-${idx}`} className="opacity-60 [&.swiper-slide-thumb-active]:opacity-100 transition-opacity">
            <div className="relative w-full h-full bg-gray-100 rounded-sm overflow-hidden border-2 border-transparent [&::-moz-focus-inner]:border-none [&.swiper-slide-thumb-active]:border-brand-blue">
              <ImageWithFallback
                src={src}
                alt={`Miniatura ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 25vw, 15vw"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
