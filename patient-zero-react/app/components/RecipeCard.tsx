import Link from "next/link";
import Image from "next/image";
import { Recipe } from "../data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recetas/${recipe.id}`}
      className="group block rounded-2xl border-[3.5px] border-black bg-white shadow-[6px_6px_0px_0px_#000] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[9px_9px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#000] overflow-hidden"
    >
      {/* Image container */}
      <div
        style={{ position: "relative" }}
        className="relative aspect-[16/10] w-full overflow-hidden border-b-[3.5px] border-black bg-zinc-100"
      >
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Subtle dark gradient overlay at bottom of image for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <span
            style={{ backgroundColor: recipe.tagColor || "#FFE043" }}
            className="inline-block px-2.5 py-1 text-xs font-black uppercase tracking-wider text-black border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000]"
          >
            {recipe.category}
          </span>
        </div>

        {/* Title over image matching design in user reference image */}
        <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] tracking-tight">
            {recipe.shortTitle}
          </h3>
        </div>
      </div>

      {/* Info bar below image */}
      <div className="px-5 py-4 bg-white flex items-center justify-between gap-4">
        {/* Preparación */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-black bg-[#FFE5EC] text-[#5C1D24] shadow-[2px_2px_0px_0px_#000] shrink-0">
            <svg
              className="w-5 h-5 text-[#5C1D24]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 15" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
              Preparación
            </span>
            <span className="text-sm sm:text-base font-black text-[#5C1D24] tracking-tight">
              {recipe.prepTime}
            </span>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="h-8 w-[2px] bg-zinc-200" />

        {/* Dificultad */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-black bg-[#E8F0FE] text-[#1E3A8A] shadow-[2px_2px_0px_0px_#000] shrink-0">
            {/* 3-bar signal icon */}
            <svg
              className="w-5 h-5 text-[#5C1D24]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="3" y="14" width="4" height="7" rx="1" />
              <rect
                x="10"
                y="9"
                width="4"
                height="12"
                rx="1"
                className={recipe.difficultyLevel >= 2 ? "opacity-100" : "opacity-30"}
              />
              <rect
                x="17"
                y="4"
                width="4"
                height="17"
                rx="1"
                className={recipe.difficultyLevel >= 3 ? "opacity-100" : "opacity-30"}
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
              Dificultad
            </span>
            <span className="text-sm sm:text-base font-black text-[#5C1D24] tracking-tight">
              {recipe.difficulty}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

