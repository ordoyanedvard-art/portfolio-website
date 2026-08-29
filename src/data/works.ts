import type { Work } from "@/lib/types";

export const works: Work[] = [];

export const workSlugs = works.map((work) => work.slug);

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}
