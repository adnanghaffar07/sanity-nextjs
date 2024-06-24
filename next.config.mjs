/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  productionBrowserSourceMaps: true,
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
