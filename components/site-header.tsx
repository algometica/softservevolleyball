"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { InstagramIcon } from "@/components/instagram-icon";
import { instagramUrl, navLinks } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const onDark = pathname === "/clinic" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-12 text-[12px] transition-[background-color,border-color,color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-black/8 bg-white/70 text-ink backdrop-blur-xl backdrop-saturate-150"
          : onDark
            ? "border-b border-transparent bg-transparent text-white"
            : "border-b border-transparent bg-transparent text-ink"
      }`}
    >
      <nav className="mx-auto flex h-full max-w-[980px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/ssv-logo.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="hidden font-semibold tracking-tight sm:inline">
            Soft Serve
          </span>
        </Link>
        <ul className="flex shrink-0 items-center gap-2 sm:gap-7">
          <li>
            <a
              href={instagramUrl}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="flex text-current/55 transition-colors hover:text-current"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
            </a>
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-current/55 transition-colors hover:text-current"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
