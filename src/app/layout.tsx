import type { Metadata, Viewport } from "next";
import { Unbounded, Inter_Tight } from "next/font/google";
import { site } from "@/data/site";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

/* Display: плотный, с полной кириллицей */
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

/* Body: нейтральный, узкий, кириллица есть */
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "AI visual producer",
    "нейро-фотосессия",
    "промо-ролик",
    "AI видео",
    "Midjourney",
    "Kling",
    site.name,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${interTight.variable}`}>
      <body className="bg-bg text-text antialiased">
        {/* Пропустить к контенту — для клавиатуры и скринридеров */}
        <a
          href="#work"
          className="label sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-accent focus:px-4 focus:py-3 focus:text-text"
        >
          Перейти к работам
        </a>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
