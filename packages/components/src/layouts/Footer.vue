<template>
  <el-row class="footer" wrap justify="center" align="middle">
    <slot></slot>
  </el-row>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: -webkit-fill-available;
  background: #ffc2c2;
  height: 50px;
  padding: 0px 20px;
}
</style>