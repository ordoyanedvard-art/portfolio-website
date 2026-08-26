"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Инерционный скролл. Именно он даёт «дорогое» ощущение из референсов.
 * Экземпляр кладём в window, чтобы лайтбокс мог остановить скролл под собой.
 */
export default function SmoothScroll() {
  useEffect(() => {
    // Пользователь просил меньше движения — нативный скролл, без инерции
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    window.__lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
