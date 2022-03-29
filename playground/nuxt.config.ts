import { defineNuxtConfig } from "nuxt3";
import web3 from "..";

export default defineNuxtConfig({
  modules: [web3],
  web3: {
    addPlugin: true,
  },
});
