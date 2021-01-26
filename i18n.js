const NextI18Next = require('next-i18next').default
// TODO: возвращает undefined, почему ?
const { localeSubpaths } = require('next/config').default()
  ? require('next/config').default().publicRuntimeConfig
  : {}
const path = require('path')

module.exports = new NextI18Next({
  defaultLanguage: 'ru',
  otherLanguages: ['en'],
  localeSubpaths,
  localePath: path.resolve('./static/locales'),
  interpolation: {
    format(value, format) {
      if (format === 'age') {
        const birthdayYear = new Date('1992-03-10').getFullYear()
        const now = new Date().getFullYear()

        return now - birthdayYear
      }

      return value
    }
  }
})
