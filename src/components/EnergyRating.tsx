export default function EnergyRating({
  claseEnergetica,
}: {
  claseEnergetica?: string;
}) {
  if (!claseEnergetica) return null;

  const validClasses = ["A", "B", "C", "D", "E", "F", "G"];
  const upperClass = claseEnergetica.toUpperCase();
  const isValid = validClasses.includes(upperClass);

  if (!isValid) return null;

  const getWidth = (c: string) => {
    switch (c) {
      case "A": return "40%";
      case "B": return "50%";
      case "C": return "60%";
      case "D": return "70%";
      case "E": return "80%";
      case "F": return "90%";
      case "G": return "100%";
      default: return "100%";
    }
  };

  const getColor = (c: string) => {
    switch (c) {
      case "A": return "bg-green-600";
      case "B": return "bg-green-500";
      case "C": return "bg-green-400";
      case "D": return "bg-yellow-400";
      case "E": return "bg-orange-400";
      case "F": return "bg-orange-500";
      case "G": return "bg-red-600";
      default: return "bg-gray-400";
    }
  };

  return (
    <section className="mt-8 border-t border-gray-100 pt-6">
      <h2 className="mb-6 text-lg font-bold uppercase tracking-wider text-brand-black">
        Eficiencia Energética
      </h2>
      <div className="flex w-full max-w-sm flex-col gap-1.5 font-sans">
        {validClasses.map((c) => {
          const isCurrent = c === upperClass;
          return (
            <div key={c} className="flex items-center gap-4">
              <div
                className={`flex h-8 items-center justify-between px-3 text-white transition-all ${
                  isCurrent ? `${getColor(c)} shadow-md font-bold text-lg` : `${getColor(c)} opacity-60 text-sm print:opacity-100`
                }`}
                style={{ width: getWidth(c), WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}
              >
                <span>{c}</span>
                {isCurrent && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 drop-shadow-sm">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              {isCurrent && (
                <span className="text-sm font-bold text-brand-black">Actual</span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
