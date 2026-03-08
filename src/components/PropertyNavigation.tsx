import Link from "next/link";
import { getAdjacentProperties } from "../lib/supabase/queries";
import ImageWithFallback from "./ImageWithFallback";

export default async function PropertyNavigation({
  currentId,
}: {
  currentId: string;
}) {
  const { prev, next } = await getAdjacentProperties(currentId);

  if (!prev && !next) return null;

  return (
    <div className="mt-16 flex items-center justify-between border-t border-gray-100 pt-8 no-print gap-4">
      {prev ? (
        <Link
          href={`/inmueble/${prev.id}`}
          className="group flex flex-1 items-center gap-4 rounded-lg border border-gray-100 p-3 transition-colors hover:border-brand-blue hover:bg-gray-50"
        >
          <div className="flex shrink-0 items-center text-brand-gray-dark group-hover:text-brand-blue">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-2 h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </div>
          <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded bg-gray-100 hidden sm:block">
            {prev.fotos?.[0] && (
              <ImageWithFallback src={prev.fotos[0]} alt={prev.titulo || "Anterior"} fill className="object-cover" sizes="80px" />
            )}
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-dark">Anterior</span>
            <span className="truncate text-sm font-semibold text-brand-black">{prev.titulo}</span>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={`/inmueble/${next.id}`}
          className="group flex flex-1 items-center justify-end gap-4 rounded-lg border border-gray-100 p-3 text-right transition-colors hover:border-brand-blue hover:bg-gray-50"
        >
          <div className="flex flex-col overflow-hidden text-right pl-4 sm:pl-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-dark">Siguiente</span>
            <span className="truncate text-sm font-semibold text-brand-black">{next.titulo}</span>
          </div>
          <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded bg-gray-100 hidden sm:block">
            {next.fotos?.[0] && (
              <ImageWithFallback src={next.fotos[0]} alt={next.titulo || "Siguiente"} fill className="object-cover" sizes="80px" />
            )}
          </div>
          <div className="flex shrink-0 items-center text-brand-gray-dark group-hover:text-brand-blue">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
