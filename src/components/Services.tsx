import { services } from "@/data/site";
import { translations, type Locale } from "@/data/i18n";
import { pad } from "@/lib/utils";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * 05 — Услуги.
 * Нумерованный список: номер красным, название крупно, описание справа.
 * Ховер подсвечивает строку целиком.
 */
interface ServicesProps {
  locale: Locale;
}

export default function Services({ locale }: ServicesProps) {
  const t = translations[locale];
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-border py-20 lg:py-28"
    >
      <SectionHeading
  index="05"
  label={t.services.sectionLabel}
  title={t.services.sectionTitle}
  accent={t.services.sectionAccent}
/>

      <div className="gutter mt-12 lg:mt-16">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.06} y={20}>
            <div className="group grid grid-cols-1 gap-4 border-t border-border py-8 transition-colors hover:border-accent/50 md:grid-cols-12 md:gap-8 lg:py-10">
              <span className="label text-accent md:col-span-1">
                {pad(i + 1)}
              </span>
              <h3 className="display text-2xl md:col-span-5 lg:text-3xl">
                {service.title}
              </h3>
              <p className="max-w-2xl text-base text-muted md:col-span-6">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
