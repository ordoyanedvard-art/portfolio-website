import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

interface SectionHeadingProps {
  /** Номер секции: 01, 02… как в референсах */
  index: string;
  /** Служебная подпись капсом */
  label: string;
  /** Крупный заголовок */
  title: string;
  /** Слово или часть, которая выделяется красным */
  accent?: string;
  className?: string;
}

export default function SectionHeading({
  index,
  label,
  title,
  accent,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("gutter", className)}>
      {/* Служебная строка проявляется обычным затуханием, заголовок —
          маской из-под линии, поэтому обёртки разные */}
      <Reveal y={12}>
        <div className="flex items-baseline gap-4 border-b border-border pb-5">
          <span className="label text-accent">{index}</span>
          <span className="label text-muted">{label}</span>
        </div>
      </Reveal>
      <h2 className="display mt-6 text-4xl sm:text-5xl lg:text-6xl">
        <SplitText>{title}</SplitText>
        {accent ? (
          <span className="text-accent">
            {" "}
            <SplitText delay={0.08}>{accent}</SplitText>
          </span>
        ) : null}
      </h2>
    </div>
  );
}
