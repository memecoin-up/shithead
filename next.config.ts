import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use export only for GitHub Pages, not for Vercel
  output: process.env.VERCEL ? undefined : "export",
  trailingSlash: true,
  images: {
    unoptimized: process.env.VERCEL ? false : true,
  },
  // Add basePath and assetPrefix for GitHub Pages deployment only
  basePath: "",
  assetPrefix: "",
  webpack: (config) => {
    if (process.env.NODE_ENV === "development") {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: "@dyad-sh/nextjs-webpack-component-tagger",
      });
    }
    return config;
  },
};

export default nextConfig;
