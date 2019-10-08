module.exports = {
  moduleDirectories: ['./node_modules', './src'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  cacheDirectory: '<rootDir>/jest_cache',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    'src/**/*.jsx',
    '!src/**/index.js',
    '!src/**/*.style.js',
    '!src/**/*.mock.js',
    '!src/serviceWorker.js'
  ],
  coveragePathIgnorePatterns: ['<rootDir>/src/config', '<rootDir>/src/store'],
  setupFiles: ['./shim.js'],
  setupTestFrameworkScriptFile: './jest.setup.js',
  moduleNameMapper: {
    '\\.(eot|otf|webp|svg|ttf|woff|woff2|jpg|jpeg|png)$':
      '<rootDir>/fileMock.js'
  },
  transformIgnorePatterns: ['node_modules/(?!(redux-api-middleware)/)']
};
