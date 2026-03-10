"use client";

import { useAgent } from "./AgentProvider";

interface ContactSidebarProps {
  referencia: string;
}

/**
 * ContactSidebar — Sticky sidebar showing the detected agent.
 * Uses useAgent() to display the agent's name from URL or localStorage.
 */
export default function ContactSidebar({ referencia }: ContactSidebarProps) {
  const { agentName } = useAgent();

  const handleEmailContact = () => {
    const subject = encodeURIComponent(
      `Consulta sobre inmueble ${referencia} — Domus BCN`,
    );
    const body = encodeURIComponent(
      `Hola ${agentName},\n\nMe interesa el inmueble con referencia ${referencia}.\n¿Podrían darme más información?\n\nGracias.`,
    );
    window.location.href = `mailto:info@domusbcn.com?subject=${subject}&body=${body}`;
  };

  return (
    <aside className="sticky top-28">
      <div className="flex flex-col gap-6 border border-gray-100 bg-white p-6 shadow-sm">
        {/* Agent header */}
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="flex h-14 w-14 items-center justify-center bg-brand-blue text-xl font-black text-white">
            {agentName.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-black">
              {agentName}
            </p>
            <p className="text-xs text-brand-gray">Agente inmobiliario</p>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-2 border-t border-gray-100 pt-4 text-sm text-brand-gray-dark">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 text-brand-blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span>+34 93 XXX XX XX</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 text-brand-blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <span>info@domusbcn.com</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleEmailContact}
          className="hover-lift w-full bg-brand-blue py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-brand-blue/20 transition-all duration-300 hover:bg-brand-blue-dark"
        >
          Contactar con {agentName}
        </button>

        {/* Quick contact form */}
        {/* Quick contact form */}
        <form className="flex flex-col gap-3 border-t border-gray-100 pt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">
            Formulario rápido
          </p>
          <input
            id="contact-name"
            name="contact-name"
            type="text"
            placeholder="Tu nombre"
            className="w-full border border-gray-200 bg-white px-3 py-2.5 text-sm text-brand-black outline-none transition-all duration-200 focus:border-brand-blue"
          />
          <input
            id="contact-phone"
            name="contact-phone"
            type="tel"
            placeholder="Tu teléfono"
            className="w-full border border-gray-200 bg-white px-3 py-2.5 text-sm text-brand-black outline-none transition-all duration-200 focus:border-brand-blue"
          />
          <textarea
            id="contact-message"
            name="contact-message"
            placeholder="Me interesa este inmueble..."
            rows={3}
            className="w-full resize-none border border-gray-200 bg-white px-3 py-2.5 text-sm text-brand-black outline-none transition-all duration-200 focus:border-brand-blue"
          />
          <button
            type="submit"
            className="hover-lift w-full border border-brand-black bg-brand-black py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-brand-black"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </aside>
  );
}
