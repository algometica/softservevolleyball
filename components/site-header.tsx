"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { InstagramIcon } from "@/components/instagram-icon";
import { instagramUrl, navLinks } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-12 text-[12px] text-ink transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-black/8 bg-white/70 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
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
          <span className="font-semibold tracking-tight">Soft Serve</span>
        </Link>
        <ul className="flex items-center gap-5 sm:gap-7">
          <li>
            <a
              href={instagramUrl}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="flex text-ink/55 transition-colors hover:text-ink"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
            </a>
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-ink/55 transition-colors hover:text-ink"
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
