"use client";

import Image from "next/image";
import { useState } from "react";
import type { Work } from "@/lib/types";
import { aspectClass, cn, pad } from "@/lib/utils";
import type { Locale } from "@/data/i18n";

interface WorkCardProps {
  work: Work;
  index: number;
  onOpen: (slug: string) => void;
  locale?: Locale;
}

/**
 * Плитка работы.
 * Ховер: обложка чуть подъезжает, у видео оживает превью Mux,
 * стрелка ↗ уезжает вправо-вверх.
 * Кликабельна кнопкой — доступно с клавиатуры.
 */
export default function WorkCard({ work, index, onOpen, locale = "ru" }: WorkCardProps) {
  const [hovered, setHovered] = useState(false);

  const isVideo = work.kind === "video";
  const hasMux = isVideo && Boolean(work.muxPlaybackId);

  const title = locale === "en" && work.title_en ? work.title_en : work.title;
  const client = locale === "en" && work.client_en ? work.client_en : work.client;

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
      aria-label={`Открыть работу: ${title}, ${client}`}
      data-cursor="view"
      className={cn(
        "group relative block h-fit w-full self-start overflow-hidden bg-surface text-left",
        // Свой курсор есть только на широких экранах с мышью,
        // там и прячем системный
        "cursor-pointer lg:cursor-none"
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

        {/* Название и клиент — нижний ряд */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="display text-xl sm:text-2xl">{title}</h3>
          <p className="label mt-2 text-muted">{client}</p>
        </div>

        {/* Стрелка перехода ↗ — правый верхний угол */}
        <div className="absolute right-4 top-4 overflow-hidden sm:right-5 sm:top-5">
          <div
            className={cn(
              "flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-transform duration-500",
              hovered ? "translate-x-1 -translate-y-1" : "translate-x-0 translate-y-0"
            )}
          >
            <span aria-hidden className="text-lg">
              ↗
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
