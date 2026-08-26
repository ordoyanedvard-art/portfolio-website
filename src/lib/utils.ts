import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Склейка классов с разрешением конфликтов Tailwind */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Tailwind-класс пропорции по значению из данных */
export function aspectClass(aspect: string): string {
  switch (aspect) {
    case "9/16":
      return "aspect-[9/16]";
    case "16/9":
      return "aspect-video";
    case "1/1":
      return "aspect-square";
    case "4/5":
      return "aspect-[4/5]";
    default:
      return "aspect-video";
  }
}

/** Двузначный номер для сетки: 1 → "01" */
export function pad(n: number): string {
  return String(n).padStart(2, "0");
}
