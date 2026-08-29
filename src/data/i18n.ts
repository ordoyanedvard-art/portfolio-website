export type Locale = "ru" | "en";

export const translations = {
  ru: {
    nav: {
      work: "РАБОТЫ",
      services: "УСЛУГИ",
      about: "ОБО МНЕ",
      contact: "КОНТАКТЫ",
    },
    identity: {
      name: "Эдвард Ордоян",
    },

    stats: {
      values: ["1,2M+", "CTR +40%", "3 ДНЯ → 10 Ч", "XR SCHOOL"],
    },
    accessibility: {
      skipToWork: "Перейти к работам",
    },

    hero: {
  ariaLabel: "Первый экран",
  showreel: "Шоурил",
  selectedWork: "Избранные работы",
  tagline:
    "Нейро-фотосессии, промо-ролики и креативы для соцсетей полного цикла. От концепции и раскадровки до финального рендера и монтажа.",
  location: "Удалённо / Проект / Фулл-тайм",
},

    work: {
      sectionLabel: "Избранные работы",
      sectionTitle: "Избранные",
      sectionAccent: "работы",
      view: "Смотреть",
      close: "Закрыть",
      photo: "Фото",
      video: "Видео",
      frame: "Кадр",
      previous: "Предыдущее",
      next: "Следующее",
      fullVersion: "Полная версия",
      openWork: "Открыть работу",
        all: "Все",
  images: "Изображения",
  videos: "Видео",
    },
all: "Все",
images: "Изображения",
videos: "Видео",
    services: {
  sectionLabel: "Что я делаю",
  sectionTitle: "Что я",
  sectionAccent: "делаю",
  items: [
    {
      title: "Нейро-фотосессии и lookbook",
      description:
        "Кампейн-съёмка без съёмочного дня: концепт, генерация, AI-апскейлинг, ретушь. Пайплайн ComfyUI + ControlNet удерживает одного и того же героя во всех кадрах серии.",
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
  ],
},

    about: {
  sectionLabel: "Обо мне",
  sectionTitle: "Как я",
  sectionAccent: "работаю",
  tools: "Инструменты",
  skillsTitle: "Навыки",

  paragraphs: [
    "Больше трёх лет делаю коммерческий визуал и видео на нейросетях. Работаю с брендами одежды, музыкальными артистами и командами AI-креаторов — от нейро-фотосессий до вирусных Instagram-сериалов.",

   "Ключевое преимущество не в самих генераторах, а в выстроенном пайплайне. Моя основная связка — поиск референсов, создание исходных изображений и генерация видео преимущественно в Seedance 2.5. Такой подход сокращает производство в 3–5 раз без потери качества и помогает сохранять единый визуальный стиль во всей серии.",

    "Веду проект целиком: концепция, сценарий с LLM, раскадровка, генерация, апскейлинг, ретушь, монтаж, финальные файлы под каждую площадку.",
  ],

  skills: [
    "Промпт-инжиниринг (Advanced)",
    "Text-to-Image / Image-to-Image",
    "Text-to-Video / Image-to-Video",
    "ControlNet, Inpainting, Outpainting",
    "AI Upscaling и ретушь",
    "Раскадровка и концепт-арт",
    "Консистентность персонажей",
    "Сценарии с LLM",
  ],
},

    contact: {
      sectionLabel: "Связаться",
      sectionTitle: "Давайте",
      sectionAccent: "поработаем",
    },

    footer: {
      backToTop: "Наверх",
      allRightsReserved: "Все права защищены",
    },
  },

  en: {
    nav: {
      work: "WORK",
      services: "SERVICES",
      about: "ABOUT",
      contact: "CONTACT",
    },
    identity: {
      name: "Edvard Ordoyan",
    },

    stats: {
      values: ["1.2M+", "CTR +40%", "3 DAYS → 10 H", "XR SCHOOL"],
    },
    accessibility: {
      skipToWork: "Skip to work",
    },

    hero: {
  ariaLabel: "Hero section",
  showreel: "Showreel",
  selectedWork: "Selected work",
  tagline:
    "AI photoshoots, promo videos and full-cycle social media creatives. From concept and storyboarding to final rendering and editing.",
  location: "Remote / Project / Full-time",
},
    work: {
      sectionLabel: "Selected work",
      sectionTitle: "Selected",
      sectionAccent: "work",
      view: "View",
      close: "Close",
      photo: "Photo",
      video: "Video",
      frame: "Frame",
      previous: "Previous",
      next: "Next",
      fullVersion: "Full version",
      openWork: "Open work",
        all: "All",
  images: "Images",
  videos: "Videos",
    },
all: "All",
images: "Images",
videos: "Videos",
    services: {
  sectionLabel: "What I do",
  sectionTitle: "What I",
  sectionAccent: "do",
  items: [
    {
      title: "AI photoshoots and lookbooks",
      description:
        "Campaign imagery without a traditional shoot day: concept, generation, AI upscaling and retouching. A ComfyUI + ControlNet pipeline keeps the same character consistent across the entire series.",
    },
    {
      title: "Promo videos",
      description:
        "Brand-focused advertising videos: scripting, storyboarding, scene generation, animation, editing and final rendering.",
    },
    {
      title: "Reels and TikTok creatives",
      description:
        "Vertical content formats for social media and viral series. Delivered in batches with one consistent visual language — because a content plan works better than isolated videos.",
    },
    {
      title: "Full-cycle production",
      description:
        "I take projects from the initial concept to platform-ready files. One producer instead of an entire team: scriptwriter, cinematographer, editor and retoucher.",
    },
  ],
},

    about: {
  sectionLabel: "About",
  sectionTitle: "How I",
  sectionAccent: "work",
  tools: "Tools",
  skillsTitle: "Skills",

  paragraphs: [
    "For more than three years, I have been creating commercial visuals and video with generative AI. I work with fashion brands, music artists and AI creator teams — from AI photoshoots to viral Instagram series.",

    "The key advantage is not the generators themselves, but a well-structured workflow. My core pipeline combines reference research, creation of source images and video generation primarily in Seedance 2.5. This approach cuts production time by 3–5x without sacrificing quality and helps maintain a consistent visual style throughout the entire series.",

    "I lead projects from start to finish: concept, LLM-assisted scripting, storyboarding, generation, upscaling, retouching, editing and final files for every platform.",
  ],

  skills: [
    "Prompt Engineering (Advanced)",
    "Text-to-Image / Image-to-Image",
    "Text-to-Video / Image-to-Video",
    "ControlNet, Inpainting, Outpainting",
    "AI Upscaling and Retouching",
    "Storyboarding and Concept Art",
    "Character Consistency",
    "LLM-assisted Scripting",
  ],
},

    contact: {
      sectionLabel: "Get in touch",
      sectionTitle: "Let’s",
      sectionAccent: "work together",
    },

    footer: {
      backToTop: "Back to top",
      allRightsReserved: "All rights reserved",
    },
  },
} as const;
