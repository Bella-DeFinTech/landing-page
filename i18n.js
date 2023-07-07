const NextI18next = require("next-i18next").default;

const instance = new NextI18next({
  strictMode: false,
  defaultLanguage: "en",
  otherLanguages: ["zh_cn", "tur"],
  // ignoreRoutes: [],
});

const langs = ["en", "zh_cn", "tur"];
instance.i18n.languages = langs;

module.exports = instance;

module.exports.langs = langs;
