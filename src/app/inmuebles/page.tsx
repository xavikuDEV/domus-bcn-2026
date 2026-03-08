import Navbar from "../../components/Navbar";
import PropertyCard from "../../components/PropertyCard";
import AdvancedFilterSidebar from "../../components/AdvancedFilterSidebar";
import { getInmuebles } from "../../lib/supabase/queries";

// SEO Title Generator based on filters
function generatePageTitle(params: {
  operacion?: string;
  tipo?: string;
  q?: string;
}) {
  const opMap: Record<string, string> = {
    venta: "Venta",
    alquiler: "Alquiler",
  };
  
  const tipoMap: Record<string, string> = {
    piso: "Pisos",
    casa: "Casas",
    atico: "Áticos",
    duplex: "Dúplex",
    chalet: "Chalets"
  };

  const opText = params.operacion ? opMap[params.operacion] || params.operacion : "Inmuebles";
  const tipoText = params.tipo ? tipoMap[params.tipo] || params.tipo : "Inmuebles";
  const locText = params.q ? ` en ${params.q}` : " en Barcelona";

  if (params.operacion && params.tipo) {
    return `${opText} de ${tipoText}${locText} | Domus BCN 2026`;
  }
  
  if (params.operacion) {
    return `${opText} de Inmuebles${locText} | Domus BCN 2026`;
  }

  if (params.tipo) {
    return `${tipoText}${locText} | Domus BCN 2026`;
  }

  return `Buscador de Inmuebles${locText} | Domus BCN 2026`;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const resolvedParams = await searchParams;
  return {
    title: generatePageTitle(resolvedParams),
  };
}

export default async function InmueblesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const resolvedParams = await searchParams;
  
  // Fetch properties using the updated getInmuebles with all filters
  const properties = await getInmuebles(resolvedParams);

  return (
    <div className="min-h-screen bg-brand-gray-light pb-24">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-black uppercase tracking-wider text-brand-black sm:text-4xl">
            {resolvedParams.operacion === "venta" && resolvedParams.tipo
              ? `Venta de ${resolvedParams.tipo}s`
              : resolvedParams.operacion === "alquiler" && resolvedParams.tipo
                ? `Alquiler de ${resolvedParams.tipo}s`
                : resolvedParams.operacion === "venta"
                  ? "Propiedades en Venta"
                  : resolvedParams.operacion === "alquiler"
                    ? "Propiedades en Alquiler"
                    : "Buscador Avanzado"}
          </h1>
          <div className="mt-3 h-1 w-16 bg-brand-blue" />
          <p className="mt-4 text-sm text-brand-gray">
            {properties.length} {properties.length === 1 ? "resultado encontrado" : "resultados encontrados"}
          </p>
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          {/* Sidebar */}
          <div className="w-full shrink-0 lg:sticky lg:top-32 lg:w-80">
            <AdvancedFilterSidebar />
          </div>

          {/* Grid Resultados */}
          <div className="w-full flex-1">
            {properties.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {properties.map((prop) => (
                  <PropertyCard key={prop.id} inmueble={prop} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center bg-white p-12 text-center shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="mb-4 h-16 w-16 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <h3 className="text-lg font-bold uppercase tracking-widest text-brand-black">
                  No hay resultados
                </h3>
                <p className="mt-2 text-sm text-brand-gray">
                  Intenta ajustar los filtros para ver otras propiedades disponibles.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
