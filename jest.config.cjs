module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  // if you need to transform specific node_modules ESM:
  transformIgnorePatterns: ["/node_modules/(?!(module-you-need)/)"],
};
