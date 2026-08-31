"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Work } from "@/lib/types";
import { aspectClass, cn, pad } from "@/lib/utils";
import type { Locale } from "@/data/i18n";
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
  locale?: Locale;
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
  locale = "ru"
}: LightboxProps) {
    const title =
    locale === "en" && work.title_en ? work.title_en : work.title;
  const client =
    locale === "en" && work.client_en ? work.client_en : work.client;
  const role =
    locale === "en" && work.role_en ? work.role_en : work.role;
  const description =
    locale === "en" && work.description_en
      ? work.description_en
      : work.description;
  
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
const framesRef = useRef<HTMLDivElement>(null);
const [frame, setFrame] = useState(0);
const [zoomed, setZoomed] = useState(false);
const [zoomScale, setZoomScale] = useState(1);

const pointersRef = useRef(new Map<number, { x: number; y: number }>());
const pinchStartDistanceRef = useRef<number | null>(null);
const pinchStartScaleRef = useRef(1);

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
  const prevOverflow = document.body.style.overflow;
  const prevTouchAction = document.body.style.touchAction;

  document.body.style.overflow = "hidden";
  document.body.style.touchAction = "none";

  return () => {
    document.body.style.overflow = prevOverflow;
    document.body.style.touchAction = prevTouchAction;
  };
}, []);

  const scrollToFrame = useCallback((nextIndex: number) => {
  const container = framesRef.current;
  const item = container?.children[nextIndex] as HTMLElement | undefined;

  if (item) {
    item.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  setFrame(nextIndex);
}, []);

const nextFrame = useCallback(() => {
  if (isPhoto && frame < frames.length - 1) {
    scrollToFrame(frame + 1);
  } else {
    onNext();
  }
}, [isPhoto, frame, frames.length, onNext, scrollToFrame]);

const prevFrame = useCallback(() => {
  if (isPhoto && frame > 0) {
    scrollToFrame(frame - 1);
  } else {
    onPrev();
  }
}, [isPhoto, frame, onPrev, scrollToFrame]);
const closeZoom = useCallback(() => {
  setZoomedFrame(null);
}, []);

const nextZoomedFrame = useCallback(() => {
  if (zoomedFrame === null || !isPhoto) return;

  if (zoomedFrame < frames.length - 1) {
    const nextIndex = zoomedFrame + 1;
    setZoomedFrame(nextIndex);
    setFrame(nextIndex);
    scrollToFrame(nextIndex)
  }}, [zoomedFrame, isPhoto, frames.length, setFrame, scrollToFrame]);

const prevZoomedFrame = useCallback(() => {
  if (zoomedFrame === null || !isPhoto) return;

  if (zoomedFrame > 0) {
    const previousIndex = zoomedFrame - 1;
    setZoomedFrame(previousIndex);
    setFrame(previousIndex);
    scrollToFrame(previousIndex)
  }
}, [zoomedFrame, isPhoto, scrollToFrame]);
  
  /* Клавиатура + запирание фокуса внутри диалога */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
  e.preventDefault();

  if (zoomedFrame !== null) {
  setZoomedFrame(null);
} else {
  onClose();
}

  return;
}
      if (e.key === "ArrowRight") {
  e.preventDefault();

  if (zoomedFrame !== null) {
    nextZoomedFrame();
  } else {
    nextFrame();
  }

  return;
}
      if (e.key === "ArrowLeft") {
  e.preventDefault();

  if (zoomedFrame !== null) {
    prevZoomedFrame();
  } else {
    prevFrame();
  }

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
 }, [
  onClose,
  nextFrame,
  prevFrame,
  nextZoomedFrame,
  prevZoomedFrame,
  zoomedFrame,
]);

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


  return (
    <AnimatePresence>
      <motion.div
        {...fade}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex items-start justify-center overflow-hidden bg-bg/95 backdrop-blur-sm"
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
         className="relative flex h-[100dvh] min-h-0 w-full max-w-[110rem] flex-col overflow-y-auto overscroll-contain outline-none"
          style={{
  WebkitOverflowScrolling: "touch",
  touchAction: "pan-y",
}}
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
<div className="h-[64dvh] min-h-[420px] flex-none overflow-hidden px-0 py-4 sm:h-auto sm:min-h-0 sm:flex-1 sm:p-8">
  {work.kind === "video" && work.muxPlaybackId ? (
    <div
      className={cn(
        "relative mx-auto h-full w-full max-w-full overflow-hidden",
        aspectClass(work.aspect),
        "sm:w-auto"
      )}
    >
      <MuxPlayer
        playbackId={work.muxPlaybackId}
        streamType="on-demand"
        autoPlay
        accentColor="#ff2a1f"
        metadata={{ video_title: title }}
        className="block h-full w-full touch-pan-y"
        style={{
          height: "100%",
          width: "100%",
          maxWidth: "100%",
        }}
      />
    </div>
  ) : (
    <div
      ref={framesRef}
      onScroll={(event) => {
        const container = event.currentTarget;
        const items = Array.from(container.children) as HTMLElement[];

        if (items.length === 0) return;

        const center = container.scrollLeft + container.clientWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        items.forEach((item, itemIndex) => {
          const itemCenter = item.offsetLeft + item.offsetWidth / 2;
          const distance = Math.abs(itemCenter - center);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = itemIndex;
          }
        });

        setFrame(closestIndex);
      }}
      className="flex h-full w-full snap-x snap-mandatory gap-1 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{
        WebkitOverflowScrolling: "touch",
        touchAction: "pan-x",
      }}
    >
      {frames.map((image, imageIndex) => (
        <div
          key={`${image.src}-${imageIndex}`}
          className={cn(
  "relative h-full w-[88vw] max-w-none min-w-0 shrink-0 snap-center sm:w-[28vw] sm:max-w-[420px] sm:min-w-[280px]",
  imageIndex === frame ? "z-10" : "z-0"
)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 86vw, 900px"
            priority={imageIndex === 0}
            onClick={() => {
  setFrame(imageIndex);
  setZoomedFrame(imageIndex);
}}
            className={cn(
  "object-contain transition-transform duration-500 ease-out",
  imageIndex === frame
    ? "scale-100 cursor-zoom-in"
    : "scale-[0.78] opacity-60"
)}
          />
        </div>
      ))}
    </div>
  )}
