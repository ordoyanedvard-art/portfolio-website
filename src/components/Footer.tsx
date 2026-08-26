import { site } from "@/data/site";

/** 08 — Подвал. Год, права, дубль ссылок мелким капсом. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="gutter py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="label text-muted">
          © {year} {site.name} · All rights reserved
        </p>

        <nav aria-label="Ссылки в подвале">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="label text-muted transition-colors hover:text-accent"
              >
                Email
              </a>
            </li>
            {[
              { label: "Telegram", href: site.telegram },
              { label: "Behance", href: site.behance },
              { label: "Instagram", href: site.instagram },
            ]
              .filter((l) => Boolean(l.href))
              .map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-muted transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
