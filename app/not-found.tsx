import Link from "next/link";
import { sectionTitleClass } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <h1 className={`text-ink ${sectionTitleClass}`}>404</h1>
      <p className="mt-3 text-[21px] text-muted">Page not found.</p>
      <Link
        href="/"
        className="mt-8 text-[17px] text-blue transition-opacity hover:opacity-80"
      >
        Home
      </Link>
    </main>
  );
}
