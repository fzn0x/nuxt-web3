const { resolve } = require("path");
const defu = require("defu");
const log = require("debug")("nuxt:web3");

module.exports = function(_moduleOptions) {
  const moduleOptions = {
    ...this.options.web3,
    ..._moduleOptions,
    ...(this.options.runtimeConfig && this.options.runtimeConfig.web3)
  };

  const options = defu(moduleOptions, {
    provider: ""
  });

  this.addPlugin({
    src: resolve(__dirname, "plugin.js"),
    fileName: "web3.js",
    options
  });

  const provider =
    typeof options.provider === "object"
      ? options.provider.path || options.provider.host || "AbstractProvider"
      : options.provider;

  log("Web3js running at provider : ", provider);
};

module.exports.meta = require("../package.json");
