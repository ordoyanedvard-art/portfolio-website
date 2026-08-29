import Image from "next/image";
import { site, tools } from "@/data/site";
import { translations, type Locale } from "@/data/i18n";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * 06 — О себе.
 * Слева текст о подходе, справа портрет. Ниже — стек инструментов.
 */
interface AboutProps {
  locale: Locale;
}

export default function About({ locale }: AboutProps) {
  const t = translations[locale];
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-border py-20 lg:py-28"
    >
      <SectionHeading
  index="06"
  label={t.about.sectionLabel}
  title={t.about.sectionTitle}
  accent={t.about.sectionAccent}
/>

      <div className="gutter mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7" y={24}>
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            <p>{t.about.paragraphs[0]}</p>

<p>{t.about.paragraphs[1]}</p>

<p className="text-text">{t.about.paragraphs[2]}</p>
          </div>

          <div className="mt-12">
            <p className="label mb-6 text-muted">{t.about.skillsTitle}</p>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {t.about.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-baseline gap-3 text-sm text-text/85"
                >
                  <span aria-hidden className="text-accent">
                    /
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <p className="label mb-6 text-muted">{t.about.tools}</p>
            <ul className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="label border border-border px-3 py-2 text-text/85 transition-colors hover:border-accent hover:text-accent"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.12} y={24}>
          <div className="relative aspect-[4/5] overflow-hidden bg-surface">
            <Image
              src="/placeholders/portrait.svg"
              alt={`${site.name} — портрет`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <p className="label mt-4 text-muted">
            {site.name} · {site.role}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
