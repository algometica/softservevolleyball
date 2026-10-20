import type { ReactNode } from "react";
import Link from "next/link";

export function ClinicCta({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const classes = [
    "cta-clinic inline-flex h-12 max-w-full items-center justify-center rounded-full px-6 text-[17px] font-bold tracking-tight sm:px-7",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
