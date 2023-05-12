module.exports = {
    rootDir: __dirname,
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts)$': ['ts-jest', { tsconfig: 'tsconfig.server.json'}],
    },
    testEnvironment: 'node',
    setupFiles: ['dotenv/config'],
    moduleFileExtensions: ['ts', 'js', 'json'],
    modulePathIgnorePatterns: ['<rootDir>/src/', '<rootDir>/dist/'],
    moduleNameMapper: {
        '^root(.*)$': '<rootDir>/server$1',
    }
};