</div>
          {/* Подвал: подписи, счётчик кадров, навигация */}
          <div className="shrink-0 border-t border-border px-4 py-5 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="min-w-0">
                <h3 className="display text-2xl sm:text-3xl">{title}</h3>

<p className="label mt-3 text-muted">
  {client} · {role}
</p>

{description ? (
  <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
    {description}
  </p>
) : null}
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
              </div>
            </div>
          </div>
        </motion.div>

        {/* Полноэкранное увеличение фотографии */}
        {zoomedFrame !== null && frames[zoomedFrame] ? (
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`Увеличенный кадр ${zoomedFrame + 1}`}
            onClick={closeZoom}
          >
            <button
              type="button"
              onClick={closeZoom}
              aria-label="Закрыть увеличение"
              className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center text-2xl text-white/70 transition-colors hover:text-white sm:right-8 sm:top-8"
            >
              ✕
            </button>

            {zoomedFrame > 0 ? (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  prevZoomedFrame();
                }}
                aria-label="Предыдущая фотография"
                className="absolute left-3 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-2xl text-white transition-colors hover:border-white hover:bg-black/60 sm:left-8"
              >
                ←
              </button>
            ) : null}

            <div
              className="relative h-[88dvh] w-[92vw] max-w-[1400px]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={frames[zoomedFrame].src}
                alt={frames[zoomedFrame].alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {zoomedFrame < frames.length - 1 ? (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  nextZoomedFrame();
                }}
                aria-label="Следующая фотография"
                className="absolute right-3 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-2xl text-white transition-colors hover:border-white hover:bg-black/60 sm:right-8"
              >
                →
              </button>
            ) : null}

            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 label text-white/70">
              {pad(zoomedFrame + 1)} / {pad(frames.length)}
            </span>
          </div>
        ) : null}
        
      </motion.div>
    </AnimatePresence>
  );
}
