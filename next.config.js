const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? process.env.BASE_PATH || "" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubPages ? "export" : "standalone",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: isGithubPages ? basePath : undefined
};

module.exports = nextConfig;
