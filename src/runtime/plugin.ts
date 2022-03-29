import Web3 from "web3";
import { defineNuxtPlugin, NuxtApp, useRuntimeConfig } from "#app";

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  // runtimeConfig
  const { web3 } = useRuntimeConfig();
  // provider
  const provider = web3.provider || process.env.web3 || "";

  nuxtApp.provide("test", "haha");
  // nuxtApp.provide("Web3", new Web3(provider));
  // nuxtApp.provide("web3", Web3);
});
