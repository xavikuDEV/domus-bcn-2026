import Link from "next/link";

interface BreadcrumbsProps {
  tipo: string;
  ciudad: string;
  titulo: string;
}

export default function Breadcrumbs({
  tipo,
  ciudad,
  titulo,
}: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-xs text-brand-gray pb-4 no-print">
      <Link href="/" className="hover:text-brand-blue transition-colors">
        Inicio
      </Link>
      <span className="text-gray-300">›</span>
      {tipo ? (
        <>
          <Link
            href={`/?tipo=${tipo}`}
            className="hover:text-brand-blue transition-colors"
          >
            {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
          </Link>
          <span className="text-gray-300">›</span>
        </>
      ) : null}
      {ciudad ? (
        <>
          <Link
            href={`/?ciudad=${ciudad}`}
            className="hover:text-brand-blue transition-colors"
          >
            {ciudad.charAt(0).toUpperCase() + ciudad.slice(1)}
          </Link>
          <span className="text-gray-300">›</span>
        </>
      ) : null}
      <span className="truncate text-brand-black">{titulo}</span>
    </nav>
  );
}
