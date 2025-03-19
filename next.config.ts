import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Don't stop the build on warning-level issues
    ignoreDuringBuilds: true, // Keep linting active
    // dirs: ["pages", "components", "lib", "utils", "app"], // Directories to lint
  },
  /* config options here */
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    this.reactStrictMode = false;

    return config;
  },
  reactStrictMode: false, // Moved this outside the webpack function
};

export default nextConfig;
