"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [operacion, setOperacion] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir query params
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (operacion) params.set("operacion", operacion);
    if (tipo) params.set("tipo", tipo);
    
    router.push(`/inmuebles?${params.toString()}`);
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-4xl rounded-full bg-white p-2 shadow-2xl transition-all hover:shadow-brand-blue/20 sm:p-3">
      <form
        onSubmit={handleSearch}
        className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:gap-4"
      >
        {/* Input Libre */}
        <div className="flex w-full flex-1 flex-col px-4 sm:border-r sm:border-gray-200">
          <label htmlFor="search-query" className="text-xs font-bold uppercase tracking-wider text-brand-gray-dark">
            ¿Qué buscas?
          </label>
          <input
            id="search-query"
            type="text"
            placeholder="Ej: Piso con terraza o Ref: PA40"
            className="w-full bg-transparent text-sm text-brand-black outline-none placeholder:text-gray-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Tipo */}
        <div className="flex w-full flex-1 flex-col px-4 sm:border-r sm:border-gray-200">
          <label htmlFor="search-tipo" className="text-xs font-bold uppercase tracking-wider text-brand-gray-dark">
            Tipo
          </label>
          <select
            id="search-tipo"
            className="w-full bg-transparent text-sm text-brand-black outline-none cursor-pointer"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="">Cualquier tipo</option>
            <option value="piso">Piso</option>
            <option value="casa">Casa/Chalet</option>
            <option value="atico">Ático</option>
            <option value="duplex">Dúplex</option>
          </select>
        </div>

        {/* Operación */}
        <div className="flex w-full flex-1 flex-col px-4">
          <label htmlFor="search-operacion" className="text-xs font-bold uppercase tracking-wider text-brand-gray-dark">
            Operación
          </label>
          <select
            id="search-operacion"
            className="w-full bg-transparent text-sm text-brand-black outline-none cursor-pointer"
            value={operacion}
            onChange={(e) => setOperacion(e.target.value)}
          >
            <option value="">Cualquiera</option>
            <option value="venta">Comprar</option>
            <option value="alquiler">Alquilar</option>
          </select>
        </div>

        {/* Botón Buscar */}
        <button
          type="submit"
          className="hover-lift flex h-12 w-full items-center justify-center rounded-full bg-brand-blue px-8 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-brand-blue-dark sm:h-14 sm:w-auto"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
