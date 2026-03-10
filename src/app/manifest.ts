import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Domus BCN",
    short_name: "Domus BCN",
    description: "Encuentra tu hogar ideal en Barcelona",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#D4AF37",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
