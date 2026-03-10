"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useState, useEffect } from "react";

export default function AdvancedFilterSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Estado local para manejar los inputs
  const [filters, setFilters] = useState({
    q: searchParams.get("q") || "",
    operacion: searchParams.get("operacion") || "",
    tipo: searchParams.get("tipo") || "",
    precioMin: searchParams.get("precioMin") || "",
    precioMax: searchParams.get("precioMax") || "",
    habitacionesMin: searchParams.get("habitacionesMin") || "",
    banosMin: searchParams.get("banosMin") || "",
  });

  // 2. SINCRONIZACIÓN: URL -> Estado Local (Solo si hay cambios reales)
  // Esto permite que si el usuario navega atrás o borra un parámetro en la barra de búsqueda,
  // el formulario se actualice solo.
  useEffect(() => {
    const urlParams = {
      q: searchParams.get("q") || "",
      operacion: searchParams.get("operacion") || "",
      tipo: searchParams.get("tipo") || "",
      precioMin: searchParams.get("precioMin") || "",
      precioMax: searchParams.get("precioMax") || "",
      habitacionesMin: searchParams.get("habitacionesMin") || "",
      banosMin: searchParams.get("banosMin") || "",
    };

    // Comprobamos si el objeto ha cambiado realmente antes de setearlo
    const hasChanged = JSON.stringify(urlParams) !== JSON.stringify(filters);
    if (hasChanged) {
      setFilters(urlParams);
    }
  }, [searchParams]);

  // 3. LÓGICA DE ACTUALIZACIÓN DE URL
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

      const newQuery = params.toString();
      const currentQuery = searchParams.toString();

      // Crucial: Solo ejecutamos el router.push si la query resultante es distinta a la actual
      if (newQuery !== currentQuery) {
        router.push(`${pathname}?${newQuery}`, { scroll: false });
      }
    },
    [pathname, router, searchParams],
  );

  // 4. DEBOUNCE: Espera 500ms tras dejar de escribir para actualizar la URL
  useEffect(() => {
    const handler = setTimeout(() => {
      updateURL(filters);
    }, 500);

    return () => clearTimeout(handler);
  }, [filters, updateURL]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    const emptyState = {
      q: "",
      operacion: "",
      tipo: "",
      precioMin: "",
      precioMax: "",
      habitacionesMin: "",
      banosMin: "",
    };
    setFilters(emptyState);
    router.push(pathname);
  };

  return (
    <aside className="w-full bg-brand-gray-light p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-black uppercase tracking-widest text-brand-black">
          Filtros
        </h3>
        <button
          onClick={clearFilters}
          className="text-xs font-bold uppercase text-brand-blue hover:text-brand-blue-dark transition-colors border-b border-transparent hover:border-brand-blue-dark"
        >
          Limpiar filtros
        </button>
      </div>

      <div className="flex flex-col gap-8">
        {/* Búsqueda Libre */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="q"
            className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-dark"
          >
            Búsqueda / Referencia
          </label>
          <input
            id="q"
            name="q"
            type="text"
            placeholder="Ej: Sabadell, Ático, Ref..."
            value={filters.q}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white p-3 text-sm text-brand-black outline-none focus:border-brand-blue transition-colors"
          />
        </div>

        {/* Operación */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="operacion"
            className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-dark"
          >
            Operación
          </label>
          <select
            id="operacion"
            name="operacion"
            value={filters.operacion}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white p-3 text-sm text-brand-black outline-none focus:border-brand-blue transition-colors appearance-none cursor-pointer"
          >
            <option value="">Cualquiera</option>
            <option value="venta">Comprar</option>
            <option value="alquiler">Alquilar</option>
          </select>
        </div>

        {/* Tipo de Inmueble */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="tipo"
            className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-dark"
          >
            Tipo de Inmueble
          </label>
          <select
            id="tipo"
            name="tipo"
            value={filters.tipo}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white p-3 text-sm text-brand-black outline-none focus:border-brand-blue transition-colors appearance-none cursor-pointer"
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
          <label className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-dark">
            Precio (€)
          </label>
          <div className="flex gap-3">
            <input
              id="precioMin"
              name="precioMin"
              type="number"
              placeholder="Mín"
              value={filters.precioMin}
              onChange={handleChange}
              className="w-1/2 border border-gray-200 bg-white p-3 text-sm outline-none focus:border-brand-blue transition-colors"
            />
            <input
              id="precioMax"
              name="precioMax"
              type="number"
              placeholder="Máx"
              value={filters.precioMax}
              onChange={handleChange}
              className="w-1/2 border border-gray-200 bg-white p-3 text-sm outline-none focus:border-brand-blue transition-colors"
            />
          </div>
        </div>

        {/* Habitaciones y Baños */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-1/2">
            <label
              htmlFor="habitacionesMin"
              className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-dark"
            >
              Hab.
            </label>
            <select
              id="habitacionesMin"
              name="habitacionesMin"
              value={filters.habitacionesMin}
              onChange={handleChange}
              className="w-full border border-gray-200 bg-white p-3 text-sm outline-none focus:border-brand-blue appearance-none cursor-pointer"
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
              className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-dark"
            >
              Baños
            </label>
            <select
              id="banosMin"
              name="banosMin"
              value={filters.banosMin}
              onChange={handleChange}
              className="w-full border border-gray-200 bg-white p-3 text-sm outline-none focus:border-brand-blue appearance-none cursor-pointer"
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
