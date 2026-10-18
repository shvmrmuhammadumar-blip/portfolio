import type { NextConfig } from "next";
import path from "path";

// GitHub Pages serves a static site from a sub-path (/portfolio), so the deploy
// workflow sets GITHUB_PAGES=true to switch on static export + basePath.
// Local dev and Vercel/Netlify builds are unaffected.
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: isPages,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  ...(isPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
      }
    : {}),
};

export default nextConfig;
