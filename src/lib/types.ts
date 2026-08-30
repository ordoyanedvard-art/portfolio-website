/**
 * Типы контента портфолио.
 * Один тип работы на два вида: видео и фотосессия.
 */

export type WorkKind = "video" | "photo";

/** Пропорции плитки. Вертикаль — Reels, горизонталь — промо. */
export type Aspect = "9/16" | "16/9" | "1/1" | "4/5";

export interface WorkImage {
  /** Cloudinary public id либо путь в /public */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface WorkBase {
  /** Часть адреса: /work/<slug> */
  slug: string;
  /** Название работы */
  title: string;
  title_en?: string;
  /** Клиент или проект */
  client: string;
  client_en?: string;
  /** Что делал — 1–2 строки */
  role: string;
  role_en?: string;
  /** Описание проекта */
description?: string;
description_en?: string;
  /** Год */
  year: string;
  /** Теги: инструменты и тип работы */
  tags: string[];
  /** Обложка плитки */
  cover: WorkImage;
  /** Пропорция плитки в сетке */
  aspect: Aspect;
  /** true — плитка занимает 2 колонки на широком экране */
  featured?: boolean;
  /** Внешняя ссылка на полную версию (Behance / Instagram) */
  externalUrl?: string;
}

export interface VideoWork extends WorkBase {
  kind: "video";
  /** Mux playback id. Пусто, пока видео не загружено */
  muxPlaybackId: string;
  /** Длительность в секундах, для подписи */
  duration?: number;
}

export interface PhotoWork extends WorkBase {
  kind: "photo";
  /** Кадры сессии для лайтбокса, 4–6 шт */
  images: WorkImage[];
}

export type Work = VideoWork | PhotoWork;

export interface Stat {
  /** Число крупно */
  value: string;
  /** Подпись под числом */
  label: string;
}

export interface Service {
  title: string;
  description: string;
}
