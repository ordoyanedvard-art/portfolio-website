"use client";

import { useCallback, useEffect, useState } from "react";
import { works, getWorkBySlug } from "@/data/works";
import WorkCard from "./WorkCard";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface WorkGridProps {
  /** Если страница открыта по адресу /work/<slug> — сразу показываем просмотрщик */
  initialSlug?: string;
}

/**
 * 04 — Сетка работ + просмотрщик.
 * Вариант C: адрес меняется на /work/<slug> без перезагрузки,
 * ссылкой можно поделиться, кнопка «назад» закрывает просмотрщик.
 */
export default function WorkGrid({ initialSlug }: WorkGridProps) {
  const [activeSlug, setActiveSlug] = useState<string | undefined>(initialSlug);

  const open = useCallback((slug: string) => {
    setActiveSlug(slug);
    window.history.pushState({ slug }, "", `/work/${slug}`);
  }, []);

  const close = useCallback(() => {
    setActiveSlug(undefined);
    // Возвращаем адрес на главную с якорем, чтобы не потерять место на странице
    window.history.pushState({}, "", "/#work");
  }, []);

  const goTo = useCallback((slug: string) => {
    setActiveSlug(slug);
    window.history.replaceState({ slug }, "", `/work/${slug}`);
  }, []);

  /* Кнопки «назад» и «вперёд» в браузере */
  useEffect(() => {
    const onPopState = (e: PopStateEvent) => {
      const slug = (e.state as { slug?: string } | null)?.slug;
      setActiveSlug(slug && getWorkBySlug(slug) ? slug : undefined);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const activeWork = activeSlug ? getWorkBySlug(activeSlug) : undefined;
  const activeIndex = activeWork
    ? works.findIndex((w) => w.slug === activeWork.slug)
    : -1;

  return (
    <section id="work" className="scroll-mt-24 border-b border-border py-20 lg:py-28">
      <SectionHeading
        index="04"
        label="Selected work"
        title="Избранные"
        accent="работы"
      />

      <Reveal className="gutter mt-12 lg:mt-16" y={16}>
        <div className="grid items-start grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {works.map((work, i) => (
            <WorkCard key={work.slug} work={work} index={i} onOpen={open} />
          ))}
        </div>
      </Reveal>

      {activeWork ? (
        <Lightbox
          work={activeWork}
          index={activeIndex}
          total={works.length}
          onClose={close}
          onPrev={() =>
            goTo(works[(activeIndex - 1 + works.length) % works.length].slug)
          }
          onNext={() => goTo(works[(activeIndex + 1) % works.length].slug)}
        />
      ) : null}
    </section>
  );
}
