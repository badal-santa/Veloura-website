import Link from "next/link";

import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm text-muted">
        <p>
          <Link href="/" className="text-text hover:text-pink-light">
            {site.name}
          </Link>
          <span className="px-2">·</span>
          <Link href="/privacy-policy" className="text-text hover:text-pink-light">
            Privacy policy
          </Link>
          <span className="px-2">·</span>
          <Link href="/terms" className="text-text hover:text-pink-light">
            Terms &amp; Conditions
          </Link>
          <span className="px-2">·</span>
          <a href={`mailto:${site.contactEmail}`} className="text-text hover:text-pink-light">
            Contact
          </a>
        </p>
        <p>
          &copy; 2026 {site.name}. Android is a trademark of Google LLC.
        </p>
      </div>
    </footer>
  );
}
