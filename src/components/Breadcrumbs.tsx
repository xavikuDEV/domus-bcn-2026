import Link from "next/link";

interface BreadcrumbsProps {
  tipo?: string;
  ciudad?: string;
  titulo?: string;
}

export default function Breadcrumbs({
  tipo,
  ciudad,
  titulo,
}: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-brand-gray pb-6 no-print flex-wrap">
      <Link href="/" className="hover:text-brand-blue transition-colors">
        Inicio
      </Link>
      <span className="text-gray-300">›</span>

      {/* Si solo estamos en inmuebles, no tiene link, o si tiene mas cosas, si es link */}
      {tipo || ciudad || titulo ? (
        <Link
          href="/inmuebles"
          className="hover:text-brand-blue transition-colors"
        >
          Inmuebles
        </Link>
      ) : (
        <span className="text-brand-black">Inmuebles</span>
      )}

      {(tipo || ciudad || titulo) && <span className="text-gray-300">›</span>}

      {tipo ? (
        <>
          <Link
            href={`/inmuebles?tipo=${tipo.toLowerCase()}`}
            className="hover:text-brand-blue transition-colors"
          >
            {tipo}
          </Link>
          {(ciudad || titulo) && <span className="text-gray-300">›</span>}
        </>
      ) : null}

      {ciudad ? (
        <>
          <Link
            href={`/inmuebles?ciudad=${ciudad}`}
            className="hover:text-brand-blue transition-colors"
          >
            {ciudad}
          </Link>
          {titulo && <span className="text-gray-300">›</span>}
        </>
      ) : null}

      {titulo && (
        <span
          className="truncate max-w-[200px] sm:max-w-xs md:max-w-md lg:max-w-lg text-brand-black"
          title={titulo}
        >
          {titulo}
        </span>
      )}
    </nav>
  );
}
