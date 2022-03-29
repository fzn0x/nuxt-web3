import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPlugin } from "@nuxt/kit";
import { name, version } from "../package.json";
import defu from "defu";

export interface ModuleOptions {
  addPlugin: boolean;
  provider?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "web3",
    compatibility: {
      nuxt: "^3.0.0",
      bridge: false,
    },
  },
  defaults: {
    addPlugin: true,
    provider: null,
  },
  setup(_moduleOptions, nuxt) {
    if (_moduleOptions.addPlugin) {
      // @ts-ignore
      const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));

      // Default runtimeConfig
      nuxt.options.publicRuntimeConfig.web3 = defu(
        nuxt.options.publicRuntimeConfig.web3,
        {
          provider: _moduleOptions.provider,
        }
      );

      addPlugin(resolve(runtimeDir, "plugin"));
    }
  },
});
