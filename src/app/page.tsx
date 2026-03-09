import Link from "next/link";
import Navbar from "../components/Navbar";
import PropertyGallery from "../components/PropertyGallery";
import HeroSearchBar from "../components/HeroSearchBar";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

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
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
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
        </div>
      </section>

      {/* Buscador Píldora (Debajo del Hero) */}
      <section className="relative bg-brand-gray-light py-8 px-4 border-b border-gray-200">
        <div className="mx-auto max-w-5xl -mt-16 sm:-mt-20">
          <HeroSearchBar />
        </div>
      </section>

      {/* Banner / Contador de Éxitos */}
      <section className="bg-brand-black px-4 py-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#d4af37] md:text-sm">
          +500 Clientes satisfechos{" "}
          <span className="mx-2 hidden sm:inline opacity-50">|</span>
          <br className="sm:hidden" /> 15 Años de experiencia{" "}
          <span className="mx-2 hidden sm:inline opacity-50">|</span>
          <br className="sm:hidden" /> Especialistas en Barcelona
        </p>
      </section>

      {/* Los Tres Caminos (Botones de Intención) */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto flex max-w-5xl flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          {/* Box 1: Comprar */}
          <Link
            href="/inmuebles?operacion=venta"
            className="hover-lift flex flex-1 flex-col items-center justify-center gap-4 bg-white p-8 shadow-sm ring-1 ring-gray-900/5 hover:shadow-xl transition-all duration-500 hover:ring-brand-blue/30"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/5 text-brand-blue transition-colors duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
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
            <span className="text-xs font-bold uppercase tracking-widest text-brand-black transition-colors duration-300">
              QUIERO COMPRAR
            </span>
          </Link>

          {/* Box 2: Alquilar */}
          <Link
            href="/inmuebles?operacion=alquiler"
            className="hover-lift flex flex-1 flex-col items-center justify-center gap-4 bg-white p-8 shadow-sm ring-1 ring-gray-900/5 hover:shadow-xl transition-all duration-500 hover:ring-brand-blue/30"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/5 text-brand-blue transition-colors duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
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
            <span className="text-xs font-bold uppercase tracking-widest text-brand-black transition-colors duration-300">
              QUIERO ALQUILAR
            </span>
          </Link>

          {/* Box 3: Vender / Valorar */}
          <Link
            href="/valoracion"
            className="hover-lift flex flex-1 flex-col items-center justify-center gap-4 bg-brand-blue p-8 shadow-sm transition-all duration-500 hover:bg-brand-blue-dark hover:shadow-brand-blue/20"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
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
            <span className="text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300">
              VALORA TU INMUEBLE
            </span>
          </Link>
        </div>
      </section>

      {/* Por qué Domus BCN */}
      <section className="bg-brand-gray-light px-4 py-20 pb-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-black uppercase tracking-wider text-brand-black sm:text-3xl">
            POR QUÉ DOMUS BCN
          </h2>
          <div className="mx-auto mt-3 mb-16 h-1 w-16 bg-[#d4af37]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <span className="flex h-16 w-16 mb-6 items-center justify-center rounded-full bg-white text-[#d4af37] shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-black mb-3">
                Exclusividad Garantizada
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                Seleccionamos las propiedades más extraordinarias de la ciudad
                condal para un público exigente.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="flex h-16 w-16 mb-6 items-center justify-center rounded-full bg-white text-[#d4af37] shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-black mb-3">
                Expertos Locales
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                Dominamos cada barrio de Barcelona, garantizando asesoramiento
                preciso y conocimiento profundo del mercado.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="flex h-16 w-16 mb-6 items-center justify-center rounded-full bg-white text-[#d4af37] shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </span>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-black mb-3">
                Valoración Real
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                Optimizamos el valor real de su inmueble analizando a fondo las
                tendencias y el potencial de rentabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <main className="bg-white">
        <PropertyGallery searchParams={resolvedParams} />
      </main>

      {/* Instagram Lifestyle Placeholder */}
      <section className="bg-white py-2">
        <div className="flex w-full overflow-hidden">
          <div className="w-1/5 h-48 sm:h-64 bg-gray-200 relative group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=500&q=80"
              alt="Lifestyle 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-300" />
          </div>
          <div className="w-1/5 h-48 sm:h-64 bg-gray-300 relative group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1562923616-e5ee2bdfeb38?auto=format&fit=crop&w=500&q=80"
              alt="Lifestyle 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-300" />
          </div>
          <div className="w-1/5 h-48 sm:h-64 bg-gray-200 relative group cursor-pointer flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&w=500&q=80"
              alt="Lifestyle 3"
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/60 transition-colors duration-300 z-10 flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-widest">
                @domusbcn
              </span>
            </div>
          </div>
          <div className="w-1/5 h-48 sm:h-64 bg-gray-300 relative group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1506505712530-9b48f65ebcc3?auto=format&fit=crop&w=500&q=80"
              alt="Lifestyle 4"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-300" />
          </div>
          <div className="w-1/5 h-48 sm:h-64 bg-gray-200 relative group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1541885061690-e223aaed42d0?auto=format&fit=crop&w=500&q=80"
              alt="Lifestyle 5"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-300" />
          </div>
        </div>
      </section>

      {/* Testimonios recuperados */}
      <TestimonialsCarousel />
    </div>
  );
}
