"use client";

interface ContactButtonProps {
  agentEmail: string;
  reference: string;
}

export default function ContactButton({
  agentEmail,
  reference,
}: ContactButtonProps) {
  const handleContact = () => {
    const subject = encodeURIComponent(
      `Consulta sobre inmueble ${reference} — Domus BCN`,
    );
    const body = encodeURIComponent(
      `Hola,\n\nMe interesa el inmueble con referencia ${reference}.\n¿Podrían darme más información?\n\nGracias.`,
    );
    window.location.href = `mailto:${agentEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <button
      onClick={handleContact}
      className="group relative w-full cursor-pointer overflow-hidden rounded-xl bg-linear-to-r from-amber-500 to-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:shadow-amber-500/25 active:scale-[0.98]"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
          <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
        </svg>
        Contactar
      </span>
      <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 group-hover:translate-x-full" />
    </button>
  );
}
