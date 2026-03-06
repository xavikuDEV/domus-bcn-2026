import Link from "next/link";
import Navbar from "../components/Navbar";
import PropertyGallery from "../components/PropertyGallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar (fixed, glass) */}
      <Navbar />

      {/* Hero Section \u2014 imagen de fondo + overlay oscuro suave */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
        {/* Background image \u2014 Luxury Barcelona */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        {/* Overlay oscuro suave para legibilidad */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto max-w-4xl pt-16">
          <h1 className="text-3xl font-black uppercase leading-tight tracking-wider text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            TU HOGAR EN{" "}
            <span className="text-brand-blue">BARCELONA</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed tracking-wide text-white/80 sm:text-base">
            Expertos inmobiliarios con m\u00e1s de 20 a\u00f1os de experiencia.
            Compra, vende o alquila con la confianza de los mejores profesionales.
          </p>

          {/* 3 CTAs rectangulares */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Link
              href="#inmuebles"
              className="hover-lift w-full border-2 border-white bg-white/10 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-brand-black sm:w-auto"
            >
              QUIERO COMPRAR
            </Link>
            <Link
              href="#valoracion"
              className="hover-lift w-full bg-brand-blue px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-brand-blue/30 transition-all duration-300 hover:bg-brand-blue-dark sm:w-auto"
            >
              QUIERO VENDER
            </Link>
            <Link
              href="#inmuebles"
              className="hover-lift w-full border-2 border-white/50 bg-white/10 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white hover:text-white sm:w-auto"
            >
              QUIERO ALQUILAR
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <main className="bg-white">
        <PropertyGallery />
      </main>

      {/* Secci\u00f3n Valoraci\u00f3n */}
      <section
        id="valoracion"
        className="bg-brand-gray-light px-4 py-20"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-black uppercase tracking-wider text-brand-black sm:text-3xl">
            VALORA TU INMUEBLE
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-brand-blue" />
          <p className="mt-4 text-sm text-brand-gray">
            Descubre el valor real de tu propiedad con nuestra valoraci\u00f3n profesional gratuita.
          </p>

          <form className="mt-10 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-brand-black outline-none transition-all duration-300 focus:border-brand-blue focus:shadow-sm"
            />
            <input
              type="email"
              placeholder="Tu email"
              className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-brand-black outline-none transition-all duration-300 focus:border-brand-blue focus:shadow-sm"
            />
            <input
              type="tel"
              placeholder="Tu tel\u00e9fono"
              className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-brand-black outline-none transition-all duration-300 focus:border-brand-blue focus:shadow-sm"
            />
            <textarea
              placeholder="Direcci\u00f3n del inmueble"
              rows={3}
              className="w-full resize-none border border-gray-200 bg-white px-4 py-3 text-sm text-brand-black outline-none transition-all duration-300 focus:border-brand-blue focus:shadow-sm"
            />
            <button
              type="submit"
              className="hover-lift mt-2 w-full bg-brand-black py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-gray-800"
            >
              SOLICITAR VALORACI\u00d3N
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-brand-black py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Footer grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* Brand */}
            <div>
              <span className="text-xl font-black uppercase tracking-tight text-white">
                DOMUS <span className="text-brand-blue">BCN</span>
              </span>
              <p className="mt-3 text-xs leading-relaxed text-gray-500">
                Portal inmobiliario premium en Barcelona. M\u00e1s de 20 a\u00f1os de experiencia al servicio de nuestros clientes.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                CONTACTO
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-500">
                <li>\ud83d\udccd Barcelona, Espa\u00f1a</li>
                <li>\ud83d\udcde +34 93 XXX XX XX</li>
                <li>\u2709\ufe0f info@domusbcn.com</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                LEGAL
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-500">
                <li>Aviso Legal</li>
                <li>Pol\u00edtica de Privacidad</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
            \u00a9 2026 Domus BCN \u2014 Todos los derechos reservados
          </div>
        </div>
      </footer>
    </div>
  );
}
