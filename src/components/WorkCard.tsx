"use client";

import Image from "next/image";
import { useState } from "react";
import type { Work } from "@/lib/types";
import { aspectClass, cn, pad } from "@/lib/utils";

interface WorkCardProps {
  work: Work;
  index: number;
  onOpen: (slug: string) => void;
}

/**
 * Плитка работы.
 * Ховер: обложка чуть подъезжает, у видео оживает превью Mux,
 * стрелка ↗ уезжает вправо-вверх.
 * Кликабельна кнопкой — доступно с клавиатуры.
 */
export default function WorkCard({ work, index, onOpen }: WorkCardProps) {
  const [hovered, setHovered] = useState(false);

  const isVideo = work.kind === "video";
  const hasMux = isVideo && Boolean(work.muxPlaybackId);

  /* Анимированное превью Mux: короткая петля из середины ролика */
  const previewUrl = hasMux
    ? `https://image.mux.com/${work.muxPlaybackId}/animated.webp?width=640&fps=15`
    : null;

  return (
    <button
      type="button"
      onClick={() => onOpen(work.slug)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-label={`Открыть работу: ${work.title}, ${work.client}`}
      data-cursor="view"
      className={cn(
        "group relative block w-full overflow-hidden bg-surface text-left",
        // Свой курсор есть только на широких экранах с мышью,
        // там и прячем системный
        "cursor-pointer lg:cursor-none",
        work.featured && "lg:col-span-2"
      )}
    >
      <div className={cn("relative overflow-hidden", aspectClass(work.aspect))}>
        <Image
          src={work.cover.src}
          alt={work.cover.alt}
          fill
          sizes={
            work.featured
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className={cn(
            "object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            hovered ? "scale-[1.04]" : "scale-100"
          )}
          priority={index < 2}
        />

        {/* Анимированное превью поверх обложки, только при наведении */}
        {previewUrl && hovered ? (
          <Image
            src={previewUrl}
            alt=""
            aria-hidden
            fill
            unoptimized
            className="object-cover"
          />
        ) : null}

        {/* Затемнение к низу — под подписи */}
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent transition-opacity duration-700",
            hovered ? "opacity-100" : "opacity-80"
          )}
        />

        {/* Номер и тип — верхний ряд */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-5">
          <span className="label text-accent">{pad(index + 1)}</span>
          <span className="label text-muted">
            {isVideo ? "Video" : "Photo"}
          </span>
        </div>

        {/* Название и стрелка — нижний ряд */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
          <div className="min-w-0">
            <p className="display truncate text-lg sm:text-xl">{work.title}</p>
            <p className="label mt-2 truncate text-muted">{work.client}</p>
          </div>
          <span
            aria-hidden
            className={cn(
              "shrink-0 text-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              hovered
                ? "translate-x-1 -translate-y-1 text-accent"
                : "text-text/70"
            )}
          >
            ↗
          </span>
        </div>

        {/* Красная линия снизу при наведении */}
        <div
          aria-hidden
          className={cn(
            "absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            hovered ? "w-full" : "w-0"
          )}
        />
      </div>
    </button>
  );
}
