# nuxt-web3

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Codecov][codecov-src]][codecov-href]
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
[codecov-src]: https://img.shields.io/codecov/c/github/fauzan121002/nuxt-web3.svg
[codecov-href]: https://codecov.io/gh/fauzan121002/nuxt-web3
[license-src]: https://img.shields.io/npm/l/nuxt-web3.svg
[license-href]: https://npmjs.com/package/nuxt-web3
