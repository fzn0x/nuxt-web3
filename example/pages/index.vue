<template>
  <div>
    Is Ethereum Supported : {{ ethereumSupported }}
    <button @click="contractConnect">
      Connect to Smart Contract
    </button>
  </div>
</template>

<script>
import abi from "../abi.js";

export default {
  data() {
    return {
      contractAddress: "0x000000000000000000000000", // Contract Address.
      ethereumSupported: false
    };
  },
  async mounted() {
    this.ethereumSupported = await this.isEthereumSupported();
  },
  methods: {
    async contractConnect() {
      if (this.isEthereumSupported()) {
        // Ready to use Web3.js!
        // Example Usage :
        // let data = await this.getProduct(100);
        // console.log(data);
      }
    },
    // async getProduct(upc) {
    //   let contract = new window.web3.eth.Contract(abi, this.contractAddress);
    //   let message = await contract.methods.getProduct(upc).call();
    //   return message;
    // },
    async isEthereumSupported() {
      if (window.ethereum) {
        window.web3 = new this.$Web3(ethereum);
        // Using provider setting from nuxt config :
        // window.web3 = new this.$web3;

        try {
          // Request account access
          await ethereum.enable();
          console.log("This browser is supported for ethereum");
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      // Non-decentralized app browsers...
      else {
        console.log(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    }
  }
};
</script>
