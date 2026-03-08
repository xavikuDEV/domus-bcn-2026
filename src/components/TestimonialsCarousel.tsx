"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Carlos Martínez",
    role: "Comprador de Ático en Eixample",
    text: "El nivel de servicio de Domus BCN es espectacular. Encontraron exactamente el ático que estaba buscando en tiempo récord, encargándose de todo el papeleo. Una experiencia puramente de lujo.",
    rating: 5,
  },
  {
    id: 2,
    name: "Laura Gómez",
    role: "Vendedora en Gràcia",
    text: "Vendí mi propiedad a través de ellos y el trato fue exquisito. Saben cómo presentar y valorar un inmueble de alto standing. Recomendables 100%.",
    rating: 5,
  },
  {
    id: 3,
    name: "Familia Roig",
    role: "Alquiler en zona alta",
    text: "Buscábamos una casa representativa para alquilar y el equipo de Domus entendió nuestras necesidades al instante. Auténticos profesionales del sector prime en Barcelona.",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="bg-brand-gray-light px-4 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-black uppercase tracking-wider text-brand-black sm:text-3xl">
          LO QUE CUESTAN NUESTROS CLIENTES
        </h2>
        <div className="mx-auto mt-3 mb-12 h-1 w-16 bg-brand-blue" />

        <div className="relative px-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            className="pb-12"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="mx-auto max-w-3xl rounded-sm bg-white p-10 shadow-sm md:p-14">
                  <div className="flex items-center justify-center gap-1 mb-6 text-brand-blue">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg md:text-xl font-medium italic text-brand-gray leading-relaxed mb-6">
                    "{t.text}"
                  </p>
                  <p className="font-bold text-brand-black uppercase tracking-widest text-sm mb-1">{t.name}</p>
                  <p className="text-xs text-brand-gray-dark uppercase tracking-widest">{t.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
