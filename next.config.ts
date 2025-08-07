import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // cdn cdn.sanity.io
  reactStrictMode: true,
  
  // Optimize for production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
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
