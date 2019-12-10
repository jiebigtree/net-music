<template>
  <div id="app">
    <router-view></router-view>
    <player></player>
    <tab></tab>
  </div>
</template>
<script>
import Tab from "./components/tab.vue";
import player from "./views/playing.vue";
export default {
  components: {
    Tab,
    player
  }
};
</script>
<style lang="stylus">
#app
  font-family: 'dengxian';
</style>
