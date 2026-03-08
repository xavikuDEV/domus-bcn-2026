"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/navigation";

export default function ValoracionLanding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    direccion: "",
    tipo: "",
    superficie: "",
    motivo: "",
    nombre: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setStep(5); // Success step
  };

  return (
    <div className="min-h-screen bg-brand-gray-light">
      <Navbar />

      <main className="flex min-h-screen flex-col lg:flex-row">
        {/* Left Side: Elegant Branding */}
        <div className="flex w-full flex-col justify-center bg-brand-black p-10 text-white lg:w-1/2 lg:p-24">
          <div className="max-w-md">
            <h1 className="text-4xl font-black uppercase leading-tight tracking-wider sm:text-5xl lg:text-6xl">
              DESCUBRE EL <br />
              <span className="text-brand-blue">VALOR REAL</span> <br />
              DE TU HOGAR.
            </h1>
            <p className="mt-8 text-lg font-light leading-relaxed text-gray-300">
              En Domus BCN, analizamos datos precisos del mercado y tendencias exclusivas para ofrecerte una valoración experta, confidencial y sin compromiso.
            </p>
            
            <div className="mt-12 hidden flex-col gap-6 lg:flex">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-white">Datos de la Vivienda</h4>
                  <p className="text-sm text-gray-400">Dirección, tipo y características básicas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-white">Tu Objetivo</h4>
                  <p className="text-sm text-gray-400">¿Vender, alquilar o simple curiosidad?</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-white">Informe Experto</h4>
                  <p className="text-sm text-gray-400">Recibe un análisis de mercado detallado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Multi-step Form */}
        <div className="flex w-full items-center justify-center bg-white p-6 py-24 sm:p-12 lg:w-1/2">
          <div className="w-full max-w-md">
            
            {/* ProgressBar */}
            {step < 5 && (
              <div className="mb-12">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                  <span className={step >= 1 ? "text-brand-blue" : ""}>Inmueble</span>
                  <span className={step >= 2 ? "text-brand-blue" : ""}>Detalles</span>
                  <span className={step >= 3 ? "text-brand-blue" : ""}>Motivo</span>
                  <span className={step >= 4 ? "text-brand-blue" : ""}>Contacto</span>
                </div>
                <div className="mt-3 flex h-1 w-full overflow-hidden bg-gray-100">
                  <div 
                    className="bg-brand-blue transition-all duration-500 ease-out" 
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Step 1: Dirección */}
            {step === 1 && (
              <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-black uppercase tracking-wider text-brand-black">¿Dónde está el inmueble?</h2>
                <div className="mt-8 flex flex-col gap-6">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-gray-dark">
                      Dirección exacta
                    </label>
                    <input
                      required
                      type="text"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      placeholder="Ej: Paseo de Gracia 10"
                      className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-lg text-brand-black outline-none transition-colors focus:border-brand-blue"
                    />
                  </div>
                  <button
                    type="submit"
                    className="hover-lift mt-8 bg-brand-black py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-gray-800"
                  >
                    Siguiente
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Detalles Básicos */}
            {step === 2 && (
              <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-black uppercase tracking-wider text-brand-black">Detalles de la Propiedad</h2>
                <div className="mt-8 flex flex-col gap-6">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-gray-dark">
                      Tipo de Inmueble
                    </label>
                    <select
                      required
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-lg text-brand-black outline-none transition-colors focus:border-brand-blue"
                    >
                      <option value="" disabled>Seleccione un tipo</option>
                      <option value="piso">Piso / Apartamento</option>
                      <option value="casa">Casa / Chalet</option>
                      <option value="atico">Ático</option>
                      <option value="duplex">Dúplex</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-gray-dark">
                      Superficie Aproximada (m²)
                    </label>
                    <input
                      required
                      type="number"
                      name="superficie"
                      value={formData.superficie}
                      onChange={handleChange}
                      placeholder="Ej: 120"
                      className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-lg text-brand-black outline-none transition-colors focus:border-brand-blue"
                    />
                  </div>
                  
                  <div className="mt-8 flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="hover-lift flex-1 border border-gray-200 bg-white py-4 text-sm font-bold uppercase tracking-widest text-brand-black transition-colors hover:bg-gray-50"
                    >
                      Volver
                    </button>
                    <button
                      type="submit"
                      className="hover-lift flex-1 bg-brand-black py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-gray-800"
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* Step 3: Motivo */}
            {step === 3 && (
              <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-black uppercase tracking-wider text-brand-black">¿Cuál es tu objetivo?</h2>
                <div className="mt-8 flex flex-col gap-4">
                  
                  {["Vender en los próximos 1-3 meses", "Vender a medio plazo", "Alquilar el inmueble", "Solo quiero conocer su valor actual"].map((option) => (
                    <label 
                      key={option} 
                      className={`cursor-pointer border p-5 transition-all duration-300 ${formData.motivo === option ? "border-brand-blue bg-brand-blue/5" : "border-gray-200 hover:border-brand-blue"}`}
                    >
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="motivo" 
                          value={option}
                          checked={formData.motivo === option}
                          onChange={handleChange}
                          required
                          className="h-4 w-4 text-brand-blue accent-brand-blue" 
                        />
                        <span className="font-medium text-brand-black">{option}</span>
                      </div>
                    </label>
                  ))}

                  <div className="mt-8 flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="hover-lift flex-1 border border-gray-200 bg-white py-4 text-sm font-bold uppercase tracking-widest text-brand-black transition-colors hover:bg-gray-50"
                    >
                      Volver
                    </button>
                    <button
                      type="submit"
                      className="hover-lift flex-1 bg-brand-black py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-gray-800"
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* Step 4: Contacto */}
            {step === 4 && (
              <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-black uppercase tracking-wider text-brand-black">Tus Datos de Contacto</h2>
                <p className="mt-2 text-brand-gray">Para enviarte el informe detallado.</p>
                
                <div className="mt-8 flex flex-col gap-6">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-gray-dark">
                      Nombre Completo
                    </label>
                    <input
                      required
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-lg text-brand-black outline-none transition-colors focus:border-brand-blue"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-gray-dark">
                      Correo Electrónico
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-lg text-brand-black outline-none transition-colors focus:border-brand-blue"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-gray-dark">
                      Teléfono
                    </label>
                    <input
                      required
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+34 600..."
                      className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-lg text-brand-black outline-none transition-colors focus:border-brand-blue"
                    />
                  </div>
                  
                  <div className="mt-8 flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="hover-lift flex-1 border border-gray-200 bg-white py-4 text-sm font-bold uppercase tracking-widest text-brand-black transition-colors hover:bg-gray-50"
                    >
                      Volver
                    </button>
                    <button
                      type="submit"
                      className="hover-lift flex-1 bg-brand-blue py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-brand-blue/30 transition-colors hover:bg-brand-blue-dark"
                    >
                      SOLICITAR AHORA
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* Step 5: Success State */}
            {step === 5 && (
              <div className="animate-in fade-in zoom-in-95 duration-700 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-10 w-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h2 className="mt-6 text-2xl font-black uppercase tracking-wider text-brand-black">¡Solicitud Recibida!</h2>
                <p className="mt-4 text-brand-gray leading-relaxed">
                  Gracias por confiar en Domus BCN. Nuestro equipo de expertos está analizando los datos proporcionados y se pondrá en contacto contigo a la brevedad con tu valoración confidencial.
                </p>
                <button
                  onClick={() => router.push("/")}
                  className="hover-lift mt-10 w-full bg-brand-black py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-gray-800"
                >
                  VOLVER AL INICIO
                </button>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
