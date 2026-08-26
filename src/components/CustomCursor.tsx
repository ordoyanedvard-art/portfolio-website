"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Курсор-указатель. При наведении на плитку работы вместо системной
 * стрелки показывается красный круг с подписью VIEW.
 *
 * Включается только на устройствах с точным указателем — на тач-экранах
 * курсора нет, компонент вообще не монтирует разметку. Отключается при
 * prefers-reduced-motion.
 *
 * Позиция пишется напрямую в style через rAF, а не через state:
 * иначе на каждое движение мыши шёл бы ре-рендер React.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Цель и текущее положение: курсор догоняет мышь с задержкой
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;

      // Плитки помечены data-cursor="view"
      const el = e.target as HTMLElement | null;
      setActive(Boolean(el?.closest?.('[data-cursor="view"]')));
    };

    const loop = () => {
      // Линейная интерполяция: чем меньше коэффициент, тем длиннее шлейф
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-60 hidden lg:block"
    >
      <div
        className={`flex items-center justify-center rounded-full bg-accent transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          active ? "size-20 opacity-100" : "size-2.5 opacity-70"
        }`}
      >
        <span
          className={`label text-[0.5625rem] text-bg transition-opacity duration-200 ${
            active ? "opacity-100 delay-100" : "opacity-0"
          }`}
        >
          View
        </span>
      </div>
    </div>
  );
}
