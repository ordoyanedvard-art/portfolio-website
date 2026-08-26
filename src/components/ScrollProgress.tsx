"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/**
 * Тонкая красная полоса прогресса поверх страницы.
 * Даёт понимание длины сайта — на одностраничнике это важно,
 * иначе непонятно, сколько ещё скроллить.
 */
export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Пружина сглаживает рывки при быстром скролле
  const width = useSpring(scrollYProgress, {
    stiffness: 320,
    damping: 40,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: width }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
    />
  );
}
