"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useState, useEffect } from "react";

export default function AdvancedFilterSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Local state for debouncing
  const [filters, setFilters] = useState({
    q: searchParams.get("q") || "",
    operacion: searchParams.get("operacion") || "",
    tipo: searchParams.get("tipo") || "",
    precioMin: searchParams.get("precioMin") || "",
    precioMax: searchParams.get("precioMax") || "",
    habitacionesMin: searchParams.get("habitacionesMin") || "",
    banosMin: searchParams.get("banosMin") || "",
  });

  // Sync state if URL changes externally (e.g. back button)
  useEffect(() => {
    setFilters({
      q: searchParams.get("q") || "",
      operacion: searchParams.get("operacion") || "",
      tipo: searchParams.get("tipo") || "",
      precioMin: searchParams.get("precioMin") || "",
      precioMax: searchParams.get("precioMax") || "",
      habitacionesMin: searchParams.get("habitacionesMin") || "",
      banosMin: searchParams.get("banosMin") || "",
    });
  }, [searchParams]);

  const updateURL = useCallback(
    (newFilters: typeof filters) => {
      const params = new URLSearchParams(searchParams.toString());
      
      Object.entries(newFilters).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  // Debounced effect for applying filters
  useEffect(() => {
    const handler = setTimeout(() => {
      updateURL(filters);
    }, 500);

    return () => clearTimeout(handler);
  }, [filters, updateURL]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      q: "",
      operacion: "",
      tipo: "",
      precioMin: "",
      precioMax: "",
      habitacionesMin: "",
      banosMin: "",
    });
    router.push(pathname);
  };

  return (
    <aside className="w-full bg-brand-gray-light p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-black uppercase tracking-widest text-brand-black">
          Filtros
        </h3>
        <button
          onClick={clearFilters}
          className="text-xs font-bold uppercase text-brand-blue hover:text-brand-blue-dark transition-colors"
        >
          Limpiar filtros
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {/* Keyword / Referencia */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="q"
            className="text-xs font-bold uppercase tracking-wider text-brand-gray-dark"
          >
            Búsqueda Libre / Referencia
          </label>
          <input
            id="q"
            name="q"
            type="text"
            placeholder="Ej: Sabadell, Atico, Ref..."
            value={filters.q}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white p-3 text-sm outline-none focus:border-brand-blue transition-colors"
          />
        </div>

        {/* Operación */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="operacion"
            className="text-xs font-bold uppercase tracking-wider text-brand-gray-dark"
          >
            Operación
          </label>
          <select
            id="operacion"
            name="operacion"
            value={filters.operacion}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white p-3 text-sm outline-none focus:border-brand-blue transition-colors"
          >
            <option value="">Cualquiera</option>
            <option value="venta">Comprar</option>
            <option value="alquiler">Alquilar</option>
          </select>
        </div>

        {/* Tipo */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="tipo"
            className="text-xs font-bold uppercase tracking-wider text-brand-gray-dark"
          >
            Tipo de Inmueble
          </label>
          <select
            id="tipo"
            name="tipo"
            value={filters.tipo}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white p-3 text-sm outline-none focus:border-brand-blue transition-colors"
          >
            <option value="">Cualquier tipo</option>
            <option value="piso">Piso</option>
            <option value="casa">Casa/Chalet</option>
            <option value="atico">Ático</option>
            <option value="duplex">Dúplex</option>
            <option value="chalet">Chalet</option>
          </select>
        </div>

        {/* Precio */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-gray-dark">
            Precio (€)
          </label>
          <div className="flex gap-2">
            <input
              id="precioMin"
              name="precioMin"
              type="number"
              placeholder="Mínimo"
              value={filters.precioMin}
              onChange={handleChange}
              className="w-full border border-gray-200 bg-white p-3 text-sm outline-none focus:border-brand-blue transition-colors"
            />
            <input
              id="precioMax"
              name="precioMax"
              type="number"
              placeholder="Máximo"
              value={filters.precioMax}
              onChange={handleChange}
              className="w-full border border-gray-200 bg-white p-3 text-sm outline-none focus:border-brand-blue transition-colors"
            />
          </div>
        </div>

        {/* Habitaciones y Baños */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-1/2">
            <label
              htmlFor="habitacionesMin"
              className="text-xs font-bold uppercase tracking-wider text-brand-gray-dark"
            >
              Habitaciones
            </label>
            <select
              id="habitacionesMin"
              name="habitacionesMin"
              value={filters.habitacionesMin}
              onChange={handleChange}
              className="w-full border border-gray-200 bg-white p-3 text-sm outline-none focus:border-brand-blue transition-colors"
            >
              <option value="">Todas</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label
              htmlFor="banosMin"
              className="text-xs font-bold uppercase tracking-wider text-brand-gray-dark"
            >
              Baños
            </label>
            <select
              id="banosMin"
              name="banosMin"
              value={filters.banosMin}
              onChange={handleChange}
              className="w-full border border-gray-200 bg-white p-3 text-sm outline-none focus:border-brand-blue transition-colors"
            >
              <option value="">Todos</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}
