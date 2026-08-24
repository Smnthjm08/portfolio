import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /writing was the old route for the blog index and posts.
      { source: "/writing", destination: "/blogs", permanent: true },
      {
        source: "/writing/:slug",
        destination: "/blogs/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
