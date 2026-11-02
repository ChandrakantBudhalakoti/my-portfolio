import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old résumé file name; keeps previously shared links working.
      {
        source: "/Chandra_Kant_Budhalakoti_Frontend_Dev.pdf",
        destination: "/Chandra_Kant_Budhalakoti.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
