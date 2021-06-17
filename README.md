![nuxt-web3](https://socialify.git.ci/fauzan121002/nuxt-web3/image?description=1&descriptionEditable=Web3.js%20module%20integration%20for%20Nuxt.js&forks=1&issues=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FChainSafe%2Fweb3.js%2F1.x%2Fassets%2Flogo%2Fweb3js.jpg&owner=1&pulls=1&stargazers=1&theme=Light)

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> Web3js module integration for Nuxt.js - Build dApps easier!

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-web3` dependency to your project

```bash
yarn add nuxt-web3 # or npm install nuxt-web3
```

2. Add `nuxt-web3` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    "nuxt-web3",

    // With options
    [
      "nuxt-web3",
      {
        /* module options */
      }
    ]
  ];
}
```

## nuxt-web3 Configuration

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

If you want to use default ethereum support by browser :

```js
window.web3 = new this.$Web3(ethereum);
//or
window.web3 = new this.$Web3(window.ethereum);
```

If you want to use configuration from nuxt.config.js.

```js
window.web3 = new this.$web3;
```

More example usage [click here](./example/pages/index.vue)

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) fauzan121002

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-web3/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-web3
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-web3.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-web3
[license-src]: https://img.shields.io/npm/l/nuxt-web3.svg
[license-href]: https://npmjs.com/package/nuxt-web3
