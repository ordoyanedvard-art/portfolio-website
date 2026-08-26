import { marqueeItems } from "@/data/site";

/**
 * 02 — Бегущая строка.
 * Дублируем список дважды: анимация уводит трек на -50%, шов не виден.
 */
export default function Marquee() {
  const track = [...marqueeItems, ...marqueeItems];

  return (
    <section
      aria-hidden
      className="overflow-hidden border-y border-border bg-surface/40 py-5"
    >
      <div className="animate-marquee flex w-max items-center">
        {track.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="label px-8 text-text/85">{item}</span>
            <span className="text-accent" aria-hidden>
              ●
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
