import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // cdn cdn.sanity.io
  reactStrictMode: true,
  
  // Enable Server-Side Rendering
  output: 'standalone',
  
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
