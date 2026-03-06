import Link from "next/link";
import Navbar from "../components/Navbar";
import PropertyGallery from "../components/PropertyGallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-brand-black px-4 py-24 text-center">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,164,228,0.08)_0%,transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="text-3xl font-black uppercase leading-tight tracking-wider text-white sm:text-5xl lg:text-6xl">
            TU HOGAR EN{" "}
            <span className="text-brand-blue">BARCELONA</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed tracking-wide text-gray-400 sm:text-base">
            Expertos inmobiliarios con más de 20 años de experiencia.
            Compra, vende o alquila con la confianza de los mejores profesionales.
          </p>

          {/* 3 CTAs rectangulares */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Link
              href="#inmuebles"
              className="w-full border-2 border-white bg-transparent px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-brand-black sm:w-auto"
            >
              QUIERO COMPRAR
            </Link>
            <Link
              href="#valoracion"
              className="w-full bg-brand-blue px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-blue-dark sm:w-auto"
            >
              QUIERO VENDER
            </Link>
            <Link
              href="#inmuebles"
              className="w-full border-2 border-gray-500 bg-transparent px-10 py-4 text-sm font-bold uppercase tracking-widest text-gray-400 transition-colors hover:border-white hover:text-white sm:w-auto"
            >
              QUIERO ALQUILAR
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <main>
        <PropertyGallery />
      </main>

      {/* Sección Valoración */}
      <section
        id="valoracion"
        className="bg-brand-gray-light px-4 py-20 dark:bg-gray-950"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-black uppercase tracking-wider text-brand-black dark:text-white sm:text-3xl">
            VALORA TU INMUEBLE
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-brand-blue" />
          <p className="mt-4 text-sm text-brand-gray">
            Descubre el valor real de tu propiedad con nuestra valoración profesional gratuita.
          </p>

          <form className="mt-10 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black outline-none transition-colors focus:border-brand-blue dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
            <input
              type="email"
              placeholder="Tu email"
              className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black outline-none transition-colors focus:border-brand-blue dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
            <input
              type="tel"
              placeholder="Tu teléfono"
              className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black outline-none transition-colors focus:border-brand-blue dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
            <textarea
              placeholder="Dirección del inmueble"
              rows={3}
              className="w-full resize-none border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black outline-none transition-colors focus:border-brand-blue dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
            <button
              type="submit"
              className="mt-2 w-full bg-brand-black py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              SOLICITAR VALORACIÓN
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-brand-black py-12 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Footer grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* Brand */}
            <div>
              <span className="text-xl font-black uppercase tracking-tight text-white">
                DOMUS <span className="text-brand-blue">BCN</span>
              </span>
              <p className="mt-3 text-xs leading-relaxed text-gray-500">
                Portal inmobiliario premium en Barcelona. Más de 20 años de experiencia al servicio de nuestros clientes.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                CONTACTO
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-500">
                <li>📍 Barcelona, España</li>
                <li>📞 +34 93 XXX XX XX</li>
                <li>✉️ info@domusbcn.com</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                LEGAL
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-500">
                <li>Aviso Legal</li>
                <li>Política de Privacidad</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
            © 2026 Domus BCN — Todos los derechos reservados
          </div>
        </div>
      </footer>
    </div>
  );
}
