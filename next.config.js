const { nextI18NextRewrites } = require('next-i18next/rewrites')
const localeSubpaths = {}

module.exports = {
  excludeFile: str => /\*.{spec,test}.js/.test(str),
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  },
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }

    // exclude jest files from build
    // config.module.rules.push(
    //     {
    //       test: /\.test.js$/,
    //       loader: 'ignore-loader'
    //     }
    // );

    return config
  }
}
