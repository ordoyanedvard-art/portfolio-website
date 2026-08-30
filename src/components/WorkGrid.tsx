"use client";

import { useCallback, useEffect, useState } from "react";
import { works, getWorkBySlug } from "@/data/works";
import { translations, type Locale } from "@/data/i18n";
import WorkCard from "./WorkCard";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type WorkFilter = "all" | "photo" | "video";

interface WorkGridProps {
  locale: Locale;
  initialSlug?: string;
}

/**
 * 04 — Сетка работ + просмотрщик.
 * Вариант C: адрес меняется на /work/<slug> без перезагрузки,
 * ссылкой можно поделиться, кнопка «назад» закрывает просмотрщик.
 */
export default function WorkGrid({
  locale,
  initialSlug,
}: WorkGridProps) {
 const t = translations[locale];

const [filter, setFilter] = useState<WorkFilter>("all");
const [activeSlug, setActiveSlug] = useState<string | undefined>(initialSlug);

const filteredWorks =
  filter === "all"
    ? works
    : works.filter((work) => work.kind === filter);
    /**
   * Возвращает правильный путь сайта с учётом GitHub Pages
   * и выбранного языка.
   */
  const getSiteRoot = useCallback(() => {
    const parts = window.location.pathname.split("/").filter(Boolean);

    // Первый сегмент — имя репозитория: portfolio-website
    const basePath = parts[0] ? `/${parts[0]}` : "";

    // Сохраняем язык, если открыта английская или русская версия
    const localePath =
      parts[1] === "en" || parts[1] === "ru" ? `/${parts[1]}` : "";

    return `${basePath}${localePath}`;
  }, []);

  const getWorkPath = useCallback(
    (slug: string) => {
      const parts = window.location.pathname.split("/").filter(Boolean);
      const basePath = parts[0] ? `/${parts[0]}` : "";

      return `${basePath}/work/${slug}/`;
    },
    []
  );

  const open = useCallback(
    (slug: string) => {
      setActiveSlug(slug);
      window.history.pushState(
        { slug },
        "",
        getWorkPath(slug)
      );
    },
    [getWorkPath]
  );

  const close = useCallback(() => {
    setActiveSlug(undefined);

    const siteRoot = getSiteRoot();

    // replaceState не создаёт лишнюю запись в истории браузера
    window.history.replaceState(
      {},
      "",
      `${siteRoot}/#work`
    );
  }, [getSiteRoot]);

  const goTo = useCallback(
    (slug: string) => {
      setActiveSlug(slug);
      window.history.replaceState(
        { slug },
        "",
        getWorkPath(slug)
      );
    },
    [getWorkPath]
  );

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
  ? filteredWorks.findIndex((w) => w.slug === activeWork.slug)
  : -1;

  return (
    <section id="work" className="scroll-mt-24 border-b border-border py-20 lg:py-28">
      <SectionHeading
  index="04"
  label={t.work.sectionLabel}
  title={t.work.sectionTitle}
  accent={t.work.sectionAccent}
/>

      <Reveal className="gutter mt-12 lg:mt-16" y={16}>
  <div className="mb-8 flex flex-wrap gap-3">
    {(
      [
        ["all", t.work.all],
        ["photo", t.work.images],
        ["video", t.work.videos],
      ] as const
    ).map(([value, label]) => (
      <button
        key={value}
        type="button"
        onClick={() => {
          setFilter(value);
          setActiveSlug(undefined);
        }}
        className={[
          "label border px-4 py-2.5 transition-colors",
          filter === value
            ? "border-accent bg-accent text-bg"
            : "border-border text-muted hover:border-accent hover:text-accent",
        ].join(" ")}
      >
        {label}
      </button>
    ))}
  </div>

  <div className="grid items-start grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {filteredWorks.map((work, i) => (
  <WorkCard
  key={work.slug}
  work={work}
  index={i}
  onOpen={open}
  locale={locale}
/>
))}
        </div>
      </Reveal>

      {activeWork ? (
        <Lightbox
          work={activeWork}
          index={activeIndex}
          total={filteredWorks.length}
          onClose={close}
          locale={locale}
          onPrev={() =>
  goTo(
    filteredWorks[
      (activeIndex - 1 + filteredWorks.length) % filteredWorks.length
    ].slug
  )
}
onNext={() =>
  goTo(filteredWorks[(activeIndex + 1) % filteredWorks.length].slug)
}
        />
      ) : null}
    </section>
  );
}
