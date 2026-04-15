import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  reactCompiler: true,
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
