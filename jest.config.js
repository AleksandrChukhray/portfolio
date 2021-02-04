// Jest.config.js
module.exports = {
  // Automatically clear mock calls and instances between every test
  'clearMocks': true,
  // The directory where Jest should output its coverage files
  'coverageDirectory': '.coverage',
  'setupFiles': ['./setupTests.js'],
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  'setupFilesAfterEnv': ['./jest.setup.js'],
  'testPathIgnorePatterns': [
    '/node_modules/',
    '/server/',
    '/projects/',
    '/styles/',
    '/static/',
    '/.next/'
  ]

}
