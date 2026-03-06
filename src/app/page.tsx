import PropertyGallery from "../components/PropertyGallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="absolute inset-0 bg-linear-to-br from-amber-50/50 via-transparent to-sky-50/30 dark:from-amber-950/20 dark:to-sky-950/10" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Barcelona 2026
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Domus{" "}
              <span className="bg-linear-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                BCN
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Tu portal inmobiliario premium en Barcelona. Encuentra tu hogar
              ideal entre nuestra selección de propiedades exclusivas.
            </p>
          </div>
        </div>
      </header>

      {/* Gallery */}
      <main>
        <PropertyGallery />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-slate-500 dark:text-slate-400">
          © 2026 Domus BCN — Portal inmobiliario premium
        </div>
      </footer>
    </div>
  );
}
