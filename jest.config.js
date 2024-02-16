module.exports = {
  preset: "jest-preset-angular",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  modulePathIgnorePatterns: ["<rootDir>/e2e"],
  transform: {
    "^.+\\.(ts|js|html)$": [
      "jest-preset-angular",
      {
        useESM: true,
        stringifyContentPathRegex: "\\.(html|svg)$",
        tsconfig: "<rootDir>/src/tsconfig.spec.json",
      },
    ],
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!.*\\.mjs$|@angular|@ngrx)",
  ],
};
