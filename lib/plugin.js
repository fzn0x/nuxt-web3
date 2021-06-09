const Web3 = require("web3");

export default (ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = (ctx.$config && ctx.$config.web3) || {};
  // provider
  const provider = runtimeConfig.provider || "<%= options.provider || '' %>";

  const web3 = new Web3(provider);
  ctx.$web3 = web3;
  inject("web3", web3);
  ctx.$Web3 = Web3;
  inject("Web3", Web3);
};
