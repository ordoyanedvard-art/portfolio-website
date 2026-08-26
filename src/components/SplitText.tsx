"use client";

import { motion, useReducedMotion } from "motion/react";

interface SplitTextProps {
  children: string;
  className?: string;
  /** Задержка перед началом каскада, в секундах */
  delay?: number;
}

/**
 * Заголовок, который проявляется по словам: каждое слово выезжает
 * снизу с небольшим сдвигом по времени.
 *
 * Слова, а не буквы — намеренно. Побуквенная анимация на кириллице
 * читается хуже и ломает переносы в длинных заголовках.
 *
 * Доступность: целая строка остаётся в разметке как текст, анимация
 * только визуальная. Скринридер читает заголовок обычным образом.
 */
export default function SplitText({
  children,
  className,
  delay = 0,
}: SplitTextProps) {
  const reduce = useReducedMotion();
  const words = children.split(" ");

  if (reduce) return <span className={className}>{children}</span>;

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </span>
  );
}
