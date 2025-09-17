import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 enables static HTML export
  basePath: "/yuvaspetcare", // 👈 replace with your repo name
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
