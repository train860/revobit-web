/** @type {import('next').NextConfig} */
//const withTM = require("next-transpile-modules")(["gsap"]);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    //disable the Image Optimization API
    unoptimized: true,
  },
};

module.exports = nextConfig;
