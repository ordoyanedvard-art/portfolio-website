import { readFileSync } from "node:fs";

/**
 * Размеры изображения из заголовка файла, без сторонних библиотек.
 * Поддержка: JPEG, PNG, WebP, AVIF, SVG.
 */
export function imageSize(filePath) {
  const buf = readFileSync(filePath);

  // PNG: ширина и высота в IHDR, начиная с 16-го байта
  if (buf.length > 24 && buf.toString("hex", 0, 8) === "89504e470d0a1a0a") {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  // JPEG: идём по маркерам до SOF
  if (buf.length > 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let offset = 2;
    while (offset < buf.length - 9) {
      if (buf[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = buf[offset + 1];
      const segmentLength = buf.readUInt16BE(offset + 2);

      // SOF0…SOF3, SOF5…SOF7, SOF9…SOF11, SOF13…SOF15 — кроме DHT/DAC/RST
      const isSOF =
        marker >= 0xc0 &&
        marker <= 0xcf &&
        marker !== 0xc4 &&
        marker !== 0xc8 &&
        marker !== 0xcc;

      if (isSOF) {
        return {
          height: buf.readUInt16BE(offset + 5),
          width: buf.readUInt16BE(offset + 7),
        };
      }
      offset += 2 + segmentLength;
    }
  }

  // WebP: VP8 / VP8L / VP8X
  if (buf.length > 30 && buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    const chunk = buf.toString("ascii", 12, 16);
    if (chunk === "VP8 ") {
      return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    }
    if (chunk === "VP8L") {
      const bits = buf.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (chunk === "VP8X") {
      const w = 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16));
      const h = 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16));
      return { width: w, height: h };
    }
  }

  // SVG: атрибуты width/height или viewBox
  if (buf.toString("utf8", 0, 300).includes("<svg")) {
    const head = buf.toString("utf8", 0, 2000);
    const w = head.match(/width="(\d+(?:\.\d+)?)"/);
    const h = head.match(/height="(\d+(?:\.\d+)?)"/);
    if (w && h) return { width: Math.round(+w[1]), height: Math.round(+h[1]) };
    const vb = head.match(/viewBox="[\d.\s-]*?([\d.]+)\s+([\d.]+)"/);
    if (vb) return { width: Math.round(+vb[1]), height: Math.round(+vb[2]) };
  }

  return null;
}

/** Ближайшая поддерживаемая пропорция плитки по размерам файла */
export function nearestAspect(width, height) {
  const ratio = width / height;
  const options = [
    { name: "9/16", value: 9 / 16 },
    { name: "4/5", value: 4 / 5 },
    { name: "1/1", value: 1 },
    { name: "16/9", value: 16 / 9 },
  ];
  return options.reduce((best, item) =>
    Math.abs(item.value - ratio) < Math.abs(best.value - ratio) ? item : best
  ).name;
}
