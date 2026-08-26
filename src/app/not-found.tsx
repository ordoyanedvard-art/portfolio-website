import Link from "next/link";

export default function NotFound() {
  return (
    <main className="gutter flex min-h-svh flex-col justify-center">
      <p className="label text-accent">404</p>
      <h1 className="display mt-6 text-5xl lg:text-7xl">
        Страница
        <span className="block text-accent">не найдена</span>
      </h1>
      <p className="mt-6 max-w-md text-muted">
        Возможно, работа была удалена или адрес набран с ошибкой.
      </p>
      <Link
        href="/"
        className="label group mt-10 inline-flex w-fit items-center gap-2 border border-border px-5 py-3 text-text transition-colors hover:border-accent hover:text-accent"
      >
        На главную
        <span
          aria-hidden
          className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          ↗
        </span>
      </Link>
    </main>
  );
}
