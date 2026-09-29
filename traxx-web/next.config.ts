import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/blogs/:slug*',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
