/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  resolver: 'ts-jest-resolver',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/tests/'],
  testTimeout: 30_000,
  workerThreads: true, // https://github.com/jestjs/jest/issues/11617#issuecomment-1458155552
};
