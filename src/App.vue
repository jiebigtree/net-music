<template>
  <div id="app">
    <router-view></router-view>
    <tab></tab>
  </div>
</template>
<script>
import Tab from "./components/tab.vue";

export default {
  components: {
    Tab
  }
};
</script>
<style lang="stylus">
#app
  font-family: 'dengxian';
  background-color blue
</style>
