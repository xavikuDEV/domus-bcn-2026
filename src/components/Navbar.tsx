import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl">
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

        {/* Menu central */}
        <ul className="hidden items-center gap-8 md:flex">
          {["Inicio", "Servicios", "Valoraci\u00f3n", "Contacto"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold uppercase tracking-wider text-brand-gray-dark transition-colors duration-300 hover:text-brand-blue"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#valoracion"
          className="hover-lift hidden rounded-none bg-brand-blue px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-brand-blue/20 hover:bg-brand-blue-dark sm:inline-block"
        >
          VALORA TU PISO
        </Link>

        {/* Mobile menu button */}
        <button
          className="flex items-center md:hidden"
          aria-label="Abrir men\u00fa"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-brand-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
