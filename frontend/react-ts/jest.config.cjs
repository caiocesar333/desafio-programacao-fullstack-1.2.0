/* eslint-disable no-undef */
module.exports = {
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
};