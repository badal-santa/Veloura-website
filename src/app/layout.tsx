import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";

import "./globals.css";

// Same typeface as the app.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Beauty camera & photo studio`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: {
    title: `${site.name} — Beauty camera & photo studio`,
    description: site.description,
    siteName: site.name,
    images: ["/screenshots/09-photo-editor.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
