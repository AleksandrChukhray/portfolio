const { nextI18NextRewrites } = require('next-i18next/rewrites')
const localeSubpaths = {}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  },
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }

    return config
  }
}
