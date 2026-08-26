#!/usr/bin/env node
/**
 * Собирает src/data/works.ts из папки public/works.
 *
 * Ожидаемая структура:
 *
 *   public/works/
 *     01-video-neon-district/
 *       cover.jpg
 *       info.txt
 *     02-photo-silk-campaign/
 *       cover.jpg
 *       01.jpg  02.jpg  03.jpg
 *       info.txt
 *
 * info.txt — по одному значению на строку либо ключ: значение
 *
 *   title: Neon District
 *   client: Бренд одежды
 *   role: Промо-ролик, полный цикл
 *   year: 2026
 *   tags: Midjourney, Runway Gen-3
 *   mux: aBcD1234efGh          # только для видео
 *   url: https://behance.net/… # ссылка на полную версию
 *   featured: true             # плитка на две колонки
 *
 * Запуск:  npm run import
 */

import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join, extname, basename } from "node:path";
import { imageSize, nearestAspect } from "./lib/image-size.mjs";

const WORKS_DIR = "public/works";
const OUTPUT = "src/data/works.ts";
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".svg"]);

if (!existsSync(WORKS_DIR)) {
  console.error(`Папки ${WORKS_DIR} нет. Создай её и разложи работы по подпапкам.`);
  process.exit(1);
}

/** Разбор info.txt: ключ: значение, либо позиционно title/client/role */
function parseInfo(dir) {
  const file = join(dir, "info.txt");
  const info = {};
  if (!existsSync(file)) return info;

  const lines = readFileSync(file, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const positional = [];
  for (const line of lines) {
    const match = line.match(/^([a-zA-Z]+)\s*:\s*(.+)$/);
    if (match) info[match[1].toLowerCase()] = match[2].trim();
    else positional.push(line);
  }
  // Резервный формат: три строки без ключей
  if (!info.title && positional[0]) info.title = positional[0];
  if (!info.client && positional[1]) info.client = positional[1];
  if (!info.role && positional[2]) info.role = positional[2];

  return info;
}

/** slug из имени папки: "01-video-neon-district" → "neon-district" */
function toSlug(dirName) {
  return dirName
    .replace(/^\d+[-_]?/, "")
    .replace(/^(video|photo)[-_]/i, "")
    .toLowerCase();
}

/** Тип работы: из имени папки, иначе по числу изображений */
function detectKind(dirName, images) {
  if (/[-_]video[-_]/i.test(`-${dirName}-`)) return "video";
  if (/[-_]photo[-_]/i.test(`-${dirName}-`)) return "photo";
  return images.length > 1 ? "photo" : "video";
}

const escape = (s) => String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');

const entries = readdirSync(WORKS_DIR)
  .filter((name) => statSync(join(WORKS_DIR, name)).isDirectory())
  .sort();

if (entries.length === 0) {
  console.error(`В ${WORKS_DIR} нет подпапок с работами.`);
  process.exit(1);
}

const works = [];
const warnings = [];

for (const dirName of entries) {
  const dir = join(WORKS_DIR, dirName);
  const info = parseInfo(dir);

  const files = readdirSync(dir)
    .filter((f) => IMAGE_EXT.has(extname(f).toLowerCase()))
    .sort();

  if (files.length === 0) {
    warnings.push(`${dirName}: изображений нет, пропущено`);
    continue;
  }

  // Обложка: файл cover.*, иначе первый по алфавиту
  const coverFile = files.find((f) => basename(f, extname(f)).toLowerCase() === "cover") ?? files[0];
  const frameFiles = files.filter((f) => f !== coverFile);

  const slug = toSlug(dirName);
  const kind = detectKind(dirName, files);
  const title = info.title ?? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const measure = (file) => {
    const path = join(dir, file);
    const size = imageSize(path) ?? { width: 1400, height: 1750 };
    if (!imageSize(path)) warnings.push(`${dirName}/${file}: размеры не определились, поставлено 1400×1750`);
    return { src: `/works/${dirName}/${file}`, ...size };
  };

  const cover = measure(coverFile);
  const aspect = info.aspect ?? nearestAspect(cover.width, cover.height);

  const work = {
    kind,
    slug,
    title,
    client: info.client ?? "",
    role: info.role ?? "",
    year: info.year ?? String(new Date().getFullYear()),
    tags: (info.tags ?? "").split(",").map((t) => t.trim()).filter(Boolean),
    cover: { ...cover, alt: `${title} — обложка` },
    aspect,
    featured: info.featured === "true",
    externalUrl: info.url ?? "",
  };

  if (kind === "video") {
    work.muxPlaybackId = info.mux ?? "";
    if (!work.muxPlaybackId) warnings.push(`${dirName}: нет mux в info.txt, видео не проиграется`);
  } else {
    const source = frameFiles.length > 0 ? frameFiles : [coverFile];
    work.images = source.map((file, i) => {
      const m = measure(file);
      return { ...m, alt: `${title} — кадр ${i + 1}` };
    });
  }

  works.push(work);
}

/** Сериализация в TypeScript */
const serialize = (w) => {
  const lines = [
    "  {",
    `    kind: "${w.kind}",`,
    `    slug: "${escape(w.slug)}",`,
    `    title: "${escape(w.title)}",`,
    `    client: "${escape(w.client)}",`,
    `    role: "${escape(w.role)}",`,
    `    year: "${escape(w.year)}",`,
    `    tags: [${w.tags.map((t) => `"${escape(t)}"`).join(", ")}],`,
  ];

  if (w.kind === "video") lines.push(`    muxPlaybackId: "${escape(w.muxPlaybackId)}",`);

  lines.push(
    "    cover: {",
    `      src: "${w.cover.src}",`,
    `      alt: "${escape(w.cover.alt)}",`,
    `      width: ${w.cover.width},`,
    `      height: ${w.cover.height},`,
    "    },"
  );

  if (w.kind === "photo") {
    lines.push("    images: [");
    for (const img of w.images) {
      lines.push(
        "      {",
        `        src: "${img.src}",`,
        `        alt: "${escape(img.alt)}",`,
        `        width: ${img.width},`,
        `        height: ${img.height},`,
        "      },"
      );
    }
    lines.push("    ],");
  }

  lines.push(`    aspect: "${w.aspect}",`);
  if (w.featured) lines.push("    featured: true,");
  if (w.externalUrl) lines.push(`    externalUrl: "${escape(w.externalUrl)}",`);
  lines.push("  },");
  return lines.join("\n");
};

const output = `import type { Work } from "@/lib/types";

/**
 * СГЕНЕРИРОВАНО: npm run import
 * Правки руками перезапишутся при следующем запуске.
 * Меняй файлы и info.txt в public/works/, потом запускай импорт заново.
 */

export const works: Work[] = [
${works.map(serialize).join("\n")}
];

/** Поиск работы по адресу /work/<slug> */
export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

/** Все slug — для generateStaticParams */
export const workSlugs = works.map((w) => w.slug);
`;

writeFileSync(OUTPUT, output, "utf8");

const videos = works.filter((w) => w.kind === "video").length;
const photos = works.length - videos;
console.log(`${OUTPUT}: ${works.length} работ (видео ${videos}, фото ${photos})`);

if (warnings.length > 0) {
  console.log("\nПредупреждения:");
  for (const w of warnings) console.log(`  ${w}`);
}
