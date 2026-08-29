import { site } from "@/data/site";
import Reveal from "./Reveal";
import { translations, type Locale } from "@/data/i18n";
/**
 * 07 — Контакты.
 * Крупный заголовок на весь экран, почта огромной строкой, соцсети рядом.
 * Формы нет — вариант A: прямая связь.
 */
interface ContactProps {
  locale: Locale;
}

export default function Contact({ locale }: ContactProps) {
  const t = translations[locale];
  const links = [
    { label: "Telegram", href: site.telegram },
    { label: "Behance", href: site.behance },
    { label: "Instagram", href: site.instagram },
  ].filter((l) => Boolean(l.href));

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-b border-border py-24 lg:py-36"
    >
      <div className="gutter">
        <Reveal>
          <div className="flex items-baseline gap-4 border-b border-border pb-5">
            <span className="label text-accent">07</span>
            <span className="label text-muted">{t.contact.sectionLabel}</span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
         <h2 className="display mt-10 text-[11vw] leading-[0.86] lg:text-[8vw]">
  {t.contact.sectionTitle}
  <span className="block text-accent">
    {t.contact.sectionAccent}
  </span>
</h2>
        </Reveal>

        <Reveal delay={0.16}>
          <a
            href={`mailto:${site.email}`}
            className="group mt-14 inline-flex flex-wrap items-baseline gap-3 border-b border-border pb-3 transition-colors hover:border-accent"
          >
            <span className="text-2xl break-all sm:text-4xl lg:text-5xl">
              {site.email}
            </span>
            <span
              aria-hidden
              className="text-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
            >
              ↗
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.24}>
          <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label group inline-flex items-center gap-2 text-text transition-colors hover:text-accent"
                >
                  {link.label}
                  <span
                    aria-hidden
                    className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
