<template>
  <p-header>
    Header | From @packages/components
  </p-header>
  <main>
    <un-known stop />
  </main>
  <p-footer>
    Footer | From @packages/components
  </p-footer>
</template>

<script setup>
import pHeader from './layouts/Header.vue';
import pFooter from './layouts/Footer.vue';
import unKnown from './components/UnKnown.vue';
</script>

<style lang="scss">
* {
  font-family: Arial, Helvetica, sans-serif;
}
body {
  background: #ffe9e9;
}
</style>

