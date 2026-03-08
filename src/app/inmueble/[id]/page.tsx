import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getInmuebleById } from "../../../lib/supabase/queries";
import Navbar from "../../../components/Navbar";
import Breadcrumbs from "../../../components/Breadcrumbs";
import PropertyHeader from "../../../components/PropertyHeader";
import PropertyStatsBar from "../../../components/PropertyStatsBar";
import ContactSidebar from "../../../components/ContactSidebar";
import AgentProvider from "../../../components/AgentProvider";

// New components Etapa 2
import PropertyGallerySwiper from "../../../components/PropertyGallerySwiper";
import PropertyDetails from "../../../components/PropertyDetails";
import PropertyFeatures from "../../../components/PropertyFeatures";
import EnergyRating from "../../../components/EnergyRating";
import MortgageCalculator from "../../../components/MortgageCalculator";
import SimilarProperties from "../../../components/SimilarProperties";
import PropertyNavigation from "../../../components/PropertyNavigation";
import MapWrapper from "../../../components/MapWrapper";

interface InmueblePageProps {
  params: Promise<{ id: string }>;
}

/**
 * Dynamic route for individual property pages.
 * Phase 2 — "El Portal Vivo"
 * Task [7.1]: Portal de Lujo Inteligente — Etapa 2 (Pulido)
 */
export default async function InmueblePage({ params }: InmueblePageProps) {
  const { id } = await params;
  const inmueble = await getInmuebleById(id);

  if (!inmueble) {
    notFound();
  }

  const tituloOriginal = inmueble.titulo || "Inmueble de lujo";

  return (
    <Suspense fallback={null}>
      <AgentProvider>
        <div className="min-h-screen bg-white">
          <Navbar />

          {/* Main content — under navbar */}
          <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <Breadcrumbs
              tipo={inmueble.tipo_oferta}
              ciudad={inmueble.ciudad}
              titulo={tituloOriginal}
            />

            {/* Two-column layout */}
            <div className="mt-2 grid grid-cols-1 gap-10 pb-20 lg:grid-cols-3">
              {/* Left column — Content (2/3) */}
              <div className="flex flex-col gap-8 lg:col-span-2">

                {/* Swiper Gallery */}
                <PropertyGallerySwiper 
                  fotos={inmueble.fotos} 
                  titulo={tituloOriginal} 
                />

                {/* Header: title, price, tags, buttons */}
                <PropertyHeader
                  titulo={inmueble.titulo}
                  precio={inmueble.precio}
                  operacion={inmueble.operacion}
                  tipoOferta={inmueble.tipo_oferta}
                  referencia={inmueble.referencia}
                />

                {/* Stats bar */}
                <PropertyStatsBar
                  tipoOferta={inmueble.tipo_oferta}
                  habitaciones={inmueble.habitaciones}
                  banos={inmueble.banos}
                  metrosCons={inmueble.metros_cons}
                />

                {/* Description — conditional */}
                {inmueble.descripcion && (
                  <section>
                    <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-brand-black">
                      Descripción
                    </h2>
                    <p className="whitespace-pre-line leading-relaxed text-brand-gray-dark">
                      {inmueble.descripcion}
                    </p>
                  </section>
                )}

                {/* Technical Details Enrichment */}
                <PropertyDetails 
                  anoConstruccion={inmueble.ano_construccion}
                  metrosUtiles={inmueble.metros_utiles}
                  orientacion={inmueble.orientacion}
                  planta={inmueble.planta}
                  direccion={inmueble.direccion}
                />

                {/* Features Enrichment */}
                <PropertyFeatures caracteristicas={inmueble.caracteristicas} />

                {/* Energy Rating Enrichment */}
                <EnergyRating claseEnergetica={inmueble.clase_energetica} />

                {/* Mortgage Calculator */}
                <MortgageCalculator precio={inmueble.precio} />

                {/* Location Map Placeholder / Info */}
                {(inmueble.ciudad || inmueble.zona) && (
                  <section className="mt-8 border-t border-gray-100 pt-6 no-print">
                    <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-brand-black">
                      Ubicación
                    </h2>
                    <p className="mb-4 text-brand-gray-dark">
                      {inmueble.ciudad}
                      {inmueble.zona ? ` · ${inmueble.zona}` : ""}
                    </p>
                    <MapWrapper ciudad={inmueble.ciudad} zona={inmueble.zona} />
                    {inmueble.direccion && (
                      <p className="mt-2 text-sm text-brand-gray font-medium">
                        Ubicación aproximada: {inmueble.direccion}
                      </p>
                    )}
                  </section>
                )}

                {/* Similar Properties */}
                <SimilarProperties 
                  currentId={inmueble.id} 
                  tipoOferta={inmueble.tipo_oferta} 
                />

                {/* Navigation (Prev / Next) */}
                <PropertyNavigation currentId={inmueble.id} />

              </div>

              {/* Right column — Sticky Sidebar (1/3) */}
              <div className="no-print lg:col-span-1">
                <ContactSidebar referencia={inmueble.referencia} />
              </div>
            </div>
          </div>
        </div>

      </AgentProvider>
    </Suspense>
  );
}
