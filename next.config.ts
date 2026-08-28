import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` emits a plain HTML/CSS/JS bundle into ./out
  output: 'export',
  trailingSlash: true,
  images: {
    // Static export cannot use the on-demand image optimizer
    unoptimized: true,
  },
};

export default nextConfig;
