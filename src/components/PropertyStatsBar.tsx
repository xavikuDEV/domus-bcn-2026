interface PropertyStatsBarProps {
  tipoOferta: string;
  habitaciones: number;
  banos: number;
  metrosCons: number;
}

/** Icon: Bed / Room */
function BedroomIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
    </svg>
  );
}

/** Icon: Bathroom */
function BathroomIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

/** Icon: Square meters / Area */
function AreaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
  );
}

/** Icon: Car / Parking */
function ParkingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

/** Icon: Storefront / Local */
function StorefrontIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
    </svg>
  );
}

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

/**
 * Build stats based on property type.
 * Parking → m² de maniobra (no rooms/baths)
 * Local → m², tipo de uso (no rooms)
 * Default (Piso, Casa, etc.) → habitaciones, baños, m²
 */
function buildStats(props: PropertyStatsBarProps): StatItem[] {
  const tipo = props.tipoOferta.toLowerCase();

  if (tipo.includes("parking") || tipo.includes("garaje") || tipo.includes("plaza")) {
    const stats: StatItem[] = [];
    if (props.metrosCons > 0) {
      stats.push({ icon: <AreaIcon />, value: `${props.metrosCons}`, label: "m² maniobra" });
    }
    stats.push({ icon: <ParkingIcon />, value: "1", label: "plaza" });
    return stats;
  }

  if (tipo.includes("local") || tipo.includes("oficina") || tipo.includes("comercial")) {
    const stats: StatItem[] = [];
    if (props.metrosCons > 0) {
      stats.push({ icon: <AreaIcon />, value: `${props.metrosCons}`, label: "m²" });
    }
    stats.push({ icon: <StorefrontIcon />, value: props.tipoOferta, label: "tipo" });
    if (props.banos > 0) {
      stats.push({ icon: <BathroomIcon />, value: `${props.banos}`, label: "baños" });
    }
    return stats;
  }

  // Default: Piso, Casa, Apartamento, etc.
  const stats: StatItem[] = [];
  if (props.habitaciones > 0) {
    stats.push({ icon: <BedroomIcon />, value: `${props.habitaciones}`, label: "hab." });
  }
  if (props.banos > 0) {
    stats.push({ icon: <BathroomIcon />, value: `${props.banos}`, label: "baños" });
  }
  if (props.metrosCons > 0) {
    stats.push({ icon: <AreaIcon />, value: `${props.metrosCons}`, label: "m²" });
  }
  return stats;
}

/**
 * PropertyStatsBar — Contextual stat icons based on property type.
 * Pisos/Casas show bedrooms + baths + m².
 * Parkings show m² + plaza.
 * Locales show m² + type.
 */
export default function PropertyStatsBar(props: PropertyStatsBarProps) {
  const stats = buildStats(props);

  if (stats.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-6 border-y border-gray-100 py-5 print:py-2 print:mb-6 print:pb-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-2 text-brand-gray-dark"
        >
          <span className="text-brand-blue">{stat.icon}</span>
          <span className="text-lg font-bold">{stat.value}</span>
          <span className="text-xs text-brand-gray">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
