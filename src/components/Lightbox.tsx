"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Work } from "@/lib/types";
import { aspectClass, cn, pad } from "@/lib/utils";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
});

interface LightboxProps {
  work: Work;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

/**
 * Просмотрщик работы поверх страницы.
 * Esc — закрыть, ← → — соседние работы (у фото сначала кадры внутри серии).
 * Скролл страницы под просмотрщиком остановлен, фокус заперт внутри.
 */
export default function Lightbox({
  work,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const isPhoto = work.kind === "photo";
  /* Стабильная ссылка на массив: иначе эффект предзагрузки
     перезапускается на каждый рендер */
  const frames = useMemo(
    () => (work.kind === "photo" ? work.images : []),
    [work]
  );

  /* Смена работы — сбрасываем кадр серии */
  useEffect(() => {
    setFrame(0);
  }, [work.slug]);

  /* Стоп скролла страницы, пока открыт просмотрщик */
  useEffect(() => {
    const lenis = window.__lenis;
    lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      lenis?.start();
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  const nextFrame = useCallback(() => {
    if (isPhoto && frame < frames.length - 1) setFrame((f) => f + 1);
    else onNext();
  }, [isPhoto, frame, frames.length, onNext]);

  const prevFrame = useCallback(() => {
    if (isPhoto && frame > 0) setFrame((f) => f - 1);
    else onPrev();
  }, [isPhoto, frame, onPrev]);

  /* Клавиатура + запирание фокуса внутри диалога */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
  e.preventDefault();

  if (zoomed) {
    setZoomed(false);
  } else {
    onClose();
  }

  return;
}
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextFrame();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevFrame();
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, nextFrame, prevFrame]);

  /* Фокус на панель при открытии, возврат — на плитку после закрытия */
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();
    return () => previouslyFocused?.focus?.();
  }, []);

  /* Предзагрузка соседних кадров серии — листание без задержки */
  useEffect(() => {
    if (!isPhoto || frames.length < 2) return;

    const neighbours = [frame - 1, frame + 1]
      .filter((i) => i >= 0 && i < frames.length)
      .map((i) => frames[i].src);

    for (const src of neighbours) {
      const img = new window.Image();
      img.src = src;
    }
  }, [isPhoto, frame, frames]);

  const fade = reduce
    ? { initial: {}, animate: {}, exit: {} }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };

  const slide = reduce
    ? { initial: {}, animate: {}, exit: {} }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 16 },
      };

  const current = isPhoto ? frames[frame] : work.cover;

  return (
    <AnimatePresence>
      <motion.div
        {...fade}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label={`${work.title} — ${work.client}`}
        onClick={onClose}
      >
        <motion.div
          {...slide}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          ref={panelRef}
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
          className="relative flex h-full w-full max-w-[110rem] flex-col outline-none"
        >
          {/* Шапка */}
          <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-4 sm:px-8">
            <div className="flex items-baseline gap-4">
              <span className="label text-accent">{pad(index + 1)}</span>
              <span className="label text-muted">
                / {pad(total)} · {work.year}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="label flex items-center gap-2 text-muted transition-colors hover:text-accent"
            >
              Закрыть
              <span aria-hidden className="text-base">
                ✕
              </span>
            </button>
          </div>

          {/* Медиа */}
          <div className="flex min-h-0 flex-1 items-center justify-center p-4 sm:p-8">
            {work.kind === "video" && work.muxPlaybackId ? (
              <div
                className={cn(
                  "max-h-full w-auto",
                  aspectClass(work.aspect),
                  "h-full"
                )}
              >
                <MuxPlayer
                  playbackId={work.muxPlaybackId}
                  streamType="on-demand"
                  autoPlay
                  accentColor="#ff2a1f"
                  metadata={{ video_title: work.title }}
                  className="h-full w-full"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            ) : (
              <div
  className={cn(
    "relative h-full w-full overflow-visible",
    zoomed && "z-10"
  )}
>
  <Image
    src={current.src}
    alt={current.alt}
    fill
    sizes="100vw"
    priority
    onClick={() => setZoomed((value) => !value)}
    className={cn(
      "object-contain transition-transform duration-500 ease-out",
      zoomed
        ? "scale-[1.8] cursor-zoom-out"
        : "scale-100 cursor-zoom-in"
    )}
  />
</div>
            )}
          </div>

          {/* Подвал: подписи, счётчик кадров, навигация */}
          <div className="shrink-0 border-t border-border px-4 py-5 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="min-w-0">
                <h3 className="display text-2xl sm:text-3xl">{work.title}</h3>
                <p className="label mt-3 text-muted">
                  {work.client} · {work.role}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <li
                      key={tag}
                      className="label border border-border px-3 py-1.5 text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-6">
                {isPhoto && frames.length > 1 ? (
                  <span className="label text-muted">
                    Кадр {pad(frame + 1)} / {pad(frames.length)}
                  </span>
                ) : null}

                {work.externalUrl ? (
                  <a
                    href={work.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label group inline-flex items-center gap-2 text-text transition-colors hover:text-accent"
                  >
                    Полная версия
                    <span
                      aria-hidden
                      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      ↗
                    </span>
                  </a>
                ) : null}

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevFrame}
                    aria-label="Предыдущее"
                    className="flex size-11 items-center justify-center border border-border text-text transition-colors hover:border-accent hover:text-accent"
                  >
                    <span aria-hidden>←</span>
                  </button>
                  <button
                    type="button"
                    onClick={nextFrame}
                    aria-label="Следующее"
                    className="flex size-11 items-center justify-center border border-border text-text transition-colors hover:border-accent hover:text-accent"
                  >
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
