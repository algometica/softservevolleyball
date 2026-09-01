import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-[56px] font-semibold tracking-[-0.035em] text-ink">
        404
      </h1>
      <p className="mt-3 text-[21px] text-muted">This page is not here.</p>
      <Link
        href="/"
        className="mt-8 text-[17px] text-blue transition-opacity hover:opacity-80"
      >
        Home
      </Link>
    </main>
  );
}
