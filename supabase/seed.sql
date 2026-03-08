-- DOMUS BCN 2026 - Fase 3 Buscador
-- Diversificación Masiva (Semilla SQL)
-- Tipos: 3 Pisos, 1 Casa con piscina, 1 Local comercial, 1 Parking y 1 Ático.
-- Ubicaciones: Barcelona (Eixample, Gràcia), Sabadell, Mataró y Sant Cugat.

-- Eliminar todos los inmuebles actuales para limpieza total de los demos
DELETE FROM inmuebles;

INSERT INTO inmuebles 
(id, referencia, tipo_oferta, operacion, ciudad, zona, precio, metros_cons, habitaciones, banos, descripcion, titulo, fotos, clase_energetica, ano_construccion, direccion, metros_utiles, orientacion, caracteristicas, planta) 
VALUES
('demo-001', 'REF-AT-001', 'Atico', 'Venta', 'Barcelona', 'Eixample', 1250000, 180, 4, 3, 'Impresionante ático de superlujo con terraza a 3 vientos y vistas a la Sagrada Familia. Reformado en 2025 con materiales de altísima gama.', 'Ático Exclusivo con Terraza Panorámica', ARRAY['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80'], 'A', 1910, 'Passeig de Gràcia', 165, 'Sur', ARRAY['Terraza 80m2', 'Domótica', 'Suelo radiante', 'Ascensor directo'], 'Ático'),

('demo-002', 'REF-PI-002', 'Piso', 'Venta', 'Barcelona', 'Gràcia', 650000, 110, 3, 2, 'Piso con encanto en pleno corazón de Gràcia. Elementos de origen, techos con volta catalana y galería interior bañada en luz natural.', 'Piso Regio con Volta Catalana', ARRAY['https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80'], 'C', 1930, 'Carrer de Verdi', 95, 'Oeste', ARRAY['Techos altos', 'Balcón', 'Aire acondicionado'], '2ª'),

('demo-003', 'REF-CA-003', 'Casa', 'Venta', 'Sant Cugat del Vallès', 'Valldoreix', 2500000, 500, 6, 5, 'Espectacular villa de diseño moderno con piscina infinita. Más de 1000m2 de parcela plana en una de las zonas más residenciales y exclusivas.', 'Villa de Diseño Moderno con Piscina', ARRAY['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80'], 'A', 2022, 'Avinguda de Valldoreix', 480, 'Sur', ARRAY['Piscina Infinita', 'Cine privado', 'Gimnasio', 'Jardín tropical', 'Garaje 4 coches'], 'Chalet'),

('demo-004', 'REF-PI-004', 'Piso', 'Alquiler', 'Sabadell', 'Centre', 1200, 85, 2, 1, 'Luminoso piso céntrico de obra nueva, a estrenar. Excelentes acabados y plaza de parking incluida en la misma finca.', 'Piso de Obra Nueva en el Centro', ARRAY['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80'], 'B', 2024, 'Rambla', 75, 'Este', ARRAY['Obra Nueva', 'Parking incluido', 'Trastero'], '1ª'),

('demo-005', 'REF-LC-005', 'Local', 'Venta', 'Sabadell', 'Creu Alta', 180000, 150, 0, 1, 'Local comercial a pie de calle con gran escaparate de 10 metros lineales. Ideal para restauración o comercio de barrio, alto flujo peatonal.', 'Local Comercial con Gran Escaparate', ARRAY['https://images.unsplash.com/photo-1582211594533-25b8b15d97f5?auto=format&fit=crop&q=80'], 'D', 1980, 'Eix Macià', 140, 'Norte', ARRAY['Diáfano', 'Salida de humos', 'Aseo discapacitados'], 'Bajos'),

('demo-006', 'REF-PK-006', 'Parking', 'Venta', 'Mataró', 'Centre', 15000, 12, 0, 0, 'Plaza de parking grande para coche SUV y moto. Fácil maniobra de aparcamiento en planta -1 con acceso automático mediante mando.', 'Plaza de Parking Grande', ARRAY['https://plus.unsplash.com/premium_photo-1661877684074-6ff65057b5fb?auto=format&fit=crop&q=80'], 'G', 2005, 'Riera', 12, 'Interior', ARRAY['Mando a distancia', 'Planta -1', 'Acceso amplio'], 'Sótano'),

('demo-007', 'REF-PI-007', 'Piso', 'Venta', 'Mataró', 'La Habana', 320000, 105, 3, 2, 'Piso reformado con vistas laterales al mar. Gran salón-comedor con salida a balcón disfrutable, ideal para las mañanas de domingo.', 'Piso Reformado a Pasos del Mar', ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80'], 'C', 1995, 'Carrer de Sant Agustí', 95, 'Sur', ARRAY['Vistas al mar', 'Balcón terraza', 'Ascensor'], '3ª');
