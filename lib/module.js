import { resolve } from "path";
import defu from "defu";
import consola from "consola";
import pkg from "../package.json";

const logger = consola.withScope("nuxt:web3");

export default function nuxtWeb3(_moduleOptions) {
  const { nuxt, addPlugin } = this;

  // add module config from different configuration scope.
  const moduleOptions = {
    ...nuxt.options.web3,
    ..._moduleOptions,
    ...(nuxt.options.runtimeConfig && nuxt.options.runtimeConfig.web3)
  };

  // assign default properties recursively with defu.
  const options = defu(moduleOptions, {
    provider: ""
  });

  // add plugin for the module.
  addPlugin({
    src: resolve(__dirname, "../templates/plugin.js"),
    fileName: "web3.js",
    options
  });

  // get the used provider in the web3 options.
  const provider =
    typeof options.provider === "object"
      ? options.provider.path || options.provider.host || "AbstractProvider"
      : options.provider;

  // debug the used provider the used provider if web3js running.
  logger.debug(`Web3js running at provider : ${provider}`);
}

export { pkg as meta };
