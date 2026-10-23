import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRecipeById, getAllRecipes } from "../../data/recipes";
import RecipeDetailClient from "./RecipeDetailClient";

export async function generateStaticParams() {
  return getAllRecipes().map((recipe) => ({
    id: recipe.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const recipe = getRecipeById(id);

  if (!recipe) {
    return {
      title: "Receta no encontrada",
    };
  }

  return {
    title: `${recipe.title} - Recetario`,
    description: recipe.description,
  };
}

export default async function RecipeDetailPage({ params }: PageProps) {
  const { id } = await params;
  const recipe = getRecipeById(id);

  if (!recipe) {
    notFound();
  }

  return <RecipeDetailClient recipe={recipe} />;
}

