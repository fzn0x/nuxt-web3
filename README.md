<div align="center">
  
![nuxt-web3](https://api.nuxtjs.org/api/ipx/s_80,f_webp/gh/nuxt/modules/main/website/public//icons/web3js.svg)

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
  
</div>

> Web3.js module integration for Nuxt

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

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-web3/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-web3
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-web3.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-web3
[license-src]: https://img.shields.io/npm/l/nuxt-web3.svg
[license-href]: https://npmjs.com/package/nuxt-web3
