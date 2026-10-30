import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain static site (HTML/CSS/JS in out/), hosted like santagallery.app.
  output: "export",
  // /privacy-policy → out/privacy-policy/index.html, so any static host serves it.
  trailingSlash: true,
  // The default image optimizer needs a server; screenshots are already sized for the web.
  images: { unoptimized: true },
  // cacheComponents / partialPrefetching (scaffold defaults) need a server: "PPR cannot be enabled in export mode".
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
