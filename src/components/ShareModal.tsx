"use client";

import { useState, useEffect } from "react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  price: string;
}

export default function ShareModal({ isOpen, onClose, title, price }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const url = typeof window !== "undefined" ? window.location.href : "";
  const text = `${title} — ${price}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm no-print">
      <div className="relative w-full max-w-sm rounded-lg bg-white p-6 shadow-xl animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-brand-black"
          aria-label="Cerrar modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="mb-4 text-lg font-bold uppercase tracking-wider text-brand-black">Compartir Inmueble</h3>
        
        <div className="flex flex-col gap-3">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded border border-[#25D366] bg-white py-2.5 text-sm font-semibold text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
          >
            WhatsApp
          </a>
          
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded border border-[#1877F2] bg-white py-2.5 text-sm font-semibold text-[#1877F2] transition-colors hover:bg-[#1877F2] hover:text-white"
          >
            Facebook
          </a>

          <a
            href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent("Mira este inmueble: " + url)}`}
            className="flex items-center justify-center gap-2 rounded border border-gray-300 bg-white py-2.5 text-sm font-semibold text-brand-gray-dark transition-colors hover:bg-gray-50"
          >
            Email
          </a>

          <div className="relative mt-2">
            <button
              onClick={handleCopy}
              className="w-full rounded bg-brand-black py-2.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-gray-dark"
            >
              Copiar Enlace
            </button>
            {copied && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-green-500 px-3 py-1 text-xs font-bold text-white shadow-md animate-in slide-in-from-bottom-2 fade-in">
                ¡Copiado!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
