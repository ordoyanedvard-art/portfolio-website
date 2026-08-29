export type Locale = "ru" | "en";

export const translations = {
  ru: {
    nav: {
      work: "РАБОТЫ",
      services: "УСЛУГИ",
      about: "ОБО МНЕ",
      contact: "КОНТАКТЫ",
    },

    accessibility: {
      skipToWork: "Перейти к работам",
    },

    hero: {
      ariaLabel: "Первый экран",
      showreel: "Шоурил",
      selectedWork: "Избранные работы",
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
    },

    services: {
      sectionLabel: "Что я делаю",
      sectionTitle: "Что я",
      sectionAccent: "делаю",
    },

    about: {
      sectionLabel: "Обо мне",
      sectionTitle: "Как я",
      sectionAccent: "работаю",
      tools: "Инструменты",
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

    accessibility: {
      skipToWork: "Skip to work",
    },

    hero: {
      ariaLabel: "Hero section",
      showreel: "Showreel",
      selectedWork: "Selected work",
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
    },

    services: {
      sectionLabel: "What I do",
      sectionTitle: "What I",
      sectionAccent: "do",
    },

    about: {
      sectionLabel: "About",
      sectionTitle: "How I",
      sectionAccent: "work",
      tools: "Tools",
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
