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

const MIN_SCALE = 1;
const MAX_SCALE = 5;

const clampScale = (value: number) =>
  Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));

/**
 * Просмотрщик работы поверх страницы.
 * Esc — закрыть, ← → — соседние кадры/работы.
 * Zoom — отдельный полноэкранный слой:
 *   открытие в масштабе 1 (кадр целиком, по центру);
 *   колесо / пинч — масштаб, drag — перемещение;
 *   свайп или стрелки — соседний кадр без выхода из zoom;
 *   навигация в zoom ограничена рамками текущей серии.
 *   На телефоне подвал можно скроллить, чтобы прочитать описание.
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

  const pinchRef = useRef<{
    dist: number;
    scale: number;
    midX: number;
    midY: number;
    panX: number;
    panY: number;
  } | null>(null);

  const wheelNavRef = useRef(0);

  /* Флаг: только что переключили кадр, transition пока выключен */
  const justSwitchedRef = useRef(false);

  const isPhoto = work.kind === "photo";

  const frames = useMemo(
    () => (work.kind === "photo" ? work.images : []),
    [work]
  );

  const resetZoom = useCallback(() => {
    setZoomed(false);
    setZoomScale(1);
    setPan({ x: 0, y: 0 });

    pointersRef.current.clear();
    pinchRef.current = null;
    dragRef.current = null;
    didDragRef.current = false;
  }, []);

  /* Смена работы — сбрасываем кадр серии и zoom */
  useEffect(() => {
    setFrame(0);
    resetZoom();
  }, [work.slug, resetZoom]);

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
    const item = container?.children[
      nextIndex + 1
    ] as HTMLElement | undefined;

    if (container && item) {
      const left =
        item.offsetLeft -
        (container.clientWidth - item.offsetWidth) / 2;

      container.scrollTo({
        left: Math.max(0, left),
        behavior: "smooth",
      });
    }

    setFrame(nextIndex);
  }, []);

  /* Навигация ВНУТРИ zoom: строго в рамках серии.
     Сброс масштаба и позиции + отключение transition на 1 кадр —
     новое фото встаёт по центру мгновенно, без рывка и глитча */
  const zoomStep = useCallback(
    (direction: 1 | -1) => {
      const target = frame + direction;

      if (target < 0 || target > frames.length - 1) {
        setPan({ x: 0, y: 0 });
        return;
      }

      justSwitchedRef.current = true;
      setZoomScale(1);
      setPan({ x: 0, y: 0 });
      scrollToFrame(target);

      /* Возвращаем transition через 2 RAF:
         1-й кадр — React обновил src,
         2-й — браузер применил новое изображение */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          justSwitchedRef.current = false;
        });
      });
    },
    [frame, frames.length, scrollToFrame]
  );

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

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();

        if (zoomed) {
          resetZoom();
        } else {
          onClose();
        }

        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();

        if (zoomed) {
          zoomStep(1);
        } else {
          nextFrame();
        }

        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();

        if (zoomed) {
          zoomStep(-1);
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
  }, [onClose, nextFrame, prevFrame, zoomed, resetZoom, zoomStep]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();
    return () => previouslyFocused?.focus?.();
  }, []);

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
          className="relative flex h-[100dvh] min-h-0 w-full max-w-none flex-col overflow-y-auto overscroll-contain outline-none"
        >
          {/* Шапка */}
          <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-3 sm:px-8 sm:py-4">
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
          <div className="relative min-h-0 flex-1 overflow-hidden py-2 sm:py-6">
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
                  const items = (
                    Array.from(container.children) as HTMLElement[]
                  ).slice(1, -1);

                  if (items.length === 0) return;

                  const center =
                    container.scrollLeft + container.clientWidth / 2;

                  let closestIndex = 0;
                  let closestDistance = Infinity;

                  items.forEach((item, itemIndex) => {
                    const itemCenter =
                      item.offsetLeft + item.offsetWidth / 2;
                    const distance = Math.abs(itemCenter - center);

                    if (distance < closestDistance) {
                      closestDistance = distance;
                      closestIndex = itemIndex;
                    }
                  });

                  setFrame(closestIndex);
                }}
                className="flex h-full w-full items-center gap-3 overflow-x-auto overflow-y-hidden snap-x snap-mandatory overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
                style={{
                  WebkitOverflowScrolling: "touch",
                  touchAction: "pan-x",
                }}
              >
                <div aria-hidden className="h-px w-[38vw] shrink-0" />

                {frames.map((image, imageIndex) => (
                  <div
                    key={`${image.src}-${imageIndex}`}
                    className={cn(
                      "relative flex h-full shrink-0 snap-center items-center justify-center transition-opacity duration-300",
                      imageIndex === frame
                        ? "z-10 cursor-zoom-in opacity-100"
                        : "z-0 cursor-pointer opacity-50"
                    )}
                    onClick={() => {
                      if (imageIndex !== frame) {
                        scrollToFrame(imageIndex);
                        return;
                      }

                      setZoomScale(1);
                      setPan({ x: 0, y: 0 });
                      setZoomed(true);
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={0}
                      height={0}
                      sizes="92vw"
                      priority={imageIndex === 0}
                      draggable={false}
                      className="h-full w-auto max-w-[92vw] select-none object-contain"
                    />
                  </div>
                ))}

                <div aria-hidden className="h-px w-[38vw] shrink-0" />
              </div>
            )}
          </div>

          {/* Подвал */}
          <div className="shrink-0 border-t border-border px-4 py-3 sm:px-8 sm:py-5">
            <div className="flex flex-wrap items-end justify-between gap-3 sm:gap-6">
              <div className="min-w-0">
                <h3 className="display text-xl sm:text-3xl">{title}</h3>

                <p className="label mt-2 text-muted sm:mt-3">
                  {client} · {role}
                </p>

                {description ? (
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:mt-4">
                    {description}
                  </p>
                ) : null}
                <ul className="mt-3 flex flex-wrap gap-2 sm:mt-4">
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

        {/* Полноэкранный просмотр кадра: поверх карусели.
            Без key у Image — React переиспользует элемент, глитча нет. */}
        {zoomed && isPhoto && frames[frame] ? (
          <div
            className="fixed inset-0 z-[60] flex touch-none select-none items-center justify-center overflow-hidden bg-black/90"
            style={{
              cursor: dragRef.current
                ? "grabbing"
                : zoomScale > 1.05
                  ? "grab"
                  : "zoom-out",
            }}
            onClick={(event) => {
              event.stopPropagation();

              if (didDragRef.current) {
                didDragRef.current = false;
                return;
              }

              if (zoomScale > 1.05) {
                setZoomScale(1);
                setPan({ x: 0, y: 0 });
              } else {
                resetZoom();
              }
            }}
            onWheel={(event) => {
              event.stopPropagation();

              const horizontal =
                Math.abs(event.deltaX) > Math.abs(event.deltaY) &&
                Math.abs(event.deltaX) > 18;

              if (horizontal && zoomScale <= 1.05) {
                const now = Date.now();
                if (now - wheelNavRef.current < 400) return;
                wheelNavRef.current = now;

                zoomStep(event.deltaX > 0 ? 1 : -1);
                return;
              }

              setZoomScale((current) =>
                clampScale(
                  current + (event.deltaY < 0 ? 0.25 : -0.25)
                )
              );
            }}
            onPointerDown={(event) => {
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

                const points = Array.from(pointersRef.current.values());
                const first = points[0];
                const second = points[1];

                pinchRef.current = {
                  dist: Math.hypot(
                    second.x - first.x,
                    second.y - first.y
                  ),
                  scale: zoomScale,
                  midX: (first.x + second.x) / 2,
                  midY: (first.y + second.y) / 2,
                  panX: pan.x,
                  panY: pan.y,
                };
              }
            }}
            onPointerMove={(event) => {
              if (!pointersRef.current.has(event.pointerId)) return;

              pointersRef.current.set(event.pointerId, {
                x: event.clientX,
                y: event.clientY,
              });

              if (
                pointersRef.current.size === 2 &&
                pinchRef.current !== null
              ) {
                const points = Array.from(pointersRef.current.values());
                const first = points[0];
                const second = points[1];

                const dist = Math.hypot(
                  second.x - first.x,
                  second.y - first.y
                );

                const midX = (first.x + second.x) / 2;
                const midY = (first.y + second.y) / 2;

                const start = pinchRef.current;
                const nextScale = clampScale(
                  start.scale * (dist / start.dist)
                );

                const rect =
                  event.currentTarget.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;

                const ratio = nextScale / start.scale;

                didDragRef.current = true;

                setZoomScale(nextScale);
                setPan({
                  x:
                    midX -
                    cx -
                    (start.midX - cx - start.panX) * ratio,
                  y:
                    midY -
                    cy -
                    (start.midY - cy - start.panY) * ratio,
                });

                return;
              }

              if (
                pointersRef.current.size === 1 &&
                dragRef.current?.pointerId === event.pointerId
              ) {
                const deltaX = event.clientX - dragRef.current.startX;
                const deltaY = event.clientY - dragRef.current.startY;

                if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
                  didDragRef.current = true;
                }

                if (zoomScale > 1.05) {
                  setPan({
                    x: dragRef.current.originX + deltaX,
                    y: dragRef.current.originY + deltaY,
                  });
                } else {
                  setPan({
                    x: dragRef.current.originX + deltaX,
                    y: 0,
                  });
                }
              }
            }}
            onPointerUp={(event) => {
              pointersRef.current.delete(event.pointerId);

              const wasDrag =
                dragRef.current?.pointerId === event.pointerId;

              if (wasDrag) {
                dragRef.current = null;
              }

              if (pointersRef.current.size < 2) {
                pinchRef.current = null;
              }

              if (wasDrag && zoomScale <= 1.05) {
                if (pan.x < -70) {
                  zoomStep(1);
                } else if (pan.x > 70) {
                  zoomStep(-1);
                } else {
                  setPan({ x: 0, y: 0 });
                }
                return;
              }

              if (
                pointersRef.current.size === 0 &&
                zoomScale < 1.15
              ) {
                setZoomScale(1);
                setPan({ x: 0, y: 0 });
              }
            }}
            onPointerCancel={(event) => {
              pointersRef.current.delete(event.pointerId);

              if (dragRef.current?.pointerId === event.pointerId) {
                dragRef.current = null;
              }

              pinchRef.current = null;
            }}
          >
            <Image
              src={frames[frame].src}
              alt={frames[frame].alt}
              width={0}
              height={0}
              sizes="100vw"
              priority
              draggable={false}
              className="pointer-events-none h-auto max-h-[92dvh] w-auto max-w-[94vw] object-contain"
              style={{
                transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoomScale})`,
                transformOrigin: "center center",
                transition:
                  dragRef.current ||
                  pinchRef.current ||
                  justSwitchedRef.current
                    ? "none"
                    : "transform 220ms ease-out",
              }}
            />

            {frame > 0 ? (
              <button
                type="button"
                aria-label="Предыдущий кадр"
                onClick={(event) => {
                  event.stopPropagation();
                  zoomStep(-1);
                }}
                className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-xl text-white/80 transition-colors hover:bg-black/70 hover:text-white sm:flex"
              >
                ←
              </button>
            ) : null}

            {frame < frames.length - 1 ? (
              <button
                type="button"
                aria-label="Следующий кадр"
                onClick={(event) => {
                  event.stopPropagation();
                  zoomStep(1);
                }}
                className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-xl text-white/80 transition-colors hover:bg-black/70 hover:text-white sm:flex"
              >
                →
              </button>
            ) : null}

            <div className="label pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70">
              {frame + 1} / {frames.length}
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                resetZoom();
              }}
              className="label absolute right-4 top-4 flex items-center gap-2 text-white/70 transition-colors hover:text-accent"
            >
              Закрыть
              <span aria-hidden className="text-base">
                ✕
              </span>
            </button>
          </div>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}
