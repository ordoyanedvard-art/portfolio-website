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
const [pan, setPan] = useState({ x: 0, y: 0 });

const dragRef = useRef<{
  pointerId: number;
  startX: number;
  startY: number;
  originX: number;
  originY: number;
} | null>(null);

const didDragRef = useRef(false);
const pointersRef = useRef(
  new Map<number, { x: number; y: number }>()
);
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
  
const resetZoom = useCallback(() => {
  setZoomed(false);
  setZoomScale(1);
  setPan({ x: 0, y: 0 });

  pointersRef.current.clear();
  pinchStartDistanceRef.current = null;
  dragRef.current = null;
  didDragRef.current = false;
}, []);
  /* Клавиатура + запирание фокуса внутри диалога */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
  e.preventDefault();

  if (zoomed) {
    setZoomed(false);
    setZoomScale(1);
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
 }, [onClose, nextFrame, prevFrame, zoomed]);

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
        className="fixed inset-0 z-50 flex items-start justify-center overflow-hidden bg-black/70 backdrop-blur-md"
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
         className="relative flex h-[100dvh] min-h-0 w-full max-w-none flex-col overflow-hidden overscroll-contain outline-none"
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
<div
  className={cn(
    "relative h-[calc(100dvh-110px)] min-h-0 flex-none px-0 py-4 sm:h-auto sm:min-h-0 sm:flex-1 sm:p-8",
    zoomed ? "overflow-visible" : "overflow-hidden"
  )}
>
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
      className="flex h-full w-full items-center gap-0 overflow-x-auto overflow-y-hidden snap-x snap-mandatory overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
style={{
  WebkitOverflowScrolling: "touch",
  touchAction: "pan-x",
}}
    >
      {frames.map((image, imageIndex) => (
         <div
  key={`${image.src}-${imageIndex}`}
  className={cn(
  "relative flex h-full w-[72vw] min-w-0 shrink-0 snap-center items-center justify-center",
  imageIndex === frame
    ? "z-10 opacity-100"
    : "z-0 opacity-55"
)}
>
  <div
    className={cn(
  "relative h-full w-full select-none touch-none",
  imageIndex === frame && zoomed
    ? "z-20 cursor-grab active:cursor-grabbing"
    : "z-0"
)}
    onWheel={(event) => {
      if (imageIndex !== frame) return;

      event.preventDefault();
      event.stopPropagation();

      setZoomed(true);

      setZoomScale((current) => {
        const change = event.deltaY < 0 ? 0.2 : -0.2;
        return Math.min(4, Math.max(1, current + change));
      });
    }}
   onPointerDown={(event) => {
  if (imageIndex !== frame || !zoomed) return;

  event.currentTarget.setPointerCapture(event.pointerId);

  pointersRef.current.set(event.pointerId, {
    x: event.clientX,
    y: event.clientY,
  });

  if (pointersRef.current.size === 1) {
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: pan.x,
      originY: pan.y,
    };

    didDragRef.current = false;
  }

  if (pointersRef.current.size === 2) {
    dragRef.current = null;

    const points = Array.from(
      pointersRef.current.values()
    );

    const first = points[0];
    const second = points[1];

    pinchStartDistanceRef.current = Math.hypot(
      second.x - first.x,
      second.y - first.y
    );

    pinchStartScaleRef.current = zoomScale;
  }
}}

onPointerMove={(event) => {
  if (imageIndex !== frame || !zoomed) return;
  if (!pointersRef.current.has(event.pointerId)) return;

  pointersRef.current.set(event.pointerId, {
    x: event.clientX,
    y: event.clientY,
  });

  if (
    pointersRef.current.size === 2 &&
    pinchStartDistanceRef.current !== null
  ) {
    const points = Array.from(
      pointersRef.current.values()
    );

    const first = points[0];
    const second = points[1];

    const distance = Math.hypot(
      second.x - first.x,
      second.y - first.y
    );

    const ratio =
      distance / pinchStartDistanceRef.current;

    setZoomScale(
      Math.min(
        4,
        Math.max(
          1,
          pinchStartScaleRef.current * ratio
        )
      )
    );

    return;
  }

  if (
    pointersRef.current.size === 1 &&
    dragRef.current?.pointerId === event.pointerId
  ) {
    const deltaX =
      event.clientX - dragRef.current.startX;

    const deltaY =
      event.clientY - dragRef.current.startY;

    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
      didDragRef.current = true;
    }

    setPan({
      x: dragRef.current.originX + deltaX,
      y: dragRef.current.originY + deltaY,
    });
  }
}}

onPointerUp={(event) => {
  pointersRef.current.delete(event.pointerId);

  if (dragRef.current?.pointerId === event.pointerId) {
    dragRef.current = null;
  }

  if (pointersRef.current.size < 2) {
    pinchStartDistanceRef.current = null;
  }
}}

onPointerCancel={(event) => {
  pointersRef.current.delete(event.pointerId);

  if (dragRef.current?.pointerId === event.pointerId) {
    dragRef.current = null;
  }

  pinchStartDistanceRef.current = null;
}}
    onClick={() => {
  if (didDragRef.current) {
    didDragRef.current = false;
    return;
  }

  if (imageIndex !== frame) {
    scrollToFrame(imageIndex);
    resetZoom();
    return;
  }

  if (!zoomed) {
    setZoomed(true);
    setZoomScale(1.35);
    setPan({ x: 0, y: 0 });
  } else if (zoomScale <= 1.05) {
    resetZoom();
  }
}}
  >
    <Image
  src={image.src}
  alt={image.alt}
  fill
  sizes="90vw"
  priority={imageIndex === 0}
  draggable={false}
  className="pointer-events-none object-contain"
  style={{
    transform:
      imageIndex === frame
        ? `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoomed ? zoomScale : 1})`
        : "scale(1)",
    transformOrigin: "center center",
    transition: dragRef.current
      ? "none"
      : "transform 220ms ease-out",
  }}
/>
  </div>
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
      </motion.div>
    </AnimatePresence>
  );
}
