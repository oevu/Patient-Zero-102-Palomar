"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Recipe, recipes } from "../../data/recipes";

interface RecipeDetailClientProps {
  recipe: Recipe;
}

export default function RecipeDetailClient({ recipe }: RecipeDetailClientProps) {
  // Interactive ingredient checkboxes
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  // Interactive completed steps
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  // Copied feedback
  const [copied, setCopied] = useState(false);

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const toggleStep = (stepNum: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepNum]: !prev[stepNum],
    }));
  };

  const copyIngredients = () => {
    const text = `Ingredientes para ${recipe.title}:\n` +
      recipe.ingredients.map((ing) => `- ${ing.amount ? `${ing.amount} ` : ""}${ing.item}`).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Find other recipes for the "Otras recetas recomendadas" section
  const otherRecipes = recipes.filter((r) => r.id !== recipe.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-black pb-20">
      {/* Top Banner */}
      <div className="border-b-[3px] border-black bg-[#FFE043] px-4 py-2 font-black text-center text-xs sm:text-sm tracking-wider uppercase">
        Comida Mexicana • Paso a Paso & Ingredientes
      </div>

      {/* Navigation Bar */}
      <nav className="border-b-[3.5px] border-black bg-white px-6 py-4 sticky top-0 z-30">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <Link
            href="/"
            className="neo-btn inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-black uppercase text-black hover:bg-[#FFE043]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Volver a recetas</span>
          </Link>

          <span
            style={{ backgroundColor: recipe.tagColor }}
            className="hidden sm:inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000]"
          >
            {recipe.category}
          </span>
        </div>
      </nav>

      {/* Main Recipe Content */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-8 sm:pt-10">
        {/* Main Card with Neobrutalism Design */}
        <article className="rounded-3xl border-[3.5px] border-black bg-white shadow-[8px_8px_0px_0px_#000] overflow-hidden">
          {/* Hero Image Section */}
          <div
            style={{ position: "relative" }}
            className="relative aspect-[16/9] md:aspect-[21/9] w-full border-b-[3.5px] border-black overflow-hidden bg-zinc-100"
          >
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Title Overlay in Hero Image */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
              <span
                style={{ backgroundColor: recipe.tagColor }}
                className="inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black rounded-md shadow-[2px_2px_0px_0px_#000] text-black mb-2"
              >
                {recipe.category}
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] tracking-tight">
                {recipe.title}
              </h1>
            </div>
          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-b-[3.5px] border-black bg-[#FAF5E9]">
            {/* Preparación */}
            <div className="flex items-center gap-3 p-4 border-r-[2px] border-b-[2px] sm:border-b-0 border-black/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-[#FFE5EC] shadow-[2px_2px_0px_0px_#000] shrink-0">
                <svg className="w-5 h-5 text-[#5C1D24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500 block">
                  Preparación
                </span>
                <span className="text-sm sm:text-base font-black text-black">
                  {recipe.prepTime}
                </span>
              </div>
            </div>

            {/* Tiempo Total */}
            <div className="flex items-center gap-3 p-4 sm:border-r-[2px] border-b-[2px] sm:border-b-0 border-black/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-[#FEF08A] shadow-[2px_2px_0px_0px_#000] shrink-0">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500 block">
                  Tiempo Total
                </span>
                <span className="text-sm sm:text-base font-black text-black">
                  {recipe.totalTime}
                </span>
              </div>
            </div>

            {/* Dificultad */}
            <div className="flex items-center gap-3 p-4 border-r-[2px] border-black/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-[#E8F0FE] shadow-[2px_2px_0px_0px_#000] shrink-0">
                <svg className="w-5 h-5 text-[#1E3A8A]" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="14" width="4" height="7" rx="1" />
                  <rect x="10" y="9" width="4" height="12" rx="1" />
                  <rect x="17" y="4" width="4" height="17" rx="1" className={recipe.difficultyLevel >= 3 ? "opacity-100" : "opacity-30"} />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500 block">
                  Dificultad
                </span>
                <span className="text-sm sm:text-base font-black text-black">
                  {recipe.difficulty}
                </span>
              </div>
            </div>

            {/* Porciones */}
            <div className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-[#D1FAE5] shadow-[2px_2px_0px_0px_#000] shrink-0">
                <svg className="w-5 h-5 text-[#065F46]" fill="none" stroke="currentColor" strokeWidth="2.3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500 block">
                  Porciones
                </span>
                <span className="text-sm sm:text-base font-black text-black">
                  {recipe.servings}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-6 sm:p-8 border-b-[3.5px] border-black bg-white">
            <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-medium">
              {recipe.description}
            </p>
          </div>

          {/* Grid: Ingredientes + Paso a Paso */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* INGREDIENTES COLUMN */}
            <section className="lg:col-span-5 p-6 sm:p-8 bg-[#FFFDF8] border-b-[3.5px] lg:border-b-0 lg:border-r-[3.5px] border-black">
              <div className="flex items-center justify-between pb-4 border-b-2 border-black mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                    Ingredientes
                  </h2>
                  <span className="text-xs font-bold text-zinc-600 uppercase tracking-wider">
                    {recipe.servings} • {recipe.ingredients.length} items
                  </span>
                </div>
              </div>

              {/* Action: Copy / Share Ingredients */}
              <div className="mb-6 flex flex-wrap gap-2">
                <button
                  onClick={copyIngredients}
                  className="neo-btn flex-1 py-2 px-3 rounded-xl bg-white hover:bg-[#FFE043] text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-[3px_3px_0px_0px_#000]"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                  <span>{copied ? "¡Copiado!" : "Copiar lista"}</span>
                </button>
              </div>

              {/* Ingredients List */}
              <ul className="space-y-3">
                {recipe.ingredients.map((ing, idx) => {
                  const isChecked = !!checkedIngredients[idx];
                  return (
                    <li
                      key={idx}
                      onClick={() => toggleIngredient(idx)}
                      className={`group flex items-start justify-between gap-3 p-3 rounded-xl border-2 border-black cursor-pointer transition-all ${
                        isChecked
                          ? "bg-zinc-100 opacity-60 shadow-none line-through"
                          : "bg-white shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="mt-1 h-4 w-4 rounded border-2 border-black text-black accent-black cursor-pointer"
                        />
                        <span className="text-sm font-bold text-zinc-900 group-hover:text-black">
                          {ing.item}
                        </span>
                      </div>
                      {ing.amount && (
                        <span className="text-xs font-black text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded border border-black/30 shrink-0">
                          {ing.amount}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Ingredient Helper Box */}
              <div className="mt-6 p-4 rounded-xl border-2 border-black bg-[#FEF08A] shadow-[3px_3px_0px_0px_#000]">
                <p className="text-xs font-bold text-zinc-900">
                  Tip: Haz clic en cada ingrediente para tacharlo conforme lo tengas listo en tu mesa de trabajo.
                </p>
              </div>
            </section>

            {/* PASO A PASO / ¡A COCINAR! COLUMN */}
            <section className="lg:col-span-7 p-6 sm:p-8 bg-white">
              <div className="flex items-center justify-between pb-4 border-b-2 border-black mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                    ¡A cocinar! Paso a paso
                  </h2>
                  <span className="text-xs font-bold text-zinc-600 uppercase tracking-wider">
                    {recipe.steps.length} pasos para disfrutar
                  </span>
                </div>
              </div>

              {/* Numbered Steps */}
              <div className="space-y-6">
                {recipe.steps.map((step) => {
                  const isDone = !!completedSteps[step.number];
                  return (
                    <div
                      key={step.number}
                      className={`rounded-2xl border-2 border-black p-5 transition-all ${
                        isDone
                          ? "bg-[#D1FAE5]/60 shadow-none border-zinc-500"
                          : "bg-white shadow-[4px_4px_0px_0px_#000]"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Step Number Badge */}
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2 border-black font-black text-base shadow-[2px_2px_0px_0px_#000] ${
                            isDone ? "bg-[#10B981] text-white" : "bg-[#FFE043] text-black"
                          }`}
                        >
                          {isDone ? (
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            step.number
                          )}
                        </div>

                        {/* Step Content */}
                        <div className="flex-1">
                          {step.title && (
                            <h3 className="text-base sm:text-lg font-black text-black mb-1.5">
                              {step.title}
                            </h3>
                          )}
                          <p className="text-sm sm:text-base font-medium text-zinc-800 leading-relaxed">
                            {step.instruction}
                          </p>

                          <div className="mt-3 flex items-center justify-between pt-2 border-t border-black/10">
                            <button
                              onClick={() => toggleStep(step.number)}
                              className="text-xs font-black uppercase text-zinc-700 hover:text-black underline cursor-pointer"
                            >
                              {isDone ? "Desmarcar paso" : "Marcar paso como completado"}
                            </button>
                            <span className="text-[11px] font-bold text-zinc-400">
                              Paso {step.number} de {recipe.steps.length}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </article>

        {/* Other Recommended Recipes */}
        {otherRecipes.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-black">
              <h3 className="text-2xl font-black text-black tracking-tight">
                Otra receta que te encantará
              </h3>
              <Link
                href="/"
                className="text-xs font-black uppercase tracking-wider text-black underline hover:text-[#5C1D24]"
              >
                Ver todas →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {otherRecipes.map((other) => (
                <Link
                  key={other.id}
                  href={`/recetas/${other.id}`}
                  className="group block rounded-2xl border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] overflow-hidden transition-all"
                >
                  <div
                    style={{ position: "relative" }}
                    className="relative aspect-[16/10] w-full border-b-2 border-black bg-zinc-100"
                  >
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-2 left-3 right-3 text-sm font-black text-white leading-tight drop-shadow">
                      {other.shortTitle}
                    </span>
                  </div>
                  <div className="p-3 flex items-center justify-between text-xs font-bold text-zinc-700 bg-white">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#5C1D24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                        <circle cx="12" cy="12" r="9" />
                        <polyline points="12 7 12 12 15 15" />
                      </svg>
                      {other.prepTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#5C1D24]" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="3" y="14" width="4" height="7" rx="1" />
                        <rect x="10" y="9" width="4" height="12" rx="1" />
                        <rect x="17" y="4" width="4" height="17" rx="1" />
                      </svg>
                      {other.difficulty}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

