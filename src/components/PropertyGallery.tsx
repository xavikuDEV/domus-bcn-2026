import { getInmuebles } from "../lib/supabase/queries";
import PropertyCard from "./PropertyCard";
import PropertyGalleryCarousel from "./PropertyGalleryCarousel";

interface PropertyGalleryProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function PropertyGallery({
  searchParams,
}: PropertyGalleryProps) {
  const tipo = Array.isArray(searchParams?.tipo)
    ? searchParams.tipo[0]
    : searchParams?.tipo;
  const ciudad = Array.isArray(searchParams?.ciudad)
    ? searchParams.ciudad[0]
    : searchParams?.ciudad;
  const operacion = Array.isArray(searchParams?.operacion)
    ? searchParams.operacion[0]
    : searchParams?.operacion;

  const inmuebles = await getInmuebles({ tipo, ciudad, operacion });

  if (inmuebles.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <div className="mx-auto max-w-md border border-gray-100 bg-brand-gray-light p-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="mx-auto mb-6 h-16 w-16 text-gray-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
            />
          </svg>
          <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-brand-black">
            SIN INMUEBLES
          </h3>
          <p className="text-sm text-brand-gray">
            Los inmuebles aparecer\u00e1n aqu\u00ed cuando se sincronicen desde
            Inmovilla.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="inmuebles"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Section header */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-black uppercase tracking-wider text-brand-black sm:text-3xl">
          NUESTROS INMUEBLES
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 bg-brand-blue" />
        <p className="mt-4 text-sm text-brand-gray">
          {inmuebles.length}{" "}
          {inmuebles.length === 1 ? "propiedad" : "propiedades"} disponibles
        </p>
      </div>

      {/* Swiper Carousel instead of Grid */}
      <PropertyGalleryCarousel inmuebles={inmuebles} />

      <div className="mt-12 text-center no-print">
        <a
          href="/inmuebles"
          className="inline-flex items-center gap-2 rounded-sm bg-brand-black px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-brand-blue"
        >
          Ver todos los inmuebles
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
