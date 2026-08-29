import type { Stat, Service } from "@/lib/types";

/**
 * Единая точка правды по контактам, цифрам и услугам.
 * Меняешь здесь — меняется на всём сайте.
 */

export const site = {
  name: "Эдвард Ордоян",
  role: "AI Visual Producer & AI Creator",
  /** Заголовок первого экрана. Слово в accent выделяется красным */
  heroLine1: "AI VISUAL",
  heroAccent: "PRODUCER",
  tagline:
    "Нейро-фотосессии, промо-ролики и креативы для соцсетей полного цикла. От концепции и раскадровки до финального рендера и монтажа.",
  location: "Удалённо / Проект / Фулл-тайм",
  email: "ordoyanedvard@gmail.com",
  /** Телеграма в резюме нет — оставлено пустым, ссылка не отрисуется */
  telegram: "https://t.me/ordoooya",
  behance: "https://behance.net/a30ea301",
  instagram: "https://instagram.com/ordooan.ai",
  /** Адрес продакшена на GitHub Pages */
  url: "https://ordoyanedvard-art.github.io/portfolio-website",
  /** Mux playback id для фонового видео первого экрана */
  heroMuxPlaybackId: "",
  /** Ссылка на шоурил */
  showreelUrl: "",
} as const;

export const stats: Stat[] = [
  { value: "1,2M+", label: "Просмотров у серии Reels для бренда одежды" },
  { value: "CTR +40%", label: "Прирост за две недели на той же серии" },
  { value: "3 дня → 10 ч", label: "Цикл производства ролика после внедрения пайплайна" },
  { value: "XR School", label: "Победа в конкурсе AI-синематографии" },
];

export const services: Service[] = [
  {
    title: "Нейро-фотосессии и lookbook",
    description:
      "Кампейн-съёмка без съёмочного дня: концепт, генерация, AI-апскейлинг, ретушь. Пайплайн ComfyUI + ControlNet держит одного и того же героя во всех кадрах серии.",
  },
  {
    title: "Промо-ролики",
    description:
      "Рекламные видео под задачу бренда: сценарий, раскадровка, генерация сцен, анимация, монтаж и финальный рендер.",
  },
  {
    title: "Креативы для Reels и TikTok",
    description:
      "Вертикальные форматы под соцсети и вирусные серии. Собираются пакетами в едином визуальном языке — так работает контент-план, а не отдельный ролик.",
  },
  {
    title: "Полный цикл производства",
    description:
      "Веду проект от концепции до готовых файлов под каждую площадку. Один подрядчик вместо команды: сценарист, оператор, монтажёр, ретушёр.",
  },
];

/** Инструменты для блока About */
export const tools: string[] = [
  "Midjourney",
  "Stable Diffusion / ComfyUI",
  "ControlNet",
  "FLUX",
  "Runway Gen-3",
  "Luma Dream Machine",
  "Kling AI",
  "Pika",
  "Veo",
  "Seedance 2.5",
  "ChatGPT",
  "Claude",
  "Grok",
];

/** Ключевые навыки — блок под инструментами в About */
export const skills: string[] = [
  "Промпт-инжиниринг (Advanced)",
  "Text-to-Image / Image-to-Image",
  "Text-to-Video / Image-to-Video",
  "ControlNet, Inpainting, Outpainting",
  "AI Upscaling и ретушь",
  "Раскадровка и концепт-арт",
  "Консистентность персонажей",
  "Сценарии с LLM",
];

/** Строки бегущей строки под первым экраном */
export const marqueeItems: string[] = [
  "AI VISUAL PRODUCER",
  "NEURO PHOTOSHOOTS",
  "PROMO VIDEO",
  "REELS & TIKTOK",
  "COMFYUI PIPELINES",
  "FULL CYCLE PRODUCTION",
];
