import Image from "next/image";
import Link from "next/link";
import { clubName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex max-w-[980px] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-8">
        <div className="flex items-center gap-3">
          <Image
            src="/snv-mark.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <p className="text-[12px] text-white/55">
            © {new Date().getFullYear()} {clubName}
          </p>
        </div>
        <Link
          href="/policies"
          className="text-[12px] text-white/30 transition-colors hover:text-white/60"
        >
          Policies
        </Link>
      </div>
    </footer>
  );
}
