<template>
  <div>
    Is Ethereum Supported : {{ ethereumSupported }}
    <button @click="contractConnect">
      Connect to Smart Contract
    </button>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const ethereumSupported = ref(false);
console.log(nuxtApp.$test);
</script>
