// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require("./next-i18next.config.js");
/** @type {import('next').NextConfig} */
//const withTM = require("next-transpile-modules")(["gsap"]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    //disable the Image Optimization API
    unoptimized: true,
  },
};

module.exports = nextConfig;
