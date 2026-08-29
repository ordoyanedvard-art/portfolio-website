import { stats } from "@/data/site";
import { pad } from "@/lib/utils";
import { type Locale } from "@/data/i18n";
import Reveal from "./Reveal";

interface StatsProps {
  locale: Locale;
}

const statLabels = {
  ru: [
    "Просмотров у серии Reels для бренда одежды",
    "Прирост за две недели на той же серии",
    "Цикл производства ролика после внедрения пайплайна",
    "Победа в конкурсе AI-синематографии",
  ],
  en: [
    "Views on a Reels series for a fashion brand",
    "Growth in two weeks on the same series",
    "Video production cycle after pipeline implementation",
    "Winner of an AI cinematography competition",
  ],
} as const;

export default function Stats({ locale }: StatsProps) {
  return (
    <section
      aria-label={locale === "ru" ? "Цифры" : "Results"}
      className="border-b border-border"
    >
      <div className="gutter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.08}
            className={[
              "border-border py-10 lg:py-14",
              "border-t sm:border-t-0",
              i > 0 ? "sm:border-l sm:pl-6 lg:pl-8" : "",
              i === 2 ? "lg:border-l" : "",
              i >= 2 ? "sm:border-t lg:border-t-0 sm:pt-10" : "",
              i === 2 ? "sm:border-l-0 lg:pl-8" : "",
            ].join(" ")}
          >
            <span className="label mb-6 block text-accent">
              {pad(i + 1)}
            </span>

            <p className="display text-3xl lg:text-4xl">
              {stat.value}
            </p>

            <p className="mt-3 max-w-[14rem] text-sm text-muted">
              {statLabels[locale][i]}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
