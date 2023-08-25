/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['images.pexels.com'],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['mn', 'en', 'ru'],
    defaultLocale: 'mn',
  }
};
