import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    /** Inline global CSS into HTML to reduce render-blocking CSS on first paint (LCP). */
    inlineCss: true,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@/components",
      "@/sections",
      "@/lib",
    ],
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
