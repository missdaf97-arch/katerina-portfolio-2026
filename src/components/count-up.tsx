"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CountUp({
  to,
  suffix,
  label,
}: {
  to: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.2,
      ease: [0.21, 0.72, 0.2, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <div ref={ref} className="py-4">
      <div className="space-y-1">
        <div className="font-druk text-6xl md:text-7xl leading-none text-[color:var(--accent)]">
          {value}
          {suffix ?? ""}
        </div>
        <div className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--muted)]">
          {label}
        </div>
      </div>
    </div>
  );
}

