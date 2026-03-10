import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://domusbcn2026.com";
  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/inmuebles` },
    { url: `${baseUrl}/valoracion` },
    { url: `${baseUrl}/nosotros` },
    { url: `${baseUrl}/servicios` },
    { url: `${baseUrl}/contacto` },
  ];
}
