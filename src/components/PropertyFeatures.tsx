interface PropertyFeaturesProps {
  caracteristicas?: string[];
}

export default function PropertyFeatures({
  caracteristicas,
}: PropertyFeaturesProps) {
  if (!caracteristicas || caracteristicas.length === 0) return null;

  return (
    <section className="mt-8 border-t border-gray-100 pt-6">
      <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-brand-black">
        Características
      </h2>
      <ul className="grid grid-cols-2 gap-y-3 gap-x-6 sm:grid-cols-3">
        {caracteristicas.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-brand-gray-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span className="leading-tight">{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
