import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Sobre Domus BCN | Domus BCN 2026",
  description: "Conoce al equipo de élite en intermediación inmobiliaria en Barcelona.",
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-brand-gray-light pb-24">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-3xl font-black uppercase tracking-wider text-brand-black sm:text-4xl">
            Sobre <span className="text-[#d4af37]">Nosotros</span>
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 bg-[#d4af37]" />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 aspect-square md:aspect-video lg:aspect-square relative overflow-hidden bg-gray-200 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&w=1000&q=80" 
              alt="Domus BCN Team" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-brand-black mb-6">Nuestra Filosofía</h2>
            <p className="text-brand-gray text-base leading-loose mb-6">
              Domus BCN nació con una vocación inflexible: ofrecer un servicio de intermediación inmobiliaria para aquellos que entienden el lujo no como un precio, sino como una experiencia de perfección.
            </p>
            <p className="text-brand-gray text-base leading-loose mb-6">
              Nos especializamos en el "off-market" y en las propiedades más exclusivas de las zonas altas de Barcelona, Eixample Dret, Pedralbes y la costa del Maresme.
            </p>
            <p className="text-brand-gray font-bold text-sm tracking-widest uppercase mt-4">
              Confidencialidad. Exclusividad. Rentabilidad.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
