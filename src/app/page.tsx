import Link from "next/link";
import Navbar from "../components/Navbar";
import PropertyGallery from "../components/PropertyGallery";
import HeroSearchBar from "../components/HeroSearchBar";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar (fixed, glass) */}
      <Navbar />

      {/* Hero Section — imagen de fondo + overlay oscuro suave */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
        {/* Background image — Luxury Barcelona */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        {/* Overlay oscuro suave para legibilidad */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto max-w-4xl pt-16">
          <h1 className="text-3xl font-black uppercase leading-tight tracking-wider text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            TU HOGAR EN <span className="text-brand-blue">BARCELONA</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed tracking-wide text-white/80 sm:text-base">
            Expertos inmobiliarios con más de 20 años de experiencia. Compra,
            vende o alquila con la confianza de los mejores profesionales.
          </p>

          {/* Buscador Píldora */}
          <HeroSearchBar />
        </div>
      </section>

      {/* Los Tres Caminos (Botones de Intención) */}
      <section className="relative z-20 -mt-8 px-4 sm:-mt-12">
        <div className="mx-auto flex max-w-5xl flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          {/* Box 1: Comprar */}
          <Link
            href="/inmuebles?operacion=venta"
            className="hover-lift flex flex-1 items-center justify-center gap-3 bg-white p-6 shadow-xl ring-1 ring-gray-900/5 transition-all hover:bg-brand-gray-light sm:p-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-black">
              QUIERO COMPRAR
            </span>
          </Link>

          {/* Box 2: Alquilar */}
          <Link
            href="/inmuebles?operacion=alquiler"
            className="hover-lift flex flex-1 items-center justify-center gap-3 bg-white p-6 shadow-xl ring-1 ring-gray-900/5 transition-all hover:bg-brand-gray-light sm:p-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-black">
              QUIERO ALQUILAR
            </span>
          </Link>

          {/* Box 3: Vender / Valorar */}
          <Link
            href="/valoracion"
            className="hover-lift flex flex-1 items-center justify-center gap-3 bg-brand-blue p-6 shadow-xl shadow-brand-blue/20 transition-all hover:bg-brand-blue-dark sm:p-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-white">
              VALORA TU INMUEBLE
            </span>
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <main className="bg-white">
        <PropertyGallery searchParams={resolvedParams} />
      </main>

      {/* Section Nosotros Placeholder */}
      <section
        id="nosotros"
        className="bg-brand-gray-light px-4 py-20 text-center text-brand-gray"
      >
        {/* Placeholder para la sección nosotros */}
      </section>
    </div>
  );
}
