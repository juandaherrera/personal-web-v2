import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
};

export default nextConfig;
