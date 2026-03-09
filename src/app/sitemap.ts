import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '/',
    '/inmuebles',
    '/valoracion',
    '/nosotros',
    '/servicios',
    '/contacto',
  ];
}
