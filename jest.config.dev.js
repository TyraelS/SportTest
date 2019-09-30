module.exports = {
  moduleDirectories: ['./node_modules', './src'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  cacheDirectory: '<rootDir>/jest_cache',
  setupFiles: ['./shim.js'],
  setupTestFrameworkScriptFile: './jest.setup.js',
  moduleNameMapper: {
    '\\.(eot|otf|webp|svg|ttf|woff|woff2|jpg|jpeg|png)$':
      '<rootDir>/fileMock.js'
  },
  collectCoverage: true,
  bail: true,
  verbose: false,
  roots: ['<rootDir>/src/']
};
