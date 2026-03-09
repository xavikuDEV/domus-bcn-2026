import Navbar from "../../components/Navbar";
import MapWrapper from "../../components/MapWrapper";

export const metadata = {
  title: "Contacto VIP | Domus BCN 2026",
  description: "Contacta con los expertos en mercado inmobiliario de lujo en Barcelona.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-3xl font-black uppercase tracking-wider text-brand-black sm:text-4xl">
            Contacto <span className="text-brand-blue">Privado</span>
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 bg-brand-blue" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulario */}
          <div className="bg-brand-gray-light p-10 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold uppercase tracking-widest text-brand-black mb-8">Escríbanos</h2>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="nombre" className="text-xs font-bold uppercase tracking-wider text-brand-gray-dark">Nombre Completo</label>
                <input id="nombre" type="text" className="border-b border-gray-300 bg-transparent py-2 outline-none focus:border-brand-blue focus:ring-0 transition-colors" placeholder="Ej: Maria García" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="telefono" className="text-xs font-bold uppercase tracking-wider text-brand-gray-dark">Teléfono de contacto</label>
                <input id="telefono" type="tel" className="border-b border-gray-300 bg-transparent py-2 outline-none focus:border-brand-blue focus:ring-0 transition-colors" placeholder="+34 600..." />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="asunto" className="text-xs font-bold uppercase tracking-wider text-brand-gray-dark">Asunto</label>
                <input id="asunto" type="text" className="border-b border-gray-300 bg-transparent py-2 outline-none focus:border-brand-blue focus:ring-0 transition-colors" placeholder="Deseo valorar mi ático en Sarrià..." />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="mensaje" className="text-xs font-bold uppercase tracking-wider text-brand-gray-dark">Mensaje Privado</label>
                <textarea id="mensaje" rows={4} className="border-b border-gray-300 bg-transparent py-2 outline-none focus:border-brand-blue focus:ring-0 transition-colors resize-none" placeholder="Escriba su mensaje aquí..."></textarea>
              </div>

              <button type="button" className="mt-4 hover-lift bg-brand-blue py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand-blue-dark">
                Enviar Mensaje Confidencial
              </button>
            </form>
          </div>

          {/* Datos y Mapa */}
          <div className="flex flex-col justify-between">
            <div className="mb-10">
              <h2 className="text-xl font-bold uppercase tracking-widest text-brand-black mb-6">Oficina Central</h2>
              <div className="flex flex-col gap-4 text-brand-gray text-base">
                <p><span className="font-bold text-brand-black">Dirección:</span> Passeig de Gràcia, 101, 08008 Barcelona</p>
                <p><span className="font-bold text-brand-black">Teléfono:</span> +34 930 123 456</p>
                <p><span className="font-bold text-brand-black">Email:</span> exclusive@domusbcn.com</p>
                <p><span className="font-bold text-brand-black">Horario:</span> Lunes a Viernes (Con cita previa)</p>
              </div>
            </div>

            <div className="w-full h-80 bg-gray-200 border border-gray-100 shadow-sm relative no-print">
              {/* MapWrapper is usually dynamic to a property, but it centres on BCN by default without zona/ciudad */}
              <MapWrapper ciudad="Barcelona" zona="Eixample" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
