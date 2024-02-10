/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocols: "https",
        hostname: "liveblocks.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;
