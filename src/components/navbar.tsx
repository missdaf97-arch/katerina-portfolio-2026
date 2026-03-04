"use client";

import { motion, useScroll } from "framer-motion";

const links = [
  { href: "#obo-mne", label: "Обо мне" },
  { href: "#raboty", label: "Мои работы" },
  { href: "#neiro", label: "Нейрофотография" },
  { href: "#gallery", label: "Галерея" },
  { href: "#kontakt", label: "Контакты" },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-[color:var(--line)]">
      <motion.div
        className="h-[2px] w-full bg-[color:var(--accent)] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex h-16 items-center justify-between gap-6">
          <a
            href="#top"
            aria-label="Наверх"
            className="group inline-flex items-center gap-3"
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[color:var(--accent)]"
            />
            <span
              aria-hidden="true"
              className="h-px w-16 bg-[color:var(--line)] group-hover:bg-black/30 transition-colors"
            />
          </a>

          <nav className="hidden md:flex items-center gap-5 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative py-1 text-[color:var(--muted)] hover:text-black transition-colors"
              >
                <span>{l.label}</span>
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="inline-flex items-center rounded-full border border-[color:var(--line)] px-4 py-2 text-sm hover:border-black/30 transition-colors"
          >
            Написать
          </a>
        </div>
      </div>
    </header>
  );
}

