"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";
import HeroVideo from "./HeroVideo";
import ScrollHint from "./ScrollHint";

/**
 * 01 — Первый экран.
 * Полноэкранное видео фоном, затемнение, поверх крупная типографика.
 * Пока heroMuxPlaybackId пуст, вместо видео — статичный градиент-заглушка.
 */
export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section
      className="relative flex h-svh min-h-[36rem] flex-col justify-end overflow-hidden"
      aria-label="Первый экран"
    >
      <HeroVideo playbackId={site.heroMuxPlaybackId} />

      {/* Затемнение: снизу плотное, чтобы текст читался на любом кадре */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/25"
      />
      <div aria-hidden className="absolute inset-0 bg-bg/25" />

      <ScrollHint />

      <div className="gutter relative z-10 pb-12 sm:pb-16">
        <motion.p {...rise(0.1)} className="label mb-6 text-muted">
          {site.location}
        </motion.p>

        <h1 className="display text-[13vw] leading-[0.85] sm:text-[11vw] lg:text-[8.5vw]">
          <motion.span {...rise(0.2)} className="block">
            {site.heroLine1}
          </motion.span>
          <motion.span {...rise(0.32)} className="block text-accent">
            {site.heroAccent}
          </motion.span>
        </h1>

        <motion.p
          {...rise(0.46)}
          className="mt-8 max-w-md text-base text-muted sm:text-lg"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          {...rise(0.58)}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <a
            href="#work"
            className="label group inline-flex items-center gap-2 text-text transition-colors hover:text-accent"
          >
            Selected work
            <span
              aria-hidden
              className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              ↗
            </span>
          </a>

          {site.showreelUrl ? (
            <a
              href={site.showreelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label group inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
            >
              Showreel
              <span
                aria-hidden
                className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </a>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
