import { getInmuebles } from "../lib/supabase/queries";
import PropertyCard from "./PropertyCard";

export default async function PropertyGallery() {
  const inmuebles = await getInmuebles();

  if (inmuebles.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <div className="mx-auto max-w-md border border-gray-200 bg-brand-gray-light p-16 dark:border-gray-700 dark:bg-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="mx-auto mb-6 h-16 w-16 text-gray-300 dark:text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
            />
          </svg>
          <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-brand-black dark:text-white">
            SIN INMUEBLES
          </h3>
          <p className="text-sm text-brand-gray">
            Los inmuebles aparecerán aquí cuando se sincronicen desde Inmovilla.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="inmuebles" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-black uppercase tracking-wider text-brand-black dark:text-white sm:text-3xl">
          NUESTROS INMUEBLES
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 bg-brand-blue" />
        <p className="mt-4 text-sm text-brand-gray">
          {inmuebles.length} {inmuebles.length === 1 ? "propiedad" : "propiedades"} disponibles
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {inmuebles.map((inmueble) => (
          <PropertyCard key={inmueble.id} inmueble={inmueble} />
        ))}
      </div>
    </section>
  );
}
