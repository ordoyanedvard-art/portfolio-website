import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { getWorkBySlug, workSlugs } from "@/data/works";
import { site } from "@/data/site";

interface Params {
  params: Promise<{ slug: string }>;
}

/** 16 статических адресов на сборке — ссылка на кейс работает напрямую */
export const dynamicParams = false;

export const generateStaticParams = async () => {
  if (workSlugs.length === 0) {
    return [{ slug: "placeholder" }];
  }
  return workSlugs.map((slug) => ({ slug }));
};

/** Свои OG-теги на каждый кейс: превью в Telegram будет по работе */
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "Работа не найдена" };

  const title = `${work.title} — ${work.client}`;
  const description = `${work.role}. ${work.year}.`;
  const image =
    work.kind === "video" && work.muxPlaybackId
      ? `https://image.mux.com/${work.muxPlaybackId}/thumbnail.jpg?width=1200`
      : work.cover.src;

  return {
    title,
    description,
    alternates: { canonical: `/work/${work.slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/work/${work.slug}`,
      images: [{ url: image, width: 1200, height: 630, alt: work.cover.alt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function WorkPage({ params }: Params) {
  const { slug } = await params;
  if (!getWorkBySlug(slug)) notFound();
  return <PageShell initialSlug={slug} />;
}
