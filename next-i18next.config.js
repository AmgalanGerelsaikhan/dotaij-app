/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n: {
    locales: ["default", "en", "uk"],
    defaultLocale: "default",
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
};
