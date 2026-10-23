import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";
import RecipePlaceholderCard from "./components/RecipePlaceholderCard";

export default function Home() {
  // We have 2 active recipes (Chilaquiles y Camarones capeados)
  // and 4 placeholder cards to complete the 6 spaces in the grid
  const placeholderCount = 4;
  const placeholders = Array.from({ length: placeholderCount }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-black">
      {/* Top Announcement Bar */}
      <div className="border-b-[3px] border-black bg-[#FFE043] px-4 py-2 font-black text-center text-xs sm:text-sm tracking-wider uppercase">
        Comida Mexicana • Recetas Caseras y Deliciosas
      </div>

      {/* Main Header */}
      <header className="border-b-[3.5px] border-black bg-white px-6 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-[#A7F3D0] px-3 py-1 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000] mb-3">
                <span>Cocina Tradicional</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-tight">
                Recetas Destacadas
              </h1>
              <p className="mt-2 text-base sm:text-lg font-medium text-zinc-700 max-w-2xl">
                Selecciona una de las recetas para consultar su lista completa de ingredientes, tiempos y el paso a paso detallado para preparar en casa.
              </p>
            </div>

            {/* Status badge in neobrutalism style */}
            <div className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-[#FFE043] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_#000]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-black animate-pulse" />
              <span>Recetas Disponibles</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Subheader info bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-black/15">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-[#10B981] border border-black animate-pulse" />
            <span className="text-sm font-black tracking-wide uppercase text-zinc-800">
              Mostrando recetas listas para cocinar
            </span>
          </div>

          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
            Haz clic en cualquier tarjeta disponible
          </span>
        </div>

        {/* 6 Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          {/* Active recipes */}
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}

          {/* Placeholders showing dots and loading text for upcoming cards */}
          {placeholders.map((idx) => (
            <RecipePlaceholderCard key={idx} index={idx} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t-[3.5px] border-black bg-white px-6 py-8">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-black text-base text-black">
              Comida Mexicana • Recetas Caseras
            </p>
            <p className="text-xs font-bold text-zinc-500 mt-1">
              Imágenes ubicadas en <code className="bg-zinc-200 px-1.5 py-0.5 rounded border border-black/20 text-zinc-800">public/img/recetas</code>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-black uppercase bg-[#FFE043] px-3 py-1 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000]">
              Next.js + Tailwind CSS
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
