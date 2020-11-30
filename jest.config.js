module.exports = {
  testEnvironment: "node",
  testMatch: [
    "**/test/**/*.spec.js"
  ],
  testPathIgnorePatterns: [
     "/node_modules/"
  ],
  verbose: true,
  watchman: true
};
