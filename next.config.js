const path = require('path');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  locales: ["default", "en", "uk"],
  defaultLocale: "default",
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  localePath: path.resolve('./public/locales')
};

module.exports = nextConfig;
