import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/daffarabbani.github.io",
  assetPrefix: "/daffarabbani.github.io/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;