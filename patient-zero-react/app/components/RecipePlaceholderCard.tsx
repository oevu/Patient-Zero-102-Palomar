export default function RecipePlaceholderCard({ index = 1 }: { index?: number }) {
  return (
    <div className="group block rounded-2xl border-[3.5px] border-black bg-white shadow-[6px_6px_0px_0px_#000] overflow-hidden opacity-90 select-none">
      {/* Placeholder Image container */}
      <div
        style={{ position: "relative" }}
        className="relative aspect-[16/10] w-full overflow-hidden border-b-[3.5px] border-black bg-[#F4F4F5] flex flex-col items-center justify-center p-6"
      >
        {/* Subtle grid or diagonal pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* Top badge placeholder */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-black uppercase text-zinc-500 bg-zinc-200 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000]">
            <span className="inline-block w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
            <span>Cargando...</span>
          </span>
        </div>

        {/* Center loading graphic */}
        <div className="flex flex-col items-center justify-center gap-2 text-zinc-400">
          <div className="h-12 w-12 rounded-xl border-2 border-dashed border-zinc-400 flex items-center justify-center">
            <svg
              className="w-6 h-6 animate-spin text-zinc-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400 font-black text-xs tracking-widest uppercase">
            <span>Cargando receta</span>
            <span className="inline-flex gap-0.5 animate-pulse text-sm">
              <span>•</span>
              <span>•</span>
              <span>•</span>
            </span>
          </div>
        </div>

        {/* Title overlay placeholder at bottom */}
        <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
          <div className="h-6 w-3/4 rounded-md bg-zinc-300/80 animate-pulse border border-black/10 flex items-center px-2">
            <span className="text-zinc-500 font-mono text-xs tracking-widest font-black">
              • • • • • • • •
            </span>
          </div>
        </div>
      </div>

      {/* Info bar below image */}
      <div className="px-5 py-4 bg-white flex items-center justify-between gap-4">
        {/* Preparación */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-black bg-zinc-100 text-zinc-400 shadow-[2px_2px_0px_0px_#000] shrink-0">
            <svg
              className="w-5 h-5 text-zinc-400"
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
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
              Preparación
            </span>
            <span className="text-sm font-black text-zinc-400 tracking-widest font-mono">
              • • •
            </span>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="h-8 w-[2px] bg-zinc-200" />

        {/* Dificultad */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-black bg-zinc-100 text-zinc-400 shadow-[2px_2px_0px_0px_#000] shrink-0">
            <svg
              className="w-5 h-5 text-zinc-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="3" y="14" width="4" height="7" rx="1" />
              <rect x="10" y="9" width="4" height="12" rx="1" opacity="0.3" />
              <rect x="17" y="4" width="4" height="17" rx="1" opacity="0.3" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
              Dificultad
            </span>
            <span className="text-sm font-black text-zinc-400 tracking-widest font-mono">
              • • •
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

