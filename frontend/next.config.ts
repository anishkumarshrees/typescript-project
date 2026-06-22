import type { NextConfig } from "next";

import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port:'4000'
      }
    ]
  }
};

export default nextConfig;
