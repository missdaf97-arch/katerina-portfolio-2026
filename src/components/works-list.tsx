"use client";

export type WorkItem = {
  title: string;
  subtitle: string;
  imageSrc: string;
};

export function WorksList({ items }: { items: WorkItem[] }) {
  return (
    <div className="grid gap-5 md:gap-6 md:grid-cols-4">
      {items.map((item, idx) => (
        <a
          key={item.title}
          href="#gallery"
          className="group flex flex-col justify-between rounded-2xl border border-[color:var(--accent)] bg-[color:var(--accent)] px-4 py-5 text-left text-white transition-colors hover:bg-white hover:text-[color:var(--accent)]"
        >
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-white/70 group-hover:text-[color:var(--accent)]">
              {(idx + 1).toString().padStart(2, "0")}
            </span>
          </div>
          <div className="mt-4 space-y-2">
            <div className="text-lg md:text-xl tracking-tight">
              {item.title}
            </div>
            <p className="text-sm leading-6 text-white/85 group-hover:text-[color:var(--accent)]">
              {item.subtitle}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

