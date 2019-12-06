<template>
  <div class="top-header-container">
    <div class="headers">header</div>
  </div>
</template>

<script>
export default {
  name: "top-header"
};
</script>
<style lang="stylus" scoped>
.headers
  width 100%
  height 50px
  position fixed
  top 0
  left 0
  right 0
  border 1px solid green
  text-align center
  z-index 1
</style>
