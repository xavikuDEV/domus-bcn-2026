import { getStaticPaths } from 'next';

export const getStaticPaths = async () => {
  return [
    '/',
    '/inmuebles',
    '/valoracion',
    '/nosotros',
    '/servicios',
    '/contacto',
  ];
};
