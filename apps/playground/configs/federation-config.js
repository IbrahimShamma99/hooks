const dependencies = require("../package.json").dependencies;

module.exports = {
  name: "playground",
  filename: "remoteEntry.js",
  exposes: {},
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
