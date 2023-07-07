const NextI18next = require("next-i18next").default;

module.exports = new NextI18next({
  strictMode: false,
  defaultLanguage: 'en',
  otherLanguages: ['zh_cn', 'tur']
})
module.exports.langs = [
  'en',
  'zh_cn',
  'tur'
]
