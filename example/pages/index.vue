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
        // do something..
      }
    },
    async isEthereumSupported() {
      if (window.ethereum) {
        window.web3 = new this.$Web3(window.ethereum);
        try {
          // Request account access
          await window.ethereum.enable();
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
