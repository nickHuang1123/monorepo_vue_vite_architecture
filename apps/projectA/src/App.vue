<template>
  <p-header>
    popo Header | From @packages/components
  </p-header>
  <main>
    <un-known stop />
  </main>
  <p-footer>
    popo Footer | From @packages/components
  </p-footer>
</template>


<script setup>
import { PHeader, PFooter, UnKnown } from '@packages/components';
import '@packages/components/style';

import { test } from '@packages/utils';
console.log(test());
</script>