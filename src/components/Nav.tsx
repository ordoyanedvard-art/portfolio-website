"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const items = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/**
 * Фиксированная шапка. Появляется фон после прокрутки первого экрана.
 * На мобильном пункты скрыты, остаётся кнопка контакта.
 */
export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Плавный переход по якорю через Lenis, иначе нативный скачок */
  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (!target || !window.__lenis) return;
    e.preventDefault();
    window.__lenis.scrollTo(target as HTMLElement, { offset: -80 });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        solid
          ? "border-b border-border bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="gutter flex h-16 items-center justify-between lg:h-20">
        <a
          href="#top"
          onClick={(e) => {
            if (!window.__lenis) return;
            e.preventDefault();
            window.__lenis.scrollTo(0);
          }}
          className="label text-text transition-colors hover:text-accent"
        >
          {site.name}
        </a>

        <nav aria-label="Основная навигация">
          <ul className="flex items-center gap-6 lg:gap-10">
            {items.slice(0, 3).map((item) => (
              <li key={item.href} className="hidden sm:block">
                <a
                  href={item.href}
                  onClick={(e) => handleAnchor(e, item.href)}
                  className="label text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleAnchor(e, "#contact")}
                className="label group inline-flex items-center gap-2 border border-border px-4 py-2.5 text-text transition-colors hover:border-accent hover:text-accent"
              >
                Contact
                <span
                  aria-hidden
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
