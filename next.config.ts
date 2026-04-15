import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["@/components", "@/sections", "@/lib"],
  },
  compress: true,
  async redirects() {
    return [
      {
        source: "/blog/full/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
