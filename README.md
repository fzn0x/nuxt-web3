<div align="center">
  
![nuxt-web3](https://api.nuxtjs.org/api/ipx/s_80,f_webp/gh/nuxt/modules/main/website/public//icons/web3js.svg)

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

</div>

Web3.js module integration for Nuxt

## Setup

1. Add `nuxt-web3` dependency to your project

```bash
yarn add nuxt-web3 # or npm i nuxt-web3
```

2. Add `nuxt-web3` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    "nuxt-web3",
  ];
}
```

Or

```js
modules: [
  "nuxt-web3",
  // Or
  [
    "nuxt-web3",
    {
      /* module options */
    }
  ]
];
```

### Module Options

```js
// nuxt.config.js
export default {
  modules: ["nuxt-web3"],
  //....
  web3: {
    provider: "" // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    web3: {
      provider: process.env.WEB3_PROVIDER_URL
    }
  },

  privateRuntimeConfig: {
    web3: {
      provider: process.env.PROVIDER_URL
    }
  }
};
```

## Usage

Using default ethereum window supported by the browsers :

```js
window.web3 = new this.$Web3(ethereum);
//or
window.web3 = new this.$Web3(window.ethereum);
```

Using configuration or custom provider from nuxt.config.js.

```js
window.web3 = new this.$web3;
```

[Example Usage](./example/pages/index.vue)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-web3/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-web3
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-web3.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-web3
[license-src]: https://img.shields.io/npm/l/nuxt-web3.svg
[license-href]: https://npmjs.com/package/nuxt-web3
