import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recetario - Deliciosas Recetas Caseras",
  description: "Recetas mexicanas y caseras con ingredientes y paso a paso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-[#FBF8F3] text-zinc-900 selection:bg-[#FFE043] selection:text-black">
        {children}
      </body>
    </html>
  );
}
