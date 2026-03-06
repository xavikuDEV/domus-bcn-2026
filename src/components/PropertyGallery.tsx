import { getInmuebles } from "../lib/supabase/queries";
import PropertyCard from "./PropertyCard";

export default async function PropertyGallery() {
  const inmuebles = await getInmuebles();

  if (inmuebles.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <div className="mx-auto max-w-md rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 dark:border-slate-600 dark:bg-slate-800/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mx-auto mb-4 h-12 w-12 text-slate-300 dark:text-slate-600"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625A1.875 1.875 0 0 1 3.75 19.875v-6.198a.75.75 0 0 1 .091-.086L12 5.432Z" />
          </svg>
          <h3 className="mb-2 text-lg font-semibold text-slate-700 dark:text-slate-200">
            No hay inmuebles disponibles
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Los inmuebles aparecerán aquí cuando se sincronicen desde Inmovilla.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white sm:text-3xl">
            Inmuebles disponibles
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {inmuebles.length} {inmuebles.length === 1 ? "resultado" : "resultados"}
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {inmuebles.map((inmueble) => (
          <PropertyCard key={inmueble.id} inmueble={inmueble} />
        ))}
      </div>
    </section>
  );
}
