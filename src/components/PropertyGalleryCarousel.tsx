"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertyCard from "./PropertyCard";
import type { InmuebleInmovilla } from "../lib/supabase/queries";
import "../styles/swiper-custom.css";

export default function PropertyGalleryCarousel({ inmuebles }: { inmuebles: InmuebleInmovilla[] }) {
  if (!inmuebles || inmuebles.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden px-4 md:px-16">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: '.gallery-next',
          prevEl: '.gallery-prev',
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="pb-12"
      >
        {inmuebles.map((inmueble) => (
          <SwiperSlide key={inmueble.id} className="h-auto">
            <PropertyCard inmueble={inmueble} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons (Minimalist & Outside Content) */}
      <button className="gallery-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-gray-100 shadow-sm text-brand-black hover:bg-white hover:text-brand-blue hover:shadow-md transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button className="gallery-next absolute right-0 top-1/2 z-10 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-gray-100 shadow-sm text-brand-black hover:bg-white hover:text-brand-blue hover:shadow-md transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}
