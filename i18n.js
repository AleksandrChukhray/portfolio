const NextI18Next = require('next-i18next').default
// TODO: возвращает undefined, почему ?
const { localeSubpaths } = require('next/config').default() ? require('next/config').default().publicRuntimeConfig : {}
const path = require('path')

module.exports = new NextI18Next({
    otherLanguages: ['de', 'ru'],
    localeSubpaths,
    localePath: path.resolve('./static/locales')
})