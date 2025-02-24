import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // reactStrictMode: true,
  // basePath: "/creativemovementdancecamp",
  // distDir: "out", // Change the build folder name to "out" (since "build" is incorrect)
  // images: {
  //   unoptimized: true, // GitHub Pages does not support image optimization
  // },
};

module.exports = withNextIntl(nextConfig);
