"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export type GalleryItem = {
  src: string;
  alt: string;
  aspect: "square" | "portrait" | "landscape" | "tall";
};

export function MasonryLightbox({ items }: { items: GalleryItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const active = useMemo(
    () => (openIndex === null ? null : items[openIndex] ?? null),
    [openIndex, items],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? 0 : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) =>
          i === null ? 0 : (i - 1 + items.length) % items.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [items.length, openIndex]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {items.map((item, idx) => (
          <button
            key={`${item.src}-${idx}`}
            type="button"
            onClick={() => setOpenIndex(idx)}
            className="mb-5 block w-full break-inside-avoid rounded-2xl border border-black/10 bg-white p-2 hover:border-black/20 transition-colors"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="w-full h-auto rounded-xl bg-white object-contain"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Просмотр изображения"
          >
            <motion.div
              className="absolute left-1/2 top-1/2 w-[min(92vw,960px)] -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.99, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.21, 0.72, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={active.src}
                    alt={active.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-5 py-4 text-white/80">
                  <div className="text-sm">{active.alt}</div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="rounded-full border border-white/15 px-4 py-2 text-sm hover:border-white/30 transition-colors"
                      onClick={() =>
                        setOpenIndex((i) =>
                          i === null ? 0 : (i - 1 + items.length) % items.length,
                        )
                      }
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-white/15 px-4 py-2 text-sm hover:border-white/30 transition-colors"
                      onClick={() =>
                        setOpenIndex((i) =>
                          i === null ? 0 : (i + 1) % items.length,
                        )
                      }
                    >
                      →
                    </button>
                    <button
                      type="button"
                      className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm text-white hover:opacity-90 transition-opacity"
                      onClick={() => setOpenIndex(null)}
                    >
                      Закрыть
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center text-xs text-white/60">
                Esc — закрыть, ←/→ — листать
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

