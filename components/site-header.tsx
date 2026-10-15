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
  const [menuOpen, setMenuOpen] = useState(false);
  const onDark = pathname === "/clinic" && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-[12px] transition-[background-color,border-color,color,backdrop-filter] duration-300 ${
        menuOpen
          ? "border-b border-black/8 bg-white text-ink"
          : scrolled
            ? "border-b border-black/8 bg-white/70 text-ink backdrop-blur-xl backdrop-saturate-150"
            : onDark
              ? "border-b border-transparent bg-transparent text-white"
              : "border-b border-transparent bg-transparent text-ink"
      }`}
    >
      <nav className="mx-auto flex h-12 max-w-[980px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <Image
            src="/snv-mark.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 shrink-0 object-contain"
          />
          <span className="hidden font-semibold tracking-tight sm:inline">
            Super Nova
          </span>
        </Link>
        <ul className="hidden items-center gap-7 md:flex">
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
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`absolute h-[1.5px] w-4 bg-current transition-transform ${
              menuOpen ? "translate-y-0 rotate-45" : "-translate-y-[3px]"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-4 bg-current transition-transform ${
              menuOpen ? "translate-y-0 -rotate-45" : "translate-y-[3px]"
            }`}
          />
        </button>
      </nav>
      {menuOpen ? (
        <div className="min-h-[calc(100svh-3rem)] border-t border-black/8 bg-white px-6 py-8 md:hidden">
          <ul className="flex flex-col gap-5 text-[17px] font-semibold text-ink">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 py-1 text-ink/55"
                onClick={() => setMenuOpen(false)}
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
