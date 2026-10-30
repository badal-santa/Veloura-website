import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-line/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link href="/" className="flex items-center gap-3 text-lg font-bold">
          <Image src="/icon.png" alt="" width={36} height={36} className="rounded-[10px]" priority />
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted">
          <Link href="/#features" className="hidden hover:text-text sm:inline">
            Features
          </Link>
          <Link href="/privacy-policy" className="hover:text-text">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-text">
            Terms
          </Link>
        </nav>
      </div>
    </header>
  );
}
