"use client";

import { useRef } from "react";

export type Review = {
  name: string;
  role: string;
  text: string;
};

export function ReviewsSlider({ items }: { items: Review[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth : 360;
    el.scrollBy({ left: dir * (w + 20), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
          Горизонтальный просмотр
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="rounded-full border border-[color:var(--line)] px-4 py-2 text-sm hover:border-black/30 transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="rounded-full border border-[color:var(--line)] px-4 py-2 text-sm hover:border-black/30 transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth snap-x snap-mandatory"
      >
        {items.map((r) => (
          <article
            key={r.name}
            data-card
            className="snap-start min-w-[280px] sm:min-w-[420px] rounded-2xl border border-[color:var(--line)] bg-white p-6"
          >
            <p className="text-lg leading-8 tracking-tight">“{r.text}”</p>
            <div className="mt-6 border-t border-[color:var(--line)] pt-4">
              <div className="text-sm">{r.name}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                {r.role}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

