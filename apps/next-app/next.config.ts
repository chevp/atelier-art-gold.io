import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/atelier-art-gold.io',
  assetPrefix: '/atelier-art-gold.io',
};

export default nextConfig;

