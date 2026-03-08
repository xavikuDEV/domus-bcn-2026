"use client";

import { useState } from "react";
import Link from "next/link";
import ShareModal from "./ShareModal";

interface PropertyHeaderProps {
  titulo: string;
  precio: number;
  operacion: string;
  tipoOferta: string;
  referencia: string;
}

/** Format price: 485.000 € */
function formatPrice(price: number): string {
  return (
    new Intl.NumberFormat("es-ES", {
      maximumFractionDigits: 0,
    }).format(price) + " €"
  );
}

/**
 * PropertyHeader — Title, prominent price, dynamic tags, and utility buttons.
 */
export default function PropertyHeader({
  titulo,
  precio,
  operacion,
  tipoOferta,
  referencia,
}: PropertyHeaderProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="flex flex-col gap-4">
      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2">
        <Link 
          href={`/?operacion=${encodeURIComponent(operacion)}`}
          className="bg-brand-black px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-80"
        >
          {operacion}
        </Link>
        <Link 
          href={`/?tipo=${encodeURIComponent(tipoOferta)}`}
          className="border border-brand-blue px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
        >
          {tipoOferta}
        </Link>
        <span className="text-xs text-brand-gray">Ref. {referencia}</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-black uppercase leading-tight tracking-wide text-brand-black sm:text-3xl">
        {titulo || "Inmueble sin título"}
      </h1>

      {/* Price + actions */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="text-3xl font-black text-brand-blue sm:text-4xl">
          {formatPrice(precio)}
        </span>

        <div className="flex items-center gap-3">
          {/* Share */}
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 border border-gray-200 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-gray-dark transition-colors duration-200 hover:border-brand-blue hover:text-brand-blue"
            title="Compartir"
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
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
            Compartir
          </button>

          {/* Print */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 border border-gray-200 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-gray-dark transition-colors duration-200 hover:border-brand-blue hover:text-brand-blue"
            title="Imprimir"
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
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
              />
            </svg>
            Imprimir
          </button>
        </div>
      </div>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        title={titulo}
        price={formatPrice(precio)}
      />
    </header>
  );
}
