import ImageWithFallback from "./ImageWithFallback";
import Link from "next/link";
import type { InmuebleInmovilla } from "../types/inmovilla";

interface PropertyCardProps {
  inmueble: InmuebleInmovilla;
}

/** Format price: 150.000 € */
function formatPrice(price: number): string {
  return (
    new Intl.NumberFormat("es-ES", {
      maximumFractionDigits: 0,
    }).format(price) + " €"
  );
}

export default function PropertyCard({ inmueble }: PropertyCardProps) {
  const heroImage = inmueble.fotos?.[0];
  const hasImage = Boolean(heroImage);

  return (
    <Link
      href={`/inmueble/${inmueble.id}`}
      className="hover-lift group flex flex-col overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Image section — 4:3 con zoom hover */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-50">
        {hasImage ? (
          <ImageWithFallback
            src={heroImage as string}
            alt={inmueble.titulo || `Inmueble ${inmueble.referencia}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-16 w-16 text-gray-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
              />
            </svg>
          </div>
        )}

        {/* Badge negro — operación (arriba derecha) */}
        <span className="absolute right-3 top-3 bg-brand-black px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
          {inmueble.operacion}
        </span>

        {/* Precio \u2014 overlay oscuro (abajo izquierda) */}
        <div className="absolute bottom-0 left-0 bg-black/70 px-4 py-2">
          <span className="text-lg font-bold text-white">
            {formatPrice(inmueble.precio)}
          </span>
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-1 flex-col gap-3 border border-t-0 border-gray-100 p-4">
        {/* Title */}
        <h3 className="line-clamp-2 text-sm font-bold uppercase leading-snug tracking-wide text-brand-black">
          {inmueble.titulo || "Inmueble sin título"}
        </h3>

        {/* Location */}
        <p className="text-xs text-brand-gray">
          {inmueble.ciudad}
          {inmueble.zona ? ` · ${inmueble.zona}` : ""}
        </p>

        {/* Stats — iconos lineales finos */}
        <div className="flex items-center gap-5 border-t border-gray-100 pt-3 text-xs text-brand-gray-dark">
          {inmueble.habitaciones > 0 && (
            <div className="flex items-center gap-1.5" title="Habitaciones">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z"
                />
              </svg>
              <span className="font-medium">{inmueble.habitaciones} hab.</span>
            </div>
          )}
          {inmueble.banos > 0 && (
            <div className="flex items-center gap-1.5" title="Baños">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="font-medium">{inmueble.banos} baños</span>
            </div>
          )}
          {inmueble.metros_cons > 0 && (
            <div
              className="flex items-center gap-1.5"
              title="Metros construidos"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
              <span className="font-medium">{inmueble.metros_cons} m²</span>
            </div>
          )}
        </div>

        {/* Botón DETALLES — outline negro */}
        <div className="mt-auto flex items-center justify-end pt-2">
          <span className="hover-lift border border-brand-black px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-brand-black transition-colors duration-300 group-hover:bg-brand-black group-hover:text-white">
            DETALLES
          </span>
        </div>
      </div>
    </Link>
  );
}
