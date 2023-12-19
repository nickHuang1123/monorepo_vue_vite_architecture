<template>
  <el-row class="header" justify="start" align="middle">
    <slot></slot>
  </el-row>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  width: -webkit-fill-available;
  background: #ffa1a1;
  color: aliceblue;
  height: 50px;
  padding: 0px 20px;
}
</style>