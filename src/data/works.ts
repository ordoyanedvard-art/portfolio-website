import type { Work } from "@/lib/types";

export const works: Work[] = [];

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}
