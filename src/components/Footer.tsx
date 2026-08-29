import { site } from "@/data/site";
import { translations, type Locale } from "@/data/i18n";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear();
  const t = translations[locale];

  return (
    <footer className="gutter py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="label text-muted">
          © {year} {t.identity.name} · {t.footer.allRightsReserved}
        </p>

        <nav
          aria-label={
            locale === "ru" ? "Ссылки в подвале" : "Footer links"
          }
        >
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
              .filter((link) => Boolean(link.href))
              .map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
