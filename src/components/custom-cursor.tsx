"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const followerLeft = useSpring(x, { stiffness: 500, damping: 45, mass: 0.6 });
  const followerTop = useSpring(y, { stiffness: 220, damping: 30, mass: 1.1 });

  const mediaQuery = useMemo(
    () =>
      typeof window === "undefined"
        ? null
        : window.matchMedia("(hover: hover) and (pointer: fine)"),
    [],
  );

  useEffect(() => {
    if (!mediaQuery) return;
    const update = () => setEnabled(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, [mediaQuery]);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      aria-hidden="true"
    >
      <motion.div
        className="fixed h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/15"
        style={{ left: followerLeft, top: followerTop }}
      />
      <motion.div
        className="fixed h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent)]"
        style={{ left: x, top: y }}
      />
    </div>
  );
}

