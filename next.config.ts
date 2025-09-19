import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/yuvaspetcare",
  assetPrefix: "/yuvaspetcare/",
  images: {
    unoptimized: true,
  },
};
