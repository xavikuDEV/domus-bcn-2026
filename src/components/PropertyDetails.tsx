interface PropertyDetailsProps {
  anoConstruccion?: number;
  metrosUtiles?: number;
  orientacion?: string;
  planta?: string;
  direccion?: string;
}

export default function PropertyDetails({
  anoConstruccion,
  metrosUtiles,
  orientacion,
  planta,
  direccion,
}: PropertyDetailsProps) {
  const details = [
    { label: "Año construcción", value: anoConstruccion, icon: "🏢" },
    { label: "Superficie útil", value: metrosUtiles ? `${metrosUtiles} m²` : null, icon: "📏" },
    { label: "Orientación", value: orientacion, icon: "🧭" },
    { label: "Planta", value: planta, icon: "🛗" },
    { label: "Dirección", value: direccion, icon: "📍" },
  ].filter((d) => d.value);

  if (details.length === 0) return null;

  return (
    <section className="mt-8 border-t border-gray-100 pt-6">
      <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-brand-black">
        Detalles Técnicos
      </h2>
      <div className="grid grid-cols-2 gap-y-4 gap-x-8 sm:grid-cols-3">
        {details.map((detail, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gray">
              {detail.icon} {detail.label}
            </span>
            <span className="mt-1 text-sm font-medium text-brand-black">
              {detail.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
