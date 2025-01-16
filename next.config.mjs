/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "back-end.portia.pro",
      },
      {
        protocol: "http",
        hostname: "back-end.portia.pro",
      },
    ],
  },
};

export default nextConfig;
