"use client";

/**
 * Фоновое видео первого экрана.
 * Пока playbackId пуст — рисуем градиент-заглушку, чтобы верстка не «падала».
 * Загрузка Mux Player отложена и не блокирует первый рендер.
 */
import dynamic from "next/dynamic";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react/lazy"), {
  ssr: false,
});

interface HeroVideoProps {
  playbackId: string;
}

/**
 * Mux Player ждёт CSSProperties с индексной подписью под CSS-переменные,
 * поэтому расширяем тип, а не кастим к обычному CSSProperties.
 */
type MuxStyle = React.CSSProperties & Record<`--${string}`, string>;

const heroVideoStyle: MuxStyle = {
  "--controls": "none",
  "--media-object-fit": "cover",
  height: "100%",
  width: "100%",
};

export default function HeroVideo({ playbackId }: HeroVideoProps) {
  if (!playbackId) {
    return (
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        {/* Заглушка: тёмный градиент с красным свечением */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_10%,#1c1c1c_0%,#0a0a0a_60%)]" />
        <div className="absolute -top-1/4 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-accent/12 blur-[120px]" />
        {/* Сетка-разметка, как в референсах */}
        <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] [background-size:88px_88px]" />
      </div>
    );
  }

  return (
    <div aria-hidden className="absolute inset-0">
      <MuxPlayer
        playbackId={playbackId}
        streamType="on-demand"
        autoPlay="muted"
        loop
        muted
        nohotkeys
        preload="auto"
        className="h-full w-full [&::part(center)]:hidden [&_video]:h-full [&_video]:w-full [&_video]:object-cover"
        style={heroVideoStyle}
      />
    </div>
  );
}
