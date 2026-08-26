import type Lenis from "lenis";

declare global {
  interface Window {
    /** Экземпляр Lenis, чтобы лайтбокс мог стопнуть скролл страницы */
    __lenis?: Lenis;
  }
}

export {};
