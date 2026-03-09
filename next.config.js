const basePath = process.env.BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath
};

module.exports = nextConfig;
