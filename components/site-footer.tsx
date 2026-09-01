import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex max-w-[980px] items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <Image
            src="/ssv-logo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <p className="text-[12px] text-white/55">Soft Serve Volley Club</p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/softservevolleyclub"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
            className="text-white/45 transition-colors hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="3.6" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <Link
            href="/policies"
            className="text-[12px] text-white/30 transition-colors hover:text-white/60"
          >
            Policies
          </Link>
        </div>
      </div>
    </footer>
  );
}
