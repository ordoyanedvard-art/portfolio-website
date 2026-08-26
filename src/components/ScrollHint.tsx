"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Подсказка скролла в углу первого экрана: вертикальная линия,
 * внутри которой бесконечно едет вниз короткий отрезок.
 * Исчезает, как только пользователь начал скроллить.
 */
export default function ScrollHint() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-12 right-5 hidden flex-col items-center gap-4 md:right-10 md:flex"
    >
      <span className="label rotate-180 text-muted [writing-mode:vertical-rl]">
        Scroll
      </span>
      <div className="relative h-16 w-px overflow-hidden bg-border">
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-0 h-1/2 bg-accent"
        />
      </div>
    </motion.div>
  );
}
