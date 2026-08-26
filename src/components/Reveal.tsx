"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Задержка в секундах — для каскада внутри секции */
  delay?: number;
  /** Смещение снизу в пикселях */
  y?: number;
  className?: string;
}

/**
 * Появление блока при попадании в вид.
 * Один раз, без повторов при обратном скролле — иначе страница «дёргается».
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
