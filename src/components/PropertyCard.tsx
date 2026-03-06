import Image from "next/image";
import type { InmuebleInmovilla } from "../types/inmovilla";
import ContactButton from "./ContactButton";

interface PropertyCardProps {
  inmueble: InmuebleInmovilla;
}

/** Format price with thousands separator and € symbol */
function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

/** Get badge color based on operation type */
function getOperationStyle(operacion: string): string {
  const op = operacion?.toLowerCase() ?? "";
  if (op.includes("alquil"))
    return "bg-sky-500/80 text-white";
  return "bg-emerald-500/80 text-white";
}

export default function PropertyCard({ inmueble }: PropertyCardProps) {
  const heroImage = inmueble.fotos?.[0];
  const hasImage = Boolean(heroImage);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-800">
      {/* Image section */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600">
        {hasImage ? (
          <Image
            src={heroImage}
            alt={inmueble.titulo_es || `Inmueble ${inmueble.referencia}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-16 w-16 text-slate-400 dark:text-slate-500"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625A1.875 1.875 0 0 1 3.75 19.875v-6.198a.75.75 0 0 1 .091-.086L12 5.432Z" />
            </svg>
          </div>
        )}

        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

        {/* Reference badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-wide text-slate-700 shadow-sm backdrop-blur-sm dark:bg-slate-900/80 dark:text-slate-200">
          REF: {inmueble.referencia}
        </span>

        {/* Operation badge */}
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm ${getOperationStyle(inmueble.operacion)}`}
        >
          {inmueble.operacion}
        </span>

        {/* Price overlay */}
        <div className="absolute bottom-3 left-3">
          <span className="text-2xl font-bold text-white drop-shadow-lg">
            {formatPrice(inmueble.precio)}
          </span>
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Title */}
        <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-slate-800 dark:text-slate-100">
          {inmueble.titulo_es || "Inmueble sin título"}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 shrink-0 text-amber-500"
          >
            <path
              fillRule="evenodd"
              d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="truncate">
            {inmueble.poblacion}
            {inmueble.zona ? `, ${inmueble.zona}` : ""}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 border-t border-slate-100 pt-3 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
          {inmueble.habitaciones > 0 && (
            <div className="flex items-center gap-1" title="Habitaciones">
              <span className="text-base">🛏️</span>
              <span className="font-medium">{inmueble.habitaciones}</span>
            </div>
          )}
          {inmueble.baños > 0 && (
            <div className="flex items-center gap-1" title="Baños">
              <span className="text-base">🚿</span>
              <span className="font-medium">{inmueble.baños}</span>
            </div>
          )}
          {inmueble.m_construidos > 0 && (
            <div className="flex items-center gap-1" title="Metros construidos">
              <span className="text-base">📐</span>
              <span className="font-medium">{inmueble.m_construidos} m²</span>
            </div>
          )}
          {inmueble.tipo_oferta && (
            <div className="ml-auto">
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                {inmueble.tipo_oferta}
              </span>
            </div>
          )}
        </div>

        {/* Contact button */}
        <div className="mt-auto pt-2">
          <ContactButton
            agentEmail={inmueble.agente_email || "info@domusbcn.com"}
            reference={inmueble.referencia}
          />
        </div>
      </div>
    </article>
  );
}
