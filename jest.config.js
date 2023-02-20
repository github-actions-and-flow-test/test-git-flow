/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    cacheDirectory: '<rootDir>/.jestcache',
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)?$': ['ts-jest']
    },
    setupFilesAfterEnv: ['./setup-tests.ts'],
    moduleDirectories: ['node_modules'],
    rootDir: "./",
    modulePaths: [
        "<rootDir>"
    ]
}

