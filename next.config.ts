import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/u13",
        destination: "/u14",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
