"use client";

import { useEffect, useState } from "react";
import { translations, type Locale } from "@/data/i18n";
import { cn } from "@/lib/utils";

interface NavProps {
  locale: Locale;
}

export default function Nav({ locale }: NavProps) {
  const [solid, setSolid] = useState(false);
  const t = translations[locale];

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > window.innerHeight * 0.6);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const target = document.querySelector(href);

    if (!target || !window.__lenis) return;

    e.preventDefault();
    window.__lenis.scrollTo(target as HTMLElement, { offset: -80 });
  };

  const languageHref =
    locale === "ru"
      ? "/portfolio-website/en/"
      : "/portfolio-website/ru/";

  const languageLabel = locale === "ru" ? "EN" : "RU";

  const items = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
  ];

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
          {t.identity.name}
        </a>

        <nav aria-label={locale === "ru" ? "Основная навигация" : "Main navigation"}>
          <ul className="flex items-center gap-3 sm:gap-6 lg:gap-8">
            {items.map((item) => (
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
                className="label group inline-flex items-center gap-2 border border-border px-3 py-2.5 text-text transition-colors hover:border-accent hover:text-accent sm:px-4"
              >
                <span className="hidden sm:inline">{t.nav.contact}</span>
                <span className="sm:hidden">↗</span>
              </a>
            </li>

            <li>
              <a
                href={languageHref}
                className="label text-accent transition-colors hover:text-text"
                aria-label={
                  locale === "ru"
                    ? "Переключить на английский"
                    : "Switch to Russian"
                }
              >
                {languageLabel}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
