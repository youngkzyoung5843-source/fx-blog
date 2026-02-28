import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/fx-blog',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
