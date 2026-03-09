import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Servicios Domus Exclusivos | Domus BCN 2026",
  description: "Servicios de intermediación VIP, consultoría de inversión y gestión integral.",
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-3xl font-black uppercase tracking-wider text-brand-black sm:text-4xl">
            Servicios <span className="text-[#d4af37]">VIP</span>
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 bg-[#d4af37]" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-gray leading-relaxed">
            Ofrecemos un nivel de servicio que redefine los estándares de la intermediación
            inmobiliaria en Barcelona. Discreción, precisión y resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="group border border-gray-100 p-10 hover:shadow-2xl transition-all duration-500 bg-white">
            <h3 className="text-xl font-bold uppercase tracking-widest text-brand-black mb-4 group-hover:text-[#d4af37] transition-colors">Intermediación Elite</h3>
            <p className="text-brand-gray text-sm leading-relaxed">
              Búsqueda de compradores cualificados en los circuitos internacionales más exclusivos.
              Cerramos operaciones complejas con la máxima confidencialidad.
            </p>
          </div>

          <div className="group border border-gray-100 p-10 hover:shadow-2xl transition-all duration-500 bg-brand-black text-white">
            <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-4 group-hover:text-[#d4af37] transition-colors">Consultoría de Inversión</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Análisis financiero, proyecciones de rentabilidad y asesoría legal y técnica para
              inversores que buscan oportunidades prime en Barcelona.
            </p>
          </div>

          <div className="group border border-gray-100 p-10 hover:shadow-2xl transition-all duration-500 bg-white">
            <h3 className="text-xl font-bold uppercase tracking-widest text-brand-black mb-4 group-hover:text-[#d4af37] transition-colors">Relocation Premium</h3>
            <p className="text-brand-gray text-sm leading-relaxed">
              Gestión total para directivos y familias trasladándose a Barcelona. Desde
              búsqueda de vivienda y colegios hasta servicios de conserjería 24/7.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
