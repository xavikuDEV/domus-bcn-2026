"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { name: "Inicio", path: "/" },
  { name: "Comprar", path: "/inmuebles?operacion=venta" },
  { name: "Alquilar", path: "/inmuebles?operacion=alquiler" },
  { name: "Servicios", path: "/servicios" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200/30 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black uppercase tracking-tight text-brand-black">
            DOMUS
          </span>
          <span className="text-2xl font-black uppercase tracking-tight text-brand-blue">
            BCN
          </span>
        </Link>

        {/* Menu central — desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="text-sm font-semibold uppercase tracking-wider text-brand-gray-dark transition-colors duration-300 hover:text-brand-blue"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <Link
          href="/valoracion"
          className="hover-lift hidden rounded-none bg-brand-blue px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-brand-blue/20 hover:bg-brand-blue-dark sm:inline-block"
        >
          VALORA TU INMUEBLE
        </Link>

        {/* Mobile menu button — hamburger / X */}
        <button
          className="flex items-center md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-brand-black transition-transform duration-300"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel — slide down */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm font-semibold uppercase tracking-wider text-brand-gray-dark transition-colors duration-300 hover:text-brand-blue"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link
              href="/valoracion"
              onClick={() => setIsOpen(false)}
              className="hover-lift block bg-brand-blue py-3 text-center text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-brand-blue-dark"
            >
              VALORA TU INMUEBLE
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
