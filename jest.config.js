// const tsconfig = require('./tsconfig.json');
// const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

// module.exports = {
//   preset: 'react-native',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
//   transformIgnorePatterns: [],
//   // transform: {
//   //   // "^.+\\.tsx?$": "ts-jest",
//   //   '^.+\\.tsx?$': 'babel-jest',
//   //   // "^.+\\.mjs$": "babel-jest",
//   // },
//   // testPathIgnorePatterns: [
//   //   '<rootDir>/build/',
//   //   '<rootDir>/node_modules/',
//   //   '<rootDir>/dist/',
//   // ],

//   // testEnvironment: 'jsdom',
//   // transform: {
//   //   '\\.[jt]sx?$': 'esbuild-jest',
//   // },
//   // moduleNameMapper: {
//   //   // '^~(.*)$': '<rootDir>/src/$1',
//   //   '^@core/(.*)': '<rootDir>/src/core/$1',
//   //   '^@data/(.*)$]': ['<rootDir>/src/data/$1'],
//   //   '^@domains/(.*)$': ['<rootDir>/src/domains/$1'],
//   //   '^@presentation/(.*)$': ['<rootDir>/src/presentation/$1'],
//   // },
//   moduleNameMapper,
// };

// module.exports = {
//   preset: 'ts-jest/presets/js-with-ts',
//   testEnvironment: 'jsdom',
// };

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
