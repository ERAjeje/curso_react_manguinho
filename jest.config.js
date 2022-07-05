module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: '<rootDir>/coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.tsx?$': 'ts-jest'
  }
}