import { stats } from "@/data/site";
import { pad } from "@/lib/utils";
import Reveal from "./Reveal";

/**
 * 03 — Цифры для доверия.
 * Плитки в ряд, номер 01–04 красным сверху. Границы дают жёсткую сетку.
 */
export default function Stats() {
  return (
    <section aria-label="Цифры" className="border-b border-border">
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
            <span className="label mb-6 block text-accent">{pad(i + 1)}</span>
            <p className="display text-3xl lg:text-4xl">{stat.value}</p>
            <p className="mt-3 max-w-[14rem] text-sm text-muted">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
