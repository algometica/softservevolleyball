import type { ReactNode } from "react";
import Link from "next/link";

export function ClinicCta({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "cta-clinic inline-flex h-12 items-center justify-center rounded-full px-7 text-[17px] font-bold tracking-tight";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
