"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface DynamicMapProps {
  ciudad: string;
  zona?: string | null;
}

// Very basic geocoding mock for demonstration purposes
// In a real app, this would use a geocoding service based on the address
const GEO_MOCK: Record<string, [number, number]> = {
  "Barcelona": [41.3851, 2.1734],
  "Sitges": [41.2372, 1.8059],
  "Sant Cugat del Vallès": [41.4721, 2.0864],
  "Madrid": [40.4168, -3.7038],
};

export default function DynamicMap({ ciudad, zona }: DynamicMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-64 w-full animate-pulse bg-gray-100 flex items-center justify-center text-brand-gray text-sm">
        Cargando mapa...
      </div>
    );
  }

  // Get approx location from mock or default to Barcelona center
  const locationName = zona ? `${zona}, ${ciudad}` : ciudad;
  const centerPosition = GEO_MOCK[ciudad] || GEO_MOCK["Barcelona"];

  return (
    <div className="h-64 sm:h-80 w-full overflow-hidden border border-gray-200 z-0">
      <MapContainer
        center={centerPosition}
        zoom={14}
        scrollWheelZoom={false}
        className="h-full w-full z-0"
        style={{ zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <CircleMarker
          center={centerPosition}
          pathOptions={{ 
            fillColor: "#0267ff", 
            color: "#024bb8", 
            weight: 2, 
            fillOpacity: 0.2 
          }}
          radius={40}
        >
          <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
            <span className="font-bold text-brand-black text-xs uppercase tracking-wider">
              {locationName}
            </span>
          </Tooltip>
        </CircleMarker>
      </MapContainer>
    </div>
  );
}
