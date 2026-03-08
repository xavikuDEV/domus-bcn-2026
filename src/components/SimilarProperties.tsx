import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";
import { getSimilarProperties } from "../lib/supabase/queries";

export default async function SimilarProperties({
  currentId,
  tipoOferta,
}: {
  currentId: string;
  tipoOferta: string;
}) {
  const similares = await getSimilarProperties(currentId, tipoOferta);

  if (similares.length === 0) return null;

  return (
    <section className="mt-16 border-t border-gray-100 pt-8 no-print">
      <h2 className="mb-6 text-xl font-bold uppercase tracking-wider text-brand-black">
        Inmuebles Similares
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {similares.map((inmueble) => (
          <Link
            key={inmueble.id}
            href={`/inmueble/${inmueble.id}`}
            className="group block overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-gray-50">
              {inmueble.fotos?.[0] ? (
                <ImageWithFallback
                  src={inmueble.fotos[0]}
                  alt={inmueble.titulo || "Inmueble"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-gray-400">
                  Sin imagen
                </div>
              )}
              {inmueble.tipo_oferta && (
                <div className="absolute top-3 left-3 bg-brand-black px-2 py-1 text-xs font-bold tracking-wider text-white">
                  {inmueble.tipo_oferta.toUpperCase()}
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="line-clamp-2 text-sm font-bold text-brand-black group-hover:text-brand-blue transition-colors">
                {inmueble.titulo}
              </h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-brand-blue">
                  {new Intl.NumberFormat("es-ES").format(inmueble.precio)} €
                </span>
                <span className="text-xs text-brand-gray-dark">
                  {inmueble.ciudad}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
