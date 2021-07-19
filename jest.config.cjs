/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

const { defaults } = require('jest-config');

module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['cjs', 'mjs', ...defaults.moduleFileExtensions],
  transformIgnorePatterns: ['/node_modules/.*\\.js$'],
  transform: { '\\.m?[jt]sx?$': 'babel-jest' },
  testMatch: ['**/?(*.)+(spec|test).cjs'],
};
