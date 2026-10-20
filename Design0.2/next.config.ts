import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // three.js ships ESM that benefits from transpiling for tree-shaking.
  transpilePackages: ["three"],
};

export default nextConfig;
