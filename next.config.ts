import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // cdn cdn.sanity.io
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      }
    ]
  }
};

export default nextConfig;
