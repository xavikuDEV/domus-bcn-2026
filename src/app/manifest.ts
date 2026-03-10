import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Domus BCN",
    short_name: "Domus BCN",
    description: "Encuentra tu hogar ideal en Barcelona",
    start_url: "/",
    id: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#D4AF37",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/screenshot-wide.png",
        sizes: "1280x720",
        type: "image/png",
        // @ts-ignore - Next.js a veces no reconoce este campo pero es estándar PWA
        form_factor: "wide",
        label: "Escritorio Domus BCN",
      },
      {
        src: "/screenshot-mobile.png",
        sizes: "390x844",
        type: "image/png",
        label: "Móvil Domus BCN",
      },
    ],
  };
}
